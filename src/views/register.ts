import { App } from 'vue'
import PublicView from './public-view.vue'
export function registerViews(app: App): void {
  app.component('PublicView', PublicView)
}
