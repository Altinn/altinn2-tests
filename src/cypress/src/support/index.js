import './login'
import './soap/correspondence'
import './party-select'

before(() => {
  Cypress.on('uncaught:exception', (e, runnable) => {
    console.log('error', e)
    console.log('runnable', runnable)
    return false
  })
})
