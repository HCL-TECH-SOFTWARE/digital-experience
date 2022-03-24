# Creating your own layout 

When you create your own layout.html files, it is important to apply one semantic type and one grid type relative width class to each container. Such as wpthemeMedium and wpthemeCol6of12. Applying both ensures that those creating portlets and other page elements do not have to define styles for both types. Along with neither type and both types, they also have the choice to define styles for just one of the types, depending on their needs of granularity.

When you apply one of each type, it is also important to apply the properly matching ones. For example, it is important to use either `wpthemeCol3of12`, `wpthemeCol4of12` or `wpthemeCol2of5` with `wpthemeNarrow`. Never add one of the other mismatching ones, such as `wpthemeCol9of12` with `wpthemeNarrow`.

**Parent topic:**[Relative width CSS classes for theme layouts ](../rwd/rwd_relwidth_css.md)

