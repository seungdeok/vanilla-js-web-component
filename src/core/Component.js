class Component {
  constructor(target, props = {}) {
    this.target = target;
    this.props = props;
    this.setup();
    this.render();
    this.mounted();

    window.onbeforeunload = () => {
      this.unmount();
    };
  }
  setup() {}
  template() {
    return "";
  }
  render() {
    this.target.innerHTML = this.template();
  }
  mounted() {}
  setState(newState, shouldUpdate = true) {
    let isRerender = false;
    for (const key of Object.keys(newState)) {
      if (this.state[key] !== newState[key]) {
        isRerender = true;
        break;
      }
    }

    if (!isRerender) return;

    this.state = { ...this.state, ...newState };

    if (shouldUpdate) {
      this.render();
      this.mounted();
      this.updated();
    }
  }
  updated() {}
  unmount() {}
}

export default Component;
