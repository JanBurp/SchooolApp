
const CONFIG = {
    schoool_url  : 'https://schoool.nl/_api/',
    base_url     : 'http://develop_schoool.test',
    api_url      : '',
    kalender_url : '',
    token        : '', // test auth token
};
CONFIG.api_url      = CONFIG.base_url + '/_api';
CONFIG.kalender_url = CONFIG.base_url + '/_agenda';


const TIMES = {
    TIME_SECOND:1,
    TIME_MINUTE:1,
    TIME_HOUR:1,
    TIME_DAY:1,
    TIME_WEEK:1,
    TIME_4WEEKS:1,
    TIME_MONTH:1,
    TIME_YEAR:1,
};
TIMES.TIME_MINUTE = TIMES.TIME_SECOND * 60;
TIMES.TIME_HOUR   = TIMES.TIME_MINUTE * 60;
TIMES.TIME_DAY    = TIMES.TIME_HOUR * 24;
TIMES.TIME_WEEK   = TIMES.TIME_DAY * 7;
TIMES.TIME_4WEEKS = TIMES.TIME_WEEK * 4;
TIMES.TIME_MONTH  = TIMES.TIME_DAY * 30;
TIMES.TIME_YEAR   = TIMES.TIME_DAY * 365;


export {CONFIG,TIMES}
