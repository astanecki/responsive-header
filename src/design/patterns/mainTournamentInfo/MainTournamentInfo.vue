<template>
    <div class="main-tournament-info">
        <div class="main-tournament-info__header">
            <TrophyImage>Trophy Image</TrophyImage>
            <div class="main-tournament-info__tournament-name">
                <span class="main-tournament-info__name">{{ name }}</span>
            </div>
        </div>
        <div class="main-tournament-info__background-image">
            {{ background }}
        </div>
    </div>
</template>
<script>
import TrophyImage from '@src/design/elements/image/Image';

export default {
    components: {
        TrophyImage,
    },

    data() {
        return {
            name: 'Tournament name',
            background: 'Background image',
        };
    }
}
</script>
<style lang="scss" scoped>
.main-tournament-info {
    @import '@src/assets/scss/variables.scss';
    @import '@src/assets/scss/mixins.scss';

    display: flex;
    height: 100%;
    flex: 1;
    flex-direction: column;

    &__header {
        display: flex;
        background-color: $link-water;
    }

    &__tournament-name {
        position: relative;
        width: 100%;
    }

    &__name {
        position: absolute;
        bottom: 10px;
        width: 100%;
        font-size: 20px;
        margin-left: 10px;

        @include bp(standard) {
            font-size: 25px;
        }
    }

    &__background-image {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $danube;

        color: $white;
        font-size: 25px;
        font-weight: bold;
    }
}
</style>