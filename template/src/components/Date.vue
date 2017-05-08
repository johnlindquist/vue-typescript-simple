<template>
  <div class="container">
    <h1>Date Component</h1>
    <div>{{message}}</div>
    <div>{{feedback}}</div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { State } from 'vuex-class'

@Component({})
export default class extends Vue {
  @State message
  @State feedback
}
</script>
<style scoped>
.container {
  outline: 2px dashed blue;
  padding: 2rem;
}
</style>
