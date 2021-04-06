<template lang="pug">
#app
  .container
    header
      block header
      img(src="@/assets/images/logo.png")
    .wrapper
      #nav
        router-link(to='/') Home
        |  | 
        router-link(to='/about') About
      #view
        router-view
      #footer footer
</template>

<style lang="sass">
</style>
