<template lang="pug">
h2 {{this.pageData.title}}
.frame#tify
p.title-box(style="margin-top: -.5rem") 
  ul.block-list.map-list
    li(v-for="(mapArray, index) in this.pageData.maps" :class="manifestIndex !== index ? 'inactive' : ''")
      a(
        href="javascript:;"
        @click="loadManifest(index)"
      )
        b {{mapArray[1]}}
  p.full-citation {{this.pageData.maps[this.manifestIndex][2]}}
article.article
  .subsection(v-for="(sentence, index) in this.pageData.content")
    p {{sentence}}
router-link.return-link(:to="`/essays/${this.pageData.referringEssaySlug}`") Return to 
  em {{this.pageData.referringEssay}}
</template>

<script>
import mapContent from '../data/mapContent_2'

// console.log(pageData)
let manifestIndex = 0
let pageData, defaultManifestUrl, poop
export default {
  data() {
    return {
      mapContent,
      pageData: mapContent.filter((i) => {
        poop = mapContent.filter(c => `/maps/${c.slug}` === this.$route.path)[0]
        console.log(i.title)
        defaultManifestUrl = `https://iiif.archivelab.org/iiif/${poop.maps[0][0]}/manifest.json`
        console.log(defaultManifestUrl)
        // console.log(`${this.$route.path} : /maps/${i.slug}`)
        // console.log(`/maps/${i.slug}` === this.$route.path ? "yes" : "no")
        return `/maps/${i.slug}` === this.$route.path
    })[0],
      // defaultManifestUrl: `https://iiif.archivelab.org/iiif/${pageData.maps[0][0]}/manifest.json`,
      manifestUrl: defaultManifestUrl,
      tify: null,
      manifestIndex,
      // pageData,
      showCitation: false,
    }
  },
  mounted() {
    this.loadManifest(this.manifestIndex)
  },
  beforeUnmount() {
    this.tify.destroy()
  },
  methods: {
    loadManifest(manifestIndex) {
      this.manifestIndex = manifestIndex
      this.manifestUrl = `https://iiif.archivelab.org/iiif/${this.pageData.maps[manifestIndex][0]}/manifest.json`
      this.showCitation = !this.showCitation

      this.tify = new Tify({
        container: '#tify',
        manifestUrl: this.manifestUrl,
        // pages: this.manifestUrl === defaultManifestUrl ? [2, 3] : [1],
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/settings';
.frame {
  width: 44rem;
  height: 22rem;
  left: 50%;
  transform: translate(-50%);
}
.return-link {
  display: block;
  width: 100%;
  text-align: center;
  cursor: pointer;
}

.sample-manifests {
  .current {
    background: $link-color;
    color: $white;

    a {
      color: inherit;

      &:focus,
      &:hover {
        background: $shine;
      }
    }
  }
}
</style>
