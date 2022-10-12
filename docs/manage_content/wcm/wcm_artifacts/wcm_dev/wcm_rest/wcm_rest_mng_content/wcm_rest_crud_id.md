# How to use REST to work with item identity controls

The way identity controls are used with REST depend on whether a text provider is enabled or not for an item.

## Creating, updating, or reading identity controls with no text provider enabled

When no text provider is enabled on an item, identity controls work this way:

|REST Tag|Item field|
|--------|----------|
|`<wcm:name>text</wcm:name>`|Name|
|`<atom:title>text</atom:title>`|Display title|
|`<atom:summary>text</atom:summary>`|Description|

## Enabling updating or reading text provider controls

To either enable, update or read text provider controls, you add the following parameters to the title tag:

|REST Tag|Text provider field|
|--------|-------------------|
|`<wcm:title TextProviderName>text</wcm:title TextProviderName>`|Title name|
|`<wcm:title TextProviderKey>text</wcm:title TextProviderKey>`|Title key|
|`<wcm:desc TextProviderName>text</wcm:desc TextProviderName>`|Description name|
|`<wcm:desc TextProviderKey>text</wcm:desc TextProviderKey>`|Description key|

## Creating, updating, or reading identity controls with a text provider enabled

When a text provider is enabled on an item, identity controls work this way:

|REST Tag|Item field|
|--------|----------|
|`<wcm:name>text</wcm:name>`|Name|
|`<wcm:displayTitle>text</wcm:displayTitle>`|Display title|
|`<atom:title lang="language code" >text</atom:title>`For example: <br>`<atom:title lang="fr" >text</atom:title>`|Localized title **Note:** When a text provider is enabled, only the localized title can be read by the REST service. You need to update the text provider plug-in directly to change the localized title.|
|`<wcm:description>text</wcm:description>`|Description|
|`<atom:summary lang="language code" >text</atom:summary>`For example: <br>`<atom:summary lang="fr" >text</atom:summary>`|Localized description **Note:** When a text provider is enabled, only the localized description can be read by the REST service. You need to update the text provider plug-in directly to change the localized description.|

!!! note
    The language code that is required for the localized tags must be an IETF BCP47 compliant language code.


