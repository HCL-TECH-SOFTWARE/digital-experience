# Development processes

In addition to being a package of ready-to-use templates, Content Template Catalog also embodies a new pattern for site development that is based around page templates and microsites.

While Content Template can often be used only during the initial build phase of a site, it might also be used as the basis for a self-serve templating infrastructure. In this kind of environment, you need a development process for building templates.

For the Content Template software developers, what made this solution possible was the Portal Solution Installer. It allowed the developers to deploy applications, themes, pages, portlets, and content assets from a single package. This installer became the basis for the source control and build process.

-   **[How to use source control](../ctc/ctc_deploy_dev_source.md)**  
The source control for Content Template Catalog contains all the code artifacts \(plug-ins, text providers, context providers, JSPs\), portal artifacts \(theme and layout files, exports of pages, page templates, and portlets\), and HCL Web Content Manager artifacts \(exported libraries\).
-   **[Testing and deploying](../ctc/ctc_deploy_dev_test.md)**  
A copy of the production content libraries would be installed in test environments, and then used as test data during a development project. This allows a thorough testing of the deployment of the full package of changes, including HCL Web Content Manager assets, before deploying to the production environment.
-   **[Multilingual design content](../ctc/ctc_deploy_dev_mls.md)**  
To support multiple languages for the users of your website, it is necessary to use the Multilingual Solution. This solution requires separate CTC Content libraries for each language in your site.


