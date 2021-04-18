import { App } from 'vue'
import { ElButton } from 'element-plus'

export function useElementUI(app: App) {
  app.use(ElButton)
}
