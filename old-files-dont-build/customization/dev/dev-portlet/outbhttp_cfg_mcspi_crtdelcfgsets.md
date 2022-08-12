# Creating and deleting configuration settings of the outbound HTTP connection

The controller object also provides methods for creating or deleting configuration settings.

You can create new items by using the `CreationContext` interface. This interface provides the controller with the mandatory initialization data. The following creation contexts are available: `OutboundConnectionProfileCreationContext`, `PolicyMappingCreationContext`, `PolicyRuleCreationContext`, `CookieRuleCreationContext`, and `PolicyVariableCreationContext`. You can implement the creation contexts either by a custom application or by the singleton class `OutboundConnectionCreationContextBuidlerFactory`.

The following code example shows how you create a new policy rule, and how you delete another policy rule:

```
OutboundConnectionModel model; // Refer to previous examples, how to instantiate this model. 
OutboundConnectionModelController ctrl; // Refer to previous example, how to instantiate this.
PolicyRule rule;// Refer to previous examples, how to instantiate this policy rule.

// This singleton can be used to produce CreationContext objects.
OutboundConnectionCreationContextBuilderFactory ccf = 
     OutboundConnectionCreationContextBuilderFactory.getInstance();

// Create a new policy rule.
CreationContext cc = ccf.getPolicyRuleCreationContext(mapping, "rule2", "www.testme.com/test2*");
ModifiablePolicyRule mrule2 = (ModifiablePolicyRule) ctrl.create(ModifiablePolicyRule.class, cc);

// Delete the policy rule.
ctrl.delete(rule);

ctrl.commit(); // Apply the changes.
```

**Parent topic:**[Configuring outbound HTTP connections by using the Model Controller SPI](../dev-portlet/outbhttp_cfg_mcspi.md)

**Previous topic:**[Modifying configuration settings of the outbound HTTP connection](../dev-portlet/outbhttp_cfg_mcspi_modfcfgsets.md)

