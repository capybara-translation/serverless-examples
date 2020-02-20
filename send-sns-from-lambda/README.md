# Overview

This example shows how to

- define an SNS topic and subscription (email) in a separate resources.yml
- references the resources.yml in serverless.yml
- define an iam role that references the topic ARN
- define a lambda function that references the topic ARN as an environment variable so that messages can be published to the topic from the function.

# Prerequisites

In the project root, you need to create a `config.yml` and specify an email address to which you want to send SNS messages.

```yaml
# config.yml
EMAIL: YOUR_EMAIL_ADDRESS
```
