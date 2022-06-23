<template lang="pug">
h1 {{this.pageData.title}}
.wide
  .frame#tify
p.caption.wide(v-for="map, index in this.pageData.maps")
  p.caption-row(v-if="index === 0")
    span.mapTitle {{map[1]}}
    span.mapCitation {{map[2]}}
    //- span.img-title(@click="loadManifest(this.pageData.manifUrl)") {{this.pageData.title }}
  p.caption-row(v-else)
    p.addl-map Additional Maps:
    span.addl-map-link(@click="loadManifest(map[0])") {{map[1] }}

h3 {{this.pageData.selgal}}
article.article
  .subsection(v-for="(sentence, index) in this.pageData.content")
    p {{sentence}}

</template>

<script>
import mapContent from '../data/mapContent_2'

console.log()
// const defaultManifestUrl = 'https://collections.newberry.org/IIIF3/Presentation/Manifest/2KXJ8ZWQE08R'
// const defaultManifestUrl = 'https://iiif.archivelab.org/iiif/asdf/manifest.json'

// https://collections.newberry.org/IIIF3/Presentation/Collection/2KXJ8ZYFS6A
// https://collections.newberry.org/IIIF3/Presentation/Manifest/2KXJ8ZYFS6A
// collections.newberry.org/IIIF3/Presentation/Canvas/2KXJ8ZYFS6A

export default {
  data() {
    return {
      tify: null,
      id: this.$route.params.id,
      mapContent,
      // pageData: mapContent.filter((e) => e.slug === this.id)[0],
      // manifUrl: `https://iiif.archivelab.org/iiif/${this.pageData.maps[0][0]}/manifest.json`,
      iiifId: '',
    }
  },
  mounted() {
    this.tify = new Tify({
      container: '#tify',
      // https://iiif.archivelab.org/iiif/nby_911991/manifest.json
      // https://iiif.archivelab.org/iiif/nby_911991/info.json
      manifestUrl: this.manifUrl,
      pageLabelFormat: 'P',
      urlQueryKey: 'tify',
    })
    // this.tify = eval(`${js}\ntify`) // eslint-disable-line no-eval
  },
  beforeUnmount() {
    this.tify.destroy()
  },
  computed: {
    pageData() {
      // console.log(this.id)
      // const mContent = this.mapContent.filter((e) => e.slug === this.id)[0]
      // this.manifUrl = mContent.maps[0][0]
      return this.mapContent.filter((e) => e.slug === this.id)[0]
    },
    manifUrl() {
      return `https://iiif.archivelab.org/iiif/${this.pageData.maps[0][0]}/manifest.json`
    },
  },
  methods: {
    loadManifest(manifUrlParam) {
      this.iiifId = `https://iiif.archivelab.org/iiif/${manifUrlParam}/manifest.json`
      console.log(this.iiifId)
      // console.log(this.manifUrl)
      // eslint-disable-next-line no-new, no-undef
      this.tify = new Tify({
        container: '#tify',
        manifestUrl: this.iiifId,
        // pages: this.manifUrl === defaultManifestUrl ? [2, 3] : [1],
      })
    },
    log(text) {
      console.log(text)
    },
  },
}
</script>

<style lang="scss" scoped>
.frame {
  height: 95vh;
  max-width: 100%;
}

</style>
