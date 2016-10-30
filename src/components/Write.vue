<template>
  <div class="hello">
    <input class=""  v-model="title" placeholder="Title">
    <textarea class="" v-model="body" placeholder="Tell your story..."></textarea>
    <a class="" @click="addNewStory">
      <span>Save</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'write',
  props: ['state'],
  data () {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    addNewStory () {
      let newStory = {
        id: Date.now(),
        title: this.title,
        body: this.body
      }
      this.state.storys.push(newStory)
      this.$router.push('/home')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
