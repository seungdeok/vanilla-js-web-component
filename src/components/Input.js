import Component from "../core/Component";

class Input extends Component {
  template() {
    return `
      <input type="text" placeholder="텍스트 입력" class="input" />
    `;
  }

  mounted() {
    const { onkeyup, onchange } = this.props;
    const textInput = document.querySelector(".input");

    textInput.addEventListener(
      "keyup",
      ({ key, target }) => {
        if (key !== "Enter") return;
        onkeyup(target.value);
      },
      false
    );

    textInput.addEventListener(
      "change",
      (e) => {
        onchange(e.target.value);
      },
      false
    );
  }
}

export default Input;