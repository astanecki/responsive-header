<template>
    <div class="additional-tournament-info">
        <PeriodsRow :periods="periods" />
        <TournamentDetails />
    </div>
</template>
<script>
import PeriodsRow from '@src/design/patterns/periodsRow/PeriodsRow';
import TournamentDetails from '@src/design/patterns/tournamentDetails/TournamentDetails';

const PERIODS = [
    {
        id: 1,
        label: 'Years',
    }, {
        id: 2,
        label: 'Months',
    }, {
        id: 3,
        label: 'Days',
    }, {
        id: 4,
        label: 'Hours',
    }
];

export default {
    components: {
        PeriodsRow,
        TournamentDetails,
    },

    data() {
        return {
            periods: PERIODS,
        };
    },
}
</script>
<style lang="scss" scoped>
.additional-tournament-info {
    @import '@src/assets/scss/variables.scss';
    @import '@src/assets/scss/mixins.scss';

    padding: 10px;
    background-color: $silver;

    display: flex;
    flex-direction: column;

    @include bp(wide) {
        width: 350px;
    }
}
</style>