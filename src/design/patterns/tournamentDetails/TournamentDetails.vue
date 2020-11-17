<template>
    <div class="tournament-details">
        <Label
            v-for="(label, index) in labels"
            :key="index"
        >
            {{ label }}
        </Label>

    </div>
</template>
<script>
import Label from '@src/design/elements/label/Label';

export default {
    components: {
        Label,
    },

    data() {
        return {
            labels: [
                'Tournament dates',
                'Number of teams',
                'Number of stadiums',
                'Current champion',
            ],
        };
    },
}
</script>