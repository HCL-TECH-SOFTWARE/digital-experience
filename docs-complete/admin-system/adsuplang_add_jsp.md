# Adding JSPs for a new language 

For the new language in your portal, you also need to add JSPs. Some JSPs that contain mostly text, such as help JSPs, are translated directly which means that the text is contained in the JSP and not in a resource bundle. For JSPs that do not use resource bundles, you need to copy and translate an existing JSP and store it in the appropriate location.

The location of JSPs can be, for example, jsp/\[mime-type\]/\[language\]/\[country\]/\[variant\]/files.jsp. For instance, existing help JSPs are already translated in HCL Digital Experience and placed in the relevant \[language\]and \[country\] sub-directories. When deciding where to store new JSPs, you need to consider how the portal locates a JSP for rendering its content.

The following is an example of the order in which directories are searched, where path1 is a user-defined path, ie5 is the markup version \(here: Internet Explorer 5\), and the locale is en\_US:

1.  /html/path1/ie5/en\_US/mytemplate.jsp
2.  /html/path1/ie5/en/mytemplate.jsp
3.  /html/path1/ie5/mytemplate.jsp
4.  /html/path1/en\_US/mytemplate.jsp
5.  /html/path1/en/mytemplate.jsp
6.  /html/path1/mytemplate.jsp
7.  /html/en\_US/mytemplate.jsp
8.  /html/en/mytemplate.jsp
9.  /html/mytemplate.jsp
10. /mytemplate.jsp

This search order means that if the user language is not supported, the portal will choose the file in the locale independent location, which in the example is the English file.

**Parent topic:**[Supporting a new language ](../admin-system/adsuplang_new.md)

