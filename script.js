const tl = new TimelineMax({ delay: 1 });

const triangle = document.querySelector(".triangle");
const light = document.querySelector(".light");
const star = document.querySelector(".star");
const insideLight = document.querySelector(".inside-light");
const rainbow = document.querySelector(".rainbow");
const text = document.querySelector("h1");
const body = document.getElementsByTagName("body");
console.log(triangle);

tl.from(text, 0.5, { ease: "elastic.out(1, 0.8)", x: -1500 })
  .from(triangle, 1.5, {
    ease: "bounce.out",
    y: -700,
    delay: 0.5
  })
  .addLabel("light")
  .from(
    light,
    0.3,
    {
      ease: "sine.out",
      scale: 0,
      transformOrigin: "10% 10%"
    },
    "light"
  )
  .from(star, 0.1, { opacity: 0, delay: 0.2 }, "light")
  .addLabel("rainbowNow")
  .from(insideLight, 0.3, { opacity: 0, delay: 0.01 }, "rainbowNow")
  .from(
    rainbow,
    0.5,
    {
      ease: "power1.out",
      scale: 0,
      transformOrigin: "00% 10%",
      delay: 0.01
    },
    "rainbowNow"
  );
