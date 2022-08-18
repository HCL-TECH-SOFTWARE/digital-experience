---
id: pznConfigPersonalizedListPortlet
title: Configuring Personalized List portlet
---
import useBaseUrl from '@docusaurus/useBaseUrl';



Configuration mode allows an administrator to choose the type and formatting of the personalized content.

# Retrieving personalization resources

Under the **Configure Spot** tab, you can choose to display all resources from a single resource collection, the results of a content spot, or to run the rule directly

1.  Display all resources from a single resource collection
2.  Select **Show all resources of the following type** and select the collection type.

    Use this option for collections that return a low number of resources.

3.  Display the results of a content spot in the portlet
4.  Select **Show the results from Content Spot**.

5.  Select the content spot by its path.

    The content spot is run exactly as if it was included in a JSP, so all campaign rule-mappings are considered.

6.  Run the rule directly without any campaign mitigation
7.  Select **Execute the following rule** and select the rule by its path.


# Displaying details

Under the **Configure Spot** tab, select the output option.

1.  If the **Personalized List** portlet is placed on the same page as the Personalization Editor portlet, you can select **Open object in Personalization editor**. Information from the returned resource is shown in the Personalization Editor portlet.

2.  If **Generate details page** is selected, a detail attribute from the **Display Options** tab must also be selected.

3.  If **Use an existing JSP in the portlet WAR** is selected, specify the full path of the JSP relative to the root of the Personalized List portlet WAR.

    This existing JSP is displayed when the user clicks one of the links in the list of resources. In order for the JSP to access the referenced resource, you must add a `<jsp:useBean>` tag to the beginning of your custom JSP. The resource is placed on the HTTP request object with the key "resourceObject". The resource objects are instances of the resource class that is defined for the running rule's resource collection. If the returned resource class is wcpdemo.Users, use the bean tag at the beginning of the JSP. For example, you can use this syntax: <jp:useBean type="wcpdemo.Users" id="resourceObject" scope="request"/\>


The JSP is now able to start methods and read properties on the resource that is returned by the rule.

# Choosing attributes

1.  Under the **Display Options** tab, select the output option.

    Three types of attributes can be displayed.

    -   The **Title Attribute** is displayed as a link in the list of resources that when selected show the details for each resource.
    -   The **Detail Attribute** is only necessary if you opted to generate a details page. This attribute is shown when the link in the list of resources is selected.
    -   The **Categorization Attribute** is only necessary if you select to categorize the resources that are displayed. Resources are grouped according to the value of the categorization attribute. Read **Layout Options** for information.
2.  For each attribute, select either to display a set of fixed or dynamic attributes:

    -   Select **fixed** to choose from a list of attributes that are always available for that resource type, and then select the attribute from the list.
    -   Select **dynamic** to enter any attribute name. If the selected rule, spot, or resource collection does not specifically declare any fixed attributes, you are allowed to enter the Java attribute name directly.

# Selecting layout options

1.  Under the **Display Options** tab, select the output option.

2.  To group each resource according to the value of its Categorization Attribute.

3.  Select an ordering for the attributes.

    -   The **Ascending** and **Descending** order override any sorting declared in your rules.
    -   The **Order-as-is** displays the categories in the order that the rule or content spot runs.

        **Note:** If you specify **order-as-is** and do not declare an ordering in the rule that is run, the resulting resources might not be grouped when displayed.


# Selecting style classes

1.  Under the **Display Options** tab, select the output option.

2.  Default CSS styles are given for each property type. To create new styles, add them to the /jsp/include/rulePortlet.jsp or to the current Portal theme style sheet.


# Configuring edit mode to select rule and display options

You might set a portlet parameter that is named pzn.configureInEditMode to a value of true. When true, this parameter changes the behavior of the **Personalized List** so that the normal configuration page is shown in edit mode. This action allows edit authority to be used to select which rule is displayed in the list portlet. This property defaults to false, meaning that selection of the rule and display options is done in configure mode. When true, the normal edit option for number of items per page is not available.

Portlet configuration parameters might be set in the Administrative Portlets.

