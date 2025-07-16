const fs = require('fs');
const path = require('path');

const map = JSON.parse(fs.readFileSync(path.join(__dirname, 'url.json'), 'utf-8'));
const OUT = path.join(__dirname, '..', 'dist');

Object.entries(map).forEach(([slug, dest]) => {
  const dir = path.join(OUT, slug);
  fs.mkdirSync(dir, { recursive: true });
  const html = `<!doctype html>
<html>
<head>
    <meta http-equiv="refresh" content="0;url=${dest}" />
    <title>Redirecting</title>
</head>
<body>
    You are being redirected. If not click <a href="${dest}">here</a> to continue.
</body>
</html>`;
  fs.writeFileSync(path.join(dir, 'index.html'), html);
});
