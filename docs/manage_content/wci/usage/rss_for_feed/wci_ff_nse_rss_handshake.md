# The Handshake Protocol

In many Web Content Integrator implementations the input content feeds are produced by an application that generates them dynamically in response to requests from the feed consumer application. In those cases, it is useful for the consumer to be able to indicate to the producer application which versions of a feed the Consumer has already seen so that the producer can make some intelligent decisions about what to include in the next feed.

The handshake protocol consists of the exchange of two feed attributes: a Last Modified Date, and an arbitrary Entity Tag. The values of both of these attributes are managed exclusively by the producer. The consumer receives the values from the producer, stores them, and passes them back unchanged on the next request. These attributes can be passed in one of two ways:

1.  As HTTP header fields:
    -   Requests from the consumer contain:

        ```
        If-Modified-Since : {last-modified_value}
        If-None-Match: {etag_value}
        ```

    -   Responses from the producer contain:

        ```
        ETag: {etag_value}
        Last-Modified: {last-modified_value}
        ```

2.  As elements in the feed and query string parameters:
    -   Requests from the consumer are in the form:

        ```
        http://cmsserver.example.org/ProducerApp?etag={etag_value}&lastMod={last-modified_value}
        ```

    -   Feeds sent back from the producer contain the following channel-level elements:

        ```
        <lastBuildDate>{last-modified_value}</lastBuildDate>
        <ibmfs:etag>{etag_value}</ibmfs:etag>
        ```


## How the handshake works

1.  The consumer makes its first request to the producer. This request does not contain any special header fields.
2.  The producer receives the request, and since there were no special headers, it responds with a feed that contains items which represent all transactions that have occurred up to that point. Before sending the response it sets the Last-Modified header to the current time and the ETag header to a value that enables the producer identify this specific instance of the feed.

    ```
    Last-Modified: Thu, 7 Sep 2006 12:00:00 GMT
    ETag: ABC0011
    ```

3.  The consumer receives the response, processes the feed, and stores the Last-Modified and ETag values only if the feed was processed successfully.
4.  The next time the consumer is triggered, it again makes a request to the producer for the transaction feed. This time it sets the If-Modified-Since header to the Last-Modified date it received on the last request and the If-None-Match field to the value of the ETag it received on the last request.

    ```
    If-Modified-Since: Thu, 7 Sep 2006 12:00:00 GMT
    If-None-Match: ABC0011
    ```

5.  The producer receives the request, and checks the values of the header fields. It then uses its own internal logic to generate a new feed which only contains changes that occurred since the last feed it sent to this consumer. It sends back a feed with the following header values:

    ```
    Last-Modified: Thu, 7 Sep 2006 13:00:00 GMT
    ETag: ABC0032
    ```

6.  The consumer receives the response, processes the feed, and updates its stored values for the Last-Modified date and ETag.

Ideally, if no changes have occurred since the last time the consumer requested the feed, the producer should respond with an HTTP 304 \(Not Modified\) response code. This will signal the consumer that there are no changes and thus that it does not need to attemp to parse the feed and do the subsequent processing. However, if the producer is unable to implement this feature it won't affect any of the other processing.

The consumer will always send a request containing the Etag label of the last transaction feed it successfully received. In this case the producer application will be responsible for re-sending any entries that might have been missed due to a communication failure between the servers.


