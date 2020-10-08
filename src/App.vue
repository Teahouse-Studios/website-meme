<template>
  <div id="app">
    <v-app>
      <v-app-bar app clipped-left color="#fff">
        <v-toolbar-title class="d-flex">
          <img src="@/assets/meme.png" class="align-self-center me-2" width="30px" /><strong>梗体中文</strong>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn href="https://dl.meme.teahou.se/" text><v-icon left>mdi-cloud-download</v-icon> 在线构建</v-btn>
        <v-btn href="https://teahou.se/donate/" text><v-icon left>mdi-cash-usd</v-icon> 捐款</v-btn>
      </v-app-bar>
      <v-main>
        <v-container fluid>
          <v-fade-transition mode="out-in">
            <router-view />
          </v-fade-transition>
        </v-container>
      </v-main>
      <v-footer color="#323437" padless style="padding:30px" dark elevation="6">
        <v-col md="6" sm="12" class="text-md-left test-sm-center">
          <div style="line-height:1.618;font-size:14px">
            <v-btn href="https://teahou.se/terms/" text class="white--text"><v-icon left>mdi-script</v-icon> 服务条款</v-btn>
            <v-btn href="https://teahou.se/privacy-policy/" text class="white--text"><v-icon left>mdi-lock</v-icon> 隐私政策</v-btn>
            <v-btn href="https://teahou.se/donate/" text><v-icon left>mdi-cash-usd</v-icon> 捐款</v-btn>
          </div>
        </v-col>
        <v-col md="6" sm="12" class="text-md-right test-sm-center">
          <a href="https://teahou.se/">
            <v-img
              src="@/assets/teahouse.svg"
              alt="Teahouse Studios"
              contain
              transition="scale-transition"
              max-height="48"
              position="right"
              style="filter: invert(1)"
            />
          </a>
        </v-col>
      </v-footer>
    </v-app>
  </div>
</template>
