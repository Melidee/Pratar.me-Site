<script lang="ts">
  import type { Conversation } from "../../types";
  import ConvoButton from "./ConvoButton.svelte";
  export let convos: Array<Conversation> = [];
</script>

<main>
  {#each convos as convo}
    <ConvoButton {convo} />
  {/each}
</main>

<style>
  main {
    margin-top: 0px;
    background: rgb(102, 0, 255);
    background: linear-gradient(
      180deg,
      rgba(102, 0, 255, 1) 0%,
      rgba(102, 0, 255, 1) 50%,
      rgba(255, 255, 255, 1) 100%
    );
    height: inherit;
    border-radius: 12px;
    padding: 12px;
  }
</style>
