import "./data-list.js";

class ContentList extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            #content-list {
                width: 715px;
                height: 77px;
                background-color: #e0f8ff;
                margin-top: 32px;
                margin-left: 45px;
                font-family: Poppins;
                border-radius: 20px;
                padding-top: 10px;
            }
            
            .state-right,
            .rank {
                text-align: center;
                font-size: 18px;
                font-weight: 500;
            }
            
            data-list {
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                margin-top: 10px;
                font-size: 12px;
            }
        </style>
        
        <div id="content-list">
            <p class="state-right"><span class="rank"></span></p>
            <data-list></data-list>
        </div>
        `;
    }
}

customElements.define("content-list", ContentList)