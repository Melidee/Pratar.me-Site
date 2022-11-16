<script setup lang="ts">
import TitleBox from "./components/TitleBox/TitleBox.vue";
import ConvoPanel from "./components/ConvoPanel/ConvoPanel.vue";
import MainBox from "./components/MainBox/MainBox.vue";
</script>

<template>
  <main>
    <section class="leftContainer">
      <ConvoPanel class="ConvoPanel" />
    </section>
    <section class="rightContainer">
      <TitleBox />
      <MainBox />
    </section>
  </main>
</template>

<style scoped>
main {
  display: flex;
  height: 100%;
  width: 100%;
  margin: 10px;
}

.leftContainer {
  position: relative;
  width: calc(20% - 30px);
  margin-right: 10px;
  height: 97vh;
}

.rightContainer {
  padding: 0;
  margin-left: 10px;
  width: calc(80% - 30px);
  flex-direction: column;
  height: 97vh;
}
</style>
