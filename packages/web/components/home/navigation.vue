<template>
  <v-container>
    <v-row>
      <v-col v-for="link in links" :key="link.to" cols="12" sm="4">
        <v-card class="pt-4 pb-7 px-8" :color="link.color" dark>
          <v-card-title class="text-h4 justify-center">
            {{ link.title }}
          </v-card-title>

          <v-divider class="mt-2 mb-3" />

          <v-card-text class="body-1">
            {{ link.description }}
          </v-card-text>

          <v-card-actions class="mt-3 px-0 justify-center">
            <v-btn
              block
              class="mx-4"
              color="rgba(255, 255, 255, 0.55)"
              large
              light
              rounded
              :to="{ name: link.to }"
            >
              {{ link.action }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    links: [
      {
        to: 'found',
        title: '揪團',
        action: '創立團隊',
        description:
          '成立一個新的共享帳務團隊，並由您負責主導付款、成員管理等相關事宜',
        color: 'primary',
      },
      {
        to: 'join',
        title: '參團',
        action: '立刻加入',
        description:
          '參與他人創建的共享團隊，您只須於約定時間內付款並提供相關證明即可',
        color: 'success',
      },
      {
        to: 'dash',
        title: '管理',
        action: '前往管理',
        description:
          '查看或管理目前您所主導或參與的共享團隊，個人資訊的設定也在這邊喔',
        color: 'warning',
      },
    ],
  }),
})
</script>
