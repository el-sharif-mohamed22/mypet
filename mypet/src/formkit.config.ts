import type { DefaultConfigOptions } from '@formkit/vue'
import '@formkit/themes/genesis'
import { genesisIcons } from '@formkit/icons'

const config: DefaultConfigOptions = {
  icons: { ...genesisIcons }
}

export default config
