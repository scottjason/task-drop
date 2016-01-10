module.exports = {
  post: function(opts, cb) {
    fetch(opts.url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(opts)
      }).then((response) => response.json()).then((data) => {
        cb(data);
      })
      .done();
  }
};
