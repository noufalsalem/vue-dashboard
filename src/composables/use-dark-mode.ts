import { ref, onMounted } from "vue";

export const useDarkMode = () => {
  const isDarkMode = ref(false);

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle("dark", isDarkMode.value);
    localStorage.setItem("darkMode", isDarkMode.value ? "enabled" : "disabled");
  };

  onMounted(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (
      savedMode === "enabled" ||
      (!savedMode && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      isDarkMode.value = true;
      document.documentElement.classList.add("dark");
    } else {
      isDarkMode.value = false;
      document.documentElement.classList.remove("dark");
    }
  });

  return { isDarkMode, toggleDarkMode };
};
