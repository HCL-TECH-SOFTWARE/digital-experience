# Custom code

HCL Digital Experience is a platform upon which to build custom applications. Digital Experience cannot guard against all potential security vulnerabilities that could be introduced by custom code.

Application architects should take steps during development and test to avoid such vulnerabilities. Since custom themes, custom portlets, and other custom components all contribute to the page source, each bears some responsibility in guarding against attacks on the application.

A comprehensive treatment of web application security is beyond the scope of this guide. As suggested in the introduction, application architects should seek out additional resources on web application security.

## Recommended actions and considerations

- Always follow secure coding practices when developing and deploying custom code.

- Web application architects and developers should be trained on common risks and attack types.

After security misconfiguration, XSS is the most common flaw in web applications. Developers should be especially familiar with techniques for avoiding XSS:

- Ensure that all custom components HTML-encode or URL-encode markup they contribute to page source, where appropriate.

    - <c:out> with escapeXML from the JSP standard tag library (JSTL) is a good tool for HTML-encoding output from JSPs.

    - Custom theme developers should confirm that they HTML-encode all output.

    - Custom theme developers should confirm that all custom scripts have been reviewed for DOM-based vulnerabilities.

    - Custom theme developers should ensure that packaged libraries are well-maintained, repackaging as security vulnerabilities are fixed.

    - Custom portlet developers should confirm that they HTML-encode all output.

    - Custom portlet developers should confirm that all custom scripts have been reviewed for DOM-based vulnerabilities.

    - Custom portlet developers should ensure that packaged libraries are well-maintained.

    - Consider both server-side code (e.g. JSPs, Java classes) and client-side code (e.g. Javascript).

    - HTML-encoding output is not always sufficient to guard against XSS attacks. Consider whether any user input is inserted into custom Javascript.

    - Consider <c:url> and java.net.URLEncoder or similar tools for URL encoding.

- Ensure that all custom components follow other best-practices to guard against XSS. Here are a few references:

    - [W3](https://www.w3.org/Security/wiki/Cross_Site_Attacks)

    - [OWASP](https://owasp.org/www-community/attacks/xss/), with links to cheat sheets

    - [Prevent a cross-site scripting attack](https://www.ibm.com/garage/method/practices/code/protect-from-cross-site-scripting/)

- Scan your application with an automated web security tool. Consider using HCL AppScan and related applications.

    - Refer to [this article](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0100210) when analyzing reports from scan tools or third-parties, prior to engaging HCL Support.

- Consider whether to set security.css.protection=true in the [Configuration Service](https://help.hcltechsw.com/digital-experience/8.5/admin-system/srvcfgref_config.html). This instructs Digital Experience to HTML-encode certain user input before passing it along to custom portlets.

    - For example, < and > would be converted to &lt and &gt.

    - This can cause problems in some portlets which do not expect this encoding.
    
    - This setting offers only minimal protection against XSS. The preferred method is to validate output, as described above.