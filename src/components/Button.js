import Component from "../core/Component.js";

class Button extends Component {
  template() {
    const { label, id } = this.props;
    return `
      <button type="submit" class="button_${id}">
        ${label}
      </button>
    `;
  }

  handleClick(e) {
    const { onclick } = this.props;
    e.preventDefault();
    onclick();
  }

  mounted() {
    const { id } = this.props;
    const labelButton = document.querySelector(`.button_${id}`);

    labelButton.addEventListener("submit", (e) => this.handleClick(e), false);
  }

  unmount() {
    const { id } = this.props;
    const labelButton = document.querySelector(`.button_${id}`);
    labelButton.removeEventListener("submit", (e) => this.handleClick(e));
  }
}

export default Button;
