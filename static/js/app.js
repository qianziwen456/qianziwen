// ===== 千字文学习 App 逻辑 =====

const state = {
    currentMode: 'select',
    currentLineIndex: 0,
    currentFlashIndex: 0,
    flashChars: [],
    flashGroupSize: 10,
    flashGroupNum: 1,
    flashOrder: 'order',
    learnedLines: JSON.parse(localStorage.getItem('qz_learned') || '[]'),
    knownChars: JSON.parse(localStorage.getItem('qz_known') || '[]'),
    coins: parseInt(localStorage.getItem('qz_coins') || '0'),
    level: parseInt(localStorage.getItem('qz_level') || '1'),
    quizScore: 0,
    quizCurrent: 0,
    quizAnswer: null,
    fontSize: parseInt(localStorage.getItem('qz_fontsize') || '0'),
};

const $ = (id) => document.getElementById(id);

// 展开数据为字符列表
const allChars = [];
QIANZI_DATA.forEach((line, lineIdx) => {
    line.chars.forEach((c, charIdx) => {
        allChars.push({ ...c, lineIndex: lineIdx, charIndex: charIdx });
    });
});

// ===== 字体大小调节 =====
function changeFontSize(delta) {
    state.fontSize = Math.max(-2, Math.min(4, state.fontSize + delta));
    localStorage.setItem('qz_fontsize', state.fontSize);
    applyFontSize();
}

function applyFontSize() {
    const base = 15 + state.fontSize * 2;
    document.documentElement.style.fontSize = base + 'px';
    // 同时调整关键元素
    const scale = 1 + state.fontSize * 0.1;
    document.querySelectorAll('.line-text').forEach(el => {
        el.style.fontSize = (48 * scale) + 'px';
    });
    document.querySelectorAll('.card-char').forEach(el => {
        el.style.fontSize = (120 * scale) + 'px';
    });
    document.querySelectorAll('.char').forEach(el => {
        el.style.fontSize = (44 * scale) + 'px';
    });
    document.querySelectorAll('.quiz-pinyin').forEach(el => {
        el.style.fontSize = (48 * scale) + 'px';
    });
    document.querySelectorAll('.quiz-option').forEach(el => {
        el.style.fontSize = (40 * scale) + 'px';
    });
}

// ===== 语音朗读 (Web Speech API) =====
let currentUtterance = null;

function speak(text, rate = 0.7) {
    if (!('speechSynthesis' in window)) {
        showToast('当前浏览器不支持语音朗读');
        return;
    }
    // 停止之前的朗读
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = rate;
    utterance.pitch = 1.1;
    utterance.volume = 1;

    // 尝试选择中文语音
    const voices = window.speechSynthesis.getVoices();
    const zhVoice = voices.find(v => v.lang.startsWith('zh'));
    if (zhVoice) utterance.voice = zhVoice;

    utterance.onstart = () => {
        document.querySelectorAll('.tts-btn').forEach(b => b.classList.add('speaking'));
    };
    utterance.onend = () => {
        document.querySelectorAll('.tts-btn').forEach(b => b.classList.remove('speaking'));
    };
    utterance.onerror = () => {
        document.querySelectorAll('.tts-btn').forEach(b => b.classList.remove('speaking'));
    };

    currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
}

function speakLine() {
    const line = QIANZI_DATA[state.currentLineIndex];
    speak(line.line, 0.6);
}

function speakChar() {
    const c = state.flashChars[state.currentFlashIndex];
    if (c) speak(c.char, 0.5);
}

function speakSingleChar(char) {
    speak(char, 0.5);
}

// 预加载语音列表
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
    };
}

// ===== 模式切换 =====
function switchMode(mode) {
    state.currentMode = mode;
    $('modeSelect').style.display = 'none';
    $('learnMode').style.display = 'none';
    $('flashMode').style.display = 'none';
    $('quizMode').style.display = 'none';
    $('listMode').style.display = 'none';

    switch (mode) {
        case 'select':
            $('modeSelect').style.display = 'block';
            updateStats();
            break;
        case 'learn':
            $('learnMode').style.display = 'block';
            renderLearnLine();
            break;
        case 'flash':
            $('flashMode').style.display = 'block';
            initFlashGroups();
            applyFlashSettings();
            break;
        case 'quiz':
            $('quizMode').style.display = 'block';
            startQuiz();
            break;
        case 'list':
            $('listMode').style.display = 'block';
            renderList();
            break;
    }
}

// ===== 逐字学习 =====
function renderLearnLine() {
    const line = QIANZI_DATA[state.currentLineIndex];
    $('lineText').textContent = line.line;
    $('linePinyin').textContent = line.pinyin.join(' ');
    $('lineMeaning').textContent = '💡 ' + line.meaning;
    $('lineCounter').textContent = `${state.currentLineIndex + 1} / ${QIANZI_DATA.length}`;

    const grid = $('charsGrid');
    grid.innerHTML = '';
    line.chars.forEach((c, i) => {
        const card = document.createElement('div');
        card.className = 'char-card';
        card.innerHTML = `
            <div class="char">${c.char}</div>
            <div class="char-pinyin">${c.pinyin}</div>
            <div class="char-emoji">${c.emoji}</div>
            <div class="char-meaning">${c.meaning}</div>
            <button class="char-tts" onclick="speakSingleChar('${c.char}')" title="朗读">🔊</button>
        `;
        grid.appendChild(card);
    });
    applyFontSize();
}

function prevLine() {
    if (state.currentLineIndex > 0) {
        state.currentLineIndex--;
        renderLearnLine();
    }
}

function nextLine() {
    if (state.currentLineIndex < QIANZI_DATA.length - 1) {
        state.currentLineIndex++;
        renderLearnLine();
    } else {
        showAchievement('🎊', '全部学完啦！', '你已经学完了所有内容，太棒了！');
    }
}

function markLineLearned() {
    const idx = state.currentLineIndex;
    if (!state.learnedLines.includes(idx)) {
        state.learnedLines.push(idx);
        localStorage.setItem('qz_learned', JSON.stringify(state.learnedLines));
        addCoins(10);
        showAchievement('🎉', '学会一句！', `奖励 10 颗星星！继续加油～`);
        checkLevelUp();
    } else {
        showToast('这句已经学过啦，换一句试试吧～');
    }
}

// ===== 识字卡片（分组 + 随机） =====
function initFlashGroups() {
    const groupSize = parseInt($('groupSelect').value);
    const total = QIANZI_DATA.length;
    const groupCount = groupSize === 0 ? 1 : Math.ceil(total / groupSize);

    const select = $('groupNum');
    const currentNum = parseInt(select.value) || 1;
    select.innerHTML = '';
    for (let i = 1; i <= groupCount; i++) {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = i;
        select.appendChild(opt);
    }
    // 尽量保留用户之前选择的组号，不超过最大组数
    state.flashGroupNum = Math.min(currentNum, groupCount);
    select.value = state.flashGroupNum;
}

function changeGroupSize() {
    // 分组大小改变：重新计算组数
    state.flashGroupSize = parseInt($('groupSelect').value);
    initFlashGroups();
}

function changeGroupNum() {
    // 组号改变：只更新当前组号，不重置
    state.flashGroupNum = parseInt($('groupNum').value) || 1;
}

function applyFlashSettings() {
    state.flashGroupSize = parseInt($('groupSelect').value);
    state.flashGroupNum = parseInt($('groupNum').value) || 1;
    state.flashOrder = $('orderSelect').value;

    // 计算当前组的字符
    const groupSize = state.flashGroupSize;
    const startLine = groupSize === 0 ? 0 : (state.flashGroupNum - 1) * groupSize;
    const endLine = groupSize === 0 ? QIANZI_DATA.length : Math.min(startLine + groupSize, QIANZI_DATA.length);

    state.flashChars = [];
    for (let i = startLine; i < endLine; i++) {
        QIANZI_DATA[i].chars.forEach((c, charIdx) => {
            state.flashChars.push({ ...c, lineIndex: i, charIndex: charIdx });
        });
    }

    // 随机打乱
    if (state.flashOrder === 'random') {
        for (let i = state.flashChars.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [state.flashChars[i], state.flashChars[j]] = [state.flashChars[j], state.flashChars[i]];
        }
    }

    state.currentFlashIndex = 0;
    renderFlashCard();
}

function renderFlashCard() {
    if (state.flashChars.length === 0) {
        $('cardChar').textContent = '无';
        return;
    }
    const c = state.flashChars[state.currentFlashIndex];
    $('cardChar').textContent = c.char;
    $('cardPinyin').textContent = c.pinyin;
    $('cardMeaning').textContent = c.meaning;
    $('cardEmoji').textContent = c.emoji;
    $('flashCounter').textContent = `${state.currentFlashIndex + 1} / ${state.flashChars.length}`;
    $('flashCard').classList.remove('flipped');
    applyFontSize();
}

function flipCard() {
    $('flashCard').classList.toggle('flipped');
}

function prevFlash() {
    if (state.currentFlashIndex > 0) {
        state.currentFlashIndex--;
        renderFlashCard();
    }
}

function nextFlash() {
    if (state.currentFlashIndex < state.flashChars.length - 1) {
        state.currentFlashIndex++;
        renderFlashCard();
    } else {
        showToast('这组已经学完啦！可以换一组或重新打乱～');
    }
}

function markFlashKnown() {
    const c = state.flashChars[state.currentFlashIndex];
    const key = `${c.lineIndex}-${c.charIndex}`;
    if (!state.knownChars.includes(key)) {
        state.knownChars.push(key);
        localStorage.setItem('qz_known', JSON.stringify(state.knownChars));
        addCoins(5);
        showToast('太棒了！+5 ⭐');
    }
    nextFlash();
}

function markFlashUnknown() {
    showToast('没关系，多看几遍就记住啦！');
    nextFlash();
}

// ===== 测验 =====
function startQuiz() {
    state.quizScore = 0;
    state.quizCurrent = 0;
    $('quizScore').textContent = '0';
    nextQuiz();
}

function nextQuiz() {
    $('quizResult').style.display = 'none';
    $('quizNextBtn').style.display = 'none';
    state.quizCurrent++;
    $('quizNum').textContent = state.quizCurrent;

    const answerIdx = Math.floor(Math.random() * allChars.length);
    const answer = allChars[answerIdx];
    state.quizAnswer = answer;

    $('quizPinyin').textContent = answer.pinyin;

    const options = [answer];
    while (options.length < 4) {
        const random = allChars[Math.floor(Math.random() * allChars.length)];
        if (!options.includes(random)) {
            options.push(random);
        }
    }
    options.sort(() => Math.random() - 0.5);

    const optionsDiv = $('quizOptions');
    optionsDiv.innerHTML = '';
    options.forEach((opt) => {
        const btn = document.createElement('div');
        btn.className = 'quiz-option';
        btn.textContent = opt.char;
        btn.onclick = () => checkAnswer(opt, btn);
        optionsDiv.appendChild(btn);
    });
    applyFontSize();
}

function checkAnswer(selected, btn) {
    document.querySelectorAll('.quiz-option').forEach((b) => {
        b.style.pointerEvents = 'none';
    });

    const result = $('quizResult');
    if (selected.char === state.quizAnswer.char) {
        btn.classList.add('correct');
        result.className = 'quiz-result correct';
        result.textContent = '✅ 答对了！真棒！';
        state.quizScore += 10;
        $('quizScore').textContent = state.quizScore;
        addCoins(10);
        checkLevelUp();
    } else {
        btn.classList.add('wrong');
        document.querySelectorAll('.quiz-option').forEach((b) => {
            if (b.textContent === state.quizAnswer.char) {
                b.classList.add('correct');
            }
        });
        result.className = 'quiz-result wrong';
        result.textContent = `❌ 答错了，正确答案是「${state.quizAnswer.char}」，意思是：${state.quizAnswer.meaning}`;
    }
    result.style.display = 'block';
    $('quizNextBtn').style.display = 'inline-block';
}

// ===== 全文浏览 =====
function renderList() {
    const container = $('listContainer');
    container.innerHTML = '';
    QIANZI_DATA.forEach((line, idx) => {
        const item = document.createElement('div');
        item.className = 'list-item' + (state.learnedLines.includes(idx) ? ' learned' : '');
        item.innerHTML = `
            <div class="list-line">${line.line} ${state.learnedLines.includes(idx) ? '✅' : ''}</div>
            <div class="list-pinyin">${line.pinyin.join(' ')}</div>
            <div class="list-meaning">${line.meaning}</div>
        `;
        item.onclick = () => {
            state.currentLineIndex = idx;
            switchMode('learn');
        };
        container.appendChild(item);
    });
}

// ===== 统计与进度 =====
function updateStats() {
    $('statLearned').textContent = state.learnedLines.length;
    $('statTotal').textContent = QIANZI_DATA.length;
    const pct = Math.round((state.learnedLines.length / QIANZI_DATA.length) * 100);
    $('statPercent').textContent = pct + '%';
    $('progressFill').style.width = pct + '%';
    $('coinCount').textContent = state.coins;
    $('levelNum').textContent = state.level;
}

function addCoins(n) {
    state.coins += n;
    localStorage.setItem('qz_coins', state.coins);
    $('coinCount').textContent = state.coins;
}

function checkLevelUp() {
    const newLevel = Math.floor(state.coins / 100) + 1;
    if (newLevel > state.level) {
        state.level = newLevel;
        localStorage.setItem('qz_level', state.level);
        $('levelNum').textContent = state.level;
        showAchievement('🏆', `升级啦！等级 ${state.level}`, '你越来越棒了，继续保持！');
    }
}

// ===== 成就弹窗 =====
function showAchievement(icon, title, desc) {
    $('achievementIcon').textContent = icon;
    $('achievementTitle').textContent = title;
    $('achievementDesc').textContent = desc;
    $('achievementPopup').style.display = 'flex';
}

function closeAchievement() {
    $('achievementPopup').style.display = 'none';
}

// ===== Toast =====
let toastTimer = null;
function showToast(msg) {
    let toast = $('toastMsg');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toastMsg';
        toast.style.cssText = 'position:fixed;top:80px;left:50%;transform:translateX(-50%);background:#4a4a8a;color:white;padding:12px 24px;border-radius:25px;font-size:15px;font-weight:bold;z-index:2000;opacity:0;transition:opacity 0.3s;';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.style.opacity = '0'; }, 2000);
}

// ===== 初始化 =====
applyFontSize();
updateStats();
