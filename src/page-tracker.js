(function(global) {
  var pageTracker = {};

  function RdPageTracker() {
    this.pages = [];
  }

  checkBrowserSupport = function() {
    if (typeof(Storage) === "undefined") {
      throw new Error('Error: Your browser does not support Local Storage');
    }
  };

  pageTracker.findOrCreatePageTracker = function() {
    try {
      checkBrowserSupport();
      if(!localStorage.getItem('rdPageTracker')) {
        rdPageTracker = new RdPageTracker();
        localStorage.setItem('rdPageTracker', JSON.stringify(rdPageTracker));
      }
      return JSON.parse(localStorage.getItem('rdPageTracker'));
    } catch (e) {
      console.error(e);
    }
  };

  pageTracker.findUrlEntry = function(search_url) {
    tracker = pageTracker.findOrCreatePageTracker();
    search_criteria = function(entry) {
      return entry.url == search_url;
    };
    return tracker.pages.filter(search_criteria).shift();
  };

  pageTracker.createUrlEntry = function(current_url) {
    current_url = current_url || window.location.pathname;
    tracker = pageTracker.findOrCreatePageTracker();
    url_entry = pageTracker.findUrlEntry(current_url);
    tracker = upsertUrlEntry(tracker,url_entry,current_url);
    return tracker;
  };

  upsertUrlEntry = function(traker, url_entry, current_url) {
    if(url_entry) {
      url_entry.url = current_url;
      url_entry.timestamp = (new Date()).toJSON();
    } else {
      tracker.pages.push({url: current_url, timestamp: (new Date()).toJSON()});
    }
    localStorage.setItem('rdPageTracker', JSON.stringify(tracker));
    return tracker;
  };

  pageTracker.eraseTracker = function() {
    localStorage.removeItem('rdPageTracker');
  };

  global.$pageTracker = pageTracker;

})(window);
