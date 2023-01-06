export async function getPrice() {
   let data = await fetch('https://api.binance.com/api/v3/ticker/price?symbols=[%22USDTRUB%22,%22EURUSDT%22]')
      .then(res => res.json())
      .then(data => console.log(data))
}