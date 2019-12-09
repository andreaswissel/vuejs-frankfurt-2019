<template>
    <button :style="buttonStyles" v-bind:class="{ secondary: isSecondary }">
        {{ label }}
    </button>
</template>

<script>
  import * as buttonStyles from "./Button.css";

  export default {
    name: "Button",
    data() {
      return { buttonStyles }
    },
    props: {
      label: String,
      isSecondary: Boolean
    }
  };
</script>
