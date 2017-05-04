<template>
  <div>
    <h1>{{greeting}}</h1>
    <button @click="updateMessage">{{message}}</button>
  </div>
</template>
<script lang="ts">
import { Vue, Component, state, action, prop } from 'vue-typescript-decorators'

@Component({})
export default class extends Vue {
  @prop greeting
  @state message
  @action updateMessage
}
</script>