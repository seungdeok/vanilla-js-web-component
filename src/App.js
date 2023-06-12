import Component from "./core/Component";
import InputForm from "./components/InputForm";
import getUniqueId from "./utils/getUniqueId";

class App extends Component {
  setup() {
    this.state = { data: [] };
  }

  template() {
    return `
      <div>
        <div class="input-form-wrap"></div>
        <div class="content-wrap"></div>
      </div>
    `;
  }

  mounted() {
    const { addItem } = this;
    const inputFormWrap = document.querySelector(".input-form-wrap");

    new InputForm(inputFormWrap, {
      addItem: addItem.bind(this),
    });
  }

  addItem(value) {
    const { data } = this.state;
    const id = getUniqueId();

    this.setState({
      data: [
        ...data,
        {
          id,
          text: value,
        },
      ],
    });
  }
}

export default App;
