const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' };

module.exports = {
  post (opts, cb) {
    fetch(opts.url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(opts)
      }).then((response) => response.json()).then((data) => {
        cb(data);
      })
      .done();
  }
};
