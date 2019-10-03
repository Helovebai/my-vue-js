<template>
    <div class="hello">
        <span>{{msg}}</span>
    </div>
</template>

<script>
import componentMixin from '../models/component';

export default {
    name: 'MyComponent',
    mixins: [componentMixin],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
