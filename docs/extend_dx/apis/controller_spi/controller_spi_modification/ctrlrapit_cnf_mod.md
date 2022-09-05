# Confirming modifications

Modifiable interfaces and Controller interfaces provide methods for confirming modifications. You can use these confirm methods to check whether modifications might be prevented by portal internal constraints.

The confirm methods do not perform a modification, but they only indicate whether a modification can be performed or not. For example, if an administrator has locked the layout of a page, you cannot move portlets on that page by using the Controller SPI or by any other method.

For every method of the Controller SPI that modifies portal resources, the Controller SPI also provides a corresponding method to confirm the respective modification. All confirm methods start with the prefix `confirm` followed by the name of the method which is to be confirmed.

Example - Confirming placement of a portlet by confirming the movement of the control of that portlet:

```
// check if the control may be moved to the specified layout container
final boolean result = lmController.confirmInsert(control, container, null);

// check result
if (result == true) {
    // control may be moved to specified layout container
} else {
    // control may not be moved to specified layout container
}

```

!!!note

    There is no guarantee that a modification will indeed be successful after the related `confirmxxx` method returns `true`. This is due to the fact that the underlying data structure might have changed between the confirmation and the actual modification.


