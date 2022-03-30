# Setting portlet preferences for portlet entities 

You can set the portlet preferences for portlet entities.

To set the portlet preferences for a portlet entity, proceed by the following steps:

1.  Obtain a modifiable instance of a portlet entity.

2.  Obtain the modifiable portlet preferences layer.

3.  Set the preferences by using the appropriate methods of the `ModifiablePortletPreferences` interface.


Example - Setting portlet preferences on a portlet entity:

```
// obtain portlet model controller
final PortletModelController pmController = getPortletModelController(portletModel);
        
// obtain modifiable instance of a portlet entity
final Modifiable modifiable = pmController.getModifiableNode(portletEntity);

// obtain modifiable preferences layer
final ModifiablePortletPreferences preferences = ((ModifiablePortletEntity) 
    modifiable).getModifiablePortletPreferencesLayer();

// set a single value
preferences.setStringValue("name", "value");
```

**Parent topic:**[Setting portlet preferences ](../dev/ctrlrapit_set_ptlt_prf.md)

