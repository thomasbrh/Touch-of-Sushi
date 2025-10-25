<script setup>
  import Header from '../components/Header.vue'
</script>

<template>
    <Header title="さまざまな種類の寿司"></Header>


    <!-- section 1 -->
    <section class="bg__section bg__section1 gsap__section">
        <h2>寿司ワールド</h2>

        <h3>にぎり寿司</h3>

        <p>にぎり寿司とも呼ばれる、手づかみで形作られたご飯の上に生の魚の薄切りを乗せた伝統的な寿司です。主に非常に薄く切った魚で構成されていますが、海苔の帯で留められた玉子焼き（たまご）が乗ったものもあります。</p>
    </section>


    <!-- section 2 -->
    <section class="bg__section bg__section2">

        <h3>巻き寿司</h3>

        <p>あなたは単に「巻き」という名前で知っています。日本語の食文化では「巻き」という略称が広く使われていますが、正式名称は「巻き寿司」です。一部のレストランでは「海苔巻き」という名称も見られ、これは巻き寿司を包む海苔の種類 海苔 に由来しています。この寿司は巻き寿司で、切らずに食べるならサンドイッチの親戚みたいなものかも。伝統的には一つの具材だけでできていて、巻いたら6～8等分に切ります。</p>

    </section>


    <!-- section 3 -->
    <section class="bg__section bg__section3">

        <h3>裏巻き</h3>

        <p>ウラマキは、日本ではカリフォルニアロールとしてよく知られており、ヨーロッパで最もよく食べられる寿司ですが、実際には寿司ではありません！アメリカ、より正確にはカリフォルニア州ロサンゼルス発祥のものです。西洋人の味覚の違いや、トロ（脂の乗ったマグロ）の調達難に対応するため、日本の寿司職人が考案したものです。通常、2～3種類の具材で構成され、巻き寿司を裏返した形（海苔が内側）で、酢飯の一部がゴマで覆われています。</p>

    </section>


    <!-- section 4 -->
    <section class="bg__section bg__section4">

        <h3>手巻き</h3>

        <p>手巻き寿司は、海苔の円錐形に包まれたものです。ご飯と様々な具材が円錐形に包まれています。現在では最も一般的ではない寿司です。手巻き寿司には、魚介類や加熱・燻製した魚を使用するのが一般的であり、主に生の食材を使用する他の種類の寿司とは大きく異なります。手巻き寿司は、一般的に他の種類の寿司よりも大きめであることに注意してください。そのため、通常、調理人が包丁で切って、箸で食べられるようにします。</p>

    </section>


    <!-- section 5 -->
    <section class="bg__section bg__section5">

        <h3>刺身</h3>

        <p>刺身は、日本の美食の芸術である日本料理です。生の魚を薄切りにしたものです。その調理には、特に切り方や盛り付けに関して高度な技術が必要です。ちなみに、刺身という言葉は文字通り「切り身」を意味します。マグロ、クロマグロ、サーモン、ロブスター、また、鯛やヒラメは、今日、刺身の調理に最もよく使用される食材です。これらは、そのまま、あるいは醤油と、場合によってはわさびを添えて食べられます。</p>

    </section>


    <!-- section 6 -->
    <section class="bg__section bg__section6">
        <h2>自分で作る方法 </h2>

        <h3>必須成分</h3>

        <div class="accompagnements">
            <!-- box riz -->
            <div class="box">
                <p>酢飯（シャリ）：すべての寿司のベースとなる、ほのかな甘みと酸味のあるご飯。</p>
            </div>

            <!-- box algue -->
            <div class="box">
                <p>海苔：塩味のある乾燥した薄い海藻のシート。</p>
            </div>

            <!-- box poisson -->
            <div class="box">
                <p>生魚：サーモン、マグロ、鯛、エビなど。</p>
            </div>
             <!-- box legume -->
            <div class="box">
                <p>野菜：アボカド、キュウリ、ラディッシュ、マンゴーなど。</p>
            </div>
            <!-- box condiment -->
            <div class="box">
                  <p>調味料：わさび、生姜の酢漬け、醤油。</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
    @import '../assets/base.css';

    .bg__section1::before {
        background-image: image-set(
            url('../assets/images/Sushi__section1.webp') 1x,
            url('../assets/images/Sushi__section1@2x.webp') 2x
        );
    }

    .bg__section2::before {
        background-image: image-set(
            url('../assets/images/Sushi__section2.webp') 1x,
            url('../assets/images/Sushi__section2@2x.webp') 2x
        );
    }

    .bg__section3::before {
        background-image: image-set(
            url('../assets/images/Sushi__section3.webp') 1x,
            url('../assets/images/Sushi__section3@2x.webp') 2x
        );
    }
    .bg__section4::before {
        background-image: image-set(
            url('../assets/images/Sushi__section4.webp') 1x,
            url('../assets/images/Sushi__section4@2x.webp') 2x
        );
    }
    .bg__section5::before {
        background-image: image-set(
            url('../assets/images/Sushi__section5.webp') 1x,
            url('../assets/images/Sushi__section5@2x.webp') 2x
        );
    }
    .bg__section6::before {
        background-image: image-set(
            url('../assets/images/Sushi__section6.webp') 1x,
            url('../assets/images/Sushi__section6@2x.webp') 2x
        );
    }
</style>
