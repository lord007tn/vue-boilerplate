<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from './stores/app'

const appStore = useAppStore()
const { hydrating } = storeToRefs(appStore)
</script>

<template>
  <div v-if="hydrating" class="fixed z-50">Loading</div>
  <router-view v-else-if="!hydrating"></router-view>
</template>

