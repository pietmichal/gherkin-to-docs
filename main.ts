import { outputTemplate } from "./outputTemplate.ts";
import { expandGlob } from "https://deno.land/std@0.92.0/fs/mod.ts";

console.log("🔍 Searching and reading gherkin files...");

const features: { name: string; content: string }[] = [];

try {
  for await (const file of expandGlob("**/*.feature")) {
    features.push({
      name: file.name
        .replace(".feature", "")
        .replace("-", " ")
        .replace("_", " "),
      content: await Deno.readTextFile(file.path),
    });
    console.log("  ✔️ ", file.name);
  }
} catch (error) {
  console.log("❌ Failed to search and read gherkin files.");
  throw error;
}

console.log("✍️  Writing output...");

const output = outputTemplate
  .replace("{{NAVIGATION}}", getNavigationOutput())
  .replace("{{CONTENT}}", getContentOutput());

function getNavigationOutput() {
  return (
    "<ul>" +
    features
      .map(
        (feature) => `<li><a href="#${feature.name}">${feature.name}</a></li>`
      )
      .join("\n") +
    "</ul>"
  );
}

function getContentOutput() {
  return (
    features
      .map((feature) => `<pre id="${feature.name}">${feature.content}</pre>`)
      .join("\n")
      .replaceAll("Feature:", "<strong>Feature:</strong>")
      .replaceAll("Rules:", "<strong>Rules:</strong>")
      .replaceAll("Scenario:", "<strong>Scenario:</strong>")
      .replaceAll("Scenario Outline:", "<strong>Scenario Outline:</strong>")
      .replaceAll("Examples:", "<strong>Examples:</strong>")
      .replaceAll("Given", `<strong class="step">Given</strong>`)
      .replaceAll("When", `<strong class="step">When</strong>`)
      .replaceAll("And", `<strong class="step">And</strong>`)
      .replaceAll("Then", `<strong class="step">Then</strong>`)
      // Comments
      .replaceAll(
        /#(.*?)\n/g,
        (str) => `<span class="comment">${str.replace(/\n/, "")}</span>`
      )
      .replaceAll(
        /#(.*?)\r/g,
        (str) => `<span class="comment">${str.replace(/\r/, "")}</span>`
      )
      // Tags
      .replaceAll(
        /@(.*?)\n/g,
        (str) =>
          `<span class="tag">${str.replace(/\n/, "").replace(" ", "")}</span>`
      )
      .replaceAll(
        /@(.*?)\s/g,
        (str) =>
          `<span class="tag">${str.replace(/\s/, " ").replace(" ", "")}</span>`
      )
  );
}

try {
  await Deno.writeTextFile("./index.html", output);
  console.log("🎉 Done!");
} catch (error) {
  console.log("❌ Failed to write documentation.");
  throw error;
}
