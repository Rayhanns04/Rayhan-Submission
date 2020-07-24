import "./data-item.js";

class DataList extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div id="data-list">
            <data-item></data-item>
        </div>
        `;
    }
}

customElements.define("data-list", DataList)