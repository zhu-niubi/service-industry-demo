<template>
    <li>
        <a href="javascript:void(0)" @click="navigate">{{ item.title }}</a>
        <ul v-if="item.submenu && item.submenu.length">
            <menu-item v-for="(subItem, subIndex) in item.submenu" :key="subIndex" :item="subItem" />
        </ul>
    </li>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    name: 'MenuItem',
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        const router = useRouter();

        const navigate = () => {
            router.push(props.item.link);
        };

        return {
            navigate
        };
    }
};
</script>