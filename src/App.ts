import Component from 'vue-class-component'
import Vue from 'vue'
import { Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'

@Component
export default class App extends Vue {
  dialog = false

  @Watch('$route')
  onRouteChange (to: Route) {
    this.dialog = to.meta.dialog
  }
}
