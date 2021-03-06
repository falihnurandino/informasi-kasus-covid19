import '../component/covid-list.js'
import '../component/search-bar.js'
import DataSource from '../data/data-source.js'

const main = () => {
  const searchElement = document.querySelector('search-bar')
  const covidListElement = document.querySelector('covid-list')

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchCovid(searchElement.value)
      renderResult(result)
    } catch (message) {
      fallbackResult(message)
    }
  }

  const renderResult = (results) => (covidListElement.covid = results)

  const fallbackResult = (message) => covidListElement.renderError(message)

  searchElement.clickEvent = onButtonSearchClicked
}
export default main
