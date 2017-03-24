let Vue = require("./js/vendor/vue.min.js");
let app2 = new Vue({
  el: '#app-2',
  data: {
    message: "v-bind message"
  }
});

// 
// ======================================================/
var store = {
  debug: true,
  state: {
    message: 'Hello!'
  },
  getStoreMessage () {
    return this.state.message;
  },
  setStoreMessage (newValue) {
    this.state.message = newValue;
  },
  clearStoreMessage () {
    this.state.message = '';
  }
};

var vmA = new Vue({
  el: '#app1',
  data: {
    privateState: {},
    sharedState: store.state,
    message: ''
  },
  methods: {
    test: function() {
      this.message = this.sharedState.message;
    }
  }
});

var vmB = new Vue({
  el: '#app2',
  data: {
    privateState: {},
    sharedState: store.state,
    message: ''
  },
  methods: {
    test: function() {
      this.message = this.sharedState.message;      
    }
  }
});

vmA.test();
vmB.test();

// todo:
// ======================================================/
// add functions for set/clear/retrieve

