# Content provider profile policy


After you create the content provider profile, create policies for different applications and resources that are served by the content provider.

A content provider profile policy is created per application or resource type. A policy specifies configurable directives and tuning parameters according to the web application's security and deployment. Any web application is identified by its context root. Based on the context root or a regex you can provision certain applications or resource paths through a unique policy.

You can have multiple policies that are created for a particular content provider profile. Sometimes a context root matches more than one policy. In that case, a best match is attempted and if there is more than a one match then a random match is applied.

## URL pattern

The default is to allow all context roots to be covered with the policy and **Allow all** comes as selected. You can exclude context roots by specifying a context root or regex that starts with a leading /. You can have the policy that is applied to only a chosen subset. Choose **Block all** and enter a context root or regex that starts with a leading / in the corresponding text box.

