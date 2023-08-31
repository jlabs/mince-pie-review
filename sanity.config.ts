// sanity.config.ts
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

export default defineConfig({
    name: "mince-pie-review",
    title: "Mince Pie Review",
    projectId: "fhveocoz",
    dataset: "production",
    plugins: [deskTool()],
    schema: {
        types: [
        /* your content types here*/
        ],
    },
});