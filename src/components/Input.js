import Component from "../core/Component.js";

class Input extends Component {
  template() {
    return `
      <input type="text" placeholder="텍스트 입력" class="input" />
    `;
  }

  mounted() {
    const { onkeyup } = this.props;
    const textInput = document.querySelector(".input");

    textInput.addEventListener(
      "keyup",
      ({ key, target }) => {
        if (key !== "Enter") return;
        onkeyup(target.value);
      },
      false
    );
  }
}

export default Input;
