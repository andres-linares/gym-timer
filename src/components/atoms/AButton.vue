<template>
  <button :class="variant">
    <span><slot /></span>
  </button>
</template>

<script>
export default {
  name: "AButton",
  props: {
    variant: { type: String, default: "primary" },
  },
};
</script>

<style lang="scss" scoped>
button {
  border: none;
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  padding: 0.35em 0.6em;
  border-radius: 0.3em;
  background: var(--color-primary);
  color: var(--text-color-alt);

  &:disabled {
    opacity: 0.5;
  }
}
</style>
