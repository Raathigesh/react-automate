import ClickElement from "./ClickElement";
import TypeElement from "./TypeElement";

export default class PageElement {
  constructor(props, root) {
    this.root = root;
    this.url = props.url;

    this.actions = [];
  }

  appendInitialChild(child) {
    if (child instanceof ClickElement) {
      this.actions.push({
        type: "click",
        selector: child.selector
      });
    } else if (child instanceof TypeElement) {
      this.actions.push({
        type: "type",
        selector: child.selector,
        text: child.text
      });
    }
  }

  commitMount() {
    this.root.execute({
      url: this.url,
      actions: this.actions
    });
  }
}
