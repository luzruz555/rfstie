// ═══════════════════════════════════════════════════════════════
// 챕터 1: 사생아의 비밀
// ═══════════════════════════════════════════════════════════════

const CHAPTER1 = {
    title: "Chapter 1", subtitle: "사생아의 비밀", bgm: "default",
    scenes: [
        { id:"1-1", bg:"bgRoom", chars:[], dialogs:[
            { speaker:"narrator", text:"아르카디엔 제국." },
            { speaker:"narrator", text:"대륙의 절반을 지배하는, 천 년 역사의 강대국." },
            { speaker:"narrator", text:"그 제국의 변방, 레이센 후작가의 외딴 별채에..." },
            { speaker:"narrator", text:"공식적으로 존재하지 않는 아이가 살고 있었다." },
            { speaker:"narrator", text:"바로 나, 카이른." },
            { speaker:"narrator", text:"성은 있으나 쓸 수 없고, 이름은 있으나 불리지 않는다." },
            { speaker:"narrator", text:"사생아." },
            { speaker:"narrator", text:"그것이 18년간 나를 정의한 단어였다." },
            { speaker:"narrator", text:"어머니가 누구인지는 안다. 10년 전에 돌아가셨으니까." },
            { speaker:"narrator", text:"하지만 아버지가 누구인지는... 아무도 알려주지 않았다." },
            { speaker:"narrator", text:"그저 '고귀한 분'이라는 말만 들었을 뿐." },
            { speaker:"narrator", text:"...솔직히, 알고 싶지도 않았다." },
            { speaker:"narrator", text:"날 버린 사람이 누구든, 내 인생에 필요 없으니까." },
            { speaker:"narrator", text:"그래도 버틸 수 있었던 건..." },
            { speaker:"narrator", text:"단 한 사람, 언제나 내 곁을 지켜준 사람이 있었기 때문이다." },
        ]},

        { id:"1-2", bg:"bgRoom", chars:[{id:"lizette",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"narrator", text:"똑똑." },
            { speaker:"narrator", text:"익숙한 노크 소리와 함께, 문이 조심스럽게 열렸다." },
            { speaker:"lizette", text:"도, 도련님... 아침이에요.", emotion:"default", effect:"small" },
            { speaker:"narrator", text:"노란 머릿결이 아침 햇살에 반짝인다." },
            { speaker:"narrator", text:"리제트. 나보다 한 살 어린, 이 별채의 유일한 하녀." },
            { speaker:"narrator", text:"...라고 쓰고, 내 유일한 친구라고 읽는다." },
            { speaker:"lizette", text:"어젯밤에 기침하시는 소리가 들렸어요...", emotion:"sad" },
            { speaker:"lizette", text:"그래서 죽을 쑤어왔어요. 따뜻할 때 드세요.", emotion:"default" },
            { speaker:"narrator", text:"쟁반을 든 손이 살짝 떨리고 있다." },
            { speaker:"narrator", text:"저게 긴장인지 추위인지는 모르겠지만..." },
            { speaker:"narrator", text:"어쨌든, 대답은 해야겠지." },
        ], choices:[
            { text:"고마워, 리제트.", next:"1-2a", affection:{lizette:+3} },
            { text:"...응. (비몽사몽한 목소리로)", next:"1-2b", affection:{lizette:+3} },
            { text:"네가 만든 거야? 기대되는걸?", next:"1-2c", affection:{lizette:+5} }
        ]},

    // ─── 선택지 1 분기 ───
        { id:"1-2a", bg:"bgRoom", chars:[{id:"lizette",pos:"center",emotion:"happy"}], dialogs:[
            { speaker:"lizette", text:"다, 다행이에요...!", emotion:"happy", effect:"pulse" },
            { speaker:"lizette", text:"사실 새벽부터 일어나서 준비했거든요...", emotion:"default" },
            { speaker:"lizette", text:"아, 이건 자랑하려는 게 아니라...!", emotion:"sad", effect:"shake" },
            { speaker:"you", text:"알아. 고맙다는 거야, 진짜로." },
            { speaker:"narrator", text:"리제트의 얼굴이 환하게 빛났다." },
            { speaker:"narrator", text:"이렇게 작은 말에도 기뻐하다니... 참 긍정적인 애다." },
        ], next:"1-3"},

        { id:"1-2b", bg:"bgRoom", chars:[{id:"lizette",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"lizette", text:"...아직 덜 깨셨구나.", emotion:"default" },
            { speaker:"lizette", text:"죽 식기 전에 드세요. 여기 놓을게요.", emotion:"default" },
            { speaker:"narrator", text:"리제트가 조용히 쟁반을 탁자에 내려놓았다." },
            { speaker:"narrator", text:"...그래도 고생한거 같은데 한마디라도 해줄걸 그랬나." },
        ], next:"1-3"},

        { id:"1-2c", bg:"bgRoom", chars:[{id:"lizette",pos:"center",emotion:"happy"}], dialogs:[
            { speaker:"lizette", text:"네?! 기, 기대요...?", emotion:"happy", effect:"shake" },
            { speaker:"lizette", text:"그, 그냥 평범한 죽인데요 뭘..", emotion:"happy" },
            { speaker:"you", text:"네가 정성들여 만든건데, 특별한 거지." },
            { speaker:"lizette", text:"...!!", emotion:"happy", effect:"pulse" },
            { speaker:"narrator", text:"리제트가 얼굴을 양손으로 가렸다." },
            { speaker:"narrator", text:"귀까지 빨개진 게 다 보이는데, 귀여운 척인가." },
            { speaker:"narrator", text:"...귀엽긴 하네." },
        ], next:"1-3"},

        { id:"1-3", bg:"bgRoom", chars:[{id:"lizette",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"lizette", text:"자, 그럼 죽을 테이블로...", emotion:"default" },
            { speaker:"narrator", text:"리제트가 쟁반을 들고 다가오던 그 순간—" },
            { speaker:"lizette", text:"앗...!", emotion:"sad" },
            { speaker:"narrator", text:"쨍그랑!", effect:"shake", sfx:"surprise" },
            { speaker:"narrator", text:"문턱에 걸린 리제트가 중심을 잃었다." },
            { speaker:"narrator", text:"쟁반이 기울고, 그릇이 떨어지고, 뜨거운 죽이 바닥에—" },
            { speaker:"lizette", text:"아...! 아아...!", emotion:"sad", effect:"shake" },
            { speaker:"narrator", text:"리제트가 바닥에 주저앉았다." },
            { speaker:"narrator", text:"깨진 그릇 조각들 사이에서, 그녀의 손이 덜덜 떨리고 있다." },
            { speaker:"lizette", text:"죄, 죄송해요 도련님...!", emotion:"sad" },
            { speaker:"lizette", text:"새벽부터 준비한 건데... 저, 정말...", emotion:"sad", effect:"shrink" },
            { speaker:"narrator", text:"리제트의 눈가가 서서히  젖어들기 시작한다." },
            { speaker:"narrator", text:"...어떻게 하지." },
        ], choices:[
            { text:"괜찮아? 다친 데 없어?", next:"1-3a", affection:{lizette:+7} },
            { text:"(말없이 옆에 앉아 깨진 그릇 조각들을 줍는다.)", next:"1-3b", affection:{lizette:+5} },
            { text:"울지 마. 죽은 또 쑤면 되잖아.", next:"1-3c", affection:{lizette:+0} },
            { text:"...하아. 조심 좀 하지.", next:"1-3d", affection:{lizette:-5} }
        ]},

    // ─── 선택지 2 분기 ───
        { id:"1-3a", bgm:"romantic", bg:"bgRoom", chars:[{id:"lizette",pos:"center",emotion:"sad"}], dialogs:[
            { speaker:"you", text:"리제트, 손 봐봐. 다친 데 없어?" },
            { speaker:"narrator", text:"파편들 사이에 웅크린 리제트에게 다가갔다." },
            { speaker:"lizette", text:"저, 저는 괜찮아요...! 도련님이야말로...!", emotion:"sad" },
            { speaker:"you", text:"나한테 안 튀었어. 근데 너 손—" },
            { speaker:"narrator", text:"리제트의 손바닥에 작은 상처가 나 있었다." },
            { speaker:"narrator", text:"파편에 베인 모양이다." },
            { speaker:"you", text:"...피나잖아." },
            { speaker:"lizette", text:"이, 이 정도는 괜찮아요! 정말로!", emotion:"sad" },
            { speaker:"narrator", text:"괜찮지 않은 얼굴로 괜찮다고 말하고 있다." },
            { speaker:"narrator", text:"...참, 변한 게 없어." },
        ], next:"1-4"},

        { id:"1-3b", bgm:"romantic", bg:"bgRoom", chars:[{id:"lizette",pos:"center",emotion:"sad"}], dialogs:[
            { speaker:"narrator", text:"말없이 리제트 옆에 쪼그려 앉았다." },
            { speaker:"lizette", text:"도, 도련님?! 뭐하세요?!", emotion:"sad", effect:"shake" },
            { speaker:"narrator", text:"대답 대신, 바닥의 파편을 주워 담기 시작했다." },
            { speaker:"lizette", text:"안 돼요! 다치시면...!", emotion:"sad" },
            { speaker:"you", text:"...같이 치우면 빨리 끝나잖아." },
            { speaker:"lizette", text:"............", emotion:"sad", effect:"whisper" },
            { speaker:"narrator", text:"리제트가 고개를 숙였다." },
            { speaker:"narrator", text:"뭔가 중얼거리는 것 같은데... 안 들린다." },
            { speaker:"lizette", text:"...감사해요.", emotion:"happy", effect:"whisper" },
            { speaker:"narrator", text:"겨우 들릴 듯 말 듯한 작은 목소리였다." },
        ], next:"1-4"},

        { id:"1-3c", bg:"bgRoom", chars:[{id:"lizette",pos:"center",emotion:"sad"}], dialogs:[
            { speaker:"you", text:"울지 마. 죽은 또 쑤면 되잖아." },
            { speaker:"lizette", text:"하, 하지만...!", emotion:"sad" },
            { speaker:"you", text:"그러니까 일단 울음부터 멈춰." },
            { speaker:"narrator", text:"손등으로 리제트의 눈가를 툭 건드렸다." },
            { speaker:"lizette", text:"...!", emotion:"default" },
            { speaker:"you", text:"아까 밤새 준비했다며. 피곤할 텐데 울면 더 지쳐." },
            { speaker:"lizette", text:"도련님...", emotion:"sad" },
            { speaker:"narrator", text:"리제트가 손으로 눈을 비볐다." },
            { speaker:"narrator", text:"울음은 멈췄지만, 아직 표정이 안 좋다." },
            { speaker:"you", text:"...대신 점심은 기대할게." },
            { speaker:"lizette", text:"......!", emotion:"happy", effect:"pulse" },
        ], next:"1-4"},

        { id:"1-3d", bg:"bgRoom", chars:[{id:"lizette",pos:"center",emotion:"sad"}], dialogs:[
            { speaker:"you", text:"...하아. 조심 좀 하지.", effect:"whisper" },
            { speaker:"lizette", text:"...죄송해요.", emotion:"sad", effect:"shrink" },
            { speaker:"narrator", text:"리제트가 고개를 푹 숙였다." },
            { speaker:"narrator", text:"...말이 좀 심했나." },
            { speaker:"you", text:"......그래도 다친 데 없어?", effect:"whisper" },
            { speaker:"lizette", text:"...네. 괜찮아요.", emotion:"sad" },
            { speaker:"narrator", text:"하나도 안 괜찮아보인다." },
        ], next:"1-4"},

        { id:"1-4", bgm:"romantic", bg:"bgRoom", chars:[{id:"lizette",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"narrator", text:"파편을 치우고, 리제트의 손을 살폈다." },
            { speaker:"narrator", text:"다행히 깊은 상처는 아니었다." },
            { speaker:"you", text:"약 가져올게. 여기 앉아 있어." },
            { speaker:"lizette", text:"그, 그 정도는 제가...!", emotion:"default" },
            { speaker:"you", text:"가만히 있어. 내가 할게." },
            { speaker:"lizette", text:"......네.", emotion:"default" },
            { speaker:"narrator", text:"서랍에서 연고와 붕대를 꺼내 리제트의 손을 잡고 조심스럽게 약을 발랐다." },
        ], next:"1-5"},

        { id:"1-5", bgm:"peaceful", bg:"bgGarden", chars:[], dialogs:[
            { speaker:"narrator", text:"그녀의 손을 붕대로 감으며, 문득 예전 일이 떠올랐다.", effect:"float" },
            { speaker:"narrator", text:"—10년 전." },
            { speaker:"narrator", text:"어머니가 돌아가신 직후였다." },
        ]},

        { id:"1-5b", bg:"bgGarden", chars:[{id:"lizette",pos:"center",emotion:"sad"}], dialogs:[
            { speaker:"narrator", text:"그때 나는 8살, 리제트는 7살이었다." },
            { speaker:"narrator", text:"장례식에 본가 사람은 아무도 오지 않았다." },
            { speaker:"narrator", text:"'사생아의 어미'를 애도할 이유가 없다고 했다." },
            { speaker:"lizette", text:"도련님...", emotion:"sad", effect:"small" },
            { speaker:"narrator", text:"리제트가 내 옆에 서 있었다." },
            { speaker:"narrator", text:"검은 옷을 입은, 작은 소녀." },
            { speaker:"lizette", text:"...울어도 돼요.", emotion:"sad" },
            { speaker:"you", text:"안 울어." },
            { speaker:"lizette", text:"......", emotion:"sad" },
        ]},

        { id:"1-5c", bg:"bgGarden", chars:[{id:"lizette",pos:"center",emotion:"sad"}], dialogs:[
            { speaker:"narrator", text:"그때, 리제트가 내 손을 잡았다." },
            { speaker:"narrator", text:"작고, 따뜻한 손이었다." },
            { speaker:"lizette", text:"저는... 안 가요.", emotion:"sad" },
            { speaker:"lizette", text:"다른 사람들은 다 가도, 저는 도련님 곁에 있을게요.", emotion:"sad" },
            { speaker:"lizette", text:"...약속해요.", emotion:"default" },
            { speaker:"narrator", text:"그날 밤, 나는 혼자 펑펑 울었다." },
            { speaker:"narrator", text:"리제트는 문 밖에서 밤새 기다렸다고, 나중에 들었다." },
        ], choices:[
            { text:"(조용히 리제트의 손을 꼭 잡는다.)", next:"1-5d", affection:{lizette:+10}},
        ]},

        { id:"1-5d", bgm:"romantic", bg:"bgRoom", chars:[{id:"lizette",pos:"center",emotion:"happy"}], dialogs:[
            { speaker:"narrator", text:"—현재." },
            { speaker:"narrator", text:"말없이, 붕대를 감은 리제트의 손을 다시 한 번 잡았다." },
            { speaker:"lizette", text:"도, 도련님...?", emotion:"happy", effect:"pulse" },
            { speaker:"narrator", text:"10년 전보다 손이 커졌지만," },
            { speaker:"narrator", text:"이 따뜻함은 변하지 않았다." },
            { speaker:"you", text:"......고마워. 항상." },
            { speaker:"lizette", text:"......!!", emotion:"happy" },
            { speaker:"narrator", text:"리제트의 얼굴이, 귀까지 빨개졌다." },
            { speaker:"narrator", text:"리제트의 손이 떨리다가 이내 내 손을 더 꼭 쥐었다." },
            { speaker:"narrator", text:"...나도 왜 이러는지 모르겠지만, 나쁘지 않아서 그냥 두기로 했다." },
        ], next:"1-6"},

        { id:"1-6", bgm:"tense", bg:"bgRoom", chars:[{id:"lizette",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"narrator", text:"그때." },
            { speaker:"narrator", text:"쿵쿵쿵—!", effect:"shake" },
            { speaker:"narrator", text:"거친 노크 소리가 문을 때렸다." },
            { speaker:"lizette", text:"...!", emotion:"default" },
            { speaker:"narrator", text:"이 별채를 찾아오는 사람은 리제트 외에 거의 없는데." },
        ]},

        { id:"1-6b", bg:"bgRoom", chars:[], dialogs:[
            { speaker:"narrator", text:"문을 열자, 본가의 집사가 서 있었다." },
            { speaker:"narrator", text:"평소에는 나를 거들떠보지도 않던 자가." },
            { speaker:"집사", text:"카이른 님." },
            { speaker:"narrator", text:"...님? 내가 잘못 들었나 싶을정도로 당황스러운 호칭이 나왔다.", effect:"grow" },
        ]},

        { id:"1-6c", bg:"bgRoom", chars:[], dialogs:[
            { speaker:"집사", text:"본가로 오십시오. 후작님께서 부르십니다." },
            { speaker:"you", text:"...후작님이?" },
            { speaker:"narrator", text:"이상하다. 후작은 내 존재 자체를 부정하던 사람인데." },
            { speaker:"집사", text:"그리고... 전해드릴 소식이 있습니다." },
            { speaker:"narrator", text:"집사가 잠시 말을 멈췄다." },
            { speaker:"narrator", text:"다음 말이, 내 인생을 완전히 뒤바꿔놓을 줄은 몰랐다." },
        ]},

        { id:"1-6d", bg:"bgRoom", chars:[], dialogs:[
            { speaker:"집사", text:"황제 폐하께서... 붕어하셨습니다.", effect:"grow" },
            { speaker:"you", text:"......뭐?" },
            { speaker:"narrator", text:"황제가 죽었다고?" },
            { speaker:"narrator", text:"그게 나랑 무슨 상관이—" },
            { speaker:"집사", text:"그리고 카이른 님은..." },
            { speaker:"narrator", text:"집사가 고개를 숙였다." },
            { speaker:"집사", text:"돌아가신 황제 폐하의 숨겨진 혈육이십니다.", effect:"big" },
        ]},

        { id:"1-6e", bg:"bgRoom", chars:[{id:"lizette",pos:"center",emotion:"sad"}], dialogs:[
            { speaker:"you", text:"......뭐라고?", effect:"shake" },
            { speaker:"narrator", text:"그 '고귀한 분'이... 황제였다고?" },
            { speaker:"narrator", text:"그럼 나는..." },
            { speaker:"lizette", text:"도, 도련님...?!", emotion:"sad", effect:"small" },
            { speaker:"narrator", text:"리제트의 목소리가 멀게 느껴졌다." },
            { speaker:"narrator", text:"머릿속이 하얘진다." },
        ]},

        { id:"1-6f", bg:"bgRoom", chars:[], dialogs:[
            { speaker:"집사", text:"현재 황위를 이을 후보는 셋입니다." },
            { speaker:"집사", text:"제1황녀 셀레네, 제2황녀 아델린, 그리고..." },
            { speaker:"집사", text:"제1황자, 카이른 님." },
            { speaker:"집사", text:"황궁에서 계승자 선정이 진행됩니다." },
            { speaker:"집사", text:"내일 아침, 황궁으로 출발하셔야 합니다." },
            { speaker:"narrator", text:"집사가 물러났다." },
            { speaker:"narrator", text:"황궁." },
            { speaker:"narrator", text:"황위 계승." },
            { speaker:"narrator", text:"......미친 거 아냐, 이거?" },
        ], choices:[
            { text:"잠깐 정리할 시간이 필요해.", next:"1-6g", affection:{lizette:+2} },
            { text:"...리제트.", next:"1-6h", affection:{lizette:+5} },
            { text:"(아무 말 없이 멍하니 서 있는다)", next:"1-6i", affection:{lizette:+3} }
        ]},

    // ─── 선택지 5 분기 ───
        { id:"1-6g", bg:"bgRoom", chars:[{id:"lizette",pos:"center",emotion:"sad"}], dialogs:[
            { speaker:"you", text:"...잠깐. 정리가 필요해." },
            { speaker:"narrator", text:"심호흡을 했다." },
            { speaker:"you", text:"내 아버지가 황제였고, 황제가 죽어서 내가 계승 후보라..." },
            { speaker:"you", text:"그게 말이 돼?" },
            { speaker:"lizette", text:"도련님...", emotion:"sad" },
            { speaker:"narrator", text:"리제트가 걱정스러운 눈으로 나를 바라보고 있다." },
            { speaker:"you", text:"...일단 본가로 가보자. 더 알아봐야 해." },
        ], next:"1-7"},

        { id:"1-6h", bg:"bgRoom", chars:[{id:"lizette",pos:"center",emotion:"sad"}], dialogs:[
            { speaker:"you", text:"......리제트." },
            { speaker:"lizette", text:"네, 도련님..!", emotion:"sad" },
            { speaker:"narrator", text:"리제트가 달려왔다." },
            { speaker:"narrator", text:"어느새 내 손을 잡고 있었다." },
            { speaker:"lizette", text:"괜찮으세요? 갑작스럽게 이런 말을 들으시면...", emotion:"sad" },
            { speaker:"you", text:"......솔직히, 모르겠어." },
            { speaker:"you", text:"근데 네가 있으니까, 좀 나은 것 같아." },
            { speaker:"lizette", text:"도련님...", emotion:"happy" },
            { speaker:"narrator", text:"리제트가 내 손을 꽉 쥐었다." },
        ], next:"1-7"},

        { id:"1-6i", bg:"bgRoom", chars:[{id:"lizette",pos:"center",emotion:"sad"}], dialogs:[
            { speaker:"narrator", text:"아무 말도 나오지 않았다." },
            { speaker:"narrator", text:"그저 멍하니 서 있을 뿐이었다." },
            { speaker:"lizette", text:"도련님...!", emotion:"sad" },
            { speaker:"narrator", text:"리제트가 내 앞으로 다가왔다." },
            { speaker:"lizette", text:"저, 저 여기 있어요. 곁에 있을게요.", emotion:"sad" },
            { speaker:"narrator", text:"그 말에, 조금 정신이 돌아왔다." },
            { speaker:"you", text:"...응. 고마워." },
        ], next:"1-7"},

        { id:"1-7", bgm:"romantic", bg:"bgNight", chars:[{id:"lizette",pos:"center",emotion:"sad"}], dialogs:[
            { speaker:"narrator", text:"그날 밤." },
            { speaker:"narrator", text:"내일 아침 출발이니, 짐을 쌌어야 했는데." },
            { speaker:"narrator", text:"...딱히 챙길 것도 없었다." },
            { speaker:"narrator", text:"똑똑." },
            { speaker:"lizette", text:"도련님... 안 주무세요?", emotion:"sad" },
            { speaker:"narrator", text:"리제트가 문 앞에 서 있었다." },
            { speaker:"you", text:"...너야말로." },
            { speaker:"lizette", text:"저는... 걱정돼서요.", emotion:"sad" },
        ]},

        { id:"1-7b", bg:"bgNight", chars:[{id:"lizette",pos:"center",emotion:"sad"}], dialogs:[
            { speaker:"lizette", text:"황궁은... 무서운 곳이라고 들었어요.", emotion:"sad" },
            { speaker:"lizette", text:"권력 싸움, 암투, 독살...", emotion:"sad" },
            { speaker:"lizette", text:"도련님 같은 분이 가시면...", emotion:"sad", effect:"shrink" },
            { speaker:"you", text:"나?" },
            { speaker:"lizette", text:"순수하시고, 착하시고...", emotion:"sad" },
            { speaker:"you", text:"...그건 칭찬인지 걱정인지 모르겠네." },
            { speaker:"lizette", text:"걱정이에요...!", emotion:"sad", effect:"shake" },
        ]}, 

        { id:"1-7c", bg:"bgNight", chars:[{id:"lizette",pos:"center",emotion:"sad"}], dialogs:[
            { speaker:"lizette", text:"도련님은... 사람을 너무 쉽게 믿으세요.", emotion:"sad" },
            { speaker:"lizette", text:"황궁에서 그러시면 안 돼요.", emotion:"sad" },
            { speaker:"you", text:"...알아." },
            { speaker:"lizette", text:"정말요? 정말 아세요?", emotion:"sad" },
            { speaker:"narrator", text:"리제트의 눈이 촉촉해졌다." },
            { speaker:"lizette", text:"도련님이 다치시면... 저... 저는...", emotion:"sad", effect:"shrink" },
        ], choices:[
            { text:"울지 마. 괜찮을 거야.", next:"1-7d", affection:{lizette:+3} },
            { text:"..나랑 같이 가자.", next:"1-7e", affection:{lizette:+8} },
            { text:"네가 걱정해주니까, 더 조심할게.", next:"1-7f", affection:{lizette:+5} }
        ]},

    // ─── 선택지 6 분기 ───
        { id:"1-7d", bg:"bgNight", chars:[{id:"lizette",pos:"center",emotion:"sad"}], dialogs:[
            { speaker:"you", text:"울지 마. 괜찮을 거야." },
            { speaker:"lizette", text:"......", emotion:"sad" },
            { speaker:"you", text:"18년 동안 여기서 버텼는데, 황궁이라고 못 버틸까." },
            { speaker:"lizette", text:"그래도...", emotion:"sad" },
            { speaker:"you", text:"그리고..." },
            { speaker:"you", text:"빨리 끝내고 돌아올 테니까." },
            { speaker:"lizette", text:"...정말요?", emotion:"default" },
            { speaker:"you", text:"응. 약속." },
            { speaker:"narrator", text:"리제트가 고개를 끄덕였다." },
            { speaker:"narrator", text:"아직 불안해 보이지만, 조금은 안심한 것 같다." },
        ], next:"1-8"},

        { id:"1-7e", bg:"bgNight", chars:[{id:"lizette",pos:"center",emotion:"happy"}], dialogs:[
            { speaker:"you", text:"같이 가자." },
            { speaker:"lizette", text:"...네?", emotion:"happy", effect:"grow" },
            { speaker:"you", text:"황궁에서도 하녀는 필요할 거 아냐." },
            { speaker:"you", text:"낯선 사람보다 네가 낫지." },
            { speaker:"lizette", text:"저, 저를... 데려가시겠다고요?", emotion:"happy", effect:"pulse" },
            { speaker:"you", text:"싫으면 말고." },
            { speaker:"lizette", text:"싫지 않아요!!", emotion:"happy", effect:"shake" },
            { speaker:"narrator", text:"리제트가 두 손을 꽉 쥐었다." },
            { speaker:"lizette", text:"가, 갈게요...! 어디든 따라갈게요...!", emotion:"happy" },
            { speaker:"narrator", text:"...왠지 뭔가 불안한 기분이 드는 건 기분 탓이겠지." },
        ], next:"1-8a"},

        { id:"1-7f", bg:"bgNight", chars:[{id:"lizette",pos:"center",emotion:"happy"}], dialogs:[
            { speaker:"you", text:"네가 걱정해주니까, 더 조심할게." },
            { speaker:"lizette", text:"......!", emotion:"happy" },
            { speaker:"you", text:"안심시켜줄게. 내가 무사하다는 거." },
            { speaker:"lizette", text:"도련님...", emotion:"happy", effect:"pulse" },
            { speaker:"you", text:"그러니까 울지 마. 눈 붓겠다." },
            { speaker:"narrator", text:"리제트가 손으로 눈가를 닦았다." },
            { speaker:"lizette", text:"...네. 안 울게요.", emotion:"happy" },
            { speaker:"lizette", text:"도련님이 돌아오실 때까지, 꼭...", emotion:"happy" },
        ], next:"1-8"},

        { id:"1-8", bg:"bgNight", chars:[{id:"lizette",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"lizette", text:"저, 잠깐만요!", emotion:"default" },
            { speaker:"narrator", text:"리제트가 결연한 표정으로 날 쳐다봤다." },
            { speaker:"lizette", text:"저, 저도 따라갈래요..!", emotion:"default" },
            { speaker:"you", text:"...뭐?" },
            { speaker:"lizette", text:"저.. 제, 제가 도련님 곁에서 지켜드릴게요..!", emotion:"default" },
            { speaker:"lizette", text:"제, 제발 따라가게 해주세요..!", emotion:"sad" },
        ], choices:[
            { text:"그래, 따라와도 좋아.", next:"1-8a", affection:{lizette:+10} },
            { text:"너가 따라온다면 나도 안심이지..!", next:"1-8b", affection:{lizette:+15} },
        ]},

    // ─── 선택지 7 분기 ───
        { id:"1-8a", bg:"bgNight", chars:[{id:"lizette",pos:"center",emotion:"happy"}], dialogs:[
            { speaker:"you", text:"그래, 따라와도 좋아" },
            { speaker:"narrator", text:"리제트를 바라보며 웃어보였다." },
            { speaker:"lizette", text:"......!", emotion:"happy", effect:"pulse" },
            { speaker:"narrator", text:"리제트의 얼굴이 환해졌다." },
            { speaker:"lizette", text:"감사해요... 정말로...", emotion:"happy" },
        ], next:"1-9"},

        { id:"1-8b", bg:"bgNight", chars:[{id:"lizette",pos:"center",emotion:"happy"}], dialogs:[
            { speaker:"you", text:"너가 따라온다면 나도 안심이지..!" },
            { speaker:"lizette", text:"저.. 정말요..?", emotion:"happy" },
            { speaker:"narrator", text:"리제트의 눈에 행복함이 가득해보였다." },
            { speaker:"narrator", text:"새어나오는 웃음을 참으려는 모습이 눈앞에 들어온다." },
            { speaker:"you", text:"웃어도 돼." },
            { speaker:"narrator", text:"리제트의 얼굴이 확 붉어진다." },
            { speaker:"lizette", text:"...?!", emotion:"happy", effect:"shake" },
            { speaker:"narrator", text:"당황하던 모습은 잠시, 리제트는 환하게 웃어보인다." },
            { speaker:"lizette", text:"고, 고마워요 도련님!", emotion:"happy", effect:"small" },
        ], next:"1-9"},

    
        { id:"1-9", bgm:"peaceful", bg:"bgGarden", chars:[{id:"lizette",pos:"center",emotion:"default"}], dialogs:[
            { speaker:"narrator", text:"다음 날 아침." },
            { speaker:"narrator", text:"별채 앞에 마차 한 대가 서 있었다." },
            { speaker:"narrator", text:"...드디어 이 곳을 떠나는구나." },
            { speaker:"narrator", text:"18년 동안 갇혀 살던 곳." },
            { speaker:"narrator", text:"증오하지만, 동시에 그리워지기도 할 것 같은 곳." },
        ], next:"1-10" },

        { id:"1-10", bg:"bgGarden", chars:[{id:"lizette",pos:"center",emotion:"happy"}], dialogs:[
            { speaker:"narrator", text:"마차에 올랐다." },
            { speaker:"narrator", text:"옆에는 리제트가 앉아 있다." },
            { speaker:"narrator", text:"불안하지만... 혼자가 아니라서 다행이다." },
            { speaker:"lizette", text:"도련님, 긴장되세요?", emotion:"default" },
            { speaker:"you", text:"...조금?" },
            { speaker:"lizette", text:"괜찮아요. 제가 곁에 있잖아요.", emotion:"happy" },
            { speaker:"narrator", text:"리제트가 조심스럽게 내 손을 잡았다." },
            { speaker:"narrator", text:"10년 전과 같은, 따뜻한 손이었다." },
            { speaker:"narrator", text:"마차가 천천히 움직이기 시작했다." },
            { speaker:"narrator", text:"황궁으로." },
            { speaker:"narrator", text:"미지의 세계로." },
            { speaker:"narrator", text:"...내 운명이 기다리는 곳으로." },
        ], next:"chapter2"},
    ],
};

