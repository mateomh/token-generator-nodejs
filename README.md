![](https://img.shields.io/badge/Microverse-blueviolet)

# Token Generator for Vidyo Service

> This project is a token generator to be used to connect to the [Vidyo](https://vidyo.io/) video chat service.

![screenshot](https://3x4bkb1hvq9p3un0px44wnhs-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/Vidyo-logo.png)

This API only generates the tokens and is meant to be used with a client that uses those tokens to connect to the Service.

This project was built with NodeJS and Express as part of a selection process for [Visual Contact](https://www.visualcontact.com.co/)

Check the [Video chat client](https://github.com/mateomh/Vidyo_Conference_Test) HERE!

## Built With

- JavaScript
- NodeJS
- Express

# How to use it

The API has only one endpoint to get the token.

**GET /** Takes the request and returns a json object with the key named **token** and the value is the generated token. The request can also contain the user name inside the custom field **user** on the header, but this field is optional.


## Setup Locally

To run the application locally you will need to follow several steps to make it work.

First, you have to check if you have **Nodejs** installed on your machine. For this type the following command in your terminal:

> node -v

If **command not found** shows as a response, then go to [nodejs.org](https://nodejs.org/en/) and follow the instructions to install it. After completing the installation the same command should show you a version number.

Then clone the [repository](https://github.com/mateomh/token-generator-nodejs) into your local drive and open a terminal in the root folder of the project and install the necessary packages to make it work by running this command:

> npm install

Go to the .env_sample file in the root folder for the project and change the **APP_ID** and **APP_KEY** for your own keys, this is to use the values stored in that file as environment variables for the API.

After filling the variables with your own, change the name of the file from **.env_sample** to **.env**.

This will get the project ready to run. After this run the following command to start the development server on **https://localhost:3000/**.

> node ./server.js

Then open the browser and type **https://localhost:3000/** in your address bar to get a token from the API and confirm that it is working.


## Authors

👤 **Mateo mojica**

- Github: [@mateomh](https://github.com/mateomh)
- Twitter: [@mateo_m_h](https://twitter.com/mateo_m_h)
- Linkedin: [Mateo mojica](https://linkedin.com/mateo_mojica_hernandez)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Microverse
- Visual Contact

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.
