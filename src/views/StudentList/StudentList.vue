<template>
    <div class="student-list">
        <student-search/>
        <student-table/>
        <pager-control/>
        <transition>
            <student-modal v-if="this.$store.state.showModal"/>
        </transition>
    </div>
</template>

<script>
    import StudentSearch from "./StudentSearch";
    import StudentTable from "./StudentTable";
    import PagerControl from "../../components/pager/PagerControl";
    import StudentModal from "./StudentModal";

    export default {
        name: "StudentList",
        components: {
            StudentSearch,
            StudentTable,
            PagerControl,
            StudentModal
        }
    }
</script>

<style scoped>
    .student-list {
        width: calc(100% - 200px);
        float: right;
        padding: 20px;
        box-sizing: border-box;
        overflow: hidden;
    }

    .v-enter, .v-leave-to {
        transform: translateY(-100px);
        opacity: 0;
    }

    .v-leave, .v-enter-to {
        transform: translateY(0px);
        opacity: 1;
    }

    .v-enter-active, .v-leave-active {
        transition: all .5s;
    }
</style>