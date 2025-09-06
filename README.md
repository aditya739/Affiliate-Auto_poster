<h1>Affiliate Auto Poster</h1>

<p>
This project is an automation tool that posts affiliate content (like product links, offers, etc.) to Telegram automatically.
It helps save time by auto-sharing Amazon affiliate products to a Telegram channel/group.
</p>

<h2>🚀 Features</h2>
<ul>
  <li>Amazon Affiliate product auto-posting</li>
  <li>Telegram bot integration</li>
  <li>Easy to configure</li>
</ul>

<h2>🛠️ Requirements</h2>
<ul>
  <li>Python 3.9+</li>
  <li>pip (Python package installer)</li>
  <li>Git</li>
  <li>Telegram Bot Token (from <a href="https://t.me/BotFather" target="_blank">BotFather</a>)</li>
  <li>Amazon Product Advertising API Keys</li>
</ul>

<h2>⚙️ Installation</h2>
<pre>
# 1. Clone this repository
git clone https://github.com/your-username/Affiliate-Auto_poster.git

# 2. Go inside project folder
cd Affiliate-Auto_poster

# 3. Install dependencies
pip install -r requirements.txt
</pre>

<h2>🔑 Configuration</h2>
<p>
Create a file called <code>.env</code> in the root folder and add the following details:
</p>

<pre>
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
AWS_ACCESS_KEY_ID=your_amazon_access_key
AWS_SECRET_ACCESS_KEY=your_amazon_secret_key
TELEGRAM_CHAT_ID=your_channel_or_group_id
</pre>

<p>
⚠️ <b>Important:</b> Never upload your <code>credentials.json</code> or API keys to GitHub.
Use <code>.gitignore</code> to keep secrets safe.
</p>

<h2>▶️ Usage</h2>
<pre>
# Run the bot
python main.py
</pre>

<p>
If everything is set correctly, the bot will start posting affiliate products automatically to your Telegram group/channel.
</p>

<h2>🤝 Contributing</h2>
<p>
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
</p>


