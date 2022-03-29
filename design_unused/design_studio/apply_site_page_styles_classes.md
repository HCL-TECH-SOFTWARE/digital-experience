# Apply styles and classes to site pages with Design Studio \(Beta\)

This section explains how to apply styles to elements in using Design Studio \(Beta\) and how to reuse them through classes.

## Apply styles on an element

Styles applied on a content element without classes **records the styles by using the id of the element as its CSS selector**. This means that those styles are only applied to that content element and cannot be applied to another.

In case of style conflicts, the styles applied this way takes precedence over the rest of the styles applied using other methods that are described below.

1.  On the Design Studio \(Beta\) Site overview, select the site, then the site page you want to edit.
2.  Select a content element.
3.  Switch to the styles panel by clicking **Open Style Manager** located in the top toolbar.

    ![Open Style Manager](../images/Click%20Style%20Manager.png "Select Open Style Manager")

4.  Change any of the style options.

## Reuse styles using classes

Styles applied on a content element with a class **records the styles by using the class of the element as its CSS selector**. This means that those styles are applied to elements that has that class. Any changes made to styles in that class is immediately applied to all of the content elements using it.

1.  On the Design Studio \(Beta\) Site overview, select the site, then the site page you want to edit.
2.  Select a content element.
3.  Switch to the styles panel by clicking **Open Style Manager** located in the top toolbar.
4.  Add a class in the style selector.
5.  Change any of the style options.

    ![Add style class and options](../images/Add%20style%20and%20options.png "Add style class and options")


## Use combination classes

You can use **more than one class** on a content element as its CSS selector. All styles in those classes are applied in combination to the element. In case there are conflicting styles in those classes, **the styles applied in the class that was created last takes precedence**.

Styles can also be applied on the specific class combinations \(combos\) the same way it is applied to a single class. In case of conflicts, **styles that are applied on a combo class applies takes precedence** over those that are inherited from a class. Similarly, the more classes there are in a combo class, the higher precedence that combo class takes in case of conflicting styles.

1.  On the Design Studio \(Beta\) Site overview, select the site, then the site page you want to edit.
2.  Select a content element.
3.  Switch to the styles panel by clicking **Open Style Manager** located in the top toolbar.
4.  Add more than one class in the style selector.
5.  Change any of the style options.

    ![Add more than one class](../images/Add%20more%20than%20one%20class.png "Add more than one class")


**Note:** You can deactivate or activate a class in the combo to view and update the styles in a class or a subset of classes in the combo. This can be done by clicking on the checkbox beside the class.

## Use states

This CSS selector option can be used in combination with the selectors described above. In case of combo classes, this adds another level of precedence.

1.  On the Design Studio \(Beta\) Site overview, select the site, then the site page you want to edit.
2.  Select a content element.
3.  Switch to the styles panel by clicking **Open Style Manager** located in the top toolbar.
4.  \(*Optional*\) Add a class or combo classes.
5.  Switch to different state selector.

6.  Change any of the style options.


## Reusing styles across pages

The classes or combo classes are stored on the site object. This means that they can be used in other pages within that site. Any style changes applied to those are always applied site-wide.

## Deleting a class

Deleting a class means removing it from the class attribute of your target element. Doing so removes the styles applied to your element through that style. This doesn't mean that the class is deleted entirely, and it can still be reused later on.

The same is true for combo classes.

**Important note:** There is no way to completely delete unused classes, so we recommend that you avoid creating a lot of unused classes. However, they may be renamed so that they may be repurposed for future use.

