# Coding the JSP portlet

In this topic, you will learn how to code the JSP portlet. 

Use the Rational Application Developer Project Explorer to configure `pers_offers.Pzn_offersSpot.class` and `pers_offers.Per_Offers_UserSpot.class` to define the context parameters for offersSpot and userSpot. Then, code the `setRequest` calls to pass the user context to personalization.

1. From the Rational Application Developer Project Explorer, open PersOffers/WebContent/pers_offers/jsp/html/Pers_OffersPortletView.jsp

2. Switch to source mode in the JSP file editor.

3. Replace the existing text with the following sample. The `setRequest` calls pass the user context to personalization:

    ```jsp
    <%@ page session="false" contentType="text/html" import="java.util.*, pers_offers.*"%>
    <%@ taglib uri="/WEB-INF/tld/portlet.tld" prefix="portletAPI" %>
    <portletAPI:init/>

    <jsp:useBean class="pers_offers.Pzn_offersSpot" id="offersSpot"></jsp:useBean>
    <jsp:useBean class="pers_offers.Per_Offers_UserSpot" id="userSpot"></jsp:useBean>

    <%  
        offersSpot.setRequest(request);  
        userSpot.setRequest(request);  
    %>  

    <DIV style="margin: 6px">  
    <H3 style="margin-bottom: 3px">Welcome to Personalized Offers!</H3></DIV>  
    <BR>  
    Here is a personalized offer:<BR>  
    <%  
        String title = new String();  
        String details = new String();  
        try{  
                if (offersSpot.getRuleContent()!=null && offersSpot.getRuleContent().length > 0)  
                {  
                    title = offersSpot.getRuleContent()[0].getTitle();  
                    details = offersSpot.getRuleContent()[0].getDetails();  
                }  
           }catch(Throwable e)
           { %>
            <FONT>No rule content found. </FONT> 
            <% e.printStackTrace();
           }  
    %>  
    <%=title%>
    <br>
    <%=details%>
    ```

4. Save the file and check for syntax errors.

5. Save and close the JSP file.

You finished the basic coding of the personalized portlet. In the next topic, you will learn how to [Export and install the personalized portlet.](./pzn_demo_export_war_install_portlet.md) 
