# Setting portlet preferences for portlet definitions 

You can set the portlet preferences for portlet definitions.

To set the portlet preferences for a portlet definition, proceed by the following steps:

1.  Obtain a modifiable instance of a portlet definition.

2.  Obtain the modifiable portlet preferences layer.

3.  Set the preferences by using the appropriate methods of the `ModifiablePortletPreferences` interface.


Example - Setting portlet preferences on a portlet definition:

```
// obtain portlet model controller
final PortletModelController pmController = getPortletModelController(portletModel);
        
// obtain modifiable instance of a portlet definition
final Modifiable modifiable = pmController.getModifiableNode(portletDefinition);

// obtain modifiable preferences layer
final ModifiablePortletPreferences preferences = ((ModifiablePortletDefinition) 
      modifiable).getModifiablePortletPreferencesLayer();

// set a single value
preferences.setStringValue("name", "value");
```

**Parent topic:**[Setting portlet preferences ](../dev/ctrlrapit_set_ptlt_prf.md)

