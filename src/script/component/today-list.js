import "./today-item.js";

class TodayList extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div id="today-list">
            <today-item></today-item>
        </div>
        `;
    }
}

customElements.define("today-list", TodayList);