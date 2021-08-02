import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("dt-theme-provider")
export class ThemeProvider extends LitElement {
  static styles = css`
    :host {
      --font-mono: "Roboto Mono", monospace;
      --font-serif: "Inria Serif", serif;
      --color-gray: #6b6b6b;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}
