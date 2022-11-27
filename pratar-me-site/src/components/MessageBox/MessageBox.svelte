<script lang="ts">
  import { each } from "svelte/internal";
  import type { Conversation, Message } from "../../types";
  import InputBar from "./InputBar/InputBar.svelte";
  import MessageBubble from "./MessageBubble.svelte";
  export let convo: Conversation = undefined;
</script>

<main>
  <InputBar />
  {#each convo.messages as messageData}
    <MessageBubble {messageData} />
  {/each}
</main>

<style>
  main {
    background-color: #272727;
    margin-top: 20px;
    flex-grow: 1;
    border-radius: 12px;
    padding: 16px;
    display: flex;
    flex-direction: column-reverse;
  }
</style>
