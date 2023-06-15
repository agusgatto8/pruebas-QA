import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';


class LoginPage extends Page {

    public get btnMenu() {
        return $('//*[@id="main-header"]/div/div/div[1]/div/button');
    }
    public get btnAccept() {
        return $('#didomi-notice-agree-button')
    }
    public get sidebar() {
        return $('//*[@id="sideBar"]');
    }
    public get btnMarcket() {
        return $('//*[@id="dropdownSideBar"]/div[1]/a');
    }
    public get btnworldIndex() {
        return $('//*[@id="MercadosyCotizaciones"]/li[9]/a');
    }

    public get ibexSelector() {
        return $('//*[@id="lazy-container"]  // td[contains(.,"IBEX 35")]/following-sibling::td[1]/descendant::span')
    }
    public get beSelector() {
        return $('//*[@id="lazy-container"]  // td[contains(.,"BE 20")]/following-sibling::td[1]/descendant::span')
    }
    public get ukSelector() {
        return $('//*[@id="lazy-container"]  // td[contains(.,"UK 100")]/following-sibling::td[1]/descendant::span')
    }
    public open () {
        return super.open('');
    }
}

export default new LoginPage();
