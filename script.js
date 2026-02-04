const content = document.getElementById("content");
let step = 0;

const steps = [
  // STEP 0
  {
    html: `
      <h1>Will you be my Valentine?</h1>
      <button onclick="next()">Yes</button>
      <button id="noBtn">No</button>
    `,
    onLoad: () => {
      const noBtn = document.getElementById("noBtn");

      const moveBtn = () => {
        noBtn.style.position = "relative";
        noBtn.style.left = Math.random() * 100 - 50 + "px";
        noBtn.style.top = Math.random() * 60 - 30 + "px";
      };

      noBtn.addEventListener("mouseover", moveBtn);
      noBtn.addEventListener("touchstart", moveBtn);
    }
  },

  // STEP 1
  {
    html: `
      <h1>Are you sure?</h1>
      <p>Like… actually sure?</p>
      <button onclick="next()">Yes, I'm sure</button>
      <button onclick="softContinue()">I need a second</button>
    `
  },

  // STEP 2
  {
    html: `
      <p>I should tell you something.</p>
      <h1>I overthink. A lot.</h1>
      <button onclick="next()">Okay</button>
    `
  },

  // STEP 3
  {
    html: `
      <p>I replay conversations.</p>
      <button onclick="next()">Still here</button>
    `
  },

  // STEP 4
  {
    html: `
      <p>I worry I said the wrong thing.</p>
      <button onclick="next()">Still here</button>
    `
  },

  // STEP 5
  {
    html: `
      <p>I care deeply, even when it scares me.</p>
      <button onclick="next()">Still here</button>
    `
  },

  // STEP 6
  {
    html: `
      <h1>Knowing all that…</h1>
      <p>Do you still choose me?</p>
      <button onclick="next()">Yes</button>
    `
  },

  // FINAL STEP
  {
    html: `
      <p>
        [Write your personal message here.<br><br>
        Be honest. Be specific. No jokes here.]
      </p>
      <div class="footer">Built for one player only.</div>
    `
  }
];

function render() {
  content.innerHTML = steps[step].html;
  if (steps[step].onLoad) steps[step].onLoad();
}

function next() {
  step++;
  render();
}

function softContinue() {
  content.innerHTML = `
    <p>Take your time.</p>
    <p>I’ll still be here.</p>
  `;
  setTimeout(next, 1500);
}

render();
