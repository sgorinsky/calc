//
// QUERYING DOM ELEMENTS
//
var display = document.querySelector('.display');

const perc = document.querySelector('.percentage');
const dec = document.querySelector('.decimal');

const c = document.querySelector('#clear');
const m = document.querySelector('#memory');
const mc = document.querySelector('#memory-clear');
const eq = document.querySelector('#equals');

const nums = [...document.getElementsByClassName('num')];
const ops = [...document.getElementsByClassName('op')];

//
// ATTACHING EVENT LISTENERS
//
c.addEventListener('click', clear);
m.addEventListener('click', StoreAddMemory);
mc.addEventListener('click', clearMemory);

eq.addEventListener('click', evaluate)
ops.forEach(o => o.addEventListener('click', addOperation));
nums.forEach(n => n.addEventListener('click', addDisplay));

//
// CALLBACK FUNCTIONS
//

/// Important Variables
var current = '';
var currentOp = '';
var opCount = 0;
var n;
var hold = '';
var memory = '';



function addDisplay(e) {
  let num = e.target.textContent;
  current = Number( String(current)+num );
  hold = current;
  display.textContent = current;
}

function addOperation(e) {

  if (currentOp !== '' && opCount > 0) {
    if (currentOp === '+') {
      n += hold;
    } else if (currentOp === '-') {
      n -= hold;
    } else if (currentOp === '*') {
      n *= hold;
    } else if (currentOp === '/') {
      n /= hold;
    }
    display.textContent = n;

  } else if (currentOp === '') {
    n = current;
    opCount = 1
  }

  hold = current;
  current = '';
  currentOp = e.target.textContent;
}

function clear() {
  current = '';
  n = 0;
  display.textContent = current;
  opCount = 0;
  currentOp = '';
}

function StoreAddMemory(e) {
  if (memory !== '') {
    hold = memory;
    display.textContent = memory;
  } else {
    memory = Number(current);
  }
}

function clearMemory() {
  memory = '';
}

function evaluate() {

  if (currentOp === '+') {
    n += hold;
  } else if (currentOp === '-') {
    n -= hold;
  } else if (currentOp === '*') {
    n *= hold;
  } else if (currentOp === '/') {
    n /= hold;
  }
  display.textContent = n;
  opCount = 0;

}
