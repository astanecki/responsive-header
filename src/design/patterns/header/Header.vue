<template>
    <div class="header">
        <MainTournamentInfo />
        <AdditionalTournamentInfo />
    </div>
</template>
<script>
import MainTournamentInfo from '@src/design/patterns/mainTournamentInfo/MainTournamentInfo';
import AdditionalTournamentInfo from '@src/design/patterns/additionalTournamentInfo/AdditionalTournamentInfo';

export default {
    components: {
        MainTournamentInfo,
        AdditionalTournamentInfo,
    }
}
</script>
<style lang="scss" scoped>
.header {
    @import '@src/assets/scss/variables.scss';
    @import '@src/assets/scss/mixins.scss';

    display: flex;
    flex-direction: column;

    max-width: 800px;
    width: 100%;
    height: 350px;
    border: 1px solid $nepal;

    @include bp(standard) {
        height: 180px;
        flex-direction: row;
    }
}
</style>