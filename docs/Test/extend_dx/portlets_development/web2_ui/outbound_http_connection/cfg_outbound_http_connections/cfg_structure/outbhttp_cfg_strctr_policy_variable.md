# Policy variables

You can use policy variables to resolve tokens of the form \{$Variable\_name\} that can appear in the URL pattern setting of a proxy rule or in metadata.

Policy variables are used in the `urlPattern` setting of a proxy rule item, or in a metadata section. There are two types of policy variables:

-   **Endpoint variables**

    Endpoint variables define a single-value variable. They are typically used to define a specific backend host. When application developers use endpoint variables, they can write a policy rule so that it extracts those parts of the URL pattern in a variable that are specific to the current portal environment. Example:

    1.  The portlet developer defines a proxy rule with the following URL pattern setting: `{$my_server}/mymail*`. This means that the resulting URL pattern is the value of the policy variable, appended with the path `/mymail`.
    2.  The portal system administrator defines the value `http://www.the-remote-system.com` for the variable `my_server`. Therefore, the URL pattern of the policy rule is `http://www.the-remote-system.com/mymail`.
    The benefit of this technique is that you can divide a URL pattern into parts that are owned by the portlet developer and parts that are owned by the portal system administrator. Therefore, the portlet developer can define a policy rule without knowing the concrete host name of the backend system to which the outbound connection is established.

-   **Dynamic policy variables**

    Dynamic policy variables can have more than one value. The purpose of this variable type is to define dynamic parts of the URL pattern without having to specify a policy rule more than once. Example:

    -   A policy rule URL pattern has the following URL pattern setting: `http://localhost/wps/{$my_dynamic_policy}/Main/*`.
    -   The variable `my_dynamic_policy` is associated with the values `portal` and `myportal`.
    As a result, the policy rule applies to URLs that start with `http://localhost/wps/portal/Main/` or `http://localhost/wps/myportal/Main/`. The purpose of this technique is to make one policy rule available for multiple URL patterns that can contain dynamic parts.


???+ info "Related information"
    - [Setting policy variables](https://help.hcltechsw.com/digital-experience/9.5/dev-portlet/outbhttp_cfg_strctr_policy_variable_set.html)

