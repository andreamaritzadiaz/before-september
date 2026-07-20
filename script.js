const bucketList = [
    {
        title: "sunrise hike before work day",
        completed: false,
        note: "this one is still on the list *:.",
        media: [],
        scrapbook: [
            { type: 'text', content: 'golden hour magic ✨', x: 60, y: 40, fontSize: 22, rotation: -3 },
            { type: 'sticker', name: '🌞', x: 350, y: 30, scale: 1.3 },
            { type: 'sticker', name: '⛰️', x: 500, y: 120, scale: 1.1 },
            { type: 'text', content: 'woke up at 4:30am\nworth every second', x: 80, y: 350, fontSize: 14, rotation: 1.5 },
            { type: 'sticker', name: '❤️', x: 200, y: 200, scale: 0.9 },
            { type: 'sticker', name: '☀️', x: 600, y: 300, scale: 1.4 }
        ]
    },
    {
        title: "jump off the lake union bridge",
        completed: false,
        note: "this one is still on the list ^_^",
        media: [],
        scrapbook: []
    },
    {
        title: "sunset paddle board & pizza from cornelly",
        completed: true,
        note: "this one is still on the list .:**.",
        media: [],
        scrapbook: [
            { type: 'image', x: 52, y: 542, rotation: 3.44, src: 'images/paddleboarding-5.jpg', width: 180 },
            { type: 'image', x: 638, y: 130, rotation: -2.10, src: 'images/paddleboarding-6.jpg', width: 365 },
            { type: 'image', x: 606, y: 737, rotation: -0.81, src: 'images/paddleboarding-7.jpg', width: 371 },
            { type: 'image', x: 417, y: 515, rotation: 2.05, src: 'images/paddleboarding-2.jpg', width: 180 },
            { type: 'image', x: 1259, y: 689, rotation: -3.03, src: 'images/paddleboarding-9.jpg', width: 251 },
            { type: 'image', x: 984, y: 505, rotation: -0.07, src: 'images/paddleboarding-3.jpg', width: 223 },
            { type: 'image', x: 193, y: 69, rotation: 3.43, src: 'images/paddleboarding-4.jpg', width: 276 },
            { type: 'image', x: 217, y: 761, rotation: -3.82, src: 'images/paddleboarding-8.jpg', width: 253 },
            { type: 'image', x: 1176, y: 111, rotation: 1.98, src: 'images/paddleboarding-1.jpg', width: 260 }
        ]
    },
    {
        title: "run a summer 5k",
        completed: false,
        note: "this one is still on the list =)",
        media: [],
        scrapbook: []
    },
    {
        title: "go camping in the washington forest",
        completed: false,
        note: "this one is still on the list *:.",
        media: [],
        scrapbook: []
    },
    {
        title: "take a solo day trip",
        completed: true,
        note: "this one is still on the list ^_^",
        media: [],
        spotify: "https://open.spotify.com/embed/track/37kzuSrUdgkC3X22F0bLbw?utm_source=generator&theme=0",
        spotifyTitle: "Butterfly Season",
        spotifyArtist: "Ella Langley",
        spotifyArt: "https://i.scdn.co/image/ab67616d00001e028606848da949bbaddf447d87",
        scrapbook: [
            { type: 'image', x: 226, y: 14, rotation: 3.88, src: 'images/IMG_2834.jpg', width: 262 },
            { type: 'image', x: 18, y: 49, rotation: 0.13, src: 'images/IMG_2848.jpg', width: 233 },
            { type: 'video', x: 807, y: 17, rotation: -3.22, src: 'images/IMG_2847.MOV', width: 240 },
            { type: 'image', x: 32, y: 632, rotation: -1.93, src: 'images/IMG_2888.jpg', width: 180 },
            { type: 'image', x: 312, y: 672, rotation: 2.09, src: 'images/IMG_2928.jpg', width: 300 },
            { type: 'image', x: 417, y: 452, rotation: -0.44, src: 'images/IMG_2889.jpg', width: 214 },
            { type: 'image', x: 69, y: 407, rotation: 0.23, src: 'images/IMG_2913.jpg', width: 252 },
            { type: 'image', x: 709, y: 698, rotation: 3.27, src: 'images/IMG_2993.jpg', width: 180 },
            { type: 'image', x: 299, y: 189, rotation: 2.18, src: 'images/IMG_2865.jpg', width: 304 },
            { type: 'image', x: 614, y: 100, rotation: -2.41, src: 'images/IMG_2949.jpg', width: 180 },
            { type: 'image', x: 664, y: 475, rotation: 2.83, src: 'images/IMG_2987.jpg', width: 242 },
            { type: 'image', x: 1165, y: 57, rotation: 2.74, src: 'images/IMG_2960.jpg', width: 279 },
            { type: 'image', x: 938, y: 509, rotation: 0.99, src: 'images/IMG_2944.jpg', width: 216 },
            { type: 'image', x: 1191, y: 528, rotation: -2.84, src: 'images/IMG_2985.jpg', width: 246 },
            { type: 'image', x: 1036, y: 206, rotation: 3.36, src: 'images/IMG_2969.jpg', width: 180 }
        ]
    },
    {
        title: "watch the fireworks at a mariners game",
        completed: false,
        note: "this one is still on the list .:**.",
        media: [],
        scrapbook: []
    },
    {
        title: "watch a sounders game",
        completed: false,
        note: "this one is still on the list =)",
        media: [],
        scrapbook: []
    },
    {
        title: "go tide pooling",
        completed: false,
        note: "this one is still on the list *:.",
        media: [],
        scrapbook: []
    },
    {
        title: "take salsa classes",
        completed: false,
        note: "this one is still on the list ^_^",
        media: [],
        scrapbook: []
    },
    {
        title: "build one hardware project",
        completed: false,
        note: "this one is still on the list .:**.",
        media: [],
        scrapbook: []
    }
];

const container = document.getElementById('floatingItems');
const homeView = document.getElementById('homeView');
const detailView = document.getElementById('detailView');
const detailTitle = document.getElementById('detailTitle');
const detailNote = document.getElementById('detailNote');
const mediaGrid = document.getElementById('mediaGrid');
const backBtn = document.getElementById('backBtn');
const cursorStar = document.getElementById('cursorStar');

// ─── Custom Star Cursor ───
let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorStar.style.left = e.clientX + 'px';
    cursorStar.style.top = e.clientY + 'px';
    spawnGlowDot(e.clientX, e.clientY);
});

// ─── Glow Trail ───
let lastGlow = 0;
function spawnGlowDot(x, y) {
    const now = Date.now();
    if (now - lastGlow < 40) return;
    lastGlow = now;

    const dot = document.createElement('div');
    dot.className = 'glow-dot';
    dot.style.left = x + 'px';
    dot.style.top = y + 'px';
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 800);
}

// ─── Hover state for cursor ───
document.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('floating-item') || e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
        cursorStar.classList.add('hovering');
    }
});
document.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('floating-item') || e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
        cursorStar.classList.remove('hovering');
    }
});

// ─── Sound Effects (Web Audio) [PAUSED] ───
/*
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let currentSound = 'chime';

function playChime(index) {
    const baseFreq = 600 + (index % 5) * 80;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.2, audioCtx.currentTime + 0.1);

    gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.4);
}

function playSparkle(index) {
    const t = audioCtx.currentTime;
    const baseFreq = 1200 + (index % 5) * 100;

    [0, 0.06].forEach((delay, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(baseFreq + i * 400, t + delay);
        gain.gain.setValueAtTime(0.05, t + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, t + delay + 0.2);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(t + delay);
        osc.stop(t + delay + 0.2);
    });
}

function playBubble(index) {
    const baseFreq = 400 + (index % 5) * 60;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq * 1.5, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.5, audioCtx.currentTime + 0.15);

    gain.gain.setValueAtTime(0.07, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.2);
}

function playClick(index) {
    const bufferSize = audioCtx.sampleRate * 0.02;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 10);
    }
    const source = audioCtx.createBufferSource();
    const gain = audioCtx.createGain();
    source.buffer = buffer;
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    source.connect(gain);
    gain.connect(audioCtx.destination);
    source.start();
}

function playMusicBox(index) {
    const baseFreq = 800 + (index % 7) * 100;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(baseFreq, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.8);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.8);
}

function playPluck(index) {
    const baseFreq = 500 + (index % 5) * 120;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(baseFreq, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);

    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(3000, audioCtx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.15);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.2);
}

function playSound(index) {
    switch (currentSound) {
        case 'chime': playChime(index); break;
        case 'sparkle': playSparkle(index); break;
        case 'bubble': playBubble(index); break;
        case 'click': playClick(index); break;
        case 'music-box': playMusicBox(index); break;
        case 'pluck': playPluck(index); break;
    }
}

// ─── Generative Ambient Background Music ───
let ambientStarted = false;
let ambientMuted = false;
const ambientGain = audioCtx.createGain();
ambientGain.gain.setValueAtTime(0.12, audioCtx.currentTime);
ambientGain.connect(audioCtx.destination);

function startAmbient() {
    if (ambientStarted) return;
    ambientStarted = true;

    function createWaveLayer(duration, delay, peakGain, filterFreq) {
        const bufferSize = audioCtx.sampleRate * duration;
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        function playWave() {
            const source = audioCtx.createBufferSource();
            source.buffer = buffer;

            const filter = audioCtx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(filterFreq, audioCtx.currentTime);

            const gain = audioCtx.createGain();
            const t = audioCtx.currentTime;
            gain.gain.setValueAtTime(0, t);
            gain.gain.linearRampToValueAtTime(peakGain, t + duration * 0.4);
            gain.gain.setValueAtTime(peakGain, t + duration * 0.5);
            gain.gain.linearRampToValueAtTime(0, t + duration * 0.95);

            source.connect(filter);
            filter.connect(gain);
            gain.connect(ambientGain);
            source.start(t);
            source.stop(t + duration);

            setTimeout(playWave, (duration - 1) * 1000);
        }

        setTimeout(playWave, delay * 1000);
    }

    createWaveLayer(8, 0, 0.18, 400);
    createWaveLayer(10, 2, 0.12, 300);
    createWaveLayer(6, 4, 0.08, 600);
    createWaveLayer(12, 1, 0.06, 200);
}

function toggleAmbient() {
    ambientMuted = !ambientMuted;
    ambientGain.gain.linearRampToValueAtTime(
        ambientMuted ? 0 : 0.12,
        audioCtx.currentTime + 0.3
    );
    const muteBtn = document.getElementById('muteBtn');
    muteBtn.textContent = ambientMuted ? 'Unmute' : 'Mute';
}

function tryStartAmbient() {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    startAmbient();
    ['click', 'keydown', 'touchstart'].forEach(evt => {
        document.removeEventListener(evt, tryStartAmbient);
    });
    const hint = document.getElementById('audioHint');
    if (hint) hint.style.opacity = '0';
    setTimeout(() => { if (hint) hint.remove(); }, 500);
}

['click', 'keydown', 'touchstart'].forEach(evt => {
    document.addEventListener(evt, tryStartAmbient, { once: true });
});
*/

// ─── Positioning (right side of screen, no overlap) ───
const placedRects = [];

function getNonOverlappingPosition(el) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    if (vw <= 768) return { x: 0, y: 0 };

    const leftBound = vw * 0.45;
    const rightBound = vw - 30;
    const topBound = 60;
    const bottomBound = vh - 60;

    const rect = el.getBoundingClientRect();
    const w = rect.width + 20;
    const h = rect.height + 16;

    let bestX = leftBound;
    let bestY = topBound;
    let placed = false;

    for (let attempt = 0; attempt < 100; attempt++) {
        const x = leftBound + Math.random() * (rightBound - leftBound - w);
        const y = topBound + Math.random() * (bottomBound - topBound - h);

        let overlaps = false;
        for (const r of placedRects) {
            if (x < r.x + r.w && x + w > r.x && y < r.y + r.h && y + h > r.y) {
                overlaps = true;
                break;
            }
        }

        if (!overlaps) {
            bestX = x;
            bestY = y;
            placed = true;
            break;
        }
    }

    if (!placed) {
        bestX = leftBound + Math.random() * (rightBound - leftBound - w);
        bestY = topBound + Math.random() * (bottomBound - topBound - h);
    }

    placedRects.push({ x: bestX, y: bestY, w, h });
    return { x: bestX, y: bestY };
}

// ─── Floating Items with Mouse Drift ───
const itemElements = [];
const itemPositions = [];

function createFloatingItems() {
    container.innerHTML = '';
    itemElements.length = 0;
    itemPositions.length = 0;
    placedRects.length = 0;

    bucketList.forEach((item, index) => {
        const el = document.createElement('div');
        el.className = 'floating-item';
        el.textContent = item.title;

        container.appendChild(el);
        const pos = getNonOverlappingPosition(el);
        el.style.left = pos.x + 'px';
        el.style.top = pos.y + 'px';

        const duration = 4 + Math.random() * 3;
        const delay = Math.random() * -5;
        const floatDist = -8 - Math.random() * 12;
        const rotateStart = (Math.random() - 0.5) * 2;
        const rotateEnd = (Math.random() - 0.5) * 2;

        el.style.setProperty('--duration', duration + 's');
        el.style.setProperty('--delay', delay + 's');
        el.style.setProperty('--float-distance', floatDist + 'px');
        el.style.setProperty('--rotate-start', rotateStart + 'deg');
        el.style.setProperty('--rotate-end', rotateEnd + 'deg');

        el.addEventListener('click', () => openDetail(item));
        // el.addEventListener('mouseenter', () => {
        //     playSound(index);
        //     if (audioCtx.state === 'suspended') audioCtx.resume();
        // });

        itemElements.push(el);
        itemPositions.push({ baseX: pos.x, baseY: pos.y, offsetX: 0, offsetY: 0 });
    });
}

// ─── Mouse Drift Effect ───
function updateDrift() {
    itemElements.forEach((el, i) => {
        const pos = itemPositions[i];
        const rect = el.getBoundingClientRect();
        const itemCenterX = rect.left + rect.width / 2;
        const itemCenterY = rect.top + rect.height / 2;

        const dx = itemCenterX - mouseX;
        const dy = itemCenterY - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const maxDist = 200;
        const strength = 25;
        const isHovered = mouseX >= rect.left && mouseX <= rect.right && mouseY >= rect.top && mouseY <= rect.bottom;

        if (isHovered) {
            pos.offsetX *= 0.85;
            pos.offsetY *= 0.85;
        } else if (dist < maxDist && dist > 0) {
            const force = (1 - dist / maxDist) * strength;
            const angle = Math.atan2(dy, dx);
            pos.offsetX += (Math.cos(angle) * force - pos.offsetX) * 0.08;
            pos.offsetY += (Math.sin(angle) * force - pos.offsetY) * 0.08;
        } else {
            pos.offsetX *= 0.95;
            pos.offsetY *= 0.95;
        }

        if (Math.abs(pos.offsetX) > 0.1 || Math.abs(pos.offsetY) > 0.1) {
            el.style.translate = `${pos.offsetX}px ${pos.offsetY}px`;
        }
    });

    requestAnimationFrame(updateDrift);
}
requestAnimationFrame(updateDrift);

// ─── Detail View ───
var openDetail = function(item) {
    detailTitle.textContent = item.title;
    detailNote.textContent = item.note;

    mediaGrid.innerHTML = '';
    if (item.completed && item.media.length > 0) {
        item.media.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = item.title;
            mediaGrid.appendChild(img);
        });
    }

    detailView.classList.remove('hidden');
    const slug = item.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
    history.replaceState(null, '', '#' + slug);
}

function closeDetail() {
    detailView.classList.add('hidden');
    const existingSpotify = document.getElementById('spotifyEmbed');
    if (existingSpotify) existingSpotify.remove();
    history.replaceState(null, '', window.location.pathname);
}

backBtn.addEventListener('click', closeDetail);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDetail();
});

createFloatingItems();
window.addEventListener('resize', createFloatingItems);


// ─── Font Toggle ───
const fontToggle = document.getElementById('fontToggle');
const h1 = document.querySelector('header h1');
h1.classList.add('font-cs-mileya');

if (fontToggle) {
    fontToggle.addEventListener('click', (e) => {
        const btn = e.target.closest('.font-option');
        if (!btn) return;

        fontToggle.querySelectorAll('.font-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        h1.classList.remove('font-dear-camille', 'font-pixelify', 'font-press-start', 'font-cs-mileya');
        h1.classList.add('font-' + btn.dataset.font);
    });
}

// ─── Sound Toggle [PAUSED] ───
/*
const soundToggle = document.getElementById('soundToggle');

soundToggle.addEventListener('click', (e) => {
    const btn = e.target.closest('.sound-option');
    if (!btn) return;

    soundToggle.querySelectorAll('.sound-option').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    currentSound = btn.dataset.sound;
    if (audioCtx.state === 'suspended') audioCtx.resume();
    playSound(0);
});
*/

// ═══════════════════════════════════════════════════════════════════════
// SCRAPBOOK EDITOR
// ═══════════════════════════════════════════════════════════════════════

const scrapbookCanvas = document.getElementById('scrapbookCanvas');
const scrapbookToolbar = document.getElementById('scrapbookToolbar');
const scrapbookEmpty = document.getElementById('scrapbookEmpty');
const sbEditToggle = document.getElementById('sbEditToggle');
const sbAddPhoto = document.getElementById('sbAddPhoto');
const sbAddText = document.getElementById('sbAddText');
const sbAddSticker = document.getElementById('sbAddSticker');
const sbAddAudio = document.getElementById('sbAddAudio');
const sbSave = document.getElementById('sbSave');
const stickerPicker = document.getElementById('stickerPicker');
const stickerGrid = document.getElementById('stickerGrid');
const stickerPickerClose = document.getElementById('stickerPickerClose');

const editAllowed = new URLSearchParams(window.location.search).has('edit') || window.location.hostname === 'localhost';
if (!editAllowed) {
    sbEditToggle.style.display = 'none';
}

let editMode = false;
let currentItem = null;
let selectedElement = null;
let dragState = null;

// Available stickers
const STICKERS = [
    '⭐', '❤️', '🌞', '🌻', '🌺',
    '🦋', '🌈', '🌴', '🍓', '🍦',
    '🎉', '😎', '✨', '💛', '🌟',
    '🌊', '⛵', '🧊', '🍄', '🌸'
];

// ─── Toggle Edit Mode ───
sbEditToggle.addEventListener('click', () => {
    if (!editAllowed) return;
    editMode = !editMode;
    sbEditToggle.classList.toggle('active', editMode);
    sbEditToggle.textContent = editMode ? '✔ done editing' : '✎ edit scrapbook';
    scrapbookToolbar.classList.toggle('hidden', !editMode);
    scrapbookCanvas.classList.toggle('edit-mode', editMode);

    if (!editMode) {
        deselectAll();
    }
});

// ─── Add Photo/Video ───
sbAddPhoto.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*,video/*';
    input.multiple = true;
    input.onchange = (e) => {
        Array.from(e.target.files).forEach(file => {
            const reader = new FileReader();
            reader.onload = (ev) => {
                const isVideo = file.type.startsWith('video');
                const el = createScrapbookElement({
                    type: isVideo ? 'video' : 'image',
                    src: ev.target.result,
                    x: 50 + Math.random() * 200,
                    y: 50 + Math.random() * 150,
                    width: 180,
                    rotation: (Math.random() - 0.5) * 8
                });
                el.dataset.filename = 'images/' + file.name;
                scrapbookCanvas.appendChild(el);
                updateEmptyState();
            };
            reader.readAsDataURL(file);
        });
    };
    input.click();
});

// ─── Add Text ───
sbAddText.addEventListener('click', () => {
    const el = createScrapbookElement({
        type: 'text',
        content: 'click to edit~',
        x: 100 + Math.random() * 150,
        y: 100 + Math.random() * 100,
        fontSize: 18,
        rotation: (Math.random() - 0.5) * 6
    });
    scrapbookCanvas.appendChild(el);
    updateEmptyState();
});

// ─── Add Sticker ───
sbAddSticker.addEventListener('click', () => {
    stickerPicker.classList.remove('hidden');
});

stickerPickerClose.addEventListener('click', () => {
    stickerPicker.classList.add('hidden');
});

// Populate sticker grid
STICKERS.forEach(emoji => {
    const btn = document.createElement('button');
    btn.textContent = emoji;
    btn.addEventListener('click', () => {
        const el = createScrapbookElement({
            type: 'sticker',
            name: emoji,
            x: 80 + Math.random() * 250,
            y: 80 + Math.random() * 200,
            scale: 1
        });
        scrapbookCanvas.appendChild(el);
        stickerPicker.classList.add('hidden');
        updateEmptyState();
    });
    stickerGrid.appendChild(btn);
});

// ─── Add Audio ───
sbAddAudio.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'audio/*';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            const el = createScrapbookElement({
                type: 'audio',
                src: ev.target.result,
                label: file.name,
                x: 100 + Math.random() * 200,
                y: 100 + Math.random() * 150
            });
            scrapbookCanvas.appendChild(el);
            updateEmptyState();
        };
        reader.readAsDataURL(file);
    };
    input.click();
});

// ─── Create Scrapbook Element DOM ───
function createScrapbookElement(data) {
    const wrapper = document.createElement('div');
    wrapper.className = 'sb-element';
    wrapper.dataset.type = data.type;
    wrapper.style.left = data.x + 'px';
    wrapper.style.top = data.y + 'px';

    const rotation = data.rotation || 0;
    const scale = data.scale || 1;
    wrapper.style.transform = `rotate(${rotation}deg) scale(${scale})`;
    wrapper.dataset.rotation = rotation;
    wrapper.dataset.scale = scale;

    switch (data.type) {
        case 'image':
            wrapper.classList.add('sb-element-image');
            if (data.width) wrapper.style.width = data.width + 'px';
            const img = document.createElement('img');
            img.src = data.src;
            img.draggable = false;
            wrapper.appendChild(img);
            break;

        case 'video':
            wrapper.classList.add('sb-element-image');
            if (data.width) wrapper.style.width = data.width + 'px';
            const vid = document.createElement('video');
            vid.src = data.src;
            vid.controls = true;
            vid.playsInline = true;
            vid.draggable = false;
            vid.style.width = '100%';
            vid.style.pointerEvents = 'all';
            wrapper.appendChild(vid);
            break;

        case 'text':
            wrapper.classList.add('sb-element-text');
            const textSpan = document.createElement('span');
            textSpan.className = 'sb-text-content';
            textSpan.textContent = data.content;
            wrapper.appendChild(textSpan);
            wrapper.style.fontSize = (data.fontSize || 18) + 'px';
            wrapper.dataset.fontSize = data.fontSize || 18;
            wrapper.addEventListener('dblclick', (e) => {
                if (!editMode) return;
                e.stopPropagation();
                textSpan.contentEditable = 'true';
                textSpan.focus();
                wrapper.classList.add('editing');
                const stopEditing = () => {
                    textSpan.contentEditable = 'false';
                    wrapper.classList.remove('editing');
                    textSpan.removeEventListener('blur', stopEditing);
                };
                textSpan.addEventListener('blur', stopEditing);
            });
            break;

        case 'sticker':
            wrapper.classList.add('sb-element-sticker');
            const stickerSpan = document.createElement('span');
            stickerSpan.className = 'sb-sticker-content';
            stickerSpan.textContent = data.name;
            wrapper.appendChild(stickerSpan);
            break;

        case 'audio':
            wrapper.classList.add('sb-element-audio');
            const audioIcon = document.createElement('span');
            audioIcon.className = 'sb-audio-icon';
            audioIcon.textContent = '🎵';
            const audioLabel = document.createElement('span');
            audioLabel.className = 'sb-audio-label';
            audioLabel.textContent = data.label || 'audio clip';
            const audioEl = document.createElement('audio');
            audioEl.src = data.src;
            wrapper.appendChild(audioIcon);
            wrapper.appendChild(audioLabel);
            wrapper.appendChild(audioEl);
            wrapper.dataset.label = data.label || 'audio clip';
            // Click to play/pause
            wrapper.addEventListener('dblclick', (e) => {
                e.stopPropagation();
                if (audioEl.paused) {
                    audioEl.play();
                    wrapper.classList.add('playing');
                } else {
                    audioEl.pause();
                    wrapper.classList.remove('playing');
                }
            });
            break;
    }

    // Control handles (only visible when selected in edit mode)
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'sb-delete-btn';
    deleteBtn.textContent = '×';
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        wrapper.remove();
        selectedElement = null;
        updateEmptyState();
    });
    wrapper.appendChild(deleteBtn);

    const moveToFrontBtn = document.createElement('button');
    moveToFrontBtn.className = 'sb-layer-btn sb-to-front';
    moveToFrontBtn.textContent = '↑ front';
    moveToFrontBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        scrapbookCanvas.appendChild(wrapper);
    });
    wrapper.appendChild(moveToFrontBtn);

    const moveToBackBtn = document.createElement('button');
    moveToBackBtn.className = 'sb-layer-btn sb-to-back';
    moveToBackBtn.textContent = '↓ back';
    moveToBackBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        scrapbookCanvas.insertBefore(wrapper, scrapbookCanvas.querySelector('.sb-element'));
    });
    wrapper.appendChild(moveToBackBtn);

    const resizeHandle = document.createElement('div');
    resizeHandle.className = 'sb-resize-handle';
    wrapper.appendChild(resizeHandle);

    const rotateHandle = document.createElement('div');
    rotateHandle.className = 'sb-rotate-handle';
    rotateHandle.textContent = '↻';
    wrapper.appendChild(rotateHandle);

    // Event listeners for drag
    wrapper.addEventListener('mousedown', (e) => {
        if (!editMode) return;
        if (e.target === resizeHandle || e.target === rotateHandle || e.target === deleteBtn) return;
        if (wrapper.classList.contains('editing')) return;

        e.preventDefault();
        selectElement(wrapper);

        const rect = scrapbookCanvas.getBoundingClientRect();
        dragState = {
            el: wrapper,
            mode: 'move',
            startX: e.clientX,
            startY: e.clientY,
            origX: parseInt(wrapper.style.left),
            origY: parseInt(wrapper.style.top)
        };
    });

    // Resize
    resizeHandle.addEventListener('mousedown', (e) => {
        if (!editMode) return;
        e.preventDefault();
        e.stopPropagation();
        const rect = wrapper.getBoundingClientRect();
        dragState = {
            el: wrapper,
            mode: 'resize',
            startX: e.clientX,
            startY: e.clientY,
            origWidth: rect.width,
            origScale: parseFloat(wrapper.dataset.scale) || 1,
            origFontSize: parseFloat(wrapper.dataset.fontSize) || 18
        };
    });

    // Rotate
    rotateHandle.addEventListener('mousedown', (e) => {
        if (!editMode) return;
        e.preventDefault();
        e.stopPropagation();
        const rect = wrapper.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        dragState = {
            el: wrapper,
            mode: 'rotate',
            centerX,
            centerY,
            origRotation: parseFloat(wrapper.dataset.rotation) || 0,
            startAngle: Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI)
        };
    });

    return wrapper;
}

// ─── Mouse move/up for drag/resize/rotate ───
document.addEventListener('mousemove', (e) => {
    if (!dragState) return;

    const { el, mode, startX, startY } = dragState;

    if (mode === 'move') {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        el.style.left = (dragState.origX + dx) + 'px';
        el.style.top = (dragState.origY + dy) + 'px';
    } else if (mode === 'resize') {
        const dx = e.clientX - startX;
        if (el.dataset.type === 'sticker') {
            const newScale = Math.max(0.3, dragState.origScale + dx / 100);
            el.dataset.scale = newScale;
            el.style.transform = `rotate(${el.dataset.rotation || 0}deg) scale(${newScale})`;
        } else if (el.dataset.type === 'text') {
            const newSize = Math.max(8, dragState.origFontSize + dx / 4);
            el.style.fontSize = newSize + 'px';
            el.dataset.fontSize = newSize;
        } else {
            const newWidth = Math.max(60, dragState.origWidth + dx);
            el.style.width = newWidth + 'px';
        }
    } else if (mode === 'rotate') {
        const currentAngle = Math.atan2(
            e.clientY - dragState.centerY,
            e.clientX - dragState.centerX
        ) * (180 / Math.PI);
        const deltaAngle = currentAngle - dragState.startAngle;
        const newRotation = dragState.origRotation + deltaAngle;
        el.dataset.rotation = newRotation;
        const scale = el.dataset.scale || 1;
        el.style.transform = `rotate(${newRotation}deg) scale(${scale})`;
    }
});

document.addEventListener('mouseup', () => {
    dragState = null;
});

// ─── Selection ───
function selectElement(el) {
    deselectAll();
    el.classList.add('selected');
    selectedElement = el;

    // Enable text editing on text elements
    if (el.dataset.type === 'text' && editMode) {
        const textSpan = el.querySelector('.sb-text-content');
        if (textSpan) textSpan.contentEditable = 'true';
    }
}

function deselectAll() {
    document.querySelectorAll('.sb-element.selected').forEach(el => {
        el.classList.remove('selected');
        if (el.dataset.type === 'text') {
            const textSpan = el.querySelector('.sb-text-content');
            if (textSpan) textSpan.contentEditable = 'false';
        }
    });
    selectedElement = null;
}

// Click on canvas background to deselect
scrapbookCanvas.addEventListener('mousedown', (e) => {
    if (e.target === scrapbookCanvas && editMode) {
        deselectAll();
    }
});

// ─── Empty state ───
function updateEmptyState() {
    const hasElements = scrapbookCanvas.querySelectorAll('.sb-element').length > 0;
    scrapbookEmpty.classList.toggle('hidden', hasElements);
    detailNote.style.display = hasElements ? 'none' : '';
}

// ─── Save / Export to JSON ───
function toRelativePath(src) {
    if (src.includes('/images/')) {
        return 'images/' + src.split('/images/').pop();
    }
    return src;
}

function getCanvasLayout() {
    const elements = scrapbookCanvas.querySelectorAll('.sb-element');
    const layout = [];

    elements.forEach(el => {
        const type = el.dataset.type;
        const base = {
            type,
            x: parseInt(el.style.left),
            y: parseInt(el.style.top),
            rotation: parseFloat(el.dataset.rotation) || 0
        };

        switch (type) {
            case 'image':
            case 'video':
                let mediaSrc = el.querySelector('img, video')?.src || '';
                if (mediaSrc.startsWith('data:')) {
                    mediaSrc = el.dataset.filename || mediaSrc;
                }
                mediaSrc = toRelativePath(mediaSrc);
                base.src = mediaSrc;
                base.width = parseInt(el.style.width) || 180;
                break;
            case 'text':
                base.content = el.querySelector('.sb-text-content')?.textContent || '';
                base.fontSize = parseInt(el.dataset.fontSize) || 18;
                break;
            case 'sticker':
                base.name = el.querySelector('.sb-sticker-content')?.textContent || '';
                base.scale = parseFloat(el.dataset.scale) || 1;
                break;
            case 'audio':
                let audioSrc = el.querySelector('audio')?.src || '';
                if (audioSrc.startsWith('data:')) {
                    audioSrc = el.dataset.filename || audioSrc;
                }
                audioSrc = toRelativePath(audioSrc);
                base.src = audioSrc;
                base.label = el.dataset.label || 'audio clip';
                break;
        }

        layout.push(base);
    });

    return layout;
}

function saveToLocalStorage() {
    if (!currentItem) return;
    const layout = getCanvasLayout();
    const storageKey = 'scrapbook-' + currentItem.title;
    localStorage.setItem(storageKey, JSON.stringify(layout));
    currentItem.scrapbook = layout;

    // Save Spotify position relative to canvas
    const spotifyEl = document.getElementById('spotifyEmbed');
    if (spotifyEl && currentItem.spotify) {
        const pos = { x: parseInt(spotifyEl.style.left) || 0, y: parseInt(spotifyEl.style.top) || 0 };
        localStorage.setItem('spotify-pos-' + currentItem.title, JSON.stringify(pos));
    }
}

function loadFromLocalStorage(item) {
    const storageKey = 'scrapbook-' + item.title;
    const saved = localStorage.getItem(storageKey);
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {}
    }
    return null;
}

function loadFromJsonFile(item) {
    const slug = item.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
    const filename = `scrapbook-${slug}.json`;
    return fetch(filename)
        .then(r => { if (!r.ok) throw new Error('not found'); return r.json(); })
        .then(data => data.scrapbook || null)
        .catch(() => null);
}

sbSave.addEventListener('click', () => {
    saveToLocalStorage();

    // Also export JSON file for persistence
    const layout = getCanvasLayout();
    const slug = (currentItem?.title || 'scrapbook').replace(/[^a-z0-9]+/gi, '-').toLowerCase();
    const exportData = { item: currentItem?.title, scrapbook: layout };
    const json = JSON.stringify(exportData, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `scrapbook-${slug}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast('Saved & exported!');
});

// ─── Export for publishing ───
const sbExportBtn = document.createElement('button');
sbExportBtn.className = 'sb-tool-btn';
sbExportBtn.textContent = '📁 export';
sbExportBtn.title = 'Download JSON for publishing';
sbExportBtn.addEventListener('click', () => {
    const layout = getCanvasLayout();
    const slug = (currentItem?.title || 'scrapbook').replace(/[^a-z0-9]+/gi, '-').toLowerCase();
    const exportData = { item: currentItem?.title, scrapbook: layout };
    const json = JSON.stringify(exportData, null, 2);

    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `scrapbook-${slug}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast(`Exported scrapbook-${slug}.json`);
});
document.getElementById('scrapbookToolbar').appendChild(sbExportBtn);

function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'sb-toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}


// ─── Render Scrapbook From Data ───
function renderScrapbook(item) {
    // Clear existing scrapbook elements
    scrapbookCanvas.querySelectorAll('.sb-element').forEach(el => el.remove());
    scrapbookCanvas.style.width = '';
    scrapbookCanvas.style.height = '';
    scrapbookCanvas.style.transform = '';

    // Check localStorage first, then JSON file, then hardcoded data
    const localData = loadFromLocalStorage(item);
    if (localData) {
        renderScrapbookData(localData);
    } else {
        loadFromJsonFile(item).then(fileData => {
            renderScrapbookData(fileData || item.scrapbook);
        });
    }
}

function renderScrapbookData(scrapbookData) {
    // Clear again in case async loaded
    scrapbookCanvas.querySelectorAll('.sb-element').forEach(el => el.remove());
    scrapbookCanvas.style.width = '';
    scrapbookCanvas.style.height = '';
    scrapbookCanvas.style.transform = '';

    if (scrapbookData && scrapbookData.length > 0) {
        let maxRight = 0, maxBottom = 0;

        scrapbookData.forEach(data => {
            const el = createScrapbookElement(data);
            scrapbookCanvas.appendChild(el);

            const right = (data.x || 0) + (data.width || 250) + 40;
            const bottom = (data.y || 0) + (data.width || 250) + 40;
            if (right > maxRight) maxRight = right;
            if (bottom > maxBottom) maxBottom = bottom;
        });

        // Set intrinsic canvas size based on content
        scrapbookCanvas.style.width = maxRight + 'px';
        scrapbookCanvas.style.height = maxBottom + 'px';

        // Scale canvas to fit viewport
        scaleScrapbookCanvas(maxRight, maxBottom);
    }

    updateEmptyState();
}

// ─── Responsive Scaling ───
let canvasNaturalWidth = 0;
let canvasNaturalHeight = 0;

function scaleScrapbookCanvas(naturalWidth, naturalHeight) {
    canvasNaturalWidth = naturalWidth || parseInt(scrapbookCanvas.style.width) || 0;
    canvasNaturalHeight = naturalHeight || parseInt(scrapbookCanvas.style.height) || 0;

    if (!canvasNaturalWidth) return;

    // On mobile, CSS handles the flow layout — don't scale
    if (window.innerWidth <= 768) {
        scrapbookCanvas.style.transform = '';
        scrapbookCanvas.parentElement.style.minHeight = '';
        return;
    }

    const containerWidth = detailView.clientWidth - 80;
    const scale = Math.min(1.4, containerWidth / canvasNaturalWidth);

    scrapbookCanvas.style.transform = `scale(${scale})`;
    scrapbookCanvas.style.height = canvasNaturalHeight + 'px';

    // Set wrapper height to account for scaling
    const scaledHeight = canvasNaturalHeight * scale;
    scrapbookCanvas.parentElement.style.minHeight = scaledHeight + 'px';
}

window.addEventListener('resize', () => {
    if (canvasNaturalWidth && !detailView.classList.contains('hidden')) {
        scaleScrapbookCanvas();
    }
});

// ─── Patch openDetail to include scrapbook ───
const _originalOpenDetail = openDetail;
openDetail = function(item) {
    currentItem = item;
    _originalOpenDetail(item);

    const hasScrapbook = item.scrapbook && item.scrapbook.length > 0;

    // Show status note OR empty state, never both
    if (hasScrapbook) {
        detailNote.style.display = 'none';
        scrapbookEmpty.classList.add('hidden');
    } else {
        detailNote.style.display = '';
        scrapbookEmpty.classList.remove('hidden');
    }

    // Reset edit mode
    editMode = false;
    sbEditToggle.classList.remove('active');
    sbEditToggle.textContent = '✎ edit scrapbook';
    scrapbookToolbar.classList.add('hidden');
    scrapbookCanvas.classList.remove('edit-mode');

    // Spotify player
    const existingSpotify = document.getElementById('spotifyEmbed');
    if (existingSpotify) existingSpotify.remove();
    if (item.spotify) {
        const wrapper = document.createElement('div');
        wrapper.id = 'spotifyEmbed';
        wrapper.className = 'spotify-embed';

        // Load saved position (relative to canvas)
        const savedPos = localStorage.getItem('spotify-pos-' + item.title);
        if (savedPos) {
            const pos = JSON.parse(savedPos);
            wrapper.style.left = pos.x + 'px';
            wrapper.style.top = pos.y + 'px';
        } else {
            wrapper.style.left = '30px';
            wrapper.style.top = '30px';
        }

        const dragHandle = document.createElement('div');
        dragHandle.className = 'spotify-drag-handle';
        dragHandle.textContent = '⋮⋮';
        if (!editAllowed) dragHandle.style.display = 'none';
        wrapper.appendChild(dragHandle);

        // Custom player UI
        const playerUI = document.createElement('div');
        playerUI.className = 'spotify-custom-player';

        const albumArt = document.createElement('img');
        albumArt.className = 'spotify-album-art';
        albumArt.src = item.spotifyArt || '';
        albumArt.alt = 'Album art';

        const trackInfo = document.createElement('div');
        trackInfo.className = 'spotify-track-info';
        const trackTitle = document.createElement('span');
        trackTitle.className = 'spotify-track-title';
        trackTitle.textContent = item.spotifyTitle || 'Unknown';
        const trackArtist = document.createElement('span');
        trackArtist.className = 'spotify-track-artist';
        trackArtist.textContent = item.spotifyArtist || 'Unknown';
        trackInfo.appendChild(trackTitle);
        trackInfo.appendChild(trackArtist);

        const playBtn = document.createElement('button');
        playBtn.className = 'spotify-play-btn';
        playBtn.textContent = '▶';

        playerUI.appendChild(albumArt);
        playerUI.appendChild(trackInfo);
        playerUI.appendChild(playBtn);
        wrapper.appendChild(playerUI);

        // Hidden iframe for actual playback
        const iframe = document.createElement('iframe');
        iframe.src = item.spotify;
        iframe.width = '300';
        iframe.height = '80';
        iframe.frameBorder = '0';
        iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
        iframe.allowFullscreen = true;
        iframe.loading = 'lazy';
        iframe.className = 'spotify-hidden-iframe';
        wrapper.appendChild(iframe);


        scrapbookCanvas.appendChild(wrapper);

        // Make draggable via handle (position relative to canvas)
        let isDragging = false, dragOffsetX = 0, dragOffsetY = 0;
        dragHandle.addEventListener('mousedown', (e) => {
            isDragging = true;
            const canvasRect = scrapbookCanvas.getBoundingClientRect();
            const scale = canvasRect.width / scrapbookCanvas.offsetWidth || 1;
            dragOffsetX = (e.clientX - canvasRect.left) / scale - (parseInt(wrapper.style.left) || 0);
            dragOffsetY = (e.clientY - canvasRect.top) / scale - (parseInt(wrapper.style.top) || 0);
            e.preventDefault();
        });
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const canvasRect = scrapbookCanvas.getBoundingClientRect();
            const scale = canvasRect.width / scrapbookCanvas.offsetWidth || 1;
            wrapper.style.left = ((e.clientX - canvasRect.left) / scale - dragOffsetX) + 'px';
            wrapper.style.top = ((e.clientY - canvasRect.top) / scale - dragOffsetY) + 'px';
            wrapper.style.right = 'auto';
            wrapper.style.bottom = 'auto';
        });
        document.addEventListener('mouseup', () => { isDragging = false; });
    }

    // Render saved scrapbook data
    renderScrapbook(item);
};

// Keyboard shortcuts in edit mode
document.addEventListener('keydown', (e) => {
    if (!editMode || !selectedElement) return;

    if (e.key === 'Delete' || e.key === 'Backspace') {
        // Only delete if not editing text
        if (selectedElement.dataset.type === 'text') {
            const textSpan = selectedElement.querySelector('.sb-text-content');
            if (textSpan && textSpan.contentEditable === 'true') return;
        }
        selectedElement.remove();
        selectedElement = null;
        updateEmptyState();
    }
});

// ─── Restore detail view from URL hash on load ───
if (window.location.hash) {
    const hash = window.location.hash.slice(1);
    const match = bucketList.find(item =>
        item.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase() === hash
    );
    if (match) openDetail(match);
}
