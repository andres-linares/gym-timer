<template>
  <div class="home">
    <the-timer />
    <the-countdown name="Descanso entre series" :defaultValue="90" />
    <the-countdown name="Descanso entre ejercicios" :defaultValue="180" />
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
