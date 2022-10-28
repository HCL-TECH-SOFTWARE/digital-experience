# Remote Model SPI REST service

The Remote Model SPI gives you access to portal models through REST services. It allows you to obtain and modify portal resources that are exposed by some of the models of the model SPI remotely, that is from clients that are outside the JVM of the server. This is achieved by means of REST services.

The Remote Model SPI supports the following models:

-   **ContentModel**

    This allows you to obtain and modify the content topology and the properties of content nodes such as pages, labels, and content URLs.

-   **NavigationModel**

    This allows you to obtain the navigation topology only, as the navigation model is implied by the structure of the content model.

-   **LayoutModel**

    This allows you to obtain and modify the layout of a page, that is the topology of layout elements of a page, and the properties of layout elements, such as layout containers and layout controls.

-   **PortletModel**

    This allows you to obtain, create, update, and delete portlets.


Note that the Remote Model SPI currently does not support the following models:

-   LanguageList
-   MarkupList
-   SkinList
-   ThemeList

The Remote Model SPI uses feeds in the [Atom Syndication Format](http://www.ietf.org/rfc/rfc4287) in conjunction with the [Atom Threading Extension](http://www.ietf.org/rfc/rfc4685.txt) to expose model resources, and the HTTP-based [Atom Publishing Protocol (APP)](http://tools.ietf.org/html/rfc5023) to modify portal resources. With the Remote Model SPI as a REST service, you must use the following HTTP verbs:

-   To obtain model information: `HTTP GET`
-   To modify existing model information: `HTTP PUT`
-   To create model resources: `HTTP POST`
-   To delete model resources: `HTTP DELETE`

-   **[Feeds for REST services](../dev/rest_feed.md)**  
When you access a REST service to get information or to modify a portal resource, the response and in some cases also the request works by means of a feed. A feed contains information about one or more portal resources in a specific format as exposed by portal models. Learn how you obtain feeds for portal resources and what the format of such feeds is.


