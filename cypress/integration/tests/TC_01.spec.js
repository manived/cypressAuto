/// <reference>

// const { testPage } = require("./test.PO.js");
import testPage from '../pageObjects/test.PO'



describe('Validate Login', ()=>{
    xit('User should be able to login', async()=>{
        cy.visit('http://demo.automationtesting.in/Register.html');
        cy.get('input[placeholder="First Name"]').type('First Name');
        cy.get('input[placeholder="Last Name"]').type('Last Name');
        console.log(await cy.get('input[placeholder="Last Name"]') );
        cy.get('input[ng-model="LastName"]').should('have.attr', 'placeholder','Last Name')
        // cy.get('input[ng-model="LastName"]').should('have.text','Last Name')
        cy.get('#checkbox2').check('Movies').should('be.checked',true);
    })

    it('t1', ()=>{
        cy.visit('http://seleniumpractise.blogspot.com/2022/02/sample-registration-form.html')
        const tpage = new testPage();
        cy.get('input[name="new"]').text().should('be.')
        tpage.selectCheckBox('same').should('be.checked');
        tpage.selectCheckBox('new');
        tpage.getAddCheckBox().uncheck('same').should('not.be.checked')
    })

    it.only('t1', ()=>{
        cy.visit('http://demo.automationtesting.in/Register.html')
        const tpage = new testPage();
        cy.get('input[name="new"]').text().should('be.')
        tpage.selectCheckBox('same').should('be.checked');
        tpage.selectCheckBox('new');
        tpage.getAddCheckBox().uncheck('same').should('not.be.checked')
    })
})