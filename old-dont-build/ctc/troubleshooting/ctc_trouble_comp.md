# Troubleshooting components

Find solutions to problems that involve styles, lists, and other components.

## Styles are missing or incorrect

-   **Problem**

    Incorrect or missing style.

-   **Solution**

    Fix the incorrect or missing style. Ensure that the page component configuration has the correct CSS class entered into the style field. If the CSS class is missing or incorrect, none of the scoped style selectors work.


## No content is being shown in a list when you are sure that there should be

-   **Problem**

    Incorrect or missing scoping.

-   **Solution**

    Fix the incorrect or missing Context Override value. Verify that the scoping in the Context Override field is correct. Set the scoping to the appropriate site area or you can leave it blank if the current page scope is required.


-   **Problem**

    Incorrect or missing template parameter.

-   **Solution**

    Fix the incorrect or missing List Templates value. For lists that are scoped dynamically by authoring template, verify that the List Templates field is correct. It should be in the format Library Name/Template Name.


## Content in a list is coming from the wrong area of the site, or is of the wrong type

-   **Problem**

    Incorrect or missing scoping.

-   **Solution**

    Fix the incorrect or missing Context Override value. Verify that the scoping in the Context Override field is correct. Set the scoping to the appropriate site area or you can leave it blank if the current page scope is required.


-   **Problem**

    Incorrect or missing template parameter.

-   **Solution**

    Fix the incorrect or missing List Templates value. For lists that are scoped dynamically by authoring template, verify that the List Templates field is correct. It should be in the format Library Name/Template Name.


## Content in a filtered index or in any lists of upcoming or recent event lists does not change when the content is modified

-   **Problem**

    Content does not update immediately on rule-based lists. Lists that are generated by using Personalization rules include all of the indexes that have filtering forms, and all lists that show upcoming or "recent" content. The results of rule execution are cached, and the list will not be updated immediately after the content is modified.

-   **Solution**

    Wait for the cache to expire, or reduce the cache timeout. Note that this will affect performance, so it might be only desirable to make this change in authoring environments to assist previewing.

-   **Workaround**

    For filtered indexes, changing the date range to use a broader date range results in a cache miss, and the rule re-executes.


## Slideshow or carousel is not working

-   **Problem**

    Incorrect or missing initialization script.

-   **Solution**

    Select the appropriate footer script for the type of widget that is being used. Slideshows and carousels require the appropriate script to be embedded in their footers to attach the appropriate Dojo code. Check that the Footer field on the page component configuration has the appropriate script selected.


-   **Problem**

    Carousel data contains carriage returns. The data for the carousel widget is passed in by using a JavaScript string, which breaks if the string has carriage returns.

-   **Solution**

    Check that the data for the carousel does not have carriage returns in it. Remove carriage returns from the result design being used in a carousel.


## Time-based content is no longer displayed in the CTC Demo site

-   **Problem**

    Time-based content is not displayed in the CTC Demo site when the date and time for that content becomes old, meaning that the content is not included in the recent or upcoming item lists.

-   **Solution**

    Use the ConfigEngine task action-ctc-refresh-demo-site-time-based-content to refresh the year that is used in time-based content.

    1.  Open a command window and browse to the ConfigEngine directory.
        -   **Windows™**

            C:/IBM/WebSphere/wp\_profile/ConfigEngine

        -   **AIX®**

            /usr/IBM/WebSphere/wp\_profile/ConfigEngine

        -   **HP-UX**

            /opt/IBM/WebSphere/wp\_profile/ConfigEngine

        -   **Linux™**

            /opt/IBM/WebSphere/wp\_profile/ConfigEngine

    2.  Run the ConfigEngine batch or script.
        -   **Windows™**

            ```
            ConfigEngine.bat run-action-ctc-refresh-demo-site-time-based-content
            ```

        -   **AIX®HP-UX Linux™**

            ```
            ./ConfigEngine.sh run-action-ctc-refresh-demo-site-time-based-content
            ```



