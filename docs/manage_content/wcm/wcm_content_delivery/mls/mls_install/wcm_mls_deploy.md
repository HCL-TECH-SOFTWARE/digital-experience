# Multilingual deployment Multilingual Solution

Deployment of multilingual sites can be centralized, running out of single environment, or decentralized where locales are served from different environments.

## Centralized deployment

In a centralized deployment, all locales are served from the same environment and all of your localized content is syndicated. Web server mappings to each locale home page are created either as domains or as paths. These mappings provide easily remembered URLs for users to link to a localized version of your site.

-   **Using a single domain name**

    When a single domain name is used, each path is mapped to the home page in a localized library, by using URLs like http://mydomain/en or http://mydomain/es for different localities.

-   **Using multiple domain names**

    When multiple domain names are used, each domain is mapped to the home page in a localized library, by using URLs like http://mydomain.com or http://mydomain.com.es for different localities.

    Your localized navigation links change the domain, not just the path, and use a fully qualified path, not a relative path.


## Decentralized deployment

In a decentralized deployment, locales are served from separate environments, one per environment, or potentially multiple locales per environment. Multiple domains must be used, where each locale or combination of locales is served from its own domain.

-   When you implement a decentralized deployment, users either switch between localized content on an item by item basis, or users select the locale to use and are taken to the home page for that locale.
-   To support a decentralized environment, you need to have all content in all locales that are deployed to every locale environment. The navigation code can then check which content is available before links are rendered, and the user can browse to that localized version without losing their session.
-   When using an anonymous site, you can redirect to the localized version of a site on another server. This strategy requires fully qualified links to be generated.

## Locale home page navigation

If your site requires a link to go to the home page of each locale instead of item-by-item navigation, you can create links to your other servers. The advantage of implementing your site this way is that you do not need to deploy all content to all servers. You only need the content for the locale you intend to serve out of that environment and any shared assets.

The links to your other localized domains need to be hard-coded because these links cannot be automatically generated.


