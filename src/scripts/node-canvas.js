export function initNodeCanvas(canvasId = 'hero-canvas') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let nodes = [];
  let animationId;
  let width, height;
  let mouse = { x: -1000, y: -1000 };
  let issueNode = null;
  let issuePulse = 0;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nodeCount = prefersReduced ? 20 : 40;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = canvas.width = rect.width * devicePixelRatio;
    height = canvas.height = rect.height * devicePixelRatio;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(devicePixelRatio, devicePixelRatio);
    initNodes();
  }

  function initNodes() {
    const w = width / devicePixelRatio;
    const h = height / devicePixelRatio;
    nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1.5,
        pulse: Math.random() * Math.PI * 2,
      });
    }
    issueNode = nodes[Math.floor(Math.random() * nodes.length)];
  }

  function draw() {
    const w = width / devicePixelRatio;
    const h = height / devicePixelRatio;
    ctx.clearRect(0, 0, w, h);

    issuePulse += 0.03;

    nodes.forEach((node) => {
      if (!prefersReduced) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
      }
      node.pulse += 0.02;
    });

    const maxDist = 140;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.25;
          const isIssue = (nodes[i] === issueNode || nodes[j] === issueNode);
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          if (isIssue) {
            const pulseAlpha = alpha + Math.sin(issuePulse) * 0.15;
            ctx.strokeStyle = `rgba(239, 68, 68, ${pulseAlpha})`;
          } else {
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
          }
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    nodes.forEach((node) => {
      const isIssue = node === issueNode;
      const glow = Math.sin(node.pulse) * 0.3 + 0.7;
      const r = node.radius * (isIssue ? 1.5 + Math.sin(issuePulse) * 0.5 : 1);

      if (isIssue) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, r + 8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(239, 68, 68, ${0.1 + Math.sin(issuePulse) * 0.08})`;
        ctx.fill();
      }

      const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r);
      if (isIssue) {
        gradient.addColorStop(0, `rgba(239, 68, 68, ${glow})`);
        gradient.addColorStop(1, 'rgba(239, 68, 68, 0)');
      } else {
        gradient.addColorStop(0, `rgba(168, 85, 247, ${glow * 0.8})`);
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
      }

      ctx.beginPath();
      ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(node.x, node.y, r * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = isIssue ? '#ef4444' : '#a855f7';
      ctx.fill();
    });

  }

  function loop() {
    draw();
    animationId = requestAnimationFrame(loop);
  }

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  window.addEventListener('resize', () => {
    cancelAnimationFrame(animationId);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    resize();
    loop();
  });

  resize();
  loop();

  setInterval(() => {
    if (nodes.length > 0) {
      issueNode = nodes[Math.floor(Math.random() * nodes.length)];
    }
  }, 4000);
}
