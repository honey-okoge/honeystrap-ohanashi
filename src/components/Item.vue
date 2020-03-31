<template>
  <div class="paragraph">
    <img :src="image" class=face>
    <div class="fukidashi">
      <p class="name" v-if="idol">{{idol.name}}</p>
      <pre class="serifu">{{text}}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'item',
  props: {
    idol: {default: ()=>null},
    image: {default: ()=>null},
    text: {default: ()=>''}
  }
}
</script>
