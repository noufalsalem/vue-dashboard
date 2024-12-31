<script setup>
import { useDarkMode } from "../composables/use-dark-mode";

const { isDarkMode, toggleDarkMode } = useDarkMode();
</script>

<template>
  <button @click="toggleDarkMode" class="bg-gray-800 text-white p-2 rounded">
    <font-awesome-icon v-if="isDarkMode" :icon="['fas', 'sun']" />
    <font-awesome-icon v-else :icon="['fas', 'moon']" />
  </button>
</template>
