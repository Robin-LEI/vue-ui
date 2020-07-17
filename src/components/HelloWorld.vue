<template>
  <div>
    <myform></myform>
  </div>
</template>

<script>
import myform from "../examples/ed-form"
export default {
  name: 'HelloWorld',
  components: {
    myform
  },
  props: {
    msg: String
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  /* padding: 0; */
}

</style>
