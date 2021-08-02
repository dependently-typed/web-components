import {LitElement, css, html} from "lit";
import { customElement } from "lit/decorators.js";

@customElement("dt-nav")
export class Nav extends LitElement {
  static styles = css`
    nav {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 8px 20%;
      align-items: center;
    }

    .left {
      justify-self: start;
    }

    .right {
      justify-self: end;
    }
  `;

  render() {
    return html`
      <nav>
        <div class="left">
          <slot name="left"></slot>
        </div>
        <div class="right">
          <slot name="right"></slot>
        </div>
      </nav>
    `;
  }
}
