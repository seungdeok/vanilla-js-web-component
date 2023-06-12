import Component from "./core/Component";
import Input from "./components/Input";

class App extends Component {
  setup() {
    this.state = { data: [] };
  }

  template() {
    return `
      <div>
        <div class="input-wrap"></div>
        <div class="content-wrap"></div>
      </div>
    `;
  }

  mounted() {
    const { addItem } = this;
    const inputWrap = document.querySelector(".input-wrap");

    new Input(inputWrap, {
      addItem: addItem.bind(this),
    });
  }

  addItem(value) {
    console.log(value);
  }
}

export default App;
