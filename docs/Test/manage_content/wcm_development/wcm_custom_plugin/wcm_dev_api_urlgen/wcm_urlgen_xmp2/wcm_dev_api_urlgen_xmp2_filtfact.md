# Example 2: Filter factory class

This sample demonstrates a filter factory class. This filter class creates an instance of the filter for each request to render web content that contains URLs to other web content items.

The factory also obtains references to portal services and models that are required by the filter. These references are required to look up web content pages according to these criteria:

-   The path of the web content for which the URL is generated.
-   The configuration of the web content viewer.

By default, this sample filter is enabled after you deploy the sample classes. However, you can disable the sample filter by setting the following portlet preference in the web content viewer configuration:

-   Preference: DISABLE\_FriendlyUrlGenerationFilter
-   Value: true

```
/******************************************************************
 * Copyright HCL Technologies Limited 2011, 2019                                       *  
 ******************************************************************/
package com.ibm.workplace.wcm.api.samples;
import java.util.logging.*;
import javax.naming.*;
import javax.portlet.*;
import com.ibm.portal.*;
import com.ibm.portal.identification.*;
import com.ibm.portal.portlet.service.*;
import com.ibm.portal.portlet.service.model.*;
import com.ibm.portal.resolver.friendly.service.*;
import com.ibm.portal.services.contentmapping.*;
import com.ibm.portal.state.exceptions.*;
import com.ibm.portal.state.service.*;
import com.ibm.workplace.wcm.api.*;
import com.ibm.workplace.wcm.api.exceptions.*;
import com.ibm.workplace.wcm.api.extensions.url.*;

/**
 * Factory for the friendly content URL generation filter.
 * 
 * The filter factory is used to create a new instance of the filter for each
 * request to render a web content that contains URLs to other web content
 * items. This sample filter can be disabled by setting a portlet preference on
 * the Web Content Viewer. To disable the filter set a preference with the name
 * {@value #DISABLE_FILTER} and the value "true". By default the filter will be
 * enabled after the deployment of the sample classes.
 * 
 * Furthermore the factory is used to obtain references to different portal
 * services and models that are required by the filter to do the lookup of web
 * content pages based on the path of the web content the URL is generated for
 * and the configuration of the Web Content Viewer portlet.
 */
public class FriendlyUrlGenerationFilterFactory implements ContentUrlGenerationFilterFactory {

	/**
	 * name of the portlet preference that can be used to check if the filter is
	 * disabled
	 */
	public final static String DISABLE_FILTER = "DISABLE_FriendlyUrlGenerationFilter";

	/** logger */
	private static final Logger LOGGER = Logger.getLogger(FriendlyUrlGenerationFilterFactory.class.getName());

	/** lock object for Identification lookup */
	private static final Object LOCK_IDENTIFICATION = new Object();

	/** the identification service */
	private static volatile Identification IDENTIFICATION;

	/** lock object for MappingURLTreeModelProvider lookup */
	private static final Object LOCK_MAPPING_URL_MODEL_PROVIDER = new Object();

	/** provider for url mapping model */
	private static volatile MappingURLTreeModelProvider MAPPING_URL_MODEL_PROVIDER;

	/** lock object for StateManagerHome lookup */
	private static final Object LOCK_STATE_MGR_SRV = new Object();

	/** state manager service */
	private static volatile PortletStateManagerService STATE_MGR_SRV;

	/** lock object for friendly selection service lookup */
	private static final Object LOCK_FRIENDLY_SEL_SRV = new Object();

	/** friendly selection service */
	private static volatile PortletFriendlySelectionServiceHome FRIENDLY_SEL_SRV;

	/** lock object for friendly selection service lookup */
	private static final Object LOCK_CONTENT_MAPPING_HOME = new Object();

	/** content mapping info home */
	private static volatile ContentMappingInfoHome CONTENT_MAPPING_HOME;

	/** lock object for web content service lookup */
	private static final Object LOCK_WEB_CONTENT_SRV = new Object();

	/** web content service */
	private static volatile WebContentService WEB_CONTENT_SRV;

	/** lock object for content model provider lookup */
	private static final Object LOCK_CONTENT_MODEL_PROVIDER = new Object();

	/** content model provider */
	private static volatile ContentModelProvider CONTENT_MODEL_PROVIDER;

	@Override
	public ContentUrlGenerationFilter getFilter(final RenderRequest request, final RenderResponse response)
			throws ContentUrlFilterInstantiationException {

		final boolean isLogging = LOGGER.isLoggable(Level.FINEST);
		if (isLogging) {
			LOGGER.entering(getClass().getName(), "getFilter");
		}

		ContentUrlGenerationFilter result = null;

		// check if the filter is enabled. This filter can be disabled by
		// setting portlet preference to a value of 'true'
		if (!Boolean.valueOf(request.getPreferences().getValue(DISABLE_FILTER, Boolean.FALSE.toString()))) {
			try {
				Workspace workspace = getWebContentService().getRepository().getWorkspace();
				// user access is sufficient to lookup a item
				workspace.useUserAccess(true);
				result = new FriendlyUrlGenerationFilter(getFriendlySelectionServiceHome()
                        .getPortletFriendlySelectionService(request, response), getContentModelProvider()
                        .getContentModel(request, response), workspace, getIdentification(), getStateManageService()
                        .getPortletStateManager(request, response), getMappingURLTreeModelProvider()
                        .getMappingURLTreeModel(request, response), getContentMappingInfoHome());
			} catch (UnknownAccessorTypeException e) {
				throw new ContentUrlFilterInstantiationException(e);
			} catch (CannotInstantiateAccessorException e) {
				throw new ContentUrlFilterInstantiationException(e);
			} catch (PortletServiceUnavailableException e) {
				throw new ContentUrlFilterInstantiationException(e);
			} catch (ServiceNotAvailableException e) {
				throw new ContentUrlFilterInstantiationException(e);
			} catch (OperationFailedException e) {
				throw new ContentUrlFilterInstantiationException(e);
			} catch (StateManagerException e) {
				throw new ContentUrlFilterInstantiationException(e);
			} catch (ModelException e) {
				throw new ContentUrlFilterInstantiationException(e);
			} catch (StateException e) {
				throw new ContentUrlFilterInstantiationException(e);
			} catch (NamingException e) {
				throw new ContentUrlFilterInstantiationException(e);
			}
		}

		if (isLogging) {
			LOGGER.exiting(getClass().getName(), "getFilter", result);
		}
		return result;
	}

	@Override
	public int getFilterChainWeight() {
		return 4;
	}

	/**
	 * Get the identification service
	 * 
	 * @return a reference to the identification service
	 * @throws NamingException
	 *             if creation of {@link InitialContext} or context lookup fails
	 */
	private static Identification getIdentification() throws NamingException {
		if (IDENTIFICATION == null) {
			synchronized (LOCK_IDENTIFICATION) {
				if (IDENTIFICATION == null) {
					final Context ctx = new InitialContext();
					IDENTIFICATION = (Identification) ctx.lookup(Identification.JNDI_NAME);
				}
			}
		}
		return IDENTIFICATION;
	}

	/**
	 * Get the provider for URL mapping model
	 * 
	 * @return A reference to the provider for the URL mapping model
	 * @throws NamingException
	 *             if creation of {@link InitialContext} or context lookup fails
	 * @throws PortletServiceUnavailableException
	 *             if the service is not available
	 */
	private static MappingURLTreeModelProvider getMappingURLTreeModelProvider() throws NamingException,
			PortletServiceUnavailableException {
		if (MAPPING_URL_MODEL_PROVIDER == null) {
			synchronized (LOCK_MAPPING_URL_MODEL_PROVIDER) {
				if (MAPPING_URL_MODEL_PROVIDER == null) {
					final Context ctx = new InitialContext();
					final PortletServiceHome psh = (PortletServiceHome) ctx
							.lookup(MappingURLTreeModelProvider.JNDI_NAME);
					MAPPING_URL_MODEL_PROVIDER = psh.getPortletService(MappingURLTreeModelProvider.class);
				}
			}
		}
		return MAPPING_URL_MODEL_PROVIDER;
	}

	/**
	 * Get the state manager service
	 * 
	 * @return state manager service
	 * @throws NamingException
	 *             if creation of {@link InitialContext} or context lookup fails
	 * @throws PortletServiceUnavailableException
	 *             if the service is not available
	 */
	private static PortletStateManagerService getStateManageService() throws NamingException,
			PortletServiceUnavailableException {
		if (STATE_MGR_SRV == null) {
			synchronized (LOCK_STATE_MGR_SRV) {
				if (STATE_MGR_SRV == null) {
					final Context ctx = new InitialContext();
					final PortletServiceHome psh = (PortletServiceHome) ctx
							.lookup(PortletStateManagerService.JNDI_NAME);
					STATE_MGR_SRV = psh.getPortletService(PortletStateManagerService.class);
				}
			}
		}
		return STATE_MGR_SRV;
	}

	/**
	 * Get the friendly selection service home interface
	 * 
	 * @return Home interface of friendly selection service
	 * @throws NamingException
	 *             if creation of {@link InitialContext} or context lookup fails
	 * @throws PortletServiceUnavailableException
	 *             if the service is not available
	 */
	private static PortletFriendlySelectionServiceHome getFriendlySelectionServiceHome() throws NamingException,
			PortletServiceUnavailableException {
		if (FRIENDLY_SEL_SRV == null) {
			synchronized (LOCK_FRIENDLY_SEL_SRV) {
				if (FRIENDLY_SEL_SRV == null) {
					final Context ctx = new InitialContext();
					final PortletServiceHome psh = (PortletServiceHome) ctx
							.lookup(PortletFriendlySelectionServiceHome.JNDI_NAME);
					FRIENDLY_SEL_SRV = psh.getPortletService(PortletFriendlySelectionServiceHome.class);
				}
			}
		}
		return FRIENDLY_SEL_SRV;
	}

	/**
	 * Get the content mapping info home interface
	 * 
	 * @return Home interface of content mapping info service
	 * @throws NamingException
	 *             if creation of {@link InitialContext} or context lookup fails
	 */
	private static ContentMappingInfoHome getContentMappingInfoHome() throws NamingException {
		if (CONTENT_MAPPING_HOME == null) {
			synchronized (LOCK_CONTENT_MAPPING_HOME) {
				if (CONTENT_MAPPING_HOME == null) {
					final Context ctx = new InitialContext();
					CONTENT_MAPPING_HOME = (ContentMappingInfoHome) ctx.lookup(ContentMappingInfoHome.JNDI_NAME);
				}
			}
		}
		return CONTENT_MAPPING_HOME;
	}

	/**
	 * Get the web content service
	 * 
	 * @return Reference to the web content service
	 * @throws NamingException
	 *             if creation of {@link InitialContext} or context lookup fails
	 */
	private static WebContentService getWebContentService() throws NamingException {
		if (WEB_CONTENT_SRV == null) {
			synchronized (LOCK_WEB_CONTENT_SRV) {
				if (WEB_CONTENT_SRV == null) {
					final Context ctx = new InitialContext();
					WEB_CONTENT_SRV = (WebContentService) ctx.lookup("portal:service/wcm/WebContentService");
				}
			}
		}
		return WEB_CONTENT_SRV;
	}

	/**
	 * Get the content model provider
	 * 
	 * @return Reference to the content model provider
	 * @throws NamingException
	 *             if creation of {@link InitialContext} or context lookup fails
	 * @throws PortletServiceUnavailableException
	 *             if the service is not available
	 */
	private static ContentModelProvider getContentModelProvider() throws NamingException,
			PortletServiceUnavailableException {
		if (CONTENT_MODEL_PROVIDER == null) {
			synchronized (LOCK_CONTENT_MODEL_PROVIDER) {
				if (CONTENT_MODEL_PROVIDER == null) {
					final Context ctx = new InitialContext();
					final PortletServiceHome psh = (PortletServiceHome) ctx.lookup(ContentModelProvider.JNDI_NAME);
					CONTENT_MODEL_PROVIDER = psh.getPortletService(ContentModelProvider.class);
				}
			}
		}
		return CONTENT_MODEL_PROVIDER;
	}
}
```


