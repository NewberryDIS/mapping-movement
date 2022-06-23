<template lang="pug">
h1 Mapping Movement: Essays
ul
  li(v-for="essay in orderedEssays")
    dl
      dt
        router-link(:to="'/essays/' + essay.slug") {{essay.title}}
      dd by {{essay.author}}
      dd {{essay.desc}}
</template>

<script>
import _ from 'lodash'
import essayContent from '../data/essayContent'

export default {
  data() {
    return {
      tify: null,
      essayContent,
    }
  },
  computed: {

    orderedEssays() {
      return _.sortBy(this.essayContent, 'title')
    },
  },
}
</script>

<style lang="scss" scoped>

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
