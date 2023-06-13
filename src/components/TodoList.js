import Component from "../core/Component.js";

class TodoList extends Component {
  template() {
    const { data } = this.props;
    return `
      <ul class="list-wrap">
        ${data
          .map(
            (item) => `
          <li key='${item.id}'>
            <div>${item.text}</div>
            <button>삭제</button>
          </li>
        `
          )
          .join("")}
      </ul>
    `;
  }

  mounted() {
    const { removeItem } = this.props;
    const listWrap = document.querySelectorAll(".list-wrap li");

    for (const item of listWrap) {
      const button = item.querySelector("button");
      const key = item.getAttribute("key");
      button.addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          removeItem(key);
        },
        false
      );
    }
  }
}

export default TodoList;
