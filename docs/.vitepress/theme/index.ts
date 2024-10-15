import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import demos from '../demos'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(demos)
  }
} satisfies Theme