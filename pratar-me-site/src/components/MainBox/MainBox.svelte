<script lang="ts">
    import { each } from "svelte/internal";
    import type { Conversation, Message } from "../../types";
    import InputBar from "./InputBar/InputBar.svelte";
    import MessageBox from "./MessageBox.svelte";
    import { currentConvo } from "../../stores";

    let messageSent;
  </script>
  
  <section>
    <InputBar on:messageSent={() => {messageSent = !messageSent}}/>
    <MessageBox messages={$currentConvo.messages} update={messageSent} />
  </section>
  
  <style>
    section {
      background-color: #272727;
      margin-top: 20px;
      flex-grow: 1;
      border-radius: 12px;
      padding: 16px;
      display: flex;
      flex-direction: column-reverse;
      float: none;
      height: calc(100% - 110px);
    }
  </style>
  