# Integrating the Business card and online status in a custom portlet 

If HCL Digital Experience is configured to work with HCL Sametime, you can integrate the business card and online awareness in a custom portlet. Person names then appear with a dynamic status indicator. Users of the portlet can move the cursor over the name of an active person and then click **Click for Business Card**.

The Business card includes person details in a collapsible section. If a photo of the person is available in the repository, the Business card also displays the photo. The photo enlarges when you hover over it with the mouse. The Business card also includes options for viewing the profile of a person, chatting, and more.

People awareness is provided by a new AJAX-compatible version of the person tag. You can extend this awareness by implementing JavaScript that works with the Live Object Framework. Both awareness and pop-up menus on objects within a custom portlet can be provided.

The Business card is provided by using the person tag of the Collaborative Services API. There are two methods to integrate the Business card, using the Person tag of the collaborative API and using the live text microformat.

1.  Integrating the Business card and online status in a custom portlet
2.  Add the following line to your page:

    ```
    <%@taglib uri="/WEB-INF/tld/people.tld"prefix="pa"%>
    
    ```

3.  Include a statement in your page similar to the following line:

    ```
    <pa:person value="CN=John Smith,OU=SALES,O=CNTSERV_EXMP" valueType="LDAPDN" displayName="John Smith" isActive="true/false" />
    ```

    The displayName and isActive attributes are optional. The isActive attribute controls the formation of the Business card for a users name, depending on the activity of the user.

    -   If a user is active and selectable, then the isActive attribute is true.
    -   If a user is inactive and non-selectable, then the isActive attribute is false.
    The supported types for valueType are:

    -   EMAIL

        ```
        <pa:person value="wpsadmin@cntserv_exmp.com" valueType="EMAIL" displayName="John Smith"  isActive="true/false" />
        ```

    -   LDAPDN

        ```
        <pa:person value="CN=John Smith,OU=SALES,O=CNTSERV_EXMP" valueType="LDAPDN" displayName="John Smith" isActive="true/false" />
        ```

    -   MEMBERDN

        ```
        <pa:person value="CN=John Smith,OU=SALES,O=CNTSERV_EXMP" valueType="MEMBERDN" displayName="John Smith" isActive="true/false" />
        ```

    -   OBJID

        ```
        <pa:person value="Z9eAe1JRU6N5FDRRANP14GRR47Q5CC38ANPLCI3" valueType="OBJID" displayName="John Smith"&nbp; isActive="true/false" />
        ```

    -   CN

        ```
        <pa:person value="wpsadmin" valueType="CN" displayName="John Smith"&nbp; isActive="true/false" />
        ```

    -   WMMID

        ```
        <pa:person value="wpsadmin" valueType="WMMID" displayName="John Smith"  isActive="true/false" />
        ```

    Where OBJID corresponds to the objectId of the user.

4.  Integrating the Business card using live text microformat.
5.  Add the following lines to your page:

    1.  Business card with online status:

        ```
        <span class='vcard X-sametime-resolve'>
        ```

    2.  Business card without online status:

        ```
        <span class='vcard'>
        ```

6.  Include this line to add a user display name.

    ```
    <a class='fn' href='javascript:SemTagMenu.a11y(event)' style='color:black; text-decoration:none;' 
       onclick='return false;'>{displayName}</a>
    ```

7.  Any of the class `'email'`, `'uid'` and `'objectId'` are sufficient as long as they resolve to a unique user.

    ```
    <span class='email' style='display:none;'>{email id}span class='email' style='display:none;'>{email id}</span>
    ```

    ```
    <span class='uid' style='display:none;'>{LDAPDN}span class='uid' style='display:none;'>{LDAPDN}</span>
    ```

    ```
    <span class='userObjectId' style='display:none;'>{objectId}span class='userObjectId' style='display:none;'>{objectId}
    </span></span>
    ```


In the following example, `<%@taglib uri="/WEB-INF/tld/people.tld" prefix="pa" %>` interacts with Collaborative Services. The first % statement is a reference to the Collaborative Services tag library. The `pa:person value="wpsadmin@cntserv_exmp.com" valueType="EMAIL"` statement uses the Collaborative Services person tag to display the name of a person as a live link.

```
<%@taglib uri="/WEB-INF/tld/people.tld" prefix="pa" %>
<%@taglib uri="/WEB-INF/tld/portlet.tld" prefix="portletAPI" %>
<portletAPO:init/>
Hello example
<h1>Collaborative Services Hello JSP</h1>
<br />
<h2>Hello,<pa:person value="wpsadmin@cntserv_exmp.com" valueType="EMAIL" /> !</h2>
```

**Parent topic:**[Collaborative Services API and the person tag ](../collab/i_coll_r_cs_api.md)

**Related information**  


[Using the business card ](../social/soc_rendr_use_biz_card.md)

