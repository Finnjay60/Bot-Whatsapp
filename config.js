const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="uckBotWhatsapp69@gmail.com"
global.location="Rostock, Germany"


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://jfnz5b:5inief@cluster0.v3dmc2z.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Berlin/Germany";
global.github=process.env.GITHUB|| "...";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/LLMFwP74zj7IhpAhP2bmOH";
global.website=process.env.GURL || "https://chat.whatsapp.com/LLMFwP74zj7IhpAhP2bmOH" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "01781026004" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "01781026004";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_45_05_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA2MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA2OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDY4LFxuICAgICAgICA3OSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjU1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAwLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDg0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTksXG4gICAgICAgIDMyLFxuICAgICAgICA2LFxuICAgICAgICAxLFxuICAgICAgICAxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODEsXG4gICAgICAgIDc3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkyLFxuICAgICAgICA4NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4NixcbiAgICAgICAgODIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImJ0blUzbXA4cjVxcVQ0YThkUDgxL2ZKMml5ZllubWwxQzViS3hCSURJRkE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDkxNzgxMDI2MDA0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2MEExMzVFREVBOEIxNDlGMUI2MTIxNDczOEIxMjE0RFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTQ5ODE1MjJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0OTE3ODEwMjYwMDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjRFRDhCODE1Mzc0ODMxOUJFRENDNTE5MDgyMTc4RENFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNDk4MTUyMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQ5MTc4MTAyNjAwNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUMxRTREMDk4RTg2RjdGNzk3QkRDQUZFRDVENTkxMjJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE0OTgxNTI5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk9rT0xrNHh1UUptbE5VV0prQ1VLM0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjVlMjc4YzktMjc4OC00OGZmLTg1ZDUtOTQwNTJiNTljNTlkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYxLFxuICAgICAgNjgsXG4gICAgICAxNTYsXG4gICAgICA0MixcbiAgICAgIDIyNSxcbiAgICAgIDE1NCxcbiAgICAgIDE2OSxcbiAgICAgIDE4OSxcbiAgICAgIDI1MixcbiAgICAgIDE5NCxcbiAgICAgIDEyMCxcbiAgICAgIDcyLFxuICAgICAgMTkzLFxuICAgICAgMjE1LFxuICAgICAgMjI4LFxuICAgICAgOTcsXG4gICAgICAxMixcbiAgICAgIDQyLFxuICAgICAgMjI1LFxuICAgICAgMTIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDEsXG4gICAgICAyMDUsXG4gICAgICAxMTAsXG4gICAgICAxMTksXG4gICAgICAyMjYsXG4gICAgICA1MSxcbiAgICAgIDM5LFxuICAgICAgMTA1LFxuICAgICAgMzAsXG4gICAgICAxMjEsXG4gICAgICAxMzYsXG4gICAgICA2LFxuICAgICAgMTQ5LFxuICAgICAgMjM3LFxuICAgICAgMTI1LFxuICAgICAgMTg0LFxuICAgICAgMTY2LFxuICAgICAgMTg1LFxuICAgICAgMCxcbiAgICAgIDQ4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1NVeUp3REVJMlY0ckVHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzNDNSRnEwQVZ0UWlZY2p0YWpsbjFlSVlaYW4xcllUTGxKSXR3bHdtVVdJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjg3MUt0a1ZFOFN4MjJBelFaejZ3RW9MYzRkNnJGdjBNVVNPV0g5VnJBN1dCbHpFY3hsUW5JTi9Ycjd6ajdhQmFwQVI3VlM3VlE2Sy84TXRHRHBzOUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlBaT2RlTFNxYXFld0hnY2tWa0FBMFRjQStGdmZRRUdPTnFLS3Z3SllySDJMMzBZSEk1cHFkN3NrRVg5V3BSWThGWHIyZ0phSWRWUzgyNEVRLzFQWmh3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDkxNzgxMDI2MDA0OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTM4NTg0ODgwNDk4OTE6MTJAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiRmlublwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNDkxNzgxMDI2MDA0OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTQ5ODE1MjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGQ3VcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZDdC5qc29uIjogIntcImtleURhdGFcIjpcIlNTbVVlWW9pWDloTko5SGhPb0kzb0lvMjRiM05mN0FWMXpCdHBSVTZPV1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODY1MjA4OTMyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MDg3NzYyNzczMjNcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGQ3UuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyRW9kVkdEYk9MejZJQjZPdzZrWjVqanNmTEE5aFJhS2ZVUjNOSGdPTFhvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg2NTIwODkzMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzExMzg4NDg3NTU1XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRkN2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiMDVwU2svejRTZnhsTWJsaVd4bS9BbXBOZUQ1c09OVy8wckk4VWFmSlhqQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NjUyMDg5MzIsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIxNzE0MDMyMDQ4NzM3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRkN3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiM3ZCVEwwNFNxbnF1NWtnOEl2QWtOTk40aHVGdVZmd0xCQWVvTURFcUE1RT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NjUyMDg5MzIsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcxNDU3NjIyMjM0NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "0.0.1",
  caption : process.env.CAPTION || "🦆" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Enten Bot🦆",
  ownername:process.env.OWNER_NAME|| "Finn",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
