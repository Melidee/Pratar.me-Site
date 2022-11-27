<script lang="ts">
  import type { User } from "../../types";
  import Icon from "../Icon.svelte";

  export let user: User;
</script>

<main>
  <div class="icon">
    <Icon src={user.pfp} diameter="3.5vh" />
  </div>
  <h1>{user.name}</h1>
</main>

<style>
  :root {
    --height: 6vh;
  }

  main {
    margin-top: 0px;
    background: rgb(102, 0, 255);
    background: linear-gradient(
      90deg,
      rgba(102, 0, 255, 1) 0%,
      rgba(102, 0, 255, 1) 35%,
      rgba(255, 255, 255, 1) 100%
    );
    height: var(--height);
    border-radius: 12px;
    padding-left: 12px;
    display: flex;
    align-content: center;
  }

  h1 {
    margin: 0;
    padding: 0;
    font-weight: 300;
    line-height: var(--height);
    font-size: 3vh;
    color: #ffffff;
  }

  .icon {
    height: 4vh;
    margin-top: 1vh;
    margin-right: 7px;
  }
</style>
