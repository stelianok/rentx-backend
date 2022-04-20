import request from "supertest";

import { app } from "@shared/infra/http/app";

describe("Create category controller", () => {
  it("should be able to create a new category", async () => {
    const response = await request(app).post("/categories").send({
      name: "Category Test name",
      description: "Category Supertest",
    });

    expect(response.status).toBe(201);
  });
});
