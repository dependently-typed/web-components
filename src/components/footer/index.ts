import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("dt-footer")
export class Footer extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    footer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `;

  render() {
    return html`
      <footer>
        <slot></slot>
      </footer>
    `
  }
}
