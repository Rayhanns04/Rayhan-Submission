class ContainerSearch extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            #container-search {
                margin-top: 3.2vw;
                text-align: center;
            }
            
            .search-bar-judul {
                font-size: 105px;
                font-family: Pattaya;
                color: white;
            }
            
            .input-field {
                margin-top: 1vw;
                width: 37.2vw;
                height: 4.6vw;
                padding: 10px 100px;
                font-size: 24px;
                border-radius: 20px;
                box-shadow: -4px 8px 16px rgba(0, 0, 0, 0.2);
                font-family: Poppins;
                border: none;
                outline: none;
                text-align: center;
                box-sizing: border-box;
                background-color: white;
            }
        </style>

        <div id="container-search">
            <h1 class="search-bar-judul">CovidSearch.com</h1>
            <div id="input-container">
                <input class="input-field" type="text" placeholder="Type Your Country"></input>
            </div>
        </div>
        `;
    }
}

customElements.define("container-search", ContainerSearch)