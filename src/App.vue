<template>
  <v-responsive class="border rounded">
    <v-app :theme="theme" >

        <!--      <v-fade-transition>-->
        <v-snackbar
            v-model="propsAlert.show"
            v-if="propsAlert.show"
            :timeout="propsAlert.timeout"
            position="fixed"
            transition="fade-transition"
            location-strategy="connected"
            z-index="10"
            tile
            location="top right"
            elevation="1"
            :color="propsAlert.type"
        >
          <template #default>
            <div class="d-flex align-center ga-5">
              <v-icon color="white" left v-if="propsAlert.type === 'success'"
              >mdi-check-circle
              </v-icon
              >
              <v-icon color="white" left v-if="propsAlert.type === 'error'"
              >mdi-alert-octagon
              </v-icon
              >
              <v-icon color="white" left v-if="propsAlert.type === 'warning'"
              >mdi-alert
              </v-icon
              >
              <v-icon color="white" left v-if="propsAlert.type === 'info'"
              >mdi-information
              </v-icon
              >
              <span class="body-1"
              ><strong> {{ propsAlert.message }}</strong></span
              >
            </div>
          </template>

          <template #actions="{ attrs }">
            <v-btn v-bind="attrs" icon right @click="propsAlert.show = false"
            >
              <v-icon color="white" small>mdi-close</v-icon>
            </v-btn
            >
          </template>
        </v-snackbar>
        <!--      </v-fade-transition>-->
        <router-view></router-view>

    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">
import {ref} from 'vue'

import {useAlertStore} from '@/stores'

const {propsAlert} = useAlertStore()

const theme = ref('light')
</script>
