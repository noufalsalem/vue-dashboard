<script setup>
import { ref } from "vue";
const emit = defineEmits();
const props = defineProps({
  isOpen: Boolean,
  currentPost: Object,
  comments: Array,
  isLoading: Boolean,
});

const onClose = () => {
  emit("closeModal");
};
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
  >
    <div
      class="bg-white dark:bg-gray-800 p-4 rounded shadow w-96 max-h-[80vh] overflow-auto"
    >
      <h2 class="text-xl font-bold">{{ currentPost.title }}</h2>
      <p class="mt-2">{{ currentPost.body }}</p>
      <p class="mt-2 font-bold">Post by userId: {{ currentPost.userId }}</p>

      <div v-if="isLoading">Loading...</div>
      <div v-else-if="comments && comments.length" class="mt-4">
        <h3 class="font-bold text-lg mb-2">Comments</h3>
        <ul class="mt-2 space-y-4 overflow-y-auto max-h-56">
          <li
            v-for="comment in comments"
            :key="comment.id"
            class="border-b border-gray-300 pb-2"
          >
            <p class="text-sm text-gray-800 dark:text-gray-300 font-semibold">
              {{ comment.name }}
            </p>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ comment.body }}
            </p>
          </li>
        </ul>
      </div>
      <div v-else>No comments to show</div>

      <button @click="onClose" class="mt-4 px-4 py-2 bg-red-500 text-white">
        Close
      </button>
    </div>
  </div>
</template>
