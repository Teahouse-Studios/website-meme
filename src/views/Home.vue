<template>
  <div>
    <section style="margin: -12px;">
      <v-container class="mt-3">
        <v-row align="center">
          <v-col cols="12" md="7">
              <h1 class="mb-4 d-flex"><img src="@/assets/meme.png" class="align-self-center me-2" width="30px" />梗体中文</h1>
              <p>致力于打造更生草的游戏体验：将一部分译名或其他游戏内字符串替换成了一些知名/不知名的梗或笑话，或将其用诙谐的语言重写了一遍。</p>
              <div class="py-4" />

              <div class="d-flex flex-wrap justify-left justify-sm-center justify-md-start align-center mx-n2">
                <v-btn class="ma-2" color="primary" large href="https://dl.meme.teahou.se/">立刻体验</v-btn>
                <v-btn class="ma-2" color="grey lighten-5" large href="https://github.com/Teahouse-Studios/mcwzh-meme-resourcepack">
                  <v-icon left size="20">mdi-github</v-icon> GitHub
                </v-btn>
              </div>
          </v-col>

          <v-col cols="12" md="5">
            <v-card class="v-card--hero" color="black">
              <v-lazy min-height="300">
                <iframe class="v-card--hero__iframe" src="//player.bilibili.com/player.html?bvid=BV1Vt4y1v7jP&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
              </v-lazy>
            </v-card>

            <div class="caption pt-3 pb-4 text-center grey--text">
              视频由 是秋夕呀mua 制作。<a href="https://space.bilibili.com/678013610">关注她的频道</a>。
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <br><br>
    <section>
      
    </section>
  </div>
</template>

<style lang="sass">
.v-card--hero
    background: #000
    border-radius: 6px
    height: 0
    margin: 0
    overflow: hidden
    padding-bottom: 70%
    position: relative
    width: 100%
    &__iframe
      display: block
      vertical-align: middle
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
</style>

<script>

</script>
