<template>
  <div class="hello">
    <div class="" v-for="story in state.storys">
      <router-link :to="{ name: 'story', params: { id:story.id }}">
        <h3 class="title is-3 title-head">{{ story.title }}</h3>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: ['state'],
  data () {
    return {}
  }
}
</script>
<style scoped>
</style>
