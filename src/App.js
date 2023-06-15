import Component from "./core/Component.js";
import InputForm from "./components/InputForm.js";
import TodoList from "./components/TodoList.js";
import Button from "./components/Button.js";
import getUniqueId from "./utils/getUniqueId.js";
import localstorage from "./utils/localstorage.js";

class App extends Component {
  setup() {
    this.state = {
      data: [],
      text: "",
      isDarkMode: window.matchMedia("(prefers-color-scheme: dark)").matches
        ? true
        : false,
    };
  }

  template() {
    return `
      <div>
        <div class="toggle-wrap"></div>
        <div class="input-form-wrap"></div>
        <div class="content-wrap"></div>
      </div>
    `;
  }

  mounted() {
    const { isDarkMode } = this.state;
    const { addItem, removeItem, changeText, changeTheme } = this;
    const toggleWrap = document.querySelector(".toggle-wrap");
    const inputFormWrap = document.querySelector(".input-form-wrap");
    const contentWrap = document.querySelector(".content-wrap");

    window.onload = (event) => {
      const list = localstorage.get("data");

      if (list) {
        this.setState({
          data: list,
        });
      }
    };

    new Button(toggleWrap, {
      id: "toggle-button",
      label: isDarkMode ? "🌙" : "🌞",
      onclick: changeTheme.bind(this),
    });

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

    console.log("call");
  }

  removeItem(id) {
    const { data } = this.state;

    this.setState({
      data: data.filter((item) => item.id !== id),
    });
  }

  updated() {
    const { data } = this.state;
    localstorage.set("data", data);
  }

  changeTheme() {
    const { isDarkMode } = this.state;
    if (!isDarkMode) {
      document.documentElement.setAttribute("color-theme", "dark");
    } else {
      document.documentElement.setAttribute("color-theme", "light");
    }
    this.setState({
      isDarkMode: !isDarkMode,
    });
  }
}

export default App;
