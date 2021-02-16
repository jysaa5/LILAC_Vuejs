<template>
    <div>
        <section>
            <!-- 질문 상세 정보 -->
            <div>
                User
            </div>
            <div>
                <router-link :to="`/user/${fetchedItem.user}`">
                {{ fetchedItem.user }}
                </router-link>
                <div>
                    {{fetchedItem.time_ago}}
                </div>
            </div>
            <h2>{{fetchedItem.title}}</h2>
        </section>
        <section>
            <!-- 질문 댓글 -->
        </section>
        <!-- {{this.$store.state.item}} -->
        <!-- <p>{{this.$store.state.item.title}}</p>
        <div>{{this.$store.state.item.content}}</div> -->
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    computed:{
        ...mapGetters(['fetchedItem']),
    },
    created(){
        const itemId = this.$route.params.id;
        console.log(itemId);
        this.$store.dispatch('FETCH_ITME', itemId);
    }
}
</script>
<style>
</style>