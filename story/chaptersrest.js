// ═══════════════════════════════════════════════════════════════
// 챕터 5-11 (플레이스홀더)
// ═══════════════════════════════════════════════════════════════

const CHAPTER5 = {
    title: "Chapter 5", subtitle: "루나와의 만남", bgm: "peaceful",
    scenes: [
        { id:"5-1", bg:"bgGarden", chars:[], dialogs:[
            { speaker:"narrator", text:"황궁 정원." },
            { speaker:"narrator", text:"TODO: 챕터 5 상세 스토리 작성 필요" },
        ], next:"chapter6"},
    ],
};

const CHAPTER6 = {
    title: "Chapter 6", subtitle: "루나의 운명", bgm: "tense",
    scenes: [
        { id:"6-1", bg:"bgDungeon", chars:[], dialogs:[
            { speaker:"narrator", text:"지하 감옥." },
            { speaker:"narrator", text:"TODO: 챕터 6 상세 스토리 작성 필요" },
        ], next:"chapter7"},
    ],
};

const CHAPTER7 = {
    title: "Chapter 7", subtitle: "결전", bgm: "tense",
    scenes: [
        { id:"7-1", bg:"bgThrone", chars:[], dialogs:[
            { speaker:"narrator", text:"결전의 날." },
            { speaker:"narrator", text:"TODO: 챕터 7 상세 스토리 작성 필요" },
        ], next:"chapter8"},
    ],
};

const CHAPTER8 = {
    title: "Chapter 8", subtitle: "선택의 순간", bgm: "tense",
    scenes: [
        { id:"8-1", bg:"bgThrone", chars:[], dialogs:[
            { speaker:"narrator", text:"최후의 선택." },
            { speaker:"narrator", text:"이제 결정을 내려야 한다." },
        ], choices:[
            { text:"황제가 되겠다 (루트 A)", next:"chapter9a" },
            { text:"2인자로 살겠다 (루트 B)", next:"chapter9b" }
        ]},
    ],
};

const CHAPTER9A = {
    title: "Chapter 9A", subtitle: "황제의 길", bgm: "default",
    scenes: [
        { id:"9a-1", bg:"bgThrone", chars:[], dialogs:[
            { speaker:"narrator", text:"황제의 길을 선택했다." },
            { speaker:"narrator", text:"TODO: 챕터 9A 상세 스토리 작성 필요" },
        ], next:"ending_check_a"},
    ],
};

const CHAPTER9B = {
    title: "Chapter 9B", subtitle: "그림자의 길", bgm: "default",
    scenes: [
        { id:"9b-1", bg:"bgThrone", chars:[], dialogs:[
            { speaker:"narrator", text:"2인자의 길을 선택했다." },
            { speaker:"narrator", text:"TODO: 챕터 9B 상세 스토리 작성 필요" },
        ], next:"chapter10b"},
    ],
};

const CHAPTER10B = {
    title: "Chapter 10B", subtitle: "암약", bgm: "tense",
    scenes: [
        { id:"10b-1", bg:"bgDungeon", chars:[], dialogs:[
            { speaker:"narrator", text:"그림자 속에서 활동했다." },
            { speaker:"narrator", text:"TODO: 챕터 10B 상세 스토리 작성 필요" },
        ], next:"chapter11b"},
    ],
};

const CHAPTER11B = {
    title: "Chapter 11B", subtitle: "진정한 권력", bgm: "default",
    scenes: [
        { id:"11b-1", bg:"bgThrone", chars:[], dialogs:[
            { speaker:"narrator", text:"모든 것이 끝났다." },
            { speaker:"narrator", text:"TODO: 챕터 11B 상세 스토리 작성 필요" },
        ], next:"ending_check_b"},
    ],
};
