# Creating page component configuration types 

The page component configuration types in Content Template Catalog are useful in a wide variety of cases. This flexibility results in configuration types that might be more complex or contain more fields than your authors need. Creating customized page component configuration types allows you to reduce the number of fields or provide more validation for less technical authors.

You can copy one of the existing authoring templates as a start to creating your own. If you reuse the header, footer, stylesheet, and other elements, you can reuse some of the existing rendering code. Here are some examples of new configuration types:

-   Provide a more specific interface for a particular type of design content

    For example, you might create an interface for authors who need to create an external advertising block. It would be similar to a Teaser, but with fewer fields and less complexity.

-   Represent a new type of widget

    For example, you might create an image gallery. The Slideshow and Carousel components provide good examples for working with widgets. Both of these expect the supplied result design to write markup or data in a form that the widget uses. A script in the footer then bootstraps the widget code into the page, and does any necessary setup – such as passing in the data and setting configuration parameters. The configuration of the widget is represented to the user as a series of fields with predefined selection values where appropriate.


**Parent topic:**[Customizing sites built with Content Template ](../ctc/ctc_design_custom.md)

