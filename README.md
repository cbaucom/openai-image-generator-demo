# OpenAI DALLE Image Generator Demo

![a baby pig wearing ski googles, driving a race car, with a rainbow background](https://res.cloudinary.com/decisionarydemo/image/upload/v1668182731/img-04b7MVwlE89CcfXojSedEBue_pzxihl.png)

This Vite project was spun up quickly using `yarn create vite openai-dalle-demo --template react`

## Getting a OpenAI API Key

1. Go to the [OpenAI overview page](https://beta.openai.com/)
2. Log in and go to Personal (top-right corner)
3. Click on View API keys
4. Click on the Create new secret key button
5. Save it somewhere safe because you won't see the full key again

[Here](https://beta.openai.com/docs/api-reference) is a link to the OpenAI API Reference Docs

## Setting up your ENV file

Duplicate the `.env.example` file that is in the root of this project and name the new file `.env`

Paste in the API key you obtained from OpenAI for the value of `VITE_OPENAI_API_KEY`


## Running the project

Once you have your OpenAI API Key, you can simply run `yarn && yarn dev` to install dependencies and spin up the development server
