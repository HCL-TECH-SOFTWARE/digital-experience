# Carousels 

A carousel can be added to your page from the Create Content Carousels view when in Edit mode.

One example of a carousel portlet is included with the Content Template; the Special Features Carousel.

In the same pattern as the Slideshow template, the Carousel template is like a List template with extra fields for configuring the carousel. JavaScript functions read the parameters and instantiate the carousel widget.

The carousel widget requires the data to be passed in through a JSON object. You can accidentally break the creation of this object and break the carousel if you introduce line breaks into a carousel result design because they break the JavaScript strings being generated.

The following example shows a carousel with featured items.

![This picture shows a carousel that allows readers to see a set of images with their associated content and links.](../images/CarouselExample_small.jpg)

## Carousel configuration

A carousel uses a configuration document based on the **Carousel** authoring template that is located in the **CTC Design** library. The following configuration parameters are used by a carousel:

-   **Items Per Page**

    This determines the maximum number of items that are displayed in the carousel at any one time.

-   **Slide Duration**

    This determines how long each slide in the carousel is displayed before the next image is displayed.

-   **Height**

    This determines the height of the carousel.

-   **List Title**

    Some list designs include a title in their header design. The title entered here is displayed in those list designs.

-   **CSS Style**

    Much of the look and feel of each carousel is defined in the CSS file that is linked to that carousel. You can enter the name of alternative CSS files here to change some design elements of the content that is displayed in the carousel.

-   **List component**

    The list component that is selected here defines what content is displayed in the carousel.

-   **List Presentation Component**

    The list presentation that is selected here defines the layout of the header, footer, and body of the content that is retrieved by the list component.

-   **Context Override**

    You can select a site, site area, content item to use as the default context of the carousel. This is used instead of the default carousel context.

-   **List Templates**

    Some list components display content that uses a specific authoring template. Extra authoring templates can be specified here.

-   **List Categories**

    Some list components display content that is profiled with specific categories. Extra authoring templates can be specified here.


-   **[Special Features Carousel ](../ctc/ctc-portlet-special-features-carousel.md)**  
Displays a set of items in a carousel. By default, any items that are profiled with the special feature category are displayed in the carousel.

**Parent topic:**[Page components ](../ctc/ctc-portlet-types.md)

