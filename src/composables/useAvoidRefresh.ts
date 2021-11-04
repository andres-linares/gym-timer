import { onMounted, onUnmounted } from "vue";

export default function () {
  const handleRefresh = (e: Event) => {
    const response = confirm("Estas seguro de abandonar la pagina");

    if (!response) e.preventDefault();

    return "do something";
  };

  onMounted(() => {
    window.addEventListener("beforeunload", handleRefresh);
  });

  onUnmounted(() => {
    window.removeEventListener("beforeunload", handleRefresh);
  });
}
