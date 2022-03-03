import { inspect } from 'util'
import Vue from 'vue'
import GmapVue from 'gmap-vue'

export default function ({ $config }) {
  console.log(inspect(GmapVue))

  Vue.use(GmapVue, {
    load: {
      key: $config.googlemapsApi,
      libraries: 'places,visualization,drawing',
    },
    installComponents: true,
  })
}
