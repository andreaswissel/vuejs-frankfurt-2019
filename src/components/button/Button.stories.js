import { storiesOf } from "@storybook/vue";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import Button from "./Button.vue";

const stories = storiesOf("Button", module).addDecorator(withKnobs);

stories
  .add("Default", () => ({
    components: { Button },
    props: {
      label: {
        default: text("Label", "My button label")
      },
      isSecondary: {
        default: boolean("Secondary", false)
      }
    },
    template: `<Button :label="label" :class="{ secondary: isSecondary }" />`
  }))
  .add("Secondary", () => ({
    components: { Button },
    props: {
      label: {
        default: text("Label", "A secondary button")
      },
      isSecondary: {
        default: boolean("Secondary", true)
      }
    },
    template: `<Button :label="label" :class="{ secondary: isSecondary }" />`
  }));
