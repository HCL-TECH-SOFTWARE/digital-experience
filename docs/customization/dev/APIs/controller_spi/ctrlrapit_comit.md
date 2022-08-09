# Committing and persisting your modifications

To persist the modifications that you applied to the controller, you commit the controller.

You can commit only the `ContentModelController` and the `PortletModelController` as only these two implement the `Committable` interface. You cannot commit a `LayoutModelController`. Committing the `LayoutModelController` is included when you commit the `ContentModelController` from which you obtained the `LayoutModelController`. Committing the `ContentModelController` can include committing more than one `LayoutModelController`.

**Notes:**

1.  After you have successfully committed a controller, you must not use it any more. In particular, do not invoke the `commit()` method again at a later stage.
2.  After you have used a controller, you always need to dispose it.
3.  If you do not want to persist the changes made by using the controller, dispose it without invoking `commit()` on it.

The following example shows how you commit a controller and then dispose it:

```
// commit the controller
try {
    controller.commit();
} finally {
    controller.dispose();
}

```

**Parent topic:**[Working with controllers](../dev/ctrlrapit_wrk.md)

**Related information**  


[Making modifications by using the Controller SPI](../dev/ctrlrapit_mdfy.md)

