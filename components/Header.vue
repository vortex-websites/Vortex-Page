<template>
    <div>
        <h1 class="font-medium text-center" style="font-size: 6vh; text-align: center; padding-top: 1vh;">Quer um site para
            chamar de seu?
        </h1>
        <div class="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 " style="padding-top: 4vh; margin: auto;">
            <div>
                <img v-if="theme == 'light'" src="../assets/imgs/background-light.png"
                    class="h-bg-header-sm md:h-bg-header-lg lg:h-bg-header-lg w-bg-header-sm" alt="">
                <img v-if="theme == 'dark'" src="../assets/imgs/background-dark.png"
                    class="h-bg-header-sm md:h-bg-header-lg lg:h-bg-header-lg" alt="">
            </div>
            <div>
                <p class="font-semibold text-center md:text-left lg:text-left" style="font-size: 3vh; padding-top: 10vh;">
                    A Vortex oferece serviços de websites de portfólio até sites e-commerce, mas estamos sempre
                    procurando
                    resolver
                    a demanda do cliente! Também contamos com serviços de social media e marketing digital 🚀</p>
                <h1 class="font-semibold pt-4 text-center md:text-left lg:text-left" style="font-size: 3vh;">Confira nossas
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
