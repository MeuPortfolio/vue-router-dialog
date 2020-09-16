<template>
  <v-container>
    <div class="display-3 font-weight-bold">Page Content</div>
    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores pariatur aliquam maiores quod magni delectus.
      Dolor laboriosam cumque perferendis voluptatem, pariatur neque suscipit corrupti quae eum consequatur?
      Fugiat, temporibus facere?</div>
      <v-divider class="my-4" />
      <v-btn color="success" :to="{ name: 'DialogContent' }">
        Dialog Content
      </v-btn>
  </v-container>
</template>

<script  lang="ts" src="./Page.ts"></script>
