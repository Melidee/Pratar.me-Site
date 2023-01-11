<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import { conversations } from "../../stores";
  import type { Conversation } from "../../types";
  const dispatch = createEventDispatcher();

  export let searchStr = "";
</script>

<section>
  <input
    type="convoSearch"
    placeholder="Search for conversations"
    bind:value={searchStr}
    on:input={() => { dispatch('newFilter', searchStr) }}
  />
</section>

<style>
  /* TODO: improve styling of search box */
  section {
    display: flexbox;
  }
  input {
    width: calc(100% - 13px);
    height: 25px;
    margin: 0;
    margin-bottom: 15px;
    background-color: rgba(39, 39, 39, 0.3);
    border-width: 2px;
    border-radius: 20px;
    border-color: rgba(39, 39, 39, 1);
    border-style: solid;
    padding: 5px;
    color: #ffffff;
    padding-left: 10px;
  }

  input:focus::placeholder {
    color: transparent;
  }
</style>
