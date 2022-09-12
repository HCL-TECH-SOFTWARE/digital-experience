# Updating portlets common across clusters

You can use the Deployment Manager or the XML configuration interface to update portlets. If the portlet was predeployed as a standard EAR, then only the EAR needs to be updated through Deployment Manager and the results synchronized to every cluster to which this application is mapped. If a portlet configuration is being updated, for instance with new access control definitions or configuration parameter values, then the XML configuration interface must be used to update every cluster's configuration with this same information. In this case you would use an updated <web-app\> element.

1.  Enter the AdminApp install command with the update option within the `wsadmin` scripting client to update an enterprise application.

2.  Open the Deployment Manager WebSphere® Integrated Solutions Console.

3.  Go to **Applications > Application Types > WebSphere enterprise applications**.

4.  Select the enterprise application to update and click **Update**.



