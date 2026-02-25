// ═══════════════════════════════════════════════════════════════
// 간편 대사 파서 v2
// 더 직관적이고 읽기 쉬운 문법!
// ═══════════════════════════════════════════════════════════════

/*
╔════════════════════════════════════════════════════════════════╗
║                    📝 대사 작성법                               ║
╠════════════════════════════════════════════════════════════════╣
║                                                                ║
║  🎭 기본 대사                                                   ║
║  ────────────────────────────────────────────────────────────  ║
║  "아르카디엔 제국."                    ← 나레이션              ║
║  "리제트: 도련님!"                     ← 캐릭터 대사           ║
║  "나: 알겠어."                         ← 주인공 대사           ║
║                                                                ║
║  😊 감정 추가                                                   ║
║  ────────────────────────────────────────────────────────────  ║
║  "리제트(happy): 정말요?!"             ← 기쁜 표정             ║
║  "리제트(sad): 그런가요..."            ← 슬픈 표정             ║
║  "리제트(angry): 뭐라고요?!"           ← 화난 표정             ║
║                                                                ║
║  ✨ 효과 추가                                                   ║
║  ────────────────────────────────────────────────────────────  ║
║  "리제트: 도련님! #shake"              ← 흔들림                ║
║  "리제트(happy): 네!! #pulse"          ← 두근두근              ║
║  "#shake 쾅!"                          ← 나레이션 + 효과       ║
║                                                                ║
║  🎵 효과음                                                      ║
║  ────────────────────────────────────────────────────────────  ║
║  "@surprise 문이 열렸다."              ← 효과음 + 나레이션     ║
║  "리제트: 앗! @click"                  ← 대사 + 효과음         ║
║                                                                ║
║  📋 사용 가능한 값들                                            ║
║  ────────────────────────────────────────────────────────────  ║
║  감정: happy, sad, angry, default                              ║
║  효과: shake, pulse, grow, shrink, small, big, float, whisper  ║
║  효과음: click, decision, surprise, heartbeat, sword, glitch   ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
*/

// 캐릭터 이름 매핑 (한글 지원)
const NAME_MAP = {
    // 한글
    '나': 'you',
    '주인공': 'you',
    '리제트': 'lizette',
    '셀레네': 'selene',
    '아델린': 'adeline',
    '카렌': 'karen',
    '엘리아': 'elia',
    '루나': 'luna',
    '집사': '집사',
    // 영어
    'you': 'you',
    'lizette': 'lizette',
    'selene': 'selene',
    'adeline': 'adeline',
    'karen': 'karen',
    'elia': 'elia',
    'luna': 'luna',
};

/**
 * 간편 문법을 게임 형식으로 변환
 */
function parseLine(line) {
    let text = line.trim();
    let speaker = 'narrator';
    let emotion = null;
    let effect = null;
    let sfx = null;
    
    // 1. 효과 추출 (#shake, #pulse 등)
    const effectMatch = text.match(/#(\w+)/);
    if (effectMatch) {
        effect = effectMatch[1];
        text = text.replace(/#\w+/, '').trim();
    }
    
    // 2. 효과음 추출 (@click, @surprise 등)
    const sfxMatch = text.match(/@(\w+)/);
    if (sfxMatch) {
        sfx = sfxMatch[1];
        text = text.replace(/@\w+/, '').trim();
    }
    
    // 3. 화자와 감정 추출
    const speakerMatch = text.match(/^(.+?)(?:\((\w+)\))?:\s*(.+)$/);
    
    if (speakerMatch) {
        const rawName = speakerMatch[1].trim();
        emotion = speakerMatch[2] || null;
        text = speakerMatch[3].trim();
        speaker = NAME_MAP[rawName] || rawName;
    }
    
    const result = { speaker, text };
    if (emotion) result.emotion = emotion;
    if (effect) result.effect = effect;
    if (sfx) result.sfx = sfx;
    
    return result;
}

function parseLines(lines) {
    return lines.map(line => parseLine(line));
}

function parseChoice(choiceArr) {
    const [text, next, affection] = choiceArr;
    const result = { text, next };
    if (affection) result.affection = affection;
    return result;
}

function parseChoices(choices) {
    if (!choices) return undefined;
    return choices.map(c => parseChoice(c));
}

function parseChars(chars) {
    if (!chars || chars.length === 0) return [];
    
    return chars.map(c => {
        const parts = c.split(':');
        const rawName = parts[0].trim();
        const id = NAME_MAP[rawName] || rawName;
        
        let pos = 'center';
        let emotion = 'default';
        
        if (parts.length === 2) {
            if (['left', 'right', 'center'].includes(parts[1])) {
                pos = parts[1];
            } else {
                emotion = parts[1];
            }
        } else if (parts.length === 3) {
            pos = parts[1];
            emotion = parts[2];
        }
        
        return { id, pos, emotion };
    });
}

function parseScene(scene) {
    const result = { id: scene.id, bg: scene.bg };
    
    if (scene.bgm) result.bgm = scene.bgm;
    if (scene.chars) result.chars = parseChars(scene.chars);
    if (scene.lines) result.dialogs = parseLines(scene.lines);
    if (scene.choices) result.choices = parseChoices(scene.choices);
    if (scene.next) result.next = scene.next;
    if (scene.ending) result.ending = scene.ending;
    
    return result;
}

function parseChapter(chapter) {
    // 이미 dialogs가 있으면 (기존 형식) 그대로 반환
    if (chapter.scenes && chapter.scenes[0] && chapter.scenes[0].dialogs) {
        return chapter;
    }
    // lines가 있으면 (새 형식) 파싱
    return {
        title: chapter.title,
        subtitle: chapter.subtitle,
        bgm: chapter.bgm || 'default',
        scenes: chapter.scenes.map(s => parseScene(s)),
    };
}

function buildStory(chapters) {
    const story = {};
    for (const [key, chapter] of Object.entries(chapters)) {
        story[key] = parseChapter(chapter);
    }
    return story;
}

// 스토리 합치기 (index.html에서 사용)
function parseStory(chapters) {
    const story = {};
    for (const [key, chapter] of Object.entries(chapters)) {
        if (chapter) {
            story[key] = chapter;
        }
    }
    return story;
}

// 전역으로 내보내기
window.parseLine = parseLine;
window.parseLines = parseLines;
window.parseChars = parseChars;
window.parseScene = parseScene;
window.parseChapter = parseChapter;
window.buildStory = buildStory;
window.parseStory = parseStory;
