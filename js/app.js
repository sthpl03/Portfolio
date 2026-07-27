/* ============================================
   SECTION CONTENT DATA
   ============================================ */
const SECTIONS = {
  education: {
    numeral: 'I',
    title: 'Education',
    content: `
      <div class="section-card">
        <h3 class="section-card__heading">Case Western Reserve University</h3>
        <p class="section-card__sub">Cleveland, OH — Expected May 2030</p>
        <div class="section-card__body">
          <p>Bachelor of Science in Computer Science — AI &amp; Cybersecurity</p>
        </div>
      </div>
      <div class="section-card">
        <h3 class="section-card__heading">North Plainfield High School</h3>
        <p class="section-card__sub">North Plainfield, NJ — June 2026</p>
        <div class="section-card__body">
          <ul>
            <li>SAT: 1440 (Math 730 · Verbal 710)</li>
            <li>Class Rank: 5 of 303</li>
            <li>GPA: 4.1658 / 4.3333 UW</li>
            <li>QuestBridge Finalist</li>
          </ul>
        </div>
      </div>
      <a href="#" class="learn-more-btn">Learn More &rarr;</a>
    `
  },

  experience: {
    numeral: 'II',
    title: 'Experience & Leadership',
    content: `
      <div class="section-card">
        <h3 class="section-card__heading">Johnson &amp; Johnson</h3>
        <p class="section-card__sub">Technology Awareness Program — Raritan, NJ — Jan–May 2026</p>
        <div class="section-card__body">
          <ul>
            <li>Led a 4-student group to first place in a 19-student competition</li>
            <li>Attended J&amp;J lectures on business management, cybersecurity, and the future of tech &amp; medicine</li>
            <li>Presented a prototype for AI-powered glasses to assist with medicine product identification</li>
            <li>Collaborated with three J&amp;J employees who served as subject-matter experts</li>
          </ul>
        </div>
      </div>
      <div class="section-card">
        <h3 class="section-card__heading">STEAM Competitions Club</h3>
        <p class="section-card__sub">President — North Plainfield, NJ — Feb 2024–Jun 2026</p>
        <div class="section-card__body">
          <ul>
            <li>Rebranded and revived the club from 4 to 10+ active members</li>
            <li>Led outreach, organized activities, and promoted national/state competitions</li>
            <li>Directed 2 competitions in a single year as the school's only STEAM-focused club</li>
          </ul>
        </div>
      </div>
      <a href="#" class="learn-more-btn">Learn More &rarr;</a>
    `
  },

  projects: {
    numeral: 'III',
    title: 'Technical Projects',
    content: `
      <div class="section-card">
        <h3 class="section-card__heading">Educational Prep Games</h3>
        <p class="section-card__sub">May 2025 — Present</p>
        <div class="section-card__body">
          <ul>
            <li>Independently developed 3 Roblox AP games (AP Lang, AP Lit, AP CSA)</li>
            <li>Attracted 2,784 players across all three games</li>
            <li>Over 10,409 total questions answered by players</li>
            <li>22,118+ views across 4 TikTok promotional videos</li>
            <li>Self-taught Lua to build algorithms turning AP questions into interactive quizzes</li>
          </ul>
        </div>
      </div>
      <a href="#" class="learn-more-btn">Learn More &rarr;</a>
    `
  },

  competitions: {
    numeral: 'V',
    title: 'Competitions',
    content: `
      <div class="section-card">
        <h3 class="section-card__heading">TSA Webmaster Competition</h3>
        <p class="section-card__sub">Dec 2024 — May 2025</p>
        <div class="section-card__body">
          <ul>
            <li>Ranked 9th in a state-wide team competition as a duo team</li>
            <li>Built approximately 80% of the website using HTML, CSS, JavaScript, and Bootstrap</li>
            <li>Hosted on GitHub Pages with remote collaboration</li>
          </ul>
        </div>
      </div>
      <div class="section-card">
        <h3 class="section-card__heading">Lockheed Martin Code Quest</h3>
        <p class="section-card__sub">Jan–Feb 2026 — USA-wide</p>
        <div class="section-card__body">
          <ul>
            <li>Ranked top 4 in division in a national online coding competition</li>
            <li>Solved approximately 80% of engineering and algorithmic problems using Python and Java</li>
            <li>Persisted until the competition ended after all teammates had left</li>
          </ul>
        </div>
      </div>
      <div class="section-card">
        <h3 class="section-card__heading">Garden State Cyber CTF</h3>
        <p class="section-card__sub">Feb 2026 — New Jersey</p>
        <div class="section-card__body">
          <ul>
            <li>Ranked top 25% out of 500+ teams in a cybersecurity CTF</li>
            <li>Solved approximately 90% of team challenges, reaching 8,875 points</li>
            <li>Covered crypto, forensics, OSINT, web security, binary exploitation, networking</li>
            <li>Utilized AI, virtual machines, Wireshark, CyberChef, and more</li>
          </ul>
        </div>
      </div>
      <a href="#" class="learn-more-btn">Learn More &rarr;</a>
    `
  },

  skills: {
    numeral: 'IV',
    title: 'Technical Skills',
    content: `
      <p class="skills-category">Languages</p>
      <div class="skills-grid" style="margin-bottom:24px;">
        <span class="skill-pill">Java</span>
        <span class="skill-pill">Python</span>
        <span class="skill-pill">JavaScript</span>
        <span class="skill-pill">Lua</span>
        <span class="skill-pill">CSS</span>
        <span class="skill-pill">HTML</span>
      </div>
      <p class="skills-category">Tools</p>
      <div class="skills-grid" style="margin-bottom:24px;">
        <span class="skill-pill">Figma</span>
        <span class="skill-pill">VS Code</span>
        <span class="skill-pill">Roblox Studio</span>
        <span class="skill-pill">Git</span>
      </div>
      <p class="skills-category">Frameworks</p>
      <div class="skills-grid">
        <span class="skill-pill">Node.js</span>
        <span class="skill-pill">React</span>
        <span class="skill-pill">TypeScript</span>
      </div>
      <a href="#" class="learn-more-btn" style="margin-top: 24px;">Learn More &rarr;</a>
    `
  },

  contact: {
    numeral: 'VI',
    title: 'Contact',
    content: `
      <div class="contact-links">
        <a href="mailto:carlos.mendezchiriboga@case.edu" class="contact-link">
          <span class="contact-link__icon">✉</span>
          <div>
            <strong>Email</strong><br/>
            <span>carlos.mendezchiriboga@case.edu</span>
          </div>
        </a>
        <a href="tel:+19084279923" class="contact-link">
          <span class="contact-link__icon">☎</span>
          <div>
            <strong>Phone</strong><br/>
            <span>(908) 427-9923</span>
          </div>
        </a>
        <a href="https://github.com/sthpl03" target="_blank" rel="noopener" class="contact-link">
          <span class="contact-link__icon">⟠</span>
          <div>
            <strong>GitHub</strong><br/>
            <span>github.com/sthpl03</span>
          </div>
        </a>
        <a href="https://leetcode.com/u/sthpl03/" target="_blank" rel="noopener" class="contact-link">
          <span class="contact-link__icon">⟡</span>
          <div>
            <strong>LeetCode</strong><br/>
            <span>leetcode.com/u/sthpl03</span>
          </div>
        </a>
        <div class="contact-link" style="cursor:default;">
          <span class="contact-link__icon">◉</span>
          <div>
            <strong>Location</strong><br/>
            <span>Cleveland, OH</span>
          </div>
        </div>
      </div>
      <div class="contact-form">
        <h3 class="section-card__heading" style="margin-bottom: 12px;">Send a Message</h3>
        <form onsubmit="event.preventDefault(); alert('Message sent successfully!');">
          <input type="text" class="form-input" placeholder="Your Name" required />
          <input type="email" class="form-input" placeholder="Your Email" required />
          <textarea class="form-input form-textarea" placeholder="Your Message" required></textarea>
          <button type="submit" class="form-submit">Send Message</button>
        </form>
      </div>
    `
  }
};

/* ============================================
   DOM REFERENCES
   ============================================ */
const world = document.getElementById('world');
const svg = document.getElementById('connections-svg');
const centerEl = document.getElementById('center-node');
const overlay = document.getElementById('modal-overlay');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
const panHint = document.getElementById('pan-hint');

const categoryIds = [
  'node-education', 'node-experience', 'node-projects',
  'node-skills', 'node-competitions', 'node-contact'
];

// Track which nodes have been "connected" (clicked)
const connectedNodes = new Set();

// Store the center coordinates of every node (for accurate SVG lines)
const nodePositions = new Map();

// Store generated polar coordinates so layout persists on window resize
const nodePolarCoords = new Map();

// Store references to SVG lines by node id
const lineElements = new Map();

/* ============================================
   WORLD SETUP & NODE PLACEMENT
   ============================================ */
const WORLD_SCALE = 2.0;

function setupWorld() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const worldW = vw * WORLD_SCALE;
  const worldH = vh * WORLD_SCALE;

  // Size the world and center it so the middle of the world
  // is exactly at the middle of the viewport (when pan = 0)
  world.style.width = worldW + 'px';
  world.style.height = worldH + 'px';
  world.style.left = -(worldW - vw) / 2 + 'px';
  world.style.top = -(worldH - vh) / 2 + 'px';

  // Size SVG to match world
  svg.setAttribute('width', worldW);
  svg.setAttribute('height', worldH);
  svg.style.width = worldW + 'px';
  svg.style.height = worldH + 'px';

  const cx = worldW / 2;
  const cy = worldH / 2;

  // ---- Place center node ----
  centerEl.style.left = cx + 'px';
  centerEl.style.top = cy + 'px';
  nodePositions.set('center-node', { x: cx, y: cy });

  // ---- Randomly place category nodes ----
  // Safe area limits (relative to cx/cy) so nodes remain fully visible and reachable.
  // We keep them 100px away from the absolute edge of the world.
  const maxDistX = worldW / 2 - 100;
  const maxDistY = worldH / 2 - 100;

  const minR = 300;
  let maxR = Math.min(maxDistX, maxDistY);
  if (maxR < minR + 50) maxR = minR + 50;

  categoryIds.forEach((id, i) => {
    const el = document.getElementById(id);
    let polar = nodePolarCoords.get(id);

    // If first time placing this node, generate random angle in its own 60-degree slice
    if (!polar) {
      let attempts = 0;
      let angle, r, testX, testY;
      const baseAngle = i * (Math.PI / 3);

      do {
        // Random jitter up to ±25 degrees within its slice
        const jitter = (Math.random() - 0.5) * (Math.PI / 3.6);
        angle = baseAngle + jitter;
        r = minR + Math.random() * (maxR - minR);
        testX = cx + r * Math.cos(angle);
        testY = cy + r * Math.sin(angle);
        attempts++;

        const overlapCenter = Math.abs(testX - cx) < 300 && Math.abs(testY - cy) < 140;
        const outOfBounds = Math.abs(testX - cx) > maxDistX || Math.abs(testY - cy) > maxDistY;

        if (!overlapCenter && !outOfBounds) break;
      } while (attempts < 100);

      polar = { angle, r };
      nodePolarCoords.set(id, polar);
    }

    // Apply the saved polar coordinates (cap r if window shrank)
    const currentR = Math.min(polar.r, maxR);
    const x = cx + currentR * Math.cos(polar.angle);
    const y = cy + currentR * Math.sin(polar.angle);

    el.style.left = x + 'px';
    el.style.top = y + 'px';
    
    // Add staggered entrance animation (center fades in from 0.2s to 1.2s, so we stagger after)
    const delay = 600 + i * 150;
    el.style.animation = `fade-in-up 1s ease ${delay}ms forwards`;

    nodePositions.set(id, { x, y });
  });

  // Draw all dotted lines from center to each node
  drawAllDottedLines();
}

/* ============================================
   DOTTED LINES (visible from the start)
   ============================================ */
function drawAllDottedLines() {
  svg.innerHTML = '';
  lineElements.clear();

  const center = nodePositions.get('center-node');

  categoryIds.forEach((id, i) => {
    const pos = nodePositions.get(id);
    if (!center || !pos) return;

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.classList.add('connection-line');
    line.setAttribute('x1', center.x);
    line.setAttribute('y1', center.y);
    line.setAttribute('x2', pos.x);
    line.setAttribute('y2', pos.y);

    // Stagger line animation to match its node
    const delay = 600 + i * 150;
    line.style.animation = `fade-in-line 1s ease ${delay}ms forwards`;

    // If already connected, make it solid
    if (connectedNodes.has(id)) {
      line.classList.add('active');
    }

    svg.appendChild(line);
    lineElements.set(id, line);

    // Endpoint dot (only visible if connected)
    const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dot.classList.add('connection-dot');
    dot.setAttribute('cx', pos.x);
    dot.setAttribute('cy', pos.y);
    dot.setAttribute('r', '2.5');
    if (connectedNodes.has(id)) {
      dot.classList.add('active');
    }
    svg.appendChild(dot);
    // Store dot reference alongside line
    lineElements.set(id + '-dot', dot);
  });
}

/* ============================================
   ACTIVATE A LINE (dotted → solid on click)
   ============================================ */
function activateLine(nodeId) {
  if (connectedNodes.has(nodeId)) return;
  connectedNodes.add(nodeId);

  const el = document.getElementById(nodeId);
  el.classList.add('connected');

  const line = lineElements.get(nodeId);
  if (line) {
    line.classList.add('active');
  }

  const dot = lineElements.get(nodeId + '-dot');
  if (dot) {
    dot.classList.add('active');
  }
}

/* ============================================
   CURSOR-BASED PANNING
   ============================================ */
let panX = 0;
let panY = 0;
let targetPanX = 0;
let targetPanY = 0;
let hasMoved = false;

function getPanRange() {
  return {
    x: window.innerWidth * (WORLD_SCALE - 1),
    y: window.innerHeight * (WORLD_SCALE - 1)
  };
}

function onMouseMove(e) {
  const range = getPanRange();
  // Normalize mouse position to -0.5 … +0.5
  const nx = (e.clientX / window.innerWidth) - 0.5;
  const ny = (e.clientY / window.innerHeight) - 0.5;

  targetPanX = -nx * range.x;
  targetPanY = -ny * range.y;

  if (!hasMoved) {
    hasMoved = true;
    panHint.classList.add('hidden');
  }
}

function animatePan() {
  panX += (targetPanX - panX) * 0.06;
  panY += (targetPanY - panY) * 0.06;

  world.style.transform = `translate3d(${panX}px, ${panY}px, 0)`;
  requestAnimationFrame(animatePan);
}

document.addEventListener('mousemove', onMouseMove);
requestAnimationFrame(animatePan);

/* ============================================
   MODAL SYSTEM
   ============================================ */
function openModal(sectionKey) {
  const section = SECTIONS[sectionKey];
  if (!section) return;

  modalContent.innerHTML = `
    <div class="modal-title">
      <span class="modal-title__icon">${section.numeral}.</span>
      ${section.title}
    </div>
    <div class="modal-divider"></div>
    ${section.content}
  `;

  overlay.classList.add('active');
}

function closeModal() {
  overlay.classList.remove('active');
}

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => {
  if (e.target === overlay) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ============================================
   NODE CLICK HANDLERS
   ============================================ */
document.querySelectorAll('.category-node').forEach(node => {
  node.addEventListener('click', () => {
    const key = node.dataset.section;
    activateLine(node.id);
    openModal(key);
  });
});

/* ============================================
   INIT
   ============================================ */
window.addEventListener('DOMContentLoaded', () => {
  setupWorld();
});

window.addEventListener('resize', () => {
  setupWorld();
});
