<template>
  <section>
    <h2>できあがり</h2>
    <p><label><input type=checkbox v-model="editting">編集モード</label></p>
    <section v-show="editting">
      <List v-show="editting"/>
    </section>
    <section v-show="!editting">
      <og-canvas ref="canvas"></og-canvas>
      <p>
      長押しや右クリックで画像を保存してお楽しみください。
      </p>
      <p>
        <!--
        <button @click="open" class="btn btn-default">
          保存できないので画像だけを表示してみる
        </button>
        -->
      </p>
      <p>
        <!--
        <a href="https://twitter.com/intent/tweet?button_hashtag=ハニストおはなし&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-show-count="false">Tweet #ハニストおはなし</a>
        -->
        <!-- <button @click="twitterShare">ツイッターでシェアする</button> -->
      </p>
    </section>
  </section>    
</template>
<script>
import Vue from 'vue';
import store from './store';
import List from './List.vue'
export default {
  name: 'results',
  components: {
    List
  },
  data() {
    return { editting: false };
  },
  methods: {
    // できあがった画像のURLを別タブで開く
    open(event) {
      event.preventDefault();
      window.open(this.$refs.canvas.getUrl());
    },
    twitterShare(){
        //シェアする画面を設定
        var shareURL = 'https://twitter.com/intent/tweet?text=' + "テストツイート" + '&url=' + this.$refs.canvas.getUrl();
        //シェア用の画面へ移行
        location.href = shareURL
    }
  }
}

Vue.component('og-canvas', {
  template: '<canvas id="ohanashi" width=640 v-bind:height="height" style="width: 320px"></canvas>',
  replace: true,
  data() {
    return {
      paragraphs: [],
      unitHeight: 168,
      wakuUrl: 'images/11006e59e67.png',
      bgUrl: 'images/11002c9b1d8.png',
    };
  },
  created() {
    store.on('paragraphs-updated', (ps) => this.paragraphs = ps);
    //this.$eventHub.$on('paragraphs-updated', (ps) => this.paragraphs = ps);
    this.waku = new Image();
    this.waku.src = this.wakuUrl;
    this.bg = new Image();
    this.bg.src = this.bgUrl;
  },
  watch: {
    paragraphs(ps) {
      this.$nextTick(function(){

        let ctx = this.$el.getContext('2d');
        // 背景
        for (let y = 0; y < this.height; y += this.bg.height) {
          ctx.drawImage(this.bg, 0, y);
        }
        // せりふ
        ps.forEach((p, i) => {
          let y = i * this.unitHeight;
          // 顔
          drawImage(p.image, 8, 8 + y);
          // ふきだし
          ctx.drawImage(this.waku, 174, 8 + y);
          // なまえ
          ctx.font = 'bold 28px/35px "Arial", sans-serif';
          ctx.fillStyle = '#f33281';
          ctx.fillText(p.idol.name, 184, 42 + y);
          // せりふ
          ctx.fillStyle = 'black';
          let lines = wrapText(p.text, ctx, 428);
          lines.forEach((line, j) => {
            let ty = y + 76 + j * 35;
            ctx.fillText(line, 184, ty);
          });
        });
        function drawImage(url, x, y) {
            let i = new Image();
            i.src = url;
            i.onload = () => ctx.drawImage(i, x, y,152,152);
        }
      });
    }
  },
  computed: {
    height() {
      return this.paragraphs.length * this.unitHeight;
    },
  },
  methods: {
    // できあがった画像の data URL を返す
    getUrl() {
      let canvas = this.$el;
      // 可能なら blob にしたいがポップアップブロックされるのでこまった
      /*
      if (canvas.toBlob) {
        return new Promise((resolve, reject) => {
          // canvas が空だと blob が null になる
          canvas.toBlob((blob) => blob ? resolve(URL.createObjectURL(blob)) : reject());
        });
      }
      */
      return canvas.toDataURL();
    }
  }
});

function wrapText(text, ctx, width) {
  let lines = [];
  if (!text) { return lines; }
  for (let i = 1; i < text.length; ++i) {
    let metrics = ctx.measureText(text.substring(0, i));
    if (metrics.width > width) {
      lines.push(text.substring(0, i - 1));
      text = text.substring(i - 1);
      i = 0;
    }
  }
  lines.push(text);
  return lines;
}
</script>
