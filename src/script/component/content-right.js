import "./content-list.js";

class ContentRight extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            #content-right {
                flex: 1;
                display: flex;
                flex-direction: column;
                margin-top: 3.48vw;
            }
            
            /* <!-- Date And Time --> */
            #col-3 {
                width: 823px;
                height: 89px;
                margin-left: 10px;
                background-color: white;
                box-shadow: -4px 8px 16px rgba(0, 0, 0, 0.2);
                border-radius: 20px;
                text-align: center;
            }
            
            #col-3 h2 {
                font-family: Poppins;
                padding-top: 10px;
                text-align: center;
                font-size: 24px;
            }
            
            #date-and-time {
                font-family: Poppins;
                text-align: center;
                font-size: 18px;
            }
            
            /* <!-- List Data --> */
            #col-4 {
                margin-top: 11px;
                width: 823px;
                height: 784px;
                margin-left: 10px;
                background-color: white;
                box-shadow: -4px 8px 16px rgba(0, 0, 0, 0.2);
                border-radius: 20px;
                overflow: auto;
                scroll-behavior: smooth;
            }
            
            
        </style>

        <div id="content-right">
            <!-- Date And Time -->
            <div id="col-3">
                <h2>DATE AND TIME</h2>
                <p id="date-and-time"></p>
            </div>

            <!-- List Data -->
            <div id="col-4">
                <content-list></content-list>
            </div>
        </div>
        `;
    }
}

customElements.define("content-right", ContentRight)