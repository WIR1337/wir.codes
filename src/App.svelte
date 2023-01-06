<script>
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";

  import { getPrice } from "./loadprice";
</script>

<main>
  <div>Wellcome on wir.codes !</div>

  <button on:click={getPrice}>Log Res</button>
</main>
