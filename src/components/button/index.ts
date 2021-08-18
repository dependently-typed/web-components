import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("dt-button")
export class Button extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    button {
      cursor: pointer;
      padding: var(--size-xs);
    }
  `;

  @property()
  name?: string = "World";

  render() {
    return html`<button>i guess, ${this.name}!</button>`;
  }
}
