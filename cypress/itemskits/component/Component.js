export default class Component {

    get logInButton() {
        return cy.get(".btn.btn-primary.btn-block");
    }

    get itemsKitsMenuButton() {
        return cy.get("#mainMenu").contains("Item Kits");
    }

    get searchField() {
        return cy.get("#search");
    }

    get fieldsField() {
        return cy.get("#s2id_fields");
    }

    get fieldOption() {
        return cy.get(".select2-results").contains("Item Kit Name");
    }

    get searchSubmitButton() {
        return cy.get(".search-items [type=\"submit\"]");
    }

    get editButton() {
        return cy.get("#sortable_table tbody tr").eq(1).contains("Edit");
    }

    get productIdField() {
        return cy.get("#product_id");
    }

    get form() {
        return cy.get("#item_kit_form");
    }

    get confirmButton() {
        return cy.get("[data-bb-handler=\"confirm\"]");
    }

    get priceCostProduct() {
        return cy.get("#cost_price");
    }

    get pricingTab() {
        return cy.get("[title=\"Pricing\"]");
    }
    get firstItem(){
        return cy.get("#sortable_table tbody tr").eq(0);
    }
}
