import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { ClickableImages } from "./quartz/plugins/transformers"

const config = await loadQuartzConfig()

// Add internal transformer plugin
if (config.plugins?.transformers) {
  config.plugins.transformers.push(ClickableImages())
}

export default config
export const layout = await loadQuartzLayout()
