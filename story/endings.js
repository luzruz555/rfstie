// ═══════════════════════════════════════════════════════════════
// 엔딩들
// ═══════════════════════════════════════════════════════════════

const ENDING_LIZETTE = {
    title: "True Ending", subtitle: "리제트 루트", bgm: "romantic",
    scenes: [{ id:"end", bg:"bgEnding", chars:[{id:"lizette",pos:"center",emotion:"happy"}], dialogs:[
        { speaker:"narrator", text: "리제트와 함께 행복한 결말을 맞이했다." },
        { speaker:"narrator", text: "「트루엔딩 - 영원한 맹세」" },
    ], ending:"lizette" }],
};

const ENDING_SELENE = {
    title: "True Ending", subtitle: "셀레네 루트", bgm: "romantic",
    scenes: [{ id:"end", bg:"bgEnding", chars:[{id:"selene",pos:"center",emotion:"happy"}], dialogs:[
        { speaker:"narrator", text: "셀레네와 함께 제국을 다스리게 되었다." },
        { speaker:"narrator", text: "「트루엔딩 - 황제와 황후」" },
    ], ending:"selene" }],
};

const ENDING_ADELINE = {
    title: "True Ending", subtitle: "아델린 루트", bgm: "romantic",
    scenes: [{ id:"end", bg:"bgEnding", chars:[{id:"adeline",pos:"center",emotion:"happy"}], dialogs:[
        { speaker:"narrator", text: "아델린과 함께 새로운 시대를 열었다." },
        { speaker:"narrator", text: "「트루엔딩 - 차가운 불꽃」" },
    ], ending:"adeline" }],
};

const ENDING_KAREN = {
    title: "True Ending", subtitle: "카렌 루트", bgm: "romantic",
    scenes: [{ id:"end", bg:"bgEnding", chars:[{id:"karen",pos:"center",emotion:"happy"}], dialogs:[
        { speaker:"narrator", text: "카렌과 함께 변경을 지키게 되었다." },
        { speaker:"narrator", text: "「트루엔딩 - 검과 방패」" },
    ], ending:"karen" }],
};

const ENDING_ELIA = {
    title: "True Ending", subtitle: "엘리아 루트", bgm: "romantic",
    scenes: [{ id:"end", bg:"bgEnding", chars:[{id:"elia",pos:"center",emotion:"happy"}], dialogs:[
        { speaker:"narrator", text: "엘리아와 티격태격하며 살게 되었다." },
        { speaker:"narrator", text: "「트루엔딩 - 욕쟁이 참모」" },
    ], ending:"elia" }],
};

const ENDING_LUNA = {
    title: "True Ending", subtitle: "루나 루트", bgm: "romantic",
    scenes: [{ id:"end", bg:"bgEnding", chars:[{id:"luna",pos:"center",emotion:"happy"}], dialogs:[
        { speaker:"narrator", text: "루나와 함께 자유로운 삶을 선택했다." },
        { speaker:"narrator", text: "「트루엔딩 - 자유로운 날개」" },
    ], ending:"luna" }],
};

const ENDING_HAREM = {
    title: "True Ending", subtitle: "하렘 루트", bgm: "romantic",
    scenes: [{ id:"end", bg:"bgEnding", chars:[
        {id:"lizette",pos:"left",emotion:"happy"},
        {id:"selene",pos:"center",emotion:"happy"},
        {id:"adeline",pos:"right",emotion:"happy"}
    ], dialogs:[
        { speaker:"narrator", text: "모든 히로인과 함께하는 결말." },
        { speaker:"narrator", text: "과연 이게 행복한 건지는..." },
        { speaker:"narrator", text: "「트루엔딩 - 제국 최강의 하렘왕」" },
    ], ending:"harem" }],
};

const ENDING_EMPEROR_ALONE = {
    title: "Normal Ending", subtitle: "고독한 황제", bgm: "default",
    scenes: [{ id:"end", bg:"bgThrone", chars:[], dialogs:[
        { speaker:"narrator", text: "황제가 되었지만, 곁에는 아무도 없었다." },
        { speaker:"narrator", text: "「노멀엔딩 - 고독한 왕좌」" },
    ], ending:"emperor_alone" }],
};

const ENDING_BAD_EXECUTION = {
    title: "Bad Ending", subtitle: "처형", bgm: "tense",
    scenes: [{ id:"end", bg:"bgDungeon", chars:[], dialogs:[
        { speaker:"narrator", text: "황위 계승 시험에 실패했다." },
        { speaker:"narrator", text: "사생아가 황위를 노렸다는 죄목으로..." },
        { speaker:"narrator", text: "「배드엔딩 - 처형」" },
    ], next:"glitch" }],
};

const ENDING_BAD_BETRAYAL = {
    title: "Bad Ending", subtitle: "토사구팽", bgm: "tense",
    scenes: [{ id:"end", bg:"bgDungeon", chars:[], dialogs:[
        { speaker:"narrator", text: "셀레네가 황제가 된 후, 당신은 버려졌다." },
        { speaker:"narrator", text: "이용 가치가 없어진 도구의 말로." },
        { speaker:"narrator", text: "「배드엔딩 - 토사구팽」" },
    ], next:"glitch" }],
};

const BADEND1 = {
    title: "Bad Ending", subtitle: "실패한 황자", bgm: "tense",
    scenes: [{ id:"badend1", bg:"bgBlack", chars:[], dialogs:[
        { speaker:"narrator", text:"[ BAD END 1 - 실패한 황자 ]", effect:"grow" },
    ], ending:"badend1" }],
};
