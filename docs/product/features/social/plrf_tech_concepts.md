# Technical concepts

Before you use the Digital Data Connector \(DDC\) for HCL Portal framework, you can familiarize yourself with its main technical concepts and building blocks.

To integrate external data of your choice into your HCL Portal, you hook into the Digital Data Connector framework. To do so, you have the following alternatives:

-   You can write a DDC plug-in for the WebSphere extension registry. This approach provides full flexibility but requires creating and deploying Java code.
-   If your external data is available in XML format, you can use the generic XML DDC plug-in to integrate your data. In this case, you do not have to write any code. Instead, you integrate data that comes from a specific XML data source by deploying a list-rendering profile.
-   You can also use a combination of both approaches. In such a setup, you typically create a custom DDC plug-in. This custom plug-in delegates the loading and transformation of XML data to the generic XML DDC plug-in. You can use the custom plug-in to determine the correct source URL based on the current rendering context. For example, the plug-in can generate a specific product query URL to an e-commerce server. It bases the query on user preferences, request attributes, user agent, and other context information. Furthermore, the custom plug-in can modify the bean list objects that the generic XML DDC plug-in delegate returns. For example, the plug-in can add extra attributes that are computed from the data that is contained in the original bean list object.

The following list shows and describes the main building blocks of the Digital Data Connector framework:

-   **DDC plug-in**

    This term refers to Java plug-ins that are hooked into the Digital Data Connector framework. DDC plug-ins implement the `com.ibm.portal.wcm.plr.BeanListProvider` Java interface as defined by the public Digital Data Connector Java API. DDC plug-ins load external data and transform this data into a generic data structure that can be rendered by using list appearance components. List appearance components are described later in this list. HCL Portal Version 8.5 comes with two preinstalled DDC plug-ins:

    -   A DDC plug-in for integrating social data made available by remote HCL Connections servers. This DDC plug-in is used by the social lists feature.
    -   A generic XML DDC plug-in. You can use this provider directly for integrating arbitrary remote XML data. You do not have to write or deploy more Java code.
-   **Bean list**

    This term refers to the abstract data structure that a DDC plug-in generates based on external data. DDC always represents external data as a list. You can generate detail views for individual data items by using lists of length 1. Individual bean list objects can be transformed into markup by using list appearance components. List appearance components are described later in this list.

-   **List-rendering profile**

    A list-rendering profile defines the set of attributes available in the beans that are contained in bean lists that a DDC plug-in generates. Furthermore, the generic XML DDC plug-in supports list-rendering profiles to define the mapping between the XML data structure and the actual attribute values. You define this mapping by associating the attribute definitions in the profile with individual XPath expressions.

-   **Digital Data Connector selection rule**

    This term refers to specific rules that you can create in the HCL Portal Personalization component or in Web Content Manager Personalization components. A Digital Data Connector selection rule is a Personalization rule of type **Select Action** defined to work on the Pluggable Resources resource collection. You do not have to add any additional properties or selection criteria to this rule. This rule is used to trigger the Digital Data Connector framework when you render the selection rule in a personalization component.

-   **List appearance**

    This term refers to a Web Content Manager Personalization component that contains or references a Digital Data Connector selection rule. The list appearance defines the visual design of your list by defining the markup fragments that are generated during rendering of the lists. The individual data fragments that the DDC plug-in loads can be referenced by the list appearance by using the `[AttributeResource]` tag. This reference mechanism works the same way as when you render Personalization components that select data from the Web Content or the Web Components resource collections. The set of supported `attributeName` parameter values for the `[AttributeResource]` tag depends on the specific DDC plug-in and the list-rendering profile that you use.

    The list appearance also defines the paging behavior of the list.

    The term "list appearance" is also used for components that generate details views of individual items. In this case, the individual items are represented by a list of length 1. List appearance components that generate such details views can also be referred to as "details appearance" components.

-   **List-rendering context**

    This term refers to the context that the `[Plugin:ListRenderingContext]` rendering plug-in generates to control the contents of your lists. This context includes all of the following information:

    -   Which DDC plug-in you want to be called for building the bean list object from the actual external data
    -   The selected list-rendering profile
    -   A list of custom attributes
    -   Access to the current portlet request and response objects
    -   A reference to the currently rendered list definition content item.
    The addressed DDC plug-in then evaluates the list-rendering context so that it can query the appropriate set of remote information. You can establish the list-rendering context by adding a `[Plugin:ListRenderingContext]` Web Content Manager tag to your presentation templates. You add this tag before you include the Digital Data Connector design component.

-   **List definition**

    The list definition is a Web Content Manager content item. It holds the following items:

    -   Information that is needed to establish the required list-rendering context
    -   A reference to a list appearance component that is responsible for generating a specific visual design for presenting the data that is contained in the resulting bean list object.
    To render an individual list, you render the corresponding list definition content item in the Web Content Viewer portlet. To generate the actual list markup, the presentation template that is used to render the list definition content item proceeds by two steps:

    1.  First, it writes the `[Plugin:ListRenderingContext]` to establish the list-rendering context.
    2.  Then, it renders the component reference to the list appearance component.

**Parent topic:**[Digital Data Connector \(DDC\) for HCL Portal](../social/plrf_ovu.md)

**Related information**  


[Customizing the markup generation](../social/soc_rendr_cust_markup_genrtn.md)

