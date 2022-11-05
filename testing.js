const bcryptjs = require("bcryptjs");

let hash = bcryptjs.hashSync('abc123, 10');
