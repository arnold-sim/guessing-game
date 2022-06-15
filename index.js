let position = 0;
let tgt = "La pandemia de enfermedad por coronavirus de 2019-2020 es una pandemia derivada de la enfermedad por coronavirus iniciada en 2019 (COVID-19), ocasionada por el virus coronavirus 2 del síndrome respiratorio agudo grave (SARS-CoV-2).";
let tries = [0];//5, 1, 1, 1, 2, 0];
let wrongs = 0;
let alreadyGuessed = [];

d3.select('body').on('keypress', evt => {
  let correctKey = tgt[position].toLowerCase();
  tries[position]++;
  let curKey = evt.key;
  if (curKey.toLowerCase() === correctKey) {
    position++;
    tries.push(0);
    alreadyGuessed = [];
  } else {
    alreadyGuessed.push(curKey);
    wrongs++;
  }
  console.log(tries);
  updateText();
});

function getColor(numTries) {
  if (numTries <= 1) {
    return 'black';
  } else if (numTries < 3) {
    return "green";
  } else {
    return "red"
  }
}

function updateText() {
  d3.select('#tgt')
    .selectAll("span").data(tgt.slice(0, position).split(''))
    .join("span")
    .text(d => d)
    .style('color', (d, i) => getColor(tries[i]))

  d3.select("#alreadyGuessed").text(alreadyGuessed.join(' '));

  d3.select('#total')
    .text("" + wrongs)
}

updateText();