# Coding the portlet JSP 

Use the Rational Application Developer Project Explorer to work with the pers\_offers.Pzn\_offersSpot.class and the pers\_offers.Per\_Offers\_UserSpot.class to define the context parameters offersSpot and the userSpot. Code the setRequest calls to pass the user context to personalization.

1.  From the Rational Application Developer Project Explorer, open PersOffers/WebContent/pers\_offers/jsp/html/Pers\_OffersPortletView.jsp

2.  Drag the pers\_offers.Pzn\_offersSpot.class file from PersOffers/WebContent/WEB-INF/classes/pers\_offers onto the JSP file.

    This class is one of the classes you generated in the content resource wizard.

3.  In the **Properties** window, select **offersSpot** from the **Id** list.

4.  Drag the pers\_offers.Per\_Offers\_UserSpot.class file from PersOffers/WebContent/WEB-INF/classes/pers\_offers onto the JSP file.

5.  In the **Id** field, type **userSpot**.

6.  Switch to source mode in the JSP file editor.

7.  Replace the existing text with the following sample. The `setRequest` calls pass the user context to personalization:

    ```
    <%@ page session="false" contentType="text/html" import="java.util.*, pers_offers.*"%>
    
    <%@ taglib uri="/WEB-INF/tld/portlet.tld" prefix="portletAPI" %>
    
    <portletAPI:init/>
    
    <jsp:useBean class="pers_offers.Pzn_offersSpot" id="offersSpot"></jsp:useBean>
    
    <jsp:useBean class="pers_offers.Per_Offers_UserSpot" id="userSpot"></jsp:useBean>
    
    <%
    
    offersSpot.setRequest(request);
    
    userSpot.setRequest(request);
    
    %>
    ```

8.  Save the file and check for syntax errors.

9.  Insert the following code at the end of the JSP file:

    ```
    <DIV style="margin: 6px">
    
     
    
    <H3 style="margin-bottom: 3px">Welcome to Personalized Offers!</H3></DIV>
    
    <BR>
    
    Here is a personalized offer:<BR>
    
    <%=offersSpot.getRuleContent()[0].getTitle() %>
    
    <br>
    
    <%=offersSpot.getRuleContent()[0].getDetails() %>
    ```

10. Save and close the JSP file.


You finished the basic coding of the personalized portlet. You can now export the WAR file from Rational Application Developer and install the portlet in HCL Portal.

**Parent topic:**[Developing a personalized portlet ](../pzn/pzn_demooverview.md)

**Previous topic:**[Creating the Personalization user resource classes and content spot](../pzn/pzn_demo_create_pzn_user_resources.md)

**Next topic:**[Export the WAR file and install the portlet ](../pzn/pzn_demo_export_war_install_portlet.md)

**Parent topic:**[Developing a personalized portlet ](../pzn/pzn_demooverview.md)

**Previous topic:**[Creating the Personalization user resource classes and content spot](../pzn/pzn_demo_create_pzn_user_resources.md)

**Next topic:**[Export the WAR file and install the portlet ](../pzn/pzn_demo_export_war_install_portlet.md)

