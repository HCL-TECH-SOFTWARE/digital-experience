# Syntactic restrictions on the input syntax

There are certain restrictions on the allowed values for the action attribute.

They are listed here:

-   If the request type was specified as update, only the actions locate, create, update and delete are permitted.
-   If the request type has been specified as export, only the actions locate and export are permitted.
-   Create actions (and update actions for non-existing elements) might require that certain attributes of the element are defined that are not required for other update or delete actions.
-   Actions of nested elements must not be contradictory. If you choose to delete a resource, you cannot create any other resources inside it. The following table lists all commands, together with the allowed commands for subelements:

    |Action|Allowed actions in subelements|
    |------|------------------------------|
    |locate|locate, create, update, delete, export|
    |create|locate, create, update|
    |update|locate, create|
    |delete|no subelements allowed|
    |export|no subelements allowed|


You can specify two or more XML elements that refer to the same portal resource. For example, you can have one element that creates a portal resource and another that updates the same resource with new configuration data.

Configuration data elements do not have an associated action, but most of them have an update attribute that determines the type of update that is applied. The following values are possible:

|update|Resulting processing|
|------|--------------------|
|set|The corresponding configuration data (for example, parameter) is set, or, if it does not yet exist, it is created.|
|remove|The corresponding configuration data (for example, parameter) is removed|

Note that configuration data elements are processed only if their parent has an update action. For example, the following fragment will not update the capability information for the given page:

```
   <client uniquename="smart.browser" action= "locate">
        <client-capability update="set">HTML_JAVASCRIPT</client-capability>
   </client>

```

All specified actions are processed in the textual order in which they are specified in the XML input (document order). If there are any interdependencies between the actions, the user or program providing the XML input is responsible for ordering the elements correctly.


