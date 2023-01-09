<script lang="ts">
  import { get } from "svelte/store";
  import type { Message } from "../../types";
  import { selfUser } from "../../stores";

  export let messageData: Message;
  let self = get(selfUser);

  let cls = Object.is(messageData.author, self)
    ? "sent-by-self"
    : "sent-by-other";
</script>

<section class={cls}>
  <div>
    <p>{messageData.body}</p>
  </div>
</section>

<style>
  section {
    word-wrap: break-word;
    margin: 2vh;
    margin-right: 0.2vh;
    padding: 10px;
    border-radius: 20px;
    color: #FFF;
    display: flex;
    max-width: 60%;
    
  }

  p {
    margin: 0;
    padding: 0;
  }

  .sent-by-self {
    background-color: rgb(102, 0, 255);
    flex-shrink: 1;
    float: right;
    margin-right: 4px;
  }

  .sent-by-other {
    padding: 5;
    background-color: #404040;
    flex-shrink: 1;
    float: left;
  }
</style>
