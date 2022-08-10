# Transactionality

When you use XML scripts to create, update or delete resources, the changes in the portal database are grouped into transactions. All changes that are part of one transaction are either executed completely or not at all. The XML configuration has two different levels of grouping database updates into transactions.

The grouping is defined by the `transaction-level` attribute of the main request element, which can have the following values:

-   **resource**

    Every top-level resource in the XML script is processed in one separate transaction. For example, this can be a content node with its complete layout. If an error occurs, all resources up to the one where the error was encountered have been fully processed; the resource where the error was encountered is not created, or, if it already existed, it remains unchanged.

-   **request**

    The entire XML script is executed in one transaction. If an error occurs, all database changes caused by the script are made undone, and the original state is restored. Note that using this level of transactionality might cause large and long-running database transactions if used in large XML scripts. As a result, you might encounter database errors caused by exceeding database limits on transaction duration or transaction log size, depending on the configuration of your database.

-   **none**

    No explicit transactions will be opened for the processing. This is the default value.


Transactionality applies only to changes in the portal database. The following aspects of resources are not stored in the portal database and therefore not included in transactions:

-   Enterprise applications for portlets that are deployed into WebSphere® Application Server
-   User and group information
-   Role assignments in an external access control system.

An example of what this means is as follows: When you deploy a WAR file in an XML script that uses transaction-level="request" and an error occurs later in the execution of the XML script, the transaction is canceled, so the entries for the portlet are removed from the portal database. However, the corresponding enterprise application has already been deployed into WebSphere Application Server and is not removed. This will not further affect the operation of the portal; you can simply deploy the portlet again later. You will just have an unused enterprise application in WebSphere Application Server. Remove it manually.

**Parent topic:**[XML configuration reference](../admin-system/adxmlref.md)

