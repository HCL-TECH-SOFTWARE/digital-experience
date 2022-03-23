# Defining tooltips with PowerTip 

Once your PowerTip module is active, you can add one or more tooltips to your pages through a dynamic content spot, or a config markup type subcontribution in a module.

The PowerTip offers flexible tip positioning at the compass points. You can position the tip so it is never clipped off the edge of the view port. And, you can let the tip remain visible while the mouse is on it so the user can interact with the contents of the tip. Here is an example of PowerTip usage code for those options:

```
<script type="text/javascript">
	$(function() {
		$('#myelement').data('powertiptarget', 'mytip');
		$('#myelement).powerTip({ placement: 's', mouseOnToPopup: true, smartPlacement: true });
	});
</script>
<div id="mytip" style="display:none">
	<input type="text" />
	<input type="button" value="Search" />
</div>
```

In this example, myelement must be replaced with the ID of the element on the page that you want to add the tip to. And mytip is the ID of the `div` that is the tip itself, which is defined by the `div` in the example. Notice that the tip `div` is set to `display:none` initially. The PowerTip shows it when the user mouses over the `myelement` element.

You can define multiple tooltips by copying the data and PowerTip lines for each tooltip and copying the `div` block for each tooltip. Modify the IDs for each one.

You can put the example code anywhere on the page. You can add the tooltip to a dynamic content spot to add the code to the page. Or, you can add the code to a config markup type subcontribution of a module.

If your markup is visible and needs to be injected at a specific point on a page, use a dynamic content spot. If your markup is not visible initially and can be injected anywhere on a page, use the subcontribution method. The tooltip code can be anywhere on the page, so use the subcontribution method and follow these steps

1.  Create a theme\_powertips subfolder in your theme's modules folder.

2.  Your theme\_powertips module will prereq the jquery\_powertip module, so create a file that is named prereqs.properties in your theme\_powertips folder with the following content:

    ```
    jquery_powertip
    ```

3.  Create a config subfolder in your theme\_powertips folder.

4.  Create a theme\_powertips.html markup file in your config folder. You can copy and paste the following code as an example:

    ```
    <script type="text/javascript">
    	$(function() {
    		$('#wpthemeHelp img').data('powertiptarget', 'wpthemeHelpTip');
    		$('#wpthemeHelp img').powerTip({ placement: 's', mouseOnToPopup: true, smartPlacement: true });
    	});
    </script>
    <div id="wpthemeHelpTip" style="display:none">
    	<form method="get" action="http://www-10.lotus.com/ldd/portalwiki.nsf/xpSearch.xsp" target="wiki">
    		<input type="text" name="searchValue" />
    		<input type="submit" value="Search" />
    	</form>
    </div>
    ```

    This example assumes that your theme has a help element with ID `wpthemeHelp` similar to the default theme. If your theme does not have an element with ID `wpthemeHelp`, then change the two instances of `'#wpthemeHelp img'` to a selector that identifies one of the elements in your theme, and rename the two instances of `'wpthemeHelpTip'`.

    This example uses a simple form on the tooltip that searches the HCL Digital Experience wiki documentation. You can change the markup in your tooltip `div` entirely to whatever you need to appear on your tooltip.

5.  Add the module theme\_powertips to the module listings in your jQuery profile file.

6.  Invalidate the cache so the Portal server includes your profile and module changes. Click the **Administration menu** icon. Then, click **Portal Analysis** \> **Theme Analyzer**. Then, click **Utilities** \> **Control Center** \> **Invalidate Cache**. Auto invalidation recognizes your changes automatically for WebDAV based themes. No further action is required. For more information, see [Utilities](themeopt_an_util.md#).


Go to your page that has your jQuery profile applied, move the mouse over the help icon, or whichever theme element you specified in step 4, and you see your tip appear.

If things do not work correctly, you can troubleshoot your modules. Click the **Administration menu** icon. Then, click **Portal Analysis** \> **Theme Analyzer**. Then, click **Examine Modules by Profiles**. Expand your theme in the tree and select your jQuery profile, such as **jQuery Deferred**, in the tree and examine the profile. Double-click your jQuery profile in the tree. Expand the Modules folder in the tree and select one-by-one your various jQuery modules, **jquery**, **jquery\_powertip**, and **theme\_powertips**. For each, examine the details to see if everything looks correct \(in particular the prereqs and the contributions\). If you spot and fix a problem, be sure to invalidate the cache after so the Portal server picks up the change.

**Parent topic:**[Adding jQuery to a theme ](../dev-theme/themeopt_jquery.md)

