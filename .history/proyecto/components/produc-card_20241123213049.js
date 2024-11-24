class productCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
}
   getTemplete() {
    const template = document.createElememt('templete');
    template.innerHTML = `
       <mainA></mainA>
    `;
    return template
   }
}
customElements.define("product-card", productCard );