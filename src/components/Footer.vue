<script setup>

</script>

<template>
    <footer class="footer background__img--footer">
        <a href="app.vue" class="logo">
            <img src="@/assets/images/logo.svg" alt="Logo Sushi" />
        </a>

        <h4>寿司を正しく持ち、浸す</h4>

        <p class="p-footer">正しい動作を行う</p>
        <p class="p-footer">正しい動作を行う</p>
        <p class="p-footer">正しい動作を行う</p>
    </footer>
</template>

<style scoped>
    .background__img--footer {
        background-image: url('../assets/images/Sushi-footer.svg');
        background-size: 35% auto;
        background-position: right;
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
</style>