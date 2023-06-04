<template>
    <nav class="border dark:border-gray-800 flex justify-center items-center">
        <div class="inline-block text-xl font-medium m-6">
            <NuxtLink to="/">
                <img src="https://cdn.discordapp.com/attachments/709918368026591252/1109288322842513458/Logo.png"
                    style="max-height: 4vh;" class="inline-block" alt="">
                <p class="inline-block text-purple-500">Vortex</p>
            </NuxtLink>
            <NuxtLink to="/" class="ml-8">Home</NuxtLink>
            <NuxtLink to="/contact" class="ml-8">Contato</NuxtLink>
            <NuxtLink>

            </NuxtLink>

        </div>
    </nav>
    <!-- <button class="flex px-2 py-1 rounded-md m-auto">
        <h1 class="p-1">Modos: </h1>
        <h1 class="pl-2 p-1">Claro</h1>
        <svg class="h-8 w-8 mr-2 p-1" :class="{ active: lightMode }" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            @click="toggleTheme">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <h1 class="p-1">Escuro</h1>
        <svg class="h-8 w-8 p-1" :class="{ active: lightMode }" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            @click="toggleTheme">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
    </button> -->
</template>
<!-- 
<script setup>

</script>

<style lang="postcss" scoped></style>

<script setup>
import { useThemeStore } from '~/store/useThemeStore'

const themeStore = useThemeStore();
if (process.client) {
    themeStore.initThemeStore();
}

let theme = computed(() => themeStore.getTheme)

function toggleTheme() {
    themeStore.toggleTheme();
}

</script> -->
