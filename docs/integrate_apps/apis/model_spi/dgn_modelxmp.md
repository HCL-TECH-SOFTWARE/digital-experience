# Model SPI samples

The Model SPI can be used in portlets, themes, and skins. The models can be used with authenticated users and also with the anonymous user.

The following samples focus on JSPs, but the code can also be used in Java source files.

## Displaying the portal selection path \(breadcrumb trail\)

The following example shows how to render a breadcrumb trail that shows the current selection path.

```xmp

<%@ taglib uri="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0/portal-fmt" 
    prefix="portal-fmt" %>
<%@ taglib uri="http://www.ibm.com/xmlns/prod/websphere/portal/v6.0/portal-navigation" 
    prefix="portal-navigation" %>
<%@ page import="com.ibm.portal.model.NavigationSelectionModelHome" %>
<%@ page import="com.ibm.portal.model.NavigationSelectionModelProvider" %>
<%@ page import="com.ibm.portal.navigation.NavigationSelectionModel" %>
<%@ page import="com.ibm.portal.navigation.NavigationNode" %>
<%@ page import="com.ibm.portal.ModelException" %>
<%@ page import="java.util.Iterator" %>
<%@ page import="javax.naming.InitialContext" %>
<%@ page import="javax.naming.Context" %>
<%@ page import="javax.naming.NamingException" %>

<%
try{
    Context ctx = new InitialContext();
    NavigationSelectionModelHome home = (NavigationSelectionModelHome) 
        ctx.lookup("portal:service/model/NavigationSelectionModel");
    if (home != null) {
        NavigationSelectionModelProvider provider = 
            home.getNavigationSelectionModelProvider();
        NavigationSelectionModel model = 
            provider.getNavigationSelectionModel(request, response);
        for (java.util.Iterator i = model.iterator(); i.hasNext(); ) 
        {
            NavigationNode node = (NavigationNode) i.next();
            if (i.hasNext()) {
%>

        <a href="<portal-navigation:navigationUrl type='link' varname='<%=node%>'/>">
            <portal-fmt:title varname='<%=node%>'/>
        </a> 
        &gt;
<%
            }
            else 
            {
%>
        <portal-fmt:title varname='<%=node%>'/>
<%
            }
        }
    }
}
catch (ModelException mx) {
%>

<p><span style="color:#ff0000">A model exception occured</span></p>

<%
}
catch (NamingException nx) {
%>

<p><span style="color:#ff0000">A naming exception occured</span></p>

<%
}
%>


```

This example uses a JNDI lookup to obtain the navigation selection model. The model is then iterated and for each node a title is produced by using the <portal:title/\> tag. Until the last node is reached, the <portal:navigationUrl/\> tag is used to generate links to the referenced pages.

## Getting page layout information

This example shows portlet code that displays layout information of a page as retrieved from the layout model of that page. The portlet outputs the layout structure of the page it is located. Two methods of the portlet are shown in the following example. The first, showTableModel, is the entry point for rendering a table that shows the layout of a page. The page is identified through the selected navigation node of the navigation selection model. The other method, printLayoutElement, recursively traverses the layout model and outputs markup according to the element it meets.

```

/**
 * Displays a table model of the layout of a page.
 *
 * @param aWriter the writer where the output goes to
 * @param aLayoutModel the layout model to show
 * @param aPage the page for which to show the layout model\
 * @param aRequest the portlet request
 * @throws ModelException if an exception occurs
 */
private void showLayoutModel(final PrintWriter aWriter, 
        final LayoutModel aLayoutModel, final ContentPage aPage, 
        final RenderRequest aRequest) 
      throws ModelException {
   aWriter.print("<h3>Layout for page ");
   aWriter.print(getTitle(aPage));
   aWriter.println("</h3>");   
   // invoke the recursive traversal of the layout model; 
   // start with the root node   
   printLayoutNode(aWriter, aLayoutModel, 
                  (LayoutNode) aLayoutModel.getRoot(), aRequest);   
   }   

/**
 * Outputs a single element of the layout model to the output writer.
 *
 * @param writer the writer where the output goes to
 * @param model the layout model to use 
 * @param node the current node of the layout model 
 * @param request the portlet request 
 * @throws ModelException if an exception occurs 
 */
private void printLayoutNode(final PrintWriter writer, final LayoutModel model, 
        final LayoutNode node, final RenderRequest request) throws ModelException { 
   if (node != null) {
      if (node instanceof LayoutControl) {
         // output control information
         writer.print("<b>Control</b> (");
         writer.print(getTitle((LayoutControl) node));
         writer.println(")");
      } 
      else {
         writer.println("<table border=\"1\">");
         // get the layout metrics 
         // (needed to find out the orientation of containers)
         final LayoutMetrics metrics = node.getLayoutMetrics();
         final Object info = metrics.getValue(LayoutMetrics.ORIENTATION);
         writer.print("<tr><td><b>Container</b> (");
         writer.print(info);
         writer.println(")");
         if (info == Orientation.HORIZONTAL) {
            writer.println("<table>");
            writer.println("<tr>");
            // recurse for the horizontal container
            if (model.hasChildren(node)) {
               for (Iterator i = model.getChildren(node); i.hasNext();) {
                  writer.println("<td valign=\"top\">");
                  printLayoutNode(writer, model, (LayoutNode) i.next(), request);
                  writer.println("</td>");
               }
            }
            writer.println("</tr>");
            writer.println("</table>");
         } 
         else {
            // recurse for the vertical container
            if (model.hasChildren(node)) {
               writer.println("<table>");    
               for (Iterator i = model.getChildren(node); i.hasNext();) {
                  writer.println("<tr><td>");
                  printLayoutNode(writer, model, (LayoutNode) i.next(), request);
                  writer.println("</td></tr>");
               }
               writer.println("</table>");
            }
         }
         writer.println("</td></tr></table>");
      }
   }
}


```


