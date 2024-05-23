# GPT-4o

Testing out the new openai model GPT-4o.

From the [official website](https://openai.com/index/hello-gpt-4o/): "GPT-4o (“o” for “omni”) is a step towards much more natural human-computer interaction—it accepts as input any combination of text, audio, image, and video and generates any combination of text, audio, and image outputs. It can respond to audio inputs in as little as 232 milliseconds, with an average of 320 milliseconds, which is similar to human response time(opens in a new window) in a conversation. It matches GPT-4 Turbo performance on text in English and code, with significant improvement on text in non-English languages, while also being much faster and 50% cheaper in the API. GPT-4o is especially better at vision and audio understanding compared to existing models."

# Directions

- Run `npm i` in your terminal.
- Create an .env file in the root directory. The .env.default file will contain the constants you will need for the app to work correctly:
  - API_KEY: This is where the openai API secret key will go. If you don't have one, you can create one from [here](https://platform.openai.com/api-keys).
  - DESCRIBE_IMAGE: A URL to an image will go here. This is used in the `getTextToDescribeImage()` function.
  - COMPARE_IMAGE_1: A URL to an image will go here. This is used in the `getTextToCompareImages()` function. You will also need the COMPARE_IMAGE_2 defined as well for it to work correctly.
  - COMPARE_IMAGE_2: A URL to an image will go here. This is used in the `getTextToCompareImages()` function. You will also need the COMPARE_IMAGE_1 defined as well for it to work correctly.
  - MODEL: This defines the model to use. Currently it's using "gpt-4o", but you can update to use another model if you wish. Changing this variable could cause the functions to no longer work.
- run `npm run start` in your terminal. This wil run the `index.js` file.

Done! Currently it will run the `getText()` function. You can also run the `getTextToDescribeImage()` and `getTextToCompareImages()` functions as well. Just comment/uncomment them.

Fell free to also update the text in the user roles to whatever you see fit.
