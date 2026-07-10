import https from 'https';

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'default-indexnow-key';
const HOST = 'paletteflow.alfo.online';

const urlsToSubmit = [
  `https://${HOST}/blog/choose-ui-color-palette`,
  `https://${HOST}/palettes/theory/analogous-blue`,
  `https://${HOST}/palettes/theory/triadic-red`,
  `https://${HOST}/palettes/theory/complementary-green`,
  `https://${HOST}/palettes/theory/monochromatic-purple`,
  `https://${HOST}/palettes/theory/neutral-warm`,
];

const data = JSON.stringify({
  host: HOST,
  key: INDEXNOW_KEY,
  keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
  urlList: urlsToSubmit,
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/IndexNow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
  },
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);
  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(data);
req.end();
