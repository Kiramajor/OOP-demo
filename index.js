class Animation {
  constructor(selector) {
    this.selector = document.querySelector(selector);
  }
  fadeOut(time, toggle = false) {
    if (toggle && this.selector.classList.contains("fade-active")) {
      this.selector.style.opacity = 1;
      this.selector.classList.remove("fade-active");
    } else {
      this.selector.style.transition = `all ${time}s ease`;
      this.selector.style.opacity = 0;
      this.selector.classList.add("fade-active");
    }
  }

  transform(time, toggle = false, { x = 0, y = 0 }) {
    if (toggle && this.selector.classList.contains("move-active")) {
      this.selector.style.transform = "translate(0px, 0px)";
      this.selector.classList.remove("move-active");
    } else {
      this.selector.style.transition = `all ${time}s ease`;
      this.selector.style.transform = `translate(${x}px, ${y}px)`;
      this.selector.classList.add("move-active");
    }
  }
}

const intro = new Animation("h1");
const para = new Animation("p");

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  intro.transform(1, true, { x: 100 });
});
