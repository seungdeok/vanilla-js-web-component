class Component {
  constructor(target, props = {}) {
    this.target = target;
    this.props = props;
    this.setup();
    this.render();
    this.mounted();
  }
  setup() {}
  template() {
    return "";
  }
  render() {
    this.target.innerHTML = this.template();
  }
  mounted() {}
  setState(newState) {
    let isRerender = false;
    for (const key in Object.keys(newState)) {
      if (this.state[key] === newState[key]) continue;
      isRerender = true;
    }

    if (!isRerender) return;

    this.state = { ...this.state, newState };
    this.render();
    this.mounted();
    this.updated();
  }
  updated() {}
}

export default Component;
