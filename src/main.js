import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


// Vue.directive('highlight',{
//   bind(el, binding, vnode) {
//     el.style.backgroundColor= 'green';

//   }
// });

Vue.directive('highlight',{
  bind(el, binding, vnode) {
    // el.style.backgroundColor= binding.value;
    // el.style.backgroundColor= 'green';
    if(binding.arg == 'background'){
      el.style.backgroundColor = binding.value;
    }
    else{
      el.style.color = binding.value;
    }


  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
