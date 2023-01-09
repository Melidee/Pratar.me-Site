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