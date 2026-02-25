// ═══════════════════════════════════════════════════════════════
// 챕터 4: 첫 번째 시험
// 
// 💡 아직 새 형식으로 변환되지 않았습니다.
//    변환 방법은 chapter1.js, chapter2.js 를 참고하세요!
// ═══════════════════════════════════════════════════════════════

// 임시로 기존 형식 사용
// ═══════════════════════════════════════════════════════════════
// 챕터 4: 시험
// ═══════════════════════════════════════════════════════════════

const CHAPTER4 = {
    title: "Chapter 4", subtitle: "첫 번째 시험", bgm: "default",
    scenes: [
    // ═══════════════════════════════════════
    // 파트 A: 황궁 첫날 아침
    // ═══════════════════════════════════════
        { id:"4-1", bg:"bgRoom", chars:[], dialogs:[
            { speaker:"narrator", text:"황궁에서의 첫 아침." },
            { speaker:"narrator", text:"낯선 천장을 바라보며 눈을 떴다." },
            { speaker:"narrator", text:"여긴... 아, 맞다. 황궁이었지." },
            { speaker:"narrator", text:"별채의 낡은 침대와는 비교도 안 되게 푹신했지만," },
            { speaker:"narrator", text:"오히려 그게 더 불편하게 느껴졌다." },
        ]},

        { id:"4-2", bg:"bgRoom", chars:[{id:"lizette",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"lizette", text:"도련님, 일어나셨어요?", emotion:"default" },
            { speaker:"you", text:"...응. 얼마나 잤지?" },
            { speaker:"lizette", text:"해가 벌써 높이 떴어요. 많이 피곤하셨나 봐요.", emotion:"default" },
            { speaker:"narrator", text:"리제트가 조용히 커튼을 열었다." },
            { speaker:"narrator", text:"눈부신 햇살이 쏟아져 들어왔다." },
            { speaker:"lizette", text:"오늘부터 시험 준비 기간이래요.", emotion:"default" },
            { speaker:"lizette", text:"일주일 동안 자유롭게 황궁을 둘러볼 수 있다고...", emotion:"default" },
            { speaker:"you", text:"자유롭게, 라..." },
            { speaker:"narrator", text:"자유라기보단 '알아서 준비해라'는 느낌이었다." },
        ]},

        { id:"4-3", bg:"bgRoom", chars:[{id:"lizette",pos:"center",emotion:"sad"}], dialogs:[
            { speaker:"lizette", text:"그리고... 저는 도련님과 따로 지내게 됐어요.", emotion:"sad" },
            { speaker:"you", text:"뭐?" },
            { speaker:"lizette", text:"하인 숙소에서 지내래요. 황자 전하의 방에 하녀가 드나드는 건 적절치 않다고...", emotion:"sad" },
            { speaker:"narrator", text:"리제트가 고개를 숙였다." },
            { speaker:"lizette", text:"하지만 낮에는 도련님 곁에 있을 수 있어요!", emotion:"default" },
            { speaker:"lizette", text:"그러니까... 너무 걱정 마세요.", emotion:"default" },
            { speaker:"narrator", text:"억지로 웃는 게 보였다." },
            { speaker:"narrator", text:"황궁이란 곳이 벌써부터 우리 사이에 선을 긋고 있었다." },
        ]},

    // ═══════════════════════════════════════
    // 파트 B: 셀레네의 접근
    // ═══════════════════════════════════════
        { id:"4-4", bgm:"romantic", bg:"bgHall", chars:[{id:"selene",pos:"center",emotion:"happy"}], dialogs:[
            { speaker:"narrator", text:"복도를 걷는데, 익숙한 목소리가 들려왔다." },
            { speaker:"selene", text:"오빠~", emotion:"happy" },
            { speaker:"narrator", text:"셀레네였다." },
            { speaker:"narrator", text:"우아한 드레스를 입고, 환한 미소를 지으며 다가왔다." },
            { speaker:"selene", text:"아침은 드셨어요? 저랑 같이 하실래요?", emotion:"happy" },
            { speaker:"you", text:"...같이?" },
            { speaker:"selene", text:"네! 오빠랑 더 친해지고 싶거든요.", emotion:"happy" },
        ], choices:[
            { text:"좋아. 같이 먹자.", next:"4-4a", affection:{selene:+10} },
            { text:"제안은 고맙지만 혼자 먹을게.", next:"4-4c", affection:{selene:+0} }
        ]},

        { id:"4-4a", bg:"bgHall", chars:[{id:"selene",pos:"center",emotion:"happy"}], dialogs:[
            { speaker:"you", text:"좋아. 같이 먹자." },
            { speaker:"selene", text:"정말요? 기뻐요!", emotion:"happy" },
            { speaker:"narrator", text:"셀레네가 내 팔을 자연스럽게 잡았다." },
            { speaker:"narrator", text:"...좀 가깝지 않나?" },
            { speaker:"selene", text:"이쪽으로 와요. 제 정원이 있거든요.", emotion:"happy" },
        ], next:"4-5"},

        { id:"4-4b", bg:"bgHall", chars:[{id:"selene",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"you", text:"제안은 고맙지만 혼자 먹을게. " },
            { speaker:"selene", text:"...", emotion:"default" },
            { speaker:"narrator", text:"셀레네의 미소가 잠깐 굳었다." },
            { speaker:"selene", text:"...그래요. 그럼 나중에 봐요.", emotion:"default" },
            { speaker:"narrator", text:"살짝 실망한 것 같았다." },
            { speaker:"narrator", text:"하지만 금방 미소를 되찾더니 돌아섰다." },
            { speaker:"selene", text:"시험 정보가 필요하면 언제든 찾아와요, 오빠.", emotion:"happy" },
        ], next:"4-6"},

        { id:"4-5", bg:"bgGarden", chars:[{id:"selene",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"narrator", text:"셀레네의 정원은 아름다웠다." },
            { speaker:"narrator", text:"알록달록한 꽃들이 가득했고, 작은 테이블이 놓여 있었다." },
            { speaker:"selene", text:"여기서 자주 차를 마셔요. 조용하고 좋거든요.", emotion:"default" },
            { speaker:"narrator", text:"시종들이 음식을 가져왔다." },
            { speaker:"selene", text:"자, 드세요. 그리고 시험 얘기인데요...", emotion:"default" },
            { speaker:"selene", text:"첫 번째 시험은 '지략'을 보는 거예요.", emotion:"default" },
            { speaker:"you", text:"지략?" },
            { speaker:"selene", text:"네. 패턴을 읽고, 기억하고, 판단하는 능력.", emotion:"default" },
            { speaker:"selene", text:"황제는 머리가 좋아야 하니까요.", emotion:"happy" },
        ]},

        { id:"4-5b", bg:"bgGarden", chars:[{id:"selene",pos:"center",emotion:"happy"}], dialogs:[
            { speaker:"selene", text:"제가 도와드릴게요, 오빠.", emotion:"happy" },
            { speaker:"you", text:"도와준다고? 우리 경쟁 상대잖아." },
            { speaker:"selene", text:"후후, 그건 그렇지만...", emotion:"happy" },
            { speaker:"selene", text:"저는 오빠가 떨어지는 게 더 싫어요.", emotion:"default" },
            { speaker:"narrator", text:"무슨 의미일까." },
            { speaker:"narrator", text:"단순한 가족애인지, 아니면..." },
            { speaker:"selene", text:"오빠가 황궁에 남아야 저도 자주 볼 수 있잖아요.", emotion:"happy" },
            { speaker:"narrator", text:"셀레네가 의미심장하게 웃었다." },
        ], choices:[
            { text:"고마워. 네 도움이 필요할 것 같아.", next:"4-5c", affection:{selene:+15} },
            { text:"왜 이렇게까지 해주는 거야?", next:"4-5d", affection:{selene:+10} },
            { text:"혼자 해볼게. 그래도 고마워.", next:"4-5e", affection:{selene:+5} }
        ]},

        { id:"4-5c", bg:"bgGarden", chars:[{id:"selene",pos:"center",emotion:"happy"}], dialogs:[
            { speaker:"you", text:"고마워. 네 도움이 필요할 것 같아." },
            { speaker:"selene", text:"후후 역시..!", emotion:"happy" },
            { speaker:"narrator", text:"셀레네의 눈이 반짝였다." },
            { speaker:"selene", text:"매일 이 시간에 여기서 만나요. 제가 특훈시켜 드릴게요.", emotion:"happy" },
            { speaker:"narrator", text:"...왠지 의욕이 넘쳐 보인다." },
        ], next:"4-6"},

        { id:"4-5d", bg:"bgGarden", chars:[{id:"selene",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"you", text:"왜 이렇게까지 해주는 거야?" },
            { speaker:"selene", text:"...", emotion:"default" },
            { speaker:"narrator", text:"셀레네가 잠시 말을 멈췄다." },
            { speaker:"selene", text:"...이유가 필요한가요?", emotion:"default" },
            { speaker:"selene", text:"그냥 오빠니까요. 가족이잖아요.", emotion:"happy" },
            { speaker:"narrator", text:"밝게 웃었지만, 뭔가 숨기는 느낌이 들었다." },
            { speaker:"narrator", text:"하지만 더 캐묻진 않았다." },
        ], next:"4-6"},

        { id:"4-5e", bg:"bgGarden", chars:[{id:"selene",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"you", text:"혼자 해볼게. 그래도 고마워." },
            { speaker:"selene", text:"...그래요?", emotion:"default" },
            { speaker:"narrator", text:"살짝 아쉬운 표정이었다." },
            { speaker:"selene", text:"그럼 힘들면 말해요. 언제든 도와줄게요.", emotion:"default" },
        ], next:"4-6"},

    // ═══════════════════════════════════════
    // 파트 C: 아델린과 마주침
    // ═══════════════════════════════════════
        { id:"4-6", bgm:"tense", bg:"bgHall", chars:[{id:"adeline",pos:"center",emotion:"angry"}], dialogs:[
            { speaker:"narrator", text:"식사를 마치고 복도를 걷는데—" },
            { speaker:"adeline", text:"거기 서.", emotion:"angry" },
            { speaker:"narrator", text:"아델린이 앞을 막아섰다." },
            { speaker:"narrator", text:"차가운 눈빛이 나를 꿰뚫었다." },
            { speaker:"adeline", text:"셀레네랑 대화하던데.", emotion:"angry" },
            { speaker:"you", text:"...그래서?" },
            { speaker:"adeline", text:"경고하는데, 저 여자 믿지 마.", emotion:"default" },
            { speaker:"you", text:"뭐?" },
            { speaker:"adeline", text:"셀레네가 친절한 건 다 이유가 있어. 순수한 호의 같은 거 없어.", emotion:"default" },
        ]},

        { id:"4-6b", bg:"bgHall", chars:[{id:"adeline",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"you", text:"넌 왜 이런 얘기를 해주는 건데?" },
            { speaker:"adeline", text:"...착각하지 마. 널 위해서가 아니야.", emotion:"default" },
            { speaker:"adeline", text:"그냥 셀레네가 유리해지는 게 싫을 뿐이야.", emotion:"angry" },
            { speaker:"narrator", text:"아델린이 고개를 돌렸다." },
            { speaker:"narrator", text:"하지만..." },
            { speaker:"adeline", text:"...시험. 첫 번째는 기억력이야.", emotion:"default", effect:"whisper" },
            { speaker:"you", text:"...?" },
            { speaker:"adeline", text:"듣지 못한 척 해.", emotion:"default" },
            { speaker:"narrator", text:"그리고 빠르게 지나갔다." },
        ], choices:[
            { text:"잠깐, 고마워.", next:"4-6c", affection:{adeline:+15} },
            { text:"생각보다 친절하네..", next:"4-6d", affection:{adeline:+10} },
            { text:"(그냥 보내준다)", next:"4-6e", affection:{adeline:+5} }
        ]},

        { id:"4-6c", bg:"bgHall", chars:[{id:"adeline",pos:"center",emotion:"sad"}], dialogs:[
            { speaker:"you", text:"잠깐, 고마워." },
            { speaker:"narrator", text:"아델린이 멈칫했다." },
            { speaker:"adeline", text:"...뭐?", emotion:"sad" },
            { speaker:"you", text:"도움줘서. 고맙다고." },
            { speaker:"adeline", text:"......", emotion:"sad" },
            { speaker:"narrator", text:"귀가 살짝 붉어진 것 같았다." },
            { speaker:"adeline", text:"...닥쳐. 고마워할 거 없어.", emotion:"angry" },
            { speaker:"narrator", text:"그리고 빠르게 사라졌다." },
        ], next:"4-7"},

        { id:"4-6d", bg:"bgHall", chars:[], dialogs:[
            { speaker:"narrator", text:"아델린의 뒷모습에 대고 말했다." },
            { speaker:"you", text:"생각보다 친절하네." },
            { speaker:"narrator", text:"멀리서 아델린이 걸음을 멈추는 게 보였다." },
            { speaker:"adeline", text:"...뭐라고?!", emotion:"angry" },
            { speaker:"narrator", text:"아델린의 붉어져가는 귓불이 눈에 들어왔다." },
            { speaker:"narrator", text:"약간은 어색하게 씩씩거리며 가는 뒷모습이 보였다." },
        ], next:"4-7"},

        { id:"4-6e", bg:"bgHall", chars:[], dialogs:[
            { speaker:"narrator", text:"아델린을 그냥 보내줬다." },
            { speaker:"narrator", text:"...경고와 정보. 둘 다 신경 쓰였다." },
            { speaker:"narrator", text:"셀레네를 조심하라는 건 무슨 의미일까." },
        ], next:"4-7"},

    // ═══════════════════════════════════════
    // 파트 D: 카렌의 검술 훈련
    // ═══════════════════════════════════════
        { id:"4-7", bgm:"default", bg:"bgGarden", chars:[{id:"karen",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"narrator", text:"오후가 되자, 카렌이 찾아왔다." },
            { speaker:"karen", text:"전하, 시간 되십니까.", emotion:"default" },
            { speaker:"you", text:"카렌? 무슨 일이야?" },
            { speaker:"karen", text:"첫 번째 시험은 지략이지만... 두 번째는 무력입니다.", emotion:"default" },
            { speaker:"karen", text:"미리 준비해두시는 게 좋을 것 같아 찾아왔습니다.", emotion:"default" },
            { speaker:"you", text:"검술을 가르쳐주겠다는 거야?" },
            { speaker:"karen", text:"...제가 감히 가르치는 건 아니고. 기초만.", emotion:"default" },
            { speaker:"narrator", text:"카렌이 목검 두 자루를 꺼냈다." },
        ]},

        { id:"4-7b", bg:"bgGarden", chars:[{id:"karen",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"narrator", text:"기초 자세부터 배웠다." },
            { speaker:"narrator", text:"검을 잡는 법, 발 딛는 법, 시선 처리." },
            { speaker:"karen", text:"자세가... 생각보다 좋습니다.", emotion:"default" },
            { speaker:"you", text:"그래?" },
            { speaker:"karen", text:"처음 잡는 것 치고는 안정적입니다. 재능이 있으신 것 같습니다.", emotion:"default" },
            { speaker:"narrator", text:"카렌이 살짝 놀란 표정을 지었다." },
            { speaker:"narrator", text:"칭찬인 것 같은데, 표정 변화가 거의 없어서 모르겠다." },
        ]},

        { id:"4-7c", bg:"bgGarden", chars:[{id:"karen",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"karen", text:"오늘은 여기까지.", emotion:"default" },
            { speaker:"karen", text:"내일도 시간 되시면 찾아오겠습니다.", emotion:"default" },
            { speaker:"you", text:"고마워, 카렌. 바쁠 텐데 시간 내줘서." },
            { speaker:"karen", text:"...당연한 일입니다.", emotion:"default" },
            { speaker:"narrator", text:"카렌이 고개를 살짝 숙였다." },
        ], choices:[
            { text:"넌 왜 나를 도와주는 거야?", next:"4-7d", affection:{karen:+10} },
            { text:"다음에도 잘 부탁해.", next:"4-7e", affection:{karen:+5} }
        ]},

        { id:"4-7d", bg:"bgGarden", chars:[{id:"karen",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"you", text:"넌 왜 나를 도와주는 거야? 황녀 휘하잖아." },
            { speaker:"karen", text:"...", emotion:"default" },
            { speaker:"narrator", text:"카렌이 잠시 침묵했다." },
            { speaker:"karen", text:"...저는 황녀 전하의 명령으로 움직입니다.", emotion:"default" },
            { speaker:"karen", text:"하지만...", emotion:"default" },
            { speaker:"narrator", text:"카렌이 나를 바라봤다." },
            { speaker:"karen", text:"전하를 돕고 싶다는 마음도 있습니다.", emotion:"default" },
            { speaker:"you", text:"...그래?" },
            { speaker:"karen", text:"습격 때 보았습니다. 무기도 없이 하녀분을 지키려 했던 것.", emotion:"default" },
            { speaker:"karen", text:"그런 분이라면... 모시고 싶다고 생각했습니다.", emotion:"default" },
            { speaker:"narrator", text:"카렌의 눈이 진지했다." },
            { speaker:"narrator", text:"무표정하지만, 진심인 것 같았다." },
        ], next:"4-8"},

        { id:"4-7e", bg:"bgGarden", chars:[{id:"karen",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"you", text:"다음에도 잘 부탁해." },
            { speaker:"karen", text:"네. 열심히 하겠습니다.", emotion:"default" },
            { speaker:"narrator", text:"카렌이 고개를 숙이고 떠났다." },
        ], next:"4-8"},

    // ═══════════════════════════════════════
    // 파트 E: 엘리아의 정보
    // ═══════════════════════════════════════
        { id:"4-8", bg:"bgRoom", chars:[{id:"elia",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"narrator", text:"저녁, 방에서 쉬고 있는데 노크 소리가 들렸다." },
            { speaker:"narrator", text:"문을 열자 엘리아가 서 있었다." },
            { speaker:"elia", text:"...들어가도 돼?", emotion:"default" },
            { speaker:"you", text:"엘리아? 무슨 일이야?" },
            { speaker:"elia", text:"잠깐이면 돼.", emotion:"default" },
            { speaker:"narrator", text:"엘리아가 주위를 살피더니 안으로 들어왔다." },
            { speaker:"elia", text:"시험 얘기 하러 왔어.", emotion:"default" },
            { speaker:"you", text:"...너도?" },
            { speaker:"elia", text:"'너도'라니, 누가 또 왔어?", emotion:"angry" },
            { speaker:"you", text:"셀레네랑 아델린." },
            { speaker:"elia", text:"...흥, 다들 발이 빠르네.", emotion:"default" },
        ]},

        { id:"4-8b", bg:"bgRoom", chars:[{id:"elia",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"elia", text:"난 더 구체적인 거 알려줄게.", emotion:"default" },
            { speaker:"you", text:"뭔데?" },
            { speaker:"elia", text:"시험은 기억력 테스트.", emotion:"default" },
            { speaker:"elia", text:"빠르게 순서를 맞추는 시험이라고 들었어.", emotion:"default" },
            { speaker:"elia", text:"한 번이라도 틀리면 탈락이고.", emotion:"default" },
            { speaker:"elia", text:"그러니까... 바보처럼 굴지 마.", emotion:"default" },
        ], choices:[
            { text:"왜 이런 정보까지 알려주는 거야?", next:"4-8c", affection:{elia:+10} },
            { text:"고마워, 도움이 됐어.", next:"4-8d", affection:{elia:+5} }
        ]},

        { id:"4-8c", bg:"bgRoom", chars:[{id:"elia",pos:"center",emotion:"sad"}], dialogs:[
            { speaker:"you", text:"왜 이런 정보까지 알려주는 거야?" },
            { speaker:"elia", text:"...", emotion:"sad" },
            { speaker:"narrator", text:"엘리아가 잠시 말을 멈췄다." },
            { speaker:"elia", text:"...몰라. 그냥.", emotion:"sad" },
            { speaker:"elia", text:"네가 떨어지면 재미없을 것 같아서.", emotion:"default" },
            { speaker:"you", text:"재미?" },
            { speaker:"elia", text:"놀릴 상대가 없어지잖아.", emotion:"default" },
            { speaker:"narrator", text:"건방지게 말했지만, 표정은 어딘가 쑥스러워 보였다." },
            { speaker:"elia", text:"어, 어쨌든! 떨어지지 마!", emotion:"angry" },
            { speaker:"narrator", text:"그리고 빠르게 나가버렸다." },
        ], next:"4-9"},

        { id:"4-8d", bg:"bgRoom", chars:[{id:"elia",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"you", text:"고마워, 도움이 됐어." },
            { speaker:"elia", text:"흥, 당연하지.", emotion:"default" },
            { speaker:"elia", text:"...떨어지지 마.", emotion:"default" },
            { speaker:"narrator", text:"엘리아가 문을 열고 나갔다." },
        ], next:"4-9"},

    // ═══════════════════════════════════════
    // 파트 F: 루나 첫 등장
    // ═══════════════════════════════════════
        { id:"4-9", bgm:"peaceful", bg:"bgGarden", chars:[], dialogs:[
            { speaker:"narrator", text:"다음 날, 정원을 산책하고 있었다." },
            { speaker:"narrator", text:"머리를 식힐 겸 걷다 보니 외진 곳까지 왔다." },
            { speaker:"narrator", text:"그런데—" },
            { speaker:"narrator", text:"벤치에 누군가 앉아 있었다." },
            { speaker:"narrator", text:"검은 머리카락. 작은 체구." },
            { speaker:"narrator", text:"혼자 무언가를 응시하고 있었다." },
        ]},

        { id:"4-9b", bg:"bgGarden", chars:[{id:"luna",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"narrator", text:"다가가자, 소녀가 고개를 들었다." },
            { speaker:"luna", text:"...", emotion:"default" },
            { speaker:"narrator", text:"푸른 눈이 나를 경계하듯 바라봤다." },
            { speaker:"luna", text:"...누구야.", emotion:"default" },
            { speaker:"you", text:"산책중인데.. 방해했으면 미안." },
            { speaker:"luna", text:"...", emotion:"default" },
            { speaker:"narrator", text:"소녀가 다시 고개를 돌렸다." },
            { speaker:"narrator", text:"말을 걸지 말라는 분위기가 역력했다." },
        ], choices:[
            { text:"혼자 있어도 괜찮아?", next:"4-9c", affection:{luna:+15} },
            { text:"(조용히 옆에 앉는다)", next:"4-9d", affection:{luna:+10} },
            { text:"(그냥 지나간다)", next:"4-9e", affection:{luna:+0} }
        ]},

        { id:"4-9c", bg:"bgGarden", chars:[{id:"luna",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"you", text:"혼자 있어도 괜찮아?" },
            { speaker:"luna", text:"...무슨 상관이야.", emotion:"default" },
            { speaker:"you", text:"그냥 물어본 거야." },
            { speaker:"luna", text:"...", emotion:"default" },
            { speaker:"narrator", text:"소녀가 나를 힐끗 쳐다봤다." },
            { speaker:"luna", text:"...넌 누군데 이런 데까지 와.", emotion:"default" },
            { speaker:"you", text:"새로 온 황자. 카이른이야." },
            { speaker:"luna", text:"...황자?", emotion:"sad" },
            { speaker:"narrator", text:"소녀의 눈이 살짝 커졌다." },
            { speaker:"luna", text:"...루나.", emotion:"default" },
            { speaker:"you", text:"응?" },
            { speaker:"luna", text:"이름. 루나야.", emotion:"default" },
            { speaker:"narrator", text:"작게 대답하고, 다시 고개를 돌렸다." },
            { speaker:"narrator", text:"...이름을 알려줬네." },
        ], next:"4-10"},

        { id:"4-9d", bg:"bgGarden", chars:[{id:"luna",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"narrator", text:"말없이 벤치 한쪽에 앉았다." },
            { speaker:"luna", text:"...뭐야.", emotion:"default" },
            { speaker:"you", text:"그냥 좀 쉬려고." },
            { speaker:"luna", text:"...", emotion:"default" },
            { speaker:"narrator", text:"소녀가 불편한 듯 몸을 움직였다." },
            { speaker:"narrator", text:"하지만 자리를 뜨진 않았다." },
            { speaker:"narrator", text:"한참을 그렇게 있다가—" },
            { speaker:"luna", text:"...루나.", emotion:"default" },
            { speaker:"you", text:"뭐?" },
            { speaker:"luna", text:"이름이야. 물어보려고 했잖아.", emotion:"default" },
            { speaker:"you", text:"안 물어봤는데." },
            { speaker:"luna", text:"...", emotion:"sad" },
            { speaker:"narrator", text:"소녀가 살짝 당황한 것 같았다." },
            { speaker:"narrator", text:"...귀엽네." },
        ], next:"4-10"},

        { id:"4-9e", bg:"bgGarden", chars:[], dialogs:[
            { speaker:"narrator", text:"말을 걸지 않고 지나갔다." },
            { speaker:"narrator", text:"뒤에서 시선이 느껴졌지만, 돌아보진 않았다." },
        ], next:"4-10b"},

    // 루나 추가 정보
        { id:"4-10", bg:"bgGarden", chars:[{id:"elia",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"narrator", text:"나중에 엘리아에게 물어봤다." },
            { speaker:"you", text:"루나라는 애 알아?" },
            { speaker:"elia", text:"루나? 아, 알지.", emotion:"default" },
            { speaker:"elia", text:"우리 집 기사의 동생이야.", emotion:"default" },
            { speaker:"you", text:"기사의 동생?" },
            { speaker:"elia", text:"응. 부모님이 돌아가셔서 오빠 따라 황궁에 있어.", emotion:"default" },
            { speaker:"elia", text:"좀 어두운 애야. 말도 잘 안 하고.", emotion:"default" },
            { speaker:"narrator", text:"그렇구나. 힘든 사정이 있었구나." },
        ]},

        { id:"4-10b", bg:"bgGarden", chars:[{id:"luna",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"narrator", text:"그 뒤로도 몇 번 그 아이를 마주쳤다." },
            { speaker:"narrator", text:"항상 같은 벤치에 앉아있었다." },
            { speaker:"narrator", text:"말은 거의 하지 않았지만—" },
            { speaker:"narrator", text:"점점 경계가 풀리는 것 같았다." },
            { speaker:"luna", text:"...또 왔어?", emotion:"default" },
            { speaker:"you", text:"응. 여기 좋더라고." },
            { speaker:"luna", text:"...", emotion:"default" },
            { speaker:"narrator", text:"루나가 고개를 돌렸지만," },
            { speaker:"narrator", text:"벤치 한쪽을 비워두는 걸 보면 싫지는 않은 것 같았다." },
        ], choices:[
            { text:"나중에 같이 산책할래?", next:"4-10c", affection:{luna:+15} },
            { text:"(말없이 옆에 앉는다)", next:"4-10d", affection:{luna:+10} }
        ]},

        { id:"4-10c", bg:"bgGarden", chars:[{id:"luna",pos:"center",emotion:"sad"}], dialogs:[
            { speaker:"you", text:"나중에 같이 산책할래?" },
            { speaker:"luna", text:"...왜?", emotion:"sad" },
            { speaker:"you", text:"혼자보다 둘이 낫잖아." },
            { speaker:"luna", text:"............", emotion:"sad" },
            { speaker:"narrator", text:"루나가 오랫동안 침묵했다." },
            { speaker:"luna", text:"...생각해볼게.", emotion:"default" },
            { speaker:"narrator", text:"거절이 아니었다." },
            { speaker:"narrator", text:"작은 진전이지만, 기분이 좋았다." },
        ], next:"4-11"},

        { id:"4-10d", bg:"bgGarden", chars:[{id:"luna",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"narrator", text:"말없이 옆에 앉았다." },
            { speaker:"narrator", text:"루나도 아무 말 하지 않았다." },
            { speaker:"narrator", text:"하지만 불편하지 않은 침묵이었다." },
            { speaker:"narrator", text:"가끔은 이런 것도 괜찮았다." },
        ], next:"4-11"},

    // ═══════════════════════════════════════
    // 파트 G: 시험 전날 밤
    // ═══════════════════════════════════════
        { id:"4-11", bgm:"romantic", bg:"bgRoom", chars:[{id:"lizette",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"narrator", text:"시험 전날 밤." },
            { speaker:"narrator", text:"리제트가 찾아왔다." },
            { speaker:"lizette", text:"도련님, 내일이에요.", emotion:"default" },
            { speaker:"you", text:"응. 떨리네." },
            { speaker:"lizette", text:"...저도 떨려요.", emotion:"sad" },
            { speaker:"you", text:"넌 왜 떨려?" },
            { speaker:"lizette", text:"도련님이 걱정되니까요.", emotion:"sad" },
            { speaker:"narrator", text:"리제트가 작게 웃었다." },
            { speaker:"lizette", text:"도련님이 실패하면... 다시 별채로 돌아가는 거잖아요.", emotion:"sad" },
            { speaker:"lizette", text:"그건 싫어요. 여기서 도련님이 인정받는 모습 보고 싶어요.", emotion:"default" },
        ]},

        { id:"4-11b", bg:"bgRoom", chars:[{id:"lizette",pos:"center",emotion:"happy"}], dialogs:[
            { speaker:"you", text:"걱정 마. 해볼게." },
            { speaker:"lizette", text:"네! 도련님이라면 분명 잘하실 거예요!", emotion:"happy" },
            { speaker:"narrator", text:"리제트가 환하게 웃었다." },
            { speaker:"lizette", text:"전 늘 도련님 편이에요. 응원할게요.", emotion:"happy" },
            { speaker:"you", text:"...고마워, 리제트." },
            { speaker:"narrator", text:"리제트가 고개를 숙이고 방을 나갔다." },
            { speaker:"narrator", text:"내일." },
            { speaker:"narrator", text:"모든 게 결정된다." },
        ]},

    // ═══════════════════════════════════════
    // 파트 H: 첫 번째 시험 (미니게임)
    // ═══════════════════════════════════════
        { id:"4-12", bgm:"tense", bg:"bgThrone", chars:[], dialogs:[
            { speaker:"narrator", text:"시험 당일." },
            { speaker:"narrator", text:"알현실에 모두가 모였다." },
        ]},

        { id:"4-12b", bg:"bgThrone", chars:[{id:"selene",pos:"left",emotion:"default"},{id:"adeline",pos:"right",emotion:"default"}], dialogs:[
            { speaker:"narrator", text:"셀레네와 아델린이 이미 와 있었다." },
            { speaker:"selene", text:"오빠, 긴장됐어요?", emotion:"default" },
            { speaker:"adeline", text:"...흥.", emotion:"default" },
            { speaker:"narrator", text:"셀레네는 미소를, 아델린은 무표정을 유지했다." },
            { speaker:"narrator", text:"둘 다 긴장한 기색이 없었다." },
            { speaker:"narrator", text:"이 시험을 이미 여러 번 해본 것처럼." },
        ]},

        { id:"4-12c", bg:"bgThrone", chars:[], dialogs:[
            { speaker:"시험관", text:"첫 번째 시험을 시작하겠습니다.", effect:"grow" },
            { speaker:"시험관", text:"이 시험은 '지략'을 평가합니다." },
            { speaker:"시험관", text:"빛이 나타나는 순서를 기억하고, 정확히 따라하십시오." },
            { speaker:"시험관", text:"한 번이라도 틀리면 탈락입니다." },
            { speaker:"narrator", text:"심장이 쿵쾅거렸다." },
            { speaker:"시험관", text:"준비되셨습니까? 시작합니다." },
        ], next:"minigame-memory"},

    // ═══════════════════════════════════════
    // 파트 I: 시험 결과
    // ═══════════════════════════════════════
        { id:"4-pass", bgm:"peaceful", bg:"bgThrone", chars:[{id:"selene",pos:"left",emotion:"happy"},{id:"adeline",pos:"right",emotion:"default"}], dialogs:[
            { speaker:"시험관", text:"카이른 전하, 통과입니다.", effect:"grow" },
            { speaker:"narrator", text:"...해냈다." },
            { speaker:"narrator", text:"긴장이 풀리며 숨을 내쉬었다." },
            { speaker:"selene", text:"역시 오빠예요! 축하해요!", emotion:"happy" },
            { speaker:"adeline", text:"...운이 좋았네.", emotion:"default" },
            { speaker:"narrator", text:"아델린이 퉁명스럽게 말했지만," },
            { speaker:"narrator", text:"눈빛은 조금 다른 것 같았다." },
        ], next:"4-pass2"},

        { id:"4-pass2", bg:"bgThrone", chars:[{id:"karen",pos:"left",emotion:"default"},{id:"elia",pos:"right",emotion:"happy"}], dialogs:[
            { speaker:"karen", text:"축하드립니다, 전하.", emotion:"default" },
            { speaker:"elia", text:"봐봐, 내가 힌트 줘서 붙은 거잖아!", emotion:"happy" },
            { speaker:"you", text:"다들 도와줘서 붙은 거야. 고마워." },
            { speaker:"narrator", text:"첫 번째 관문을 넘었다." },
            { speaker:"narrator", text:"하지만 이건 시작일 뿐이다." },
            { speaker:"시험관", text:"두 번째 시험은 2주 뒤입니다. 준비하십시오." },
            { speaker:"narrator", text:"2주 뒤." },
            { speaker:"narrator", text:"다음 시험은 무력이라고 했다." },
            { speaker:"narrator", text:"...더 열심히 해야겠다." },
        ], next:"chapter5"},

    // 배드엔딩 1
        { id:"4-fail", bgm:"tense", bg:"bgThrone", chars:[], dialogs:[
            { speaker:"시험관", text:"카이른 전하, 탈락입니다.", effect:"shake" },
            { speaker:"narrator", text:"...뭐?" },
            { speaker:"narrator", text:"머릿속이 새하얘졌다." },
            { speaker:"시험관", text:"아쉽지만, 규칙은 규칙입니다." },
            { speaker:"시험관", text:"전하께서는 황궁에서 퇴거하셔야 합니다." },
        ], next:"4-fail2"},

        { id:"4-fail2", bg:"bgRoom", chars:[], dialogs:[
            { speaker:"narrator", text:"그렇게." },
            { speaker:"narrator", text:"나는 다시 외곽으로 쫓겨났다." },
            { speaker:"narrator", text:"황자라는 이름은 허울뿐이었다." },
            { speaker:"narrator", text:"아무것도 증명하지 못한 채," },
            { speaker:"narrator", text:"다시 아무도 찾지 않는 별채로 돌아갔다." },
            { speaker:"narrator", text:"...모든 게 끝났다.", effect:"fadeOut" },
        ], next:"badend1"},

    // 배드엔딩 화면
        { id:"badend1", bg:"bgBlack", chars:[], dialogs:[
            { speaker:"narrator", text:"[ BAD END 1 - 실패한 황자 ]", effect:"grow" },
        ], ending:"badend1"},
    ],
};
