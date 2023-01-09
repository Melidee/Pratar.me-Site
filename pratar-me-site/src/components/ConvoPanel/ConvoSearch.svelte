<script lang="ts">
  import { conversations } from '../../stores';
  import Fuse from 'fuse.js'
  const options = {
    keys: []
  }
  const fuse = new Fuse($conversations, options)
  let searchStr = "";
  console.log(fuse.search(searchStr));
  let filteredConvos = $conversations
</script>

<section>
  <input type="convoSearch" placeholder="Search for conversations" bind:value="{searchStr}"/>
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
    color: #FFFFFF;
    padding-left: 10px;
  }

  input:focus::placeholder {
    color: transparent;
  }
</style>
