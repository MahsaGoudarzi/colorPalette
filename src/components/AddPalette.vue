<template>
    <div>
        <v-dialog
            v-model="dialog"
            max-width="600px"
            >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                color="white"
                light
                v-bind="attrs"
                v-on="on"
                >
                Make your own
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                <span class="headline">Add your best</span>
                </v-card-title>
                <v-card-text>
                <v-container>
                    <v-form>
                        <v-row>
                            <v-col cols="12" sm="6" md="6" >
                                <v-text-field
                                v-model="formData.creator"
                                label="Your name*"
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6" >
                                <v-text-field
                                v-model="formData.name"
                                label="Palette's title*"
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col v-for="i in formData.colors.length" :key="i" cols="12" sm="6" md="6" >
                                <v-color-picker
                                v-model="formData.colors[i-1]"
                                required
                                dot-size="11"
                                hide-mode-switch
                                mode="hexa"
                                swatches-max-height="250"
                                ></v-color-picker>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-container>
                <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = false"
                >
                    Close
                </v-btn>
                <v-btn class="mr-4" @click="submit()" >
                    submit
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default({
    data: () => ({
        dialog: false,  
        formData :{
            name:"",
            creator:"",
            colors:[
                '',
                '',
                '',
                ''
            ]
        }
    }),

    methods : {
        ...mapActions([
            'addPalette'
        ]),
        submit() {
            const{ name, creator, colors } = this.formData
            const payload = {
                name,
                creator,
                colors
            }
            this.addPalette(payload)
            this.formData ={
                name:"",
                creator:"",
                colors:[
                    '',
                    '',
                    '',
                    ''
                ]
            }
            this.dialog = false
        }
    }
})
</script>
