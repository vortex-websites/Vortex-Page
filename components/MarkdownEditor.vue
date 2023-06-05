<template>
  <div class="w-full mx-auto">
    <h1 class="text-center" style="font-size: 4vh;">Em breve</h1>
    <!-- <form>
      <input type="email" required="true" placeholder="digite seu email" v-model="email"
        class="m-auto border border-b-0 pb-4 w-52" />
      <div class="pt-4"></div>
      <div class=" bg-gray-50 border border-b-0 border-gray-300 rounded-t-md dark:bg-[#222] dark:border-gray-800">
        <button type="button"
          class="py-2 px-4 inline-block font-semibold text-gray-400 hover:text-black dark:hover:text-white"
          :class="editing ? 'dark:hover:text-indigo-500 hover:text-indigo-500 text-indigo-500' : ''"
          @click="editing = true">Escreva </button>
        <button type="button"
          class="py-2 px-4 inline-block text-gray-400 font-semibold hover:text-black dark:hover:text-white"
          :class="!editing ? 'dark:hover:text-indigo-500 hover:text-indigo-500 text-indigo-500' : ''"
          @click="renderHtml">Preview</button>
      </div>
      <div
        class="w-full relative rounded-b-md shadow-sm border border-gray-300 dark:border-gray-800 h-[500px] overflow-y-auto">
        <textarea class="w-full h-full block p-4 outline-none resize-none dark:bg-[#1c1c1c]" v-model="md" v-if="editing"
          placeholder="Escreva uma mensagem pra gente "></textarea>

        <div
          class="preview h-max min-h-full p-4 top-0 left-0 prose md:prose-md lg:prose-lg xl:prose-xl block max-w-none prose-indigo leading-6 dark:prose-dark dark:bg-[#1c1c1c]"
          v-html="rendered" v-else></div>
      </div>
      <div class="pl-[24%] md:pl-[40%] lg:pl-[40%] pt-4">
        <button type="submit" @click.prevent="send" class="bg-violet-700 text-white h-14 rounded-md w-32">Enviar</button>
      </div>
    </form> -->
  </div>
</template>

<script setup>

import 'highlight.js/styles/qtcreator-dark.css'
let md = ref("");
let rendered = ref("");
const editing = ref(true);

function renderHtml() {
  editing.value = false;
  rendered.value = useNuxtApp().$mdit.render(md.value);
}

</script>

<script>
export default {
  data: () => ({
    email: '',
    md: '',
  }),
  methods: {
    send() {
      if (this.email == '') {
        useNuxtApp().$toast.error(`Coloque seu email`,
          {
            position: 'bottom-right',
          });
      } else {
        try {
          this.$mail.send({
            from: this.email,
            subject: 'Contact form message',
            text: this.md,
          })
          useNuxtApp().$toast.success(`Email enviado com sucesso`,
            {
              position: 'bottom-right',
            });
          this.$posthog.capture(`${from} send and email`, {
            email: from
          })
        } catch (error) {
          // useNuxtApp().$toast.error(`Ocorreu algum erro`,
          //   {
          //     position: 'bottom-right',
          //   });
        }
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
/* width */
::-webkit-scrollbar {
  width: 7px;
  cursor: pointer;

}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
  cursor: pointer;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(0, 102, 255);
  border-radius: 100vw;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 36, 241);
  cursor: pointer;
}
</style>