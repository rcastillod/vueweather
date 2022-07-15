<template>
    <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" elevation="0" dark color="rgba(20, 33, 62, .7)">About</v-btn>
        </template>
        <v-card 
        class="about-card" 
        dark>
            <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                    <v-card-title class="text-h5">CLOUDAPP</v-card-title>
                    <v-card-subtitle>Aplicación de datos meteorológicos actuales.</v-card-subtitle>
                    <v-card-actions>
                        <div class="d-flex align-center">
                            <v-btn 
                            class="mx-2" 
                            fab 
                            icon 
                            height="40px" 
                            right
                            width="40px"
                            href="https://github.com/rcastillod"
                            target="_blank">
                                <v-icon>mdi-github</v-icon>
                            </v-btn>
                            <div class="text-caption">Desarrollado por rcastillodev</div>
                        </div>
                    </v-card-actions>
                </div>
                <v-avatar class="ma-3" size="125" tile>
                    <v-img src="../assets/images/logo-bg.jpg"></v-img>
                </v-avatar>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'about-dialog',
    data: function(){
        return {
            dialog: false,
        }
    },
}
</script>

<style scoped lang="scss">
.about-card {
    background-color: rgba(#14213D, .8);
    backdrop-filter: blur(10px);
}
</style>