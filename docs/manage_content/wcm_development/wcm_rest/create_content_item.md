# Creating a content item

A content item can be created by sending a POST request to the following URI with an Atom entry used to represent the content item:

```
/Content
```

-   A library or parent link relation must be used to define the location of the hierarchical item that is being created. 
-   An authoring template must be specified to set what authoring template to use when the item is created.

For example:

-   **POST:**

    ```
    HTTP/1.1 POST 
    http://host:port/wps/mycontenthandler/wcmrest/Content/
    Content-Type: application/atom+xml
    		<atom:entry xmlns:atom="http://www.w3.org/2005/Atom" xmlns:wcm="wcm/namespace">
    			<wcm:name>Content Name</wcm:name>
    			<atom:title>Content Title</atom:title>
    			<atom:link atom:rel="parent" atom:href="/wps/
                mycontenthandler/wcmrest/item/49f4ed95-a99f-434c-a415-77c341fa4893"/>
    			<atom:link atom:rel="workflow" atom:href="/wps/
                mycontenthandler/wcmrest/item/abae799b-4cca-47ae-aad8-b3d8204deefb"/>
    			<atom:link atom:rel="content-template" atom:href="/wps/
                mycontenthandler/wcmrest/item/588127d0-a4f8-44b5-87a4-5fe3f7bd3da7"/>
    		</atom:entry>
    
    ```


-   **Response:**

    ```
    201 Created
    ```
