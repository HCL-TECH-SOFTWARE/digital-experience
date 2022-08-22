# Writing an aggregator for Active Site Analytics

You can write your own scripts to retrieve the data for Active Site Analytics from the portal themes and skins and connect to your analytics service provider. Such scripts are called aggregators.

The portal themes that come with HCL Portal write the data that Active Site analytics needs into the markup. The data is provided in the form of microformats, which are injected into the markup during rendering.

The scripts that retrieve this data from the page markup are called aggregators. After retrieving the relevant microformat instances, the aggregator typically submits the collected data to an external analytics service where the data is then recorded, processed, and formatted in the form of reports.

The portal provides a client side JavaScript SPI that you can use to implement aggregators. The SPI is named **Active Site Analytics Mediator SPI**.

Aggregators that are based on the Active Site Analytics Mediator SPI behave consistently in HCL Portal, irrespective of the render mode of the portal page to which the aggregator is applied. This includes server side aggregation rendering and client side aggregation rendering modes. An aggregator can capture the latest data that is relevant for Active Site Analytics even in the client side aggregation mode that uses Ajax technologies to refresh individual page parts that are part of the DOM. Beyond that, the SPI also supports custom Ajax applications that can be part of a portal page.

From a programming model perspective, the Active Site Analytics Mediator SPI allows aggregator implementations to register callback functions; the portal framework calls these functions to notify the aggregator about DOM changes that can be relevant for Active Site Analytics. Upon receiving such notifications, aggregators can parse the DOM to find the relevant microformats to send this information to the analytics service.

For typical portal pages use the Active Site Analytics Mediator SPI for implementing your aggregators. However, for simpler pages you can also implement your aggregator by using a simple inline script which is executed at the end of your portal page. In this case the page must fulfill both of the following conditions:

-   The page does not exploit client side aggregation rendering.
-   Your applications on the page do not use Ajax technologies to refresh single page parts that might contain analytics-relevant microformats.

The SPI does not affect the way you can configure aggregators. For details about how to configure aggregators see the topic about *Adding an Active Site Analytics aggregator to a portal page*.

-   **[The Active Site Analytics Mediator SPI](../admin-system/sa_asa_med_spi.md)**  
The portal provides a client side JavaScript SPI named Active Site Analytics Mediator SPI. You can use it to implement aggregators. The Active Site Analytics Mediator SPI allows aggregators to register callback functions; the portal framework calls these functions to notify the aggregator about DOM changes that can be relevant for Active Site Analytics.
-   **[Guidelines for implementing an aggregator](../admin-system/sa_asa_med_spi_aggr.md)**  
When you implement an aggregator by using the Active Site Analytics Mediator SPI, the following guidelines can be helpful.
-   **[Aggregator patterns and samples](../admin-system/sa_asa_aggr_xmp.md)**  
The aggregator patterns and samples section provides common aggregator patterns and samples that you might want to adopt to implement your own aggregator.
-   **[How to identify and resolve problems with your aggregator](../admin-system/sa_asa_aggr_trbl.md)**  
If your custom aggregator is not working correctly, perform the checks listed here.


**Related information**  


[Analyzing user behavior by Active Site Analytics](../admin-system/sa_asa_work.md)

