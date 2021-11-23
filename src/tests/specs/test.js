const ui = require ('../../app/ui');

describe('Suite', () => {
    it('Test 1', () => {
        ui.url('');//берет из baseUrl из конфига
        expect(ui.header.isDisplayed('logo')).toBeTrue();// expect($('.hero__title').isDisplayed()).toBeTrue();
        ui.header.clickBy('menuItems', 'Docs');
        ui.pause(5000);


        // $('#password').setValue('SuperSecretPassword!');
        // $('button[type="submit"]').click();

        // expect($('#flash')).toBeExisting();
        // expect($('#flash')).toHaveTextContaining('You logged into a secure area!');
    });
});

