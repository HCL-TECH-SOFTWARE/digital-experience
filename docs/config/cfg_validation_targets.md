# ConfigEngine validation targets

Some configurations can cause conflicts between Portal resources or with other web modules deployed into the WebSphere Application Server. You can check for conflicts by using ConfigEngine validation targets.

Conflicts can occur when the same value is specified for different resources. For example, a friendly name can conflict with a virtual portal context or a vanity URL. Conflicts are more likely when Portal is configured to use an empty context root and default home.

Portal includes three ConfigEngine targets to detect and prevent such conflicts:

-   **`path-conflict-check-full`**

    This target checks whether there are any conflicts between Portal resources and other servlets that are deployed into WebSphere.

-   **`path-conflict-check-path`**

    Required parameter: checkPath \(for example /path/to/check\)

    This target checks whether the provided path causes a conflict with the existing configuration.

-   **`path-conflict-check-uri`**

    Required parameter: checkURI

    This target checks whether the creation of a Portal resource would cause a conflict with existing resources. The following are possible URI formats:

    -   path:/path/to/check
    -   vp-context:/my-VP
    -   friendly-name:/my/friendly/path
    -   vanity-url:/my-vanity-name

These targets consider many resources, but conflicts can still exist. The targets can check for conflicts with other web modules only if those modules are started. For example, the targets cannot find the following types of conflict:

-   Conflicts that exist only in a project or that occur when a project is published.
-   Conflicts that exist in resources to which the user does not have access.
-   Conflicts that occur when you add servlet filters to the request processing that change the path of the URL.

Also, you cannot use the targets to check whether changing the friendly name of a page or deleting a page will cause a conflict.

The following parameters can be used for all targets. They check whether a configuration change would cause a conflict:

-   **assumeWpsContextRoot**

    Performs the check as if the WpsContextRoot is set to the specified value.

-   **assumeWpsDefaultHome**

    Performs the check as if the WpsDefaultHome is set to the specified value.

-   **assumeWpsPersonalizedHome**

    Performs the check as if the WpsPersonalizedHome is set to the specified value.

-   **assumeWsrpContextRoot**

    Performs the check as if the WsrpContextRoot is set to the specified value.


The result of the conflict check is part of the ConfigEngine output. It might look like the following example:

```
[wsadmin] path conflict report:
  [wsadmin] ---------------------
  [wsadmin]
  [wsadmin] /wps/myportal/Home
  [wsadmin]   virtual portal URL context
  [wsadmin]   friendly name
  [wsadmin]
  [wsadmin] /wps/portal/Home
  [wsadmin]   friendly name
  [wsadmin]   virtual portal URL context
```

In this example, a conflict was found between a friendly name and virtual portal mapping.

