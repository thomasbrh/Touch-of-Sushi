<script setup>
import Navigation from './components/Navigation.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
    <Navigation/>
    <Header/>

    <router-view/>

    <Footer/>
</template>

<style>

</style>