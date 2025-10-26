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
                    markers: false,
                    start: "bottom 100%",
                    end: "bottom 50%",
                    toggleActions: "play none none reverse",
                },
                x: -80,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
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

        <p class="p__footer gsap__text">ありがとう、アドベストック。</p>
        <p class="p__footer gsap__text">ディープル、ありがとう。</p>

        <p class="p__footer gsap__text">作成者 
            <a href="https://thomasbruch.be/portfolio/">Thomas</a> 
            と 
            <a href="http://www.elodiesomer.be/projets/TFA/Portfolio/">Elodie</a>。
        </p>
        <small class="p__footer gsap__text">&copy;2025 HEAJ student.</small>
    </footer>
</template>

<style scoped>
    .background__img--footer {
        background-image: url('../assets/images/footer.svg');
        background-size: 25% auto;
        background-position: 75%;
        background-repeat: no-repeat;
        width: 100%;
        max-height: 49dvh;

        aspect-ratio: 3 / 2;

        display: flex;
        align-items: center;
        padding: 1.2rem 6rem;
        gap: 1rem;
        background-color: #FFE5DC;
        flex-direction: column;
        align-items: flex-start;
    }
    p {
        color: var(--primary);
        font-size: 14px;
        margin: 0px;
    }

    a {
        font-size: 16px;
        text-decoration: none;
        color: var(--hover);
    }
    a:hover {
        text-decoration: underline;
    }
    @media (max-width: 900px){
        .background__img--footer {
        background-image: url('../assets/images/footer.svg');
        background-size: 50% auto;
        background-position: 80%;

        aspect-ratio: 3 / 2;

        padding: 1.2rem 3.1rem;
        gap: 3.1rem;
        }
        p {
            color: var(--primary);
            font-size: 18px;
            margin: 0px;
        }

        a {
            font-size: 15px;
        }
    }
</style>