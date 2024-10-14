import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import WuxianFancyzones from '../../../src/index'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(WuxianFancyzones)
  }
} satisfies Theme