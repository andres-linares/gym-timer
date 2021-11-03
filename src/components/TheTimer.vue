<template>
  <div class="timer">
    <div class="display">{{ formattedTime }}</div>

    <button disabled>Pausar</button>
    <button @click="startTimer">Iniciar</button>
  </div>
</template>

<script>
export default {
  name: "TheTimer",
  data() {
    return {
      initialTime: null,
      currentTime: null,
      timer: null,
    };
  },
  computed: {
    time() {
      return this.currentTime - this.initialTime;
    },
    formattedTime() {
      const theTime = this.time;

      let hundredth = Math.round((theTime / 10) % 100);
      let seconds = Math.floor((theTime / 1000) % 60);
      let minutes = Math.floor((theTime / (1000 * 60)) % 60);
      let hours = Math.floor(theTime / (1000 * 60 * 60));

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
    startTimer() {
      this.initialTime = performance.now();

      this.timer = setInterval(() => {
        this.currentTime = performance.now();
      }, 10);
    },
  },
};
</script>
