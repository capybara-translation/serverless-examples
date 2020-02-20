'use strict'
const aws = require('aws-sdk')
const sns = new aws.SNS({
  apiVersion: '2010-03-31'
})

module.exports.hello = async event => {
  const topicArn = process.env.TOPIC_ARN
  console.log(topicArn)

  const message = {
    name: 'Bob',
    message: 'Hello, I am Bob.'
  }

  const params = {
    Subject: 'Hello from SNS',
    Message: JSON.stringify(message, null, 2),
    TopicArn: topicArn
  }

  const result = await sns
    .publish(params)
    .promise()
    .catch(e => console.error(e))
  if (result) {
    console.log(result)
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event
      },
      null,
      2
    )
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}
