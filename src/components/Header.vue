<script setup>

defineProps({
  title: {
    type: String,
    required: true
  }
})

</script>

<template>
    <header class="background__img--header">
        <h1>{{ title }}</h1>
    </header>
</template>

<style scoped>
    .background__img--header{
        background-image: url('../assets/images/header.jpeg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat; 

        aspect-ratio: 3 / 2;  /* ou 1.5 figma => aspect-ratio: 1440/961; */
    }

    h1 {
        max-width: 10ch;
        position: absolute;
        top: 40%;
        left: 50%;
        /* transform: translate(-50%, -50%); */
    }
</style>