<script lang="ts">
  import type { Conversation } from "../../types";
  import Icon from "../Icon.svelte";
  export let convo: Conversation;
</script>

<main>
  <div class="icon">
    <Icon src={convo.icon} diameter="50px"/>
  </div>
  <h4>{convo.title}</h4>
</main>

<style>
  main {
    border-radius: 12px;
    width: 100%;
    background-color: #272727;
    margin-top: 0px;
    height: 75px;
  }

  .icon {
    margin-top: 15px;
  }

  h4 {
  }
</style>
