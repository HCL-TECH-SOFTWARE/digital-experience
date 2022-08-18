# Obtaining a controller for working with resources

To modify, create, or delete portal resources by using the Controller SPI, you first need to create a controller.

You do this by using a JNDI based lookup for the correct "home" interface, that is, the corresponding read-only interface.

**Note:** The provider lookup for a controller home is possible from servlet level code and portlets.

The following controllers are available via JNDI:

-   **ContentModelController**

    To obtain a ContentModelController, perform a lookup for the string ContentModelControllerHome.CONTENT\_MODEL\_CONTROLLER\_JNDI\_NAME.

-   **PortletModelController**

    To obtain a ContentModelController, perform a lookup for the string PortletModelControllerHome.PORTLET\_MODEL\_CONTROLLER\_JNDI\_NAME.


The **LayoutModelController** cannot be obtained via a JNDI lookup. You obtain it through its associated **ContentModelController**.

Example - Obtaining a content model controller:

```
ContentModelController result = null;
final Context ctx = new InitialContext();
final ContentModelControllerHome home = (ContentModelControllerHome) 
     ctx.lookup(ContentModelControllerHome.CONTENT_MODEL_CONTROLLER_JNDI_NAME);
if (home != null) {
     result = home.getContentModelControllerProvider().createContentModelController(aContentModel);
}

```

**Note:** To obtain a `ContentModelController`, you must pass an existing content model to the `createContentModelController` method of the `ContentModelControllerProvider`.

Example 2 - Obtaining a layout model controller for a specific page:

```
// locate the page for which you want to create a LayoutModelController
final Locator locator = cmController.getLocator();
final ContentPage page = (ContentPage) locator.findByUniqueName("MyPage");

// create a LayoutModelController
final LayoutModelController lmController = cmController.getLayoutModelController(page);

```

**Parent topic:**[Working with controllers](../dev/ctrlrapit_wrk.md)

**Related information**  


[Obtain a model from the portal](../dev/dgn_modelobt.md)

[Making modifications by using the Controller SPI](../dev/ctrlrapit_mdfy.md)

