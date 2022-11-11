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
.leftContainer {
  width: calc(20% - 30px );
  margin-left: 20px;
}

.rightContainer {
  display: flexbox;
  float: right;
  margin-right: 20px;
  width: calc(80% - 30px);
  flex-direction: column;
}
</style>
