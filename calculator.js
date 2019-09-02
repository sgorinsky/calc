var input = document.getElementsByClassName('in')[0];

const numDivs = [...document.getElementsByClassName('num')];
const opDivs = [...document.getElementsByClassName('op')];

const ops = opDivs.map(o => o.textContent);
const nums = numDivs.map(n => Number(n.textContent))

const eventListeners = () => {
  ops.forEach(o => o.addEventListener(onmousedown, replaceText));
  nums.forEach(n => n.addEventListener(onmousedown, replaceText));
}

function replaceText(e) {
  text
}
