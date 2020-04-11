import Project from "../ProjectResolver";

describe("Tests for the Project Resolver", () => {
  test("should have a defined Project Owner", async () => {
    const res = await Project.project_owner({ project_owner: 1 });

    expect(res).toBeDefined();
  });
  test("should have a Project Developer", async () => {
    const res = await Project.project_developer({ project_developer: 3 });

    expect(res).toBeDefined();
  });
});
