<template>
    <div class="periods-row">
        <div
            class="periods-row__period"
            v-for="period in periods"
            >
            {{ period.label }}
        </div>
    </div>
</template>
<script>
export default {
    props: {
        periods: {
            type: Array,
            required: true,
        }
    }
}
</script>
<style lang="scss" scoped>
.periods-row {
    @import '@src/assets/scss/variables.scss';
    @import '@src/assets/scss/mixins.scss';

    display: flex;
    flex-wrap: wrap;

    height: 50px;
    border: 1px solid $smalt-blue;
    margin-bottom: 15px;
    font-size: 17px;

    @include bp(standard) {
        font-size: 15px;
        width: 250px;
        justify-content: space-evenly;
    }

    @include bp(wide) {
        width: unset;
    }

    &__period {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        font-weight: bold;
        cursor: pointer;
        color: white;
        border: 1px solid $smalt-blue;
        background-color: $dove-gray;

        &:hover {
            background-color: $scorpion;
        }
    }
}
</style>