const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math')
const random = require('canvas-sketch-util/random')

const settings = {
  animate: true,
  duration: 1,
  fps: 1,
  dimensions: [1080, 1080]
};

const sketch = () => {
  return ({
    context,
    width,
    height
  }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';

    const cx = 0;
    const cy = 0;

    const w = width * 0.01;
    const h = height * 0.1;

    const num = 12;
    const radius = width * 0.3;
    let x, y;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      // IDEA: Create smooth transition between switching cos on x equation to sin,
      // vice versa for y equation...
      x = cx + (radius * Math.sin(angle))
      y = cy + (radius * Math.cos(angle))

      // IDEA: Create smooth transition between switching angle and -angle(preferably)
      // In conjunction with the above transition(not occuring simultaneously, but in the same animation file. You know what I mean...)

      context.save()
      context.translate(x, y)
      context.rotate(-angle)
      context.scale(random.range(1, 3), random.range(0.2, 0.5))

      context.beginPath();
      context.rect(-w * 0.5, random.range(-h * -3, -h * 3), w, h);
      context.fill();
      context.restore()

      context.save()
      context.translate(cx, cy)
      context.rotate(-angle)

      context.lineWidth = random.range(5, 20)

      context.beginPath()
      context.arc(0, 0, random.range(radius * 0.7, radius * 1.3), slice * random.range(1, -8), slice * random.range(1, 5))
      context.stroke()
      context.restore()
    }
  };
};

canvasSketch(sketch, settings);