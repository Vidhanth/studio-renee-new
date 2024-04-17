import { defineField, defineType } from "sanity";
import { ProjectsIcon } from "@sanity/icons";

const project = defineType({
  name: "project",
  title: "Projects",
  type: "document",
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      validation: (Rule) => Rule.max(200).required(),
    }),
    defineField({
      name: "type",
      title: "Project Type",
      type: "string",
      validation: (Rule) => Rule.max(50).required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "longDescription",
      title: "Long Description",
      type: "text",
      validation: (Rule) => Rule.max(600).required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "caption",
          type: "string",
          title: "Caption",
        }),
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "descriptionImage",
      title: "Description Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "descriptionTitle",
      title: "Description Image Title",
      type: "string",
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "subtitle",
      media: "coverImage",
    },
  },
});

export default project;
