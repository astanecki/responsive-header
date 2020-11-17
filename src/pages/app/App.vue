<template>
    <div class="fifa-interview-task1">
        <span class="fifa-interview-task1__header">
            Task {{ taskNumber }} - {{ headerLabel }}
        </span>
        <Header />
    </div>
</template>
<script>
import Header from '@src/design/patterns/header/Header';

export default {
    data() {
        return {
            headerLabel: 'Responsive header',
            taskNumber: 1,
        };
    },

    components: {
        Header,
    }
}
</script>
<style lang="scss" scoped>
.fifa-interview-task1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 50px;

    &__header {
        font-size: 20px;
        margin-bottom: 25px;
    }
}
</style>