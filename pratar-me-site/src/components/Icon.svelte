<script lang="ts">
  export let src: string;
  export let diameter: string;
  const defaultImage =
    "https://us.123rf.com/450wm/gudinny/gudinny1911/gudinny191100227/gudinny191100227.jpg?ver=6";
  if (src == undefined) {
    src = defaultImage;
  }
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
