import Component from "../core/Component.js";
import debounce from "../utils/debounce.js";

class Input extends Component {
  template() {
    return `
      <input
        type="text"
        placeholder="텍스트 입력"\
        autofocus
        class="input"
        pattern="^([가-힣]){1,20}$"
        title="한글만 입력이 가능합니다."
        required
      />
    `;
  }

  handleChange(e) {
    const { onkeyup, onchange } = this.props;
    const debouncedOnChange = debounce((value) => {
      onchange(value);
    });

    const { key, target } = e;
    if (!RegExp(e.target.pattern).test(target.value)) {
      e.target.setCustomValidity("한글만 입력이 가능합니다.");
      return;
    }

    if (key === "Enter") onkeyup();
    else {
      debouncedOnChange(target.value);
    }
  }

  mounted() {
    const textInput = document.querySelector(".input");

    textInput.addEventListener("keyup", (e) => this.handleChange(e), false);
  }

  unmount() {
    const textInput = document.querySelector(".input");

    textInput.removeEventListener("keyup", (e) => this.handleChange(e));
  }
}

export default Input;
