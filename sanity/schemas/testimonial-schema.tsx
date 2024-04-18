import { defineType, defineField } from "sanity";
import { StarIcon } from "@sanity/icons";

export default defineType({
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  icon: StarIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stars",
      title: "Rating (1-5)",
      type: "number",
      validation: (Rule) =>
        Rule.required().min(1).max(5).error("Rating must be between 1 and 5."),
    }),
    defineField({
      name: "testimonial",
      title: "Testimonial",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "testimonial",
    },
  },
});
