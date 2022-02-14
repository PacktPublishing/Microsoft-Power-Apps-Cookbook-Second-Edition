function onFormSubmit(e) {
  var data = {
    form: {
      id: e.source.getId(),
      title: e.source.getTitle() ? e.source.getTitle() : "Untitled Form",
    },
    response: {
      id: e.response.getId(),
      timestamp: e.response.getTimestamp(),
      email: e.response.getRespondentEmail(),
      payload: e.response
        .getItemResponses()
        .map(function (y) {
          return {
            h: y.getItem().getTitle(),
            k: y.getResponse(),
          };
        }, this)
        .reduce(function (r, y) {
          r[y.h] = y.k;
          return r;
        }, {}),
    },
  };

  var options = {
    method: "post",
    payload: JSON.stringify(data, null, 2),
    contentType: "application/json; charset=utf-8",
  };

  UrlFetchApp.fetch("{URL}", options);
}
