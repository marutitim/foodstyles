'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cities', {
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
    const cities = [
      "London",
      "Birmingham",
      "Glasgow",
      "Liverpool",
      "Bristol",
      "Manchester",
      "Sheffield",
      "Leeds",
      "Edinburgh",
      "Leicester",
      "Coventry",
      "Bradford",
      "Cardiff",
      "Belfast",
      "Nottingham",
      "Kingston upon Hull",
      "Stoke-on-Trent",
      "Newcastle upon Tyne",
      "Derby",
      "Southampton",
      "Portsmouth",
      "Wolverhampton",
      "Plymouth",
      "Reading",
      "Swansea",
      "Aberdeen",
      "Bournemouth",
      "Middlesbrough",
      "Norwich",
      "Brighton and Hove",
      "Northampton",
      "York",
      "Blackpool",
      "Cambridge",
      "Dundee",
      "Ipswich",
      "Wolverhampton",
      "Luton",
      "Bolton",
      "Swindon",
      "Preston",
      "Milton Keynes",
      "Rotherham",
      "Peterborough",
      "Newport",
      "Sunderland",
      "Walsall",
      "Bury",
      "Crawley",
      "Stockport",
      "Dudley",
      "Teesside",
      "Brighton",
      "Slough",
      "Gloucester",
      "Exeter",
      "Eastbourne",
      "Sutton Coldfield",
      "Blackburn",
      "Colchester",
      "Oldham",
      "St Helens",
      "Woking",
      "Chelmsford",
      "Basildon",
      "Cheltenham",
      "Gillingham",
      "Worthing",
      "Rochdale",
      "Solihull",
      "Worcester",
      "Derry",
      "Southport",
      "Basingstoke",
      "Bath",
      "Maidstone",
      "Warrington",
      "Stockton-on-Tees",
      "Gateshead",
      "Weston-super-Mare",
      "High Wycombe",
      "St Albans",
      "Telford",
      "Stevenage",
      "Wigan",
      "Oldbury/Smethwick",
      "Poole",
      "Marlow",
      "Leamington Spa",
      "Beeston and Stapleford",
      "Aylesbury",
      "Gravesend",
      "Guildford",
      "Stafford",
      "West Bridgford",
      "Stirling",
      "Scarborough",
      "Banbury",
      "Chester",
      "Dagenham"
    ];
    

    await queryInterface.bulkInsert('Cities', cities.map(name => ({
      name, createdAt: new Date(), updatedAt: new Date()
    })));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cities');
  }
};
