# Assigning attribute based administration rules to pages and portlets

Attribute based administration rules can be assigned manually via HCL Digital Experience Administration portlets or through the XML configuration interface.

-   In order to map rules, non-administrator users must be given at least user access to the rule that is being mapped and edit access to the page or portlet where the rule is being mapped.
-   Pages or portlets on derived pages show an inherited visibility rule if no rule is defined for them. You cannot clear the inherited visibility rules on derived pages.

Using the XML configuration interface, you can assign a rule to a page or portlet. Set the parameter com.ibm.portal.navigation.rule to indicate the rule to assign to the page or portlet. The value of the parameter should be the unique id or UUID of the rule. The UUID can be found by exporting the rule in the Personalization user interface and inspecting the exported XML for thejcr:uuid parameter.

For example, to assign a rule with the UUID `7ce9d5004ee31f41b0d3b944c9f7965c` to a page or portlet, add the following parameter to the content-node in the XML access script:

`<parameter name="com.ibm.portal.navigation.rule" type="string" update="set"><![CDATA[7ce9d5004ee31f41b0d3b944c9f7965c]]</parameter>`


