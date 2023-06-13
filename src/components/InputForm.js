import Component from "../core/Component.js";
import Input from "./Input.js";
import Button from "./Button.js";

class InputForm extends Component {
  template() {
    return `
      <div>
        <div class="input-wrap"></div>
        <div class="button-wrap"></div>
      </div>
    `;
  }

  mounted() {
    const { addItem, changeText } = this.props;
    const inputWrap = document.querySelector(".input-wrap");
    const buttonWrap = document.querySelector(".button-wrap");

    new Input(inputWrap, {
      onkeyup: addItem,
      onchange: changeText,
    });

    new Button(buttonWrap, {
      onclick: addItem,
      label: "추가",
    });
  }
}

export default InputForm;
