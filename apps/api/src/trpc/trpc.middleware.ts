import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'
import { trpcExpress } from '@foundation-trpc/trpc-server'

@Injectable()
export class TrpcMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    trpcExpress(req, res, next)
  }
}
