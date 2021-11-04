<template>
  <div class="home">
    <the-timer />

    <div class="countdowns-container">
      <the-countdown
        name="Descanso entre series"
        id="seriesRest"
        :defaultValue="90"
      />
      <the-countdown
        name="Descanso entre ejercicios"
        id="exercisesRest"
        :defaultValue="180"
      />
    </div>
  </div>
</template>

<script>
import TheTimer from "@/components/TheTimer.vue";
import TheCountdown from "@/components/TheCountdown.vue";
import useAvoidRefresh from "@/composables/useAvoidRefresh";

export default {
  name: "Home",
  components: {
    TheTimer,
    TheCountdown,
  },
  setup() {
    useAvoidRefresh();
  },
};
</script>

<style lang="scss" scoped>
.countdowns-container {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 5vw;
}
</style>
