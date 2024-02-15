# Feeds for REST services

When you access a REST service to get information or to modify a portal resource, the response and in some cases also the request works by means of a feed. A feed contains information about one or more portal resources in a specific format as exposed by portal models. Learn how you obtain feeds for portal resources and what the format of such feeds is.

You can request a feed by sending an HTTP request to a specific URL. A requested feed can contain links to dependent resources that can be used to request those resources iteratively. In order to modify resources, you can modify such a feed or create a new feed and send it to a specific URL by using an HTTP request.

Example: A feed that exposes full information on a layout container of a content page:

```
<?xml version="1.0" encoding="UTF-8"?>
<atom:feed xmlns:atom="http://www.w3.org/2005/Atom" 
           xml:base="/wps/mycontenthandler/" 
           xmlns:thr="http://purl.org/syndication/thread/1.0" 
           xmlns:xhtml="http://www.w3.org/1999/xhtml" 
           xmlns:base="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0/ibm-portal-composite-base" 
           xmlns:model="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model-elements" 
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
           xmlns:portal="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0.1/portal-model">
  <atom:author>
    <atom:name>HCL Digital Experience/6.0.1</atom:name>
  </atom:author>
  <atom:title>HCL Digital Experience Model Feed</atom:title>
  <atom:id>lm:oid:6_E0HNTD421GG2502HO17LUG1G35</atom:id>
  <atom:link href="." rel="self" type="application/atom+xml"/>
  <atom:updated>2007-03-04T01:26:47.937-08:00</atom:updated>
  <atom:entry>
    <atom:title>7_E0</atom:title>
    <atom:id>lm:oid:7_E0@oid:6_E0</atom:id>
    <atom:updated>2007-03-04T01:26:46.655-08:00</atom:updated>
    <atom:content type="application/xml">
      <model:layout-container>
        <model:metadata name="ORIENTATION">
          <base:value xsi:type="base:String" value="Horizontal"/>
        </model:metadata>
        <model:templatename>UnlayeredContainer-H</model:templatename>
        <model:deletable>true</model:deletable>
        <model:deletableflag>true</model:deletableflag>
        <model:modifiable>true</model:modifiable>
        <model:modifiableflag>true</model:modifiableflag>
        <model:containerchild>true</model:containerchild>
        <model:controlchild>false</model:controlchild>
      </model:layout-container>
    </atom:content>
    <atom:link portal:uri="lm:oid:7_E0@oid:6_E0" href="/wps/myportal/c0/04_SB8K8...AXCmmeA!/" 
               type="text/html"/>
    <atom:link href="?uri=lm:oid:7_E0@oid:6_E0&verb=download&levels=2&rep=compact" 
               rel="replies" type="application/atom+xml"/>
  </atom:entry>
  <model:allportletsallowed>true</model:allportletsallowed>
</atom:feed>

```

-   **[Syntax for addressing portal resources](../feeds_rest_svc/syntax_for_portal_resource/index.md)**  
To obtain information about a portal resource or to modify a portal resource, you need to obtain a feed for this resource, or you send a request to a certain URL that can contain a feed. Find out how you can construct URLs to which you can send HTTP requests related to the REST service.
-   **[Elements of a model feed](rest_feed_elements.md)**  
The following sections show sample feeds for the different models.
-   **[Use cases for modifying resources](../feeds_rest_svc/use_cases_for_resource_mod/index.md)**  
Portal Model REST services allow you to create new resources, modify, move and delete existing resources. View some common use cases of resource modifications.


