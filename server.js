const express = require('express');
const axios = require('axios');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const credentials = JSON.parse(fs.readFileSync('credentials.json'));

const { amazonAccessKey, amazonSecretKey, amazonAssociateTag, telegramBotToken, telegramChatId } = credentials;

const amazonApiEndpoint = 'https://webservices.amazon.com/onca/xml';
const telegramApiEndpoint = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

// Function to find deals on Amazon
async function findDeals() {
  const params = {
    Service: 'AWSECommerceService',
    Operation: 'ItemSearch',
    AWSAccessKeyId: amazonAccessKey,
    AssociateTag: amazonAssociateTag,
    SearchIndex: 'All',
    Keywords: 'deal',
    ResponseGroup: 'Images,ItemAttributes,Offers',
    Timestamp: new Date().toISOString(),
  };

  const response = await axios.get(amazonApiEndpoint, { params });
  const items = response.data.ItemSearchResponse.Items.Item;

  return items.slice(0, 15); // Get the first 15 deals
}

// Function to post a message to Telegram
async function postToTelegram(deal) {
  const message = `
  <b>${deal.ItemAttributes.Title}</b>
  <a href="${deal.DetailPageURL}?tag=${amazonAssociateTag}">Buy Now</a>
  `;

  await axios.post(telegramApiEndpoint, {
    chat_id: telegramChatId,
    text: message,
    parse_mode: 'HTML'
  });
}

// API Endpoint to schedule post
app.post('/api/schedulePost', async (req, res) => {
  const { platform, postContent } = req.body;

  if (platform === 'telegram') {
    await postToTelegram({ ItemAttributes: { Title: postContent }, DetailPageURL: 'https://www.amazon.com/dp/B08L5VH8XG' });
  }

  res.json({ success: true });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
