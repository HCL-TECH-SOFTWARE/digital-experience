---
id: site_search_forms
title: Setting up search for site visitors
---
import useBaseUrl from '@docusaurus/useBaseUrl';



Learn about the initial considerations for setting up search for site visitors before you begin configuring and administering search on your website.

-   **What is your portal environment?**

    If you are operating in a stand-alone environment, you can use the Default Search collection to start working immediately with Portal Search. If you are operating in a cluster environment, remote search service must be installed and configured before Portal Search can be used. Remote search service enables all nodes of the cluster to equally access the same search service.

-   **What keywords, categories, and metadata do you want to specify for searching?**

    Predicting specific search terms and keywords to index is an important first step when you are setting up your site for search by site visitors. Oftentimes, the prediction of search terms, metadata, and keywords to be indexed depends upon current industry and marketing trends for your specific business. Content authors can set keywords and metadata terms for a specific page. You can also enable searching of the words that are used in the body of your content instead of keywords or metadata that is associated with content items.

-   **How do you want to return search results when a site visitor runs a search?**

    The results of a search on HCL Portal collections are displayed in the Search Center by default. The Search Center is wired together with the search form in standard themes included with HCL Portal. However, you can use the Search Results page template to create a search landing page that displays a list of search results when a site visitor runs a search query. The search landing page that you create can be placed anywhere in your site. Search results are automatically displayed on the new search landing page instead of in the Search Center.

-   **Do you need to index documents of various formats, such as PDFs?**

    If so, you must install and configure Document Conversion Services \(DCS\). This third-party software is included with HCL Portal. DCS converts various types of documents into a format that can be consumed and processed by the search engine. DCS is needed in order for attachments to be indexed and appear in search results.

-   **Which search service suits your business and website needs?**

    Portal Search is available for immediate use, though you can also provide advanced search features on your website by using Content Analytics with Enterprise Search. Additionally, you can integrate search on your website with third-party search engines if you have a license for that third-party search software. Your website's specific environment and search needs determine which search service your website requires.


