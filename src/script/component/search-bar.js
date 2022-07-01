class SearchBar extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  // eslint-disable-next-line accessor-pairs
  set clickEvent (event) {
    this._clickEvent = event
    this.render()
  }

  get value () {
    return this.shadowDOM.querySelector('#searchElement').value
  }

  render () {
    this.shadowDOM.innerHTML = `
        <style>
       .search-container {
           max-width: 800px;
           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
           padding: 16px;
           margin-bottom: 10px;
           border-radius: 10px;
           display: flex;
           top: 20px;
           background-color: #fff;
       }
      
       .search-container > input {
           width: 75%;
           padding: 16px;
           border: 0;
           font-weight: bold;
       }
      
       .search-container > input:focus {
           outline: 0;
       }
      
       .search-container > input:focus::placeholder {
           font-weight: bold;
       }
      
       .search-container >  input::placeholder {
           color: #3E4551;
           font-weight: normal;
       }
      
       .search-container > button {
           width: 23%;
           cursor: pointer;
           margin-left: auto;
           padding: 16px;
           background-color: #F13433;
           color: #fff;
           border: 0;
           text-transform: uppercase;
           border-radius: 50px;
       }

       .search-container > button:hover {
          background-color: #D43517;
       }
      
       @media screen and (max-width: 550px){
           .search-container {
               flex-direction: column;
               position: static;
           }
      
           .search-container > input {
               width: 100%;
               margin-bottom: 12px;
           }
      
           .search-container > button {
               width: 100%;
           }
       }
       </style>
       <div id="search-container" class="search-container">
           <input placeholder="Search by country (ex: china)" id="searchElement" type="search">
           <button id="searchButtonElement" type="submit">Search</button>
       </div>
       `

    this.shadowDOM
      .querySelector('#searchButtonElement')
      .addEventListener('click', this._clickEvent)
  }
}
customElements.define('search-bar', SearchBar)
