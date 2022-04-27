const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random')
const math = require('canvas-sketch-util/math')

const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true
};

const params = {
  cols: 2,
  rows: 50,
  rows: 50,
  scaleMin: 1,
  scaleMax: 15,
  freq: 0.001,
  amp: 0.2,
  animate: true,
  frame: 0
};

const sketch = () => {
  return ({ context, width, height, frame }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    const rows = params.rows;
    const cols = params.cols
    const numCells = cols * rows
    console.log(numCells)

    const gridw = width * 0.8;
    const gridh = height * 0.8;
    const cellw = gridw/cols;
    const cellh = gridh/rows;
    const margx = (width - gridw) * 0.5;
    const margy = (height - gridh) * 0.5;


    for (let i = 0; i < numCells; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols)

      const x = col * cellw;
      const y = row * cellh;
      const w = cellw * 0.8;
      const h = cellh * 0.8;

      const f = params.animate ? frame : params.frame

      // const n = random.noise2D(x + frame * 10, y, params.freq)
      const n = random.noise3D(x, y, f * 10,  params.freq)
      const angle = n * Math.PI * params.amp
      const scale = math.mapRange(n, -1, 1, params.scaleMin, params.scaleMax)


      context.save();
      context.translate(x, y)
      context.translate(margx, margy)
      context.translate(cellw * 0.5, cellh * 0.5)
      context.rotate(angle)

      context.lineWidth = scale;
      context.strokeStyle = 'yellow'

      context.beginPath()
      context.moveTo(w * -0.5, 0)
      context.lineTo(w * 0.5, 0)
      context.stroke()

      context.restore()
    }
  };
};

canvasSketch(sketch, settings);
