<template>
  <v-app id="keep">
    <v-app-bar
      app
      clipped-left
      color="blue-grey"
       class="white--text"
    >

      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-img class="mx-2" src="http://cbs-uu.ru/images/logo_white.png" max-height="60" max-width="60" contain></v-img>
      <span class="title ml-3 mr-5">Библиогород&nbsp;<span class="font-weight-light">Улан-Удэ</span></span>
      <v-text-field
        solo-inverted
        flat
        hide-details
        label="Найди свою библиотеку"
        prepend-inner-icon="search"
        color="white"
      />

      <v-spacer />

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      color="grey lighten-4"
    >
      <v-list
        dense
        class="grey lighten-4"
      >
        <template v-for="(item, i) in items">
          <v-row
            v-if="item.heading"
            :key="i"
            align="center"
          >
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col
              cols="6"
              class="text-right"
            >
              <v-btn
                small
                text
              >edit</v-btn>
            </v-col>
          </v-row>
          <v-divider
            v-else-if="item.divider"
            :key="i"
            dark
            class="my-4"
          />
          <v-list-item
            v-else
            :key="i"
            link
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text">
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      ok
    <yandex-map :coords="coords" @click="onClick">
      <ymap-marker
        marker-id="123"
        :coords="coords"
        :balloon-template="balloonTemplate"
      ></ymap-marker>
    </yandex-map>
      <v-container
        fluid
        class="grey lighten-4 fill-height"
      >
        <v-row
          justify="center"
          align="center"
        >
          <v-col class="shrink">
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  :href="source"
                  icon
                  large
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  href="https://codepen.io/johnjleider/pen/zgxbYO"
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer
      app
      color="blue-grey"
      class="white--text"
    >
      <span>МАУ ЦБС г. Улан-Удэ</span>
      <v-spacer />
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    items: [
      { icon: 'lightbulb_outline', text: 'Notes' },
      { icon: 'touch_app', text: 'Reminders' },
      { divider: true },
      { heading: 'Labels' },
      { icon: 'add', text: 'Create new label' },
      { divider: true },
      { icon: 'archive', text: 'Archive' },
      { icon: 'delete', text: 'Trash' },
      { divider: true },
      { icon: 'settings', text: 'Settings' },
      { icon: 'chat_bubble', text: 'Trash' },
      { icon: 'help', text: 'Help' },
      { icon: 'phonelink', text: 'App downloads' },
      { icon: 'keyboard', text: 'Keyboard shortcuts' },
      { coords: [54, 39] }
    ],
    computed: {
      balloonTemplate () {
        return `
        <h1 class="red">Hi, everyone!</h1>
        <p>I am here: ${this.coords}</p>
        <img src="http://via.placeholder.com/350x150">
      `
      }
    },
    methods: {
      onClick (e) {
        this.coords = e.get('coords')
      }
    }
  })
}
</script>

<style>
#keep .v-navigation-drawer__border {
  display: none
}

.ymap-container {
  height: 600px;
}
.red {
  color: red;
}

</style>
