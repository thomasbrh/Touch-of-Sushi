<script setup>
    const links = [
    { name: '寿司', url: '#' },
    { name: '寿司の種類', url: '#' },
]

import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { onMounted } from "vue";

    gsap.registerPlugin(ScrollTrigger);

    onMounted(() => {
        gsap.from(".navigation", {
            x: 2000,
            duration: 1
        });
    }) 
</script>

<template>
    <nav class="navigation">
        <a href="app.vue" class="logo">
            <img src="@/assets/images/logo.svg" alt="Logo Sushi" />
        </a>

        <ul class="nav-links">
            <router-link to="/">寿司</router-link>
            <router-link to="/Sushi">寿司の種類</router-link>
        </ul>
    </nav>
</template>

<style scoped>
    .navigation {
        display: flex;
        align-items: center;
        padding: 0.5rem 6rem;
        gap: 2rem;
        background-color: #FFE5DC;
    }

    .nav-links {
        display: flex;
        gap: 2rem;
        list-style: none;
        cursor: pointer;
    }

    .nav-links a {
        font-family: var(--primary);
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: var(--primary);
        text-decoration: none;
    }

    .nav-links a:hover {
        color: var(--hover);
    }
</style>