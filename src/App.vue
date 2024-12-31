<script setup lang="ts">
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import { useSidebar } from "./composables/use-sidebar";

const { isSidebarOpen, toggleSidebar } = useSidebar();
</script>

<template>
  <div class="bg-white dark:bg-gray-900 min-h-screen flex flex-col">
    <Header @toggleSidebar="toggleSidebar" :isSidebarOpen="isSidebarOpen" />
    <div class="flex flex-1">
      <Sidebar :isOpen="isSidebarOpen" />

      <main
        class="flex-1 transition-all duration-300 pt-16"
        :class="isSidebarOpen ? 'ml-64' : 'ml-0'"
      >
        <router-view />
      </main>
    </div>
  </div>
</template>
