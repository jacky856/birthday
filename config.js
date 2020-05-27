// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我们",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "可爱的小王",  // 同上...
        "今天是你的生日",
        "这是我们四个在一起的",
        "第二个生日了哦",
        "去年的生日",
        "还记得我们四大天王在唯意，凤王府，海底捞，小龙虾，900°烧烤吃的呢",
        "今年由于情况特殊，只能隔空给你传送祝福啦",
        "有机会再给你补过生日，请你吃大餐",
        "我们三人决定要把小王喂饱饱喂胖胖",
        "然后我们四人一起出去旅行",
        "老王，生日快乐。年年18岁，天天开心",
        "愿你成为自己喜欢的样子 不抱怨 不将就 有自由 有光芒",
        这世界全部的漂亮，都不及你的模样".

    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "我们的小可爱小王": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
