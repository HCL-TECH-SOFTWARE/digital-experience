# REST: Attachments

You can use the REST service to attach images to some item types. This is equivalent to using the Insert An Image icon in the authoring portlet.

An attachment is an image resource that is associated with another item that contains HTML, and can be referenced from within that item. Attachments are a special item type in the REST service because they cannot be directly referenced. This is because there is no URI associated with an attachment when it is created. An attachment cannot be read or updated, but can be deleted indirectly by running an update on the parent item.

Attachments can be added to the following item types:

-   Presentation templates
-   Rich text components
-   HTML components

!!! note
    You must create the item and add a rich text or HTML element before you create the attachment.

## Creating

```
/ITEM-TYPE/ITEM-UUID/attachments
Content-Type: image/*
```

When you create an attachment, the binary data, but not encoding, of an image is sent to the attachments collection of an item. The Content-Type header field is set to the appropriate image type. For example: `image/jpg, image/png`

Example:

```
HTTP/1.1 POST 
http://host:port/wps/mycontenthandler/wcmrest/LibraryHTMLComponent/ITEM-UUID/attachments
Content-Type: image/jpg
(… binary data … )

201 Created
```

## Reading

Not supported.

## Updating

Not supported.

## Deleting

An attachment cannot be directly referenced through the REST service, which means it cannot be directly deleted. However, it can be deleted indirectly by running an update operation on the parent item.

For example, this is some markup that is stored in an HTML component:

```
<h1> Example Delete </h1>
<img src='/wps/wcm/myconnect/65132264-fd8b-461c-b6ec-ccdd22524ea6/image.jpg?MOD=AJPERES'
 alt='' title='' border='0'  />
```

To remove the image, you would make the following update request:

```
HTTP/1.1 PUT 
http://host:port/wps/mycontenthandler/wcmrest/LibraryHTMLComponent/ITEM-UUID/
Content-Type: text/html

<h1> Example Delete </h1>

200 OK
```


