<script lang="ts">
    import UploadButton from "./UploadButton.svelte";
</script>

<main>
    <UploadButton/>
<input type="text">
</main>

<style>
    main {
        display: flex;
        width: 75vw;
        margin-left: auto;
        margin-right: auto;
        background-color: chartreuse;
    }
    input {
        width: 65vw;
        margin: 10px;
    }
</style>