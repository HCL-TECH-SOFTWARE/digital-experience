# Insert dynamic table HTML/JSP code

Use Rational Application Developer to code the dynamic table in the Personalized Offers portlet JSP. Export the project as a web archive \(WAR\) file. Open the HCL Digital Experience Administration page for Portlet Management and update the web module that contains the Personalized Offers portlet.

Before you begin this procedure, ensure that you created a content spot.

1.  Open Rational Application Developer and open Pers\_OffersPortalView.jsp in edit mode.

2.  Insert the following code at the end of the JSP page:

    ```
    <HR>
    
    Here are all your personalized offers:
    
    <br>
    
    <%
    
    try {
    
    pers_offers.Pzn_offers[] items = offersSpot.getRuleContent();
    
    pers_offers.Pzn_offers item = items[0]; // throws an exception if empty. %>
    
    <TABLE WIDTH="100%">
    
    <TBODY>
    
    <%
    
    for (int i = 0, c = 0; ; ) {
    
    if (c == 0) { %>
    
    <TR bgcolor="e7e7e7"><%
    
    }
    
    else { %>
    
    <TR><%
    
    } %>
    
    <TD><%= item.getTitle() %>: <%= item.getDetails() %>
    
    </TD>
    
    </TR><%
    
    c = c == 0 ? 1 : 0;
    
    i++;
    
    try {
    
    item = items[i];
    
    }
    
    catch (java.lang.ArrayIndexOutOfBoundsException _e0) {
    
    break;
    
    }
    
    } %>
    
    </TBODY>
    
    </TABLE><%
    
    }
    
    catch (java.lang.ArrayIndexOutOfBoundsException _e0) {
    
    %><FONT>There are no current articles to display. </FONT><%
    
    } %>
    ```

3.  Save and close the file. Verify no errors other than exception handling errors.

4.  Export the project as a war file. Close Rational Application Developer.

5.  Log in to HCL Portal as wpsadmin. Click the **Administration menu** icon. Then, click **Portlet Management** \> **Web Modules**.

6.  Click **Update** to update the web module.

7.  Complete the installation process by using the newly created war file.


You can now modify the resource collection properties for Pzn\_Offers\_User.


**Previous topic:**[Enhance the Personalized Portlet](../pzn/pzn_demo_enhance_personalized_portlet.md)

**Next topic:**[Modify resource collection properties](../pzn/pzn_demo_modify_resource_collection_properties.md)


**Previous topic:**[Enhance the Personalized Portlet](../pzn/pzn_demo_enhance_personalized_portlet.md)

**Next topic:**[Modify resource collection properties](../pzn/pzn_demo_modify_resource_collection_properties.md)

