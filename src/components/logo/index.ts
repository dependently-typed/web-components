import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { Logo as img } from "./logo";

@customElement("dt-logo")
export class Logo extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }
  `;

  @property()
  height: string = "40px";
  
  render() {
    return html` <img 
      src=${img} 
      alt="dependently-typed logo"
      style=${styleMap({ "height": this.height })}
    /> `;
  }
}
