class CovidItem extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  // eslint-disable-next-line accessor-pairs
  set covidInfo (covidInfo) {
    this._covidInfo = covidInfo
    this.render()
  }

  render () {
    this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    
                }
                :host {
                    display: block;
                    margin-bottom: 20px;
                    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
                    border-radius: 16px;
                    overflow: hidden;
                }
               
                .covid-info {
                    padding: 50px;
                    background: #fff;
                }
               
                .covid-info > h1 {
                    font-weight: bold;
                    font-size: 50px; 
                }
               
                .covid-info > p {
                    font-weight: bold;
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10; /* number of lines to show */
                }
               
                
            </style>
            <div class="covid-info">
            <h1>${this._covidInfo.region.name}</h1>
            <h2>${this._covidInfo.region.province}</h2>
            <p style="color: cornflowerblue;">Terkonfirmasi : ${this._covidInfo.confirmed}</p>
            <p style="color: orange;">Kasus Aktif : ${this._covidInfo.active}</p>
            <p style="color: green;">Sembuh : ${this._covidInfo.recovered}</p>
            <p style="color: red;">Meninggal : ${this._covidInfo.deaths}</p>
            <p>Terakhir update : ${this._covidInfo.last_update}</p>

        </div>`
  }
}

customElements.define('covid-item', CovidItem)
