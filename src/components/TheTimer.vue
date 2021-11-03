<template>
  <div class="timer">
    <div class="display">{{ formattedTime }}</div>

    <button @click="pauseTimer" :disabled="!isRunning || isPaused">Pausar</button>
    <button @click="resumeTimer" :disabled="!isPaused">Continuar</button>
    <button @click="startTimer" :disabled="isRunning">Iniciar</button>
    <button @click="stopTimer" :disabled="!isRunning">Detener</button>
  </div>
</template>

<script>
import useTimer from '@/composables/useTimer';

export default {
  name: "TheTimer",
  setup() {
    const timer = useTimer();

    return { ...timer };
  }
};
</script>
