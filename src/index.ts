import type { App } from 'vue';
import WuxianFancyzones from './components/WuxianFancyzones';

const plugin = {
  install(app: App) {
    app.component('WuxianFancyzones', WuxianFancyzones);
  }
}

export { WuxianFancyzones };

export default plugin