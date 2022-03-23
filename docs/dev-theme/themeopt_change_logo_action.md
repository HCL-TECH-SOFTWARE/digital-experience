# Changing the logo action 

You can change the default action of a logo to take users to different pages in your portal.

The default logo action takes users to your portal home page. The logo can complete three other actions:

-   The logo can take users to the first child page.
-   The logo can take users to another portal page with the unique ID of that page.
-   The logo can take users to another portal page with the vanity URL of that page.

-   **Taking users to the first child page**

    Remove the default code and replace it with the following code :

    ```
    <%-- Logo --%>
    	<li>
    		<span class="wpthemeBranding">
    		<portal-core:lazy-set var="showHiddenPages" elExpression=="wp.publicRenderParam['{http://www.ibm.com/xmlns/prod/websphere/portal/publicparams}hiddenPages']" />
    		<portal-logic:if deviceClass="smartphone/tablet">
    			<c:set var="isMobile" value="true"/>
    		</portal-logic:if>
    	    <c:set var="homeNodeFound" value="false"/>
    		<c:forEach var="node" items="${wp.navigationModel.children[selectionPath[1]]}" varStatus="childrenStatus">
              <c:set var="isHiddenPage" value="${node.metadata['com.ibm.portal.Hidden'] || (isMobile && node.metadata['com.ibm.portal.mobile.Hidden'])}" />
              <c:if test="${!homeNodeFound && (!isHiddenPage || showHiddenPages)}">
    			<c:set var="nodeID" value="${wp.identification[node]}"/>
           	    <a class="wpthemeBrandingLink" href="?uri=nm:oid:${nodeID}" alt="<portal-fmt:out>${node.title}</portal-fmt:out>">
    			<img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt="<portal-fmt:text key="theme.ibmLogo" bundle="nls.commonUI"/>">
    		    </a>
    		    <span class="wpthemeAltText"><portal-fmt:text key="theme.ibmLogo" bundle="nls.commonUI"/></span>
    	        <c:set var="homeNodeFound" value="true"/>
    		  </c:if>
    		</c:forEach>
    		</span>
    	</li>
    ```

-   **Taking users to another portal page with its unique ID**

    Remove the following line of default code:

    ```
    <a class="wpthemeBrandingLink" href="?uri=nm:oid:${nodeID}" alt="<portal-fmt:out>${node.title}</portal-fmt:out>">
    ```

    Replace it with the following code snippet, where the value of contentNode is replaced with the unique name of the page:

    ```
    <portal-navigation:urlGeneration contentNode="ibm.portal.Home.Welcome" >
           	    <a class="wpthemeBrandingLink" href="<% wpsURL.write(escapeXmlWriter); %>" alt="">
    			</portal-navigation:urlGeneration>
    ```

-   **Taking users to another portal page with its vanity URL**

    Remove the following line of default code:

    ```
    <a class="wpthemeBrandingLink" href="?uri=nm:oid:${nodeID}" alt="<portal-fmt:out>${node.title}</portal-fmt:out>">
    ```

    Replace it with the following code snippet, where host, port, and contextroot are substituted with your actual values and where Home is replaced with the vanity URL of your page:

    ```
    <a class="wpthemeBrandingLink" href="http://host:port/contextroot/vanityurl/Home" alt="">
    ```


**Parent topic:**[Changing the theme logo ](../dev-theme/themeopt_change_theme_logo.md)

