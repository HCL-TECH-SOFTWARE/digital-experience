# Inserting the dynamic table HTML/JSP code

In this topic, you will learn how to insert the dynamic table HTML/JSP code.  

Use Rational Application Developer to code the dynamic table in the Personalized Offers portlet JSP. Then, export the project as a web archive (WAR) file. Finally, open the HCL Digital Experience Administration page for Portlet Management and update the web module that contains the Personalized Offers portlet.

Before you begin this procedure, ensure that you created a content spot.

1. Open Rational Application Developer and open **Pers_OffersPortalView.jsp** in edit mode.

2. Insert the following code at the end of the JSP page:

   ```jsp
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
                for (int i = 0, c = 0; ; ) 
                {    
                    if (c == 0) { %>    
                     <TR bgcolor="e7e7e7"><%        
                    }    
                    else { %>    
                    <TR><%        
                } %>    
            <TD>
            <%= item.getTitle() %>: <%= item.getDetails() %>             
            </TD>    
            </TR>
            <%    
            c = c == 0 ? 1 : 0;
            i++;    
            try {    
                    item = items[i];    
                }    
                catch (java.lang.ArrayIndexOutOfBoundsException _e0) 
                {    
                     break;    
                }  
            } 
            %>    
            </TBODY>
            </TABLE><%    
        }    
        catch (Throwable _e0) { _e0.printStackTrace();%>     
        <FONT>There are no current articles to display. </FONT>  
   <%    
   }%>
   ```

3. Save and close the file. Verify that no errors are handled apart from exception handling errors.

4. Export the project as a WAR file and close the Rational Application Developer.

5. Log in to HCL Portal as the Portal administrator (wpsadmin).  

6. Click the **Administration menu** icon.

7. Click **Portlet Management > Web Modules**.

8. Click **Update** to update the web module.

9. Use the newly created WAR file to complete the installation process.

You have successfully inserted the dynamic table HTML/JSP code into the Personalized Offers portlet. In the next topic, you will learn how to [Modify resource collection properties.](./pzn_demo_modify_resource_collection_properties.md)
