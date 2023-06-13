import Component from "./core/Component.js";
import InputForm from "./components/InputForm.js";
import getUniqueId from "./utils/getUniqueId.js";
import TodoList from "./components/TodoList.js";

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
    const { addItem, removeItem } = this;
    const inputFormWrap = document.querySelector(".input-form-wrap");
    const contentWrap = document.querySelector(".content-wrap");

    new InputForm(inputFormWrap, {
      addItem: addItem.bind(this),
    });

    new TodoList(contentWrap, {
      data: this.state.data,
      removeItem: removeItem.bind(this),
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

  removeItem(id) {
    const { data } = this.state;

    this.setState({
      data: data.filter((item) => item.id !== id),
    });
  }
}

export default App;
