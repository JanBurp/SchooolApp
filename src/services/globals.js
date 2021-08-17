
let CONFIG = {};
CONFIG.schoool_url  = 'https://schoool.nl/_api/scholen';
CONFIG.base_url     = 'http://develop_schoool.test';
CONFIG.api_url      = CONFIG.base_url + '/_api';
CONFIG.kalender_url = CONFIG.base_url + '/_agenda';
CONFIG.token        = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRlc3Rkb2NlbnQiLCJwYXNzd29yZCI6IlRlc3REb2NlbnQxIn0.m-2EKJVppjJsq0lNKWQhvmTssH2fofH5b6dcDze9soQ';

let TIMES = {};
TIMES.TIME_SECOND = 1;
TIMES.TIME_MINUTE = TIMES.TIME_SECOND * 60;
TIMES.TIME_HOUR   = TIMES.TIME_MINUTE * 60;
TIMES.TIME_DAY    = TIMES.TIME_HOUR * 24;
TIMES.TIME_WEEK   = TIMES.TIME_DAY * 7;
TIMES.TIME_4WEEKS = TIMES.TIME_WEEK * 4;
TIMES.TIME_MONTH  = TIMES.TIME_DAY * 30;
TIMES.TIME_YEAR   = TIMES.TIME_DAY * 365;

export {CONFIG,TIMES}
