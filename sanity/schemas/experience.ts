import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "jobTitle",
      title: "Job Title",
      type: "string",
    }),

    defineField({
      name: "companyImage",
      title: "Company Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
