<template lang="pug">
#app
  .container
    header
      img(src="@/assets/img/logo.png")
    main
      .wrapper
        router-view
    footer
      p Copyright © {{ new Date().getFullYear() }} Coolbe.
</template>

<style lang="sass">
@import '@/assets/style/reset.sass'
@import '@/assets/style/global.sass'

// @font-face
//   font-family: 'OptimaEL-Text'
//   src: url('fonts/oel/OptimaEL-Text.eot')
//   src: url('fonts/oel/OptimaEL-Text.eot?#iefix') format("embedded-opentype"), url('fonts/oel/OptimaEL-Text.svg#OptimaEL-Text') format("svg"), url('fonts/oel/OptimaEL-Text.ttf') format("truetype"), url('fonts/oel/OptimaEL-Text.woff') format("woff"), url('fonts/oel/OptimaEL-Text.woff2') format("woff2")
//   font-weight: normal
//   font-style: normal

html,#app
  height: 100%
  // font-size: 16px
  // @media (min-width: 540px)
  //   font-size: 18px

body
  font-family: "Noto Sans TC", "Helvetica Neue", Helvetica, "PingFang TC", "LiHei Pro", "Hiragino Sans GB", "Microsoft JhengHei", "微軟正黑體", Arial ,sans-serif
  height: 100%
  overflow-x: hidden
  -webkit-overflow-scrolling: touch
  color: #333
  margin: 0
  background-color: #fcfcfc

p,span,h1,h2,h3,h4,h5,h6,label
  font-size: 16px
  font-weight: normal
  -webkit-text-size-adjust: none
  margin: 0

img
  max-width: 100%
  height: auto

a
  color: #333
  text-decoration: none !important

.container
  max-width: 540px
  margin: 0 auto
  min-height: 100%
  padding: 0 0 0px 0
  background-color: #fff
  // display: flex
  // flex-direction: column
  text-align: center
  header
    flex: 0 0 64px
    height: 64px
    background-color: $main
    display: flex
    justify-content: center
    align-items: center
    img
      height: 100%
      width: auto
  main
    .wrapper
      // flex: 1 1 0
      padding: 15px 15px 60px 15px
      background-color: #fff
      // display: flex
      // flex-direction: column
      #nav
        text-align: center
        padding: 10px 0
        a
          font-weight: bold
          color: #2c3e50
          &.router-link-exact-active
            color: #42b983
      #view
        // flex: 1 1 0
        // overflow-y: auto
      // #footer
      //   flex: 0 0 50px
      //   background-color: purple
      //   color: #fff
      //   display: flex
      //   justify-content: center
      //   align-items: center
  footer
    p
      font-size: 14px

// scrollbar
::-webkit-scrollbar-track-piece
  background-color: rgba(#f8f8f8, 1)
::-webkit-scrollbar
  width: 10px
  height: 10px
::-webkit-scrollbar-thumb
  background-color: rgba(#ccc, 1)
  background-clip: padding-box
  min-height: 28px
  border-radius: 50px
  border: 3px solid rgba(#f8f8f8, 0)
  cursor: pointer
::-webkit-scrollbar-thumb:hover
  background-color: rgba(#ccc, 0.8)

</style>
