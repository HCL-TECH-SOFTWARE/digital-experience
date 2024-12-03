# Real-World Network Considerations

In our lab environment, our clients and servers were on the same LAN segment, so they could take advantage of a high-bandwidth, low-latency network connection. This is typically not the case for real deployments. Over a wide-area network, latencies can be significant, and bandwidth limited. In this case, the time to transfer the page content from the server to the client can become a significant contributor to overall page response time.

Social Rendering

Social rendering enables Portal page editors to feature social data that is hosted on a remote IBM Connections server in the context of Portal pages.

As social rendering is based on the WCM Rendering Portlet, the same performance tunings for WCM rendering should be applied.

On a pure rendering system, we enabled the ListRenderingCache in order to reduce CPU consumption and improve performance. In addition to enabling the cache you need to change your presentation template and appearance components to reference this cache. For more details, see [Administering social lists](../../../../../build_sites/social_rendering/administering_social_list/index.md).

The other caches used by social rendering include the BeanListCache and DocumentCache which are enabled by default. Additional tuning was not required.