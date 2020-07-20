<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Build-in Directive</h1>
        <p v-text="'some text here '"></p>
        <p v-html="'<strong>Some strong text here</strong> '"></p>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 v-highlight:background="'red'">Custom Directive</h1>
        <h1 v-localhighlight:background.delayed.blink="{mainColor:'red', secondColor:'pink', delay:1000}">
          Custom Directive
        </h1>
        <p v-text="'some text here '"></p>
        <p v-html="'<strong>Some strong text here</strong> '"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    localhighlight: {
      bind(el, binding, vnode) {
        var delay = 0;

        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);
              if (binding.arg == "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);
          }, binding.value.delay);
        } else {
          setTimeout(() => {
            if (binding.arg == "background") {
              el.style.backgroundColor = binding.value.mainColor;
            } else {
              el.style.color = binding.value.mainColor;
            }
          }, delay);
        }
      },
    },
  },
};
</script>

<style></style>
