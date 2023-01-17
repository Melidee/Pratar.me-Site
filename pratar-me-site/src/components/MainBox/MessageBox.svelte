<script lang="ts">
  import type { Message } from "../../types";
  import { writable, get } from "svelte/store";
  import MessageBubble from "./MessageBubble.svelte";
  export let messages: Array<Message> = [];
  export let update: boolean;
</script>

<section id="mainbox">
  {#key update}
    {#each messages as message}
      <div class="full-length">
        <MessageBubble messageData={message} />
      </div>
    {/each}
  {/key}
</section>

<style>
  section {
    display: flex;
    flex-direction: column-reverse;
    overflow-y: scroll;
    scrollbar-color: rgba(102, 0, 255, 1), white;
  }

  :root {
    scrollbar-color: rgba(102, 0, 255, 1), white;
  }
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-thumb {
  background: rgba(102, 0, 255, 0.5);
  border-radius: 5px;
}
</style>
