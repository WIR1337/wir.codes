<script>
  import { currencyPrice } from "./store";
  // import sql from "./db.js";

  async function getPrice() {
    let data = await fetch(
      "https://api.binance.com/api/v3/ticker/price?symbols=[%22USDTRUB%22,%22EURUSDT%22]"
    );
    let res = await data.json();
    return res;
  }

  async function setPrice() {
    let data = await getPrice();
    currencyPrice.update((value) => {
      return data;
    });
    console.log("currencyPrice : ", $currencyPrice);
  }

  let eurrub = {
    symbol: "EURRUB",
  };

  $: {
    if ($currencyPrice.length != 0) {
      eurrub.price = $currencyPrice[0].price * $currencyPrice[1].price;
    }
  }
</script>

<main>
  <div>Wellcome on wir.codes !</div>
  <button on:click={setPrice}>Get Data</button>

  {#if eurrub.price}
    <div class="currency">
      <div>{eurrub.symbol}</div>
      <div>{Number(eurrub.price).toFixed(2)}</div>
    </div>
  {/if}
  {#each $currencyPrice as { symbol, price }}
    <div class="currency">
      <div>{symbol}</div>
      <div>{Number(price).toFixed(2)}</div>
    </div>
  {:else}
    <div>No data</div>
  {/each}
</main>

<style>
  .currency {
    display: flex;
    gap: 8px;
  }
</style>
