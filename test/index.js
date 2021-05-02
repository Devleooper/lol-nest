const jsf = require('json-from-schema');
const fs = require('fs');

const filePath = `${__dirname}\\schemas.json`;

const schema = JSON.parse(fs.readFileSync(filePath));

console.log(schema.definitions.ApiException);


var gen = new jsf.JsonFromSchema(schema);

var sampleDerp = gen.generate(schema.$schema);

console.log(JSON.stringify(sampleDerp));