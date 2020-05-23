describe("Third Test", () => {
  it("Focus on the input", () => {
    cy.visit("/");
    cy.focused().should("have.class", "new task");
  });
});
