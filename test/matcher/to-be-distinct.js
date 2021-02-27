const { format } = require('util');

const toBeDistinct = (received) => {
  const pass = Array.isArray(received) && ((new Set(received)).size === received.length);
  if (pass) {
    return {
      message: () =>
        `expected ${format(received)} to be distinct`,
      pass: true,
    };
  } else {
    return {
      message: () =>
        `expected ${format(received)} not to be distinct`,
      pass: false,
    };
  }
};

module.exports = {
  toBeDistinct
};
