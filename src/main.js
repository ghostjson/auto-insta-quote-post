const { Instagram } = require("@ghostjson/auto-insta-post");
const quoteImage = require("@ghostjson/quote-image-generator");

const quotes = require("./../data/database.json");

const postQuote = async (quoteObject, login = false) => {
  const instagram = new Instagram();
  const postURL = "./post.png";
  const postCaption = `${quoteObject.quote} \n - ${quoteObject.author} \n\n`;

  quoteImage.qouteImageGenerator(quoteObject.quote, postURL);

  if (login) {
    await instagram.login();
  } else {
    await instagram.post(postURL, postCaption);
  }
};

const quoteIndex = Math.floor(Math.random() * quotes.length);
const quoteObject = quotes[quoteIndex];

postQuote(quoteObject, process.argv[2] && process.argv[2] === "login");
