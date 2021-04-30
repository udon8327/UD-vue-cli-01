<template lang="pug">
#app
  .container
    header
      router-view(name='notFound')
      img(src="@/assets/img/logo.png")
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
