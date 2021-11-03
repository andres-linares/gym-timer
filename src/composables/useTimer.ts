import { formatTime } from "@/utils/formatters";
import { ref, onUnmounted, computed } from "vue";

export default function () {
  let currentTime: number | null = null;
  let timer: number | undefined = undefined;

  const ellapsedTime = ref(0);
  const isRunning = ref(false);
  const isPaused = ref(false);

  const formattedTime = computed(() => formatTime(ellapsedTime.value));

  const createTimer = () => {
    timer = setInterval(() => {
      if (currentTime) {
        ellapsedTime.value += performance.now() - currentTime;
      }

      currentTime = performance.now();
    }, 10);
  };

  const startTimer = () => {
    createTimer();
    isRunning.value = true;
  };

  const pauseTimer = () => {
    clearInterval(timer);
    isPaused.value = true;
    currentTime = null;
  };

  const resumeTimer = () => {
    currentTime = performance.now();
    createTimer();
    isPaused.value = false;
  };

  const stopTimer = () => {
    clearInterval(timer);
    ellapsedTime.value = 0;
    currentTime = null;
    isPaused.value = false;
    isRunning.value = false;
  };

  onUnmounted(() => {
    if (timer) clearInterval(timer);
  });

  return {
    isRunning,
    isPaused,
    formattedTime,
    startTimer,
    pauseTimer,
    resumeTimer,
    stopTimer,
  };
}
