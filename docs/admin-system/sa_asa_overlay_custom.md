# Customizing overlay reports 

You can customize your own overlay reports by setting specific parameters as required. Learn about the parameters and the levels at which you can specify them.

The scheme described here applies to all parameters that are available for overlay reports.

## Report parameters for customizing overlay reports

To customize the display of overlay reports, you can provide the additional query parameters listed in the following. You can provide all these parameters at six different levels. The levels are listed and described in a table later in this topic. Depending on the level, you have to prefix the parameters with asa.report . Also depending on the level, you specify the parameters and their values in different locations and ways, for example as part of code with an equal sign, or by typing them into fields in a user interface.

-   **metrics \[page\|portlet\]**

    You can specify metrics for the page only, for the portlets only, or for a page and all portlets on it:

    -   **metrics**

        This affects both page and portlet metrics.

    -   **metrics.page**

        This affects only page metrics.

    -   **metrics.portlet**

        This affects only portlet metrics.

    For these parameters, specify a comma separated list of metrics that you want to show in the overlay report. Do not include spaces between the items in the comma separated list. Specify the metrics by their column ID. You can use all metrics that are available in an IBM® Coremetrics® Web Analytics trend report. The default value is SESSIONS,PAGE\_VIEWS. Note that the type of the overlay reports is optimized for displaying two metrics. Specifying fewer than one or more than two metrics may yield unexpected display results. The list of applicable metrics depends on the type of your Coremetrics® account.

-   **granularity**

    Specify the interval granularity of the displayed metrics. Specify an uppercase letter. The default value is W for weekly reports. Possible values are as follows:

    -   **D**

        Daily

    -   **W**

        Weekly. This is the default.

    -   **M**

        Monthly

    -   **Q**

        Quarterly

    -   **Y**

        Yearly

-   **numPeriods**

    Specify the number of periods that you want to have reported. This starts backwards from the value that you specify for the parameter `period_a`. Specify a numerical value larger than 1 . The default value is 4 .

-   **period\_a**

    Specify the ending date for reports in the format YYYYMMDD . Specify a valid date in the past. Reports will show data from this date backwards, with the number of periods as specified by the parameter `numPeriods` and the granularity as specified by the parameter granularity . The default value is `yesterday` ; it is computed at the time of the HTTP request in the format YYYYMMDD .


## Providing parameters at multiple levels

You can set the parameters for the customized display of overlay reports at six different levels as shown by the following table. Depending on the level, you have to prefix the parameters with asa.report , for example, asa.report.granularity .

|Level hierarchy|Specify the parameter at this level:|Prefix the parameter with the following string:|Configure the parameter at this layer:|Set this parameter by using the following method:|
|---------------|------------------------------------|-----------------------------------------------|--------------------------------------|-------------------------------------------------|
|1|HTTP request parameter|—|HTTP request|Custom code in the theme or skin|
|2|Portlet parameter - metadata|`asa.report.`|portlet window|XML configuration interface|
|3|Portlet preference|`asa.report.`|portlet|Portlet Edit mode, XML configuration interface|
|4|Page parameter - metadata|`asa.report.`|page|Page Properties dialog, XML configuration interface|
|5|Portal Configuration Service parameter|`asa.report.`|WP Config Service|WebSphere® Integrated Solutions Console|
|6|Default value|—|HCL Portal product code|N/A - product code. You cannot change this default value, but you can override it in the layers listed previously.|

If you provide parameters at multiple levels, the settings are applied in the hierarchical order of levels as given in the first table column Level hierarchy. Parameters specified at levels shown in earlier rows in table 1 override parameters shown in last table rows.

## Customization examples

The following examples for customizing overlay reports show how the override precedence works between different levels in the hierarchy of levels. The examples use the granularity parameter. The precedence hierarchy works the same way for all other report parameters.

-   **Example 1:**

    Scenario: No configuration provided.

    Parameter settings:

    |Level hierarchy|Level|Interval granularity key|Interval granularity value|
    |---------------|-----|------------------------|--------------------------|
    |1|Request parameter|—|—|
    |2|Portlet parameter - metadata|—|—|
    |3|Portlet preference|—|—|
    |4|Page parameter - metadata|—|—|
    |5|Configuration parameter|—|—|
    |6|Default value|`granularity`|W \(weekly\)|

    Result: All defaults apply. All overlay reports will show sessions and page views in weekly interval granularity for four weeks, starting backwards from yesterday.

-   **Example 2:**

    Scenario: Interval granularity is overridden on the page level.

    Parameter settings:

    |Level hierarchy|Level|Interval granularity key|Interval granularity value|
    |---------------|-----|------------------------|--------------------------|
    |1|Request parameter|—|—|
    |2|Portlet parameter - metadata|—|—|
    |3|Portlet preference|—|—|
    |4|Page parameter - metadata|`asa.report.granularity`|M \(monthly\)|
    |5|Configuration parameter|—|—|
    |6|Default value|`granularity`|W \(weekly\)|

    Result: As the granularity setting at the higher level overrules the one at the subordinate level, overlay reports at the page where `asa.report.granularity` is set show sessions and page views with monthly granularity for four weeks, starting backwards from yesterday. Reports on all other pages will show as specified by the default configuration.

-   **Example 3:**

    Scenario: Interval granularity is overridden at request level.

    Parameter settings:

    |Level hierarchy|Level|Interval granularity key|Interval granularity value|
    |---------------|-----|------------------------|--------------------------|
    |1|Request parameter|`granularity`|W \(weekly\)|
    |2|Portlet parameter - metadata|—|—|
    |3|Portlet preference|—|—|
    |4|Page parameter - metadata|`asa.report.granularity`|M \(monthly\)|
    |5|Configuration parameter|—|—|
    |6|Default value|`granularity`|W \(weekly\)|

    Result: As the request parameter has the highest precedence, overlay reports will show sessions and page views with weekly interval granularity for four weeks, starting backwards from yesterday. Reports on all other pages will show as specified by the default configuration.


**Parent topic:**[Displaying overlay analytics reports ](../admin-system/sa_asa_overlay_stats.md)

**Previous topic:**[Viewing overlay analytics statistics ](../admin-system/sa_asa_ovrly_stats_ui.md)

