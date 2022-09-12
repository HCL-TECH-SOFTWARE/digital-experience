# RSS Namespace Extension for the Feed Service

The RSS namespace extension is used to exchange control information between the feed producer and consumer applications.

To implement this namespace, specify the `<rss>` element as follows:

```
<rss version="2.0" xmlns:ibmwcm="http://purl.org/net/ibmfeedsvc/wcm/1.0"
xmlns:ibmfs="http://purl.org/net/ibmfeedsvc/feedsvc/1.0" /> 
```

The input feeds need to include this namespace only in certain scenarios where control information is going to be passed in the feed itself rather than in the HTTP headers.

-   **[The Handshake Protocol](../wci/wci_ff_nse_rss_handshake.md)**  
In many Web Content Integrator implementations the input content feeds are produced by an application that generates them dynamically in response to requests from the feed consumer application. In those cases, it is useful for the consumer to be able to indicate to the producer application which versions of a feed the Consumer has already seen so that the producer can make some intelligent decisions about what to include in the next feed.
-   **[Results Feeds](../wci/wci_ff_nse_rss_results.md)**  
When feed processing is initiated by using a call to the feed service servlet, the Web Content Integrator responds with an output feed. The first entry in this feed contains status information for the feed as a whole. Each of the subsequent entries in the output feed corresponds to an item that was in the input feed. These latter entries contain status information about the results of processing each item. Feed producers might use this information to attempt to automatically recover from certain types of errors.
-   **[Channel-level Elements](../wci/wci_ff_nse_rss_channel.md)**  
The following element must be a direct child of the feed's channel element since it applies to the feed as a whole rather than to an individual item in the feed.
-   **[Item-level Elements](../wci/wci_ff_nse_rss_item.md)**  
The following elements are applied at the item level since they contain information that is specific to each individual feed entry. These elements are only used in the output feed. They have no meaning in the context of an input feed.


