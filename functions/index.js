const _ = require('lodash');
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  new WebhookClient({ request, response })
    .handleRequest(new Map(_.entries({

      'Transition issue': agent => {
        agent.add('Transitioning task!');
      }

    })));
});
