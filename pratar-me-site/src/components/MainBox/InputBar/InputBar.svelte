<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import UploadButton from "./UploadButton.svelte";
    import { currentConvo, selfUser } from "../../../stores";
  import { Message } from "../../../types";
    const dispatch = createEventDispatcher()

    let messageSent = false;
    

    let text:string = "";
    const keyHandler = (event) => {
        if (event.key=="Enter") {
            $currentConvo.messages = [new Message($selfUser, 0, text), ...$currentConvo.messages];
            text = ""
            dispatch("messageSent")
            messageSent = !messageSent
        }
    }
</script>

<main>
    <UploadButton/>
    <input type="text" bind:value={text} on:keypress={keyHandler}>
</main>

<style>
    main {
        display: flex;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        background-color: rgba(102, 0, 255, 0.9);
        border-radius: 20px;
        
    }
    input {
        margin: 10px;
        width: calc(100% - 45px);
    }
</style>