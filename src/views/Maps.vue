<template lang="pug">
h1 Mapping Movement: Maps
p.buttonholder
  button.sortButtons.button.small(type="button" @click="switchSort('slug')" ) Sort by Year
  button.sortButtons.button.small(type="button" @click="switchSort('title')" ) Sort by Title
ul
  li(v-for="map in orderedMaps")
    router-link(:to="`/maps/${map.slug}`") {{map.title}}
</template>

<script>

import _ from 'lodash'
import mapContent from '../data/mapContent_2'

export default {
  data() {
    return {
      mapContent,
      sorter: 'title',
    }
  },
  computed: {
    orderedMaps() {
      return _.sortBy(this.mapContent, this.sorter)
    },
  },
  methods: {
    switchSort(sortVector) {
      this.sorter = sortVector
    },
  },
}
</script>

<style lang="scss" scoped>
.frame {
  height: 22rem;
  max-width: 100%;
}
.buttonholder {
  text-align: center;
}
.sortButtons {
  margin: 0 5px;
}
</style>
