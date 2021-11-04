import { formatTime } from "@/utils/formatters";
import { computed, ref } from "vue";

export default function (initialTime: number) {
  let currentTime: number | null = null;
  let timer: number | undefined = undefined;

  const countdownTime = ref(initialTime);
  const timeLeft = ref(initialTime);

  const formattedTime = computed(() => formatTime(timeLeft.value * 1000));

  const startCountdown = () => {
    if (timer) clearInterval(timer);
    currentTime = null;
    timeLeft.value = countdownTime.value;

    timer = setInterval(() => {
      if (currentTime) {
        timeLeft.value -= (performance.now() - currentTime) / 1000;
      }

      if (timeLeft.value <= 0) {
        clearInterval(timer);
        timeLeft.value = 0;
        currentTime = null;
      }

      currentTime = performance.now();
    }, 10);
  };

  return { formattedTime, timeLeft, countdownTime, startCountdown };
}
