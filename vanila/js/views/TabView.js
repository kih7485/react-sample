import View from "./View.js";

export default class TabView extends View {
  constructor() {
    super(qs("#tab-view"));
    this.template = new Template();
  }
  show() {
    this.element.innerHTML = this.template.getTabList();
    super.show();
  }
  getTabList() {}
}

class Template {}
