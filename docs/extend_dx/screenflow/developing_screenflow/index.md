# Developing screen flows

To develop screen flows you need to create user interface artifacts, interconnect the artifacts and deploy the artifacts.

To develop screen flows, do the following steps:

1.  Develop the necessary user interface artifacts that when combined define the appropriate screen flow. These user interface artifacts are usually portlets that can send and receive JSR 286 events.

2.  Create the dialog definition that defines all interconnections between the user interface artifacts that were created in the previous step.

3.  Deploy all user interface artifacts and the dialog definition.


-   **[Developing user interface artifacts](dev_ui_artifcts.md)**  
Every screen flow needs a starting point from which it can be triggered. The user interface components that you develop and their functions enable the screen flow to be triggered and processed. Independent of the type of user interface artifact you develop, it must send and receive JSR-286 events to enable a screen flow. Therefore, you must implement or reuse JSR-286 compliant portlets that send and receive such events.
-   **[Creating dialog definitions](../developing_screenflow/creating_dialog_def/index.md)**  
With the Screen Flow Manager, different teams or even third-party vendors can develop different types of user interface artifacts. The user puts together the correct set of user interface artifacts and creates the declarative model in XML known as the dialog definition. The dialog definition describes the specific screen flow that is also known as dialog, which consists of multiple steps and single steps referred to as subdialogs. The dialog definition contains all information about the subdialogs that participate and the transitions that route the user from one subdialog to another.
-   **[Deploying user interface artifacts](dply_ui_artifcts.md)**  
Before you deploy the Screen Flow Manager dialog definitions, you must deploy all portal resources that are part of the dialog definitions, such as pages, and portlets. You can then deploy the dialog definitions by using the portal XML configuration interface (XMLAccess).



