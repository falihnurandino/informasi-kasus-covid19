import './covid-item.js'

class CovidList extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  // eslint-disable-next-line accessor-pairs
  set covid (covid) {
    this._covid = covid
    this.render()
  }

  renderError (message) {
    this.shadowDOM.innerHTML = `
       <style>
           .placeholder {
               font-weight: lighter;
               color: rgba(0,0,0,0.5);
               -webkit-user-select: none;
               -moz-user-select: none;
               -ms-user-select: none;
               user-select: none;
           }
       </style>
       `
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`
  }

  render () {
    this.shadowDOM.innerHTML = ''
    this._covid.forEach((covidInfo) => {
      const covidItemElement = document.createElement('covid-item')
      covidItemElement.covidInfo = covidInfo
      this.shadowDOM.appendChild(covidItemElement)
    })
  }
}
customElements.define('covid-list', CovidList)
