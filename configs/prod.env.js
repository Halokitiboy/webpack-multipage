'use strict'
const ENV=process.env.env_config;
module.exports = {
    NODE_ENV: ENV==="prod" ? '"production"' : '"testProduction"'
}