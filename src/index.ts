class CustomElement extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = this.template();
  }
  connectedCallback () {
    console.log('connected');
  }
  template() {
    return `<h1>Hello</h1>`;
  }
}
customElements.define('custom-element', CustomElement);