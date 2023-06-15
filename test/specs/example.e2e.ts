import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('Taking values', () => {
    it('Click on menu button', async () => {
        await LoginPage.open();

        await LoginPage.btnAccept.click();
        await LoginPage.btnMenu.click();
        await browser.pause(1000)
    });

    it('Select Marcket', async () => {
        await LoginPage.sidebar.waitForDisplayed();
        await LoginPage.btnMarcket.click();
        await LoginPage.btnworldIndex.waitForDisplayed();
        await LoginPage.btnworldIndex.click();
        await browser.pause(1000);
    });


    it('Check selectors', async () => {
        await LoginPage.ibexSelector.waitForDisplayed();
        const ibexValue = await LoginPage.ibexSelector.getText();
        const beValue = await LoginPage.beSelector.getText();
        const ukValue = await LoginPage.ukSelector.getText();
        const valuesFinalValue = [parseInt(beValue), parseInt(ukValue), parseInt(ibexValue)];
        valuesFinalValue.sort((a, b) => a - b);
        console.log('Rodrigo HDP', await valuesFinalValue);
    });
});


