let apis = {};

apis.NETWORK_STATUS = 'https://www.google.com.hk/'; // I love google!
apis.TOP_FREE_MOBILE_APPS = function(numberOfApps) {
  return `https://itunes.apple.com/hk/rss/topfreeapplications/limit=${numberOfApps}/json`;
};
apis.TOP_GROSSING_MOBILE_APPS = function(numberOfApps) {
  return `https://itunes.apple.com/hk/rss/topgrossingapplications/limit=${numberOfApps}/json`;
};
apis.MOBILE_APP_LOOKUP = function(id) {
  return `https://itunes.apple.com/hk/lookup?id=${id}`;
};

export const APIs = apis;
