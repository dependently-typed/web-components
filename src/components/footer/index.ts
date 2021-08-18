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

    ul {
      display: flex;
      list-style: none;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 0px;
    }

    ul > ::slotted(li) {
      margin: 0px 8px;
    }
  `;

  render() {
    return html`
      <footer>
        <ul>
          <slot></slot>
        </ul>
      </footer>
    `;
  }
}
