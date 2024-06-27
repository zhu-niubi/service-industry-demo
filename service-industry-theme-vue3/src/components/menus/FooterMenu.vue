<template>
    <div class="col-sm-6 col-lg-2 mt-2-6 wow fadeIn" :data-wow-delay="dataWowDelay">
        <div class="ps-sm-1-9 ps-lg-2-2 ps-xl-2-5">
            <h3 class="h5 mb-1-6 mb-lg-1-9 text-primary">{{ menu.title }}</h3>
            <ul class="footer-list-style1">
                <li v-for="(item, index) in menu.sub_footer_menu" :key="index">
                    <a :href="item.link">{{ item.title }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
    name: 'FooterMenu',
    props: {
        menu: {
            type: Object,
            required: true,
        },
        dataWowDelay: {
            type: String,
            required: true,
        },
    },
    setup() {
        const { t } = useI18n();
        return { t };
    },
};
</script>

<style scoped>
/* 添加您的样式 */
</style>