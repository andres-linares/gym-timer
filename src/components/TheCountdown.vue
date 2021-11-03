<template>
  <div class="countdown">
    <label>
      {{ name }}
      <input type="number" min="0" v-model="countdownTime" />
    </label>

    <div class="screen">
      <button @click="startCountdown">Iniciar</button>

      <div class="display">{{ formattedTime }}</div>
    </div>
  </div>
</template>

<script>
import useCountdown from "@/composables/useCountdown";

export default {
  props: {
    name: { type: String, required: true },
    defaultValue: { type: Number },
  },
  setup(props) {
    const countdown = useCountdown(props.defaultValue);

    return { ...countdown };
  },
};
</script>

<style lang="scss" scoped>
.countdown {
  margin-bottom: 5vh;

  label {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    column-gap: 5vw;
    margin-bottom: 2vh;

    input {
      height: min-content;
      width: 5ch;
    }
  }

  .screen {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .display {
      font-family: monospace;
      font-size: clamp(1.5rem, 3vw, 2rem);
    }

    button {
      border-radius: 50%;
      width: 20vw;
      height: 20vw;
      border: none;
      background: #000;
      color: #fff;
      font-size: clamp(1.125rem, 2vw, 1.5rem);;
    }
  }
}
</style>
