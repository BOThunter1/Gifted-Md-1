//GIFTED-MD//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "https://telegra.ph/file/204481823350f368c1826.mp4";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "giftedmd@giftedtechnexus.co.ke";
global.location = "Eldoret,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.BUTTONS = process.env.BUTTON_MODE || "1";
global.timezone = process.env.TIME_ZONE || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/mouricedevs/Gifted-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/fc815a90e59c2203f0c41.jpg";
global.devs = "254762016957,254110853827,254728746852,255655147353,254728782591";
global.sudo = process.env.SUDO_NUMBERS || "254762016957,254110853827,254728746852,255655147353,254728782591";
global.sudo = process.env.SUDO || "254762016957,254110853827,254728746852,255655147353,254728782591";
global.owner = process.env.OWNER_NUMBER || "254762016957,254110853827,254728746852,255655147353,254728782591";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.MENU_VIDEOS || "https://telegra.ph/file/6921dd79a48b0b546bc7b.mp4,https://telegra.ph/file/55ce9619821ed5827eb9b.mp4,https://telegra.ph/file/e485ab225efef8362c808.mp4,https://telegra.ph/file/6c439e550c58368cc906a.mp4,https://telegra.ph/file/5ab5ecac579b6d42a897e.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/6921dd79a48b0b546bc7b.mp4,https://telegra.ph/file/55ce9619821ed5827eb9b.mp4,https://telegra.ph/file/e485ab225efef8362c808.mp4,https://telegra.ph/file/6c439e550c58368cc906a.mp4,https://telegra.ph/file/5ab5ecac579b6d42a897e.mp4";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254762016957,254110853827,254728746852,255655147353,254728782591";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254762016957,254110853827,254728746852,255655147353,254728782591";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://web.giftedtechnexus.co.ke";

global.SESSION_ID =;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkhaMlMwWmNTcjNhUUJnVjMvWDBYaU9pYlZMWGRlWmxISzArSlluaVAwTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSE9nbFFqWGJHa2R6UTk4Z0hXM3h0L0NUNk5uTGhWdXY1NGdmQ3VIVTFUVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLRDlQMklSOUJyanRqQkFjMHdwMjVKOFpkSzluejlLWFp0KzBLTC9OZ2xrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoQ3NaQmRDS043MStzZnlJYlFabDlXSmlmMURERERMWXlBVkluT201M0JNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVNWFNPM0cvNms3MjlQaEFzWmxIZEZ1ZjJERm5lRlZBNmU1TXJ0V1YvMlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktwNDZnU01tWWZJTW1wb0dYRWRHaHJ3ektwckpQU2FkWlZHczRDUitkbk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU1ySEcrbWFBV3FsYWZWT3Y5Wi9TelpwdjlUbmFVZUZTN25FUVJlVThIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQno4L0FsZ2VSM2xEc1BlazlkdFBuZHV5V0NPYi9vbmpQK3Bqa1B2MzVUaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFUdnR3dDBiaVozdUpyVGJtL0Vnd3kzSWsyc0dqSlh4UlN1eU83WlVuQjlPYkQxQkk2clo2SzZ6WmFjY1NDemRyMkN1VjI2dVY4QVJSb0dhZXdJVURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ1LCJhZHZTZWNyZXRLZXkiOiJsNkdXZDE5a3UzSFROQUY1ZWFWdlZESkhLTmQ5bzdmSndjRDlMTnh2Z1RzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJYNVVwM1c3dVNaZTNGSDMxYzhoRjFRIiwicGhvbmVJZCI6ImU5MjdkNDg3LWI2ZDktNDAzMi1hMDU3LTk0NzA4NWIyZjQyZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSTVUcFo4YkkzL0lFT0VCaFFpOHdKaFhFNUU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOWY5S28rSE1wYzRhNTFZS1U3QjRKVFpIUm9BPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkVLS1dKNFdLIiwibWUiOnsiaWQiOiIyNTQ3MTc0ODAwMTQ6NkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTEg0MGIwSEVNcjQ5N0lHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZ0pQdDJnaE1uRTBQcVdPNUJqbVFQMVh6MlN3bFgzWUpPbzg0K1Z4aitBVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWHVpK0ovRnlWSGpHUnVVWDRrRmt2ek5NSS9obHR5WmpDejRaUzM0TmRpUHVjQjI2dzc1N0x6QjUxdlNWeTNzRVBqWFdTeE4yZmg0WU8wNzc2L2syQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6ImZlRVJ4Vmp1Tjk1b1dxSUdxSW93bWZCT0pWYS95dnc4ZjRtN2Noc3paODNrOHB3d1JPSjg4aStKQVpxMFRUd1JobUZSMUxOd2cvUnduWUdyYVZVVENBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzE3NDgwMDE0OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWUNUN2RvSVRKeE5ENmxqdVFZNWtEOVY4OWtzSlY5MkNUcVBPUGxjWS9nRiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNzQzNTQ4MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFUDYifQ==
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU_STYLE || "G2", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION || "*ɢɪғᴛᴇᴅ-ᴍᴅ ᴠᴇʀsɪᴏɴ 4.0.0*",
  author: process.env.STICKER_AUTHOR || "Gifted Tech",
  packname: process.env.STICKER_NAME || "Gifted-Md♥️",
  botname: process.env.BOT_NAME || "ɢɪғᴛᴇᴅ-ᴍᴅ",
  ownername: process.env.OWNER_NAME || "ɢɪғᴛᴇᴅ ᴛᴇᴄʜ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "GIFTED").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
