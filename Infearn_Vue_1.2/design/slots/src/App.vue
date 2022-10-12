<template>
  <div>
    <ul>
      <!-- <item>아이템 1</item>
      <item>아이템 2</item>
      <item>아이템 3</item>
      <item>아이템 4</item>
      <item>아이템 5</item> -->
      <!-- <item v-for="item in items" :propsdata="item"></item> -->
      <!-- <item v-for="item in items">{{ item }}</item> -->
      <item> 아이템1 </item>
      <item> 아이템 2 <button>click me</button> </item>
      <item>
        <div>아이템 3</div>
        <img
          src="./assets/endgame.png"
          alt="어벤져스 앤드게임"
          width="50px"
          height="50px"
        />
      </item>
      <item><div style="color: blue; font-size: 20px">아이템 4</div></item>
    </ul>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  components: {
    Item,
  },
  data() {
    return {
      items: ["아이템 1", "아이템 2", "아이템 3", "아이템 4", "아이템 5"],
    };
  },
};
</script>
