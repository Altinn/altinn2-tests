/// <reference types='cypress' />
const baseUrl = Cypress.config('baseUrl')

/**
 * Custom command to send correspondence to a reportee
 */
Cypress.Commands.add('sendCorrespondence', (reportee) => {
  cy.readFile('src/fixtures/correspondence.xml').then((xml) => {
    xml = xml.replace('PlaceHolder_reportee', reportee)
    xml = xml.replace(
      'PlaceHolder_Ref',
      `EUF_${Math.floor(Math.random() * 100000)}`,
    )
    return cy.request({
      method: 'POST',
      url: `${baseUrl}/ServiceEngineExternal/CorrespondenceAgencyExternalBasic.svc`,
      headers: {
        'Content-Type': 'text/xml;charset=UTF-8',
        SOAPAction:
          'http://www.altinn.no/services/ServiceEngine/Correspondence/2009/10/ICorrespondenceAgencyExternalBasic/InsertCorrespondenceBasicV2',
      },
      body: xml,
    })
  })
})
