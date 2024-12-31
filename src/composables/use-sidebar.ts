import { ref, onMounted } from "vue";

export const useSidebar = () => {
  const isSidebarOpen = ref(false);

  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
    localStorage.setItem(
      "sidebar",
      isSidebarOpen.value ? "enabled" : "disabled"
    );
  };

  onMounted(() => {
    const savedMode = localStorage.getItem("sidebar");
    isSidebarOpen.value = savedMode === "enabled";
  });

  return { isSidebarOpen, toggleSidebar };
};
