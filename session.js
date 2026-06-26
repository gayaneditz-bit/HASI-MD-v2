//  * @project_name : hasi-md
//  * @version      : 1.0
//  * @author       : dtz-naruto
//  * @description  : hasi-md 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by dtz-naruto.
//  *Base by dtz-naruto
//  *WhatsApp: +94769421870
//   * Credit To dtz-naruto
//   * © 2026 hasi-md𝗑ᴾᴿᴼ-V1.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "HASI-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUpNM1RVd2RPTFZoNVZ0TGlJV3BmcmF5SmtCR3lGVmZDTUo2bHI4T1VHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEZQR25FUGd3VHBvaStBajNYMkgxak9VUXVXeVZWTnpsTnpjQ3FiZStGTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQi9QbDNaNVA4WGFhVVpJTUlBSDVtNXY3bmxhR1ptd0lYcEMxaXlLYkdBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSMEhwSERuL2VRTzBxelBtM1FPMVlUbU1XbEdpd2lHc1E2ZVRWRTQvcUM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlGRXdPN0RKRWZyd1VUeG9Hb3RwSFhiVHJBazZoMDhZSzFDNk00YzBVMTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJuaThFSCt2UTZ2YXVLczBzUUdHSWpUMHkyY0hkM0RrMCthV01Tekl0aFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUdMcUJncjNmSFVmYTV5T1VCNWhQeXdHbGc1TlRmMjRZWnNZOGNLbmxHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2p6bG41Ujg3bnNCWFdZMjVLaml0czdLUEFuZFNRSjVVcW84a0FOMmtDbz0ifX0sInNpZ25hdHVyZ",
PORT: process.env.PORT || "8000"
};
