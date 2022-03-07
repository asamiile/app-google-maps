<template lang="pug">
  //- Show pins and info windows
  //- ピンとインフォウィンドウを表示
  GmapMap(
    ref="gmap"
    map-type-id="terrain"
    :center="center"
    :zoom="zoom"
    style="width: 100%"
  )
    GmapMarker(
      v-for="(m, index) in markers"
      :key="index"
      :position="m.position"
      :clickable="true"
      :draggable="false"
      :icon="m.pinicon"
      @click="toggleInfoWindow(index, m)"
    )
    GmapInfoWindow(
      :options="infoOptions"
      :position="infoWindowPos"
      :opened="infoWinOpen"
      @closeclick="infoWinOpen = false"      
    )
      .pa-2
        p.info-window-title.mb-3
          | {{ marker.title }}
        a.info-window-url(:href='marker.url', target='_blank')
          | {{ marker.url }}
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 35.66069052812246, lng: 139.6973464245699 },
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
      infoWindowPos: null,
      infoWinOpen: false,
      marker: {},
      markers: [],
      zoom: 17,
    }
  },
  async mounted() {
    await this.$gmapApiPromiseLazy()
    this.markers = [
      {
        title: 'WOMB',
        url: 'https://www.womb.co.jp/',
        pinicon: {
          url: '/images/pins/pin-gold.png',
          scaledSize: { width: 35, height: 50, f: 'px', b: 'px' },
        },
        position: {
          lat: 35.658753369628954,
          lng: 139.69493261412944,
        },
      },
      {
        title: 'Sound Museum Vision Tokyo',
        url: 'https://vision-tokyo.com/',
        pinicon: {
          url: '/images/pins/pin-gold.png',
          scaledSize: { width: 35, height: 50, f: 'px', b: 'px' },
        },
        position: {
          lat: 35.65819299275762,
          lng: 139.69720661784635,
        },
      },
      {
        title: 'contact ',
        url: 'https://www.contacttokyo.com/',
        pinicon: {
          url: '/images/pins/pin-gold.png',
          scaledSize: { width: 35, height: 50, f: 'px', b: 'px' },
        },
        position: {
          lat: 35.65861389405719,
          lng: 139.6976899248996,
        },
      },
      {
        title: 'WWW',
        url: 'https://www-shibuya.jp/',
        pinicon: {
          url: '/images/pins/pin-gold.png',
          scaledSize: { width: 35, height: 50, f: 'px', b: 'px' },
        },
        position: {
          lat: 35.66178847024378,
          lng: 139.698801270928,
        },
      },
      {
        title: 'R Lounge',
        url: 'https://rlounge.jp/',
        pinicon: {
          url: '/images/pins/pin-gold.png',
          scaledSize: { width: 35, height: 50, f: 'px', b: 'px' },
        },
        position: {
          lat: 35.66252558347304,
          lng: 139.6978760461971,
        },
      },
      {
        title: 'オルガンバー',
        url: 'http://www.organ-b.net/',
        pinicon: {
          url: '/images/pins/pin-gold.png',
          scaledSize: { width: 35, height: 50, f: 'px', b: 'px' },
        },
        position: {
          lat: 35.66250257477194,
          lng: 139.6977364709465,
        },
      },
      {
        title: 'EN-SOF TOKYO',
        url: 'http://en-sof.jp/',
        pinicon: {
          url: '/images/pins/pin-gold.png',
          scaledSize: { width: 35, height: 50, f: 'px', b: 'px' },
        },
        position: {
          lat: 35.66016391976044,
          lng: 139.69625817744426,
        },
      },
    ]
  },
  methods: {
    toggleInfoWindow(index, marker) {
      this.$refs.gmap.panTo(marker.position)
      this.infoWindowPos = marker.position
      this.marker = marker
      this.infoWinOpen = true
    },
  },
}
</script>

<style lang="scss" scoped>
.vue-map-container {
  height: calc(100vh - 64px);
}

.info-window-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #000;
}

.info-window-url {
  font-size: 1rem;
}
</style>
