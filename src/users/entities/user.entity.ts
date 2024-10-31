import { CreateUserDto } from "../dto/create-user.dto"
import {v4 as uuidv4} from 'uuid'

export class User {
    userId: string
    name: string
    email: string
    role: string
    age: number
    country: string
    isActive: Boolean
    createdAt: Date
    updatedAt?: Date

    static newInstanceFromDTO(data: CreateUserDto){
        const result = new User()
        result.userId = uuidv4()
        result.name = data.name
        result.email = data.email
        result.role = data.role
        result.age = data.age
        result.country = data.country
        result.isActive = data.isActive
        result.createdAt = new Date()

        return result;
    }
    
    static newInstanceFromDynamoDBObject(data: any): User {
        const result = new User();
        result.userId = data.userId
        result.name = data.name
        result.email = data.email
        result.role = data.role
        result.age = data.age
        result.country = data.country
        result.isActive = data.isActive
        result.createdAt = new Date(Number(data.createdAt))
        if(data.updatedAt){
            result.updatedAt = new Date(Number(data.updatedAt))
        }
        return result
    }
}
