import Component from "../itemskits/component/Component";
import Data from "../itemskits/component/Data";

describe("Items Kits Editing", () => {
    beforeEach(() => {

    });
    let itemsKitsComponent = new Component();
    let itemsKitsData = new Data();

    it("Items Kites Editing Test", () => {
        cy.visit("https://demo.phppointofsale.com/index.php/home");
        itemsKitsComponent.logInButton.click();
        itemsKitsComponent.itemsKitsMenuButton.click();
        itemsKitsComponent.searchField.type(itemsKitsData.searchField);
        itemsKitsComponent.fieldsField.click();
        itemsKitsComponent.fieldOption.click();
        itemsKitsComponent.searchSubmitButton.click();
        itemsKitsComponent.editButton.click();
        itemsKitsComponent.productIdField.clear();
        itemsKitsComponent.productIdField.type(itemsKitsData.productIdField);
        itemsKitsComponent.pricingTab.click();
        itemsKitsComponent.priceCostProduct.clear();
        itemsKitsComponent.priceCostProduct.type(itemsKitsData.priceCostProduct);
        itemsKitsComponent.form.submit();
        itemsKitsComponent.confirmButton.click();
        itemsKitsComponent.firstItem.contains("$4,655.00");
    });
});