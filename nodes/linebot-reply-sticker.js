module.exports = function(RED) {

    const line = require('@line/bot-sdk');
    
    function LinebotReplyStickerNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        
        const lineconfig = {
            channelAccessToken: config.channelAccessToken,
            channelSecret: config.channelSecret
        }
    
        const client = new line.Client(lineconfig);
        node.on('input', function(msg) {

            // get line event
            const line_event = msg.payload.events[0];
            // get message
            const received_msg = line_event.message.text;
            // create reply
            var massage = { type: 'sticker', packageId: config.stickerPackageID, stickerId:config.stickerID };
            var result = client.replyMessage(line_event.replyToken, massage);

            // var values = [client, line_event];
            msg.payload = result;

            node.send(msg);
        });
    }
    RED.nodes.registerType("linebot-reply-sticker",LinebotReplyStickerNode);
}