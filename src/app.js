import 'regenerator-runtime'
import './styles/style.css'
import main from './script/view/main.js'
// kode import lain
import covid from './img/covid.jpg'

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('header').style.backgroundImage = `url(${covid})`
  main()
})
