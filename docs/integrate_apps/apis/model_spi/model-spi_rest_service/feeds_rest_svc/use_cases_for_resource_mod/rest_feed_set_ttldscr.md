# Setting titles and descriptions of resources

You can set titles and descriptions of resources with Portal Model REST services.

To set titles and descriptions of a resource, take the following steps:

1.  Obtain the URI of resource for which you want to modify titles and descriptions.
2.  Do an HTTP PUT request to the URI that you obtained by the previous step, with a feed in the message body that contains titles and descriptions that you want to set.
3.  Check for response 200 OK from the server.

You can use the update parameter with either of the merge or replace modes:

-   **update=merge**

    Use the merge mode if you want to modify only the titles or descriptions of the resource. In this case, you need to send only the titles or descriptions that you want to modify.

-   **update=replace**

    Use the replace mode if you want to replace the complete entry of the resource. In this case, you need to send the complete resource.


Example - Feed to modify titles and description for a content node

```
<?xml version="1.0" encoding="UTF-8"?>
<atom:feed xmlns:atom="http://www.w3.org/2005/Atom" 
           xml:base="http://yourservername:10039/wps/mycontenthandler" 
           xmlns:thr="http://purl.org/syndication/thread/1.0" 
           xmlns:xhtml="http://www.w3.org/1999/xhtml" 
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
           xmlns:portal="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model"    
           xmlns:model="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model-elements"  
           xmlns:base="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0/ibm-portal-composite-base">
    <atom:author>
        <atom:name>HCL Portal/6.1</atom:name>
    </atom:author>
    <atom:title>HCL Digital Experience Model Feed</atom:title>
    <atom:id>cm:oid:6_000000000000000000000000A0</atom:id>
    <atom:link href="?uri=cm:oid:6_000000000000000000000000A0&mode=download&levels=1&rep=compact" 
               rel="self" type="application/atom+xml"/>
    <atom:updated>2008-02-26T06:36:02.239Z</atom:updated>
    <atom:entry>
        <atom:title>Content Root</atom:title>
        <atom:id portal:uniquename="wps.content.root">cm:oid:6_000000000000000000000000A0</atom:id>
        <atom:published>2002-05-31T22:00:00.000Z</atom:published>
        <atom:updated>2008-02-26T06:36:02.239Z</atom:updated>
        <atom:content type="application/xml">
            <model:content-label>
                <model:title>
                    <base:nls-string xml:lang="de">Mein neuer Titel</base:nls-string>
                    <base:nls-string xml:lang="en">My new title</base:nls-string>
                </model:title>
                <model:description>
                    <base:nls-string xml:lang="de">Meine neue Beschreibung</base:nls-string>
                    <base:nls-string xml:lang="en">My new description</base:nls-string>
                </model:description>
            </model:content-label>
        </atom:content>
    </atom:entry>
</atom:feed>

```


