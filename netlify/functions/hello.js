exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "你好，这是来自 serverless 函数的问候！" })
  };
}