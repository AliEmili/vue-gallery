<template>
    <div>
        <div class="navbar-fixed">
            <nav class="indigo">
                <div class="container">
                    <div class="nav-wrapper">
                        <router-link to="/" class="brand-logo text-white">گردشگریاتو</router-link>
                        <ul class="right">
                            <li>
                                <router-link to="/">خانه</router-link>
                            </li>
                            <li>
                                <router-link to="/gallery">گالری</router-link>
                            </li>
                            <li>
                                <router-link to="/about">درباره ما</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    name: "navbar"
}
</script>


<style scoped>
ul {
    padding-right: 0;
}
.pinks {
    color: #002F43;
}
nav .brand-logo {
    left: 10% !important;
    font-weight: bolder;
}


@media(max-width: 600px) {
    nav .brand-logo {
        font-size: 1.3rem;
        left: 13% !important;
    }
}
</style>