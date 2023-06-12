import Component from "../core/Component";

class Input extends Component {
  template() {
    return `
      <input type="text" placeholder="텍스트 입력" class="input" />
    `;
  }

  mounted() {
    const { addItem } = this.props;
    document.querySelector(".input").addEventListener(
      "keyup",
      ({ key, target }) => {
        if (key !== "Enter") return;
        addItem(target.value);
      },
      false
    );
  }
}

export default Input;
