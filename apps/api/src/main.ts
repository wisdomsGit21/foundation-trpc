import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as express from 'express'
import { trpcExpress } from '@foundation-trpc/trpc-server'
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  const expressApp = express()
  // Use the tRPC middleware
  expressApp.use('/trpc', trpcExpress)
  app.use(expressApp)
  await app.listen(process.env.PORT ? parseInt(process.env.PORT) : 8080)
}
bootstrap()
