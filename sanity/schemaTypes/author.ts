import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "id",
      type: "number",
      title: "ID",
    }),
    defineField({
      name: "name",
      type: "string", // Changed to 'string'
      title: "Name",
    }),
    defineField({
      name: "username",
      type: "string", // Changed to 'string'
      title: "Username",
    }),
    defineField({
      name: "email",
      type: "string", // Changed to 'string'
      title: "Email",
    }),
    defineField({
      name: "image",
      type: "url",
      title: "Image",
    }),
    defineField({
      name: "bio",
      type: "text",
      title: "Bio",
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
