// Animated Hex Grid Background for OpenAI-style Portfolio
(function() {
  const canvas = document.getElementById('hex-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = window.innerWidth;
  let height = window.innerHeight;
  let hexRadius = 48;
  let hexHeight = Math.sqrt(3) * hexRadius;
  let hexWidth = 2 * hexRadius;
  let hexVert = hexHeight * 0.75;
  let t = 0;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }

  function drawHex(x, y, color) {
    ctx.save();
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      let angle = Math.PI / 3 * i;
      let px = x + hexRadius * Math.cos(angle);
      let py = y + hexRadius * Math.sin(angle);
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.globalAlpha = 0.7;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    let offsetX = (Math.sin(t/120) * 40) + 40;
    let offsetY = (Math.cos(t/140) * 40) + 40;
    for (let y = -hexHeight; y < height + hexHeight; y += hexVert) {
      for (let x = -hexWidth; x < width + hexWidth; x += hexWidth * 0.87) {
        let xOffset = ((y / hexVert) % 2) * (hexWidth * 0.43);
        let color = (Math.sin((x + y + t) / 180) > 0)
          ? 'rgba(65,202,255,0.13)'
          : 'rgba(162,89,255,0.13)';
        drawHex(x + xOffset + offsetX, y + offsetY, color);
      }
    }
    t += 1.5;
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize);
  resize();
  animate();
})(); 