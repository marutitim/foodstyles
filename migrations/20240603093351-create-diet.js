'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Diets', {
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
    const diets = [
      "Vegan",
      "Vegetarian",
      "Pescatarian",
      "Paleo",
      "Ovo Vegetarian",
      "Lacto Vegetarian",
      "Fruitarian",
      "Ketogenic",
      "Gluten-Free",
      "Dairy-Free",
      "Egg-Free",
      "Soy-Free",
      "Grain-Free",
      "Sugar-Free",
      "Wheat-Free",
      "Nut-Free",
      "Carnivore",
      "Alkaline",
      "Pollotarian",
      "Shellfish-Free",
      "Red Meat-Free",
      "Beef-Free",
      "Pork- & Shellfish-Free",
      "Fish-Free",
      "Low-FODMAP",
      "Anti Inflammatory Based",
      "Lower Carb",
      "Lower Glycemic Index",
      "Lower Oxalate",
      "Lower Histamine",
      "Lower Lectin",
      "Lower Salicylate",
      "Lower Fructose",
      "Lower Tyramine",
      "Lower Saturated Fat",
      "Lower Sulfur",
      "Mustard-Free",
      "Sesame-Free",
      "Celery-Free",
      "Atkins",
      "Peanut-Free",
      "Non-Spicy Diet"
    ];
    

    await queryInterface.bulkInsert('Diets', diets.map(name => ({
      name, createdAt: new Date(), updatedAt: new Date()
    })));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Diets');
  }
};
