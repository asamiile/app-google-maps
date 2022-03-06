<template lang="pug">
  GmapMap(
    :center="center"
    :zoom="zoom"
    map-type-id="terrain"
    style="width: 100%"
  )
    GmapMarker(
      v-for="(m, index) in markers"
      :key="index"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center = m.position"
    )
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 35.658600419869735, lng: 139.70182054536792 },
      markers: [
        {
          position: {
            lat: 35.658600419869735,
            lng: 139.70182054536792,
          },
        },
      ],
      zoom: 17,
    }
  },
}
</script>

<style lang="scss" scoped>
.vue-map-container {
  height: calc(100vh - 64px);
}
</style>
