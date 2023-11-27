import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

 

Given('Application Launch',()=>{

   cy.visit('https://www.makemytrip.com/', { headers: { "Accept-Encoding": "gzip, deflate" } })

})

When('user is click on login',()=>{

  cy.get('li[data-cy="account"]').click({force: true} );

})

And('Enter the email or mobile no {string} details',(email)=>{

cy.get('#username').type(email);

})

And('click on Continue button',()=>{

cy.get('button[data-cy="continueBtn"]').click();

})

Then('verify the label {string}',(label)=>{

    cy.contains('div','appendBottom25').next('p').should('have.text',label);

})