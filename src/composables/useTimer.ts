import { ref, onUnmounted, computed } from "vue";

export default function () {
  let currentTime: number | null = null;
  let timer: number | undefined = undefined;

  const ellapsedTime = ref(0);
  const isRunning = ref(false);
  const isPaused = ref(false);

  const formattedTime = computed(() => {
    const time = ellapsedTime.value;

    const hundredth = Math.round((time / 10) % 100);
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor(time / (1000 * 60 * 60));

    const hundredthText = hundredth.toString().padStart(2, "0");
    const ss = seconds.toString().padStart(2, "0");
    const mm = minutes.toString().padStart(2, "0");
    const hh = hours.toString();

    return `${hh}:${mm}:${ss}.${hundredthText}`;
  });

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
