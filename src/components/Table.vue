<script setup>
import { ref, onMounted, computed } from "vue";
const posts = ref([]);
const postsPerPage = 10;
const currentPage = ref(1);
const totalPages = computed(() => Math.ceil(posts.value.length / postsPerPage));
const isLoading = ref(false);
const error = ref("");

const emit = defineEmits();

const paginatedItems = computed(() => {
  if (!posts.value.length) return;
  const start = (currentPage.value - 1) * postsPerPage;
  const end = currentPage.value * postsPerPage;
  return posts.value.slice(start, end);
});

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const truncateText = (text, limit) => {
  return text.length > limit ? text.substring(0, limit) + "..." : text;
};

const toggleFullText = (postId) => {
  const post = posts.value.find((post) => post.id === postId);
  if (post) {
    post.showFullText = !post.showFullText;
  }
};

const fetchPosts = async () => {
  isLoading.value = true;

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error(`Failed: ${response.statusText}`);
    }

    const data = await response.json();
    posts.value = data.map((post) => ({ ...post, showFullText: false }));
  } catch (err) {
    if (err instanceof Error) {
      error = `Error: ${err.message}`;
    } else {
      error = "Unknown error occurred";
    }
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchPosts();
});

const handlePostClick = (post) => {
  emit("openModal", post);
};
</script>

<template>
  <div v-if="posts && posts.length" class="h-full overflow-auto">
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in paginatedItems" :key="post.id">
          <td
            class="border px-4 py-2 cursor-pointer text-blue-600 dark:text-blue-400 hover:underline"
            @click="handlePostClick(post)"
          >
            {{ post.title }}
          </td>
          <td class="px-4 py-2">
            {{ post.showFullText ? post.body : truncateText(post.body, 50) }}
            <button
              @click="toggleFullText(post.id)"
              class="text-blue-600 dark:text-blue-400 ml-2"
            >
              {{ post.showFullText ? "Show Less" : "Read More" }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="mt-4 flex justify-between">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span class="text-gray-800 dark:text-gray-200"
        >Page {{ currentPage }}</span
      >
      <button @click="nextPage" :disabled="currentPage === totalPages">
        Next
      </button>
    </div>
  </div>
  <div v-else-if="isLoading">Loading...</div>
  <div v-else>No posts</div>
</template>

<style scoped>
table {
  @apply w-full border-collapse border border-gray-200 dark:border-gray-700;
}

th {
  @apply border border-gray-200 dark:border-gray-700 px-4 py-2;
}

thead {
  @apply bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300;
}

tbody tr {
  @apply hover:bg-gray-50 dark:hover:bg-gray-700;
}

td {
  @apply border border-gray-200 dark:border-gray-700 px-4 py-2;
}

div > button {
  @apply px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300;
}
</style>
