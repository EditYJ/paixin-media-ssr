import { App } from 'vue'
import { ElButton, ElIcon } from 'element-plus'

export function useElementUI(app: App) {
  app.use(ElButton).use(ElIcon)
}
