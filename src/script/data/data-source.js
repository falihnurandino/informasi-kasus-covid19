class DataSource {
  static searchCovid (keyword) {
    return fetch(`https://covid-api.com/api/reports?q=${keyword}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.data) {
          return Promise.resolve(responseJson.data)
        }
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject(`${keyword} tidak ditemukan`)
      })
  }
}

export default DataSource
