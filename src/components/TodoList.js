import Component from "../core/Component.js";

class TodoList extends Component {
  template() {
    const { data } = this.props;
    return `
      <ul>
        ${data
          .map(
            (item) => `
          <li key='${item.id}'>${item.text}</li>
        `
          )
          .join("")}
      </ul>
    `;
  }

  mounted() {}
}

export default TodoList;
