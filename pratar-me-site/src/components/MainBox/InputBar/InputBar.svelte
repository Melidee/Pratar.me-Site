<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import UploadButton from "./UploadButton.svelte";
  import { currentConvo, selfUser } from "../../../stores";
  import { Message } from "../../../types";
  const dispatch = createEventDispatcher();

  let messageSent = false;

  let text: string = "";
  const keyHandler = (event) => {
    if (event.key == "Enter") {
      $currentConvo.messages = [
        new Message($selfUser, 0, text),
        ...$currentConvo.messages,
      ];
      text = "";
      dispatch("messageSent");
      messageSent = !messageSent;
    }
  };
</script>

<main>
  <UploadButton />
  <input bind:value={text} on:keypress={keyHandler} />
</main>

<style>
  main {
    display: flexbox;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    background-color: rgba(102, 0, 255, 0.9);
    border-radius: 20px;
  }

  input {
    width: calc(100% - 60px);
    height: 20px;

    margin: 7px;
    margin-left: 0px;

    color: #ffffff;
    background-color: rgba(102, 0, 255, 0.9);
    font-size: 14px;

    border-width: 0px;
    border-radius: 20px;
    border-style: solid;
    padding: 5px;
    padding-top:7px;
    
    float: right;
    overflow: hidden;
  }
</style>
