---
audience: [, , ]
---

# Cooperative portlet programming model

View information on how properties and actions are registered, how properties are generated and received, and some available APIs.

## Registering properties and actions

The declarative method can be used with standard portlets and is the only registration implementation supported for standard portlets.

Declarative \(WSDL\). Target portlets associate their actions with an input property which has been declared as an XML type. The actions are declared using WSDL, with a custom binding extension which specifies the mapping from the abstract action declaration to the actual action implementation. WSDL is a language used to define collections of abstract operations, together with the input and output parameters \(called `parts` in WSDL\) for each operation.

Associated with each action is zero or one input parameters and zero or more output parameters. Each input or output parameter is associated with exactly one property. Each property is associated with an XML type. The input property's type is used for matching the action to output properties which are produced by portlets. The output parameters are produced as a result of executing the action, and can be wired to other actions subject to the type matching constraint mentioned previously.

## Generating property values

-   **Action bindings**

    The WSDL custom binding extension provides mapping information from the abstract operation declaration to the actual action implemented by the portlet. The custom binding extension defines how information is delivered to the action implementation and received from the action implementation. Actions can generate output properties to transfer information, and the binding used in the implementation must match the parameter binding declared in the WSDL file.


## Receiving property values

-   **Action bindings**

    Action bindings may also be used to receive property values. The bindings used to provide the property values to the action implementation will match the input parameter bindings specified in the WSDL file.


## Advanced programmatic APIs

For standard portlets, the property broker provides additional APIs to give developers more control over inter-portlet communication. The following functionality can be implemented using the programmatic APIs:

-   -   Activate or deactivate actions for a session. Only active actions can be triggered through wires or through Click-to-Action menus.
-   Determine if a property is wired, and if it is a cross-page wire. It can also determine if the wire is actually active \(the target action is active\). This knowledge may be used to render links for triggering wired actions.

**Note:** Both sources and targets must register their input and output properties and actions for wire creation to be possible.

The following package define the programmatic APIs provided by the property broker: com.ibm.portal.propertybroker.service.PropertyBrokerService \(this is an interface\).


