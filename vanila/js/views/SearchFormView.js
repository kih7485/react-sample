import { on, qs } from "../helpers.js";
import View from "./View.js";

const tag = "[SearchFormView]";
export default class SearchFormView extends View {
  constructor() {
    super(qs("#search-form-view"));

    this.inputElement = qs("[type=text]", this.element);
    this.resetElement = qs("[type=reset]", this.element);
    this.showResetButton(false);
    this.bindEvnet();
  }
  showResetButton(visible = true) {
    this.resetElement.style.display = visible ? "block" : "none";
  }
  bindEvnet() {
    on(this.inputElement, "keyup", () => {
      this.handleKeyUp();
    });
    on(this.element, "submit", (event) => this.handleSubmit(event));

    on(this.resetElement, "click", () => {
      this.handleReset();
    });
  }

  handleKeyUp() {
    const { value } = this.inputElement;
    value.length === 0
      ? this.handleReset()
      : this.showResetButton(value.length > 0);
  }
  handleSubmit(event) {
    event.preventDefault();

    console.log(tag, "handleSubmit");
    const { value } = this.inputElement;
    this.emit("@submit", { value });
  }
  handleReset() {
    this.showResetButton(false);
    this.emit("@reset");
  }
  show(value = "") {
    this.inputElement.value = value;
    this.showResetButton(this.inputElement.value.length > 0);
    super.show();
  }
}
