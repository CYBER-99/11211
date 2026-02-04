const content = document.getElementById("content");
const progress = document.getElementById("progress");
let step = 0;

const steps = [
  {
    html: `
      <h1>Will you be my Valentine?</h1>
      <p>
        I know this might feel like a small question…<br>
        especially when we’ve already been together for a year.
      </p>
      <button onclick="next()">Yes</button>
      <button id="noBtn">No</button>
    `,
    onLoad: () => {
      const noBtn = document.getElementById("noBtn");
      const move = () => {
        noBtn.style.position = "relative";
        noBtn.style.left = Math.random() * 120 - 60 + "px";
      };
      noBtn.addEventListener("mouseover", move);
      noBtn.addEventListener("touchstart", move);
    }
  },
  {
    html: `
      <p>
        Do you remember when I asked you once,<br>
        <b>“Do you really deserve this new me?”</b>
      </p>
      <button onclick="next()">I remember</button>
    `
  },
  {
    html: `
      <p>
        I said I didn’t have an answer back then.<br>
        But the truth is… I did.
      </p>
      <button onclick="next()">Tell me</button>
    `
  },
  {
    html: `
      <p>
        You deserved it.<br>
        And honestly, you deserve even more.
      </p>
      <button onclick="next()">Still here</button>
    `
  },
  {
    html: `
      <p>
        I overthink a lot because I care.<br>
        I get rude sometimes, I suspect sometimes…
      </p>
      <button onclick="next()">I know</button>
    `
  },
  {
    html: `
      <p>
        That’s because you’re the only one<br>
        who actually cares when I show my feelings.
      </p>
      <button onclick="next()">Still here</button>
    `
  },
  {
    html: `
      <p>
        The world ignored my existence more times than I can count.<br>
        And slowly… I stopped calling it my world.
      </p>
      <button onclick="next()">And?</button>
    `
  },
  {
    html: `
      <p>
        I think you became my world.<br>
        Because you cared.
      </p>
      <button onclick="next()">Still here</button>
    `
  },
  {
    html: `
      <p>
        People don’t believe online relationships last.<br>
        Even I wasn’t sure at first.
      </p>
      <button onclick="next()">But now?</button>
    `
  },
  {
    html: `
      <p>
        Love isn’t about being physically there.<br>
        It’s about choosing each other every day.
      </p>
      <button onclick="next()">I agree</button>
    `
  },
  {
    html: `
      <p>
        You chose me when I really needed someone.<br>
        And I’ll never forget that.
      </p>
      <button onclick="next()">…</button>
    `
  },
  {
    html: `
      <h1>So I’ll ask again.</h1>
      <p>Will you be my Valentine?</p>
      <button onclick="next()">Yes</button>
    `
  },
  {
    html: `
      <p>
        Till our last breath.<br><br>
        Thank you for choosing me.<br>
        Always.
      </p>
      <div class="footer">Built for one heart only.</div>
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

render();
