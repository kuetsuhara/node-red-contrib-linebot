# node-red-contrib-linebot
=============================================

Linebot for Node-RED

* this is line-sdk node.
* require https!!

## Installation
```
npm install node-red-contrib-linebot
```

## nodered-clientの使い方例
```
[{"id":"e7dcd274.f23d2","type":"function","z":"ba4030c5.367a9","name":"","func":"var receive_message = msg.payload;\nvar reply = {type:'text', text:'message!'};\nvar values = [receive_message,reply];\n\nmsg.payload = values;\nreturn msg;","outputs":1,"noerr":0,"x":369,"y":290.75,"wires":[["fa4c3e77.ac8ab8"]]},{"id":"2393fe9.92ced02","type":"http in","z":"ba4030c5.367a9","name":"CallBack","url":"/callback","method":"post","swaggerDoc":"","x":214,"y":282,"wires":[["e7dcd274.f23d2"]]},{"id":"fa4c3e77.ac8ab8","type":"linebot-client","z":"ba4030c5.367a9","name":"","channelAccessToken":"ljV9zPzQKZe9zwqVb1+ub4uLmQ4a5nSV1xjoWtkGfYzIFG3Kb3z3CYV5sSzlcj2UqemSB9ECdFktepWt1symu5rHpGtyx4cy9OTleN/B8ftYR/Jn+P/ZpFdOQptRhThjgD0avfSQIG8Yly0JPvfYaQdB04t89/1O/w1cDnyilFU=","channelSecret":"50fcfe617541a0a0887bdcbd75a8295c","x":537,"y":314,"wires":[[]]}]
```