/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '../store/index'
import router from '../router'
import { plugin, defaultConfig } from '@formkit/vue'
import formKitConfig from '@/formkit.config'
// Types
import type { App } from 'vue'

export function registerPlugins(app: App) {
  app.use(vuetify).use(router).use(pinia)
  app.use(plugin, defaultConfig(formKitConfig))
}
