class RegistrationPage{
    
    // firstNameTxtBox = cy.get('input[ng-model="FirstName"]');
    constructor(){
        this.firstNameTxtBox = 'input[ng-model="FirstName"]';
        this.lastNameTxtBox = 'input[ng-model="LastName"]';
    }

    get firstNameInput(){
        return cy.get(this.firstNameTxtBox);
    }

    get lastNameInput(){
        return cy.get(this.lastNameTxtBox);
    }

    fillRegistrationForm(firstName, lastName){
        this.firstNameInput.type(firstName).should('have.value',firstName)
        this.lastNameInput.type(lastName).should('have.value',lastName)
    }
}
export default RegistrationPage;