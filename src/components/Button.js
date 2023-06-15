import Component from "../core/Component.js";

class Button extends Component {
  template() {
    const { label, id } = this.props;
    return `
      <button type="button" class="button_${id}">
        ${label}
      </button>
    `;
  }

  mounted() {
    const { onclick, id } = this.props;
    const labelButton = document.querySelector(`.button_${id}`);

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
