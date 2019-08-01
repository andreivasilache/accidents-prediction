
var dataSet;
var temperatureXS = [];
var accidentsYS = [];
function preload(){
  // 365 dates obtained from every day from 2017
  dataSet = loadJSON('json/dataSet.json');
}

function setup() {
  splitData();

  let xs = tf.tensor1d(temperatureXS);
  let ys = tf.tensor1d(accidentsYS);

  xs.print();

}

function draw() {
  // put drawing code here
}

function splitData(){
  let maxTemp = 21;
  let maxAccidents = 500;
  let range = maxAccidents / maxTemp;
  for(let index = 0; index<365 ;index++) {
    temperatureXS.push((dataSet[index].temperature) / range);
    accidentsYS.push((dataSet[index].accidents) / range);
  }
}

