const { buildSchema } = require('graphql');
const express = require('express');
const { Op } = require('sequelize');
const { Brand, City, Diet, DishType } = require('./models');
const { graphqlHTTP } = require('express-graphql');

// Define GraphQL schema
const schema = buildSchema(`
  type Brand {
    id: Int
    name: String
  }

  type City {
    id: Int
    name: String
  }

  type Diet {
    id: Int
    name: String
  }

  type DishType {
    id: Int
    name: String
  }

  type Query {
    extractEntities(searchTerm: String!): [EntityCombination]
  }

  type EntityCombination {
    brand: Brand
    city: City
    diet: Diet
    dishType: DishType
  }
`);

// Define resolvers
const root = {
  extractEntities: async ({ searchTerm }) => {
    const terms = searchTerm.split(' ');
    let combinations = [];

    const findEntity = async (term) => {
      const entities = [];

      const brands = await Brand.findAll({
        where: {
          name: {
            [Op.like]: `%${term}%`
          }
        }
      });
      entities.push(...brands.map(brand => ({ brand })));

      const cities = await City.findAll({
        where: {
          name: {
            [Op.like]: `%${term}%`
          }
        }
      });
      entities.push(...cities.map(city => ({ city })));

      const diets = await Diet.findAll({
        where: {
          name: {
            [Op.like]: `%${term}%`
          }
        }
      });
      entities.push(...diets.map(diet => ({ diet })));

      const dishTypes = await DishType.findAll({
        where: {
          name: {
            [Op.like]: `%${term}%`
          }
        }
      });
      entities.push(...dishTypes.map(dishType => ({ dishType })));

      return entities;
    };

    const generateCombinations = async (index, currentCombination) => {
      if (index === terms.length) {
        combinations.push(currentCombination);
        return;
      }

      const entities = await findEntity(terms[index]);
      for (const entity of entities) {
        await generateCombinations(index + 1, { ...currentCombination, ...entity });
      }
    };

    await generateCombinations(0, {});

    return combinations;
  }
};

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true // for testing
}));

module.exports = app;
