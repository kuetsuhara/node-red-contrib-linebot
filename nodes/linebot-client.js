module.exports = function(RED) {

    const line = require('@line/bot-sdk');
    
    function LinebotClientNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        // line設定作成
        const lineconfig = {
            channelAccessToken: config.channelAccessToken,
            channelSecret: config.channelSecret
        }
        // lineクライアント作成
        const client = new line.Client(lineconfig);
        node.on('input', function(msg) {
            // get line event
            const line_event = msg.payload.events[0];
            // get message
            const received_msg = line_event.message.text;

            var values = [client, line_event];
            msg.payload = values;
            node.send(msg);
        });
    }
    RED.nodes.registerType("linebot-client",LinebotClientNode);
}