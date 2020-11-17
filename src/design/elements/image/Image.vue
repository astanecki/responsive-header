<template functional>
    <div class="image">
        <slot />
    </div>
</template>
<style lang="scss" scoped>
.image {
    @import '@src/assets/scss/variables.scss';
    @import '@src/assets/scss/mixins.scss';

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    width: 100px;
    height: 60px;

    border-right: 1px solid $nepal;
}
</style>