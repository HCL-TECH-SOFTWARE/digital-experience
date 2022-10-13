# Receiving the result of an HTML form submission

The interaction requests that the Web Content Viewer portlet mediates result in response information. To access that result information, use the HCL Web Content Manager rendering plug-ins.

When you post data to the Web Content Viewer portlet as described under *Sending data to the Web Content Viewer portlet*, the addressed data sink serves the result back in the form of a data source. The Web Content Viewer portlet performs the following operations on that data source:

1.  The portlet transforms that data source into a String value by converting the source into a character source.
2.  The portlet sets the resulting String value as a corresponding session attribute or private render parameter.

The URL generated for the action parameter of the HTTP form controls whether the resulting string is stored in a session attribute or set as a private render parameter. You can specify the behavior by setting the corresponding `resultSessionAttribute` and `resultRenderParameter` parameters in the action URL plug-in tag that you use to generate the form action URL.

You can then access the session attribute and the render parameter in your web content by using the session attribute rendering plug-in and the render parameter rendering plug-in, respectively. For example, if the data source of a data sink returns JSON data, you can process the data further by using JavaScript that is contained in your web content.


???+ info "Related information:"
    - [The action URL plug-in](../../../../manage_content/wcm/wcm_artifacts/tags/creating_web_content_tags/creating_plugin_tag/portlet_plugins/plrf_rendr_plugin_actionurl.md)
    - [The session attribute plug-in](../../../../manage_content/wcm/wcm_artifacts/tags/creating_web_content_tags/creating_plugin_tag/rendering_state_plugins/plrf_rendr_plugin_session_attrbt.md)
    - [The render parameter plug-in](../../../../manage_content/wcm/wcm_artifacts/tags/creating_web_content_tags/creating_plugin_tag/rendering_state_plugins/plrf_rendr_plugin_render_parm.md)

