const inp = document.querySelector('.quantity__input');
const buttonPlus = document.querySelector('.quantity__button-plus');
const buttonsMinus = document.querySelector('.quantity__button-minus');
const priceValue = document.querySelector('.price-value');

let parsePrice = priceValue.textContent;

parsePrice = parsePrice.replace(/[^0-9]/g, '');

console.log(`priceValue.textContent = ${parsePrice}`);

buttonsMinus.addEventListener('click', () => {
  if (Number(inp.value) > 1) {
    inp.value = Number(inp.value) - 1;
    change();
  }
});

buttonPlus.addEventListener('click', () => {
  inp.value = Number(inp.value) + 1;
  change();
});

// изменение .priceValue при изменении в input
const change = () => {
  let totalPrice = Number(parsePrice) * Number(inp.value);
  totalPrice = totalPrice.toString().replace(/(\d{1}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ');
  priceValue.textContent = totalPrice;
};

// Убираем все лишнее и невозможное при изменении поля
document.querySelectorAll('.quantity__input').forEach(function (element) {
  element.addEventListener('change', function (event) {
    event.preventDefault();
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
    if (this.value == '') {
      this.value = 1;
    }
    if (this.value > parseInt(this.dataset.maxCount)) {
      this.value = parseInt(this.dataset.maxCount);
    }
  });
});

console.log('On quantity');
