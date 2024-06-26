export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of dish',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description of dish',
      validation: (Rule) => Rule.max(500),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price of dish',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of dish',
    },
  ],
}
