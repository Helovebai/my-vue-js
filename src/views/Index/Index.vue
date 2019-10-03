<template>
    <div class="home">
        <my-component/>
    </div>
</template>

<script>
import myComponent from '@/components/component.vue';

export default {
    name: 'home',
    components: {
        myComponent,
    },
};
</script>
