# SERVERLES FRAMEWORK MYSENSE SENSOR APP

# Service Information

    service: MySense-Serverless-Case
    stage: dev
    region: eu-west-2
    stack: MySense-Serverless-Case-dev
    resources: 67
    api keys:
    dev-secretRestApiKey: toKdg61vmNds81l9dgvFknUzj8asW

# endpoints:

    GET - https://kyo18xs610.execute-api.eu-west-2.amazonaws.com/dev/api/api-docs
    POST - https://kyo18xs610.execute-api.eu-west-2.amazonaws.com/dev/sensor
    GET - https://kyo18xs610.execute-api.eu-west-2.amazonaws.com/dev/sensor
    GET - https://kyo18xs610.execute-api.eu-west-2.amazonaws.com/dev/sensor/{id}
    PUT - https://kyo18xs610.execute-api.eu-west-2.amazonaws.com/dev/sensor/{id}
    DELETE - https://kyo18xs610.execute-api.eu-west-2.amazonaws.com/dev/sensor/{id}

# functions:

    app: MySense-Serverless-Case-dev-app
    create: MySense-Serverless-Case-dev-create
    list: MySense-Serverless-Case-dev-list
    get: MySense-Serverless-Case-dev-get
    update: MySense-Serverless-Case-dev-update
    delete: MySense-Serverless-Case-dev-delete
    sensorTopicConsumer: MySense-Serverless-Case-dev-sensorTopicConsumer

# You can find serverless-swagger.json file under ./resources path. You can import it to https://editor.swagger.io/
