// ═══════════════════════════════════════════════════════════════
// 챕터 3: 황녀들과의 만남
// 
// 💡 아직 새 형식으로 변환되지 않았습니다.
//    변환 방법은 chapter1.js, chapter2.js 를 참고하세요!
// ═══════════════════════════════════════════════════════════════

// 임시로 기존 형식 사용 (parseChapter 없이)
// ═══════════════════════════════════════════════════════════════
// 챕터 3: 황궁 생활
// ═══════════════════════════════════════════════════════════════

const CHAPTER3 = {
    title: "Chapter 3", subtitle: "황녀들과의 만남", bgm: "default",
    scenes: [
    // ─── 3-1: 황궁 도착 ───
        { id:"3-1", bg:"bgPalace", chars:[], dialogs:[
            { speaker:"narrator", text:"황궁." },
            { speaker:"narrator", text:"거대한 성문이 눈앞에 펼쳐졌다." },
            { speaker:"narrator", text:"별채에서 보던 세상과는 차원이 달랐다." },
            { speaker:"narrator", text:"하늘을 찌를 듯한 첨탑, 끝이 보이지 않는 성벽." },
            { speaker:"narrator", text:"이곳이... 내가 앞으로 살아야 할 곳인가." },
            { speaker:"lizette", text:"와아... 정말 크네요.", emotion:"default" },
            { speaker:"narrator", text:"리제트가 입을 벌린 채 성을 올려다보고 있다." },
            { speaker:"narrator", text:"...솔직히 나도 비슷한 심정이다." },
        ]},

        { id:"3-1b", bg:"bgPalace", chars:[{id:"karen",pos:"left",emotion:"default"},{id:"elia",pos:"right",emotion:"default"}], dialogs:[
            { speaker:"karen", text:"도착했습니다, 전하.", emotion:"default" },
            { speaker:"elia", text:"여기서부터는 우리가 안내할게요.", emotion:"default" },
            { speaker:"you", text:"...고마워. 여기까지 호위해줘서." },
            { speaker:"karen", text:"당연한 일입니다.", emotion:"default" },
            { speaker:"elia", text:"흥, 고마워할 거 있으면 나중에 갚아요.", emotion:"default" },
            { speaker:"narrator", text:"엘리아가 툭 던지듯 말했지만, 표정은 나쁘지 않았다." },
        ]},

    // ─── 3-2: 복도 - 수군거림 ───
        { id:"3-2", bgm:"tense", bg:"bgHall", chars:[{id:"lizette",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"narrator", text:"황궁 안으로 들어섰다." },
            { speaker:"narrator", text:"복도를 지나가는데, 시선이 느껴졌다." },
            { speaker:"귀족1", text:"저게 그 사생아래." },
            { speaker:"귀족2", text:"갑자기 황자라니... 웃기지 않아?" },
            { speaker:"narrator", text:"수군거리는 소리가 들려왔다." },
            { speaker:"귀족1", text:"저 옆에 하녀 좀 봐. 황자 옆에 딱 붙어있네." },
            { speaker:"귀족2", text:"주제도 모르고. 쯧쯧." },
            { speaker:"lizette", text:"............", emotion:"sad" },
            { speaker:"narrator", text:"리제트의 어깨가 움츠러들었다." },
            { speaker:"narrator", text:"...어떻게 해야 하지." },
        ], choices:[
            { text:"리제트, 조금 떨어져 있어.", next:"3-2a", affection:{lizette:-5} },
            { text:"(아무 말 없이 앞서 걷는다)", next:"3-2b", affection:{lizette:-3} },
            { text:"...여기선 말 걸지 마.", next:"3-2c", affection:{lizette:-15} }
        ]},

    // ─── 선택지 분기 ───
        { id:"3-2a", bg:"bgHall", chars:[{id:"lizette",pos:"center",emotion:"sad"}], dialogs:[
            { speaker:"you", text:"리제트, 조금 떨어져 있어." },
            { speaker:"lizette", text:"...네.", emotion:"sad" },
            { speaker:"narrator", text:"리제트가 고개를 숙이며 한 발 뒤로 물러났다." },
            { speaker:"narrator", text:"표정이 보이지 않는다." },
            { speaker:"narrator", text:"...어쩔 수 없는 선택이었다." },
            { speaker:"narrator", text:"그렇게 믿고 싶었다." },
        ], next:"3-3"},

        { id:"3-2b", bg:"bgHall", chars:[{id:"lizette",pos:"center",emotion:"sad"}], dialogs:[
            { speaker:"narrator", text:"대답 대신, 발걸음을 빠르게 했다." },
            { speaker:"lizette", text:"도, 도련님...?", emotion:"sad" },
            { speaker:"narrator", text:"뒤에서 따라오는 발소리가 들렸다." },
            { speaker:"narrator", text:"점점 멀어지는 것 같았다." },
            { speaker:"narrator", text:"...미안하다는 말은 하지 못했다." },
        ], next:"3-3"},

        { id:"3-2c", bg:"bgHall", chars:[{id:"lizette",pos:"center",emotion:"sad"}], dialogs:[
            { speaker:"you", text:"...여기선 말 걸지 마." },
            { speaker:"lizette", text:"......!", emotion:"sad", effect:"shake" },
            { speaker:"narrator", text:"리제트가 멈칫했다." },
            { speaker:"narrator", text:"고개를 푹 숙인 채, 아무 말도 하지 않았다." },
            { speaker:"narrator", text:"어깨가 작게 떨리는 게 보였다." },
            { speaker:"narrator", text:"...너무 심했나." },
            { speaker:"narrator", text:"하지만 이미 뱉은 말이었다." },
        ], next:"3-3"},

    // ─── 3-3: 알현실 앞 ───
        { id:"3-3", bg:"bgHall", chars:[{id:"karen",pos:"left",emotion:"default"},{id:"elia",pos:"right",emotion:"default"}], dialogs:[
            { speaker:"narrator", text:"알현실 앞에 도착했다." },
            { speaker:"karen", text:"여기서부터는 전하 혼자 들어가셔야 합니다.", emotion:"default" },
            { speaker:"elia", text:"황녀 전하들이 기다리고 계세요.", emotion:"default" },
            { speaker:"you", text:"...둘은 안 들어가?" },
            { speaker:"karen", text:"저희는 밖에서 대기합니다.", emotion:"default" },
            { speaker:"elia", text:"걱정 마요. 잡아먹히진 않을 거예요.", emotion:"default" },
            { speaker:"elia", text:"...아마도.", emotion:"default" },
            { speaker:"you", text:"위로가 안 되는데." },
            { speaker:"narrator", text:"엘리아가 씩 웃었다." },
            { speaker:"narrator", text:"심호흡을 하고, 문을 열었다." },
        ]},

    // ─── 3-4: 셀레네 등장 ───
        { id:"3-4", bgm:"romantic", bg:"bgThrone", chars:[{id:"selene",pos:"center",emotion:"happy"}], dialogs:[
            { speaker:"narrator", text:"알현실 안." },
            { speaker:"narrator", text:"화려한 샹들리에 아래, 한 여인이 서 있었다." },
            { speaker:"narrator", text:"백금발에, 우아한 미소." },
            { speaker:"selene", text:"어머, 드디어 오셨네요.", emotion:"happy" },
            { speaker:"narrator", text:"여인이 천천히 다가왔다." },
            { speaker:"selene", text:"반가워요... 오빠.", emotion:"happy" },
            { speaker:"you", text:"...오빠?" },
            { speaker:"selene", text:"후후, 저는 셀레네예요. 제 1황녀죠.", emotion:"happy" },
            { speaker:"selene", text:"오빠가 오시길 정말 기다렸어요.", emotion:"happy" },
            { speaker:"narrator", text:"부드러운 미소. 다정한 목소리." },
            { speaker:"narrator", text:"하지만 왠지... 뭔가 이상한 느낌이 들었다." },
        ], choices:[
            { text:"반갑습니다, 황녀님.", next:"3-4a", affection:{selene:+3} },
            { text:"...기다렸다고요?", next:"3-4b", affection:{selene:+5} },
            { text:"(경계하며) 처음 뵙겠습니다.", next:"3-4c", affection:{selene:+7} }
        ]},

        { id:"3-4a", bg:"bgThrone", chars:[{id:"selene",pos:"center",emotion:"happy"}], dialogs:[
            { speaker:"you", text:"반갑습니다, 황녀님." },
            { speaker:"selene", text:"황녀님이라니, 너무 딱딱해요.", emotion:"happy" },
            { speaker:"selene", text:"그냥 셀레네라고 불러주세요. 우리 가족이잖아요.", emotion:"happy" },
            { speaker:"narrator", text:"가족." },
            { speaker:"narrator", text:"한 번도 들어본 적 없는 단어였다." },
            { speaker:"selene", text:"앞으로 잘 지내요, 오빠.", emotion:"happy" },
        ], next:"3-5"},

        { id:"3-4b", bg:"bgThrone", chars:[{id:"selene",pos:"center",emotion:"happy"}], dialogs:[
            { speaker:"you", text:"...기다렸다고요?" },
            { speaker:"selene", text:"그럼요. 오빠가 있다는 소식을 듣고 얼마나 기뻤는지 몰라요.", emotion:"happy" },
            { speaker:"selene", text:"혼자가 아니라는 게... 정말 좋았어요.", emotion:"happy" },
            { speaker:"narrator", text:"진심인 것 같기도 하고, 아닌 것 같기도 하고." },
            { speaker:"narrator", text:"알 수가 없다." },
            { speaker:"selene", text:"앞으로 자주 봐요. 오빠.", emotion:"happy" },
        ], next:"3-5"},

        { id:"3-4c", bg:"bgThrone", chars:[{id:"selene",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"you", text:"처음 뵙겠습니다." },
            { speaker:"selene", text:"...", emotion:"default" },
            { speaker:"narrator", text:"잠깐 셀레네의 미소가 멈췄다." },
            { speaker:"selene", text:"...후후, 긴장하셨구나.", emotion:"happy" },
            { speaker:"selene", text:"괜찮아요. 천천히 친해지면 되죠.", emotion:"happy" },
            { speaker:"narrator", text:"다시 미소를 지었지만," },
            { speaker:"narrator", text:"방금 그 순간이 신경 쓰였다." },
        ], next:"3-5"},

    // ─── 3-5: 아델린 등장 ───
        { id:"3-5", bg:"bgThrone", chars:[{id:"selene",pos:"left",emotion:"default"},{id:"adeline",pos:"right",emotion:"angry"}], dialogs:[
            { speaker:"narrator", text:"그때, 알현실 문이 열렸다." },
            { speaker:"narrator", text:"은발에 차가운 눈빛. 또 다른 여인이 들어왔다." },
            { speaker:"adeline", text:"...이게 그 사생아야?", emotion:"angry" },
            { speaker:"selene", text:"아델린, 그런 말 하면 안 되지.", emotion:"default" },
            { speaker:"adeline", text:"사실을 말한 것뿐이야.", emotion:"angry" },
            { speaker:"narrator", text:"제2황녀 아델린." },
            { speaker:"narrator", text:"나를 쳐다보는 눈빛이 차갑다." },
            { speaker:"adeline", text:"착각하지 마. 네가 황자라고 환영받는 거 아니야.", emotion:"angry" },
            { speaker:"adeline", text:"갑자기 나타나서 황위를 노린다? 웃기지도 않아.", emotion:"angry" },
        ], choices:[
            { text:"노리는 게 아닙니다. 불려온 것뿐이에요.", next:"3-5a", affection:{adeline:+3} },
            { text:"그래도 정당한 경쟁자인걸요.", next:"3-5b", affection:{adeline:+3} },
            { text:"(침묵)", next:"3-5c", affection:{adeline:+0} }
        ]},

        { id:"3-5a", bg:"bgThrone", chars:[{id:"selene",pos:"left",emotion:"default"},{id:"adeline",pos:"right",emotion:"angry"}], dialogs:[
            { speaker:"you", text:"노리는 게 아닙니다. 불려온 것뿐이에요." },
            { speaker:"adeline", text:"...흥.", emotion:"angry" },
            { speaker:"adeline", text:"그 말이 진심인지 아닌지, 지켜볼 거야.", emotion:"default" },
            { speaker:"narrator", text:"여전히 차갑지만, 조금은 누그러진 것 같았다." },
        ], next:"3-6"},

        { id:"3-5b", bg:"bgThrone", chars:[{id:"selene",pos:"left",emotion:"default"},{id:"adeline",pos:"right",emotion:"default"}], dialogs:[
            { speaker:"you", text:"그래도 정당한 경쟁자인걸요." },
            { speaker:"adeline", text:"뭐?", emotion:"default" },
            { speaker:"you", text:"맞잖아요. 저에게도 기회는 있는거 아닌가요?" },
            { speaker:"adeline", text:"............", emotion:"default" },
            { speaker:"narrator", text:"아델린이 잠시 말을 잃었다." },
            { speaker:"adeline", text:"...이상한 녀석.", emotion:"default" },
            { speaker:"narrator", text:"뭔가 예상과 다르다는 표정이었다." },
        ], next:"3-6"},

        { id:"3-5c", bg:"bgThrone", chars:[{id:"selene",pos:"left",emotion:"default"},{id:"adeline",pos:"right",emotion:"angry"}], dialogs:[
            { speaker:"narrator", text:"아무 말도 하지 않았다." },
            { speaker:"narrator", text:"변명해봤자 소용없을 것 같았다." },
            { speaker:"adeline", text:"...말도 못 해? 한심하네.", emotion:"angry" },
            { speaker:"selene", text:"아델린.", emotion:"default" },
            { speaker:"adeline", text:"알았어, 그만할게.", emotion:"angry" },
            { speaker:"narrator", text:"아델린이 고개를 돌렸다." },
        ], next:"3-6"},

    // ─── 3-6: 황녀들 신경전 + 시험 언급 ───
        { id:"3-6", bgm:"tense", bg:"bgThrone", chars:[{id:"selene",pos:"left",emotion:"default"},{id:"adeline",pos:"right",emotion:"default"}], dialogs:[
            { speaker:"selene", text:"자, 이제 중요한 이야기를 해야겠네요.", emotion:"default" },
            { speaker:"adeline", text:"황위 계승 시험.", emotion:"default" },
            { speaker:"selene", text:"오빠도 알고 계시죠? 셋 중 한 명이 황제가 된다는 것.", emotion:"default" },
            { speaker:"you", text:"...들었습니다." },
            { speaker:"adeline", text:"어쩌피 내가 될건데 뭘 시험을 본다고, 흥.", emotion:"default" },
            { speaker:"selene", text:"걱정 마세요. 제가 도와드릴게요.", emotion:"happy" },
            { speaker:"adeline", text:"언니 말을 믿어? 경쟁자인데 도움은 무슨, 다 꿍꿍이가 있는거지.", emotion:"default" },
            { speaker:"narrator", text:"두 황녀가 서로를 쳐다봤다." },
            { speaker:"narrator", text:"부드러운 미소와 차가운 눈빛." },
            { speaker:"narrator", text:"...이 두 사람과 경쟁해야하는건가." },
        ]},

        { id:"3-6b", bg:"bgThrone", chars:[{id:"selene",pos:"left",emotion:"default"},{id:"adeline",pos:"right",emotion:"default"}], dialogs:[
            { speaker:"selene", text:"오빠 방은 동쪽 별관에 준비해뒀어요.", emotion:"default" },
            { speaker:"selene", text:"하녀분도 같이 지내실 수 있게요.", emotion:"happy" },
            { speaker:"adeline", text:"...하녀까지 챙기네.", emotion:"default" },
            { speaker:"selene", text:"가족이 데려온 사람인데, 당연하죠.", emotion:"default" },
            { speaker:"narrator", text:"셀레네가 미소 지었다." },
            { speaker:"narrator", text:"친절한 건 고맙지만... 뭔가 불안하다." },
            { speaker:"adeline", text:"첫 번째 시험은 일주일 뒤야. 준비해.", emotion:"default" },
            { speaker:"narrator", text:"아델린이 그 말만 남기고 알현실을 나갔다." },
        ]},

    // ─── 3-7: 복도 - 리제트와 대화 ───
        { id:"3-7", bgm:"romantic", bg:"bgHall", chars:[{id:"lizette",pos:"center",emotion:"sad"}], dialogs:[
            { speaker:"narrator", text:"알현실을 나왔다." },
            { speaker:"narrator", text:"리제트가 복도에서 기다리고 있었다." },
            { speaker:"narrator", text:"...아까 일이 떠올랐다." },
            { speaker:"lizette", text:"도련님... 끝나셨어요?", emotion:"sad" },
            { speaker:"narrator", text:"리제트의 목소리가 평소보다 작았다." },
            { speaker:"narrator", text:"눈도 제대로 못 마주친다." },
            { speaker:"you", text:"...리제트." },
            { speaker:"lizette", text:"네.", emotion:"sad" },
            { speaker:"narrator", text:"아까 일이 마음에 걸렸다." },
            { speaker:"narrator", text:"사과해야 할까." },
        ], choices:[
            { text:"아까... 미안.", next:"3-7a", affection:{lizette:+5} },
            { text:"(말없이 옆에 선다)", next:"3-7b", affection:{lizette:+1} },
            { text:"방으로 가자.", next:"3-7c", affection:{lizette:-3} }
        ]},

        { id:"3-7a", bg:"bgHall", chars:[{id:"lizette",pos:"center",emotion:"sad"}], dialogs:[
            { speaker:"you", text:"아까... 미안." },
            { speaker:"lizette", text:"...!", emotion:"sad" },
            { speaker:"narrator", text:"리제트가 고개를 들었다." },
            { speaker:"you", text:"남들의 시선을 신경쓰느라 너한테 괜히.." },
            { speaker:"lizette", text:"아니에요... 저야말로 생각이 짧았어요.", emotion:"sad" },
            { speaker:"lizette", text:"도련님 입장도 생각했어야 했는데...", emotion:"sad" },
            { speaker:"you", text:"네 잘못 아니야." },
            { speaker:"lizette", text:"............", emotion:"default" },
            { speaker:"narrator", text:"리제트의 표정이 조금 풀어졌다." },
            { speaker:"lizette", text:"...감사해요, 도련님.", emotion:"happy" },
        ], next:"3-8"},

        { id:"3-7b", bg:"bgHall", chars:[{id:"lizette",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"narrator", text:"말없이 리제트 옆에 섰다." },
            { speaker:"lizette", text:"...도련님?", emotion:"default" },
            { speaker:"narrator", text:"그냥 같이 있고 싶었다." },
            { speaker:"narrator", text:"말로 사과하긴 어렵지만, 이 정도는." },
            { speaker:"lizette", text:"............", emotion:"default" },
            { speaker:"narrator", text:"리제트가 작게 고개를 끄덕였다." },
            { speaker:"narrator", text:"무슨 의미인지는 모르겠지만, 분위기가 조금 나아진 것 같았다." },
        ], next:"3-8"},

        { id:"3-7c", bg:"bgHall", chars:[{id:"lizette",pos:"center",emotion:"sad"}], dialogs:[
            { speaker:"you", text:"방으로 가자." },
            { speaker:"lizette", text:"...네.", emotion:"sad" },
            { speaker:"narrator", text:"리제트가 고개를 숙인 채 뒤따랐다." },
            { speaker:"narrator", text:"사과해야 하는 건 알지만..." },
            { speaker:"narrator", text:"지금은 너무 지쳤다." },
        ], next:"3-8"},

    // ─── 3-8: 카이른 방 - 마무리 ───
        { id:"3-8", bgm:"peaceful", bg:"bgRoom", chars:[], dialogs:[
            { speaker:"narrator", text:"동쪽 별관에 도착했다." },
            { speaker:"narrator", text:"생각보다 넓고 깨끗한 방이었다." },
            { speaker:"narrator", text:"별채와는 비교도 안 될 정도로." },
            { speaker:"narrator", text:"...그래도 어색하다." },
            { speaker:"narrator", text:"창밖으로 황궁의 정원이 보였다." },
        ]},

        { id:"3-8b", bg:"bgRoom", chars:[], dialogs:[
            { speaker:"narrator", text:"황녀들." },
            { speaker:"narrator", text:"셀레네는 친절했지만, 아델린의 말대로 분명히 댓가없는 친절은 아닐것이다." },
            { speaker:"narrator", text:"반면, 아델린은 대놓고 적대적이다." },
            { speaker:"narrator", text:"그리고 일주일 뒤에 시험." },
            { speaker:"narrator", text:"...정신없는 하루였다." },
            { speaker:"narrator", text:"침대에 누웠다." },
            { speaker:"narrator", text:"내일부터가 진짜 시작이다." },
            { speaker:"narrator", text:"살아남아야 한다." },
            { speaker:"narrator", text:"이 황궁에서." },
        ], next:"chapter4"},
    ],
};
