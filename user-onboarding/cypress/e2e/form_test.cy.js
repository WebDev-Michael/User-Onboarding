describe('Form Test', () => {
  beforeEach(() => {
  cy.visit("http://localhost:3000");
})

  const usernameInput = () => cy.get('#usernameInput');
  const passwordInput = () => cy.get('#passwordInput');
  const emailInput = () => cy.get('#emailInput');
  const tosInput = () => cy.get('#tosInput');
  const submitBtn = () => cy.get('.submitBtn')

it('sanity check to make sure tests work', () => {
  expect(1+2).to.equal(3);
})

it('the proper elements are showing', () => {
  usernameInput().should('exist');
  passwordInput().should('exist');
  emailInput().should('exist');
  tosInput().should('exist');
  submitBtn().should('exist');

  cy.contains('Create a Friend!')
})

  describe('Navigating and filling out inputs and submitting', () => {
    it('can navigate to the site', () => {
      cy.url().should('include', 'localhost');
    })

    it('can type in the inputs', () => {
      usernameInput()
      .type('Michael Wilcox')
      .should("have.value", "Michael Wilcox");

      passwordInput()
      .type("password")
      .should("have.value", "password");

      emailInput()
      .type("Michael@Michael.com")
      .should("have.value", "Michael@Michael.com");
    })

    it("can check the TOS box", () => {
      tosInput()
      .should("not.be.checked")
      .click()
      .should("be.checked");
    })

    it("can submit form", () => {
      submitBtn().click();
    })
  })



















})