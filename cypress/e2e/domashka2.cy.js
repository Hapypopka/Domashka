describe('Домашечка гыгы', function () {

    it('1.Верный логин, верный пароль', function () {
         cy.visit('https://pokemonbattle.ru/');
         cy.get(':nth-child(1) > .auth__input').type('LOGEN');
         cy.get('#password').type('PAROL');
         cy.get('.auth__button').click();
         cy.get('.header__container > .header__id').click();
         cy.get('[href="/shop"]').click();
         cy.get('.available > button').first().click({ force: true });
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996')
         cy.get('.k_input_ccv').type('125');                             
         cy.get('.k_input_date').type('1225');                           
         cy.get('.k_input_name').type('NAME');
         cy.get('.pay-btn').click();                               
         cy.get('#cardnumber').type('56456');                         
         cy.get('.payment__submit-button').click();                      
         cy.contains('Покупка прошла успешно').should('be.visible'); 
     })

 }) 