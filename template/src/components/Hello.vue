<template>
  <div class="container">
    <h1>Hello Component</h1>
    <h2>{{greeting}}</h2>
    <button @click="updateMessage">{{message}}</button>
  
    <div>
      <input type="text" :value="feedback" @input="updateFeedback">
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'

@Component({})
export default class extends Vue {
  @Prop() greeting
  @State message
  @State feedback
  @Action updateMessage
  @Action updateFeedback
}
</script>
<style scoped>
.container {
  outline: 1px solid black;
  padding: 2rem;
}
</style>
