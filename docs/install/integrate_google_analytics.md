# Integrate Google Analytics with HCL Digital Experience

This section includes information set up integration of Digital Experience sites with Google Analytics and to view the resulting web analytics tracking to assess the effectiveness of your DX site pages with end user audiences.

[Google Analytics](https://analytics.google.com) provides ways for website owners to collect data on the visitors of their website, their activity and their interactions.

Complete the following steps to integrate Google Analytics to the HCL Digital Experience platform and to apply the integration to assess the effectiveness of DX sites with your target user audiences.

## Installation

HCL Digital Experience utilizes the platform [Active Site Analytics](../admin-system/sa_asa_work.md) framework, which includes application scripts, called Aggregators, to collect page interactions data sent to external web analytics services for analysis. HCL DX administrators and page owners can manage the aggregators. They can assign an aggregator to one or more DX labels or pages.

In HCL DX 9.5 CF19 and higher, a new Active Site Analytics aggregator for Google Analytics is available.

## Adding an Active Site Analytics aggregator to a DX site page

Obtain a Google Analytics account with ability to connect to your Digital Experience site.

1.  Add the DX GoogleAnalyticsAggregator.js to the **HCL DX theme profile**.

    In HCL DX 9.5 CF19 and higher, the GoogleAnalyticsAggregator.js file is located in the PortalServer\_root/doc/js-samples directory.

    -   If using a WebDAV-based theme, copy the GoogleAnalyticsAggregator.js file to mycontenthandler/dav/fs-type1/theme/\{your-custom-theme\}/js.
    -   If using a WAR-based theme, include the GoogleAnalyticsAggregator.js file in the static theme WAR file.
    For example, when using a WAR-based theme, the location of the GoogleAnalyticsAggregator.js file after installing to the <YourTheme\> WAR file will be deployed under `wp_profile`:

    wp\_profile/installedApps/<cell\>/<YourTheme.ear\>/<YourTheme.war\>/themes/<YourTheme\>/js

    Refer to the file tree below how the custom theme app will be deployed:

    ```
    wp_profile
        ---> installedApps
            ---> <cell>
                ---> <YourTheme.ear>
                    ---> <YourTheme.war>
                        ---> themes
                            ---> <YourTheme>
                                ---> js
                                    ---> GoogleAnalyticsAggregator.js
    ```

2.  Add the DX GoogleAnalyticsAggregator.js to the **HCL DX theme profile**.

    **Note:** The theme profile used by the page\(s\) needs to include `wp_analytics` or at least `wp_analytics_aggregator`.

    -   **HCL DX without Practitioner Studio installed:**

        a. On **Site Manager**, select **Page** \> **Page Settings** \> **Page Properties** \> **Advanced**

        b. Go to **Manage Pages** portlet, click the Administration menu icon. Then, select **Portal User Interface** \> **Manage Pages**.

    -   **HCL DX 9.5 with Practitioner Studio installed:**

        a. Select **Administration** \> **Site Management** \> **Pages** to access the **Manage Pages** interface.

        ![sing Manage Pages to add Google Analytics tracking                                                 to specified DX pages](../assets/use_manage_pages_google_analytics.png "Using Manage Pages to add Google Analytics
                                                        tracking to specified DX pages")

        b. Locate the page to which you want to assign the aggregator. Use the **Manage Pages** portlet to locate the page.

        **Note:** The page must be located as a child of the portal content root.

        c. Select **Edit Page Properties** for the page that you selected.

        **Note:** You cannot add an Active Site Analytics aggregator to the content root. Edit Page Properties is not available for the content root.

        d. To expand the available choices, click the plus sign \(+\) icon next to **Advanced Options**.

        e. Click **I want to set parameters**.

        f. In the field **New parameter**, type a string that starts with `asa_aggregator` or `asa_dependency`. Values that correspond to names that start with the string `asa_aggregator` are added to the page body, names that start with `asa_dependency` are added to the head. Both the aggregators and dependencies are added to the portal page in alphabetical order according to the Java method `Collections.sort()`.

        g. In the **New** value field, type the name of the aggregator script file, in this case: GoogleAnalyticsAggregator.js.

        h. Click **Add**.

        i. Verify that the new parameter is added to the list.

        j. Repeat steps F - I for all aggregators and dependencies.

        k. Click **OK** to return to the main Page Properties screen.

        l. Click **OK** to save your changes and return to the Manage Pages screen.

    **Note:** Child pages inherit the script that is set on the parent page. If you want to use a different aggregator on a child page, follow the same procedure that is previously addressed for the child page to make the appropriate assignment. If you want to block inheriting the aggregator setting from the parent page, follow the same procedure, but leave the value empty. As a result, the page has no aggregator that is assigned any longer, and all child pages of the parent page inherit the new setting.

3.  Log in to your Google Analytics account and obtain the `GA_MEASUREMENT_ID` in your Google Analytics Dashboard. It is also referred to as **Tracking ID**.

    Example:

    ![Get Google Analytics Tracking ID](../assets/get_google_analytics_tracking_ID.png)

4.  Add the following metadata in your target HCL DX page\(s\) properties:

    -   `asa_dependency`: https://www.googletagmanager.com/gtag/js?id=GA\_MEASUREMENT\_ID
    -   `asa_aggregator`: GoogleAnalyticsAggregator.js
    -   `asa_js_ga_measurement_id`: GA\_MEASUREMENT\_ID
    Example:

    ![Google Analytics Tracking ID](../assets/google_analytics_tracking_ID.png "Adding the Google Analytics Aggregator metadata to
                                            specified HCL DX page(s) for analytics tracking")

    Optionally, you can register the Active Site Analytics tags/microformats as custom dimensions or metrics in the Google Analytics Dashboard and configure the aggregator to use your custom map. See [Google Analytics Custom Dimensions & Metrics](https://support.google.com/analytics/answer/2709828).

    For a list of Active Site Analytics tags associated with HCL DX site pages that can be tracked by the Google Analytics Aggregator, see [How Active Site Analytics data is represented in the portal](../admin-system/sa_asa_data.md) and [Supported aggregator tags](../admin-system/sa_asa_aggr_tags.md).

    ![Optionally configure the DX Google Analytics Aggregator to                                     use a custom map](../assets/configure_DX_go0gle_analytics_aggregator_using_custom_map.png "Optionally configure the DX Google Analytics Aggregator to
                                        use a custom map")

5.  Access the HCL Digital Experience site page analytics from Google Analytics analyze HCL DX site activity.

    After installing and configuring the aggregator to track analytics from specific HCL DX site pages using the steps above, DX content authors and site owners with access to Google Analytics can view the DX site activity tracked and reflected in Google Analytics Dashboard's real-time reports as an increase in the pageviews and active users.

    See the following example:

    ![In page analysis of HCL DX 9.5 Woodburn Studio site user interactions in Google Analytics](../assets/in_page_analysis_DX_Woodburn_Studio_site_user_interactions.png "In page analysis of HCL DX 9.5 Woodburn Studio site user
                                        interactions in Google Analytics")

    Refer to the [Analytics tags and site promotions](../admin-system/sa_asa_anal_tags_site_prom.md) topics for more information on how to add additional tags and site promotions in addition to the out-of-the-box ones.


## Configuration options for the HCL DX Google Analytics Aggregator

HCL DX administrators, content authors and site owners may optionally discontinue Google Analytics tracking of HCL DX pages, without removing the page metadata \(`asa_dependency`\) by adding the following ‘opt-out’ metadata in to the DX page\(s\) properties:

```
asa_js_ga.optout: true
```

This step will programmatically set the following window property:

```
window['ga-disable-GA_MEASUREMENT_ID']  = true
```

See [Disable Google Analytics measurement](https://developers.google.com/analytics/devguides/collection/gtagjs/user-opt-out) for additional information.

