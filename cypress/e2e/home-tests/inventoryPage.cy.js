/// <reference types="cypress" />
import InventoryPage from "../../page-objects/InventoryPage";

describe("Inventory Page UI Elements Test", () => {
  beforeEach(() => {
    InventoryPage.open();
  });

  it("Should display the burger menu", () => {
    InventoryPage.burgerMenu.should("be.visible");
  });

  it("Should display the cart icon", () => {
    InventoryPage.cartIcon.should("be.visible");
  });

  it("Should display the sorting dropdown", () => {
    InventoryPage.sortingDropdown.should("be.visible");
  });

  it("Should contain 4 sorting options", () => {
    InventoryPage.verifySortingOptionsCount(4);
  });

  it("Should navigate to the cart page when cart icon is clicked", () => {
    InventoryPage.navigateToCart();
  });

  it("Should navigate to the item page when an item is clicked", () => {
    InventoryPage.navigateToItemPage(0);
    cy.url().should("include", "/inventory-item.html");
  });
});
