# Rule elements



## **add condition**

In the Select Content and Profiler rule editors, click **add Condition** to add another condition line to the rule.

In the **Specify a Resource Attribute** window, choose the resource and attribute you want to use in the new condition.

The new line specifies a different query that is run against the data that is defined by the resource. When the second condition is added, you can choose whether the rule selects the content that meets both conditions or either condition \("and" or "or"\).

## **addRecipient**

The **addRecipient** must be a valid email address, a list of email addresses, or a resource attribute that contains valid email addresses to whom the email is sent.

## **add profile**

In the Profiler rule editor, click **add Profile** to add another Profile section to the rule.

In the **Specify Profile Name** window, type the name of the profile for the new condition, or set of conditions.

You can continue to add profile sections to cover the range of possible conditions.

## **bccRecipient**

The **bccRecipient** must be a valid email address, a list of email addresses, or a resource attribute that contains valid email addresses to whom the email is sent. Copied recipients receive personalized email as personalized for the primary recipient or recipients only.

## **bodyURI**

The **bodyURI** must be a valid URI or a resource attribute of type Text that contains a URI. The file that is specified is used as the body of the email message. It can be a text file, HTML, or a JSP. A JSP can contain Content Spots with rules mapped to them for personalizing content.

You might not use a fully qualified URL, such as http://www.yourco.com/email/notification.jsp. Only relative URLs or URIs are supported, such as /email/notification.jsp.

The specified URI does not reference a page within a secured application. References to pages within a secured application are currently not supported.

The text color of the element indicates its status.

-   Blue indicates that the element is OK or complete. You can change the item by clicking it again.
-   Red indicates that the element is not complete and it is required to finish the rule. You must specify an entry for this element.
-   Magenta indicates that the element is optional. You can complete the rule with or without specifying an entry.

## **ccRecipient**

The **ccRecipient** must be a valid email address, a list of email addresses, or a resource attribute that contains valid email addresses to whom the email is sent. Copied recipients receive personalized email as personalized for the primary recipient or recipients only.

## **do action**

Within a binding or recommendation action, you can couple actions with profilers so certain tasks are run when certain conditions are met. You can also indicate actions to be done under other conditions.

Use **do Action** to choose one or more actions in your project. You can also select another profiler and profile to define a combination of conditions to evaluate. These actions run when the condition in the preceding profile \(or set of profiles\) is met.

If there are multiple actions in a binding, they must all work with resources of the same type.

Use **Include only** to choose one or more actions that run when the recommendation rules are run.

## **is empty** or **is not empty**

The evaluations **is empty** and **is not empty** allow a rule to check for the existence of a null value or an empty list. When you use either of these evaluations, one side of the evaluation is unnecessary and is removed.

|Attribute|Is empty or Is not empty|Output|
|------|--|------|
|Resource attribute \(non-list type\)|is empty|true if attribute is null, otherwise false|
| |is not empty|false is attribute is null, otherwise true|
|Resource attribute \(list type\)|is empty|true if list is empty, otherwise false|
| |is not empty|false if list is empty, otherwise true|
|Request Attributes or Session Attributes \(non-list type\)|is empty|false if attribute/parameter exists and value is not null; true if attribute/parameter does not exist or value is null|
| |is not empty|true if attribute/parameter exists and value is not null; false if attribute/parameter does not exist or value is null|
|Request Attributes or Session Attributes \(list type\)|is empty|true if attribute/parameter does not exist or list is empty; false if attribute/parameter exists and list has data|
| |is not empty|false if attribute/parameter does not exist or list is empty; true if attribute/parameter exists and list has data|

## **is equal to**

The **is equal to** evaluates the relationship between two sides of a conditional statement. Either side can typically be the content that is returned by a resource attribute, value, or arithmetic expression. If the resource attribute is of the data type List \(array, vector, or enumeration\), the available evaluations become **includes** and **includes any of**. Otherwise, use one of the following choices:

-   **includes**
-   **includes any of**
-   **is between**
-   **is between but not equal to**
-   **is empty**
-   **is equal to**
-   **is greater than**
-   **is greater than or equal to**
-   **is included in**
-   **is less than or equal to**
-   **is less than**
-   **is not empty**
-   **is not equal to**

Profiler evaluation with **is equal to**

If you choose to evaluate a profiler instead of a resource attribute in the **Specify a Resource Attribute** window, select one of the following evaluations:

-   **is**
-   **is all of**
-   **is any of**
-   **is not**
-   **is not any of**
-   **is empty**
-   **is not empty**

On one side of the evaluation, the possible choices are the profiles that are defined within that profiler. You might select one or more profiles for one side of the evaluation.

## **order as is**

The **order as is** is used to specify the order you want selected content to be returned and used. The default, **order as is**, returns data in the order it is stored in the repository. By clicking **order as is**, you can also choose **order randomly** or **order by**.

The **order randomly** returns data in a different order each time the rule is run.

Use **order by** to sort content by any of its attributes, sort by more than one attribute, and specify whether you want each attribute in ascending or descending order.

## **profiles**

A **profile** is an arbitrary name \(of your choice\) that provides information about the website visitor, the date, and time, or other circumstances or conditions. For example, if you want to differentiate your web visitors according to whether they are able to view confidential information, you might use two profiles, **Confidential** and **Regular**.

When you create a profile within a profiler, type a descriptive name. Be as accurate as possible to avoid duplication or confusion with other profiles. When you select a profile \(for example, within a binding\), you choose from a list of available profile names.

If you select to use one of the available profilers you, then need to select one or more profiles for this portion of the binding. Use the profiles to categorize your website visitors, session attributes, or other attributes.

## **profiler**

Use **Profiler** to select from a list of available profilers that you previously defined. You can also create a Quick Profiler to classify the website visitor, the date and time, or other circumstances or conditions.

## **Quick Profiler**

Use **Quick Profiler** to skip the use of a previously defined Profiler and directly enter in the attributes that categorize a website visitor, the date and time, or other circumstances or conditions. To create a **Quick Profiler** in a Binding rule, you must specify three things:

-   The resource attribute to classify
-   The relationship between two sides of a conditional statement
-   The value to which to compare the resource attribute

## **resource attribute**

Content resource attributes are the properties that all of your content items share. For example, if an expiration date is data about your articles that describe special discounts, then **expirationDate** might be an attribute of your Article resource. The **Resource.Attribute** would be **Article.expirationDate**. Likewise, if appropriate age is data about training courses you display on your web pages, then **appropriateAge** might be an attribute of your Course resource. The **Resource.Attribute** would be **Course.appropriateAge**.

Your content source must be created as a resource collection object in the current workspace.

Objects available for all rules:

-   **current Action Count**

    Inspects the number of certain types of actions from the current website visitor; requires the use of logging beans to log these events.

-   **current Action Names**

    Inspects the names of actions from the current website visitor.

-   **current BrowserCapability**

    Inspects the attributes of the browser the current website visitor is using.

-   **current Category Count**

    Inspects numbers that are stored in various categories during the current website visit; requires the use of implicit profiling.

-   **current Category Names**

    Inspects names of categories that are stored during the current website visit; requires implicit profiling.


-   **current Date**

    Inspects the current date, day, or time \(local to the website visitor\).


-   **current Portlet Settings**

    Inspects key-value pairs that are used by a portal to provide a concrete portlet with its dynamic configuration


Objects not available for update rules:

-   **current Request**

    Inspects information that is forwarded to the current page as a request attribute or passed to the current page in a query string.

-   **current Session**

    Inspects information that is stored in the user session.


The word current means that the resource attributes relate to an actual website visitor during the time. If your resources include objects that are created during a visitor's session \(such as what the visitor selected while on the site\), these objects are designated as current. Many of the attributes that current objects might contain are not part of the definition of the object. Therefore, they might not initially appear as selections in the attribute list in the **Specify a Resource Attribute** window. However, you can input and manage these attributes with **Add**, **Edit**, and **Delete** next to the attribute list.

Arithmetic expressions

Use arithmetic expressions to perform mathematical operations on resource attributes as part of your rule. When you choose this option, you can select multiple resource attributes, values, and operators \(addition, subtraction, multiplication, or division\) to use between them.

An example use of an arithmetic expression is a profiler that profiles website visitors according to age. In the data that you record for each visitor, it is more practical to store date of birth \(which does not change\) than to store age. In the evaluation in the profiler, you can use an arithmetic expression to calculate the visitor's age by subtracting the current user's year of birth from the current year.

Arithmetic expressions are calculated according to traditional order of operations \(multiplication and division are calculated before addition and subtraction. For example, 3+2\*2–1/2 evaluates to 6.5\). It is not possible to group expressions with parentheses.

## **sender**

The **sender** must be a valid email address, a list of email addresses, or a resource attribute that contain valid email addresses from whom the email is sent.

## **set to**

The **set to** is the default action within an update action rule. The **set to** modifies the attribute of a resource, request object, or session object according to the value you specify in the expression. The type of resource attribute that is selected determines what actions are available.

Alternatives to set to include:

-   **append**
-   **decrement by**
-   **divide by**
-   **increment by**
-   **multiply by**
-   **prepend**
-   **remove**
-   **remove all**

## **show all items**

The **show all items** indicates that there is no numerical limit to the number of items that are returned from the data source as a result of processing the rule. For example, a rule displays content on a web page displays all items that meet the rule criteria.

To create a limit to the number of items that are returned by the rule, click **show all items**. Specify an integer or a resource attribute with a data type number, decimal number, or integer. For example, if you enter a value of 5, the rule expression displays **show 5 items**.

## **show** or **hide**

The **Show** option is used to specify whether the visibility rule displays or hides information. The default, **Show**, allows the target user to see the information. The **Hide** option prevents the targeted user from seeing the information.

## **subject**

The **subject** must be a text string or a resource attribute with a data type of text. The text appears in the email subject line.

## **value**

The **value** is the placeholder for one side of an evaluation. This value can be one you enter, the value of another resource attribute, or an arithmetic expression.

The value must be compatible with the data type of the other side of the expression or evaluation. For example, if you are evaluating an attribute that has the type Number, you can compare it to resource attributes of the type Number or Decimal Number. The rule editor prevents you from choosing other resource attributes with incompatible types.

Profiler rules only: When you compare resources in a database, WebSphere Personalization respects the column type and size. Therefore, to compare a value to a column typed as CHAR\(10\), you must include all 10 characters. For example, assume that you have a table with a column named DAY that is typed as CHAR\(10\). A row in the table has the value of `Monday&nbsp;&nbsp;&nbsp;&nbsp;` rather than `Monday` in the DAY column. DAY is compared against a profiler condition, and must have all 10 characters defined. However, if the column is typed as VARCHAR, the value in the profiler condition can be `Monday`, without the four extra blanks.

Mapped values

Resources might be created with mapped values instead of actual values that are specified in the Content source. Using mapped value can make rules easier to understand. For example, if a column in the database held the integer values of 1, 2, or 3, to represent Yes, No, or Maybe. You can configure the resource to map integer values to words. If mapped values are created for a resource, the mapped values are used in the rule editor instead of the actual values. For information to create value mappings, refer to the documentation in Rational Application Developer for creating resource collections with the WebSphere Personalization resource wizard.

Dynamic properties

In addition to predefined resource properties, you can enter properties of a resource that are not in the list. If you know the resource to handle dynamically, specify the name of the property. If the resource manages properties dynamically, the values are retrieved when the rule is evaluated.

