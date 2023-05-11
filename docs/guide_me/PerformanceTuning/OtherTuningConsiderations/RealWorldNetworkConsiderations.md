# Real-World Network Considerations

In our lab environment, our clients and servers were on the same LAN segment, so they could take advantage of a high-bandwidth, low-latency network connection. This is typically not the case for real deployments. Over a wide-area network, latencies can be significant, and bandwidth limited. In this case, the time to transfer the page content from the server to the client can become a significant contributor to
overall page response time.

Here are some steps which can help alleviate this situation:
- Compress content on the HTTP server. See the Content Compression on the HTTP Server section for more information.
- Allow client-side caching of images, Javascript files, and stylesheets, See the Adding Cache Headers in IHS for more information.