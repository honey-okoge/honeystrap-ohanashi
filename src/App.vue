<template>
  <div id="app" class="col-md-8">
    <Idols/>
    <faces/>
    <TextForm/>
    <Results/>
  </div>
</template>

<script>
import Idols from './components/Idols.vue'
import Faces from './components/Faces.vue'
//import List from './components/List.vue'
import Results from './components/Results.vue'
import TextForm from './components/TextForm.vue'
//import Tweet from './components/Tweet.vue'
import store from './components/store'
//import './static/ohanashi.css'


export default {
  name: 'App',
  components: {
    Idols,
    Faces,
    TextForm,
    Results
  },
  created() {
    store.on('idols-updated', (idols) => {
        store.selectIdol(idols.find((idol) => idol.id === 'chizuru'));
    });
    store.fetchIdols();
  }
}
</script>

<style>

</style>
