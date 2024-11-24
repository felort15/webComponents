class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    getTemplate() {
        const template = document.createElement('template'); // Corrected spelling
        template.innerHTML = `
            <main>
                <section>
                    <img src="./nike-blue.jpg" alt="Product Image" />
                </section>
                <section>
                    <div>
                        <h2>Hola Mundo</h2>
                        <p>Product description goes here.</p> <!-- Optional default content -->
                        <h3>Price: $0.00</h3> <!-- Optional default content -->
                    </div>
                </section>
            </main>
        `;
        return template;
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    connectedCallback() { // Corrected casing
        this.render();
    }
}

customElements.define("product-card", ProductCard);