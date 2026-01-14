
let scoreHistory=[];
let improvedOnce=false;

function autoGrow(el){
el.style.height='auto';
el.style.height=(el.scrollHeight)+'px';
}

function calcUserScore(text){
let s=30;
if(text.length>50) s+=20;
if(text.length>120) s+=20;
if(text.split(" ").length>6) s+=20;
return Math.min(s,80);
}

function calcCurrentScore(text){
let base=90;
if(text.includes("Critérios")) base+=3;
if(text.includes("Formato")) base+=3;
return Math.min(base,99);
}

function setScore(el,label,score){
el.textContent=label+": "+score+"/100";
el.classList.remove("green","orange","red");
if(score>=90) el.classList.add("green");
else if(score>=60) el.classList.add("orange");
else el.classList.add("red");
}

function buildPrompt(raw,media,goal,tone){
return `Atue como especialista em ${media}.
Objetivo: ${goal}.
Tom de voz: ${tone}.
Nível de detalhamento: médio.

Contexto do usuário:
${raw}

Diretrizes:
- Linguagem clara e acessível
- Estrutura lógica
- Foco em utilidade prática
- Evitar jargões
- Priorizar precisão

Formato de saída esperado:
Texto claro, estruturado em parágrafos curtos.`;
}

function rewritePrompt(prompt){
return prompt.replace("Diretrizes:",
"Critérios avançados de qualidade:\n- Clareza emocional\n- Adequação ao público\n- Coerência narrativa\n\nDiretrizes:");
}

function drawChart(){
const c=document.getElementById("scoreChart");
const ctx=c.getContext("2d");
ctx.clearRect(0,0,c.width,c.height);
ctx.strokeStyle="#2563eb";
ctx.beginPath();
scoreHistory.forEach((s,i)=>{
const x=i*(c.width/(scoreHistory.length-1||1));
const y=c.height-(s-90)*6;
i?ctx.lineTo(x,y):ctx.moveTo(x,y);
});
ctx.stroke();
}

function generate(){
improvedOnce=false;
improveBtn.disabled=false;

const raw=document.getElementById("raw").value.trim();
if(!raw) return;

const userScore=calcUserScore(raw);
setScore(userScoreEl,"Score do usuário",userScore);

const prompt=buildPrompt(raw,media.value,goal.value,tone.value);
result.value=prompt;
autoGrow(result);

const currentScore=calcCurrentScore(prompt);
setScore(currentScoreEl,"Score atual",currentScore);

scoreHistory=[currentScore];
drawChart();
}

function improve(){
if(improvedOnce) return;
improvedOnce=true;
improveBtn.disabled=true;

const improved=rewritePrompt(result.value);
result.value=improved;
autoGrow(result);

const newScore=99;
setScore(currentScoreEl,"Score atual",newScore);

scoreHistory.push(newScore);
drawChart();
}

function copy(){
navigator.clipboard.writeText(result.value);
const t=document.getElementById("toast");
t.classList.add("show");
setTimeout(()=>t.classList.remove("show"),1500);
}

function exportPrompt(type){
const b=new Blob([result.value],{type:"text/plain"});
const a=document.createElement("a");
a.href=URL.createObjectURL(b);
a.download="prompt."+type;
a.click();
}

// theme toggle with labels + emojis
function applyTheme(t){
document.body.setAttribute("data-theme",t);
themeToggle.textContent = t==="dark" ? "☀️ Modo Claro" : "🌙 Modo Escuro";
}

const saved=localStorage.getItem("theme");
if(saved){applyTheme(saved)}
else if(window.matchMedia("(prefers-color-scheme: dark)").matches) applyTheme("dark");
else applyTheme("");

themeToggle.onclick=()=>{
const t=document.body.getAttribute("data-theme")==="dark"?"":"dark";
localStorage.setItem("theme",t);
applyTheme(t);
};

const userScoreEl=document.getElementById("userScore");
const currentScoreEl=document.getElementById("currentScore");
const improveBtn=document.getElementById("improveBtn");
