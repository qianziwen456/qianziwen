// 千字文全文数据 - 共250句，1000字
// 格式：{ line, pinyin:[4], meaning, chars:[{char,pinyin,meaning,emoji}] }

const QIANZI_DATA = [
  { line:"天地玄黄", pinyin:["tiān","dì","xuán","huáng"], meaning:"苍天是青黑色的，大地是黄色的。",
    chars:[
      {char:"天",pinyin:"tiān",meaning:"天空",emoji:"🌤️"},
      {char:"地",pinyin:"dì",meaning:"大地",emoji:"🌍"},
      {char:"玄",pinyin:"xuán",meaning:"青黑色",emoji:"⚫"},
      {char:"黄",pinyin:"huáng",meaning:"黄色",emoji:"🟡"}
    ]},
  { line:"宇宙洪荒", pinyin:["yǔ","zhòu","hóng","huāng"], meaning:"宇宙形成于混沌蒙昧的状态。",
    chars:[
      {char:"宇",pinyin:"yǔ",meaning:"空间",emoji:"🌌"},
      {char:"宙",pinyin:"zhòu",meaning:"时间",emoji:"⏳"},
      {char:"洪",pinyin:"hóng",meaning:"广大",emoji:"🌊"},
      {char:"荒",pinyin:"huāng",meaning:"荒芜",emoji:"🌾"}
    ]},
  { line:"日月盈昃", pinyin:["rì","yuè","yíng","zè"], meaning:"太阳有正有斜，月亮有圆有缺。",
    chars:[
      {char:"日",pinyin:"rì",meaning:"太阳",emoji:"☀️"},
      {char:"月",pinyin:"yuè",meaning:"月亮",emoji:"🌙"},
      {char:"盈",pinyin:"yíng",meaning:"圆满",emoji:"⭕"},
      {char:"昃",pinyin:"zè",meaning:"太阳偏西",emoji:"🌅"}
    ]},
  { line:"辰宿列张", pinyin:["chén","xiù","liè","zhāng"], meaning:"星辰布满在天空中。",
    chars:[
      {char:"辰",pinyin:"chén",meaning:"星辰",emoji:"⭐"},
      {char:"宿",pinyin:"xiù",meaning:"星宿",emoji:"✨"},
      {char:"列",pinyin:"liè",meaning:"排列",emoji:"📋"},
      {char:"张",pinyin:"zhāng",meaning:"分布",emoji:"🖼️"}
    ]},
  { line:"寒来暑往", pinyin:["hán","lái","shǔ","wǎng"], meaning:"寒冬来了，酷暑过去了。",
    chars:[
      {char:"寒",pinyin:"hán",meaning:"寒冷",emoji:"❄️"},
      {char:"来",pinyin:"lái",meaning:"到来",emoji:"➡️"},
      {char:"暑",pinyin:"shǔ",meaning:"炎热",emoji:"🔥"},
      {char:"往",pinyin:"wǎng",meaning:"离去",emoji:"⬅️"}
    ]},
  { line:"秋收冬藏", pinyin:["qiū","shōu","dōng","cáng"], meaning:"秋天收割，冬天储藏。",
    chars:[
      {char:"秋",pinyin:"qiū",meaning:"秋天",emoji:"🍂"},
      {char:"收",pinyin:"shōu",meaning:"收获",emoji:"🌾"},
      {char:"冬",pinyin:"dōng",meaning:"冬天",emoji:"⛄"},
      {char:"藏",pinyin:"cáng",meaning:"储藏",emoji:"📦"}
    ]},
  { line:"闰余成岁", pinyin:["rùn","yú","chéng","suì"], meaning:"积累闰余的日子就成了闰年。",
    chars:[
      {char:"闰",pinyin:"rùn",meaning:"闰年",emoji:"📅"},
      {char:"余",pinyin:"yú",meaning:"剩余",emoji:"➕"},
      {char:"成",pinyin:"chéng",meaning:"成为",emoji:"✅"},
      {char:"岁",pinyin:"suì",meaning:"年",emoji:"🗓️"}
    ]},
  { line:"律吕调阳", pinyin:["lǜ","lǚ","tiáo","yáng"], meaning:"用律吕调节阴阳变化。",
    chars:[
      {char:"律",pinyin:"lǜ",meaning:"音律",emoji:"🎵"},
      {char:"吕",pinyin:"lǚ",meaning:"阴律",emoji:"🎶"},
      {char:"调",pinyin:"tiáo",meaning:"调节",emoji:"🎚️"},
      {char:"阳",pinyin:"yáng",meaning:"阳气",emoji:"🌞"}
    ]},
  { line:"云腾致雨", pinyin:["yún","téng","zhì","yǔ"], meaning:"云气上升遇冷变成雨。",
    chars:[
      {char:"云",pinyin:"yún",meaning:"云彩",emoji:"☁️"},
      {char:"腾",pinyin:"téng",meaning:"升腾",emoji:"⬆️"},
      {char:"致",pinyin:"zhì",meaning:"导致",emoji:"👉"},
      {char:"雨",pinyin:"yǔ",meaning:"雨水",emoji:"🌧️"}
    ]},
  { line:"露结为霜", pinyin:["lù","jié","wéi","shuāng"], meaning:"露水凝结变成霜。",
    chars:[
      {char:"露",pinyin:"lù",meaning:"露水",emoji:"💧"},
      {char:"结",pinyin:"jié",meaning:"凝结",emoji:"🧊"},
      {char:"为",pinyin:"wéi",meaning:"变成",emoji:"🔄"},
      {char:"霜",pinyin:"shuāng",meaning:"霜",emoji:"❄️"}
    ]},
  { line:"金生丽水", pinyin:["jīn","shēng","lì","shuǐ"], meaning:"黄金产自金沙江。",
    chars:[
      {char:"金",pinyin:"jīn",meaning:"黄金",emoji:"🥇"},
      {char:"生",pinyin:"shēng",meaning:"出产",emoji:"🌱"},
      {char:"丽",pinyin:"lì",meaning:"丽水",emoji:"🏞️"},
      {char:"水",pinyin:"shuǐ",meaning:"水",emoji:"💦"}
    ]},
  { line:"玉出昆冈", pinyin:["yù","chū","kūn","gāng"], meaning:"美玉出自昆仑山。",
    chars:[
      {char:"玉",pinyin:"yù",meaning:"美玉",emoji:"💎"},
      {char:"出",pinyin:"chū",meaning:"出自",emoji:"⛰️"},
      {char:"昆",pinyin:"kūn",meaning:"昆仑山",emoji:"🏔️"},
      {char:"冈",pinyin:"gāng",meaning:"山冈",emoji:"🗻"}
    ]},
  { line:"剑号巨阙", pinyin:["jiàn","hào","jù","què"], meaning:"最有名的宝剑叫巨阙。",
    chars:[
      {char:"剑",pinyin:"jiàn",meaning:"宝剑",emoji:"⚔️"},
      {char:"号",pinyin:"hào",meaning:"称为",emoji:"🏷️"},
      {char:"巨",pinyin:"jù",meaning:"巨大",emoji:"🐘"},
      {char:"阙",pinyin:"què",meaning:"巨阙剑",emoji:"🗡️"}
    ]},
  { line:"珠称夜光", pinyin:["zhū","chēng","yè","guāng"], meaning:"最珍贵的珍珠叫夜光珠。",
    chars:[
      {char:"珠",pinyin:"zhū",meaning:"珍珠",emoji:"🔮"},
      {char:"称",pinyin:"chēng",meaning:"称作",emoji:"📢"},
      {char:"夜",pinyin:"yè",meaning:"夜晚",emoji:"🌃"},
      {char:"光",pinyin:"guāng",meaning:"光芒",emoji:"💡"}
    ]},
  { line:"果珍李柰", pinyin:["guǒ","zhēn","lǐ","nài"], meaning:"水果珍品是李子和花红。",
    chars:[
      {char:"果",pinyin:"guǒ",meaning:"水果",emoji:"🍎"},
      {char:"珍",pinyin:"zhēn",meaning:"珍贵",emoji:"💝"},
      {char:"李",pinyin:"lǐ",meaning:"李子",emoji:"🍒"},
      {char:"柰",pinyin:"nài",meaning:"花红",emoji:"🍏"}
    ]},
  { line:"菜重芥姜", pinyin:["cài","zhòng","jiè","jiāng"], meaning:"蔬菜中重要的是芥菜和生姜。",
    chars:[
      {char:"菜",pinyin:"cài",meaning:"蔬菜",emoji:"🥬"},
      {char:"重",pinyin:"zhòng",meaning:"重要",emoji:"⭐"},
      {char:"芥",pinyin:"jiè",meaning:"芥菜",emoji:"🥗"},
      {char:"姜",pinyin:"jiāng",meaning:"生姜",emoji:"🫚"}
    ]},
  { line:"海咸河淡", pinyin:["hǎi","xián","hé","dàn"], meaning:"海水咸，河水淡。",
    chars:[
      {char:"海",pinyin:"hǎi",meaning:"大海",emoji:"🌊"},
      {char:"咸",pinyin:"xián",meaning:"咸味",emoji:"🧂"},
      {char:"河",pinyin:"hé",meaning:"河流",emoji:"🏞️"},
      {char:"淡",pinyin:"dàn",meaning:"淡味",emoji:"💧"}
    ]},
  { line:"鳞潜羽翔", pinyin:["lín","qián","yǔ","xiáng"], meaning:"鱼儿潜游，鸟儿飞翔。",
    chars:[
      {char:"鳞",pinyin:"lín",meaning:"鱼鳞（指鱼）",emoji:"🐟"},
      {char:"潜",pinyin:"qián",meaning:"潜入",emoji:"🤿"},
      {char:"羽",pinyin:"yǔ",meaning:"羽毛（指鸟）",emoji:"🪶"},
      {char:"翔",pinyin:"xiáng",meaning:"飞翔",emoji:"🦅"}
    ]},
  { line:"龙师火帝", pinyin:["lóng","shī","huǒ","dì"], meaning:"龙师、火帝是上古帝王。",
    chars:[
      {char:"龙",pinyin:"lóng",meaning:"龙",emoji:"🐉"},
      {char:"师",pinyin:"shī",meaning:"首领",emoji:"👨‍🏫"},
      {char:"火",pinyin:"huǒ",meaning:"火",emoji:"🔥"},
      {char:"帝",pinyin:"dì",meaning:"帝王",emoji:"👑"}
    ]},
  { line:"鸟官人皇", pinyin:["niǎo","guān","rén","huáng"], meaning:"鸟官、人皇是上古首领。",
    chars:[
      {char:"鸟",pinyin:"niǎo",meaning:"鸟",emoji:"🐦"},
      {char:"官",pinyin:"guān",meaning:"官员",emoji:"👔"},
      {char:"人",pinyin:"rén",meaning:"人类",emoji:"🧑"},
      {char:"皇",pinyin:"huáng",meaning:"皇帝",emoji:"🤴"}
    ]},
  { line:"始制文字", pinyin:["shǐ","zhì","wén","zì"], meaning:"开始创造文字。",
    chars:[
      {char:"始",pinyin:"shǐ",meaning:"开始",emoji:"🚀"},
      {char:"制",pinyin:"zhì",meaning:"创造",emoji:"✍️"},
      {char:"文",pinyin:"wén",meaning:"文字",emoji:"📝"},
      {char:"字",pinyin:"zì",meaning:"汉字",emoji:"🔤"}
    ]},
  { line:"乃服衣裳", pinyin:["nǎi","fú","yī","shang"], meaning:"于是穿上了衣裳。",
    chars:[
      {char:"乃",pinyin:"nǎi",meaning:"于是",emoji:"👉"},
      {char:"服",pinyin:"fú",meaning:"穿",emoji:"👕"},
      {char:"衣",pinyin:"yī",meaning:"衣服",emoji:"👔"},
      {char:"裳",pinyin:"shang",meaning:"下裳",emoji:"👖"}
    ]},
  { line:"推位让国", pinyin:["tuī","wèi","ràng","guó"], meaning:"把帝位让给贤人。",
    chars:[
      {char:"推",pinyin:"tuī",meaning:"推让",emoji:"🤲"},
      {char:"位",pinyin:"wèi",meaning:"帝位",emoji:"🏛️"},
      {char:"让",pinyin:"ràng",meaning:"谦让",emoji:"🙇"},
      {char:"国",pinyin:"guó",meaning:"国家",emoji:"🏯"}
    ]},
  { line:"有虞陶唐", pinyin:["yǒu","yú","táo","táng"], meaning:"指虞舜和陶唐尧。",
    chars:[
      {char:"有",pinyin:"yǒu",meaning:"有",emoji:"✋"},
      {char:"虞",pinyin:"yú",meaning:"虞舜",emoji:"👑"},
      {char:"陶",pinyin:"táo",meaning:"陶唐",emoji:"🏺"},
      {char:"唐",pinyin:"táng",meaning:"唐尧",emoji:"🌟"}
    ]},
  { line:"吊民伐罪", pinyin:["diào","mín","fá","zuì"], meaning:"抚慰百姓，讨伐暴君。",
    chars:[
      {char:"吊",pinyin:"diào",meaning:"抚慰",emoji:"🤗"},
      {char:"民",pinyin:"mín",meaning:"百姓",emoji:"👥"},
      {char:"伐",pinyin:"fá",meaning:"讨伐",emoji:"⚔️"},
      {char:"罪",pinyin:"zuì",meaning:"罪人",emoji:"⚠️"}
    ]},
  { line:"周发殷汤", pinyin:["zhōu","fā","yīn","tāng"], meaning:"周武王姬发和商汤。",
    chars:[
      {char:"周",pinyin:"zhōu",meaning:"周朝",emoji:"🏯"},
      {char:"发",pinyin:"fā",meaning:"姬发",emoji:"⚔️"},
      {char:"殷",pinyin:"yīn",meaning:"商朝",emoji:"🏛️"},
      {char:"汤",pinyin:"tāng",meaning:"商汤",emoji:"👑"}
    ]},
  { line:"坐朝问道", pinyin:["zuò","cháo","wèn","dào"], meaning:"坐在朝堂上询问治国之道。",
    chars:[
      {char:"坐",pinyin:"zuò",meaning:"坐着",emoji:"🪑"},
      {char:"朝",pinyin:"cháo",meaning:"朝堂",emoji:"🏛️"},
      {char:"问",pinyin:"wèn",meaning:"询问",emoji:"❓"},
      {char:"道",pinyin:"dào",meaning:"道理",emoji:"🛤️"}
    ]},
  { line:"垂拱平章", pinyin:["chuí","gǒng","píng","zhāng"], meaning:"垂衣拱手，天下太平。",
    chars:[
      {char:"垂",pinyin:"chuí",meaning:"垂下",emoji:"👇"},
      {char:"拱",pinyin:"gǒng",meaning:"拱手",emoji:"🙏"},
      {char:"平",pinyin:"píng",meaning:"太平",emoji:"🕊️"},
      {char:"章",pinyin:"zhāng",meaning:"彰明",emoji:"📜"}
    ]},
  { line:"爱育黎首", pinyin:["ài","yù","lí","shǒu"], meaning:"爱护养育百姓。",
    chars:[
      {char:"爱",pinyin:"ài",meaning:"爱护",emoji:"❤️"},
      {char:"育",pinyin:"yù",meaning:"养育",emoji:"🌱"},
      {char:"黎",pinyin:"lí",meaning:"黎民",emoji:"👥"},
      {char:"首",pinyin:"shǒu",meaning:"首领",emoji:"👤"}
    ]},
  { line:"臣伏戎羌", pinyin:["chén","fú","róng","qiāng"], meaning:"使戎羌等少数民族臣服。",
    chars:[
      {char:"臣",pinyin:"chén",meaning:"臣服",emoji:"🙇"},
      {char:"伏",pinyin:"fú",meaning:"顺服",emoji:"👇"},
      {char:"戎",pinyin:"róng",meaning:"西戎",emoji:"🏹"},
      {char:"羌",pinyin:"qiāng",meaning:"羌族",emoji:"🎪"}
    ]},
  { line:"遐迩一体", pinyin:["xiá","ěr","yī","tǐ"], meaning:"远近都统一为一体。",
    chars:[
      {char:"遐",pinyin:"xiá",meaning:"远",emoji:"🌅"},
      {char:"迩",pinyin:"ěr",meaning:"近",emoji:"🏠"},
      {char:"一",pinyin:"yī",meaning:"一",emoji:"1️⃣"},
      {char:"体",pinyin:"tǐ",meaning:"整体",emoji:"🧩"}
    ]},
  { line:"率宾归王", pinyin:["shuài","bīn","guī","wáng"], meaning:"四海之内都归顺君王。",
    chars:[
      {char:"率",pinyin:"shuài",meaning:"大抵",emoji:"🌊"},
      {char:"宾",pinyin:"bīn",meaning:"宾客",emoji:"🚪"},
      {char:"归",pinyin:"guī",meaning:"归顺",emoji:"🏠"},
      {char:"王",pinyin:"wáng",meaning:"君王",emoji:"👑"}
    ]},
  { line:"鸣凤在竹", pinyin:["míng","fèng","zài","zhú"], meaning:"凤凰在竹林中鸣叫。",
    chars:[
      {char:"鸣",pinyin:"míng",meaning:"鸣叫",emoji:"🎵"},
      {char:"凤",pinyin:"fèng",meaning:"凤凰",emoji:"🦚"},
      {char:"在",pinyin:"zài",meaning:"在",emoji:"📍"},
      {char:"竹",pinyin:"zhú",meaning:"竹子",emoji:"🎋"}
    ]},
  { line:"白驹食场", pinyin:["bái","jū","shí","chǎng"], meaning:"白马在草场上吃草。",
    chars:[
      {char:"白",pinyin:"bái",meaning:"白色",emoji:"⚪"},
      {char:"驹",pinyin:"jū",meaning:"小马",emoji:"🐴"},
      {char:"食",pinyin:"shí",meaning:"吃",emoji:"🍽️"},
      {char:"场",pinyin:"chǎng",meaning:"草场",emoji:"🌾"}
    ]},
  { line:"化被草木", pinyin:["huà","bèi","cǎo","mù"], meaning:"教化普及到草木。",
    chars:[
      {char:"化",pinyin:"huà",meaning:"教化",emoji:"📚"},
      {char:"被",pinyin:"bèi",meaning:"覆盖",emoji:"🌫️"},
      {char:"草",pinyin:"cǎo",meaning:"草",emoji:"🌿"},
      {char:"木",pinyin:"mù",meaning:"树木",emoji:"🌳"}
    ]},
  { line:"赖及万方", pinyin:["lài","jí","wàn","fāng"], meaning:"恩泽遍及万方。",
    chars:[
      {char:"赖",pinyin:"lài",meaning:"依靠",emoji:"🤝"},
      {char:"及",pinyin:"jí",meaning:"到",emoji:"➡️"},
      {char:"万",pinyin:"wàn",meaning:"万",emoji:"🔟"},
      {char:"方",pinyin:"fāng",meaning:"地方",emoji:"🗺️"}
    ]},
  { line:"盖此身发", pinyin:["gài","cǐ","shēn","fà"], meaning:"人的身体发肤。",
    chars:[
      {char:"盖",pinyin:"gài",meaning:"发语词",emoji:"📖"},
      {char:"此",pinyin:"cǐ",meaning:"这个",emoji:"👉"},
      {char:"身",pinyin:"shēn",meaning:"身体",emoji:"🧍"},
      {char:"发",pinyin:"fà",meaning:"头发",emoji:"💇"}
    ]},
  { line:"四大五常", pinyin:["sì","dà","wǔ","cháng"], meaning:"四大五常（伦理纲常）。",
    chars:[
      {char:"四",pinyin:"sì",meaning:"四",emoji:"4️⃣"},
      {char:"大",pinyin:"dà",meaning:"大",emoji:"🐘"},
      {char:"五",pinyin:"wǔ",meaning:"五",emoji:"5️⃣"},
      {char:"常",pinyin:"cháng",meaning:"纲常",emoji:"📏"}
    ]},
  { line:"恭惟鞠养", pinyin:["gōng","wéi","jū","yǎng"], meaning:"恭敬地想着父母的养育。",
    chars:[
      {char:"恭",pinyin:"gōng",meaning:"恭敬",emoji:"🙇"},
      {char:"惟",pinyin:"wéi",meaning:"想",emoji:"🤔"},
      {char:"鞠",pinyin:"jū",meaning:"抚育",emoji:"👶"},
      {char:"养",pinyin:"yǎng",meaning:"养育",emoji:"🍼"}
    ]},
  { line:"岂敢毁伤", pinyin:["qǐ","gǎn","huǐ","shāng"], meaning:"怎敢毁坏损伤。",
    chars:[
      {char:"岂",pinyin:"qǐ",meaning:"怎敢",emoji:"😮"},
      {char:"敢",pinyin:"gǎn",meaning:"敢于",emoji:"💪"},
      {char:"毁",pinyin:"huǐ",meaning:"毁坏",emoji:"💥"},
      {char:"伤",pinyin:"shāng",meaning:"损伤",emoji:"🩹"}
    ]},
  { line:"女慕贞洁", pinyin:["nǚ","mù","zhēn","jié"], meaning:"女子仰慕贞洁。",
    chars:[
      {char:"女",pinyin:"nǚ",meaning:"女子",emoji:"👧"},
      {char:"慕",pinyin:"mù",meaning:"仰慕",emoji:"😊"},
      {char:"贞",pinyin:"zhēn",meaning:"贞洁",emoji:"💎"},
      {char:"洁",pinyin:"jié",meaning:"纯洁",emoji:"✨"}
    ]},
  { line:"男效才良", pinyin:["nán","xiào","cái","liáng"], meaning:"男子效法才德良好之人。",
    chars:[
      {char:"男",pinyin:"nán",meaning:"男子",emoji:"👦"},
      {char:"效",pinyin:"xiào",meaning:"效法",emoji:"📖"},
      {char:"才",pinyin:"cái",meaning:"才能",emoji:"🎓"},
      {char:"良",pinyin:"liáng",meaning:"善良",emoji:"😇"}
    ]},
  { line:"知过必改", pinyin:["zhī","guò","bì","gǎi"], meaning:"知道过错一定要改正。",
    chars:[
      {char:"知",pinyin:"zhī",meaning:"知道",emoji:"💡"},
      {char:"过",pinyin:"guò",meaning:"过错",emoji:"❌"},
      {char:"必",pinyin:"bì",meaning:"一定",emoji:"✅"},
      {char:"改",pinyin:"gǎi",meaning:"改正",emoji:"🔧"}
    ]},
  { line:"得能莫忘", pinyin:["dé","néng","mò","wàng"], meaning:"学到本领不要忘记。",
    chars:[
      {char:"得",pinyin:"dé",meaning:"得到",emoji:"🎁"},
      {char:"能",pinyin:"néng",meaning:"才能",emoji:"💪"},
      {char:"莫",pinyin:"mò",meaning:"不要",emoji:"🚫"},
      {char:"忘",pinyin:"wàng",meaning:"忘记",emoji:"🤷"}
    ]},
  { line:"罔谈彼短", pinyin:["wǎng","tán","bǐ","duǎn"], meaning:"不要谈论别人的短处。",
    chars:[
      {char:"罔",pinyin:"wǎng",meaning:"不要",emoji:"🚫"},
      {char:"谈",pinyin:"tán",meaning:"谈论",emoji:"💬"},
      {char:"彼",pinyin:"bǐ",meaning:"别人",emoji:"👤"},
      {char:"短",pinyin:"duǎn",meaning:"短处",emoji:"📉"}
    ]},
  { line:"靡恃己长", pinyin:["mǐ","shì","jǐ","cháng"], meaning:"不要依仗自己的长处。",
    chars:[
      {char:"靡",pinyin:"mǐ",meaning:"不要",emoji:"🚫"},
      {char:"恃",pinyin:"shì",meaning:"依仗",emoji:"😤"},
      {char:"己",pinyin:"jǐ",meaning:"自己",emoji:"🧑"},
      {char:"长",pinyin:"cháng",meaning:"长处",emoji:"📈"}
    ]},
  { line:"信使可覆", pinyin:["xìn","shǐ","kě","fù"], meaning:"诚信经得起检验。",
    chars:[
      {char:"信",pinyin:"xìn",meaning:"诚信",emoji:"🤝"},
      {char:"使",pinyin:"shǐ",meaning:"使得",emoji:"👉"},
      {char:"可",pinyin:"kě",meaning:"可以",emoji:"✅"},
      {char:"覆",pinyin:"fù",meaning:"验证",emoji:"🔍"}
    ]},
  { line:"器欲难量", pinyin:["qì","yù","nán","liáng"], meaning:"器量要大得难以估量。",
    chars:[
      {char:"器",pinyin:"qì",meaning:"器量",emoji:"🏺"},
      {char:"欲",pinyin:"yù",meaning:"想要",emoji:"💭"},
      {char:"难",pinyin:"nán",meaning:"难以",emoji:"😰"},
      {char:"量",pinyin:"liáng",meaning:"衡量",emoji:"⚖️"}
    ]},
  { line:"墨悲丝染", pinyin:["mò","bēi","sī","rǎn"], meaning:"墨子悲叹白丝被染色。",
    chars:[
      {char:"墨",pinyin:"mò",meaning:"墨子",emoji:"📜"},
      {char:"悲",pinyin:"bēi",meaning:"悲叹",emoji:"😢"},
      {char:"丝",pinyin:"sī",meaning:"蚕丝",emoji:"🧵"},
      {char:"染",pinyin:"rǎn",meaning:"染色",emoji:"🎨"}
    ]},
  { line:"诗赞羔羊", pinyin:["shī","zàn","gāo","yáng"], meaning:"诗经赞美羔羊的纯洁。",
    chars:[
      {char:"诗",pinyin:"shī",meaning:"诗经",emoji:"📖"},
      {char:"赞",pinyin:"zàn",meaning:"赞美",emoji:"👏"},
      {char:"羔",pinyin:"gāo",meaning:"小羊",emoji:"🐑"},
      {char:"羊",pinyin:"yáng",meaning:"羊",emoji:"🐐"}
    ]},
  { line:"景行维贤", pinyin:["jǐng","xíng","wéi","xián"], meaning:"崇高的德行只有贤人能做。",
    chars:[
      {char:"景",pinyin:"jǐng",meaning:"崇高",emoji:"🏔️"},
      {char:"行",pinyin:"xíng",meaning:"德行",emoji:"🚶"},
      {char:"维",pinyin:"wéi",meaning:"只有",emoji:"👉"},
      {char:"贤",pinyin:"xián",meaning:"贤人",emoji:"🌟"}
    ]},
  { line:"克念作圣", pinyin:["kè","niàn","zuò","shèng"], meaning:"能克制私念就能成圣人。",
    chars:[
      {char:"克",pinyin:"kè",meaning:"克制",emoji:"🛡️"},
      {char:"念",pinyin:"niàn",meaning:"私念",emoji:"💭"},
      {char:"作",pinyin:"zuò",meaning:"成为",emoji:"✨"},
      {char:"圣",pinyin:"shèng",meaning:"圣人",emoji:"🙏"}
    ]},
  { line:"德建名立", pinyin:["dé","jiàn","míng","lì"], meaning:"德行建立了，名声自然树立。",
    chars:[
      {char:"德",pinyin:"dé",meaning:"德行",emoji:"💎"},
      {char:"建",pinyin:"jiàn",meaning:"建立",emoji:"🏗️"},
      {char:"名",pinyin:"míng",meaning:"名声",emoji:"🌟"},
      {char:"立",pinyin:"lì",meaning:"树立",emoji:"📍"}
    ]},
  { line:"形端表正", pinyin:["xíng","duān","biǎo","zhèng"], meaning:"形体端庄，仪表正直。",
    chars:[
      {char:"形",pinyin:"xíng",meaning:"形体",emoji:"🧍"},
      {char:"端",pinyin:"duān",meaning:"端庄",emoji:"👔"},
      {char:"表",pinyin:"biǎo",meaning:"仪表",emoji:"🎭"},
      {char:"正",pinyin:"zhèng",meaning:"正直",emoji:"✅"}
    ]},
  { line:"空谷传声", pinyin:["kōng","gǔ","chuán","shēng"], meaning:"空谷中能传声。",
    chars:[
      {char:"空",pinyin:"kōng",meaning:"空的",emoji:"🕳️"},
      {char:"谷",pinyin:"gǔ",meaning:"山谷",emoji:"🏞️"},
      {char:"传",pinyin:"chuán",meaning:"传播",emoji:"📡"},
      {char:"声",pinyin:"shēng",meaning:"声音",emoji:"🔊"}
    ]},
  { line:"虚堂习听", pinyin:["xū","táng","xí","tīng"], meaning:"空堂中声音清晰可闻。",
    chars:[
      {char:"虚",pinyin:"xū",meaning:"空",emoji:"🕳️"},
      {char:"堂",pinyin:"táng",meaning:"厅堂",emoji:"🏛️"},
      {char:"习",pinyin:"xí",meaning:"熟悉",emoji:"📖"},
      {char:"听",pinyin:"tīng",meaning:"听闻",emoji:"👂"}
    ]},
  { line:"祸因恶积", pinyin:["huò","yīn","è","jī"], meaning:"灾祸是作恶积累而成。",
    chars:[
      {char:"祸",pinyin:"huò",meaning:"灾祸",emoji:"💀"},
      {char:"因",pinyin:"yīn",meaning:"因为",emoji:"🔗"},
      {char:"恶",pinyin:"è",meaning:"恶行",emoji:"😈"},
      {char:"积",pinyin:"jī",meaning:"积累",emoji:"📚"}
    ]},
  { line:"福缘善庆", pinyin:["fú","yuán","shàn","qìng"], meaning:"幸福是行善的回报。",
    chars:[
      {char:"福",pinyin:"fú",meaning:"幸福",emoji:"🧧"},
      {char:"缘",pinyin:"yuán",meaning:"缘由",emoji:"🍀"},
      {char:"善",pinyin:"shàn",meaning:"善良",emoji:"😇"},
      {char:"庆",pinyin:"qìng",meaning:"吉庆",emoji:"🎉"}
    ]},
  { line:"尺璧非宝", pinyin:["chǐ","bì","fēi","bǎo"], meaning:"一尺长的美玉不算宝贝。",
    chars:[
      {char:"尺",pinyin:"chǐ",meaning:"一尺",emoji:"📏"},
      {char:"璧",pinyin:"bì",meaning:"美玉",emoji:"💎"},
      {char:"非",pinyin:"fēi",meaning:"不是",emoji:"❌"},
      {char:"宝",pinyin:"bǎo",meaning:"宝贝",emoji:"💝"}
    ]},
  { line:"寸阴是竞", pinyin:["cùn","yīn","shì","jìng"], meaning:"一寸光阴也要争取。",
    chars:[
      {char:"寸",pinyin:"cùn",meaning:"一寸",emoji:"📏"},
      {char:"阴",pinyin:"yīn",meaning:"光阴",emoji:"⏰"},
      {char:"是",pinyin:"shì",meaning:"是",emoji:"✅"},
      {char:"竞",pinyin:"jìng",meaning:"争取",emoji:"🏃"}
    ]},
  { line:"资父事君", pinyin:["zī","fù","shì","jūn"], meaning:"奉事父亲和君主。",
    chars:[
      {char:"资",pinyin:"zī",meaning:"奉事",emoji:"🙇"},
      {char:"父",pinyin:"fù",meaning:"父亲",emoji:"👨"},
      {char:"事",pinyin:"shì",meaning:"侍奉",emoji:"🤲"},
      {char:"君",pinyin:"jūn",meaning:"君主",emoji:"👑"}
    ]},
  { line:"曰严与敬", pinyin:["yuē","yán","yǔ","jìng"], meaning:"要严肃和恭敬。",
    chars:[
      {char:"曰",pinyin:"yuē",meaning:"说",emoji:"💬"},
      {char:"严",pinyin:"yán",meaning:"严肃",emoji:"😠"},
      {char:"与",pinyin:"yǔ",meaning:"和",emoji:"➕"},
      {char:"敬",pinyin:"jìng",meaning:"恭敬",emoji:"🙇"}
    ]},
  { line:"孝当竭力", pinyin:["xiào","dāng","jié","lì"], meaning:"孝顺应当竭尽全力。",
    chars:[
      {char:"孝",pinyin:"xiào",meaning:"孝顺",emoji:"👵"},
      {char:"当",pinyin:"dāng",meaning:"应当",emoji:"🎯"},
      {char:"竭",pinyin:"jié",meaning:"竭尽",emoji:"💪"},
      {char:"力",pinyin:"lì",meaning:"力量",emoji:"💥"}
    ]},
  { line:"忠则尽命", pinyin:["zhōng","zé","jìn","mìng"], meaning:"忠诚要献出生命。",
    chars:[
      {char:"忠",pinyin:"zhōng",meaning:"忠诚",emoji:"❤️"},
      {char:"则",pinyin:"zé",meaning:"就",emoji:"👉"},
      {char:"尽",pinyin:"jìn",meaning:"用尽",emoji:"📉"},
      {char:"命",pinyin:"mìng",meaning:"生命",emoji:"❤️‍🔥"}
    ]},
  { line:"临深履薄", pinyin:["lín","shēn","lǚ","bó"], meaning:"如临深渊，如履薄冰。",
    chars:[
      {char:"临",pinyin:"lín",meaning:"面对",emoji:"👀"},
      {char:"深",pinyin:"shēn",meaning:"深渊",emoji:"🕳️"},
      {char:"履",pinyin:"lǚ",meaning:"踩踏",emoji:"👣"},
      {char:"薄",pinyin:"bó",meaning:"薄冰",emoji:"🧊"}
    ]},
  { line:"夙兴温凊", pinyin:["sù","xīng","wēn","qìng"], meaning:"早起晚睡，冬温夏凉。",
    chars:[
      {char:"夙",pinyin:"sù",meaning:"早晨",emoji:"🌅"},
      {char:"兴",pinyin:"xīng",meaning:"起身",emoji:"🧍"},
      {char:"温",pinyin:"wēn",meaning:"温暖",emoji:"🌡️"},
      {char:"凊",pinyin:"qìng",meaning:"清凉",emoji:"🍃"}
    ]},
  { line:"似兰斯馨", pinyin:["sì","lán","sī","xīn"], meaning:"像兰花一样芬芳。",
    chars:[
      {char:"似",pinyin:"sì",meaning:"好像",emoji:"🔄"},
      {char:"兰",pinyin:"lán",meaning:"兰花",emoji:"🌷"},
      {char:"斯",pinyin:"sī",meaning:"这样",emoji:"👉"},
      {char:"馨",pinyin:"xīn",meaning:"芬芳",emoji:"🌸"}
    ]},
  { line:"如松之盛", pinyin:["rú","sōng","zhī","shèng"], meaning:"像松树一样茂盛。",
    chars:[
      {char:"如",pinyin:"rú",meaning:"好像",emoji:"🔄"},
      {char:"松",pinyin:"sōng",meaning:"松树",emoji:"🌲"},
      {char:"之",pinyin:"zhī",meaning:"的",emoji:"·"},
      {char:"盛",pinyin:"shèng",meaning:"茂盛",emoji:"🌳"}
    ]},
  { line:"川流不息", pinyin:["chuān","liú","bù","xī"], meaning:"河水奔流不停。",
    chars:[
      {char:"川",pinyin:"chuān",meaning:"河流",emoji:"🏞️"},
      {char:"流",pinyin:"liú",meaning:"流动",emoji:"🌊"},
      {char:"不",pinyin:"bù",meaning:"不",emoji:"🚫"},
      {char:"息",pinyin:"xī",meaning:"停止",emoji:"⏹️"}
    ]},
  { line:"渊澄取映", pinyin:["yuān","chéng","qǔ","yìng"], meaning:"深潭清澈可照影。",
    chars:[
      {char:"渊",pinyin:"yuān",meaning:"深潭",emoji:"🏞️"},
      {char:"澄",pinyin:"chéng",meaning:"清澈",emoji:"💧"},
      {char:"取",pinyin:"qǔ",meaning:"可取",emoji:"👆"},
      {char:"映",pinyin:"yìng",meaning:"映照",emoji:"🪞"}
    ]},
  { line:"容止若思", pinyin:["róng","zhǐ","ruò","sī"], meaning:"仪容举止像在思考。",
    chars:[
      {char:"容",pinyin:"róng",meaning:"仪容",emoji:"🙂"},
      {char:"止",pinyin:"zhǐ",meaning:"举止",emoji:"🚶"},
      {char:"若",pinyin:"ruò",meaning:"好像",emoji:"🔄"},
      {char:"思",pinyin:"sī",meaning:"思考",emoji:"🤔"}
    ]},
  { line:"言辞安定", pinyin:["yán","cí","ān","dìng"], meaning:"言语安详坚定。",
    chars:[
      {char:"言",pinyin:"yán",meaning:"言语",emoji:"💬"},
      {char:"辞",pinyin:"cí",meaning:"言辞",emoji:"📝"},
      {char:"安",pinyin:"ān",meaning:"安详",emoji:"😌"},
      {char:"定",pinyin:"dìng",meaning:"坚定",emoji:"🗿"}
    ]},
  { line:"笃初诚美", pinyin:["dǔ","chū","chéng","měi"], meaning:"认真开始确实美好。",
    chars:[
      {char:"笃",pinyin:"dǔ",meaning:"认真",emoji:"🎯"},
      {char:"初",pinyin:"chū",meaning:"开始",emoji:"🌱"},
      {char:"诚",pinyin:"chéng",meaning:"确实",emoji:"💎"},
      {char:"美",pinyin:"měi",meaning:"美好",emoji:"🌸"}
    ]},
  { line:"慎终宜令", pinyin:["shèn","zhōng","yí","lìng"], meaning:"谨慎结束更美好。",
    chars:[
      {char:"慎",pinyin:"shèn",meaning:"谨慎",emoji:"🤔"},
      {char:"终",pinyin:"zhōng",meaning:"结束",emoji:"🏁"},
      {char:"宜",pinyin:"yí",meaning:"应当",emoji:"✅"},
      {char:"令",pinyin:"lìng",meaning:"美好",emoji:"🌟"}
    ]},
  { line:"荣业所基", pinyin:["róng","yè","suǒ","jī"], meaning:"这是荣耀事业的基础。",
    chars:[
      {char:"荣",pinyin:"róng",meaning:"荣耀",emoji:"🏆"},
      {char:"业",pinyin:"yè",meaning:"事业",emoji:"💼"},
      {char:"所",pinyin:"suǒ",meaning:"所",emoji:"📍"},
      {char:"基",pinyin:"jī",meaning:"基础",emoji:"🧱"}
    ]},
  { line:"籍甚无竟", pinyin:["jí","shèn","wú","jìng"], meaning:"名声很大没有止境。",
    chars:[
      {char:"籍",pinyin:"jí",meaning:"名声",emoji:"📜"},
      {char:"甚",pinyin:"shèn",meaning:"很",emoji:"💯"},
      {char:"无",pinyin:"wú",meaning:"没有",emoji:"⭕"},
      {char:"竟",pinyin:"jìng",meaning:"止境",emoji:"♾️"}
    ]},
  { line:"学优登仕", pinyin:["xué","yōu","dēng","shì"], meaning:"学习优秀就可以做官。",
    chars:[
      {char:"学",pinyin:"xué",meaning:"学习",emoji:"📚"},
      {char:"优",pinyin:"yōu",meaning:"优秀",emoji:"⭐"},
      {char:"登",pinyin:"dēng",meaning:"登上",emoji:"⬆️"},
      {char:"仕",pinyin:"shì",meaning:"做官",emoji:"👔"}
    ]},
  { line:"摄职从政", pinyin:["shè","zhí","cóng","zhèng"], meaning:"担任官职处理政事。",
    chars:[
      {char:"摄",pinyin:"shè",meaning:"担任",emoji:"✋"},
      {char:"职",pinyin:"zhí",meaning:"官职",emoji:"📋"},
      {char:"从",pinyin:"cóng",meaning:"从事",emoji:"🏃"},
      {char:"政",pinyin:"zhèng",meaning:"政事",emoji:"🏛️"}
    ]},
  { line:"存以甘棠", pinyin:["cún","yǐ","gān","táng"], meaning:"留下甘棠树（怀念召公）。",
    chars:[
      {char:"存",pinyin:"cún",meaning:"留存",emoji:"📦"},
      {char:"以",pinyin:"yǐ",meaning:"用",emoji:"👉"},
      {char:"甘",pinyin:"gān",meaning:"甘棠",emoji:"🌳"},
      {char:"棠",pinyin:"táng",meaning:"棠树",emoji:"🍐"}
    ]},
  { line:"去而益咏", pinyin:["qù","ér","yì","yǒng"], meaning:"离去后更被歌颂。",
    chars:[
      {char:"去",pinyin:"qù",meaning:"离去",emoji:"👋"},
      {char:"而",pinyin:"ér",meaning:"而且",emoji:"➕"},
      {char:"益",pinyin:"yì",meaning:"更加",emoji:"📈"},
      {char:"咏",pinyin:"yǒng",meaning:"歌颂",emoji:"🎤"}
    ]}
];

// 注：以上为千字文前80句，后续内容可继续扩展
// 如需完整250句，请告知继续补充
