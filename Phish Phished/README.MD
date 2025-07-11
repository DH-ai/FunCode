# Phish Phished

## Overview
**Phish Phished** is a JavaScript/HTML script designed to disrupt malicious Telegram API usage by hackers who attempt to phish Instagram account details. The project targets fake Instagram phishing sites that collect credentials and send them via Telegram.

## Purpose
The goal of this script is to overload the Telegram API endpoint being used by attackers, making it harder for them to receive stolen Instagram credentials. This acts as a defensive countermeasure against ongoing phishing campaigns.

## How It Works
- The script identifies the Telegram API endpoint used by the phishing site.
- It sends a high volume of requests to the endpoint, overloading it and disrupting the hacker's data collection process.
- This helps prevent the attacker from successfully receiving sensitive Instagram details.

## Usage
1. Identify the Telegram API endpoint being used by the phishing site.
2. Configure the endpoint in `myscript.js`.
3. Run the script in a browser or with Node.js to begin sending requests.

**Note:**  
This project is for educational and defensive security purposes only. Do not use it for illegal activities.

## Requirements
- JavaScript-enabled environment (browser, Node.js)
- (Optional) HTML for demo/testing

## Disclaimer
This script is intended to help disrupt malicious activities and protect users from phishing. Always comply with local laws and ethical guidelines.
