<template>
  <v-container fluid>
    <transition name="fade_away">
      <v-row no-gutters v-if="row_shower">
        <v-col cols="xs-12">
          <v-card dark height="97vh" class="d-flex flex-wrap justify-center align-center">
            <v-card-title class="headline text-center d-block">
              소현이와의 1주년을 기념하며
            </v-card-title>
            <v-img src="@/assets/front.png"></v-img>
            <v-card-text class="text-center d-block">
              함께 해줘서 고마워요
            </v-card-text>
            <v-card-actions>
              <v-btn @click="row_shower = false">열어보기</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </transition>
    <v-row no-gutters v-if="!row_shower">
      <v-col cols="xs-12 ma-0 pa-0">
        <v-sheet color="teal" height="80vh">
          <div class="text-center headline font-weight-light white--text">1년 동안 함께했던 순간들</div>
          <v-carousel cycle hide-delimiters show-arraws-on-hover >
            <v-carousel-item v-for="(pic, i) in 10" :key="i">
              <v-img :src="require('@/assets/one_year(' + (i+1) + ').png')" class="fill-height d-flex align-end">
                <div class="headline white--text text-center">{{img_text[i]}}</div>
              </v-img>
            </v-carousel-item>
          </v-carousel>
        </v-sheet>
      </v-col>
      <v-col cols="xs-12 ma-0 pa-0">
        <v-timeline>
          <v-timeline-item color="red" icon="mdi-star" fill-dot>
            <v-card>
              <v-card-text>
                2019.09.25부터
              </v-card-text>
            </v-card>
          </v-timeline-item>
          <v-timeline-item color="green lighten-1" icon="mdi-airballoon" fill-dot>
            <v-card>
              <v-card-text>
                1년을 지나
              </v-card-text>
            </v-card>
          </v-timeline-item>
          <v-timeline-item color="indigo lighten-2" icon="mdi-star" fill-dot>
            <v-card>
              <v-card-text>
                지금까지~
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
        <v-card class="pa-3">
          <div class="headline text-center">
            소현이에게 쓰는 편지
          </div>
          <div class="body-1">
            안녕, 소현아? 나 태훈이란다. 어느새 우리가 1주년이 되었구나. <br>
            1년 동안 참 즐겁게 웃기도 하고 싸울 때는 또 대판 싸우기도 하고 그랬는데 <br>
            그런 기간이 벌써 1년이라니 시간이 빠른 것 같기도, 느린 것 같기도 하네. <br>
            언젠가 싸울 때 싸우더라도 우리 다시 헤헤 웃으면서 손잡고 맛있는 거 먹으러 갈 수 있는, <br> 
            그런 커플이 되었으면 좋겠어요ㅎㅎ <br>
            소현이 언제나 내가 사랑하고 있다는 것만 알아줘. <br>
            1년 함께 해주어서 너무 고맙고, 다음 1년 그 다음 1년도 또 부탁할게! <br>
            Te amo Sempre! <br>
            - Seu Paulo -
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    row_shower : true,
    img_text : [
      "에버랜드에서 #1",
      "에버랜드에서 #2",
      "소돌이 셀카 #1",
      "전시회에서 #1",
      "소돌이 셀카 #2",
      "소돌이 곱슬머리 셀카 #1",
      "뽀뽀~ #1",
      "전시회에서 #2",
      "전시회에서 #3",
      "에버랜드에서 #3",
    ],
  }),
  methods : {
    compute_src(index) {
      return '../assets/one_year' + '(' + (index+1) + ')' + '.png'
    },
  }
}
</script>

<style lang="scss" scoped>
.fade_away-enter-active, .fade_away-leave-active {
  transition : transform 1s, opacity 1s;
}
.fade_away-enter, .fade_away-leave-to {
  transform : translateY(-100%);
  opacity : 0;
}
</style>