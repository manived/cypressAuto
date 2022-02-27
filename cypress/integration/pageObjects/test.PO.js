class testPage {
  addressChekBox = cy.get('input[type="checkbox"]');
  addressNewChekBox = cy.get("input[name='new']");

  getAddCheckBox() {
    return cy.get('input[type="checkbox"]');
  }

  selectCheckBox(option) {
    return this.getAddCheckBox().check(option);
  }
}

export default testPage;