import Component from "./core/Component";
import InputForm from "./components/InputForm";

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
    const { addItem } = this;
    const inputFormWrap = document.querySelector(".input-form-wrap");

    new InputForm(inputFormWrap, {
      addItem: addItem.bind(this),
    });
  }

  addItem(value) {
    console.log(value);
  }
}

export default App;
