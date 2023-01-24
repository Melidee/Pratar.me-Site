<script lang="ts">
  import { initializeFirebase } from "../../firebase_init";
  import { createEventDispatcher } from "svelte";
  import { get, type Readable } from "svelte/store";
  import { each } from "svelte/internal";
  import { currentConvo } from "../../stores";
  import type { Conversation, User } from "../../types";
  import Icon from "../Icon.svelte";

  export let convo: Conversation;
  const dispatch = createEventDispatcher();

  const deconstructMembers = (members: Array<User>) => {
    let str = "";
    members.forEach((member) => {
      str = str + member.name + ", ";
    });
    return str.slice(0, -2);
  };
  let memberString = deconstructMembers(convo.members);

  const emitConvo = () => {
    initializeFirebase().then((v) => {
      console.log(v);
    })
    currentConvo.set(convo);
  };
</script>

<button on:click={emitConvo}>
  <div class="icon">
    <Icon src={convo.icon} diameter="calc(26px + 0.5vw)" />
  </div>
  <div>
    <h3>{convo.title}</h3>
    <h4>{memberString}</h4>
  </div>
</button>

<style>
  button {
    transition-duration: 0.4s;
    border: 0;
    text-decoration: none;
    border-radius: 12px;
    width: 100%;
    background-color: rgba(39, 39, 39, 1);
    margin-top: 0px;
    height: calc(40px + 1vw);
    display: flex;
    margin-bottom: 10px;
  }

  button:hover {
    background-color: rgba(50, 50, 50, 1);
    color: white;
  }

  .icon {
    margin-top: calc(5px + 0.1vw);
    margin-left: 9px;
    margin-right: 12px;
  }

  h3 {
    margin-top: calc(4px + 0.3vw);
    color: #fff;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 5px;
  }
  h4 {
    font-weight: 300;
    margin: 0;
    padding: 0;
    color: #666666;
    float: left;
  }
</style>
