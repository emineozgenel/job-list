<template>
  <div id="app" class="container">
    <Header />
    <router-view />
  </div>
</template>

<script>
import { Header } from "@/components";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "./style/main.scss";
</style>
