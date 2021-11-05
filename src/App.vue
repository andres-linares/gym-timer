<template>
  <router-view />
</template>

<style lang="scss">
:root {
  --color-primary: #012a4a;

  --background-color: #f6f8f9;

  --text-color: #2c3e50;
  --text-color-alt: #f5f1ef;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #297dbe;

    --background-color: #2f3236;

    --text-color: #ececf0;
    --text-color-alt: #f9f7f6;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
}

body {
  background: var(--background-color);
}
</style>
