const link = "https://open.er-api.com/v6/latest/USD";

async function convertRate() {
  const response = await fetch(link);
  const rates = await response.json();
  if (document.querySelector("#valuta").value === "usdToEur") {
    vrijednost = document.querySelector("#value").value * rates.rates.EUR;
    document.querySelector("#rezultat").innerHTML = vrijednost;
  } else {
    vrijednost = document.querySelector("#value").value / rates.rates.EUR;
    document.querySelector("#rezultat").innerHTML = vrijednost;
  }
}

document.querySelector("#btn").addEventListener("click", convertRate);
