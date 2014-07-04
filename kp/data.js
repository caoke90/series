// 趣味听听样式1
var data = {
  "title": "标题",
  "content": "原文，事件在标签加上属性data-begintime和data-endtime",
  "image": "背景图地址",
  "audio": "音频地址"
};

// 趣味听听样式2
var data = {
  "list": [{
    "title": "",
    "intro": "背景介绍",
    "content": {
      "title": "",
      "content": ""
    },
    "audio": "",
    "note": [{
      "id": "和原文里打标签的释义id一致",
      "content": ""
    }]
  }]
};

// 趣味听听样式3
var data = {
  "audio": "",
  "intro": {
    "title": "",
    "content": "",
    "note": [{
      "id": "和原文里打标签的释义id一致",
      "content": ""
    }]
  },
  "content": {
    "title": "",
    "content": ""
  },
  "practice": {
    "choice": [{ // 单选题
      "type": 1,
      "title": "",
      "options": [{
        "text": "",
        "isRight": 1
      }]
    }],
    "filling": [{ // 选词填空
      "title": "",
      "options": ["答案1", "答案2"]
    }]
  },
  "extension": {
    "title": "",
    "content": "",
    "note": [{
      "id": "和原文里打标签的释义id一致",
      "content": ""
    }]
  }
};

// 音频课堂
var data = {
  "lecture": {
    "audio": "",
    "title": "",
    "content": ""
  },
  "practice": {
    "word": [{ // 单词
      "title": "",
      "audio": "",
      "options": [{
        "text": "",
        "isRight": 1
      }]
    }],
    "trans": [{ // 翻译
      "content": "",
      "topics": [{
        "title": "",
        "options": [{
          "text": "",
          "isRight": 1
        }]
      }]
    }]
  }
};
