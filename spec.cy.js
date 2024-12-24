describe('Form test', () => {
  beforeEach(() => {
    cy.visit('https://www.testograf.ru/ru/blog/feedback-form-template')
  })
  it('Can fill the form', () => {
    cy.get('iframe');
    cy.visit('https://kontaktnaya-forma.testograf.ru/?embedded=true&source=embed&referer=https%3A%2F%2Fwww.testograf.ru%2Fru%2Fblog%2Ffeedback-form-template')
    cy.get('.questions___cad41689373d16c7f214');
    cy.get('input[class="control___e16bbac759474cb49f55 transparent___ff454935e0e05f508992"]').eq(0).type('Иван');
    cy.get('input[class="control___e16bbac759474cb49f55 transparent___ff454935e0e05f508992"]').eq(1).type('Иван@email.ru');
    cy.get('input[class="control___e16bbac759474cb49f55 transparent___ff454935e0e05f508992"]').eq(2).type('89167895674');
    cy.get('#downshift-0-toggle-button').click();
    //Изменение eq() даст выбрать другое значение из выпадающего списка в диапозоне 0 - 5
    cy.get('.item___a66a0ae47d8145dee2ff').eq(3).click();
    cy.get('textarea[class="multiline___cc6bb61529c652f37050 control___e16bbac759474cb49f55 control___b7ae007d86d6ea2bb014 transparent___ff454935e0e05f508992"]')
        .type('Проверка отправки формы');
    cy.get('.fluid___b8ec6d1bc6ffd588c6ef').click();
  });
});
