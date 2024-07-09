describe('Покемоны e2e', function () {

    it('Авторизация на сайте и покупка', function () {
         cy.visit('https://pokemonbattle.ru/');
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
         cy.get('#password').type('USER_PASSWORD');
         cy.get('.auth__button').click();
         cy.get('.header__container > .header__id').should('be.visible');
         cy.get('.top_menu_exit').should('be.visible');
         cy.get('.header__btns > :nth-child(4)').click();
         cy.get('.available > button').first().click();
        cy.get('.credit').type('4627100101654724');
        cy.get('.k_input_ccv').type('125');
        cy.get('.k_input_date').type('1124');
        cy.get('.k_input_name').type('POKEMON POKEMON');
        cy.get('.pay-btn').click();
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.contains('Покупка прошла успешно').should('be.visible');
     })
 }) 