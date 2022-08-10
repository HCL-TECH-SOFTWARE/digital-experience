# Making modifications by using the Controller SPI

The Controller SPI allows you to modify portal resources, the topology of your portal, and properties.

The following topics describe how you use the Controller SPI for different types of modifications. Some topics provide example code snippets. For these snippets to work, they need to be completed with preceding and subsequent code. Examples are shown in the following.

Preceding code: Each snippet must be preceded at least by the following code:

```
ContentModelController cmController= null;
final Context ctx = new InitialContext();
final ContentModelControllerHome home = (ContentModelControllerHome) 
      ctx.lookup(ContentModelControllerHome.CONTENT_MODEL_CONTROLLER_JNDI_NAME);
if (home != null) {
      cmController = home.getContentModelControllerProvider().
           createContentModelController(aContentModel);
}
```

Depending on the modification that you want to make, you might require additional preceding code statements. For more details refer to [Obtaining a controller for working with resources](ctrlrapit_obtn_ctrlr.md).

Subsequent code: After you have completed your modifications, you commit the controller so that the modification take effect. After that you cannot use or commit the controller any more, but you dispose it. To commit your modifications and dispose the controller, add the following statements to your code:

```
// commit the controller
try {
    controller.commit();
} finally {
    controller.dispose();
}

```

For more details about this refer to [Committing and persisting your modifications](ctrlrapit_comit.md).

-   **[Modifying portal resources and topologies](../dev/ctrlrapit_mdfy_restop.md)**  
The Controller SPI allows you to modify portal resources and the topology of your portal in different ways.
-   **[Modifying properties](../dev/ctrlrapit_mdfy_props.md)**  
The Controller SPI enables the modification of properties resources.

**Parent topic:**[Controller SPI](../dev/ctrlrapic_ovu.md)

**Related information**  


[Obtaining a controller for working with resources](../dev/ctrlrapit_obtn_ctrlr.md)

[Committing and persisting your modifications](../dev/ctrlrapit_comit.md)

