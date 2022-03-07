<template lang="pug">
  v-app(dark)
    v-app-bar(:clipped-left='clipped' color='#fff' fixed flat app)
      v-toolbar-title
        nuxt-link(to='/')
          | app-google-map
      v-spacer
      v-btn(icon, @click.stop='rightDrawer = !rightDrawer')
        v-icon(color='#29282d')
          | mdi-menu
    v-main
      Nuxt
    v-navigation-drawer(v-model='rightDrawer' :right='right' color='#f0ede9' temporary fixed)
      v-list
        v-list-item(to='/', color='#29282d')
          | basic
        v-list-item(to='googlemaps-currentlocation', color='#29282d') 
          | current location
        v-list-item(to='googlemaps-pin', color='#29282d')
          | pin and info window
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      fixed: false,
      right: true,
      rightDrawer: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.nuxt-link-active {
  text-decoration: none;
  color: #29282d;
}

.theme--dark.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #29282d;
}
</style>
