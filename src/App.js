import Component from "./core/Component.js";
import InputForm from "./components/InputForm.js";
import getUniqueId from "./utils/getUniqueId.js";
import TodoList from "./components/TodoList.js";

class App extends Component {
  setup() {
    this.state = { data: [], text: "" };
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
    const { addItem, removeItem, changeText } = this;
    const inputFormWrap = document.querySelector(".input-form-wrap");
    const contentWrap = document.querySelector(".content-wrap");

    new InputForm(inputFormWrap, {
      changeText: changeText.bind(this),
      addItem: addItem.bind(this),
    });

    new TodoList(contentWrap, {
      data: this.state.data,
      removeItem: removeItem.bind(this),
    });
  }

  changeText(value) {
    this.setState(
      {
        text: value,
      },
      false
    );
  }

  addItem() {
    const { data, text } = this.state;
    const id = getUniqueId();

    this.setState({
      data: [
        ...data,
        {
          id,
          text,
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
