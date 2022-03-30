# About the Portal Scripting Interface 

HCL Digital Experience provides a scripting interface that enhances the possibilities for automated solution deployment and administration of the portal. The Portal Scripting Interface allows you to create scripts that portal administrators can use to perform administrative tasks from a command line.

The Portal Scripting Interface allows portal solution development teams to write scripts that are later executed by operation teams for solution deployment. These scripts have the same functionality as the portal administration user interface. This allows you to implement automated configuration management for various kinds of configuration changes.

Scripts can help you split the administrative workload between solution development and solution operation teams. Even if the solution development teams cannot work interactively with the productions system, they can apply the same administrative actions through the use of scripts. At the same time, the use of scripts enhances availability and quality of the solution as developers can write and test the scripts without interfering with the production system. Scripts provide repeatability and avoid user errors that are likely in manual administration procedures.

In addition to these benefits, portal scripts provide the following advantages:

-   The Portal Scripting Interface provides delegated administration in the same manner as the portal administrative user interface. This allows distributed portal administration as follows:

    -   Different development teams can work on related portal updates without interfering with the work of others.
    -   Different administrative teams can perform the tasks of developing a solution, and deploying and operating that solution for production. These teams can be within the same organization \(for example in the same enterprise\), or in independent companies, such as independent solution centers for the operation. In a typical scenario, the solution development team may have in-depth knowledge about the software solution internals, the operation is focused on the external characteristics of the solution. The operation solution team can receive the solution from the development team as a black box that can be operated without much knowledge of the solution internals. This allows enterprises to use automated solution deployment and distributed staging processes.
    In this regard the portal scripting interface goes beyond the XML configuration interface that has been provided by HCL Portal for several releases now. The XML configuration interface does not allow for easy separation of distributed portal administration.

-   You can use the portal scripting interface for staging and integration of new releases A new release can be developed and tested on a test system and can then be integrated into the production system while the system is running.
-   You can use the scripting interface for all of the following:
    -   Release staging and integration
    -   Updates of portal content, portal configuration, releases. This includes, for example, adding, replacing, or removing components.
-   Interactive portal administrative tasks do not require a Web browser.
-   Operators can enhance productivity and quality by scripting repeated administrative tasks for automated administration and maintenance.
-   You can apply portal configuration updates in real time.
-   The scripting interface is an extension of the WebSphere® Application Server scripting interface. This means that if you are already familiar with the interface, you should easily learn how to use Portal Scripting Interface.
-   You use the scripting interface through the use of a user ID, similar to the portal UI.
-   They are easy to use:
    -   You can use any text editor to develop scripts.
    -   It provides its own online help as part of the scripting environment. You do not need to leave the script window for command syntax descriptions.

## Change from JACL to Jython syntax

In previous versions of HCL Portal the Portal Scripting Interface was based on JACL syntax. Starting with HCL Portal Version 6.1 the Portal Scripting Interface is based on Jython syntax. The JACL Version 7.0 syntax is still available and supported.

The Jython syntax can be derived from the JACL syntax in a generic way as follows:

-   **JACL**:   `$Object method arg1 arg2`     Example: `$Portal login myuserid mypassword`
-   **Jython**:  `Object.method(arg1, arg2)`   Example: `Portal.login('myuserid', 'mypassword')`

**Parent topic:**[Portal Scripting Interface ](../admin-system/ad_psi.md)

