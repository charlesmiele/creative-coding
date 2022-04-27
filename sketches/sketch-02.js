const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const degToRad = (degreees) => {
  return degreees / 180 * Math.PI
}

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';

    const cx = width * 0.5;
    const cy = height * 0.5;

    const w = width * 0.01;
    const h = height * 0.1;

    const num = 12;
    const radius = width * 0.3;
    let x, y;



    for (let i = 0; i < num; i++){
      const slice = degToRad(360 / num);
      const angle = slice * i;

      // IDEA: Create smooth transition between switching cos on x equation to sin,
      // vice versa for y equation...
      x = cx + (radius * Math.sin(angle))
      y = cy + (radius * Math.cos(angle))

      // IDEA: Create smooth transition between switching angle and -angle(preferably)
      // In conjunction with the above transition(not occuring simultaneously, but in the same animation file. You know what I mean...)

      context.save()
      context.translate(x, y)
      context.rotate(angle)
      console.log(angle)
      context.beginPath();
      if (angle === 0 || Math.PI/2 || Math.PI || Math.PI * 1.5) {
        console.log('str8 found')
      }
      context.rect(-w * 0.5, -h * 0.5, w, h);
      context.fill();
      context.restore()
    }


  };
};
function animate() {
      requestAnimationFrame(animate);
      context.clearRect(0, 0, 1080, 1080)

}
canvasSketch(sketch, settings);
