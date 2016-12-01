'use strict';

var AWS = require('aws-sdk');

exports.handler = function(event, context, callback) {
    
    var docClient = new AWS.DynamoDB.DocumentClient();

    var params = {

        TableName : "Team",
        Key : { 
          "teamID" : event.TeamID,
        },
        UpdateExpression: "set status = :p",
        ExpressionAttributeValues:{
            ":p": "Inactive"
        }
    };

    docClient.update(params, context.done);
};