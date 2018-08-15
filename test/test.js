"use strict";

const { times, range, until, to } = require("../main.js");

5[times](i => console.log(`it's times method: ${i}`));

for (const i of range(5)) console.log(`it's range loop: ${i}`);

5[until](10, i => console.log(`it's until method: ${i}`));

1[to](5, i => console.log(`it's to method: ${i}`));
