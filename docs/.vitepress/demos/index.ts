import { App } from 'vue';
import BasicExample from './BasicExample.vue';

export default (app: App) => {
  app.component('BasicExample', BasicExample)
}
