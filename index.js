let listst = !Boolean;

document.getElementById("burgerMenu_btn").onclick = function () {
  console.log(listst);
  if (listst) {
    document.getElementById("list").classList.add("blockMenu");
    document.getElementById("list").classList.remove("hiddenMenu");
    listst = !listst;
  } else {
    document.getElementById("list").classList.add("hiddenMenu");
    document.getElementById("list").classList.remove("blockMenu");
    listst = !listst;
  }
};
let statusQue = !Boolean;
document.getElementById("ques1").onclick = function () {
  if (statusQue) {
    document.getElementById("plus1").classList.add("hidSt");
    document.getElementById("minus1").classList.remove("hidSt");
    document.getElementById("answer1").innerHTML =
      "Бронирование происходит после внесения предоплаты 50% от суммы аренды, предварительно можно приезать на осмотр дома или провести онлайн показ (при наличии такой возможности).";
    statusQue = !statusQue;
  } else {
    document.getElementById("minus1").classList.add("hidSt");
    document.getElementById("plus1").classList.remove("hidSt");
    document.getElementById("answer1").innerHTML = "";
    statusQue = !statusQue;
  }
};
document.getElementById("ques2").onclick = function () {
  if (statusQue) {
    document.getElementById("plus2").classList.add("hidSt");
    document.getElementById("minus2").classList.remove("hidSt");
    document.getElementById("answer2").innerHTML =
      "Стандарт предоплаты 50% от суммы аренды, если сумма аренды большая, то можно уменьшить предоплату до 30%.";
    statusQue = !statusQue;
  } else {
    document.getElementById("minus2").classList.add("hidSt");
    document.getElementById("plus2").classList.remove("hidSt");
    document.getElementById("answer2").innerHTML = "";
    statusQue = !statusQue;
  }
};
document.getElementById("ques3").onclick = function () {
  if (statusQue) {
    document.getElementById("plus3").classList.add("hidSt");
    document.getElementById("minus3").classList.remove("hidSt");
    document.getElementById("answer3").innerHTML =
      "Можно, по возможности можно сделать все. В каждом случае нужно общаться индивидуально как с клиентом, так и с собственником.";
    statusQue = !statusQue;
  } else {
    document.getElementById("minus3").classList.add("hidSt");
    document.getElementById("plus3").classList.remove("hidSt");
    document.getElementById("answer3").innerHTML = "";
    statusQue = !statusQue;
  }
};
document.getElementById("ques4").onclick = function () {
  if (statusQue) {
    document.getElementById("plus4").classList.add("hidSt");
    document.getElementById("minus4").classList.remove("hidSt");
    document.getElementById("answer4").innerHTML =
      "У нас открыто ИП и мы можем предложить заключить с нами агентский договор, на основании которого мы забронируем за Вами коттедж и пример оплату за дом на наш расчётный счёт. Более детально уточняйте у менеджера.";
    statusQue = !statusQue;
  } else {
    document.getElementById("minus4").classList.add("hidSt");
    document.getElementById("plus4").classList.remove("hidSt");
    document.getElementById("answer4").innerHTML = "";
    statusQue = !statusQue;
  }
};
document.getElementById("ques5").onclick = function () {
  if (statusQue) {
    document.getElementById("plus5").classList.add("hidSt");
    document.getElementById("minus5").classList.remove("hidSt");
    document.getElementById("answer5").innerHTML =
      "Да, любой дом можно посмотреть.";
    statusQue = !statusQue;
  } else {
    document.getElementById("minus5").classList.add("hidSt");
    document.getElementById("plus5").classList.remove("hidSt");
    document.getElementById("answer5").innerHTML = "";
    statusQue = !statusQue;
  }
};
document.getElementById("ques6").onclick = function () {
  if (statusQue) {
    document.getElementById("plus6").classList.add("hidSt");
    document.getElementById("minus6").classList.remove("hidSt");
    document.getElementById("answer6").innerHTML =
      "У каждого дома свой фиксированный заезд и выезд (указано в карточке товара), сдвинуть сроки реально, нужно обговаривать индивидуально.";
    statusQue = !statusQue;
  } else {
    document.getElementById("minus6").classList.add("hidSt");
    document.getElementById("plus6").classList.remove("hidSt");
    document.getElementById("answer6").innerHTML = "";
    statusQue = !statusQue;
  }
};
document.getElementById("ques7").onclick = function () {
  if (statusQue) {
    document.getElementById("plus7").classList.add("hidSt");
    document.getElementById("minus7").classList.remove("hidSt");
    document.getElementById("answer7").innerHTML =
      "Залог берётся администрацией коттеджа только во время заселения в дом и возвращается при выезде из коттеджа. Сумма залога и штраф лист указаны в договоре аренды.";
    statusQue = !statusQue;
  } else {
    document.getElementById("minus7").classList.add("hidSt");
    document.getElementById("plus7").classList.remove("hidSt");
    document.getElementById("answer7").innerHTML = "";
    statusQue = !statusQue;
  }
};
document.getElementById("ques8").onclick = function () {
  if (statusQue) {
    document.getElementById("plus8").classList.add("hidSt");
    document.getElementById("minus8").classList.remove("hidSt");
    document.getElementById("answer8").innerHTML =
      "Мы находимся с цене собственника и получаем комиссию только после вашего отдыха. Мы не накручиваем больше от цены и отдельно нам Вы ничего не платите.Бронирование происходит после внесения предоплаты 50% от суммы аренды, предварительно можно приезать на осмотр дома или провести онлайн показ (при наличии такой возможности).";
    statusQue = !statusQue;
  } else {
    document.getElementById("minus8").classList.add("hidSt");
    document.getElementById("plus8").classList.remove("hidSt");
    document.getElementById("answer8").innerHTML = "";
    statusQue = !statusQue;
  }
};

function controlFromInput(fromSlider, fromInput, toInput, controlSlider) {
  const [from, to] = getParsed(fromInput, toInput);
  fillSlider(fromInput, toInput, "#808080", "#404040", controlSlider);
  if (from > to) {
    fromSlider.value = to;
    fromInput.value = to;
  } else {
    fromSlider.value = from;
  }
}

function controlToInput(toSlider, fromInput, toInput, controlSlider) {
  const [from, to] = getParsed(fromInput, toInput);
  fillSlider(fromInput, toInput, "#808080", "#404040", controlSlider);
  setToggleAccessible(toInput);
  if (from <= to) {
    toSlider.value = to;
    toInput.value = to;
  } else {
    toInput.value = from;
  }
}

function controlFromSlider(fromSlider, toSlider, fromInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, "#808080", "#404040", toSlider);
  if (from > to) {
    fromSlider.value = to;
    fromInput.value = to;
  } else {
    fromInput.value = from;
  }
}

function controlToSlider(fromSlider, toSlider, toInput) {
  const [from, to] = getParsed(fromSlider, toSlider);
  fillSlider(fromSlider, toSlider, "#808080", "#404040", toSlider);
  setToggleAccessible(toSlider);
  if (from <= to) {
    toSlider.value = to;
    toInput.value = to;
  } else {
    toInput.value = from;
    toSlider.value = from;
  }
}

function getParsed(currentFrom, currentTo) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}

function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
  const rangeDistance = to.max - to.min;
  const fromPosition = from.value - to.min;
  const toPosition = to.value - to.min;
  controlSlider.style.background = `linear-gradient(
    to right,
    ${sliderColor} 0%,
    ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
    ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
    ${rangeColor} ${(toPosition / rangeDistance) * 100}%, 
    ${sliderColor} ${(toPosition / rangeDistance) * 100}%, 
    ${sliderColor} 100%)`;
}

function setToggleAccessible(currentTarget) {
  const toSlider = document.querySelector("#toSlider");
  if (Number(currentTarget.value) <= 0) {
    toSlider.style.zIndex = 2;
  } else {
    toSlider.style.zIndex = 0;
  }
}

const fromSlider = document.querySelector("#fromSlider");
const toSlider = document.querySelector("#toSlider");
const fromInput = document.querySelector("#fromInput");
const toInput = document.querySelector("#toInput");
fillSlider(fromSlider, toSlider, "#808080", "#404040", toSlider);
setToggleAccessible(toSlider);

fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider, fromInput);
toSlider.oninput = () => controlToSlider(fromSlider, toSlider, toInput);
fromInput.oninput = () =>
  controlFromInput(fromSlider, fromInput, toInput, toSlider);
toInput.oninput = () => controlToInput(toSlider, fromInput, toInput, toSlider);
