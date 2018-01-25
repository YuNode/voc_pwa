<template>
  <div class="hello">
      <br>
      <br>
      <br>
      <br>
      <br>
          
    <div class="l-ali-center">

      <span>{{en}}</span>
      <br>

      <div class="infos">
        <div v-if="isShowZh" class="infos__inner">
          <span>{{zh}}</span>
        </div>
      </div>
      <br>

      <a class="btn-little" @click="isShowZh=true" href="javascript:void(0);">show annotation</a>
      <br>
      <a class="btn-little" @click="next" href="javascript:void(0);">next</a>
    </div>
  </div>
</template>

<script>

  //生成从minNum到maxNum的随机数
  function randomNum(minNum, maxNum) {
    switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * minNum + 1, 10);
        break;
      case 2:
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        break;
      default:
        return 0;
        break;
    }
  }

  export default {
    name: "home",
    data() {
      return {
        en: "english",
        zh: "英语",
        isShowZh: false,
        words: {
          "accuser": {
            "zh": "控告"
          },
          "accustom": {
            "zh": "习惯"
          },
          "accustomed": {
            "zh": "惯例"
          },
          "accustomed to": {
            "zh": "惯例"
          },
          "ace": {
            "zh": "王牌"
          },
          "acetic": {
            "zh": "醋"
          },
          "ache": {
            "zh": "疼痛"
          }
        },
        wordsKeys: [],
        currentWordIndex: 0
      };
    },
    methods: {
      next() {
        this.showNew()

      },
      showNew() {
        this.isShowZh = false
        let currentWordIndex = randomNum(0, this.wordsKeys.length - 1)

        if (currentWordIndex === this.currentWordIndex) {

          if (currentWordIndex > 1) {
            currentWordIndex--
          } else {
            currentWordIndex++
          }
        }

        this.en = this.wordsKeys[currentWordIndex]
        this.zh = this.words[this.wordsKeys[currentWordIndex]].zh

        this.currentWordIndex = currentWordIndex
      },
      async getNewWorldsData() {
        let res = await this.axios.get("/static/words.js")
        console.log(res)

        return res.data

      }
    },
    async created() {

      this.words = await this.getNewWorldsData()

      this.wordsKeys = Object.keys(this.words)

      this.showNew()

    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .l-ali-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .infos {
    min-height: 30px;
  }

  .btn-little {
    display: block;
    border: solid #333 1px;
    border-radius: 3px;
    color: black;
    text-decoration: none;
    padding: 3px 7px;
    width: 150px;
    text-align: center;
  }
</style>