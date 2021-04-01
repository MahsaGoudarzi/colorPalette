<template>
    <v-app>
        <v-main>
            <AppBar />
            <v-container>
                <router-view />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import AppBar from "./components/AppBar";

export default {
    components: {
        AppBar,
    },
};
</script>
<style lang="less">
    * {
    font-family: "Reem Kufi", sans-serif!important;
    }
</style>
