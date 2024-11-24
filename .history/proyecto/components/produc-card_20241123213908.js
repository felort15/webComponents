class productCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
}
   getTemplete() {
    const template = document.createElememt('templete');
    template.innerHTML = `
       <main>
            <section>
              <img />
            </section>
            <section>
              <div>
               <h2>Hola Mundo </h2>
              <p></p>
              <h3></h3>  
              </div>
            </section>
       </main>
    `;
    return template
   }
   this.render(){
    this.shadowRoot.appendChild(this.getTemplete().content.cloneNode(true))
   }
}
customElements.define("product-card", productCard );