# Outbound HTTP connection

The same origin policies ([W3](https://www.w3.org/Security/wiki/Same_Origin_Policy), [IETF](https://www.rfc-editor.org/rfc/rfc6454), and [JavaScript](https://developer.mozilla.org/en-US/Same_origin_policy_for_JavaScript)) of web browsers prevent one site from accessing the data of another site. [Outbound HTTP Connection](https://help.hcltechsw.com/digital-experience/8.5/dev-portlet/outbound_http.html) enables you to selectively circumvent same origin policies. For example, JavaScript on a Digital Experience page may request XML from another site through the HTTP Outbound Connection proxy (formerly, the AJAX Proxy).

## Recommended actions and considerations

- What level of trust do you place in sites accessed through the HTTP Outbound Connection.

    - What assumptions do your scripts make about this data? Could an XSS attack be implemented from the other site (e.g. a DOM-based attack).

- Which portlets need to access the back-end application? If only one or few portlets, then consider using [application scoped profiles](https://help.hcltechsw.com/digital-experience/8.5/dev-portlet/outbhttp_cfg_strctr_obconn_profile.html) to limit the scope of the exposed data.

- Which users/clients need access through Outbound HTTP Connection? [Control access](https://help.hcltechsw.com/digital-experience/8.5/dev-portlet/outbhttp_cfg_script_acc_pol.html) as tightly as your functional requirements permit to limit the security exposure inherent in circumventing same origin policies. Control access via:

    - Access policies
    
    - IP filtering

- If the back-end application accessed through Outbound HTTP Connection requires [authentication](https://help.hcltechsw.com/digital-experience/8.5/dev-portlet/outbhttp_authntct.html), how is that achieved? SSO via cookies? Credentials from a credential vault slot? HTTP Basic authentication? Are the credentials and/or cookies protected on the network path between Digital Experience and the other application (e.g. transmitted via HTTPS)?