<template>
  <div>
    <section class="web-inner">
      <h2>Home</h2>
      <template
        v-for="card in cards"
      >
        <v-card
          :key="card.id"
          class="mx-auto my-4"
          max-width="344"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">
                OVERLINE
              </div>
              <v-list-item-title class="text-h5 mb-1">
                Headline 5
              </v-list-item-title>
              <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
              color="grey"
            ></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn
              outlined
              rounded
              text
            >
              Button
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    cards: [
      { id: 0, title: '' },
      { id: 1, title: '' },
      { id: 2, title: '' }
    ]
  })
}
</script>
