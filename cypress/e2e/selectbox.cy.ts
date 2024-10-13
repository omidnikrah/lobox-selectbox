describe("SelectBox Component E2E with value and label", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5174");
  });

  it("should display initial options in the select box", () => {
    cy.get('[data-testid="selectbox-trigger"]').should("exist");
    cy.get('[data-testid="selectbox-trigger"]').click();

    cy.get('[data-testid="selectbox-options"]').should("exist");
    cy.get('[data-testid^="selectbox-option-"]').should("have.length", 6);

    cy.get('[data-testid="selectbox-option-education"]').should("contain.text", "Education 🎓");
    cy.get('[data-testid="selectbox-option-science"]').should("contain.text", "Yeeeah, science! ⚗️");
    cy.get('[data-testid="selectbox-option-art"]').should("contain.text", "Art 🎭");
    cy.get('[data-testid="selectbox-option-sport"]').should("contain.text", "Sport ⚽️");
    cy.get('[data-testid="selectbox-option-games"]').should("contain.text", "Games 🎮");
    cy.get('[data-testid="selectbox-option-health"]').should("contain.text", "Health 🏥");
  });

  it("should filter options based on input", () => {
    cy.get('[data-testid="selectbox-input"]').type("sci");
    cy.get('[data-testid^="selectbox-option-"]').should("have.length", 1);
    cy.get('[data-testid="selectbox-option-science"]').should("exist");
  });

  it("should add a new option by typing and pressing enter", () => {
    const newOptionValue = "music";

    cy.get('[data-testid="selectbox-input"]').type(newOptionValue).type("{enter}");

    cy.get('[data-testid="selectbox-input"]').should("have.value", "");
    cy.get('[data-testid^="selectbox-option-"]').should("have.length", 7);
    cy.get(`[data-testid="selectbox-option-${newOptionValue}"]`).should("exist");
  });

  it("should select and deselect multiple options", () => {
    cy.get('[data-testid="selectbox-trigger"]').should("exist");
    cy.get('[data-testid="selectbox-trigger"]').click();

    cy.get('[data-testid="selectbox-option-education"]').click();
    cy.get('[data-testid="selectbox-trigger"]').click();
    cy.get('[data-testid="selectbox-option-science"]').click();
    cy.get('[data-testid="selectbox-trigger"]').click();

    cy.get('[data-testid="selectbox-wrapper"]')
      .find('[data-testid^="selectbox-option-"][aria-selected="true"]')
      .should("have.length", 2);
    cy.get('[data-testid="selectbox-option-education"]').should("contain.text", "Education 🎓");
    cy.get('[data-testid="selectbox-option-science"]').should("contain.text", "Yeeeah, science! ⚗️");

    cy.get('[data-testid="selectbox-option-education"]').click();
    cy.get('[data-testid="selectbox-trigger"]').click();

    cy.get('[data-testid="selectbox-wrapper"]')
      .find('[data-testid^="selectbox-option-"][aria-selected="true"]')
      .should("have.length", 1);
  });
});
