<template>
    <pager :pageInfo="pageInfo"></pager>
</template>

<script>
    import Pager from "./Pager";

    export default {
        name: "PagerControl",
        computed: {
            pageInfo() {
                return {
                    current: this.$store.state.current,
                    limit: this.$store.state.size,
                    total: this.$store.state.count,
                    panelpager: 5
                }
            }
        },
        components: {
            Pager
        },
    }
</script>

<style scoped>

</style>