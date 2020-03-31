<template>
  <div class="scenario">
    <div v-for="(p,index) in paragraphs" :key="index">
      <div class="paragraph">
        <img :src="p.image" class=face>
        <div class="fukidashi">
          <p class="name" v-if="p.idol">{{p.idol.name}}</p>
          <pre class="serifu">{{p.text}}</pre>
        </div>
      </div>
      <div>
        <button class=btn type=button :disabled="index === 0"
                @click="moveup(index)">↑
        </button>
        <button class=btn type=button :disalbed="index + 1 === paragraphs.length"
                @click="movedown(index)">↓
        </button>
        <button class="btn btn-danger" type=button
         @click="remove(index)">削除
        </button>
      </div>
    </div>
  </div>
</template>

<script>
//import Vue from 'vue';
import store from './store';

export default {
  name: 'list',
  data() {
    return { paragraphs: [], };
  },
  created() {
    store.on('paragraphs-updated', (ps) => this.paragraphs = ps);
    //this.$eventHub.$on('paragraphs-updated', (ps) => this.paragraphs = ps);
  },
  methods: {
    moveup(i) {
      store.swapParagraphs(i, i - 1);
    },
    movedown(i) {
      store.swapParagraphs(i, i + 1);
    },
    remove(i) {
      store.removeParagraph(i);
    }
  }
}
</script>
