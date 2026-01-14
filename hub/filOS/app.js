let pc, channel, fileBuffer, pinCode, ttlTimer, idleTimer;
const viewerSection = document.getElementById("viewer");
const hostSection = document.getElementById("host");
const content = document.getElementById("content");
const pinSpan = document.getElementById("pin");
const linkInput = document.getElementById("link");
const resultBox = document.getElementById("result");
const timerBox = document.getElementById("timer");

const config = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }] };

const isViewer = location.hash.includes("offer=");

// Bloqueios APENAS no viewer
if (isViewer) {
  ["copy","paste","cut","contextmenu"].forEach(e =>
    document.addEventListener(e, ev => ev.preventDefault())
  );
}

// Blur ao perder foco (ambos)
window.addEventListener("blur", () => document.body.classList.add("blurred"));
window.addEventListener("focus", () => document.body.classList.remove("blurred"));

// Tema light/dark
document.getElementById("themeToggle").onclick = () => {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
};

function generatePIN() {
  return Math.random().toString(36).substring(2, 6).toUpperCase();
}

// HOST
if (!isViewer) {
  document.getElementById("share").onclick = async () => {
    const file = document.getElementById("fileInput").files[0];
    if (!file) return;

    pinCode = generatePIN();
    pinSpan.innerText = pinCode;

    pc = new RTCPeerConnection(config);
    channel = pc.createDataChannel("view");

    fileBuffer = await file.arrayBuffer();

    channel.onmessage = e => {
      if (e.data === pinCode) {
        channel.send(fileBuffer);
        startTTL();
      }
    };

    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);

    const url = location.origin + location.pathname + "#offer=" + btoa(JSON.stringify(offer));
    linkInput.value = url;
    resultBox.hidden = false;
  };

  document.getElementById("copyLink").onclick = async () => {
    await navigator.clipboard.writeText(linkInput.value);
    alert("Link copiado.");
  };
}

// VIEWER
if (isViewer) {
  hostSection.hidden = true;
  viewerSection.hidden = false;

  pc = new RTCPeerConnection(config);
  pc.ondatachannel = e => {
    channel = e.channel;
    channel.onmessage = ev => renderFile(ev.data);
  };

  const offer = JSON.parse(atob(location.hash.split("offer=")[1]));
  pc.setRemoteDescription(offer).then(async () => {
    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);
  });

  document.getElementById("unlock").onclick = () => {
    channel.send(document.getElementById("pinInput").value);
    startIdle();
  };
}

function renderFile(buffer) {
  const blob = new Blob([buffer]);
  const url = URL.createObjectURL(blob);
  content.innerHTML = "";

  if (blob.type.startsWith("image")) {
    const img = document.createElement("img");
    img.src = url;
    content.appendChild(img);
  } else if (blob.type === "application/pdf") {
    const iframe = document.createElement("iframe");
    iframe.src = url;
    content.appendChild(iframe);
  } else {
    const pre = document.createElement("pre");
    fetch(url).then(r => r.text()).then(t => pre.textContent = t);
    content.appendChild(pre);
  }
}

function startTTL() {
  const ttl = Number(document.getElementById("ttl").value) * 1000;
  let remaining = ttl / 1000;

  timerBox.innerText = "Expira em: " + remaining + "s";

  ttlTimer = setInterval(() => {
    remaining--;
    timerBox.innerText = "Expira em: " + remaining + "s";
    if (remaining <= 0) destroySession();
  }, 1000);
}

function startIdle() {
  const idleLimit = Number(document.getElementById("idle")?.value || 60) * 1000;

  const reset = () => {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(destroySession, idleLimit);
  };

  ["mousemove","keydown","scroll","touchstart"].forEach(e =>
    document.addEventListener(e, reset)
  );

  reset();
}

function destroySession() {
  if (pc) pc.close();
  content.innerHTML = "Sessão encerrada";
  clearInterval(ttlTimer);
}