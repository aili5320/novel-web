<template>
  <div>
    <authorLoginVue></authorLoginVue>
  </div> 
</template>

<script>
import authorLoginVue from '@/components/author/authorLogin.vue'
export default {
   // eslint-disable-next-line vue/multi-word-component-names
   name:'author',
   components:{
    authorLoginVue,
   }
}
</script>

<style>

</style>