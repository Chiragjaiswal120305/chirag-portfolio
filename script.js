const spreads=[
{
chapter:"PROLOGUE / INTRODUCTION",
left:`<div class="eyebrow">A PORTFOLIO IN FIVE CHAPTERS</div><h1 class="big">CHIRAG<br><em>JAISWAL.</em></h1><p class="deck">Developer, cyber-security learner and builder of digital experiences.</p><div class="signature">Chirag</div>`,
right:`<div class="chapter">Prologue</div><p class="bodycopy dropcap">I believe a portfolio should feel less like a list of links and more like a story. This is mine — a book about curiosity, code, security, automation and the things I am learning to build.</p><p class="quote">“Build things that are useful.<br>Then make them memorable.”</p>`
},
{
chapter:"CHAPTER I / ABOUT",
left:`<div class="eyebrow">CHAPTER I</div><h2 class="folio-title">A little<br>about me.</h2><p class="bodycopy dropcap">I'm Chirag Jaiswal, currently pursuing an MCA with a focus on Cyber Security. I enjoy understanding how digital systems work — and then figuring out how to make them better, safer and more useful.</p>`,
right:`<p class="bodycopy">My interests sit where <em>development, security and intelligent automation</em> meet. I work with web technologies, APIs, databases and AI-powered workflows, while continuously building my security knowledge.</p><div class="skills"><div class="skill"><small>FOCUS</small><strong>Cyber Security</strong></div><div class="skill"><small>FIELD</small><strong>Full Stack</strong></div><div class="skill"><small>INTEREST</small><strong>AI Automation</strong></div><div class="skill"><small>BASED</small><strong>Rajasthan, India</strong></div></div>`
},
{
chapter:"CHAPTER II / SELECTED WORK",
left:`<div class="eyebrow">CHAPTER II</div><h2 class="folio-title">Selected<br>work.</h2><div class="project"><b>01</b><div><h3>Make My Drip</h3><p>Personal fashion assistant creating outfits around budget, body details and preferences, with product discovery across shopping platforms.</p></div></div><div class="project"><b>02</b><div><h3>Security Lab</h3><p>Defensive security experiments, networking exercises and secure-development practice.</p></div></div>`,
right:`<div class="project"><b>03</b><div><h3>AI Workflows</h3><p>Experiments connecting APIs, webhooks, n8n and intelligent services to automate repetitive digital work.</p></div></div><p class="quote">Projects are where theory becomes something you can touch, test and improve.</p><p class="chapter">MORE WORK IS ALWAYS BEING WRITTEN →</p>`
},
{
chapter:"CHAPTER III / TOOLBOX",
left:`<div class="eyebrow">CHAPTER III</div><h2 class="folio-title">The tools<br>I write with.</h2><p class="bodycopy">Technology changes quickly. I care more about understanding the system than collecting logos — but these are the tools currently in my notebook.</p>`,
right:`<div class="skills"><div class="skill"><small>01 / FRONTEND</small><strong>HTML · CSS · JS · React</strong></div><div class="skill"><small>02 / BACKEND</small><strong>Node · Express · PHP</strong></div><div class="skill"><small>03 / DATA</small><strong>MongoDB · MySQL · SQL</strong></div><div class="skill"><small>04 / LANGUAGES</small><strong>C · C++ · Java · Python</strong></div><div class="skill"><small>05 / SECURITY</small><strong>Linux · Networks · Web</strong></div><div class="skill"><small>06 / AUTOMATION</small><strong>n8n · APIs · Webhooks</strong></div></div>`
},
{
chapter:"EPILOGUE / JOURNEY & CONTACT",
left:`<div class="eyebrow">CHAPTER IV</div><h2 class="folio-title">The journey<br>so far.</h2><div class="timeline"><div class="event"><small>FOUNDATION</small><h3>BCA</h3><p>SS Jain PG College</p></div><div class="event"><small>CURRENT CHAPTER</small><h3>MCA · Cyber Security</h3><p>JECRC NCR Campus, Alwar</p></div><div class="event"><small>NEXT</small><h3>Keep building.</h3><p>The story continues.</p></div></div>`,
right:`<div class="eyebrow">EPILOGUE</div><h2 class="folio-title">Let's write<br>something new.</h2><p class="bodycopy">If you're building something interesting, exploring an idea, or simply want to connect — this page is intentionally left open.</p><div class="contact-links"><a href="mailto:jaiswalc172@gmail.com"><span>EMAIL</span><span>↗</span></a><a href="#"><span>GITHUB</span><span>↗</span></a><a href="#"><span>LINKEDIN</span><span>↗</span></a></div><div class="signature">The End — for now.</div>`
}
];
let current=0,busy=false;
const L=document.querySelector("#leftContent"),R=document.querySelector("#rightContent"),sheet=document.querySelector("#flipSheet"),chapter=document.querySelector("#chapter"),label=document.querySelector("#spreadLabel"),prog=document.querySelector("#progress"),ln=document.querySelector("#leftNum"),rn=document.querySelector("#rightNum");
function render(){let s=spreads[current];L.innerHTML=s.left;R.innerHTML=s.right;chapter.textContent=s.chapter;label.textContent=String(current+1).padStart(2,"0")+" / "+String(spreads.length).padStart(2,"0");prog.style.width=((current+1)/spreads.length*100)+"%";ln.textContent=String(current*2+1).padStart(2,"0");rn.textContent=String(current*2+2).padStart(2,"0")}
function turn(dir){if(busy)return;let n=current+dir;if(n<0||n>=spreads.length)return;busy=true;sheet.classList.remove("go");void sheet.offsetWidth;sheet.classList.add("go");setTimeout(()=>{current=n;render()},350);setTimeout(()=>{sheet.classList.remove("go");busy=false},740)}
document.querySelector("#next").onclick=()=>turn(1);document.querySelector("#nextBtn").onclick=()=>turn(1);document.querySelector("#prev").onclick=()=>turn(-1);addEventListener("keydown",e=>{if(e.key==="ArrowRight")turn(1);if(e.key==="ArrowLeft")turn(-1)});render();
// Premium book hover: subtle 3D tilt, lift, warm cursor light and content transitions.
const book3d=document.querySelector("#book");
const glow=document.createElement("div"); glow.className="book-glow"; document.body.appendChild(glow);
if(innerWidth>760){
  book3d.addEventListener("mouseenter",()=>{book3d.classList.add("hovering");glow.classList.add("on")});
  book3d.addEventListener("mousemove",e=>{
    const r=book3d.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
    book3d.style.transform=`perspective(1800px) rotateX(${-y*2.2}deg) rotateY(${x*2.8}deg) translateY(-5px) scale(1.008)`;
    glow.style.left=(e.clientX-140)+"px"; glow.style.top=(e.clientY-140)+"px";
  });
  book3d.addEventListener("mouseleave",()=>{
    book3d.classList.remove("hovering");glow.classList.remove("on");book3d.style.transform="";
  });
}
const oldRender=render;
render=function(){
  oldRender();
  [L,R].forEach(el=>{
    el.classList.remove("enter"); void el.offsetWidth; el.classList.add("enter");
  });
};
render();
