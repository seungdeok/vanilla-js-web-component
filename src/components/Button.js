import Component from "../core/Component.js";

class Button extends Component {
  template() {
    const { label } = this.props;
    return `
      <button type="button" class="button">
        ${label}
      </button>
    `;
  }

  mounted() {
    const { onclick } = this.props;
    const labelButton = document.querySelector(".button");

    labelButton.addEventListener(
      "click",
      (e) => {
        e.preventDefault();
        onclick();
      },
      false
    );
  }
}

export default Button;
