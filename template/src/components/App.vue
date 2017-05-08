<template>
  <div id="app">
    <img src="../assets/logo.png">
    <Hello :greeting="message"></Hello>
    <Date></Date>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import Hello from './Hello'
import Date from './Date'

@Component({
  components: {
    Hello,
    Date
  }
})
export default class extends Vue {
  message = 'Welcome to Your Vue.js App'
}
</script>
<style>
* {
  font-family: sans-serif;
}
</style>

