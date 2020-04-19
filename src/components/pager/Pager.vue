<template>
    <div class="page">
        <span @click="changePage(1)" :class="this.current === 1?'item cannot':'item'">首页</span>
        <span @click="changePage(preNumber)" :class="this.current === 1?'item cannot':'item'">上一页</span>
        <span :key="item" @click="changePage(item)" :class="current===item?'item current':'item'" class="item"
              v-for="item of getPageArr">{{item}}</span>
        <span @click="changePage(nextNumber)" :class="this.current === getPageNumber?'item cannot':'item'">下一页</span>
        <span @click="changePage(getPageNumber)" :class="this.current === getPageNumber?'item cannot':'item'">尾页</span>
    </div>
</template>

<script>
    export default {
        name: "pager",
        props: {
            pageInfo: {
                type: Object,
                default() {
                    return {};
                }
            }
        },
        data() {
            return {
                current: this.pageInfo.current,
            }
        },
        computed: {
            preNumber() {
                return this.current === 1 ? 1 : this.current - 1;
            },
            nextNumber() {
                return this.current === this.getPageNumber ? this.getPageNumber : this.current + 1;
            },
            getPageNumber() {
                return Math.ceil(this.pageInfo.total / this.pageInfo.limit);
            },
            getMinNumber() {
                let min = this.current - Math.floor(this.pageInfo.panelpager / 2);
                if (min < 1) {
                    min = 1;
                }
                return min;
            },
            getMaxNumber() {
                let max = this.getMinNumber - 1 + this.pageInfo.panelpager;
                if (max > this.getPageNumber) {
                    max = this.getPageNumber;
                }
                return max;
            },
            getPageArr() {
                const pageArr = [];
                for (let i = this.getMinNumber; i <= this.getMaxNumber; i++) {
                    pageArr.push(i);
                }
                return pageArr;
            }
        },
        methods: {
            changePage(target) {
                this.current = target;

                this.$store.dispatch('getStudentList', target)
                .then(res=>{
                    if(res===false){
                        this.$store.dispatch('getStudentListByKey',{...this.$store.state.hasKey,target})
                    }
                })
            }
        },
        updated() {
            this.current = this.pageInfo.current
        }
    }
</script>

<style scoped>
    .item {
        padding: 6px 8px;
        border: 1px solid #ccc;
        margin: 2px;
    }

    .item.cannot {
        color: #ccc;
        cursor: not-allowed;
    }

    .item.current {
        color: #f90;
        border: none;
    }

    .page {
        user-select: none;
        margin: 20px 0;
        width: 450px;
        margin: 20px auto;
    }
</style>