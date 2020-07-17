<template>
  <div>
    <search>
    </search>
  </div>
</template>

<script>
import Search from "../examples/ed-search"
export default {
  name: 'HelloWorld',
  components: {
    Search
  },
  props: {
    msg: String
  },
  data() {
    return {

    }
  },
  methods: {
    onClick(e) {
      console.log(e.target)
      console.log(e.currentTarget)
    },
    onFocus() {
      console.log('onFocus')
    },
    changeValue(val) {
      console.log(val)
    },
    handleClick(tab, event) {
        console.log(tab, event);
      }
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
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.clampbox {
  width: 300px;
}

.tooltip {
  height: 100px;
}
.test-select {
  width: 300px;
}
</style>
