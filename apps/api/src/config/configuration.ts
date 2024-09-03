import * as process from 'node:process'

export default () => ({
  port: parseInt(process.env.PORT!) || 4000,
})
