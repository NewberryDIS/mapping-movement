<template lang="pug">
// images will have to be pageMaps.imageUrl
h1  {{ this.pageData.title }}
h2 by {{ this.pageData.author }}
.main
  article.article
    section(v-for="(content, topIndex) in this.pageData.content"  )
      .subsection(v-for="(paragraph, index) in content" )
        router-link.imgWrapper(v-if="index === 0 && topIndex < this.pageMaps.length"  :to="'/maps/' + this.pageMaps[topIndex].slug" )
          .inlineImage( :style="cssVars('https://iiif.archivelab.org/iiif/' + this.pageMaps[topIndex].maps[0][0] + '$0/pct:20,0,80,100/,1500/0/default.jpg')"  )
          p.small {{ this.pageMaps[topIndex].title }}
        h3(v-if="index === 0"  ) {{paragraph}}
        p(v-else) {{paragraph}}

  .sidebar
    .map(v-for="map in this.pageMaps")
      router-link.sidebarlink(:to="`/maps/${map.slug}`")
        img.sidebar-map-image(:src="'https://iiif.archivelab.org/iiif/' + map.maps[0][0] + '$0/full/,300/0/default.jpg'")
        p.small {{map.title}}

</template>

<script>
import essayContent from '../data/essayContent'
import mapContent from '../data/mapContent_2'

export default {
  data() {
    return {
      id: this.$route.params.id,
      essayContent,
      mapContent,
      counter: 0,
      imgCounter: 0,
      bgImage: '',
    }
  },
  computed: {
    pageData() { return this.essayContent.filter((essay) => essay.slug === this.id)[0] },
    totalLength() { return this.pageData.content.reduce((acc, subArr) => acc + subArr.length, 0) },
    pageMaps() { return this.mapContent.filter((map) => map.referringEssay === this.pageData.title) },
    pictPunct() { return Math.ceil(this.totalLength / this.pageMaps.length) },

  },
  methods: {
    log(text) {
      console.log(text)
    },
    cssVars(imageUrl) {
      return {
        '--bg': 'url(' + imageUrl + ')',
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .main {
    display: flex;
    height: 100%;
    align-self: flex-start
  }
  .sidebar {
    flex: 1;
    // position: sticky;
    top: 10px;
    align-self: flex-start;
    margin: 0 0 0 20px;
    text-align: center;
    // height: 90vh;
  }
  .sidebarlink {
    display: block;
    margin-bottom: 10px;
  }
  .sidebarlink .small {
    line-height: 0.65rem;
  }
  .imgWrapper {
    display: block;
    width: 100%;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    border: 1px solid black;
  }
  .sidebar-map-image,
  .inlineImage {
    width: 80%;
    padding: 10px;
    margin:  auto;
  }
  .inlineImage {
    height: 40vh;
    min-height: 20vh;
    width: 100%;
    background: var(--bg);
    background-position: center;
    background-attachment: fixed;
    // width: 40%;
  }
  .article {
    flex: 4;
    line-height: 1.6em;
  }
  .sidebar, .article {
    padding: 0 40px;
  }
  .flexspan {
    display: flex;
    justify-content: space-between;
  }
  .flexspan a {
    flex: 1;
  }
  .flexspan span {
    text-align: right;
  }
  .frame {
    height: 22rem;
    max-width: 100%;
  }
  ul {
    list-style-type: none;
  }
  dt {
    font-weight: bold;
    padding-right: 37px;
  }
  dl {
    margin-bottom: 37px;
  }
</style>
