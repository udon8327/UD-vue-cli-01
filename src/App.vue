<template lang="pug">
#app
  .container
    header
      img(src="@/assets/img/logo.png")
    .wrapper
      #nav
        router-link(to='/home') Home
        |  | 
        router-link(to='/about') About
      #view
        router-view
      #footer footer
</template>

<style lang="sass">
</style>
