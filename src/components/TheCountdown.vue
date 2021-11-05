<template>
  <div class="countdown">
    <h6 :id="id">{{ name }}</h6>

    <div class="actions-container">
      <input
        type="number"
        min="0"
        v-model="countdownTime"
        :aria-labelledby="id"
      />

      <a-button @click="startCountdown" size="sm">Iniciar</a-button>
    </div>
    <div class="display">{{ formattedTime }}</div>
  </div>
</template>

<script>
import useCountdown from "@/composables/useCountdown";
import { useStore } from "vuex";
import AButton from "./atoms/AButton.vue";

export default {
  components: { AButton },
  props: {
    name: { type: String, required: true },
    defaultValue: { type: Number, required: true },
    id: { type: String, required: true },
  },
  setup(props) {
    const store = useStore();
    const countdown = useCountdown(props.defaultValue);

    const startCountdown = () => {
      const timelog = {
        datetime: Date.now(),
        timeInMs: 1000,
        event: props.name,
      };
      store.commit("addTimelog", timelog);

      countdown.startCountdown();
    };

    return { ...countdown, startCountdown };
  },
};
</script>

<style lang="scss" scoped>
.countdown {
  margin-bottom: 5vh;

  h6 {
    font-size: clamp(1rem, 2vw, 1.25rem);
    margin: 0 0 0.75em 0;
  }

  .actions-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2vh;

    input {
      height: min-content;
      width: 5ch;
      font-size: clamp(1.125rem, 2vw, 1.5rem);
      padding: 0em 0.25em;
    }
  }

  .display {
    font-family: monospace;
    font-size: clamp(1.5rem, 3vw, 2rem);
  }
}
</style>
