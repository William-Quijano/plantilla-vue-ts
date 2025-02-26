<template>
  <v-navigation-drawer
      v-model="drawer"
      :location="mobile ? 'bottom' : undefined"
      temporary
  >
    <v-list
        :items="items"
    ></v-list>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useDisplay } from 'vuetify'

const drawer = ref(false)
const items = ref([
  { title: 'Home', icon: 'mdi-home' },
  { title: 'About', icon: 'mdi-information' },
  { title: 'Contact', icon: 'mdi-email' },
])
const { mobile } = useDisplay()
</script>
