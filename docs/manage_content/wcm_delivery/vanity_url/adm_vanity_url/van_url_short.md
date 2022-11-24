# Providing short vanity URLs

You might want to make your vanity URLs as short and simple as possible for your customers. You can create vanity URLs that contain only the vanity segment by omitting the string /wps/vanityurl. In this case, you must use a web server and define a rewrite rule. If you also use IBM Web Application Bridge, or if you have static files in the root of the HTTP server document directory, adapt the rewrite rule.

Example: You advertise your shoe sale by using the short vanity URL `http://hostname/shoe-sale`. The HTTP server rewrites this URL to `http://hostname/wps/vanityurl/shoe-sale`. The portal then redirects the user to `http://hostname/wps/portal/home/shoe_promotion_page`.

To be able to use such short vanity URLs, you must use a web server. For details about using a web server with your portal, see the topic about Preparing a remote web server for your environment in this documentation.

1.  If you use the IBM HTTP Server as your web server, modify the file httpd.conf to define the rewrite rule. Proceed by the following steps:
2.  Open the file httpd.conf with an editor.

3.  Activate the following modules:

    ```
    proxy_module
    proxy_http_module 
    rewrite_module
    ```

4.  Activate the rewrite engine by adding the following line:

    ```
    RewriteEngine   On
    ```

5.  Add the rewrite rule by adding the following line:

    ```
    RewriteRule	^/([^/]+)$             /wps/vanityurl/$1        [P]
    ```

    This rule redirects all single path requests to the vanity URL servlet. The `P` flag at the end of the line tells the rewrite engine to use a proxy request. This flag is required for the IBM® WebSphere® Application Server plug-in to handle the request without an extra redirect.

6.  If your website editors work in projects and you want them to be able to use short vanity URLs by the HTTP server, you need an extra rewrite rule as follows:

    ```
    RewriteRule     ^/\$project/([^/]+)/([^/]+)$             /wps/vanityurl/\$project/$1/$2         [P]
    ```

    This rule rewrites all URLs that start with `/$project/project name/vanity name`.

7.  The rules that are given in the previous steps might prevent static files in the document directories of your HTTP server from being served. To have them served, add conditions before the rewrite rule as in the following example:

    ```
    RewriteCond     %{DOCUMENT_ROOT}%{REQUEST_FILENAME}     !-f
    RewriteCond     %{DOCUMENT_ROOT}%{REQUEST_FILENAME}     !-d
    RewriteCond     %{DOCUMENT_ROOT}%{REQUEST_FILENAME}     !-l
    ```

    In this example, `f` means file, `d` means directory, and `l` means symbolic link. With these conditions added, the portal does not apply the rewrite rule on requests that match a file, directory, or symbolic link. The user accesses the file, directory, or link and is not redirected to the target website of the vanity URL. For more information, see the information under *Apache Module mod\_rewrite*.

    !!! note 
        Depending on your environment, it is good practice not to use periods in your vanity URLs to avoid conflicts with files in the HTTP server context root.

8.  If you use Web Application Bridge, add a rewrite rule to avoid namespace conflicts.

    Web Application Bridge must be mapped to the root context. As a result, vanity URLs and Web Application Bridge are in the same namespace, which can result in conflicts. Therefore, if you use Web Application Bridge, you might also define a more specific rewrite rule than the rule given earlier. Example:

    ```
    RewriteRule	^/([^/\.]+)$             /wps/vanityurl/$1        [P]
    ```

    With this rewrite rule, the portal redirects only names that consist of only one segment and contain no periods. This rewrite rule avoids conflicts with file names, such as shoe\_sale.html. For project work, modify the rule as required.

9.  If required, configure the preview link in the vanity URL user interface to show the short vanity URL.

    The user interface for managing vanity URLs has a preview link. By default, this link goes directly to the vanity servlet, and the portal shows the full vanity URL, for example `http://hostname/wps/vanityurl/shoe-sale`. You can configure the preview link to point to the HTTP server instead, which shows the short version of the vanity URL. To configure the preview link target, you use the portal configuration task `enable-vanityurl-httpserver-preview`. For more information, see *Configuring the vanity URL preview link*.



???+ info "Related information:"
    - [Getting started with the Web Application Bridge](../../../../../extend_dx/integration/wab/wab/h_wab_first.md)
    - [Integrating with web applications](../../../../../extend_dx/integration/wab/index.md)
    - [Vanity URLs](../../vanity_url/index.md)
    - [How vanity URLs work](../van_url_work.md)
    - [Preparing a remote web server](../../../../../deployment/install/traditional/install_prereq_software/prep_ihs.md)
    - [Configuring the vanity URL preview link](../adm_vanity_url/van_url_cfg_preview.md)
    - [IBM HTTP Server](https://www.ibm.com/cloud/websphere-application-server)
    - [Apache mod\_rewrite](http://httpd.apache.org/docs/2.2/mod/mod_rewrite.html)
    - [Apache mod\_proxy](http://httpd.apache.org/docs/2.2/mod/mod_proxy.html)

