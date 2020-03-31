<template id=faces-template>
  <div>
    <section v-if="idol">
      <h2>表情を選ぶ</h2>

      <div class="tab-content">
        <div class="tab-pane active">
          <span v-for="(url,key) in idol.images" :key="key">
            <img :src="url" alt="" @click="select(url)" class="face select">
          </span>
        </div>
      </div>
   </section>
  </div>
</template>

<script>
import store from "./store"
export default {
  name: 'faces',
  template: '#faces-template',
  data() {
    return { idol: null };
  },
  created() {
    store.on('idol-selected', this.onIdolSelected);
    //this.$eventHub.$on('idol-selected', this.onIdolSelected);
  },
  destroyed() {
    store.removeListener('idol-selected', this.onIdolSelected);
  },
  methods: {
    select(url) {
      store.selectImage(url);
    },
    onIdolSelected(idol) {
      this.idol = idol;
      this.select(idol.images[0]);
    }
  }
}
</script>
