<script setup>
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { onMounted } from "vue";

    gsap.registerPlugin(ScrollTrigger);

    onMounted(() => {
        gsap.utils.toArray(".gsap__text").forEach((el) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    markers: true,
                    start: "bottom 100%",
                    end: "bottom 50%",
                    toggleActions: "play none none reverse",
                },
                x: -80,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                once: true,
            });
        });
    });

</script>

<template>
    <footer class="footer background__img--footer">
        <a href="/" class="logo">
            <img src="@/assets/images/logo.svg" alt="Logo Sushi" />
        </a>

        <h4 class="gsap__text">寿司を正しく持ち、浸す</h4>

        <p class="p-footer gsap__text">ありがとう、アドベストック。</p>
        <p class="p-footer gsap__text">ディープル、ありがとう。</p>

        <p class="p-footer gsap__text">作成者 Thomas と Elodie。</p>
    </footer>
</template>

<style scoped>
    .background__img--footer {
        background-image: url('../assets/images/footer.svg');
        background-size: 25% auto;
        background-position: 75%;
        background-repeat: no-repeat;
        width: 100%;
        max-height: 40dvh;

        aspect-ratio: 3 / 2;

        display: flex;
        align-items: center;
        padding: 1rem 6rem;
        gap: 1rem;
        background-color: #FFE5DC;
        flex-direction: column;
        align-items: flex-start;
    }

    p {
        color: var(--primary);
        font-size: 14px;
    }
</style>