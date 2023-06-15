import Component from "../core/Component.js";
import intersectionObserver from "../utils/intersectionObserver.js";

class TodoList extends Component {
  template() {
    const { data } = this.props;
    return `
      <ul class="list-wrap">
        ${data
          .map(
            (item, idx) => `
          <li key='${item.id}' class='${
              idx === data.length - 1 ? "last-item" : ""
            }'>
            <div>${item.text}</div>
            <button>삭제</button>
          </li>
        `
          )
          .join("")}
      </ul>
    `;
  }

  handleClick(e, key) {
    const { removeItem } = this.props;
    e.preventDefault();
    removeItem(key);
  }

  mounted() {
    const listWrap = document.querySelectorAll(".list-wrap li");

    for (const item of listWrap) {
      const button = item.querySelector("button");
      const key = item.getAttribute("key");
      button.addEventListener("click", (e) => this.handleClick(e, key), false);
    }

    intersectionObserver.detectScroll(
      {},
      document.querySelectorAll(".last-item"),
      () => console.log("detect")
    );
  }

  unmount() {
    const listWrap = document.querySelectorAll(".list-wrap li");

    for (const item of listWrap) {
      const button = item.querySelector("button");
      const key = item.getAttribute("key");
      button.removeEventListener("click", (e) => this.handleClick(e, key));
    }
  }
}

export default TodoList;
