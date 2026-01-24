(() => {
const MAX_SIZE = 500 * 1024;
const $ = id => document.getElementById(id);

// Theme toggle
const toggle = $('themeToggle');
toggle.onclick = () => {
  const html = document.documentElement;
  const dark = html.dataset.theme === 'dark';
  html.dataset.theme = dark ? 'light' : 'dark';
  toggle.innerText = dark ? 'Modo Escuro' : 'Modo Claro';
};

// File feedback
$('fileInput').onchange = e => {
  const f = e.target.files[0];
  $('fileLabel').innerText = f ? `Arquivo: ${f.name}` : 'Selecionar arquivo';
};

// Viewer mode
if (location.hash.length > 1) {
  $('encoder').hidden = true;
  $('viewer').hidden = false;
}

// Generate link
$('generate').onclick = () => {
  const file = $('fileInput').files[0];
  const pwd = $('password').value;
  const btn = $('generate');
  const btnText = $('btnText');

  if (!file) return setStatus('Selecione um arquivo.');
  if (!pwd) return setStatus('Informe uma senha.');
  if (file.size > MAX_SIZE) return setStatus('Arquivo maior que 500 KB.');

  btn.disabled = true;
  btnText.innerText = 'Processando…';

  const reader = new FileReader();
  reader.onload = () => {
    const base64 = reader.result.split(',')[1];
    const payload = encrypt(base64, pwd);
    const type = file.type || 'text/plain';

    const hash = `#v=1&t=${encodeURIComponent(type)}&d=${encodeURIComponent(payload)}`;
    const link = location.href.split('#')[0] + hash;

    $('shareLink').value = link;
    $('linkBox').hidden = false;

    btn.classList.add('success');
    btnText.innerText = 'Link gerado ✓';
    setStatus('Link pronto para compartilhamento.');
  };
  reader.readAsDataURL(file);
};

$('copy').onclick = () => {
  navigator.clipboard.writeText($('shareLink').value);
  setStatus('Link copiado para a área de transferência.');
};

$('open').onclick = () => {
  const pwd = $('viewPassword').value;
  if (!pwd) return alert('Informe a senha.');

  try {
    const params = new URLSearchParams(location.hash.substring(1));
    const type = decodeURIComponent(params.get('t'));
    const enc = decodeURIComponent(params.get('d'));

    const base64 = decrypt(enc, pwd);
    const blob = b64toBlob(base64, type);
    render(blob, type);
  } catch {
    alert('Senha incorreta ou link inválido.');
  }
};

function setStatus(msg) {
  $('status').innerText = msg;
}

function encrypt(data, pwd) {
  return btoa([...data].map((c,i) =>
    String.fromCharCode(c.charCodeAt(0) ^ pwd.charCodeAt(i % pwd.length))
  ).join(''));
}

function decrypt(data, pwd) {
  const raw = atob(data);
  return [...raw].map((c,i) =>
    String.fromCharCode(c.charCodeAt(0) ^ pwd.charCodeAt(i % pwd.length))
  ).join('');
}

function b64toBlob(b64, type) {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i=0;i<bin.length;i++) bytes[i] = bin.charCodeAt(i);
  return new Blob([bytes], { type });
}

function render(blob, type) {
  const c = $('content');
  c.innerHTML = '';
  const url = URL.createObjectURL(blob);

  if (type.startsWith('image')) {
    const img = document.createElement('img');
    img.src = url;
    c.appendChild(img);
  } else if (type === 'application/pdf') {
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.height = '520';
    c.appendChild(iframe);
  } else {
    const pre = document.createElement('pre');
    fetch(url).then(r=>r.text()).then(t=>pre.textContent=t);
    c.appendChild(pre);
  }
}
})();