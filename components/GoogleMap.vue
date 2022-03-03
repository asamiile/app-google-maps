<template>
  <GmapMap
    :center="{ lat: 10, lng: 10 }"
    :zoom="7"
    map-type-id="terrain"
    style="width: 100%"
  >
    <GmapMarker
      v-for="(m, index) in markers"
      :key="index"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center = m.position"
    />
  </GmapMap>
</template>

<style lang="scss" scoped>
.vue-map-container {
  height: calc(100vh - 64px);
}
</style>
