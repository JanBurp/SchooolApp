// Settings
window.schoool_url = 'https://schoool.nl/_api/scholen';
window.base_url = 'http://develop_schoool.test';
window.api_url = window.base_url + '/_api';
window.kalender_url = window.base_url + '/_agenda';
window.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRlc3Rkb2NlbnQiLCJwYXNzd29yZCI6IlRlc3REb2NlbnQxIn0.m-2EKJVppjJsq0lNKWQhvmTssH2fofH5b6dcDze9soQ';

// Global constants
window.CONSTANTS = {};
window.CONSTANTS.TIME_SECOND = 1;
window.CONSTANTS.TIME_MINUTE = window.CONSTANTS.TIME_SECOND * 60;
window.CONSTANTS.TIME_HOUR   = window.CONSTANTS.TIME_MINUTE * 60;
window.CONSTANTS.TIME_DAY    = window.CONSTANTS.TIME_HOUR * 24;
window.CONSTANTS.TIME_WEEK   = window.CONSTANTS.TIME_DAY * 7;
window.CONSTANTS.TIME_4WEEKS = window.CONSTANTS.TIME_WEEK * 4;
window.CONSTANTS.TIME_MONTH  = window.CONSTANTS.TIME_DAY * 30;
window.CONSTANTS.TIME_YEAR   = window.CONSTANTS.TIME_DAY * 365;

// Global libraries
window._ = require('lodash');
window.axios = require('axios');
window.axios.defaults.headers.common['Content-Type'] = 'application/json';
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Authorization'] = window.token;
