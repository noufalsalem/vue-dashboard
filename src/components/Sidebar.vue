<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { RouteNameEnum } from "../router/routes.enum";

const props = defineProps({
  isOpen: Boolean,
});
const router = useRouter();

const links = [
  { icon: "home", text: "Dashboard", route: RouteNameEnum.dashboard },
  { icon: "cog", text: "Settings", route: RouteNameEnum.settings },
];

const goToDesignatedRoute = (route) => {
  router.push(route);
  emit("toggleSidebar");
};
</script>

<template>
  <aside
    class="bg-gray-50 dark:bg-gray-700 h-screen fixed top-0 pt-16 transition-width duration-300"
    :class="isOpen ? 'w-64' : 'w-0'"
  >
    <nav v-if="isOpen" class="mt-4">
      <ul>
        <li v-for="link in links" :key="link.text" class="py-2 px-4">
          <button
            @click="goToDesignatedRoute(link.route)"
            class="text-gray-700 dark:text-gray-300 flex hover:bg-gray-50 dark:hover:bg-gray-700 justify-between items-center gap-4"
          >
            <font-awesome-icon :icon="['fas', link.icon]" />
            <p>{{ link.text }}</p>
          </button>
        </li>
      </ul>
    </nav>
  </aside>
</template>
