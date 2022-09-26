# Tune your environment

HCL Digital Experience is not tuned for a production environment "out of the box". Complete the steps in the Performance Tuning Guide to optimize performance.
Click and download the **Tuning Guides** from the links mentioned in the **Related Information** section.

The [HCL DX Performance Tuning Guide](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0074411) provides general concepts and detailed configuration instructions. 
Instructions are also included for the following areas:

-   Configuring the application server and the resources that are defined for that application server
-   Determining the cloning strategy for expanding or extending the environment
-   Tuning the database and database server
-   Tuning the directory server and its database
-   Tuning the web server
-   Tuning the operating system and network
-   Tuning the HCL Portal services

A large portion of tuning HCL DX Portal itself has been automated.
Instructions for running the automation scripts are provided in the next section titled [Portal server performance tuning tool](https://link needed here to portal tuning tool (the next section)).

Note that the recommendations in the DX Portal Tuning Guide should be considered "a good starting point" for tuning optimization.
Ultimately, one should then run synthetic loads against this DX Portal with actual content on the site. 
This synthetic load should approximate actual user scenarios for access.
Final performance tuning should optimze key metrics such as "page views per second" and "page response times" using this synthetic load and prior to placing the DX Portal site into production.

The [Optimizing Portal Access Control](https://link needed here to the PAC tuning section in the help center) section provides guidance on optimizing access control for all Portal artifacts.

**Related information**  
[HCL DX Performance Tuning Guide](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0074411)<br>
[Performance Tuning Guide for Anonymous Page Access Caching](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0075095)<br>
[Performance Testing and Analysis Guide](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0075607)

