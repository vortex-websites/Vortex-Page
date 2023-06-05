<template>
    <div>
        <div class="default-layout h-screen container mx-auto flex flex-col">
            <navbar />
            <div class="main-content flex-auto ">
                <slot />
            </div>
            <the-footer />
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="postcss" scoped></style>