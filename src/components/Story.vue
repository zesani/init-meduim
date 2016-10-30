<template>
  <div class="center-content">
    <h3 class="title is-3 title-head">{{ story.title }}</h3>
    <p class="subtitle is-5 body-content">{{ story.body}}</p>
  </div>
</template>

<script>
export default {
  name: 'story',
  props: ['state'],
  computed: {
    story () {
      let vm = this
      return vm.state.storys.find(story => story.id.toString() === vm.$route.params.id.toString())
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
