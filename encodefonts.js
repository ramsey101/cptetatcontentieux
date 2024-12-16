const fs = require('fs');

const encodeBase64 = (filePath) => {
  const data = fs.readFileSync(filePath);
  return data.toString('base64');
};


const robotoBoldBase64 = encodeBase64('./Roboto-Bold.ttf');


console.log(`Roboto-Bold Base64: ${robotoBoldBase64}`);
