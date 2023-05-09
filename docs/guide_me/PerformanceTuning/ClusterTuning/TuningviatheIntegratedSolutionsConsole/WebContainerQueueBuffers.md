# Web Container Queue Buffers

In the WebSphere Integrated Solutions Console

Servers -> Server Types -> WebSphere application servers -> WebSphere_Portal -> Web Container Settings -> Web container transport chains

Change the `Write buffer size` to `65536` for the following queues:
    - HttpQueueInboundDefault → Web container inbound channel (WCC_5)
    - HttpQueueInboundDefaultSecure → Web container inbound channel (WCC_6)
    - WCInboundDefault → Web container inbound channel (WCC_2)
    - WCInboundDefaultSecure → Web container inbound channel (WCC_4)