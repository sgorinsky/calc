//
// QUERYING DOM ELEMENTS
//
var display = document.querySelector('.disp');
display.textContent = 0;


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
dec.addEventListener('click', addDec)
perc.addEventListener('click', addPerc)

ops.forEach(o => o.addEventListener('click', addOperation));
nums.forEach(n => n.addEventListener('click', addDisplay));

[c, m, mc, eq, dec, perc, ...ops, ...nums].forEach(d => d.addEventListener('click', pressed));

//
// CALLBACK FUNCTIONS
//

/// Important Variables
var current = '0';
var currentOp = '';
var opCount = 0;
var n;
var hold = '';
var memory = '';


function pressed(e) {
  e.target.classList.add('pressed');

  const removeTransition = () => {
    e.target.classList.remove('pressed');
  }

  setTimeout(removeTransition, 70);
}


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

function addDec() {
  if (!String(current).includes('.')) {
    current = String(current) + '.';
    display.textContent = current;

  } else {
    alert('Already includes a decimal!')
  }

}

function addPerc() {
  current /= 100;
  display.textContent = current + '%';
}

function clear() {

  current = '';
  n = 0;
  display.textContent = 0;
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
