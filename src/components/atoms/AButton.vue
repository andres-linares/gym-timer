<template>
  <button :class="`${variant} ${size}`">
    <span><slot /></span>
  </button>
</template>

<script>
export default {
  name: "AButton",
  props: {
    variant: { type: String, default: "primary" },
    size: { type: String, default: "md" },
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

button.sm {
  font-size: clamp(1rem, 1.75vw, 1.125rem);
}
</style>
