"use strict";

module.exports.availableNumbers = (event, context, callback) => {
  let payload = {
    phone_number: "555-555-5555",
  };
  const res = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(payload),
  };

  callback(null, res);
};
