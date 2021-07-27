<template lang="pug">
.view-about
  #nav
    router-link(to='/home') Home
    |  | 
    router-link(to='/about') About
    |  | 
    router-link(to='/input') Input
  h1 Input
  h6(:class="{error: isError}") {{ question.word }}#[span(v-if="question.along")  單獨]#[span(v-if="!question.along")  組合]
  p.answer(v-show="isShowAnswer") {{ question.input }}
  .input-area
    ud-button(@click="showAnswer") 看解答
    ud-input(:class="{error: isError}" v-model.trim="inputValue" @keydown.space.native="check" @keydown.left.native="showAnswer" @keydown.right.native="next")
    ud-button(@click="next") 下一題
  .scope-area
    ud-checkbox(v-model="oneWord" option="單音字")
    ud-checkbox(v-model="twoWord" option="雙音字")
  img(src="https://i.imgur.com/UB5PLem.jpg")
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Input',
  data() {
    return {
      isError: false,
      oneWord: true,
      twoWord: true,
      oneWordList: [
        { word: "ㄅ", input: "b", along: true },
        { word: "ㄆ", input: "p", along: true },
        { word: "ㄇ", input: "m", along: true },
        { word: "ㄈ", input: "f", along: true },
        { word: "ㄉ", input: "d", along: true },
        { word: "ㄊ", input: "t", along: true },
        { word: "ㄋ", input: "n", along: true },
        { word: "ㄌ", input: "l", along: true },
        { word: "ㄍ", input: "g", along: true },
        { word: "ㄎ", input: "k", along: true },
        { word: "ㄏ", input: "h", along: true },
        { word: "ㄐ", input: "j", along: true },
        { word: "ㄑ", input: "q", along: true },
        { word: "ㄒ", input: "x", along: true },
        { word: "ㄓ", input: "zh", along: true },
        { word: "ㄔ", input: "ch", along: true },
        { word: "ㄕ", input: "sh", along: true },
        { word: "ㄖ", input: "r", along: true },
        { word: "ㄗ", input: "z", along: true },
        { word: "ㄘ", input: "c", along: true },
        { word: "ㄙ", input: "s", along: true },
        { word: "ㄧ", input: "yi", along: true },
        { word: "ㄨ", input: "wu", along: true },
        { word: "ㄩ", input: "yu", along: true },
        { word: "ㄚ", input: "a", along: true },
        { word: "ㄛ", input: "o", along: true },
        { word: "ㄜ", input: "e", along: true },
        { word: "ㄝ", input: "e", along: true },
        { word: "ㄞ", input: "ai", along: true },
        { word: "ㄟ", input: "ei", along: true },
        { word: "ㄠ", input: "ao", along: true },
        { word: "ㄡ", input: "ou", along: true },
        { word: "ㄢ", input: "an", along: true },
        { word: "ㄣ", input: "en", along: true },
        { word: "ㄤ", input: "ang", along: true },
        { word: "ㄥ", input: "eng", along: true },
        { word: "ㄦ", input: "er", along: true },
      ],
      twoWordList: [
        { word: "ㄧ", input: "yi", along: true },
        { word: "ㄧㄚ", input: "ya", along: true },
        { word: "ㄧㄛ", input: "yo", along: true },
        { word: "ㄧㄝ", input: "ye", along: true },
        { word: "ㄧㄞ", input: "", along: true },
        { word: "ㄧㄠ", input: "yao", along: true },
        { word: "ㄧㄡ", input: "you", along: true },
        { word: "ㄧㄢ", input: "yan", along: true },
        { word: "ㄧㄣ", input: "yin", along: true },
        { word: "ㄧㄤ", input: "yang", along: true },
        { word: "ㄧㄥ", input: "ying", along: true },
        { word: "ㄨ", input: "wu", along: true },
        { word: "ㄨㄚ", input: "wa", along: true },
        { word: "ㄨㄛ", input: "wo", along: true },
        { word: "ㄨㄞ", input: "wai", along: true },
        { word: "ㄨㄟ", input: "wei", along: true },
        { word: "ㄨㄢ", input: "wan", along: true },
        { word: "ㄨㄣ", input: "wen", along: true },
        { word: "ㄨㄤ", input: "wang", along: true },
        { word: "ㄨㄥ", input: "weng", along: true },
        { word: "ㄩ", input: "yu", along: true },
        { word: "ㄩㄝ", input: "yue", along: true },
        { word: "ㄩㄢ", input: "yuan", along: true },
        { word: "ㄩㄣ", input: "yun", along: true },
        { word: "ㄩㄥ", input: "yong", along: true },
        { word: "ㄋㄩ", input: "nu", along: true },
        { word: "ㄌㄩ", input: "lu", along: true },
        { word: "ㄧ", input: "i", along: false },
        { word: "ㄧㄚ", input: "ia", along: false },
        { word: "ㄧㄛ", input: "io", along: false },
        { word: "ㄧㄝ", input: "ie", along: false },
        { word: "ㄧㄞ", input: "", along: false },
        { word: "ㄧㄠ", input: "iao", along: false },
        { word: "ㄧㄡ", input: "iu", along: false },
        { word: "ㄧㄢ", input: "ian", along: false },
        { word: "ㄧㄣ", input: "in", along: false },
        { word: "ㄧㄤ", input: "iang", along: false },
        { word: "ㄧㄥ", input: "ing", along: false },
        { word: "ㄨ", input: "u", along: false },
        { word: "ㄨㄚ", input: "ua", along: false },
        { word: "ㄨㄛ", input: "uo", along: false },
        { word: "ㄨㄞ", input: "uai", along: false },
        { word: "ㄨㄟ", input: "ui", along: false },
        { word: "ㄨㄢ", input: "uan", along: false },
        { word: "ㄨㄣ", input: "un", along: false },
        { word: "ㄨㄤ", input: "uang", along: false },
        { word: "ㄨㄥ", input: "ong", along: false },
        { word: "ㄩ", input: "u", along: false },
        { word: "ㄩㄝ", input: "ue", along: false },
        { word: "ㄩㄢ", input: "uan", along: false },
        { word: "ㄩㄣ", input: "un", along: false },
        { word: "ㄩㄥ", input: "iong", along: false },
      ],
      inputValue: "",
      question: "",
      isShowAnswer: false
    }
  },
  mounted() {
    this.next();
  },
  computed: {
    questionList() {
      if(this.oneWord && !this.twoWord) {
        return this.oneWordList;
      }
      if(!this.oneWord && this.twoWord) {
        return this.twoWordList;
      }
      if(this.oneWord && this.twoWord) {
        return [...this.oneWordList, ...this.twoWordList];
      }
    }
  },
  methods: {
    showAnswer() {
      this.isShowAnswer = true;
    },
    next() {
      this.inputValue = "";
      this.isShowAnswer = false;
      this.isError = false;
      this.question = this.questionList[this.getRandom(0, this.questionList.length - 1)];
    },
    check() {
      if(this.inputValue !== this.question.input) {
        this.inputValue = "";
        this.isError = true;
      }else {
        this.next();
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  h6
    font-size: 36px
    position: relative
    display: inline-block
    &.error
      color: $danger
    span
      color: #666
      position: absolute
      right: -40px
      top: 50%
      transform: translate(0%,-50%)
  p.answer
    font-size: 24px
    line-height: 24px
    margin-bottom: 6px
    color: $green
  .input-area
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 15px
    /deep/ .ud-button
      button
        padding: 10px 16px
    /deep/ .ud-input
      flex: 0 1 50%
      margin: 0 auto
      input
        font-size: 24px
        text-align: center
      &.error
        input, input:focus
          border: 1px solid $danger !important
  .scope-area
    margin-bottom: 20px
    display: flex
    justify-content: center
    .ud-checkbox
      margin-left: 10px
</style>