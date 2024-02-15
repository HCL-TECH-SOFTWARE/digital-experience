# Injecting custom aggregators

By implementing a new theme extension point, you can apply different approaches to Active Site Analytics.

To do this, define your implementation within the following theme extension point in the file plugin.xml:

```
com.ibm.portal.theme.plugin.ActiveSiteAnalyticsAggregators
```

If the theme extension loop is in place, it picks up the custom implementation of the extension point, and its output is added to the markup of the portal page. If you want to have the output added to the head of the HTML page, implement the following extension point:

```
com.ibm.portal.theme.plugin.ActiveSiteAnalyticsDependencies
```

For details about the extension loop refer to the topic about Instrumenting a special theme for Active Site Analytics under the section about Including microformats of interest.

Alternatively, you can use the following JSP code to iterate over the page metadata and add the aggregator JavaScript include statement to the page:

```
<portal-logic:pageMetaData varname="pageMetaData">
   <portal-logic:urlFindInTheme file='js/${pageMetaData["asa_aggregator"]}' 
         id="asa_aggregator_file"/>
   <c:if test="${asa_aggregator_file != null}">
      <script type="text/javascript" src='<%=asa_aggregator_file%>'></script>
   </c:if>
</portal-logic:pageMetaData>
```

!!! note
   The result of `urlFindInTheme` is cached. To clear the cache, restart the portal. Redeploying the theme is not sufficient to trigger a reevaluation of `urlFindInTheme`.


???+ info "Related information"
   - [Tags used by the portal JSPs](../../../../../../../build_sites/themes_skins/customizing_theme/portal_jsp_tag/index.md)

