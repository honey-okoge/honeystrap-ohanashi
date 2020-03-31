<template>
  <div><section v-if="isReady">
      <h2>せりふを考える</h2>
      <form @submit="addParagraph">
        <div class="scenario">
          <div class="paragraph">
            <img :src="image" class=face>
            <div class="fukidashi">
              <p class="name" v-if="idol">{{idol.name}}</p>
              <pre class="serifu">{{text}}</pre>
            </div>
          </div>
        </div>
        <p><textarea v-model="text" rows=2 cols=60></textarea></p>
        <p><button class="btn btn-default">↓追加↓</button></p>
      </form>
    </section>
  </div>
</template>
<script>
//import Vue from 'vue';
import store from './store'

export default {
  name: 'form-text',
  data() {
    return { idol: null, image: null, text: '' };
  },
  created() {
    store.on('idol-selected', this.onIdolSelected);
    store.on('image-selected', this.onImageSelected);
    //this.$eventHub.$on('idol-selected', this.onIdolSelected);
    //this.$eventHub.$on('image-selected', this.onImageSelected);
  },
  destroyed() {
    store.removeListener('idol-selected', this.onIdolSelected);
    store.removeListener('image-selected', this.onImageSelected);
  },
  computed: {
    isReady() {
      return this.idol !== null && this.image !== null;
    }
  },
  methods: {
    addParagraph(event) {
      event.preventDefault();
      store.addParagraph(this.idol, this.image, this.text);
      this.text = '';
    },
    onIdolSelected(idol) {
      this.idol = idol;
      if (!this.text) { this.text = idol['default_text']; }
    },
    onImageSelected(url) {
      this.image = url;
    }
  }
}
</script>
