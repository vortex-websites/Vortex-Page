<template>
    <div class="index flex flex-col justify-center items-center">
        <h1 class="mt-2 font-semibold text-center" style="font-size: 3vh;">Quer um site para você ou para seu negócio?</h1>
        <div class="w-[50%] my-8">
            <h1 class="text-xl mb-4 text-center">Envie um email para a gente:</h1>
            <MarkdownEditor></MarkdownEditor>
        </div>

    </div>
</template>

<script setup>
import { useThemeStore } from '~/store/useThemeStore'
import MarkdownEditor from '~~/components/MarkdownEditor.vue';

const themeStore = useThemeStore();
if (process.client) {
    themeStore.initThemeStore();
}

let theme = computed(() => themeStore.getTheme)

function toggleTheme() {
    themeStore.toggleTheme();
}

</script>
