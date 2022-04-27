const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};



const sketch = () => {
  return ({ context, width, height }) => {
    width = 200;
    height = 200;
    context.fillStyle = 'black';
    context.strokeStyle = 'black'
    context.strokeRect(20, 20, width, height);
  };
};
canvasSketch(sketch, settings);
