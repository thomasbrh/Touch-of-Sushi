<script setup type="module">
    import Header from '../components/Header.vue'

    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/ScrollTrigger";
    import { onMounted } from "vue";

    
    onMounted(() => {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.refresh();

        gsap.utils.toArray(".gsap__text").forEach((el) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "bottom 100%",
                    end: "bottom 80%",
                    toggleActions: "play none",
                },
                x: -1000,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });
        });

        gsap.from(".box", {
            scrollTrigger: {
                trigger: ".box",
                start: "top 90%",
                toggleActions: "play none",
            },
            x: -1000,
            opacity: 0,
            duration: 1,
            stagger: 0.8,
            ease: "elastic.Out",
        });
    
        const sections = gsap.utils.toArray(".panel");
        const horizontal = document.querySelector(".horizontal");
        const wrapper = document.querySelector(".horizontal-wrapper");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: wrapper,
                start: "top top",
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                end: () => "+=" + (horizontal.scrollWidth - window.innerWidth),
            },
        });

    });
</script>

<template>
    <Header title="寿司を食べてください"></Header>

    <main>
        <!-- section 1 -->
        <section class="bg__section bg__section1 gsap__section">
            <h2 class="titre_h2 gsap__text">テイスティングの準備</h2>

            <h3 class="titre_h3 gsap__text">適切な環境を選ぶ</h3>

            <p class="parag_texte gsap__text">寿司を食べ始める前に、静かで清潔な場所に落ち着く必要があります。寿司は繊細な料理であり、ゆっくりと味わうものです。整頓されたテーブル、箸、醤油用の小皿、そしてナプキンは必須です。</p>

            <h3 class="titre_h3 gsap__text">付け合わせを並べる</h3>

            <p class="parag_texte gsap__text">寿司はほとんどの場合、醤油、わさび、漬物生姜の3つの付け合わせとともに提供されます。</p>

            <div class="accompagnements accompagnements--icon">
                <!-- box soja -->
                <div class="box">
                    <p class="">醤油は塩分を加え、魚の風味を引き立てます。</p>
                    <img class="icon" src="../assets/images/accompagnements__soja.svg" alt="">
                </div>

                <!-- box wasabi -->
                <div class="box">
                    <p class="">わさびはピリッとした辛みを加えますが、ごく少量だけ加える必要があります。</p>
                    <img class="icon" src="../assets/images/accompagnements__wasabi.svg" alt="">
                </div>

                <!-- box gingembre -->
                <div class="box">
                    <p class="">わさびはピリッとした辛みを加えますが、ごく少量だけ加える必要があります。</p>
                    <img class="icon" src="../assets/images/accompagnements__gingembre.svg" alt="">
                </div>
            </div>
        </section>


        <div class="horizontal-wrapper">
            <div class="horizontal">
                <!-- section 2 -->
                <section class="bg__section bg__section2 panel">
                    <h2 class="titre_h2 gsap__text">寿司を正しく持ち、浸す</h2>

                    <h3 class="titre_h3 gsap__text">正しい動作を行う</h3>

                    <p class="parag_texte gsap__text">寿司は指でも箸でも食べられます。指で食べる場合は、寿司を両側から持ち、強く押し付けないようにしてください。箸を使う場合は、ご飯を潰さないように、寿司をそっとつまむようにしてください。</p>

                    <h3 class="titre_h3 gsap__text">注意深く浸す</h3>

                    <p class="parag_texte gsap__text">寿司を醤油につけるときは、ご飯の部分を浸してはいけません。魚の部分だけをつけるようにしましょう。ご飯は液体を多く吸収するため、崩れてしまう恐れがあります。この方法により、寿司の味わいをバランスよく上品に保つことができます。</p>

                    <h3 class="titre_h3 gsap__text">巻き寿司の特殊なケース</h3>

                    <p class="parag_texte gsap__text">巻き寿司（海苔で巻いたもの）は、少し持ちやすいです。醤油に軽くつけて、大きさに応じて一口か二口で食べられます。</p>
                </section>


                <!-- section 3 -->
                <section class="bg__section bg__section3 panel">
                    <h2 class="titre_h2 gsap__text">敬意と喜びをもって味わう</h2>

                    <h3 class="titre_h3 gsap__text">一口一口を味わう</h3>

                    <p class="parag_texte gsap__text">寿司は通常、一口で食べます。そうすることで、ご飯の甘み、魚の鮮度、タレの軽やかさといった、すべての風味を同時に味わうことができます。よく味わうためには、ゆっくり噛むことが大切です。</p>

                    <h3 class="titre_h3 gsap__text">伝統を尊重する</h3>

                    <p class="parag_texte gsap__text">日本の文化では、寿司を食べることは芸術です。わさびを醤油に混ぜたり、口いっぱいに頬張って話したりすることは避けられます。それぞれの寿司は、シェフの仕事を尊重し、注意深く味わう必要があります。</p>

                    <h3 class="titre_h3 gsap__text">食事の締めくくり</h3>

                    <p class="parag_texte gsap__text">食事の終わりには、生姜を少し食べて口の中をさっぱりさせることができます。寿司と一緒に温かい緑茶を飲む人もいて、これは消化を助け、味わいを引き立てます。</p>
                </section>
            </div>
        </div>
    </main>
    <div> </div> <!-- reset le scroll horizontal  -->
</template>

<style scoped>
    @import '../assets/base.css';

    .bg__section1::before {
        background-image: image-set(
            url('../assets/images/Home__section1.webp') 1x,
            url('../assets/images/Home__section1@2x.webp') 2x
        );
    }

    .bg__section2::before {
        background-image: image-set(
            url('../assets/images/Home__section2.webp') 1x,
            url('../assets/images/Home__section2@2x.webp') 2x
        );
    }

    .bg__section3::before {
        background-image: image-set(
            url('../assets/images/Home__section3.webp') 1x,
            url('../assets/images/Home__section3@2x.webp') 2x
        );
    }
</style>