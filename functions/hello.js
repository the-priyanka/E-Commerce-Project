// domain/.netlify/functions/hello
const items = [
  { id: 1, name: "Priyanka" },
  { id: 2, name: "Bhavna" },
];
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: "hello word",
  };
};
