import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("dt-theme-provider")
export class ThemeProvider extends LitElement {
  static get styles() {
    const rampDown = [0.75, 0.5, 0.25];
    const rampUp = [1.25, 1.5, 2, 4, 8];

    const rampDownStyles = rampDown
      .map(
        (multiplier, idx) => `
          --size-${"x".repeat(idx)}s: calc(var(--base-unit) * ${multiplier});
      `
      )
      .join("");

    const rampUpStyles = rampUp
      .map(
        (multiplier, idx) => `
          --size-${"x".repeat(idx)}l: calc(var(--base-unit) * ${multiplier});
      `
      )
      .join("");

    return [
      css`
        :host {
          --font-mono: "Roboto Mono", monospace;
          --font-serif: "Inria Serif", serif;
          --color-gray: #6b6b6b;
          --color-black: black;
          --base-unit: 16px;

          ${unsafeCSS(rampDownStyles)}
          --size-m: var(--base-unit);
          ${unsafeCSS(rampUpStyles)}

          font-family: var(--font-serif);
          font-size: var(--size-m);
        }

        @media (max-width: 600px) {
          :host {
            --base-unit: 14px;
          }
        }

        @media (max-width: 400px) {
          :host {
            --base-unit: 12px;
          }
        }
      `,
    ];
  }

  render() {
    return html`<slot></slot>`;
  }
}
