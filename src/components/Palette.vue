<template>
    <div>
        <v-row>
			<v-col v-for="palette in palettes" :key="palette.id" class="hi" lg="3" md="1" sm="1" xl="3" cols="12" align="center">
				<v-card>
                    <v-card-text v-for="color in palette.colors" :key="color" :style="{ 'background-color': color }">
                        <v-tooltip left>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                v-bind="attrs"
                                v-on="on"
                                elevation="3"
                                class="bg-visi"
                                v-clipboard="color"
                                v-clipboard:success="onCopy"
                                
                                >
                                {{color}}
                                </v-btn>
                            </template>
                            <span>Copy</span>
                        </v-tooltip>
                        <v-snackbar
                            v-model="snackbar"
                            timeout="500"
                            color ="success"
                            elevation="0"
                            >
                            Copied !
                        </v-snackbar>
                    </v-card-text>
                    <v-card-text align="left">
                        <v-row justify="space-between">
                            <v-col>
                                <h2 class="font-weight-black">
                                    {{ palette.name }}
                                </h2>
                                <h4 class="mt-2">
                                    creator : {{ palette.creator }}
                                </h4>
                            </v-col>
                            <v-col align-self="center" class="text-right">
                                <EditPalette :target="palette"/>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
			</v-col>
		</v-row>
        
    </div>
</template>
<script>
import { mapState } from 'vuex'
import EditPalette from './EditPalette'
export default({
    components :{
        EditPalette,
    },
    data () {
        return {
            snackbar: false,
        }
    },
    computed : {
        ...mapState([
            'palettes',
        ])
    },
    methods : {
        onCopy: function () {
            this.snackbar = true
        }
    }
})
</script>
<style lang="less" scoped>
    .bg-visi {
        background-color: #ffffff9a!important;
    }
    
</style>
