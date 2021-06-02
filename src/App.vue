<template>
  <v-app id="body">
    <v-app-bar
      app
      color="primary"
    >

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <router-view  ></router-view>
    </v-main>
    <br>
    <br>
    <br>
    <br>

    <v-footer height="100px" fixed>
    <v-btn
            width="200px"
            height="100%"
            class="my-0"
            @click="$router.push('/uploadImage')"
    >
      <h1>上传图片</h1>
    </v-btn>
      <v-btn
              width="200px"
              height="100%"
              class="my-0"
              @click="$router.push('/splitImage')"
      >
        <h1>分割</h1>
      </v-btn>
      <v-btn
              width="200px"
              height="100%"
              class="my-0"
              @click="$router.push('/pt')"
      >
        <h1>开始游戏</h1>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>
<style>
  .body{
    width: 1080px;
    height:1920px
  }
</style>
