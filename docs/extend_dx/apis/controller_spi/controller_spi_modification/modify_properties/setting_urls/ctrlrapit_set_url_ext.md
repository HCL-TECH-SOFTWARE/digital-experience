# Setting external content URLs

Learn how to set URLs that point to external content (`ExternalContentURL`).

1.  Obtain a modifiable instance of an external content URL.

2.  Obtain the markup for which you want to set the URL.

3.  Set the required URL for the modifiable instance of the external content URL.


```
// obtain modifiable instance of an existing ContentURL
final Modifiable modifiable = cmController.getModifiableNode(contentUrl);

// identify target of url
final String target = ...

// identify markup
final Markup markup = ...

// set URL
((ModifiableContentURL) modifiable).setURL(target, markup);
```


