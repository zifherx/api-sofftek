import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import {configure as serverlessExpress} from '@vendia/serverless-express'

let cachedServer;

export const handler = async (event, context) => {
    if(!cachedServer){
        const nestApp = await NestFactory.create(AppModule)
        await nestApp.init()
        cachedServer = serverlessExpress({
            app: nestApp.getHttpAdapter().getInstance()
        })
    }

    return cachedServer(event, context)
}