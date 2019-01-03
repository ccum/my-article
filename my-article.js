import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js'
/**
 * `my-article`
 * my aticle
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MyArticle extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        .article{
          display:block;     
          width: 25%;
          background-color: #fff;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);     
          text-align: center;      
          padding: 1%;       
          margin:1%;
        }
      </style>
      <div class="article">
        <h2>[[title]]</h2>
        <p>[[content]]</p>
        <paper-button>[[btn]]</paper-button>
      </div>
    `;
  }
  static get properties() {
    return {
      title: {
        type: String,
        value: 'Title',
      },
      content:{
        type: String,
        value: 'Content'
      },
      btn:{
        type: String,
        value: 'More'
      }
    };
  }
}

window.customElements.define('my-article', MyArticle);
