import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("dt-button")
export class Button extends LitElement {
  static styles = css`
    button {
      font-family: var(--font-mono);
    }
  `;

  @property()
  name?: string = "World";

  render() {
    return html`<button>i guess, ${this.name}!</button>`;
  }
}
