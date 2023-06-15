import Component from "../core/Component.js";
import debounce from "../utils/debounce.js";

class Input extends Component {
  template() {
    return `
      <input type="text" placeholder="텍스트 입력" autofocus class="input" />
    `;
  }

  mounted() {
    const { onkeyup, onchange } = this.props;
    const textInput = document.querySelector(".input");

    const debouncedOnChange = debounce((value) => {
      onchange(value);
    });

    textInput.addEventListener(
      "keyup",
      ({ key, target }) => {
        if (key === "Enter") onkeyup();
        else {
          debouncedOnChange(target.value);
        }
      },
      false
    );
  }
}

export default Input;
