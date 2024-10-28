import { defineType, defineField } from "sanity";
import { HomeIcon } from "@sanity/icons";

export default defineType({
  name: "homeScreenData",
  title: "HomePage",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "header",
      title: "Header",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subheader",
      title: "Subheader",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featuredProjects",
      title: "Featured Projects",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "project" }],
        },
      ],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      name: "featuredTestimonials",
      title: "Featured Testimonials",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "testimonials" }],
        },
      ],
      validation: (Rule) => Rule.unique().max(3),
    }),
    defineField({
      name: "carouselImages",
      title: "Carousel Images",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          type: "object",
          title: "Section",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            }),
            defineField({
              name: "showOnLeft",
              title: "Show On Left",
              type: "boolean",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "faq",
      title: "Frequently Asked Questions",
      type: "array",
      of: [
        {
          name: "faq",
          title: "FAQ",
          type: "object",
          fields: [
            defineField({
              name: "question",
              title: "Question",
              type: "string",
            }),
            defineField({
              name: "answer",
              title: "Answer",
              type: "text",
            }),
          ],
        },
      ],
    }),
  ],
});
