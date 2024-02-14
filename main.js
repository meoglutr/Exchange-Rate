const amountInput = document.querySelector("#amount");
const first = document.querySelector("#firstCurrencyOption");
const second = document.querySelector("#secondCurrencyOption");
const resultI = document.querySelector("#result");
const button = document.querySelector("#button");

const currency = new Currency();

runEventListeners();
function runEventListeners() {
  button.addEventListener("click", exchange);
}

function exchange() {
  const amount = Number(amountInput.value.trim());
  const firstvalue = first.options[first.selectedIndex].textContent;
  const secondvalue = first.options[second.selectedIndex].textContent;
  console.log(firstvalue, secondvalue);
  currency.exchange(amount, firstvalue, secondvalue).then((result) => {
    resultI.value = result.toFixed(2);
  });
}
