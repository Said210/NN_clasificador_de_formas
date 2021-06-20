
let circles = [];
let squares = [];
let triangles = [];
let stars = [];
let ellipses = [];


// Cargar las imagenes a processing.
function preload() {
  for (let i = 0; i < 100; i++) {
    let index = nf(i + 1, 3, 0);
    circles[i] = loadImage('data/circle'+index+'.png');
    squares[i] = loadImage('data/rect'+index+'.png');
    triangles[i] = loadImage('data/triangle'+index+'.png');
    stars[i] = loadImage('data/star'+index+'.png');
    ellipses[i] = loadImage('data/ellipse'+index+'.png');
  }
}

let shapeClassifier;

function setup() {
  createCanvas(400, 400);
  //background(0);
  //image(squares[0], 0, 0, width, height);


  let options = {
    // LAS ENTRADAS SON ANCHO IMAGEN, ALTO IMAGEN Y CANALES (RGBA)
    inputs: [64, 64, 4],
    // Cual es la tarea de la red neural
    task: 'imageClassification',
    // Mostrar la consola
    debug: true
  };
  // Inicializamos nuestra red neural con las opciones
  shapeClassifier = ml5.neuralNetwork(options);

  // Se enseñan de forma iterativa las figuras
  for (let i = 0; i < circles.length; i++) {
    shapeClassifier.addData({ image: circles[i] }, { label: 'circle' });
    shapeClassifier.addData({ image: squares[i] }, { label: 'square' });
    shapeClassifier.addData({ image: triangles[i] }, { label: 'triangle' });
    shapeClassifier.addData({ image: ellipses[i] }, { label: 'ellipses' });
    shapeClassifier.addData({ image: stars[i] }, { label: 'star' });
  }
  // Normalizar es dejar los valores entre 0 y 1 dependiendo de su escala real
  shapeClassifier.normalizeData();

  // Numero de iteraciones / neuronas y callback a cuendo termine.
  shapeClassifier.train({ epochs: 50 }, finishedTraining);
}

function finishedTraining() {
  console.log('finished training!');
  // Guardar archivos del modelo.
  shapeClassifier.save();
}
