import { ref } from "vue";
import type { Post, Comment } from "./types";

export const useModal = () => {
  const isModalOpen = ref(false);
  const currentPost = ref<Post | null>(null);
  const comments = ref<Comment[]>([]);
  const isCommentsLoading = ref(false);

  const openModal = async (post: Post) => {
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

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${currentPost.value.id}`
    );

    const data = await response.json();

    comments.value = data;

    isCommentsLoading.value = false;
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
