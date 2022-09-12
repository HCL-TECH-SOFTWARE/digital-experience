# Dynamic content spot debugging

Dynamic Content Spots add dynamic markup into static themes or skins. Sometimes, it is difficult to discern which parts of the page were contributed from which dynamic content spots.

The new Dynamic Content Spot Debugging was introduced to provide a visual indication in the page within your browser. You must turn on the Dynamic Content Spot Debugging to control the visualization feature for dynamic content spots. Click the **Administration menu** icon. Then, click **Portal Analysis** \> **Theme Analyzer**. Then, click **Utilities** \> **Control Center** and turn on the Dynamic Content Spot Debugging.

The Dynamic Content Spot Debugging visual indicator operates in two ways, Default mode and Inline mode.

## Default mode

This mode shows the original markup structure and displays the corresponding content sport for markup type when it is in focus. If a user hovers, the markup is highlighted with a background color and a label, which displays the URI of the corresponding spot. If the spot was configured through the `dyn-cs:` scheme the system also resolves the spot to its final URI, which is usually a .jsp. The resolved URI is shown as a link. This link does not provide a working URL for you to follow with your browser. You can copy the resolved URI for further use.

## Inline mode

With this feature, you can easily spot if you have unnecessary dynamic content spots in your theme or skins. But, it does not preserve the overall design of your page. The advantage of this mode over the default mode is that it displays spots that do not contribute anything visual.

## Limitations

The validation report shows errors, warnings, and informational messages about the theme and corresponding artifacts, such as profiles and modules. However, the validation report does not determine whether the profiles that are applied to each page are present in the theme.

When you enable the visualization feature for dynamic content spots, that setting does not persist across a server restart. Also, it applies to the current cluster member. It is not replicated to other cluster members.

Dynamic content spot debugging, development mode, reports, and client tracing do not persist across a cluster or a server restart either.


