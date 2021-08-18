import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("dt-nav")
export class Nav extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          border-bottom: 2px solid black;
        }

        @media (max-width: 600px) {
          :host nav {
            padding: var(--size-xs) 10%; 
          }
        }

        nav {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          padding: var(--size-xs) 20%;
          align-items: center;
        }

        .left {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;
        }

        .right {}

        ul {
          display: flex;
          padding: 0px;
          list-style: none;
        }

        ul > ::slotted(li) {
          margin-left: var(--size-m);
        }

        [name=icon]::slotted(*) {
          height: 40px;
        }

        @media (max-width: 600px) {
          [name=icon]::slotted(*) {
            height: 30px;
          }
        }

        [name=title]::slotted(*) {
          font-weight: bold;
          font-family: var(--font-mono);
          margin-left: var(--size-xs);
          color: var(--color-black);
          font-size: var(--size-l);
        }

        [name=subtitle]::slotted(*) {
          font-family: var(--font-mono);
          margin-left: var(--size-xs);
          color: var(--color-gray);
        }

        [name=subtitle]::slotted(*)::before {
          content: '/';
        }

        [name=title]::slotted(a),
        [name=subtitle]::slotted(a) {
          text-decoration: none;
        }

        [name=title]::slotted(a:visited),
          color: var(--color-black);
        }

        [name=subtitle]::slotted(a:visited),
          color: var(--color-gray);
        }
      `
    ];
  }

  render() {
    return html`
      <nav>
        <div class="left">
          <slot name="icon"></slot>
          <slot name="title"></slot>
          <slot name="subtitle"></slot>
        </div>
        <div class="right">
          <ul>
            <slot></slot>
          </ul>
        </div>
      </nav>
    `;
  }
}
