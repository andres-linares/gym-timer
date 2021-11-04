import { formatTime } from "@/utils/formatters";
import { computed, ref, watch } from "vue";

export default function (initialTime: number) {
  let currentTime: number | null = null;
  let timer: number | undefined = undefined;

  const countdownTime = ref(initialTime);
  const timeLeft = ref(initialTime);

  const formattedTime = computed(() => formatTime(timeLeft.value * 1000));

  watch(countdownTime, () => (timeLeft.value = countdownTime.value));

  const resetCountdown = () => {
    if (timer) clearInterval(timer);
    currentTime = null;
    timeLeft.value = countdownTime.value;
  };

  const stopCountdown = () => {
    clearInterval(timer);
    currentTime = null;
    timeLeft.value = 0;
  };

  const startCountdown = () => {
    resetCountdown();

    timer = setInterval(() => {
      if (currentTime) {
        timeLeft.value -= (performance.now() - currentTime) / 1000;
      }

      if (timeLeft.value <= 0) {
        stopCountdown();
        return;
      }

      currentTime = performance.now();
    }, 10);
  };

  return { formattedTime, timeLeft, countdownTime, startCountdown };
}
