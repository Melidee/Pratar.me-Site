<script lang="ts">
  import { get } from "svelte/store";
  import type { Message } from "../../types";
  import { selfUser } from "../../data";

  export let messageData: Message;

  let cls =
    get(selfUser) == messageData.author ? "sent-by-self" : "sent-by-other";
</script>

<main class={cls}>
  <p>{messageData.body}</p>
</main>

<style>
  main {
    max-width: 60%;
    word-wrap: break-word;
  }

  .sent-by-self {
    background-color: blueviolet;
    float: right;
  }

  .sent-by-other {
    background-color: aquamarine;
  }
</style>
