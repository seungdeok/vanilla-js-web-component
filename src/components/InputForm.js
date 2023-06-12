import Component from "../core/Component";
import Input from "./Input";
import Button from "./Button";

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
    const { addItem, onchange } = this.props;
    const inputWrap = document.querySelector(".input-wrap");
    const buttonWrap = document.querySelector(".button-wrap");

    new Input(inputWrap, {
      onkeyup: addItem,
      onchange,
    });

    new Button(buttonWrap, {
      onclick: addItem,
      label: "추가",
    });
  }
}

export default InputForm;
