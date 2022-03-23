# Setting internal content URLs 

Learn how to set URLs that point to portal internal content \(`InternalContentURL`\).

1.  Obtain a modifiable instance of an internal content URL.

2.  Identify the content node to which you want to assign the URL.

3.  Obtain the markup for which you want to set the URL.

4.  Set the required URL for the modifiable instance of the internal content URL.


```
// obtain modifiable instance of an existing InternalContentURL
final Modifiable modifiable = cmController.getModifiableNode(internalContentUrl);

// identify target of url
final Identifiable identifiable = ...

// identify markup
final Markup markup = ...

// set URL
((ModifiableInternalContentURL) modifiable).setTarget(identifiable, markup);
```

**Parent topic:**[Setting URLs ](../dev/ctrlrapit_set_url.md)

