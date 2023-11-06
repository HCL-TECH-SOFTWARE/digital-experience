# Web content testing environments

Testing environments can be simple or complex for testing content, themes, application changes, and delivery environment performance.

A single website might have multiple testing environments. Some testing environments focus on content and design integration, application and data integration, performance, and more. A web content test environment is a layer of validation before changes are sent to the live website. The test environment might be used to accumulate changes from your authoring environments before the changes are syndicated to the production delivery environment.

## Site testing in an authoring environment

When you test in an authoring environment, a testing server is paired with an authoring server. The testing server simulates the delivery environment and is used to test major changes to a website.

![Authoring environment that is configured to send and receive changes to and from a testing environment. Live changes are then sent to the website.](../../../../images/wcm_authoring_uat.jpg)

## System testing in a staging environment

When you test in a staging environment, data from the authoring environment is syndicated to a staging environment. You conduct user-acceptance testing in the staging environment. If all elements pass the tests, data is syndicated from staging to the delivery production environment.

![Diagram depicting flow from authoring, to staging, to the live website by using syndication of live items](../../../../images/wcm_staging_production.jpg)

Specific activities take place in each environment.

-   **Authoring environment**

    -   Create drafts
    -   Approve drafts
    -   Test changes
    -   Publish changes
    -   Syndicate live items to the staging environment

-   **Testing environment**

    - Test changes
    - Syndicate live items to the production environment

-   **Production environment**

    - Deliver to the live website



???+ info "Related information"
    - [Staging to production list](../../../../deployment/manage/staging_to_production/overview_of_staging_to_prod/dep_stage_check.md)
    - [HCL Web Content Manager \(WCM\) environments](../wcm_env/index.md)

