<template lang="pug">
  //- Get your current location and display a map
  //- 現在地を取得して地図を表示
  GmapMap(
    :center="center"
    :zoom="zoom"
    map-type-id="terrain"
    style="width: 100%"
  )
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 0, lng: 0 },
      zoom: 17,
    }
  },
  async mounted() {
    const mapPosTemp = await this.getCurrentPosition()
    const currentPos = {
      lat: mapPosTemp.coords.latitude,
      lng: mapPosTemp.coords.longitude,
    }
    this.center = currentPos
  },
  methods: {
    getCurrentPosition() {
      return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.vue-map-container {
  height: calc(100vh - 64px);
}
</style>
