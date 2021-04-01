<template>
    <div>
        <v-dialog
        persistent
            v-model="dialog"
            max-width="600px"
            >
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" dark >Edit</v-btn>
            </template>
            <v-card>
                    <v-card-title>
                    <span class="headline">Edit {{target.name}} </span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-form>
                            <v-row>
                                <v-col cols="12" sm="6" md="6" >
                                    <v-text-field
                                    v-model="target.creator"
                                    label="Your name*"
                                    required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6" >
                                    <v-text-field
                                    v-model="target.name"
                                    label="Palette's title*"
                                    required
                                    ></v-text-field>
                                </v-col>
                                <v-col v-for="i in target.colors.length" :key="i" cols="12" sm="6" md="6" >
                                    <v-color-picker
                                    v-model="target.colors[i-1]"
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
                    <!-- <v-btn
                        color="blue darken-1"
                        text
                        @click="reset(target.id)"
                    >
                        Reset
                    </v-btn> -->
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
    export default {
        props :{
            target : Object
        },
        data(){
            const hi = this.target
            // var hi3 = hi
            const hi2 = hi
            return {
                dialog: false,
                df:hi2,
            }
        },
        mounted(){
            // var hello =
            // this.df=this.target
            // console.log(this.df)
        },
        methods: {
            ...mapActions([
                'editPalette'
            ]),
            // reset(i) {
                // console.log(i,this.target)
                // console.log(i,this.df)
                // this.target = this.df
            // },
            submit(){
                const{ name, creator, colors } = this.target
                const payload = {
                    name,
                    creator,
                    colors
                }
                this.editPalette(payload)
                this.dialog = false
           }
        }
    }
</script>