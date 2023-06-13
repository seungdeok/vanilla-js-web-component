import Component from "../core/Component.js";

class TodoList extends Component {
  template() {
    const { data } = this.props;
    return `
      <ul>
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

  mounted() {}
}

export default TodoList;
