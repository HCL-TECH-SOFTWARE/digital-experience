# Performance optimization for sites based on Content Template Catalog 

All of the usual guidance for optimizing HCL Portal and HCL Web Content Manager applies to a Content Template Catalog site. You should familiarize yourself with the options available. Apply all of the tuning and optimization that is recommended in the documentation, including changing appropriate JVM settings, DynaCache settings for HCL Web Content Manager internal caching, and database tuning.

After you have designed and built some of your site, it is important to start examining, testing, and tuning performance. Leaving it to the end of the build phase is often the cause of project delays. Starting early lets you build a good set of performance goals and test cases that you can run repeatedly as function and content are added. You find and fix performance issues early and go into production with confidence that your site can handle the load that you require.

Another aspect of performance tuning is setting up portlet caching. Portlets are in front of the entire data retrieval and rendering processes. Setting up caching at the portlet level reduces load throughout the entire system. Any requests that can be pulled directly out of this cache means avoiding calls to the Web Content Manager rendering engine, security checks, database access, and so on. By default, the portlets in the page templates and in the palette are not set to cache. As each site is different, we might not set up an appropriate cache set. After doing all of the back-end tuning and getting a baseline performance level, you can start enabling caching on portlets to examine the effect on load tests. Typically on an anonymous website you can set caching almost unilaterally; the difference may be in the timeout period for the cache, with portlets like 'latest items' lists typically having a faster timeout than more static content.

To apply caching across many pages at once, export the pages and add caching parameters to the exported XML, and re-import. You may end up repeating this process a few times as you fine-tune the caching to achieved desired performance levels.

**Parent topic:**[How to deploy sites built with Content Template ](../ctc/ctc_deploy_overview.md)

