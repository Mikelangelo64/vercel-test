import { gsap } from 'gsap';

export const makeAnimationDesktop = (containerEl, canvasEl, ctx, imgArr) => {
  const pics = [...imgArr];

  const imageRes = 600;
  const resolution = 2;
  const mouseMagnetOriginal = 5000 * resolution;
  const params = {
    radius: 5 * resolution,
    mouseMagnet: mouseMagnetOriginal,
    mouseThreshold: 0.5,
    padding: [0.1, 0.1],
    floatingSpeed: 10,
    floatingDist: 15,
    sizeRandomness: 1,
  };

  let mouse = {
    x: -100000,
    y: -10000,
  };

  let data = [];
  let particlesData = [];
  let particlesNumber = 0;
  let activeIdx = 0;
  let size = [];

  const timeoutDuration = 4;
  const transitionDuration = 1.5;

  let loadCnt = 0;
  for (let i = 0; i < pics.length; i++) {
    const imgEl = new Image();
    imgEl.src = pics[i];

    data.push([]);

    imgEl.onload = function () {
      if (loadCnt === 0) {
        imageToParticles(imgEl);
      }

      sampleCoordinates(imgEl, i);

      if (loadCnt === pics.length - 1) {
        particlesNumber = Math.max(...data.map((arr) => arr.length));
        particlesData = new Array(particlesNumber).fill(0);
        particlesData = particlesData.map((v, i) => {
          const rad = params.radius * (0.5 + Math.random());
          return {
            color: {
              r: data[activeIdx][i].color.r,
              g: data[activeIdx][i].color.g,
              b: data[activeIdx][i].color.b,
            },
            xy: { x: data[activeIdx][i].xy.x, y: data[activeIdx][i].xy.y },
            base: { x: data[activeIdx][i].xy.x, y: data[activeIdx][i].xy.y },
            target: { x: data[activeIdx][i].xy.x, y: data[activeIdx][i].xy.y },
            rand: [Math.random(), Math.random()],
            rBase: rad,
            r: rad,
            speed: 0.5 + 0.5 * Math.random(),
            floatingTimeStart: Math.random() * 2 * Math.PI,
            floatingDist: params.floatingDist * (0.2 + Math.random()),
          };
        });
        gsap.ticker.add((t) => {
          drawDots(t);
        });
        gsap.set(containerEl, {
          opacity: 1,
        });
        addListeners();
      }
      loadCnt++;
    };
  }

  const timeout = gsap.set(switchPicture, {
    delay: timeoutDuration,
    onRepeat: switchPicture,
    repeat: -1,
    repeatDelay: timeoutDuration,
  });

  window.addEventListener('click', () => {
    timeout.pause();
    gsap.globalTimeline.getChildren().forEach((t) => {
      t.kill();
    });
    switchPicture();
    gsap.delayedCall(transitionDuration, () => {
      timeout.play(0);
    });
    gsap
      .timeline({})
      .to(params, {
        duration: 0.3,
        mouseMagnet: 0,
      })
      .to(params, {
        duration: 0.3,
        mouseMagnet: mouseMagnetOriginal,
      });
  });

  window.addEventListener('resize', () => {});

  function switchPicture() {
    const prevActiveIdx = activeIdx;
    activeIdx++;
    activeIdx %= pics.length;

    particlesData.forEach((v, idx) => {
      const d = transitionDuration * (0.5 + Math.random() * 0.5);
      if (data[activeIdx][idx]) {
        gsap.to(v.color, {
          duration: d,
          r: data[activeIdx][idx].color.r,
          g: data[activeIdx][idx].color.g,
          b: data[activeIdx][idx].color.b,
        });
        gsap.fromTo(
          v.xy,
          {
            x: data[prevActiveIdx][idx % data[prevActiveIdx].length].xy.x,
            y: data[prevActiveIdx][idx % data[prevActiveIdx].length].xy.y,
          },
          {
            duration: d,
            x: data[activeIdx][idx].xy.x,
            y: data[activeIdx][idx].xy.y,
            ease: 'slow(0.7, 0.7, false)',
          }
        );
        gsap.to(v.base, {
          duration: d,
          x: data[activeIdx][idx].xy.x,
          y: data[activeIdx][idx].xy.y,
        });
        gsap.to(v.target, {
          duration: d,
          x: data[activeIdx][idx].xy.x,
          y: data[activeIdx][idx].xy.y,
        });
        gsap.to(v, {
          r: v.rBase,
        });
      } else {
        gsap.to(v, {
          duration: 0.2,
          r: 0,
        });
        gsap.to(v.xy, {
          duration: d,
          x: data[activeIdx][idx % pics.length].xy.x,
          y: data[activeIdx][idx % pics.length].xy.y,
        });
      }
    });
  }

  function imageToParticles(img) {
    const imageRatio = img.width / img.height;

    size = [imageRes, imageRes / imageRatio];
    size = size.map((v) => resolution * v);

    canvasEl.width = size[0];
    canvasEl.height = size[1];
    canvasEl.width += 2 * params.padding[0] * size[0];
    canvasEl.height += 2 * params.padding[1] * size[1];
  }

  function addListeners() {
    containerEl.onmouseenter = function (e) {
      gsap.to(params, {
        duration: 0.5,
        mouseMagnet: mouseMagnetOriginal,
      });
    };
    containerEl.onmouseleave = function (e) {
      gsap.to(params, {
        duration: 0.5,
        mouseMagnet: 0,
      });
    };
    containerEl.onmousemove = function (e) {
      mouse.x = e.offsetX;
      mouse.y = e.offsetY;
      adjustMousePosition();
    };

    function adjustMousePosition() {
      mouse.x *= 1 + 2 * params.padding[0];
      mouse.y *= 1 + 2 * params.padding[1];
      mouse.x *= resolution;
      mouse.y *= resolution;
      mouse.x *= imageRes / containerEl.clientWidth;
      mouse.y *= imageRes / containerEl.clientWidth;
    }
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function sampleCoordinates(img, idx) {
    ctx.drawImage(
      img,
      params.padding[0] * size[0],
      params.padding[1] * size[1],
      size[0],
      size[1]
    );

    const imageData = ctx.getImageData(0, 0, canvasEl.width, canvasEl.height);

    const step = 4 * (idx === 1 ? 2 : 2.5) * resolution;
    const start = Math.ceil(params.radius);
    const endHeight = Math.floor(canvasEl.height - params.radius);
    const endWidth = Math.floor(canvasEl.width - params.radius);
    for (let i = start; i < endHeight; i += step) {
      for (let j = start; j < endWidth; j += step) {
        const whiteLimit = 120;
        const isBack =
          imageData.data[(j + i * canvasEl.width) * 4] > whiteLimit &&
          imageData.data[(j + i * canvasEl.width) * 4 + 1] > whiteLimit &&
          imageData.data[(j + i * canvasEl.width) * 4 + 2] > whiteLimit;
        const isTransparent =
          imageData.data[(j + i * canvasEl.width) * 4 + 3] < 0.5;
        if (!isBack && !isTransparent) {
          data[idx].push({
            xy: { x: j, y: i },
            color: {
              r: imageData.data[(j + i * canvasEl.width) * 4],
              g: imageData.data[(j + i * canvasEl.width) * 4 + 1],
              b: imageData.data[(j + i * canvasEl.width) * 4 + 2],
            },
            base: { x: j, y: i },
          });
        }
      }

      data[idx] = shuffleArray(data[idx]);
    }
  }

  function drawDots(t) {
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

    for (let i = 0; i < particlesNumber; i++) {
      const d = particlesData[i];
      ctx.fillStyle =
        'rgb(' + d.color.r + ', ' + d.color.g + ', ' + d.color.b + ')';

      let dX = mouse.x - d.target.x;
      let dY = mouse.y - d.target.y;

      let sqDist = dX * dX + dY * dY;

      let floatingOffset = [
        (d.rand[0] > 0.5 ? -1 : 1) *
          Math.sin(params.floatingSpeed * d.speed * t + d.floatingTimeStart) *
          d.floatingDist,
        (d.rand[1] > 0.5 ? -1 : 1) *
          Math.cos(params.floatingSpeed * d.speed * t + d.floatingTimeStart) *
          d.floatingDist,
      ];
      if (activeIdx === 1) {
        floatingOffset = floatingOffset.map((v) => v * 0.4);
      } else if (activeIdx === 2) {
        floatingOffset = floatingOffset.map((v) => v * 0.5);
      }

      const mouseOffset = [
        (params.mouseMagnet * dX) / sqDist,
        (params.mouseMagnet * dY) / sqDist,
      ];

      d.target.x = d.base.x + floatingOffset[0] - mouseOffset[0];
      d.target.y = d.base.y + floatingOffset[1] - mouseOffset[1];

      d.xy.x += (d.target.x - d.xy.x) * params.mouseThreshold;
      d.xy.y += (d.target.y - d.xy.y) * params.mouseThreshold;

      let radius = d.r;
      if (activeIdx === 1) {
        radius *= 0.8;
      } else if (activeIdx === 3) {
        radius = radius * 0.5 + 1;
      }

      ctx.beginPath();
      ctx.arc(d.xy.x, d.xy.y, radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
    }
  }
};

export const makeAnimationMobile = (containerEl, canvasEl, ctx, imgArr) => {
  const pics = [...imgArr];

  const imageRes = 600;
  const resolution = 2;
  const mouseMagnetOriginal = 5000 * resolution;
  const params = {
    radius: 5 * resolution,
    mouseMagnet: mouseMagnetOriginal,
    mouseThreshold: 0.5,
    padding: [0.1, 0.1],
    floatingSpeed: 10,
    floatingDist: 15,
    sizeRandomness: 1,
  };

  let mouse = {
    x: -100000,
    y: -10000,
  };

  let data = [];
  let particlesData = [];
  let particlesNumber = 0;
  let activeIdx = 0;
  let size = [];

  const timeoutDuration = 4;
  const transitionDuration = 1.5;

  let loadCnt = 0;
  for (let i = 0; i < pics.length; i++) {
    const imgEl = new Image();
    imgEl.src = pics[i];

    data.push([]);

    imgEl.onload = function () {
      if (loadCnt === 0) {
        imageToParticles(imgEl);
      }

      sampleCoordinates(imgEl, i);

      if (loadCnt === pics.length - 1) {
        particlesNumber = Math.max(...data.map((arr) => arr.length));
        particlesData = new Array(particlesNumber).fill(0);
        particlesData = particlesData.map((v, i) => {
          const rad = params.radius * (0.5 + Math.random());
          return {
            color: {
              r: data[activeIdx][i].color.r,
              g: data[activeIdx][i].color.g,
              b: data[activeIdx][i].color.b,
            },
            xy: { x: data[activeIdx][i].xy.x, y: data[activeIdx][i].xy.y },
            base: { x: data[activeIdx][i].xy.x, y: data[activeIdx][i].xy.y },
            target: { x: data[activeIdx][i].xy.x, y: data[activeIdx][i].xy.y },
            rand: [Math.random(), Math.random()],
            rBase: rad,
            r: rad,
            speed: 0.5 + 0.5 * Math.random(),
            floatingTimeStart: Math.random() * 2 * Math.PI,
            floatingDist: params.floatingDist * (0.2 + Math.random()),
          };
        });
        gsap.ticker.add((t) => {
          drawDots(t);
        });
        gsap.set(containerEl, {
          opacity: 1,
        });
        addListeners();
      }
      loadCnt++;
    };
  }

  const timeout = gsap.set(switchPicture, {
    delay: timeoutDuration,
    onRepeat: switchPicture,
    repeat: -1,
    repeatDelay: timeoutDuration,
  });

  window.addEventListener('click', () => {
    timeout.pause();
    gsap.globalTimeline.getChildren().forEach((t) => {
      t.kill();
    });
    switchPicture();
    gsap.delayedCall(transitionDuration, () => {
      timeout.play(0);
    });
    gsap.to(params, {
      mouseMagnet: 0,
    });
  });

  window.addEventListener('resize', () => {});

  function switchPicture() {
    const prevActiveIdx = activeIdx;
    activeIdx++;
    activeIdx %= pics.length;

    particlesData.forEach((v, idx) => {
      const d = transitionDuration * (0.5 + Math.random() * 0.5);
      if (data[activeIdx][idx]) {
        gsap.to(v.color, {
          duration: d,
          r: data[activeIdx][idx].color.r,
          g: data[activeIdx][idx].color.g,
          b: data[activeIdx][idx].color.b,
        });
        gsap.fromTo(
          v.xy,
          {
            x: data[prevActiveIdx][idx % data[prevActiveIdx].length].xy.x,
            y: data[prevActiveIdx][idx % data[prevActiveIdx].length].xy.y,
          },
          {
            duration: d,
            x: data[activeIdx][idx].xy.x,
            y: data[activeIdx][idx].xy.y,
            ease: 'slow(0.7, 0.7, false)',
          }
        );
        gsap.to(v.base, {
          duration: d,
          x: data[activeIdx][idx].xy.x,
          y: data[activeIdx][idx].xy.y,
        });
        gsap.to(v.target, {
          duration: d,
          x: data[activeIdx][idx].xy.x,
          y: data[activeIdx][idx].xy.y,
        });
        gsap.to(v, {
          r: v.rBase,
        });
      } else {
        gsap.to(v, {
          duration: 0.2,
          r: 0,
        });
        gsap.to(v.xy, {
          duration: d,
          x: data[activeIdx][idx % pics.length].xy.x,
          y: data[activeIdx][idx % pics.length].xy.y,
        });
      }
    });
  }

  function imageToParticles(img) {
    const imageRatio = img.width / img.height;

    size = [imageRes, imageRes / imageRatio];
    size = size.map((v) => resolution * v);

    canvasEl.width = size[0];
    canvasEl.height = size[1];
    canvasEl.width += 2 * params.padding[0] * size[0];
    canvasEl.height += 2 * params.padding[1] * size[1];
  }

  function addListeners() {
    containerEl.onmousemove = function (e) {
      if (params.mouseMagnet < mouseMagnetOriginal) {
        gsap.to(params, {
          mouseMagnet: mouseMagnetOriginal,
        });
      }
      mouse.x = e.offsetX;
      mouse.y = e.offsetY;
      adjustMousePosition();
    };

    function adjustMousePosition() {
      mouse.x *= 1 + 2 * params.padding[0];
      mouse.y *= 1 + 2 * params.padding[1];
      mouse.x *= resolution;
      mouse.y *= resolution;
      mouse.x *= imageRes / containerEl.clientWidth;
      mouse.y *= imageRes / containerEl.clientWidth;
    }
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function sampleCoordinates(img, idx) {
    ctx.drawImage(
      img,
      params.padding[0] * size[0],
      params.padding[1] * size[1],
      size[0],
      size[1]
    );

    const imageData = ctx.getImageData(0, 0, canvasEl.width, canvasEl.height);

    const step = 4 * (idx === 1 ? 2 : 2.5) * resolution;
    const start = Math.ceil(params.radius);
    const endHeight = Math.floor(canvasEl.height - params.radius);
    const endWidth = Math.floor(canvasEl.width - params.radius);
    for (let i = start; i < endHeight; i += step) {
      for (let j = start; j < endWidth; j += step) {
        const whiteLimit = 120;
        const isBack =
          imageData.data[(j + i * canvasEl.width) * 4] > whiteLimit &&
          imageData.data[(j + i * canvasEl.width) * 4 + 1] > whiteLimit &&
          imageData.data[(j + i * canvasEl.width) * 4 + 2] > whiteLimit;
        const isTransparent =
          imageData.data[(j + i * canvasEl.width) * 4 + 3] < 0.5;
        if (!isBack && !isTransparent) {
          data[idx].push({
            xy: { x: j, y: i },
            color: {
              r: imageData.data[(j + i * canvasEl.width) * 4],
              g: imageData.data[(j + i * canvasEl.width) * 4 + 1],
              b: imageData.data[(j + i * canvasEl.width) * 4 + 2],
            },
            base: { x: j, y: i },
          });
        }
      }

      data[idx] = shuffleArray(data[idx]);
    }
  }

  function drawDots(t) {
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);

    for (let i = 0; i < particlesNumber; i++) {
      const d = particlesData[i];
      ctx.fillStyle =
        'rgb(' + d.color.r + ', ' + d.color.g + ', ' + d.color.b + ')';

      let dX = mouse.x - d.target.x;
      let dY = mouse.y - d.target.y;

      let sqDist = dX * dX + dY * dY;

      let floatingOffset = [
        (d.rand[0] > 0.5 ? -1 : 1) *
          Math.sin(params.floatingSpeed * d.speed * t + d.floatingTimeStart) *
          d.floatingDist,
        (d.rand[1] > 0.5 ? -1 : 1) *
          Math.cos(params.floatingSpeed * d.speed * t + d.floatingTimeStart) *
          d.floatingDist,
      ];
      floatingOffset = floatingOffset.map((v) =>
        activeIdx === 2 ? v * 0.5 : v
      );

      const mouseOffset = [
        (params.mouseMagnet * dX) / sqDist,
        (params.mouseMagnet * dY) / sqDist,
      ];

      d.target.x = d.base.x + floatingOffset[0] - mouseOffset[0];
      d.target.y = d.base.y + floatingOffset[1] - mouseOffset[1];

      d.xy.x += (d.target.x - d.xy.x) * params.mouseThreshold;
      d.xy.y += (d.target.y - d.xy.y) * params.mouseThreshold;

      let radius = d.r;
      if (activeIdx === 1) {
        radius *= 0.8;
      } else if (activeIdx === 3) {
        radius = radius * 0.5 + 1;
      }

      ctx.beginPath();
      ctx.arc(d.xy.x, d.xy.y, radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
    }
  }
};
