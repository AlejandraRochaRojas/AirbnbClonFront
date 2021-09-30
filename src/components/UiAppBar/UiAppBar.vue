 <template>
 <v-card class="overflow-hidden">
    <v-app-bar
      app
      color="#fcb69f"
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      scroll-target="main"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="cambiarEstadoDrawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Airbnb</v-app-bar-title>

      <v-spacer />

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon @click="cambiarEstadoCorazon">
        <v-icon :color="ui.corazon ? 'red' : 'grey'">favorite</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-app-bar>
      <v-container></v-container>
  </v-card>

</template>

<script src="./UiAppBar.js"> </script>
