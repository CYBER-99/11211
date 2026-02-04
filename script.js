const content = document.getElementById("content");
const progress = document.getElementById("progress");
let step = 0;

const steps = [
  {
    html: `
      <h1>Will you be my Valentine?</h1>
      <button onclick="next()">Yes</button>
      <button id="noBtn">No</button>
    `,
    onLoad: () => {
      const noBtn = document.getElementById("noBtn");
      const move = () => {
        noBtn.style.position = "relative";
        noBtn.style.left = Math.random() * 120 - 60 + "px";
        noBtn.style.top = Math.random() * 60 - 30 + "px";
      };
      noBtn.addEventListener("mouseover", move);
      noBtn.addEventListener("touchstart", move);
    }
  },
  {
    html: `
      <h1>Are you sure?</h1>
      <p>Like… actually sure?</p>
      <button onclick="next()">Yes, I am</button>
      <button onclick="softContinue()">I need a moment</button>
    `
  },
  {
    html: `
      <p>I should be honest with you.</p>
      <h1>I overthink a lot.</h1>
      <button onclick="next()">Okay</button>
    `
  },
  {
    html: `
      <p>
        I overthink because I care.<br>
        Because you matter to me more than I know how to say.
      </p>
      <button onclick="next()">Still here</button>
    `
  },
  {
    html: `
      <p>
        I replay conversations,<br>
        not because I doubt you,<br>
        but because I want to be better for you.
      </p>
      <button onclick="next()">Still here</button>
    `
  },
  {
    html: `
      <p>
        Sometimes I get quiet.<br>
        It’s not distance — it’s me trying not to mess up something important.
      </p>
      <button onclick="next()">Still here</button>
    `
  },
  {
    html: `
      <p>
        I feel deeply.<br>
        And yeah, that scares me sometimes.
      </p>
      <button onclick="next()">Still here</button>
    `
  },
  {
    html: `
      <h1>Knowing all that…</h1>
      <p>Do you still choose me?</p>
      <button onclick="next()">Yes</button>
    `
  },
  {
    html: `
      <p>
        [Write your personal message here.<br><br>
        This is where you talk about her, not you.]
      </p>
      <div class="footer">Built for one player only.</div>
    `
  }
];

function renderProgress() {
  progress.innerHTML = "";
  steps.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = "dot" + (i <= step ? " active" : "");
    progress.appendChild(dot);
  });
}

function render() {
  content.innerHTML = steps[step].html;
  renderProgress();
  if (steps[step].onLoad) steps[step].onLoad();
}

function next() {
  step++;
  render();
}

function softContinue() {
  content.innerHTML = `
    <p>That’s okay.</p>
    <p>I’ll still be right here.</p>
  `;
  setTimeout(next, 1700);
}

render();
