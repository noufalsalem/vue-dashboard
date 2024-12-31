<script setup>
import DarkModeToggle from "./DarkModeToggle.vue";
const emit = defineEmits();

const props = defineProps({
  isSidebarOpen: Boolean,
});

const toggleSidebar = () => {
  emit("toggleSidebar");
};
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow z-10 px-4 py-3 transition-all',
      isSidebarOpen ? 'pl-64' : 'pl-4',
    ]"
  >
    <div class="flex justify-between items-center">
      <div class="flex gap-4 items-center">
        <button @click="toggleSidebar" class="text-gray-700 dark:text-gray-300">
          <font-awesome-icon :icon="['fas', 'bars']" />
        </button>
        <h1 class="text-lg font-bold text-gray-800 dark:text-white">
          Dashboard
        </h1>
      </div>

      <DarkModeToggle />
    </div>
  </header>
</template>
