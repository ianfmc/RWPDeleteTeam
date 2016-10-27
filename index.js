'use strict';

let AWS = require('aws-sdk');
let docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = function(event, context, callback) {
    
    var params = {

        TableName : "Team",
        Key : { 
          "TeamID" : event.TeamID,
        },
        UpdateExpression: "set TeamStatus = :p",
        ExpressionAttributeValues:{
            ":p": "Inactive"
        }
    };

    docClient.update(params, context.done);
};