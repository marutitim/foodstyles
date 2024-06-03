# Foodstyles API 

This project is a RESTful and GraphQL API integration for Foodstyles.At the moment this Solution is just a basic implimentation. I have omitted the API authentication,caching, throttling and use of Docker to improve speed as well as to provide versertility but stay tuned for next update.

## Quick Start

1. **Clone the repository:**

    ```sh
    git clone https://github.com/marutitim/foodstyles.git
    cd foodstyles
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Create .env file:**

    Create a `.env` file in the root directory of the project and add your environment variables. Here's an example with Mysql DB :

    ```sh
    APP_NAME = foodstyles
    DB_NAME =foodstyles
    DB_USER = root
    DB_PASS = "yourpassword"
    DB_HOST = 127.0.0.1
    PORT=3001
    NODE_ENV=development
    ```

4. **Run migrations:**

    ```sh
    npx sequelize-cli db:migrate
    ```

5. **Start the server:**

    ```sh
    npm start
    ```

6. **Access the API locally assuming you used port 3001:**

    - GraphQL endpoint: [http://localhost:3001/graphql](http://localhost:3001/graphql)
    - REST endpoints: [http://localhost:3001/users](http://localhost:3001/users)

7. **(Optional) PM2 configuration settings**
   - there is a file in the root called ecosystem.config, where you can make changes if you like.
   - If you have pm2 installed, run the following:

    development:

    ```sh
   pm2 start ecosystem.config.js --env development
   ```

    production:

    ```sh
   pm2 start ecosystem.config.js --env production
   ```

## Usage

### GraphQL

To make a GraphQL query, you can use tools like [GraphiQL](https://github.com/graphql/graphiql) or [Apollo Studio](https://www.apollographql.com/docs/studio/). Here's an example query:

```graphql
query {
  extractEntities(searchTerm: "vegan sushi in London") {
    brand {
      id
      name
    },
    city {
      id
      name
    },
    diet {
      id
      name
    }
    dishType {
      id
      name
    }
  }
}
```
## Live Demo

[Live Demo] (http://54.210.65.18:3001/graphql?query=query%20%7B%0A%20%20extractEntities(searchTerm%3A%20%22vegan%20sushi%20in%20London%22)%20%7B%0A%20%20%20diet%7B%0A%20%20%20%20id%2C%0A%20%20%20%20name%0A%20%20%7D%0A%20%20%20dishType%7B%0A%20%20%20%20id%2C%0A%20%20%20%20name%0A%20%20%7D%0A%20%7D%0A%7D%0A)

## Support

For any additional information, questions, or feedback, please raise an issue on [GitHub] (https://github.com/marutitim/foodstyles.git) Thank you!
