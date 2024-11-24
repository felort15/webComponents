class productCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
}
   getTemplete() {
    const template = document.createElememt('templete');
    template.innerHTML = `
       <mainA>
            <section>
              <img />
            </section>
            <section>
              <div>
               <h2></h2>
              </div>
            </section>
       </mainA>
    `;
    return template
   }
}
customElements.define("product-card", productCard );