import { ref } from "vue";
import type { Post, Comment } from "./types";

export const useModal = () => {
  const isModalOpen = ref(false);
  const currentPost = ref<Post | null>(null);
  const comments = ref<Comment[]>([]);
  const isCommentsLoading = ref(false);
  const error = ref<string | null>(null);

  const openModal = (post: Post) => {
    currentPost.value = post;
    isModalOpen.value = true;

    fetchComments();
  };

  const closeModal = () => {
    isModalOpen.value = false;
    currentPost.value = null;
    comments.value = [];
  };

  const fetchComments = async () => {
    if (!currentPost.value) return;
    isCommentsLoading.value = true;
    error.value = null;

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${currentPost.value.id}`
      );

      if (!response.ok) {
        throw new Error(`Failed fetch: ${response.statusText}`);
      }

      const data = await response.json();
      comments.value = data;
    } catch (err: unknown) {
      if (err instanceof Error) {
        error.value = `Error: ${err.message}`;
      } else {
        error.value = "Unknown error occurred";
      }
    } finally {
      isCommentsLoading.value = false;
    }
  };

  return {
    isModalOpen,
    currentPost,
    comments,
    openModal,
    closeModal,
    fetchComments,
  };
};
