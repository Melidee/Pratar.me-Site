<script lang="ts">
  export let diameter: string;
  export const src =
    "https://us.123rf.com/450wm/gudinny/gudinny1911/gudinny191100227/gudinny191100227.jpg?ver=6";
  console.log(src)
</script>

<section>
  <img {src} alt="icon" style="height:{diameter};width:{diameter}" />
</section>

<style>
  img {
    padding: 1px;
    border-radius: 100vw;
    border: 0.2vh solid #ffffff;
  }
</style>
