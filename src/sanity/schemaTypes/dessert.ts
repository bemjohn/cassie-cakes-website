import { defineField, defineType } from "sanity";

export const dessertType = defineType({
  name: "dessert",
  title: "Dessert",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Bespoke Cakes", value: "Bespoke Cakes" },
          { title: "Gourmet Cookies", value: "Gourmet Cookies" },
          { title: "Premium Pastries", value: "Premium Pastries" },
          { title: "Macarons & Tarts", value: "Macarons & Tarts" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
