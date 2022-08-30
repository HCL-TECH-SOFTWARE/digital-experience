# Customizing headers, footers, and result designs for lists \| CTC for HCL Digital Experience

The List Presentation component combines definitions for headers, footers, and result designs in one reusable component. Copying a similar List Presentation component is the easiest way to create your own List Presentation component. Store your List Presentation component in a custom library for use in List, Slideshow, and Carousel items.

Consider these best practices when defining headers, footers, and result designs for custom List Presentation components.

-   Customizing headers and footers

    Here are some examples of customized headers and footers:

    -   Headers and footers can test for the existence of content before rendering, making it possible to completely hide a component if there is no content to display.
    -   Headers and footers in list components can be used to display paging information. List components render them inside the context of the list rendering or in the no results design.
-   Customizing result designs

    Create new result designs to show different fields or fields from a new or modified template. Keep these best practices in mind.

    -   The Content Template Catalog results designs set up the <ul\> and <li\> tags inside the result designs. This technique separates the markup for list rendering from the header and footer markup, making them more reusable. The results design controls which tags are used to represent a list of results. It can also produce multiple lists, as shown in the result form for slideshows, which produces a slideshow list and an "overflow" list.
    -   The plug-ins that are provided with Content Template are useful in result designs. You can use them to change content, such as hiding and showing information based on its availability and rendering different markup for the first and last item or specific item numbers.
    -   Results designs can get complex. Test them carefully to ensure they work in all scenarios.


**Related information**  


[The List Presentation component](../ctc/ctc_arch_prestemp_listpres.md)

