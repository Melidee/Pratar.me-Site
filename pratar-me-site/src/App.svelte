<script lang="ts">
  import NameBar from "./components/NameBar/NameBar.svelte";
  import MainBox from "./components/MainBox/MainBox.svelte";
  import ConvoPanel from "./components/ConvoPanel/ConvoPanel.svelte";
  import { conversations, selfUser } from "./stores";
  import type { Conversation, Message, User } from "./types";
  
  

  let self = $selfUser;
  let convos = $conversations;
  let currentConvo = $conversations[0];
</script>

<main>
  <div class="leftContainer">
    <ConvoPanel />
  </div>
  <div class="rightContainer">
    <NameBar user={self} />
    <MainBox />
  </div>
</main>

<style>
  main {
    margin: 20px;
    height: calc(100vh - 40px);
  }

  .leftContainer {
    display: flex;
    flex-direction: column;
    float: left;
    width: 20%;
    height: inherit;
  }

  .rightContainer {
    margin-left: 10px;
    float: right;
    width: calc(80% - 20px);
    height: inherit;
    display: flex;
    flex-direction: column;
  }
</style>
