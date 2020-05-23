describe("Sixth Tests", () => {
  context("No Todos", () => {
    it("Adds a new todo", () => {
      cy.visit("/");
      cy.get(".new").type("New todo").type("{enter}");
    });
  });
});
