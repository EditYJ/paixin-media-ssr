import { initialSSRDevProxy } from 'ssr-server-utils'
import { Application } from 'egg'
import dotenv = require('dotenv')
class AppBootHook {
  app: Application
  constructor(app) {
    this.app = app
    if (process.env.NODE_ENV === 'development') {
      dotenv.config({ path: '.env.development' })
    } else {
      dotenv.config({ path: '.env.production' })
    }
  }

  async didReady() {
    await initialSSRDevProxy(this.app)
  }
}

export default AppBootHook
