'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DishTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });

    // add some data
    const dishTypes = [
      "Meats",
      "Lamb",
      "Kofte",
      "Beef",
      "Roast Beef",
      "Beef Tartare",
      "Pork",
      "Fried Pork",
      "Ham",
      "Terrine",
      "Roast & Crispy Pork",
      "Grilled Pork",
      "Game & Exotic Meats",
      "Game Birds",
      "Game Meat",
      "Poultry & Other Meat",
      "Roast & Crispy Duck",
      "Slow Cooked Duck",
      "Chicken",
      "Chicken Wings",
      "Fried Chicken",
      "Roast Chicken",
      "Grilled Chicken",
      "Offal",
      "Liver",
      "Blood Sausage",
      "Seafood",
      "Lean Fish",
      "Sole",
      "Bass",
      "Cod",
      "Bream",
      "Whitebait",
      "Tilapia",
      "Halibut",
      "Trout",
      "Haddock",
      "Plaice",
      "Monkfish",
      "Skate",
      "Fatty Fish",
      "Salmon",
      "Anchovy",
      "Mackerel",
      "Sardines",
      "Tuna",
      "Seafood Ceviche",
      "Seafood Carpaccio",
      "Seafood Tartare",
      "Seafood Tataki",
      "Seafood & Chips",
      "Seafood Cake",
      "Scallops",
      "Oysters",
      "Octopus",
      "Squid",
      "Scampi",
      "Lobster",
      "Prawn",
      "Crab",
      "Molluscs",
      "Surf & Turf",
      "Maki",
      "Aubergine Dish",
      "Beetroot Dish",
      "Cauliflower Dish",
      "Pepper Dish",
      "Cabbage Dish",
      "Squash Dish",
      "Asparagus Dish",
      "Fried Potatoes",
      "Sushi",
      "Pak Choi Dish",
      "Tofu",
      "Chocolate cake",
      "Kimchi",
      "Pickles",
      "Gherkin",
      "Potatoes",
      "Mashed Potatoes",
      "Potato Cake",
      "Potato Salad",
      "Baked Potato",
      "Potato Skins",
      "Moussaka",
      "Hash Browns",
      "Roast Potatoes",
      "Sweet Potato Dish",
      "Chips",
      "Potato Wedges",
      "Sweet Potato Chips",
      "Okra Dish",
      "Tomato Dish",
      "Avocado Dish",
      "Green Bean Dish",
      "Plantain Dish",
      "Rice, Bowls & Stir Fry",
      "Pasta Dish",
      "Mac & Cheese",
      "Carbonara"
    ];
    

    await queryInterface.bulkInsert('DishTypes', dishTypes.map(name => ({
      name, createdAt: new Date(), updatedAt: new Date()
    })));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DishTypes');
  }
};
