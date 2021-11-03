<template>
  <div class="timer">
    <div class="display">{{ formattedTime }}</div>

    <button @click="pauseTimer" :disabled="!running || paused">Pausar</button>
    <button @click="resumeTimer" :disabled="!paused">Continuar</button>
    <button @click="startTimer" :disabled="running">Iniciar</button>
    <button @click="stopTimer" :disabled="!running">Detener</button>
  </div>
</template>

<script>
export default {
  name: "TheTimer",
  data() {
    return {
      ellapsedTime: 0,
      currentTime: null,
      timer: null,

      running: false,
      paused: false,
    };
  },
  computed: {
    formattedTime() {
      const time = this.ellapsedTime;

      let hundredth = Math.round((time / 10) % 100);
      let seconds = Math.floor((time / 1000) % 60);
      let minutes = Math.floor((time / (1000 * 60)) % 60);
      let hours = Math.floor(time / (1000 * 60 * 60));

      hundredth = hundredth.toString().padStart(2, "0");
      seconds = seconds.toString().padStart(2, "0");
      minutes = minutes.toString().padStart(2, "0");

      return `${hours}:${minutes}:${seconds}.${hundredth}`;
    },
  },
  unmounted() {
    if (this.timer) clearInterval(this.timer);
  },
  methods: {
    createTimer() {
      this.timer = setInterval(() => {
        if (this.currentTime) {
          this.ellapsedTime += performance.now() - this.currentTime;
        }

        this.currentTime = performance.now();
      }, 10);
    },
    startTimer() {
      this.createTimer();
      this.running = true;
    },
    pauseTimer() {
      clearInterval(this.timer);
      this.paused = true;
      this.currentTime = null;
    },
    resumeTimer() {
      this.currentTime = performance.now();
      this.createTimer();
      this.paused = false;
    },
    stopTimer() {
      clearInterval(this.timer);
      this.ellapsedTime = 0;
      this.currentTime = null;
      this.paused = false;
      this.running = false;
    },
  },
};
</script>
