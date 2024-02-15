# Using the AJAX proxy in portlets

Here is how you use the AJAX proxy in portlets.

The easiest way to create proxy URLs in a portlet is to register the AJAX proxy servlet in the `web.xml` file of the portlet. This allows you to create the base proxy URL by using the portlet API, whereas you append the target URL according to the URL format specified in the section about the URL format. The class name of the proxy servlet is `com.ibm.wps.proxy.servlet.ProxyServlet`. For more details refer to the sample `web.xml` file.

If you want the proxy to be able to access resources that require authentication, specify a second servlet mapping that is associated with a security constraint. In the sample, only authenticated users can access proxy URLs that match the URL pattern `/myproxy/*`.

!!!note
      You must associate the user roles that you specify in the `web.xml` file with the user roles of the portal server. You can do this by creating the corresponding role mappings for the respective application in the WebSphere® Integrated Solutions Console.

```
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://java.sun.com/xml/ns/j2ee" ...>
   ...
   <servlet>
      <servlet-name>ProxyServlet</servlet-name>
      <servlet-class>com.ibm.wps.proxy.servlet.ProxyServlet</servlet-class>
   </servlet>
   ...
   <servlet-mapping>
      <servlet-name>ProxyServlet</servlet-name>
      <url-pattern>/proxy/*</url-pattern>
   </servlet-mapping>
   <servlet-mapping>
      <servlet-name>ProxyServlet</servlet-name>
      <url-pattern>/myproxy/*</url-pattern>
   </servlet-mapping>
   ...
   <security-constraint id="SecurityConstraint_1">
      <web-resource-collection id="WebResourceCollection_1">
         <web-resource-name/>
         <url-pattern>/myproxy/*</url-pattern>
         <http-method>GET</http-method>
         <http-method>POST</http-method>
         <http-method>PUT</http-method>
         <http-method>HEAD</http-method>
      </web-resource-collection>
      <auth-constraint id="AuthConstraint_1">
         <description>only for authenticated</description>
         <role-name>All Role</role-name>
      </auth-constraint>
   </security-constraint>
   ...
   <security-role id="SecurityRole_1">
      <description>Everyone</description>
      <role-name>Everyone Role</role-name>
   </security-role>
   <security-role id="SecurityRole_2">
      <description>All authenticated users</description>
      <role-name>All Role</role-name>
   </security-role>
</web-app>

```

Registering the proxy servlet in the Web deployment descriptor of a portlet does not imply that the portlet is based on an application specific configuration. If no `proxy-config.xml` file is provided with the portlet, the proxy servlet uses the global proxy configuration instead. The only constraint that you need to consider is that for each servlet mapping, a corresponding context path mapping must exist in the proxy configuration. This can be either in the global or in the application specific configuration. For details on how to configure the AJAX proxy refer to the section about AJAX proxy configuration.


???+ info "Related information"
      - [Configuring remote server access for links](../../../../../../manage_content/wcm_configuration/cfg_webcontent_auth_env/wcm_config_ecm_whitelist.md)
      - [Adding an outbound connection policy](../../../../web2_ui/outbound_http_connection/cfg_outbound_http_connections/sample_admin_tasks/outbhttp_cfgsmptsk_add_ob_conn_plcy.md)
