# Web content system overview

The size of your web content system, the type of website, and the number of users that create content or view your web content determine the type of web content system you deploy.

## Web content system types

There are three main types of web content systems:

-   **Single environment systems**

    With this environment, the team develops and delivers web content in a single environment. Typically, smaller organizations that host small websites, such as intranets, use this type of environment. Authoring and delivering content in the same environment can be resource-intensive, so the type of environment you deploy must be robust enough to handle authoring and delivery at the same time. For example, running clustered servers is a common solution for a single-instance system.

-   **Dual environment systems**

    In this environment type, authoring and delivery are split into different environments. This model reduces the load on both authoring and delivery servers and also allows the authoring environment to be located behind a firewall. This type of system would be used with externally facing websites or where you have many users authoring content or many users viewing a website.

-   **Staged systems**

    In this environment, a staging environment is added between the authoring and delivery environments. The staging environment can be used for user-acceptance testing \(UAT\) or for accumulating changes from your authoring environment before the changes are syndicated to your delivery environment in a single batch. Deploy this system to deliver large, complex sites with many content creators and to ensure that the website content is accurate, error-free, and can robust.


## Environment types

-   **Authoring environment**

    Content specialists and website designers use an authoring environment to create and manage web content. An authoring system can consist of the following elements:

    -   An authoring server or cluster.
    -   Individual UAT servers where site and content updates can be tested before the content is syndicated to the delivery environment.

-   **Staging environment**

    A staging environment can consist of the following elements:

    -   Individual holding servers where changes from your authoring environment can be accumulated before they are syndicated to your delivery environment in a single batch. Pairs of holding servers can be used to provide built-in redundancy.
    -   A complete replica of your delivery environment where UAT can occur for both site reviews and content updates and to test the performance of your delivery environment.

-   **Delivery environment**

    Your website viewers use this environment. A delivery environment can consist of the following elements:

    -   Pre-rendered sites where a web content site is pre-rendered as a set of HTML files that are then used to deliver a static website.
    -   An HCL Portal server or cluster where content is delivered by a servlet. Servlet delivery delivers websites that contain dynamic content but do not include any HCL Portal content or applications.
    -   An HCL Portal server or cluster that delivers content by using either a local or remote web content viewer portlet. Web content viewer portlets deliver websites that contain dynamic web content alongside other portlets or applications.
    -   A combination of the previous three elements.


???+ info "Related information"
    - [HCL Web Content Manager \(WCM\) environments](../wcm_env/index.md)

