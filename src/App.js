import Component from "./core/Component";

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

  mounted() {}
}

export default App;
