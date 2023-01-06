<script>
  import { currencyPrice } from "./store";

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
</script>

<main>
  <div>Wellcome on wir.codes !</div>

  <button on:click={setPrice}>Log Res</button>

  <div>
    {$currencyPrice[0]?.price ? $currencyPrice[0]?.price : "Data still not yet"}
  </div>
</main>
