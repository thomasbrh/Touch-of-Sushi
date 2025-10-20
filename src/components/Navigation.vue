<script setup>
    const links = [
    { name: '寿司', url: '#' },
    { name: '住所', url: '#' },
]
</script>

<template>
    <nav class="navigation">
        <a href="app.vue" class="logo">
            <img src="@/assets/images/logo.svg" alt="Logo Sushi" />
        </a>

        <ul class="nav-links">
            <li v-for="link in links" :key="link.name">
                <a :href="link.url">{{ link.name }}</a>
            </li>
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