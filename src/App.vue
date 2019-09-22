<template>
  <v-app>
    <v-app-bar app dense class="d-flex justify-center" color="nav_background">
      <span class="display-1 font-weight-light">ONE YEAR</span>
    </v-app-bar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
}
</script>
<style lang="scss">

</style>
