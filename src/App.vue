<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-toolbar color="primary">
        <v-btn text icon color="white"
          @click="$router.go(-1)"
        >
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card>
        <router-view name="dialog" />
      </v-card>
    </v-dialog>
  </v-app>
</template>
<script src="./App.ts"></script>
