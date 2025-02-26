<template>
  <app-side-bar />
  <app-nav-bar />
  <v-main class="">
    <div class="h-auto">
      <router-view :key="path"></router-view>
    </div>
  </v-main>
</template>
<script setup lang="ts">
// import {useAlertStore} from "@/stores";
import {useRoute} from 'vue-router'
import {computed, ref} from "vue";
import AppSideBar from "@/components/AppSideBar.vue";


// const {$showAlert} = useAlertStore()
const path = ref(null)
const route = useRoute();
path.value = computed(() => route.fullPath)

// const handlerClick = () => {
//   $showAlert({show: true, message: "Hola", type: "success", timeout: 5000})
// }
</script>
