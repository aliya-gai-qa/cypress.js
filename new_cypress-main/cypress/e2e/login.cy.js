describe('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); //Ввели логин
        cy.get('#pass').type('qa_one_love1'); //Ввели пароль
        cy.get('#loginButton').click(); //Нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик
    })

    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#forgotEmailButton').click(); //Нажал Забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); //ввел почту
        cy.get('#restoreEmailButton').click(); //Нажал отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //текст
        cy.get('#messageHeader').should('be.visible'); // текст виден
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик
         })

         
   it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru'); //Ввели логин
        cy.get('#pass').type('qa_one_love7'); //Ввели неверный пароль
        cy.get('#loginButton').click(); //Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик
    })

       it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#mail').type('german1@dolnikov.ru'); //Ввели неверный логин
        cy.get('#pass').type('qa_one_love1'); //Ввели верный пароль
        cy.get('#loginButton').click(); //Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик
    })

    
       it('Проверка валидации', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#mail').type('germandolnikov.ru'); //Ввели логин без @
        cy.get('#pass').type('qa_one_love1'); //Ввели верный пароль
        cy.get('#loginButton').click(); //Нажал войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик
    })
    
       it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); //Зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввели логин с заглавными буквами
        cy.get('#pass').type('qa_one_love1'); //Ввели верный пароль
        cy.get('#loginButton').click(); //Нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик
    })

})



//+Найти поле логин и ввести правильный логин
//+Найти поле пароль и ввести правильный пароль
//+Найти кнопку Войти и нажать на неё
//Проверить нужный текст и наличие кнопки крестик