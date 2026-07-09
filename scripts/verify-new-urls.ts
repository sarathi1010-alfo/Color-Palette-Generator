
async function verifyUrls() {
  const baseUrl = 'http://localhost:3000';
  const urls = [
    '/blog/choose-ui-color-palette',
    '/palettes/theory/split-complementary-purple',
    '/palettes/theory/tetradic-blue',
    '/palettes/theory/monochromatic-green',
    '/palettes/theory/analogous-orange',
    '/palettes/theory/triadic-yellow'
  ];

  console.log('--- Starting URL Verification ---');

  let allOk = true;
  for (const url of urls) {
      try {
          const res = await fetch(baseUrl + url);
          if (res.status === 200) {
              console.log(`✅ [200 OK] - ${url}`);
          } else {
              console.error(`❌ [${res.status}] - ${url}`);
              allOk = false;
          }
      } catch (err) {
          console.error(`❌ [ERROR] - ${url}: ${err.message}`);
          allOk = false;
      }
  }

  if (allOk) {
      console.log('--- All URLs Verified successfully ---');
  } else {
      console.error('--- Some URLs failed verification ---');
      process.exit(1);
  }
}

verifyUrls().catch(err => {
    console.error(err);
    process.exit(1);
});
