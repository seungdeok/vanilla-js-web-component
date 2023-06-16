import Component from "../core/Component.js";
import Input from "./Input.js";
import Button from "./Button.js";

class InputForm extends Component {
  template() {
    return `
      <form>
        <div class="input-wrap"></div>
        <div class="button-wrap"></div>
      </form>
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
      id: "form-button",
      onclick: addItem,
      label: "추가",
    });
  }
}

export default InputForm;
