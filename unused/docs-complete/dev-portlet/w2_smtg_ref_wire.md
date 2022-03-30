# Relation to cooperative portlet wiring 

You can use both live text elements and cooperative portlet wires to exchange data between portlets on a page.

However, the execution flow for both methods is different:

-   **Flow for cooperative portlet wiring:**

    1.  The source portlet renders an action link.
    2.  The user clicks a link to execute the source portlet action.
    3.  The source portlet action is executed on the server, producing the source data and triggering the wires.
    4.  The wires fire target portlet actions that are executed with the source data.
-   **Flow for click-to-action**

    1.  The source portlet renders a source HTML tag that contains the source data.
    2.  The user clicks on the source element to open a menu and selects the target action from the menu
    3.  The source data is sent to the server where a target portlet action is executed with the source data.

The following table lists differences that will help you decide which method for data exchange is appropriate for your application:

|Click to action|Portlet wires|
|---------------|-------------|
|Is based on dynamic presence of targets on a page.|Is based on static administrator-defined wires.|
|Triggers a single target selected from a menu.|Triggers all defined targets that have been wired up.|
|Can only handle string data.|Can pass complex data types.|

**Notes:**

1.  You can write portlets that support both methods; any portlet action declared in a cooperative portlet WSDL that defines an input parameter is available as a target for both click-to-action and portlet wiring. For sources, you can add a preference that lets the administrator control whether click-to-action live text should be emitted, as demonstrated by the cooperative portlet JSR shipping example.
2.  You can also combine both methods: a target action that is triggered by click-to-action can have wires attached that will propagate to other portlet actions on the server within the same request. consequently, a single click-to-action menu selection can trigger multiple portlet actions on the server.

**Parent topic:**[Live text for click-to-action ](../dev-portlet/w2_smtg.md)

**Related information**  


[Portlet communication ](../dev-portlet/pltcom_ptlt_com.md)

