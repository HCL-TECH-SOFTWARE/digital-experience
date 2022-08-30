# Configuring




Configure the **Schedulers**, **Filters**, and **Security** from the respective tabs in the Create a New Content Source page.

## Configuring the scheduler

To configure the schedule, click the **Scheduler** tab to display the following options:

-   **Define Schedule**

    From this box update, the date, time, and interval and click **Create** to add new schedule.

-   **Scheduled updates**

    The schedule updates of the crawls are displayed.


**Note:** The time interval between the crawler runs must be more than the maximum execution time. A crawler cannot be started if it is running. If a crawler job is started while the crawler is running, this execution is ignored and the crawler is only started at the next scheduled time.

## Configuring the Filters

The crawler filters control the crawler progress and the type of documents that are indexed and cataloged. Crawler filters are divided into the following two types:

-   **URL filters**

    These filters control which documents are crawled and indexed, based on the URL where the documents are found.

-   **Type filters**

    These filters control which documents are crawled and indexed, based on the document type.


If you define no filters, all documents from a content source are fetched and crawled. If you click **Include filters**, only those documents that pass the included filters are crawled and indexed. If you click **Exclude filters**, they override the included filters. If you define no included filters, they limit the number of documents that are crawled and indexed. More specifically, if a document passes one of the included filters, but also passes one of the excluded filters, it is not crawled, indexed, or cataloged.

To configure filters, click the **Filters** tab. The defined filters are listed in the Filtering Rules box.

-   **Define Filter Rules**

    You can define new filters in the Define Filter Rules box.

    -   **Rule Name**

        Provide a Rule Name in this mandatory field.


Configure the settings for when to apply rule, set the rule type, and basis and click **Create**. The defined filters are displayed in the Filtering Rules box.

When you configure the followings setting:

-   **Apply rule while: Collecting documents**
-   **Rule type: Include**

Make sure that the URL in the field **Collects documents that are linked from this URL:** in the General Parameters tab fits the specified rule; otherwise, no documents are collected. For example, crawling the URL https://www.hcltechsw.com/wps/portal/products with the URL filter \*/products/\* does not give any results because the rule has a training slash, but the URL does not. But either crawling https://www.hcltechsw.com/wps/portal/products with the URL filter \*/products/\* \(both with the trailing slash\), or crawling https://www.hcltechsw.com/wps/portal/products with the URL filter \*/products\* \(no trailing slash\) works.

## Configuring security for a content source

You can configure the security for indexing secured content sources and repositories that require authentication. Click the **Security** tab to display the following two boxes:

-   **Define security realm**

    This box is used to add new secured content sources.

    In the Define security realm box, enter the following data entry fields and click the **Create** icon.

    -   **User name**

        Enter the User ID with by which the crawler can access the secured content source or repository.

    -   **Password**

        Enter the password for the User ID that you completed for the user name.

    -   **Host name**

        Enter the name of the server. For portal sites and seedlist providers, this entry is not required. If you leave it blank, the host name is inferred from the provided root URL.

    -   **Realm**

        Enter the realm of the secured content source or repository.

-   **Security realms**

    This box displays a list of existing security realms. You can edit or delete a Security realm as needed.


