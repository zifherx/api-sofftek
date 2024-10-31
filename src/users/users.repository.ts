import { AttributeValue, DeleteItemCommand, DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { ConfigService } from "@nestjs/config";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";

@Injectable()
export class UserRepository{
    private readonly dynamoDbClient:DynamoDBDocumentClient

    constructor(private configService: ConfigService){
        const client = new DynamoDBClient({
            region: this.configService.get('AWS_REGION'),
            credentials: {
                accessKeyId: this.configService.get('AWS_ACCESS_KEY'),
                secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY')
            }
        })

        this.dynamoDbClient = DynamoDBDocumentClient.from(client)
    }
    
    async findAll():Promise<User[]>{
        const result:User[] = []
        
        const command = new ScanCommand({
            TableName:this.configService.get('DYNAMODB_USERS_TABLE')
        })
        
        const response = await this.dynamoDbClient.send(command);
        
        if(response.Items.length > 0){
            response.Items.forEach(item => {
                result.push(User.newInstanceFromDynamoDBObject(item))
            })
        }
        return result
    }

    async newOne(data:User){
        const itemObject:Record<string,AttributeValue>={
            userId: { S: data.userId },
            name: { S: data.name },
            email: { S: data.email },
            role: { S: data.role },
            country: { S: data.country },
            age: { N: String(data.age) },
            isActive: { S: String(data.isActive) },
            createdAt: { N: String(data.createdAt.getTime())     
            },
        }

        if(data.updatedAt){
            itemObject.updatedAt = { N: String(data.updatedAt.getTime())}
        }

        const command = new PutItemCommand({
            TableName: this.configService.get('DYNAMODB_USERS_TABLE'),
            Item: itemObject
        })

        await this.dynamoDbClient.send(command)
        return data;
    }

    async deleteById(userId: string){
        const command = new DeleteItemCommand({
            TableName: this.configService.get('DYNAMODB_USERS_TABLE'),
            Key: { userId: { S: userId}},
            ReturnConsumedCapacity: 'TOTAL',
            ReturnValues: 'ALL_OLD'
        })

        const result = await this.dynamoDbClient.send(command)

        if(result.Attributes){
            return true
        }
        return false;
    }
}