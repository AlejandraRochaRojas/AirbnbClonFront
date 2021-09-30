 <template>
  <v-app>
    <ui-app-drawer />
    <ui-app-bar />

    <v-main
      id="main"
    >
      <router-view />
    </v-main>

    <v-footer app>
      <p>&copy; 2021</p>
    </v-footer>
  </v-app>
</template>

<style lang="stylus">
.web-inner {
  position relative
  height 100%
  margin 0 auto
  max-width 1150px
  padding 0 20px
  width: 100%
}
</style>

<script>
import UiAppBar from '@/components/UiAppBar/UiAppBar.vue'
import UiAppDrawer from './components/UiAppDrawer/UiAppDrawer.vue'

export default {
  components: {
    UiAppBar,
    UiAppDrawer
  }
}
</script>
