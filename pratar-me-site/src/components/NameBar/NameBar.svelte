<script lang="ts">
  import type { User } from "../../types";
  import Icon from "../Icon.svelte";

  export let user: User;
</script>

<section>
  <div class="icon">
    <Icon src={user.icon} diameter="35px" />
  </div>
  <h1>{user.name}</h1>
</section>

<style>
  :root {
    --height: 50px;
  }

  section {
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
    padding: 3px;
    padding-left: 12px;
    display: flex;
    align-content: center;
  }

  h1 {
    margin: 0;
    padding: 0;
    font-weight: 300;
    font-family: inherit;
    line-height: var(--height);
    font-size: 25px;
    color: #ffffff;
  }

  .icon {
    height: 4vh;
    margin-top: 3.5px;
    margin-right: 7px;
  }
</style>
