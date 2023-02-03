/*!
 * Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
//
// Scripts
//
function getrand(x) {
    return Math.floor(Math.random() * x) + 1;
}
document.querySelector("#hr").src = `./assets/img/hr${getrand(2)}.webp`;

window.addEventListener("DOMContentLoaded", (event) => {
    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector("#sideNav");
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: "#sideNav",
            offset: 74,
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(document.querySelectorAll("#navbarResponsive .nav-link"));
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener("click", () => {
            if (window.getComputedStyle(navbarToggler).display !== "none") {
                navbarToggler.click();
            }
        });
    });
});

let about = document.querySelector("#about");
console.log(about.offsetHeight);
let nav = document.querySelector("#sideNav");
let content = document.querySelector("body");
let profile = document.querySelector("#profile-img");
window.onscroll = function () {
    if (window.scrollY > about.offsetHeight - about.offsetHeight * 0.3) {
        nav.classList.add("extend");
        content.classList.add("extend");
        profile.classList.add("extend");
    } else {
        nav.classList.remove("extend");
        content.classList.remove("extend");
        profile.classList.remove("extend");
    }
};

let data = {
    plan_show: false,
    plan_idx: 0,
    students: [
        [
            {
                year: 2022,
                topic: "教育機器人輔助國小音樂教學對學習成效與學習專注力之影響",
                name: "陳柏儒",
            },
            {
                year: 2022,
                topic: "互動情境機器人教學在程式設計之學習應用與評估",
                name: "許富量",
            },
            {
                year: 2022,
                topic: "故事情境導向機器人輔助無線網路教學學習成效與學習動機之研究",
                name: "李昕庭",
            },
            {
                year: 2022,
                topic: "混合實境應用於歷史古蹟導覽設計與評估",
                name: "林哲均",
            },
            {
                year: 2022,
                topic: "情境反思導向書法技能學習成效之研究",
                name: "陳媜君",
            },
            {
                year: 2021,
                topic: "公立幼兒園教師資訊科技融入教學信念之情形探討",
                name: "游琍雯",
            },
            {
                year: 2021,
                topic: "運用Quizlet合作學習策略對偏鄉學校五年級英語字彙教學：學習成效及學習焦慮分析",
                name: "陳怡如",
            },
            {
                year: 2021,
                topic: "應用多媒體互動教材在國小資源班識字困難學生的教學研究",
                name: "林輔庭",
            },
            {
                year: 2021,
                topic: "ARCS學習動機模式教學法對電腦技能學習遷移成效影響之探討",
                name: "詹元慈",
            },
            {
                year: 2021,
                topic: "即時反饋策略在國小成語教學對高低學習能力學習成效和學習動機之影響",
                name: "賴眉潔",
            },
            {
                year: 2020,
                topic: "行動3D擴增實境學習系統應用於國小幾何數學之研究",
                name: "吳昱宣",
            },
            {
                year: 2020,
                topic: "故事化情境教學模式在低學習能力學童數學學習扶助教學之評估",
                name: "黃志偉",
            },
            {
                year: 2020,
                topic: "翻轉學習模式應用電腦軟體技能導向之學習成效評估",
                name: "黃禹智",
            },
            {
                year: 2020,
                topic: "不同學習風格者運用桌上遊戲融入教學對運算思維學習成效之研究",
                name: "劉翰錡",
            },
            {
                year: 2020,
                topic: "情境英語教學應用在國小學童英語學習評估之研究",
                name: "吳尚洺",
            },
            {
                year: 2020,
                topic: "應用教育機器人於博物館情境學習分析與評估",
                name: "李冠儒",
            },
        ],
        [
            {
                year: 2019,
                topic: "運用認知風格探討虛擬實境英語字彙教學學習成效與學習動機",
                name: "張雅雯",
            },
            {
                year: 2019,
                topic: "應用智慧眼鏡於科博館英語學習之使用意圖評估與分析",
                name: "蕭有彣",
            },
            {
                year: 2019,
                topic: "應用智慧眼鏡於科博館英語情境學習對不同學習風格者學習成效之研究",
                name: "林姿君",
            },
            {
                year: 2019,
                topic: "情境式遊戲學習運用在中老齡口腔保健教學之成效",
                name: "張崇毅",
            },
            {
                year: 2019,
                topic: "問題導向式學習應用在國小程式學習對學生運算思維能力提升成效之研究",
                name: "蔡佩勳",
            },
            {
                year: 2019,
                topic: "機器人應用在國小學童英語教學成效、學習參與度與學習自信心之研究",
                name: "許祐禎",
            },
            {
                year: 2018,
                topic: "即時適性虛擬助教設計與評估",
                name: "施育廷",
            },
            {
                year: 2018,
                topic: "即時適性英語字彙遊戲學習教學設計與評估",
                name: "張安緹",
            },
            {
                year: 2018,
                topic: "情境式英語學習系統評估與使用接受度分析",
                name: "曾珮涵",
            },
            {
                year: 2018,
                topic: "英語情境遊戲學習桌遊設計與學習成效之研究",
                name: "楊蕓鄉",
            },
            {
                year: 2017,
                topic: "應用擴增實境技術於博物館英語字彙學習之研究",
                name: "紀亭宇",
            },
            {
                year: 2016,
                topic: "認知風格與結藝技能學習成效之研究",
                name: "林楷齡",
            },
            {
                year: 2016,
                topic: "體感式武術動作學習系統設計與評估",
                name: "周育民",
            },
            {
                year: 2016,
                topic: "大規模網路開放式課程教學方式對不同認知風格學習者注意力與學習成效之研究",
                name: "張容容",
            },
            {
                year: 2015,
                topic: "情感式英語扎根補救教學家教系統對 學生之學習成效與學習動機之研究",
                name: "盧彥伶",
            },
            {
                year: 2015,
                topic: "運用平板電腦教學對於國小學童音樂節奏學習成就之研究",
                name: "張言瑋",
            },
            {
                year: 2015,
                topic: "情境反思學習模式對於國小五年級學生生活科技的學習成效與行為意圖之影響",
                name: "陳勁妏",
            },
            {
                year: 2015,
                topic: "影片式體感學習系統對網路課程學習成效評估之研究",
                name: "張瀚允",
            }],
            [
            {
                year: 2014,
                topic: "專題導向教學平台設計與學習成效之研究",
                name: "陳俊宏",
            },
            {
                year: 2014,
                topic: "情感式家教系統對於國小四年級社會學習領域學習成效、學習動機與認知負荷之影響",
                name: "廖羚君",
            },
            {
                year: 2014,
                topic: "節慶式遊戲學習ＡＰＰ對於國小學童英語學習成效之研究",
                name: "鄭嘉樺",
            },
            {
                year: 2014,
                topic: "情境感知學習環境下華語文學習成效之研究",
                name: "邱筱涵",
            },
            {
                year: 2014,
                topic: "利用行動數位內容教學於協助教師幼兒情境教學接受度研究",
                name: "林秋全",
            },
            {
                year: 2014,
                topic: "3D多媒體學習系統輔助摺紙教學對國小學童數學幾何概念學習成效之研究",
                name: "林佳保",
            },
            {
                year: 2014,
                topic: "Scratch圖像導引式教學法對認知負荷與學習成效影響之探討",
                name: "戴琬諭",
            },
            {
                year: 2014,
                topic: "無所不在專題學習應用於國小自然科校園植物辨識學習成效之研究",
                name: "周冠廷",
            },
            {
                year: 2014,
                topic: "雲端化歷程記錄之IRS實作與設計",
                name: "劉睿昕",
            },
            {
                year: 2013,
                topic: "平板電子書註記拍照應用於提升國小英語聽說能力之研究",
                name: "李靜宜",
            },
            {
                year: 2013,
                topic: "探討電子書對國小學童進行摺紙活動之學習成效",
                name: "朱玟蓉",
            },
            {
                year: 2013,
                topic: "數位遊戲式學習在城鄉國小數學加減法學習成效之研究",
                name: "簡晨卉",
            },
            {
                year: 2013,
                topic: "圖像表徵式學習策略應用於城鄉國小四年級數學學習成效之研究",
                name: "廖國志",
            },
            {
                year: 2013,
                topic: "影片註記系統應用於國小六年級英語科之學習成效探究",
                name: "張元隆",
            },
            {
                year: 2013,
                topic: "臺中市國小教師使用數位學習進修接受因素之分析",
                name: "陳麗年",
            },
            {
                year: 2013,
                topic: "行動拼圖式合作學習法應用於國小自然與生活科技課程之研究",
                name: "藍麗敏",
            },
            {
                year: 2012,
                topic: "人臉偵測應用於學習專注力與群組參與度之分析",
                name: "龔喬琳",
            },
            {
                year: 2012,
                topic: "基於Web2.0的道教互動學習社群建置與影響因素之研究",
                name: "張建智",
            },
            {
                year: 2012,
                topic: "臺灣大學生多元智能調查與量表發展之研究",
                name: "施玫君",
            },
            {
                year: 2012,
                topic: "應用於美術館之導覽學習社群網站設計",
                name: "黃雅菁",
            },
            {
                year: 2012,
                topic: "圖像表徵式動畫教材對國小四年級學童數學焦慮、問題解決能力與學習成效之影響",
                name: "李昱昀",
            },
            {
                year: 2012,
                topic: "國小視覺藝術創造力影響因素之量表發展",
                name: "林敬惠",
            },
            {
                year: 2011,
                topic: "合作式行動電子書閱讀學習系統之設計與評估",
                name: "張育銜",
            },
            {
                year: 2011,
                topic: "應用Android行動設備於國小數學科補救教學之系統設計",
                name: "許家彰",
            },
            {
                year: 2011,
                topic: "無所不在中高齡者旅遊英語學習環境之設計與評估",
                name: "吳佳芸",
            },
            {
                year: 2011,
                topic: "情境式遊戲學習應用在國小學童加減法學習成效之研究",
                name: "楊佩真",
            },
            {
                year: 2011,
                topic: "Wiimote電子白板應用於國小教學模式之建置與評估",
                name: "林家賢",
            },
            {
                year: 2011,
                topic: "閱讀部落格平台建置與評估",
                name: "粘碧慈",
            },
            {
                year: 2011,
                topic: "多媒體情境式動態網站佈景主題學習平台在國小英語學習之應用",
                name: "吳兆全",
            },
            {
                year: 2010,
                topic: "教師協同教學運用Moodle平台進行網頁主題探究學習之研究",
                name: "賴春旭",
            },
            {
                year: 2010,
                topic: "電腦硬體裝修對於高職資訊科學生問題解決能力學習成效之研究",
                name: "吳連益",
            },
            {
                year: 2010,
                topic: "主題式遊戲探索於博物館學習上之應用",
                name: "張祐瑜",
            },
            {
                year: 2010,
                topic: "電子師徒制在合作學習環境中教學成效之研究—以VB程式設計課程為例",
                name: "紀榮村",
            },
            {
                year: 2010,
                topic: "一個以金鑰管理技術為基礎的數位著作權認證系統之研究",
                name: "黄筱芃",
            },
            {
                year: 2010,
                topic: "悅趣化數位學習對國小教師使用行為意向之探討",
                name: "蘇嘉玲",
            },
            {
                year: 2010,
                topic: "運用社群網路在數位遊戲學習設計",
                name: "薛慧婷",
            },
            {
                year: 2010,
                topic: "應用於博物館之情境式數位訓練學習系統",
                name: "陳貴未",
            },
            {
                year: 2010,
                topic: "針對公教人員家庭使用多媒體隨選視訊系統之認知與使用意圖",
                name: "葉倉欣",
            },
            {
                year: 2010,
                topic: "以多元智慧理論探索智慧型推薦學習系統之學習成效",
                name: "張玉璇",
            },
            {
                year: 2010,
                topic: "行動基金知識學習與導覽體驗教育平台之研究",
                name: "陳俊雄",
            },
            {
                year: 2010,
                topic: "合作學習應用於數位繪圖課程學習成效之研究",
                name: "王衍智",
            },
            {
                year: 2010,
                topic: "行動英語學習美食導覽系統之設計",
                name: "黃浚豪",
            },
            {
                year: 2010,
                topic: "運用微型部落格進行問題導向式教學之成效研究-以國中資訊倫理課程為例",
                name: "張世明",
            },
            {
                year: 2010,
                topic: "對於國小教師使用國民教育輔導團網站行為意圖之研究",
                name: "莊雅景",
            },
            {
                year: 2010,
                topic: "國民小學入口網站建置與學童家長使用滿意度之研究",
                name: "陳俊宏",
            },
            {
                year: 2010,
                topic: "本體論為基礎之教材分享系統建置與評估",
                name: "沈勝裕",
            },
            {
                year: 2010,
                topic: "以科技接受模式探討國中教師進修對數位學習系統接受因素之分析",
                name: "曾曉芬",
            },
            {
                year: 2010,
                topic: "網路管理教師社群網站建置與評估-以南投縣資訊交流網為例",
                name: "王登儀",
            },
            {
                year: 2010,
                topic: "以多元智能角度探討互動式電子白板對國小學童學習成效之研究",
                name: "江志浩",
            },
            {
                year: 2010,
                topic: "悅趣化數位學習應用於國小資訊教學成效之研究",
                name: "李誌偉",
            },
            {
                year: 2010,
                topic: "個別化學習導引系統建置與評估",
                name: "蕭世其",
            }],
            [
            {
                year: 2009,
                topic: "3G行動電話功能選單最佳化之研究",
                name: "陳乃滋",
            },
            {
                year: 2009,
                topic: "位置感知行動購物之促銷資訊服務系統",
                name: "魏妤庭",
            },
            {
                year: 2009,
                topic: "智慧型推薦學習服務系統之研究",
                name: "黃振綱",
            },
            {
                year: 2008,
                topic: "資訊科技應用於臺灣自然環境單元學習成效之研究",
                name: "李啟榮",
            },
            {
                year: 2008,
                topic: "以群集分析為基礎之數位內容學習平台建置與評估—以台中縣國小高年級電腦課程為例",
                name: "林克霖",
            },
            {
                year: 2007,
                topic: "資訊科技應用於國小國術教學學習成就之研究",
                name: "李岳勳",
            },
            {
                year: 2007,
                topic: "資訊融入教學對國小學童環境教育學習成效之研究",
                name: "黃妙珠",
            },
            {
                year: 2007,
                topic: "資訊科技融入國小五年級國語文教學學習效能之研究",
                name: "鄭如婷",
            },
            {
                year: 2007,
                topic: "資訊融入臺灣地理教學對國小學童學習成效之研究",
                name: "康綉惠",
            },
            {
                year: 2007,
                topic: "資訊融入音樂教學對直笛吹奏之效益",
                name: "吳明峰",
            },
            {
                year: 2007,
                topic: "資訊媒體融入社會領域鄉土教學學習成效之研究",
                name: "蘇美惠",
            },
            {
                year: 2007,
                topic: "國小教學資源之推薦服務應用",
                name: "葉芳瑜",
            },
            {
                year: 2007,
                topic: "國小高年級學童偶像崇拜與消費行為之研究",
                name: "羅玉英",
            },
            {
                year: 2007,
                topic: "國立大學圖書館館員資訊素養與工作滿意度關係之研究",
                name: "楊雲琴",
            },
            {
                year: 2007,
                topic: "互動式網路學習融入國小資訊教學之研究",
                name: "黃俊銘",
            },
            {
                year: 2006,
                topic: "導入知識管理概念於國中電腦課程學習成效之研究",
                name: "黃慧玲",
            },
            {
                year: 2006,
                topic: "國小教師對行動學習的認知、建置與運用之研究",
                name: "郭炳宏",
            },
            {
                year: 2006,
                topic: "國小學童家長網路遊戲認知與態度之研究",
                name: "張仁至",
            },
            {
                year: 2005,
                topic: "雲林縣國小教師資訊科技融入社會學習領域現況及需求調查研究",
                name: "鍾志清",
            },
        ],
    ],
    projects: [
        {
            title: "DEVIL DEFENCE",
            students: ["李映璇", "林楷倫", "王齡移", "黃彥彰"],
            year: 111,
            img: "/assets/img/projects/DEVIL DEFENCE.jpg",
            description: `一棵世界樹貫穿著人間、魔界、神界。正在受許多人追捕的魔王卻沒有容身之地，我們是否可以戰勝惡勢力，捍衛魔王呢?
            防止邪惡力量入侵 ❗︎ 保衛魔王令您欲罷不能 ❗︎`,
        },
        {
            title: "嗑藥山人一尋草求序",
            students: ["吳炫宗", "陳婉瑜", "梁瑜容"],
            year: 111,
            img: "/assets/img/projects/嗑藥山人.jpg",
            description: `網路讓我們的資料流通的更快了，資訊也因此更加透明與開放。
            可是在沒有網路的古時候，人們又是怎麼生活的呢？ 過去的藥學書籍，沒有深入實際進行調查研究，而是在書本上抄來抄去，最後越解釋越糊塗，且錯漏百出。 李時珍為了杜絕此情況再次發生，下定決心親身外出遊歷、實地考證，要撰寫新的草本書。 就讓我們一起跟著李時珍，開啟一段尋找草藥之旅吧！ 引人入勝的遊戲劇情`,
        },
        {
            title: "<越來越不南> RPG學習型App",
            students: ["林旻沛", "黃育昕"],
            year: 111,
            img: "/assets/img/projects/越來越不南.png",
            description: `B.B.等小精靈來自一顆缺乏能源的星球,他們想要在這個新的行星定居,但是必須學習當地的語言,才能溝通,請陪伴他們成為越來越不南星球的居民吧!
            *模擬日常生活的RPG手遊 + 輕鬆有趣學習語言
            *可愛的遊戲設計 + 推播通知
            *錯誤複習測驗 ->加深學習記憶力!
            *奇幻的世界觀 + 可愛又嚇人的小精靈 快來加入我們吧!`,
        },
        {
            title: "珍食力",
            students: ["彭如霈", "黃麟貴", "陳子涵"],
            year: 110,
            img: "/assets/img/projects/珍食力.png",
            description: `珍食力是以「掌握自我食量」為主的APP，透過篩選符合食量的餐點或店家、客製化食譜的食材，達到理性消費、預防剩食的目的。1.將你的拳頭換算成ml數，評估食量2.客製化食譜的食材份量，合理規劃每一餐3.店家餐點資訊與評論一目瞭然`,
        },
        {
            title: "關於__的自白",
            students: ["張巧琳", "林意帆"],
            year: 109,
            img: "/assets/img/projects/關於自白.jpg",
            description: `瓢蟲用鮮豔的色彩來警告天敵，
            而面對無奈且無趣的生活，她利用面具隔絕了外在及自己的內心。
            充滿虛假的現實讓人迷失自我，
            躁動的負面情緒急需一個宣洩的出口，擁抱希望成了繼續堅持的理由…
            關於____的自白，可以是任何被逃避的事物，
            原來，學會面對負面情緒前，要先學會面對真實的自己。
            ​
            本作是以Motion Graphic的風格，創作情感形象化的動畫作品。`,
        },
        {
            title: "ReExam , Therefore We Are.我試故我在",
            students: ["陳文楷", "李德恩"],
            year: 109,
            description: `「ReExam, Therefore we are.」體驗另一段青春，
            你所從未見過的可能性🙈🙉
            🙊
            是一款透過「指考」...😵😵😵
            為特殊題材進行的文字冒險遊戲📝📐📚
            
            從當時的展覽我們一同回味青春，
            並看到了兩位性格鮮明的角色👩🏻🙅🏻
            這次是否能夠帶領我們，
            抓住年少輕狂的尾巴呢？🎯🔞🔞`,
        },
    ],
    plans: [
        {
            title: "應用穿戴式科技開發情境感知與即時適性之EFL學習環境-子計畫四:在博物館環境應用穿戴科技開發情境感知即時適性EFL學習系統",
            title_en:
                "Using Wearable Technology to Develop a Context-Sensitive and Real-Time Adaptive System for EFL Learning in the Museum Environment",
            domain: "科學教育、資訊科學--軟體",
            abstract:
                "穿戴科技的資訊應用裝置逐已漸走入人類的日常生活，在數位學習的應用上 也應能發揮穿戴科技所帶來的優勢。博物館學習的研究豐富多元，許多研究應用 在科學知識的學習，然而在進行探索體驗的學習活動過程中，較缺乏情境感知英 語學習的應用。情境學習是要從真實互動的情境中，藉由實際行動獲取知識與技 能，學習者是在所處的情境中，透過對情境事物的互動與參與而學習屬於自己的 知識。適性學習在提供學習者切合其個別特質與需求的差異化學習，讓每個學生 都能成功的完成學習，也因此能從所有不同學習教材的來源中，幫助學習者在短 時間內獲得適合所需的學習教材。過去許多研究指出情境學習的重要性與適性學 習的必要性，但缺乏針對情境學習環境下整合從學習者的角度來看的即時適性學 習機制，因此，本計畫提出博物館環境應用穿戴科技開發情境感知即時適性的 EFL 學習想法並建置學習系統，來幫助學習者從博物館探索體驗展品實物的真實 情境感知，搭配課堂中所學習的知識，依據學習者學習狀態與特性進行即時適性 推薦學習。",
        },
        {
            title: "無所不在生活情境導向雲端學習平台設計與推廣",
            title_en: "Design of Ubiquitous Real-Life Situation Oriented Cloud E-Learning Platform and Its Application",
            domain: "科學教育",
            abstract:
                "情境學習強調知識與技能的學習應建構在真實生活的情境中，學習者可以主 動從真實活動中去探索而建構知識。生活化的數學問題解決教學可以從做中學行 動中落實生活與數學的連結。許多研究發現在真實的工作活動中，根據日常生活 中與情境互動的經驗可產生問題解決的技能。為了實現現今國小數學教學對於數 學生活化情境的落實而達成培養國小學童數學問題解決能力的提升，本計畫提出 實作無所不在生活情境導向雲端學習平台的設計，以台灣國小數學科加減乘除四 則運算為學習的主軸，採用生活情境導向的國小數學學習為基礎。經由無所不在 情境導引、圖像表徵問題解決模式、學習引導輔助策略、同儕分享與反思回饋以 及學習情緒偵測機制，來達到國小學童利用日常生活的經驗來學習四則運算，生 活的問題是學生親自實際經驗所面臨，便能依自先前的學習經驗來解題，解題的 方式是有意義的就可達到將數學概念外顯知識內隱化。這樣便能夠更紮實將一般 課堂教師口述數學計算的解題過程，學習內化於心中的熟練技能。",
        },
        {
            title: "應用教育機器人情境導向程式設計適性推薦導引學習系統建置與評估",
            title_en:
                "Design and Evaluation of Situated Problem-Based Adaptive Programming Guided-Recommended Learning System by Using Educational Robots",
            domain: "科學教育",
            abstract:
                "教育機器人為當前科技發展重要關鍵領域，結合人工智慧與人形機器人的開發，在全球已吸引不少企業進行企業人才培訓與教學應用。目前情境問題導向的研究與應用豐富多元，許多研究議題應用在科學知識的學習。然而在程式設計的教學上仍然欠缺學習者在程式撰寫動手做的學習過程中，能夠給予學習者相對應的情境問題引導，幫助學習者將抽象的語法結構對應到情境問題的理解，減少因不瞭解程式執行的目的所產生的困惑。本計畫擬定從學習者對於學習程式設計感到困難的觀點設計，提出以應用教育機器人發展情境問題導向使用適性推薦引導學習機制的想法並建置系統，來幫助學習者從程式設計撰寫學習的情境問題導向執行過程。系統依據學習者的學習狀態與特性進行適性導引推薦學習，並整合專注力分析創新研議在動態專注力導向適性導引推薦學習機制的設計上，提升學習者都能滿足自己適合的程式設計學習教材。",
        },
        {
            title: "動作技能導向情境式武術學習導引系統建置、評估與學習行為分析",
            title_en: "Design and Evaluation of Situated Martial Arts Guided Learning System Based on Motor-Skill Analysis",
            domain: "科學教育",
            abstract:
                "動作技能學習一直是許多教學現場教師與研究學者所關注的焦點。過去武術技能的學習多採用傳統師徒制的教學應用，師傅常面臨相同動作錯誤一再指導，徒弟仍然迷失動作正確性。藉由人工智慧學理基礎與感應資訊科技的輔助，將師傅的經驗有效傳承與徒弟的模仿學習更精準。本計畫運用電腦科技的模擬學習情境與動作姿勢分析演算法提出前瞻創新的武術動作診斷評估，建置動作技能學習導向情境武術導引學習系統。在系統的設計上考量學習者姿勢的正確性與力道強弱的判斷。透過武術專家動作姿勢標準化的資料庫建置以及情境式武術學習環境的營造，進而引導學習者在武術學習上能夠更加精熟練習。學生學習武術時如同擁有個別教練，能夠針對姿勢不對與力道不夠的動作診斷，透過動作技能學習導向情境武術導引學習系統進行反覆練習，用以達到武術學習動作正確性的提升與學習動機的增強。",
        },
        {
            title: "跨領域遊戲情境下問題導向同儕互學資料庫程式設計學習平台:建構、評估與學習行為分析",
            title_en:
                "Interdisciplinary Game-Situated Peer Interaction and Learning Platform for Database Programming: Construction, Evaluation and Analysis of Learning Behavior",
            domain: "科學教育",
            abstract:
                "本計畫針對現今資料庫程式設計難理解的抽象觀念與語法結構，透過跨領域學習與遊戲情境策略的觀點下，建構問題導向同儕互學資料庫程式設計學習平台，幫助學生在遊戲情境學習任務中，透過同儕相互討論解決問題，逐步將抽象的語法概念內化為具體所學。預期將有助於資料庫程式設計學習成效的提升與進階程式設計人才的培育，連結產業實務應用進而減少程式設計學用落差的問題。",
        },
    ],
};

let vm = new Vue({
    el: "#app",
    data: data,
    methods: {
        plann(index) {
            this.plan_show = true;
            this.plan_idx = index;
        },
        plan_cancel() {
            this.plan_show = false;
        },
    },
    computed: {
        planlist() {
            return this.plans[this.plan_idx];
        },
    },
});

var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
});
