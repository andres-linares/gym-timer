<template>
  <div class="timer">
    <div class="display">{{ formattedTime }}</div>

    <div class="buttons">
      <a-button @click="startTimer" :disabled="isRunning">Iniciar</a-button>
      <a-button @click="stopTimer" :disabled="!isRunning">Detener</a-button>
      <a-button @click="pauseTimer" :disabled="!isRunning || isPaused">
        Pausar
      </a-button>
      <a-button @click="resumeTimer" :disabled="!isPaused">Continuar</a-button>
    </div>
  </div>
</template>

<script>
import useTimer from "@/composables/useTimer";
import AButton from "./atoms/AButton.vue";

export default {
  components: { AButton },
  name: "TheTimer",
  setup() {
    const timer = useTimer();

    return { ...timer };
  },
};
</script>

<style lang="scss" scoped>
.timer {
  margin-bottom: 5vh;

  .display {
    font-size: clamp(1.75rem, 3.5vw, 2.5rem);
    font-family: monospace;
    margin-bottom: 2vh;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 1.5vh;
    column-gap: 4vw;

    // button {
    //   font-size: clamp(1.125rem, 2vw, 1.5rem);
    //   padding: 0.35em 0.6em;
    //   border-radius: 0.3em;
    //   border: none;
    //   color: #fff;
    // }
  }
}
</style>
