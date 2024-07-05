# Web content system overview

The type of web content system you deploy is determined by the size of your web content system, the type of website, and the number of users that create content, or view your web content.

## Web content system types

There are three main types of web content systems:

-   **Single environment systems**

    This environment is where authoring and delivery occur within a single environment. This type of environment would be deployed by a small organization with a small website, such as an intranet. Authoring and delivering content within the same environment can be resource-intensive, so the type of environment you deploy needs to be robust enough to allow authoring and delivery to occur at the same time. For example, running clustered servers is a common solution for a single instance system.

-   **Dual environment systems**

    This environment is where authoring and delivery are split into different environments. This model reduces the load on both authoring and delivery servers and also allows the authoring environment to be located behind a firewall. This type of system would be used with externally facing websites, or where you have many users authoring content or many users viewing a website.

-   **Staged systems**

    This environment is where a staging environment is added between the authoring and delivery environments. The staging environment can be used for user acceptance testing \(UAT\) or to accumulate changes from your authoring environment before changes are syndicated to your delivery environment in a single batch. This system would be deployed to deliver large, complex sites with many content creators and you need to ensure that the website content is accurate, error-free and can run under load.


## Environment types

-   **Authoring environment**

    An authoring environment is used to create and manage web content. This environment is used by your content creators and website designers. An authoring system can consist of:

    -   An authoring server or cluster.
    -   Individual UAT servers where site and content updates can be tested before the content is syndicated to the delivery environment.

-   **Staging environment**

    A staging environment can consist of:

    -   Individual holding servers where changes from your authoring environment can be accumulated before your changes are syndicated to your delivery environment in a single batch. Pairs of holding servers can be used to provide you with built-in redundancy.
    -   A complete replica of your delivery environment where UAT can occur to both review site and content updates, and to test the performance of your delivery environment.

-   **Delivery environment**

    This environment is used by your website viewers. A delivery environment can consist of:

    -   Pre-rendered sites where a web content site is pre-rendered as a set of HTML files that are then used to deliver a static website.
    -   a HCL Portal server or cluster where content is delivered by a servlet. Servlet delivery is used to deliver websites that contain dynamic content, but do not include any HCL Portal content or applications.
    -   a HCL Portal server or cluster where content is delivered by either a local or remote web content viewer portlet. Web content viewer portlets are used to deliver websites that contain dynamic web content alongside other portlets or applications.
    -   A combination of the previous three.


???+ info "Related information"
    - [HCL Web Content Manager \(WCM\) environments](../wcm_env/index.md)

