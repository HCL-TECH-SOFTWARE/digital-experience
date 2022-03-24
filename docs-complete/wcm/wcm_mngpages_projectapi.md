# Project URL generation 

You can redirect request processing to a specific project by generating URLs with the ProjectIdentificationService API, or the REST API. Request processing operates either completely within the scope of a project or completely outside the scope of a project. You cannot switch projects during request processing.

When a request originates from within a project, the request URL contains a project identifier for that project. The project information is included only in the URL and is not bound to the session. The project identifier can be an object ID \(OID\), as used by the portal, or a universally unique identifier \(UUID\), as used by Web Content Manager. To direct request processing to a specific project, you must generate a URL for the project and then render the URL.

## Java API

To generate URLs that target a project by using the Java API in the portal, you can use the ProjectIdentificationService API with the StateManagerService API:

-   The ProjectIdentificationService provides methods to create a `ServerContext` object, based on the identifier of the target project and the current `ServerContext` object.
-   The project-specific `ServerContext` object can then be used to retrieve a `URLFactory` object from the state manager service. All URLs generated with this factory contain the project ID.

This example constructs a portal URL to the current navigational state for a new project:

```
		// construct a server context for the project
		final ServerContext projectCtx = projectService.createServerContext(
				projectID, stateService.getServerContext());

		// access the URL factory to create a URL
		final URLFactory urlFct = stateService.getURLFactory(projectCtx);

		// construct a URL to the current state
		final EngineURL url = urlFct.newURL(Constants.SMART_COPY);
		url.writeDispose(out);

		// done with URL generation
		urlFct.dispose();
```

This example constructs a portal URL to a URI in a specific project:

```
		// construct a server context for the project
		final PocServerContext projectCtx = projectService.createServerContext(
				projectID, pocService.getServerContext());

		// access the URL factory to create a URL
		final DisposablePocURLFactory urlFct = pocService
				.getURLFactory(projectCtx);

		// construct a URL to the current state
		final PocURL url = urlFct.newURL(PocURLFactory.LATE_BINDING);
		url.setMode(Constants.VALUE_DOWNLOAD);
		url.setURI(new URI("test:abc"));

		// serialize
		url.writeDispose(out);

		// done with URL generation
		urlFct.dispose();
```

## REST API

If your application uses the Representational State Transfer \(REST\) architecture, you can use the remote APIs provided with the portal to construct project-specific URLs.

**Parent topic:**[Administering managed pages ](../wcm/wcm_mngpages_advadmin.md)

