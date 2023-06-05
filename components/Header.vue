<template>
    <div class="">
        <h1 class="font-medium text-center" style="font-size: 6vh; text-align: center; padding-top: 1vh;">Quer um
            site para
            chamar de seu?
        </h1>
        <div class="p-0 md:p-20 lg:p-0 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 " style="padding-top: 4vh; ">
            <div>
                <img src="../assets/imgs/background-light.png" class="" alt="">
                <img v-if="theme == 'dark'" src="../assets/imgs/background-dark.png"
                    class="h-bg-header-sm md:h-bg-header-md lg:h-bg-header-l p-0" alt="">
            </div>
            <div class="pl-0 md:pl-10 ">
                <p class="font-semibold text-center md:text-center lg:text-left" style="font-size: 3vh; padding-top: 3vh;">
                    A Vortex oferece serviços de websites de portfólio até sites e-commerce, mas estamos sempre
                    procurando
                    resolver
                    a demanda do cliente! Também contamos com serviços de social media e marketing digital 🚀</p>
                <h1 class="font-semibold pt-4 text-center md:text-center lg:text-left" style="font-size: 3vh;">Confira
                    nossas
                    redes sociais:</h1>
                <SocialMedias />
            </div>

        </div>

    </div>
</template>


<style lang="postcss" scoped></style>

<script setup lang="ts">
import { useThemeStore } from '~/store/useThemeStore'

const themeStore = useThemeStore();
if (process.client) {
    themeStore.initThemeStore();
}

let theme = computed(() => themeStore.getTheme)

function toggleTheme() {
    themeStore.toggleTheme();
}

useMeta({
    title: 'Vortex Websites'
})

</script>