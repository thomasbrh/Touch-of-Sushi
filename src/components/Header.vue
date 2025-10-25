<script setup>

    defineProps({
        title: {
            type: String,
            required: true
        }
    })

    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { onMounted } from "vue";

    gsap.registerPlugin(ScrollTrigger);

    onMounted(() => {
        gsap.from(".gsap__header--title", {
            x: 1000,
            duration: 1,
        });

        ScrollTrigger.create({
            markers: false,
            trigger: ".gsap__section",
            start: "top bottom",
            end: "top top",
            scrub: true,
            pin: ".gsap__header",
            pinSpacing: false,
            invalidateOnRefresh: true,
        });

        gsap.to(".gsap__header", {
            opacity: 0,
            scrollTrigger: {
                trigger: ".gsap__section",
                start: "top 100%",
                end: "top 10%",
                scrub: true,
            },
        });
    });

</script>

<template>
    <header class="background__img--header gsap__header">
        <h1 class="gsap__header--title">{{ title }}</h1>
    </header>
</template>

<style scoped>
    .background__img--header::before{
        background-image: image-set(
            url('../assets/images/header.webp') 1x,
            url('../assets/images/header@2x.webp') 2x
        );

        position: absolute;
        content: "";
        inset: 0;

        background-size: cover;
        background-position: center;
        background-repeat: no-repeat; 
        z-index: -1000;
        opacity: 0.75;

        aspect-ratio: 3 / 2;  /* ou 1.5 figma => aspect-ratio: 1440/961; */
    }

    h1 {
        max-width: 10ch;
        position: absolute;
        top: 50dvh;
        right: 35vw;
        transform: translate(50%, -50%);
    }

    .gsap__header {
        min-height: 100vh;
        overflow: hidden;
    }
</style>