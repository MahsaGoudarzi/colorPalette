<template>
  <div> 
    <v-app-bar color="deep-purple" dark elevate-on-scroll scroll-target="#app">
        <v-row justify="space-between">
            <v-col cols="6">
                <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
                <v-toolbar-title class="d-inline">Foo Palette</v-toolbar-title>
            </v-col>
            <v-col align-self="center" class="d-flex align-end flex-column" cols="6">
                <AddPalette />
            </v-col>
        </v-row>
        
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            
            <v-list-item-title>
              Home
            </v-list-item-title>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              About Us
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import AddPalette from './AddPalette.vue'
export default {
    name: 'AppBar',
    components :{
        AddPalette,
    },
    data : () => ({
        drawer: false,
        group: null,
    }),
}
</script>