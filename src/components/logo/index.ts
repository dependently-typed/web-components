import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { Logo as img } from "./logo";

@customElement("dt-logo")
export class Logo extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      height: 40px;
    }

    img {
      height: 100%;
    }
  `;

  render() {
    return html` <img src=${img} alt="dependently-typed logo" /> `;
  }
}
