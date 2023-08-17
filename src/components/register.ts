import { App } from 'vue'
import VCard from './v-card.vue'
export function registerComponents(app: App): void {
  app.component('VCard', VCard)
}
