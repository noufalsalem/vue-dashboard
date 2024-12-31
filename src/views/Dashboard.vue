<script setup>
import { watchEffect } from "vue";
import Table from "../components/Table.vue";
import Modal from "../components/Modal.vue";
import { useModal } from "../composables/use-modal";

const {
  isModalOpen,
  currentPost,
  openModal,
  closeModal,
  comments,
  isCommentsLoading,
} = useModal();
</script>

<template>
  <div class="p-4">
    <Table @openModal="openModal" />
    <Modal
      :isOpen="isModalOpen"
      :currentPost="currentPost"
      :comments="comments"
      :isLoading="isCommentsLoading"
      @closeModal="closeModal"
    />
  </div>
</template>
