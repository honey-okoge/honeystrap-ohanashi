<template id=idols-template>
   <section>
     <h2>メンバを選ぶ</h2>

     <div class="form-inline">
       <span>
         <label><input name=type type=radio v-model="search.type" value="">All</label>
         <label><input name=type type=radio v-model="search.type" value="honeystrap">HoneyStrap</label>
         <label><input name=type type=radio v-model="search.type" value="SugarLilic">SugarLilic</label>
         <label><input name=type type=radio v-model="search.type" value="vi">Vi</label>
         <label><input name=type type=radio v-model="search.type" value="ex">Ex</label>
       </span>
       <label>
         <input type=search size=20 v-model="searchText" placeholder="にかいどう" class="form-control">
       </label>
    </div>
    <ul class="nav nav-pills">
      <li v-for="(idol,key) in filteredIdols" :key="key"
      @click="select(idol)"
          :class="{active: selectedIdol === idol}">
       <a>
         <img class="face icon select" :src="idol.images[0]">
       </a>
      </li>
    </ul>
   </section>
</template>

<script>
import store from './store';

export default {
  name: 'Idols',
  data() {
    return {
      idols: [],
      // TODO: searchType で良いと思う
      search: {type: ''},
      searchText: '',
      selectedIdol: null//,
    };
  },
  created() {
    store.on('idols-updated', this.onIdolsUpdated);
    store.on('idol-selected', this.onIdolSelected);
  },
  destroyed() {
    store.removeListener('idols-updated', this.onIdolsUpdated);
    store.removeListener('idol-selected', this.onIdolSelected);
  },
  methods: {
    select(idol) {
      store.selectIdol(idol);
    },
    onIdolsUpdated(idols) {
      this.idols = idols;
    },
    onIdolSelected(idol) {
      this.selectedIdol = idol;
    },
  },
  filters: {
    search(idols) {
      return idols.filter((idol) => {
        if (this.search.type && idol.type !== this.search.type) { return false; }
        return idol.name.includes(this.searchText) ||
          idol.yomi.includes(this.searchText);
      });
    },
  },
  computed: {
      filteredIdols: function() {
        var self = this;
        return self.idols.filter((idol) => {
         if (this.search.type && idol.type !== this.search.type) { return false; }
         return idol.name.includes(this.searchText) ||
          idol.yomi.includes(this.searchText);
        });
      }
  }
}
</script>
