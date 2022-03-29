# Custom authoring interfaces

You can use the Web Content Manager API and remote action parameters to create customized authoring interfaces specifically for your content creators.

You might not want to use an authoring portlet as the user interface for all your users. In some cases, it might be better to create a custom authoring interface by using the Web Content Manager API and remote action parameters. For example, you can create a simple content authoring interface for a specific content authoring team.

## Custom launch pages

You can configure an authoring portlet to use a launch page of your own design instead of the default user interface. A custom launch page can either be a JSP or HTML file. You use remote actions to call different views and functions from the authoring portlet's user interface. You can also use the web content API to add other functions to your launch page. After you created a custom launch page, you then configure your authoring portlet to use the custom launch page instead of the default authoring portlet user interface.

## Remote actions

Remote actions are used in the query string of a URL to trigger actions from the Web Content Manager application. You can use remote actions to add standard Web Content Manager functions to a custom user interface.

**Parent topic:**[Authoring portlet](../site/site_auth_portlet.md)

