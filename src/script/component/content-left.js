import "./today-list.js";

class ContentLeft extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            #content-left {
                display: flex;
                flex: 1;
                margin-top: 3.48vw;
                margin-left: 3.59vw;
                width: 42.8vw;
                height: 19.32vw;
                background-color: white;
                box-sizing: border-box;
                box-shadow: -4px 8px 16px rgba(0, 0, 0, 0.2);
                border-radius: 20px;
            }
            
            #col-1 {
                flex: 1;
                background-image: url(/src/assets/Liquid.png);
                background-repeat: no-repeat;
                background-size: 16.7vw;
                background-position-x: center;
                background-position-y: center;
            }
            
            #col-1 p {
                margin: 4.32vw;
                text-align: center;
                font-family: Poppins;
                font-weight: bold;
                font-size: 36px;
            }
            
            today-list {
                flex: 1;
                margin: 1.56vw;
                margin-left: 4.68vw;
                line-height: 52px;
                font-family: Poppins;
                font-size: 18px;
            }
        </style>

        <div id="content-left">
            <div id="col-1">
                <p id="state-left"></p>
                <img id="flag" src="" alt="">
            </div>
            <today-list></today-list>
        </div>
        `;
    }
}

customElements.define("content-left", ContentLeft);