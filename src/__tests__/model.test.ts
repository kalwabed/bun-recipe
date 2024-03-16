import { expect, test } from "bun:test";
import { askRecipe } from "../model";

test("Show a valid recipe", async () => {
  const recipe = await askRecipe()
  expect(recipe).toBeString()
})
