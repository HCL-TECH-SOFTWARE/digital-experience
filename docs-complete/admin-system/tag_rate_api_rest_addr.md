# Basic addressing 

Portal users can address resources that have been registered with the tagging and rating engine.

Users can address resources, tags, tag spaces, ratings, and rating spaces. They can either address all entities part of these five models or start with an empty set of these models and add single entities by adding additional query parameters. For details refer to the topic about Adding query parameters.

The URL that is to be used for addressing resources is as follows:

```
http://host:port/wps/mycontenthandler?uri=uri
```

Valid URIs are given in the following sections.

## Addressing resources

To address resources, use the following URIs:

-   **rm:all**

    This returns a feed that contains all resources that are registered with the tagging and rating engine. A resource is registered with the tagging and rating engine when a user tags or rates it at least once. Note that using this operation can be rather expensive, depending on the amount of registered resources. Sample feed:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <atom:feed xmlns:thr="http://purl.org/syndication/thread/1.0" 
       xmlns:xhtml="http://www.w3.org/1999/xhtml" 
       xmlns:atom="http://www.w3.org/2005/Atom" 
       xmlns:model="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model-elements" 
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
       xmlns:portal="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model" 
       xmlns:cp="http://www.ibm.com/xmlns/prod/websphere/portal/v7.0/portal-contextual-portal" 
       xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/" 
       xmlns:base="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0/ibm-portal-composite-base">
          <atom:author>
             <atom:name>HCL Portal/78.0</atom:name>
          </atom:author>
          <atom:id>rm:all</atom:id>
          <atom:link href="/wps/mypoc/!ut/p/digest!YlBr3X0WY5DZfagM7Jz3_A/rm/all?mode=download" 
             rel="self" type="application/atom+xml"/>
          <atom:title>HCL Portal Server Resource Feed</atom:title>
          <atom:updated>2009-12-21T23:20:05.503Z</atom:updated>
          <atom:entry>
             <atom:title xml:lang="en">A sample page</atom:title>
             <atom:id cp:oid="7_2QC68B1A086070IK5UQSRK20O4">
                rm:pm:oid:7_2QC68B1A086070IK5UQSRK20O4</atom:id>
             <atom:published>2009-12-21T22:51:16.469Z</atom:published>
             <atom:updated>2009-12-21T22:51:16.548Z</atom:updated>
             <atom:link portal:uri="pm:oid:7_2QC68B1A086070IK5UQSRK20O4" 
                 href="/wps/mypoc/!ut/p/digest!YlBr3X0WY5DZfagM7Jz3_A/pm/oid:
                 7_2QC68B1A086070IK5UQSRK20O4?mode=view" 
                 type="application/atom+xml"/>
    </atom:entry>
    ```

-   **rm:empty**

    This returns a feed that represents the empty set of resources. You can add individual resources to this feed by adding additional query parameters.

-   **rm:type\_schema:ssp**

    This returns a feed that represents a single unique resource. Samples:

    -   For a portal resource: `rm:nm:oid:oid\_of\_a\_page` . This URI addresses a portal content node.
    -   For a custom resource: `rm:dvd:rambo` . This addresses a custom resource of some kind.

## Addressing tags

To address tags, use the following URIs:

-   **tm:all**

    This returns a feed that contains all available tags. Note that using this operation can be rather expensive depending on the amount of registered tags. Sample feed:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <atom:feed xmlns:thr="http://purl.org/syndication/thread/1.0" 
       xmlns:xhtml="http://www.w3.org/1999/xhtml" 
       xmlns:atom="http://www.w3.org/2005/Atom" 
       xmlns:model="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model-elements" 
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
       xmlns:portal="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model" 
       xmlns:cp="http://www.ibm.com/xmlns/prod/websphere/portal/v7.0/portal-contextual-portal" 
       xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/" 
       xmlns:base="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0/ibm-portal-composite-base">
          <atom:author>
             <atom:name>HCL Portal/78.0</atom:name>
          </atom:author>
          <atom:id>tm:all</atom:id>
          <atom:link href="/wps/mypoc/!ut/p/digest!YlBr3X0WY5DZfagM7Jz3_A/tm/all?mode=download" 
             rel="self" type="application/atom+xml"/>
          <atom:title>HCL Portal Server Tag Feed</atom:title>
          <atom:updated>2009-12-21T23:36:52.805Z</atom:updated>
          <atom:entry>
             <atom:title xml:lang="en">sampleTag</atom:title>
             <atom:author>
                <atom:name>wpsadmin</atom:name>
                <atom:uri>um:oid:9eAeK9O86O07M1E6JMG6GHC2JMG61JOIJM4CM1C0JM8CL9E8JO07NHCAJQ86K1</atom:uri>
             </atom:author>
             <atom:id cp:scope="COLLABORATIVE">tm:oid:CI_2QC68B1A086070IK5UQSRK2040</atom:id>
             <atom:published>2009-12-21T22:50:36.509Z</atom:published>
             <atom:updated>2009-12-21T22:50:36.509Z</atom:updated>
             <atom:link portal:uri="tm:oid:CI_2QC68B1A086070IK5UQSRK20O7"  
                portal:rel="rm" href="/wps/mypoc/!ut/p/digest!YlBr3X0WY5DZfagM7Jz3_A/rm/oid:
                7_2QC68B1A086070IK5UQSRK2084?mode=download" rel="replies" type="application/atom+xml"/>
             <atom:link portal:uri="tm:oid:CI_2QC68B1A086070IK5UQSRK2040" 
                href="/wps/mypoc/!ut/p/digest!YlBr3X0WY5DZfagM7Jz3_A/tm/oid:
                CI_2QC68B1A086070IK5UQSRK2040?mode=download" type="application/atom+xml"/>
    </atom:entry>
    ```

-   **tm:empty**

    This returns a feed that represents the empty set of tags. You can add individual tags to this feed by adding additional query parameters.

-   **tm:name:tag\_name**

    This returns a feed that contains all tags that match the name `tagname`.

-   **tm:oid:oid\_of\_a\_tag**

    This returns a feed that represents a single unique tag with the ID `oid_of_a_tag`.


## Addressing tag spaces

Unlike the tag model, the tag space model does not contain information about which user has assigned a certain tag or to which concrete resource a tag has been assigned. A tag space represents only the association between a tag name and its count. Therefore tag spaces are useful to aggregate tag clouds. Use the following URIs:

-   **tm:ts:all**

    This returns a feed that contains all available tag spaces, that is all available tags and their names and counts. Sample feed:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <atom:feed xmlns:thr="http://purl.org/syndication/thread/1.0" 
      xmlns:xhtml="http://www.w3.org/1999/xhtml" 
      xmlns:atom="http://www.w3.org/2005/Atom" 
      xmlns:model="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model-elements" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xmlns:portal="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model" 
      xmlns:cp="http://www.ibm.com/xmlns/prod/websphere/portal/v7.0/portal-contextual-portal" 
      xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/" 
      xmlns:base="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0/ibm-portal-composite-base">
        <atom:author>
          <atom:name>HCL Portal/78.0</atom:name>
        </atom:author>
        <atom:id>tm:ts:all</atom:id>
        <atom:link href="/wps/mypoc/!ut/p/digest!vLQAhj2WCgHcg0_gV7N7XQ/tm/ts:all?mode=download" 
          rel="self" type="application/atom+xml"/>
        <atom:title>HCL Portal Server TagSpace Feed</atom:title>
        <atom:updated>2009-12-22T00:00:12.868Z</atom:updated>
        <atom:entry>
          <atom:title>sampleTag</atom:title>
          <atom:id>tm:name:bread</atom:id>
          <atom:published>2009-12-21T22:50:51.698Z</atom:published>
          <atom:updated>2009-12-21T22:50:51.698Z</atom:updated>
          <atom:content type="application/xml">
            <cp:tagspace>
              <cp:supportedLocale>en</cp:supportedLocale>
            </cp:tagspace>
          </atom:content>
          <atom:link thr:count="1" thr:isMine="true" portal:uri="rm:empty" 
            portal:rel="rm" 
            href="/wps/mypoc/!ut/p/digest!vLQAhj2WCgHcg0_gV7N7XQ/rm/empty?mode=download&tmparam=tm%3aname%3abread" 
            rel="replies" type="application/atom+xml"/>
          <atom:link thr:count="1" thr:isMine="true" portal:uri="rm:empty" 
            portal:rel="rm" 
            href="/wps/mypoc/!ut/p/digest!vLQAhj2WCgHcg0_gV7N7XQ/rm/empty?mode=view&tmparam=tm%3aname%3abread" 
            rel="replies" type="text/html"/>
          <atom:link portal:uri="tm:name:bread" 
            href="/wps/mypoc/!ut/p/digest!vLQAhj2WCgHcg0_gV7N7XQ/tm/name:bread?mode=download" 
            type="application/atom+xml"/>
    </atom:entry>
    ```

-   **tm:ts:empty**

    This returns a feed that represents the empty set of tag spaces. You can add individual tag spaces to this feed by adding additional query parameters.


## Addressing ratings

To address ratings, use the following URIs:

-   **rtm:all**

    This returns a feed that contains all available ratings. Note that using this operation can be rather expensive depending on the amount of registered ratings. Sample feed:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <atom:feed xmlns:thr="http://purl.org/syndication/thread/1.0" 
      xmlns:xhtml="http://www.w3.org/1999/xhtml" 
      xmlns:atom="http://www.w3.org/2005/Atom" 
      xmlns:model="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model-elements" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xmlns:portal="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model" 
      xmlns:cp="http://www.ibm.com/xmlns/prod/websphere/portal/v7.0/portal-contextual-portal" 
      xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/" 
      xmlns:base="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0/ibm-portal-composite-base">
        <atom:author>
          <atom:name>HCL Portal/78.0</atom:name>
        </atom:author>
        <atom:id>rtm:all</atom:id>
        <atom:link href="/wps/mypoc/!ut/p/digest!vLQAhj2WCgHcg0_gV7N7XQ/rtm/all?mode=download" 
          rel="self" type="application/atom+xml"/>
        <atom:title>HCL Portal Server Rating Feed</atom:title>
        <atom:updated>2009-12-21T23:53:53.912Z</atom:updated>
        <atom:entry>
          <atom:title>4</atom:title>
          <atom:author>
            <atom:name>wpsadmin</atom:name>
            <atom:uri>um:oid:9eAeK9O86O07M1E6JMG6GHC2JMG61JOIJM4CM1C0JM8CL9E8JO07NHCAJQ86K1</atom:uri>
          </atom:author>
          <atom:id cp:scope="COLLABORATIVE">rtm:oid:CJ_2QC68B1A086070IK5UQSRK20C4</atom:id>
          <atom:published>2009-12-21T23:53:18.830Z</atom:published>
          <atom:updated>2009-12-21T23:53:18.830Z</atom:updated>
          <atom:link portal:uri="rtm:oid:CJ_2QC68B1A086070IK5UQSRK20C4" 
            ortal:rel="rm" href="/wps/mypoc/!ut/p/digest!vLQAhj2WCgHcg0_gV7N7XQ/rm/oid:
            6_CGAH47L0003H80IKPQVPKO0GS3?mode=download" rel="replies" type="application/atom+xml"/>
          <atom:link portal:uri="rtm:oid:CJ_2QC68B1A086070IK5UQSRK20C4" 
            href="/wps/mypoc/!ut/p/digest!vLQAhj2WCgHcg0_gV7N7XQ/rtm/oid:
            CJ_2QC68B1A086070IK5UQSRK20C4?mode=download" type="application/atom+xml"/>
    </atom:entry>
    ```

-   **rtm:empty**

    This returns a feed that represents the empty set of ratings. You can add individual ratings to this feed by adding additional query parameters.

-   **rtm:oid:oid\_of\_a\_rating**

    This returns a feed that represents a single unique rating with the ID `oid_of_a_rating`.


## Addressing rating spaces

Unlike the rating model, the rating space model does not contain information about which user has assigned a certain rating or to which concrete resource a rating has been assigned. A rating space represents only the association between a rating value and its count. Use the following URIs:

-   **rtm:rs:all**

    This returns a feed that contains all available rating spaces, that is all available ratings and their values and counts. Sample feed:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <atom:feed xmlns:thr="http://purl.org/syndication/thread/1.0" 
       xmlns:xhtml="http://www.w3.org/1999/xhtml" 
       xmlns:atom="http://www.w3.org/2005/Atom" 
       xmlns:model="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model-elements" 
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
       xmlns:portal="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model" 
       xmlns:cp="http://www.ibm.com/xmlns/prod/websphere/portal/v7.0/portal-contextual-portal" 
       xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/" 
       xmlns:base="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0/ibm-portal-composite-base">
          <atom:author>
             <atom:name>HCL Portal/78.0</atom:name>
          </atom:author>
          <atom:id>rtm:rs:all</atom:id>
          <atom:link href="/wps/mypoc/!ut/p/digest!vLQAhj2WCgHcg0_gV7N7XQ/rtm/rs:all?mode=download" 
             rel="self" type="application/atom+xml"/>
          <atom:title>HCL Portal Server RatingSpace Feed</atom:title>
          <atom:updated>2009-12-22T00:13:40.386Z</atom:updated>
          <atom:entry>
             <atom:title>4</atom:title>
             <atom:id>rtm:value:4</atom:id>
             <atom:published>2009-12-21T23:53:18.830Z</atom:published>
             <atom:updated>2009-12-21T23:53:18.830Z</atom:updated>
             <atom:link thr:count="1" thr:isMine="true" portal:uri="rm:empty" 
                portal:rel="rm" 
                href="/wps/mypoc/!ut/p/digest!vLQAhj2WCgHcg0_gV7N7XQ/rm/empty?mode=
                    download&rtmparam=rtm%3avalue%3a4" 
                rel="replies" type="application/atom+xml"/>
             <atom:link 
                portal:uri="rtm:value:4" 
                href="/wps/mypoc/!ut/p/digest!vLQAhj2WCgHcg0_gV7N7XQ/rtm/value:4?mode=download" 
                type="application/atom+xml"/>
    </atom:entry>
    ```

-   **rtm:rs:empty**

    This returns a feed that represents the empty set of rating spaces. You can add individual rating spaces to this feed by adding additional query parameters.


**Parent topic:**[The REST API ](../admin-system/tag_rate_api_rest.md)

**Related information**  


[Adding query parameters](../admin-system/tag_rate_api_rest_add_qparms.md)

[Querying models in correlation to each other ](../admin-system/tag_rate_api_rest_cor_modls.md)

[Other queries](../admin-system/tag_rate_api_rest_oth_queries.md)

