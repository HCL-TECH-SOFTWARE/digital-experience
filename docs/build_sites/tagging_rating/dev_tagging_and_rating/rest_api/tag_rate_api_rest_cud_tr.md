# Using the Rest API to add, update, and delete tags and ratings

You can create, update, and delete tags and ratings by using the REST API.

## Creating and deleting tags by using the REST API

To create a tag, send an HTTP POST against the URI `tm:ts:all` with the following payload:

```
<?xml version="1.0" encoding="UTF-8"?>',
<atom:feed xmlns:atom="http://www.w3.org/2005/Atom" 
   xmlns:xhtml="http://www.w3.org/1999/xhtml"   
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
   xmlns:creation-context=
      "http://www.ibm.com/xmlns/prod/websphere/portal/v6.1.0/portal-creation-context" 
   xmlns:trc="http://www.ibm.com/xmlns/prod/websphere/portal/v7.0/portal-tag-rate-comment" 
   xmlns:cp="http://www.ibm.com/xmlns/prod/websphere/portal/v7.0/portal-contextual-portal" 
   xmlns:portal="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model" 
   xmlns:thr="http://purl.org/syndication/thread/1.0" 
   xmlns:model="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model-elements" 
   xmlns:base="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0/ibm-portal-composite-base" 
   xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/" 
   xml:base="http://localhost/wps/poc">
      <atom:author>
         <atom:name>HCL Portal/8.5</atom:name>
      </atom:author>
      <atom:title>HCL Portal Model Feed</atom:title>
      <atom:link href="." rel="self" type="application/atom+xml"/>
      <atom:entry creation-context:private="${isPrivate}">
         <atom:title xml:lang="${locale}">${tagname}</atom:title>
         <atom:id>${id}</atom:id>
         <atom:link portal:uri="${resourceURI}" rel="replies" href="example.org" />
         <atom:category term="${category}" />
      </atom:entry>
</atom:feed>
```

Replace the variables isPrivate, tagname, resourceURI, and category \(optional\) by the appropriate values.

To delete a tag, send an HTTP DELETE against the URI `uri tm:oid:oid\_of\_a\_tag`.

## Creating and deleting ratings by using the REST API

To create a rating, send an HTTP POST against the URI `rtm:rs:all` with the following payload:

```
<?xml version="1.0" encoding="UTF-8"?>',
<atom:feed xmlns:atom="http://www.w3.org/2005/Atom" 
   xmlns:xhtml="http://www.w3.org/1999/xhtml" 
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
   xmlns:creation-context=
      "http://www.ibm.com/xmlns/prod/websphere/portal/v6.1.0/portal-creation-context" 
   xmlns:trc="http://www.ibm.com/xmlns/prod/websphere/portal/v7.0/portal-tag-rate-comment" 
   xmlns:cp="http://www.ibm.com/xmlns/prod/websphere/portal/v7.0/portal-contextual-portal" 
   xmlns:portal="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model" 
   xmlns:thr="http://purl.org/syndication/thread/1.0" 
   xmlns:model="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model-elements" 
   xmlns:base="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0/ibm-portal-composite-base" 
   xmlns:opensearch="http://a9.com/-/spec/opensearch/1.1/" 
   xml:base="http://localhost/wps/poc">
      <atom:author>
         <atom:name>HCL Portal/8.5</atom:name>
      </atom:author>
      <atom:title>HCL Portal Model Feed</atom:title>
      <atom:link href="." rel="self" type="application/atom+xml"/>
         <atom:entry creation-context:private="${isPrivate}">
            <atom:title>${rating}</atom:title>
            <atom:id>${id}</atom:id>
            <atom:link portal:uri="${resourceURI}" rel="replies" href="example.org" />
            <atom:category term="${category}" />
         </atom:entry>
</atom:feed>
```

Replace the variables isPrivate, rating, resourceURI, and category \(optional\) by the appropriate values.

To update a rating, send an HTTP PUT that contains the same payload against the same URI.

To delete a rating, send an HTTP DELETE against the URI `uri rtm:oid:oid\_of\_a\_rating`.


???+ info "Related information"
   - [The tagging and rating user interface](../../tagging_rating_ui/index.md)

