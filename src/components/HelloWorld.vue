<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <main class="text-center">
    <h1>{{ msg }}</h1>

    <p class="text-green-500">
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">
        Vite Documentation
      </a>
      |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>

    <button class="my-5" type="button" @click="count++">count is: {{ count }}</button>
    <p class="text-green-500">
      Edit
      <code>components/HelloWorld.vue</code> to test hot module replacement.
    </p>
  </main>
</template>
