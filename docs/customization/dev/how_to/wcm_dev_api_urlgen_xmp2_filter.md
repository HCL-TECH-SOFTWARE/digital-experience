# Example 2: Filter class

This sample filter generates the friendly URL.

The filter runs several steps to create the friendly URL:

1.  The filter determines the target portal page from one of the following sources:
    -   The configuration of the web content viewer.
    -   Any web content pages that have a content association to the content for which the URL is generated.
    -   A target page that is specified by the `UrlCmpnt` tag.
2.  If a target page is identified, the filter verifies that the page is a web content page with a content association. The filter then validates that the content for which the URL is generated is a child of the site area that is mapped to the page. If the content to render is not a child of the site area that is associated with the page, the filter writes a new URL.
3.  The filter then writes the friendly URL by combining the following information:
    -   The friendly URL name of the target page.
    -   The path to the content, relative to the site area that is associated with the target page.

```
/******************************************************************
 * Copyright HCL Technologies Limited 2011, 2014, 2019                                 *
 ******************************************************************/
package com.ibm.workplace.wcm.api.samples;

import java.io.*;
import java.net.*;
import java.util.*;
import java.util.logging.*;
import java.util.regex.*;
import javax.portlet.*;
import com.ibm.portal.*;
import com.ibm.portal.content.*;
import com.ibm.portal.identification.*;
import com.ibm.portal.mappingurl.*;
import com.ibm.portal.resolver.friendly.*;
import com.ibm.portal.resolver.friendly.accessors.url.*;
import com.ibm.portal.resolver.friendly.helper.*;
import com.ibm.portal.resolver.friendly.service.*;
import com.ibm.portal.serialize.*;
import com.ibm.portal.services.contentmapping.*;
import com.ibm.portal.services.contentmapping.exceptions.*;
import com.ibm.portal.state.*;
import com.ibm.portal.state.accessors.selection.*;
import com.ibm.portal.state.exceptions.*;
import com.ibm.workplace.wcm.api.*;
import com.ibm.workplace.wcm.api.exceptions.*;
import com.ibm.workplace.wcm.api.extensions.url.*;
import com.ibm.workplace.wcm.api.extensions.url.PortletContextSharingConfig.PublishConfig;

/**
 * Content URL generation filter that tries to generate stateless friendly URLs
 * for web content pages.
 * 
 * The filter that writes the friendly URL does the following steps to generate
 * the friendly URL
 * 
 * <ol>
 * <li>It determines the target portal page from one of the following sources The
 * Web Content Viewer configuration Web content pages that have a content
 * mapping for the content the URL is generated for A target page specification
 * from the WCM [UrlCmpnt] tag
 * </li>
 * <li>If a page could be determined it checks if the page is a web content page
 * i.e. if the page has a content mapping assign. It then validates that the
 * content the URL is generated for is a children of the site area mapped to the
 * page. In case the content is not a children of the site area mapped to the
 * page new URL is written by this filter.
 * </li>
 * <li>Finally the friendly URL is written that is build from the friendly URL
 * name of the target page appended with the content path relative to the site
 * area mapped to the target page.</li>
 * </ol>
 * <p>
 * <b>Note:</b> In order to use the following sample filter all pages a content URL is
 * generated for need to be web content pages with a friendly name assigned and
 * a default content mapping that points to a parent of the content.</p>
 */
public class FriendlyUrlGenerationFilter implements ContentUrlGenerationFilter {

	/** logger */
	private static final Logger LOGGER = Logger.getLogger(FriendlyUrlGenerationFilter.class.getName());

	/** the path separator / */
	private static final String PATH_SEPARATOR = "/";

	/** regular expression pattern to split a path into segments */
	private static final Pattern PATH_SEPARATOR_PATTERN = Pattern.compile(PATH_SEPARATOR);

	/** friendly selection service */
	private final FriendlySelectionService friendlySelectionService;

	/** content model */
	private final ContentModel<ContentNode> contentModel;

	/** WCM workspace */
	private final Workspace workspace;

	/** identifcation service */
	private final Identification identification;

	/** state manager */
	private final PortletStateManager stateManager;

	/** url mapping model */
	private final MappingURLTreeModel urlMappingModel;

	/** content mapping info home */
	private final ContentMappingInfoHome contentMappingInfoHome;

	/** selection accessor */
	private final SelectionAccessorFactory selectionFactory;

	/** factory for friendly URLs */
	private final FriendlyURLFactory friendlyUrlFactory;

	/** the currently selected page */
	private ObjectID currentPage;

	/**
	 * Create a new filter instance. This should be called once per render
	 * request
	 * 
	 * @param friendlySelectionService
	 *            The friendly selection service
	 * @param contentModel
	 *            The content model
	 * @param workspace
	 *            The WCM workspace
	 * @param identification
	 *            The identificaton service
	 * @param stateManager
	 *            The state manager service
	 * @param urlMappingTreeModel
	 *            The url mapping model
	 * @param contentMappingInfoHome
	 *            The content mapping home interface
	 * 
	 * @throws CannotInstantiateAccessorException
	 *             If instantiation of state selection accessor factory fails
	 * @throws UnknownAccessorTypeException
	 *             If instantiation of state selection accessor factory fails
	 */
	public FriendlyUrlGenerationFilter(final FriendlySelectionService friendlySelectionService,
			final ContentModel<ContentNode> contentModel, final Workspace workspace,
			final Identification identification, final PortletStateManager stateManager,
			final MappingURLTreeModel urlMappingModel, final ContentMappingInfoHome contentMappingInfoHome)
			throws UnknownAccessorTypeException, CannotInstantiateAccessorException {

		final boolean isLogging = LOGGER.isLoggable(Level.FINEST);
		if (isLogging) {
			LOGGER.entering(getClass().getName(), "<init>", new Object[] { friendlySelectionService, contentModel,
					workspace, identification, stateManager, urlMappingModel, contentMappingInfoHome });
		}

		this.friendlySelectionService = friendlySelectionService;
		this.friendlyUrlFactory = friendlySelectionService.getURLFactory();
		this.contentModel = contentModel;
		this.workspace = workspace;
		this.identification = identification;
		this.stateManager = stateManager;
		this.urlMappingModel = urlMappingModel;
		this.contentMappingInfoHome = contentMappingInfoHome;
		this.selectionFactory = stateManager.getAccessorFactory(SelectionAccessorFactory.class);

		if (isLogging) {
			LOGGER.exiting(getClass().getName(), "<init>");
		}
	}

	@Override
	public void dispose() {
		final boolean isLogging = LOGGER.isLoggable(Level.FINEST);
		if (isLogging) {
			LOGGER.entering(getClass().getName(), "dispose");
		}

		// dispose all request specific services
		this.friendlySelectionService.dispose();
		this.stateManager.dispose();

		if (isLogging) {
			LOGGER.exiting(getClass().getName(), "dispose");
		}
	}

	@Override
	public void writeURL(final ContentUrlGenerationRequest request, final ContentUrlGenerationResponse response,
			final ContentUrlGenerationFilterChain chain) throws ContentUrlGenerationException, IOException {

		final boolean isLogging = LOGGER.isLoggable(Level.FINEST);
		if (isLogging) {
			LOGGER.entering(getClass().getName(), "writeURL", new Object[] { request.getContentPath(false) });
		}

		// as we need to use the path to lookup the item in WCM we need the
		// decoded version
		final String contentPath = request.getContentPath(false);
		if (contentPath != null) {
			// Check if we should generate a URL that publishes to the
			// current
			// or another page or uses the dynamic publishing
			final PortletContextSharingConfig ctxSharingConfig = request.getPortletContextSharingConfig();
			final PublishConfig publishConfig = ctxSharingConfig.getPublishConfig();
			final PortletRequest portletRequest = request.getPortletRenderRequest();
			final PortletResponse portletResponse = request.getPortletRenderResponse();

			ObjectID targetPageId = null;
			try {
				// determine the target page. The target page is determined
				// from either a dynamic target page override (i.e. on the
				// UrlCmpnt tag), a web content mapping on a page or from the
				// portlet configuration

				// check if a dynamic page target as been set as it can be
				// set on the WCM UrlCmpnt tag
				final TargetPageConfig targetPageDynamic = request.getDynamicTargetPageOverride();
				if (targetPageDynamic != null) {
					// lookup the page from the dynamic target page override
					targetPageId = getTargetPage(portletRequest, portletResponse, targetPageDynamic);
				} else {
					if (publishConfig.getMode() == PublishConfig.MODE_DYNAMIC) {
						// lookup the target page from content mappings
						targetPageId = lookupTargetPage(portletRequest, portletResponse, contentPath);
					} else {
						// target page is determined from portlet
						// configuration
						final TargetPageConfig targetPagePortletConfig = publishConfig.getTargetPage();
						if (targetPagePortletConfig != null) {
							// lookup the page from the portlet target page
							// configuration
							targetPageId = getTargetPage(portletRequest, portletResponse, targetPagePortletConfig);
						}
					}
				}

				if (targetPageId != null) {
					// check if the path of the content is a children of the
					// site area mapped to the page and get the path relative to
					// this site area
					final String relativePathInfo = getRelativePathInfo(contentPath, targetPageId);
					if (relativePathInfo != null) {
						// write the friendly URL to the page and the
						// relative path information added
						final FriendlyURL url = this.friendlyUrlFactory
								.newURL(com.ibm.portal.state.Constants.Clone.EMPTY_COPY);
						url.setSelection(targetPageId);
						if(!relativePathInfo.isEmpty()) {
							url.setPathInfo(relativePathInfo);
						}
						url.writeDispose(response.getWriter());
					} else {

						if (isLogging) {
							LOGGER.logp(Level.FINEST, getClass().getName(), "writeURL",
									"Content [{0}] is not a children of the site area mapped to page with ID [{1}]",
									new Object[] { contentPath, targetPageId });
						}

						// the content is not a children of the site area
						// mapped to the target page so forward the request to
						// the chain of URL
						chain.writeURL(request, response);
					}
				} else {

					if (isLogging) {
						LOGGER.logp(Level.FINEST, getClass().getName(), "writeURL",
								"No target page could be determined for content [{0}]", new Object[] { contentPath });
					}

					// no target page could be determined
					// let the content URL generation chain handle the
					// request
					chain.writeURL(request, response);
				}
			} catch (SerializationException e) {
				throw new ContentUrlGenerationException(e);
			} catch (ModelException e) {
				throw new ContentUrlGenerationException(e);
			} catch (StateException e) {
				throw new ContentUrlGenerationException(e);
			} catch (ContentMappingException e) {
				throw new ContentUrlGenerationException(e);
			} catch (WCMException e) {
				throw new ContentUrlGenerationException(e);
			}
		} else {
			// no content path was given
			// let the content URL generation chain handle the request
			chain.writeURL(request, response);
		}

		if (isLogging) {
			LOGGER.exiting(getClass().getName(), "writeURL");
		}
	}

	/**
	 * Lookup the best matching target web content page for the content
	 * 
	 * @param portletRequest
	 *            The current portlet request
	 * @param portletResponse
	 *            The current portlet request
	 * @param contentPath
	 *            The path of the content
	 * @return The {@link ObjectID} of page found or <code>null</code>
	 * 
	 * @throws ContentMappingException
	 *             If an error occurred loading a content mapping
	 * @throws ModelException
	 *             If an exception occurred while accessing a model object
	 * @throws WCMException
	 *             If an exception occurred while accessing the WCM repository
	 * @throws StateException
	 *             If an error occurred working with the portal state objects
	 */
	protected ObjectID lookupTargetPage(final PortletRequest portletRequest, final PortletResponse portletResponse,
			final String contentPath) throws ContentMappingException, ModelException, WCMException, StateException {

		final boolean isLogging = LOGGER.isLoggable(Level.FINEST);
		if (isLogging) {
			LOGGER.entering(getClass().getName(), "lookupTargetPage", new Object[] { contentPath });
		}

		ObjectID result = null;

		// get the ID of the published item addressed by the content path
		final DocumentIdIterator documentsIt = this.workspace.findByPath(contentPath,
				Workspace.WORKFLOWSTATUS_PUBLISHED);
		if (documentsIt.hasNext()) {
			// get the IDs of the content and all its parents
			final LinkedList<String> resourceIds = new LinkedList<String>();
			final DocumentId documentId = documentsIt.next();
			resourceIds.push(documentId.getId());

			// load the IDs of the parents of the item
			DocumentId parentId = documentId;
			do {
				Document doc = this.workspace.getById(parentId);
				parentId = null;
				if (doc instanceof Content) {
					parentId = ((Content) doc).getDirectParent();
				} else if (doc instanceof ContentLink) {
					parentId = ((ContentLink) doc).getParentId();
				} else if (doc instanceof SiteFrameworkContainer) {
					parentId = ((SiteFrameworkContainer) doc).getParent();
				}
				if (parentId != null) {
					resourceIds.push(parentId.getId());
				}
			} while (parentId != null);

			// add the library of the content to the beginning
			resourceIds.push(documentId.getContainingLibrary().getId());

			if (isLogging) {
				LOGGER.logp(Level.FINEST, getClass().getName(), "lookupTargetPage",
						"Lookup up best matching web content page for resources [{0}] using the following IDs [{1}]",
						new Object[] { contentPath, resourceIds });
			}

			// lookup the best matching web content page
			final ContentMappingLocator contentMappinglocator = this.contentMappingInfoHome.getContentMappingLocator();
			final LongestPathMatch match = contentMappinglocator.getLongestPathMatch(resourceIds,
					getCurrentPage(portletRequest, portletResponse), new ContentMappingFilter() {
						public void filterEntitledMappings(List<? extends ContentMapping> mappings) {
							// filter out pages we cannot locate e.g. the
							// user doesn't have access to or if the page is
							// disabled
							final Locator<ContentNode> contentNodeLocator = FriendlyUrlGenerationFilter.this.contentModel
									.getLocator();
							final Iterator<? extends ContentMapping> mappingsIt = mappings.iterator();
							while (mappingsIt.hasNext()) {
								if (contentNodeLocator.findByID(mappingsIt.next().getResourceID()) == null) {
									mappingsIt.remove();
								}
							}
						}
					});

			// if at least one match was found take the suggest content
			// mapping further candidates might be found
			final ContentMapping contentMapping = match.getContentMapping();
			if (contentMapping != null) {
				result = contentMapping.getResourceID();
			}
		}

		if (isLogging) {
			LOGGER.exiting(getClass().getName(), "lookupTargetPage", result);
		}
		return result;
	}

	/**
	 * Get the {@link ObjectID} of the target page from a target page
	 * configuration.
	 * 
	 * @param portletRequest
	 *            The current portlet request
	 * @param portletResponse
	 *            The current portlet request
	 * @param targetPageConfig
	 *            The target page configuration
	 * @return The {@link ObjectID} of the target page
	 * 
	 * @throws SerializationException
	 *             If the a page ID given as a character string cannot be
	 *             serialized to an {@link ObjectID}
	 * @throws ModelException
	 *             If an exception occurred while accessing a model object
	 * @throws StateException
	 *             if an error occurred working with the portal state objects
	 */
	protected ObjectID getTargetPage(final PortletRequest portletRequest, final PortletResponse portletResponse,
			final TargetPageConfig targetPageConfig) throws SerializationException, ModelException, StateException {

		final boolean isLogging = LOGGER.isLoggable(Level.FINEST);
		if (isLogging) {
			LOGGER.entering(getClass().getName(), "getTargetPage", new Object[] { targetPageConfig });
		}

		ObjectID result = null;
		if (targetPageConfig != null) {
			if (targetPageConfig.useCurrentPage()) {
				result = getCurrentPage(portletRequest, portletResponse);
			} else {
				final String pagePath = targetPageConfig.getPagePath();
				if (pagePath != null && !pagePath.isEmpty()) {
					// try to lookup the page treating the path as a URL mapping
					result = getPageByUrlMapping(portletRequest, portletResponse, pagePath);
					if (result == null) {
						// if no mapping was found, check if the path is a
						// valid friendly URL
						final List<ObjectID> pages = getPagesByFriendlyUrl(portletRequest, portletResponse, pagePath);
						if (pages != null && !pages.isEmpty()) {
							// if multiple pages are found for simplicity use
							// the
							// first page more advance URL generation filter
							// could
							// do a disambiguation here and e.g. let the user
							// choose
							// what page to use
							result = pages.get(0);
						}
					}
				} else {
					result = getPageById(targetPageConfig.getPageId());
				}
			}
		}

		if (isLogging) {
			LOGGER.exiting(getClass().getName(), "getTargetPage", result);
		}
		return result;
	}

	/**
	 * Get the {@link ObjectID} of the page with the given ID or unique name
	 * 
	 * @param pageId
	 *            The ID or unique name of the page
	 * @return The {@link ObjectID} of the page
	 * 
	 * @throws SerializationException
	 *             If the a page ID given as a character string cannot be
	 *             serialized to an {@link ObjectID}
	 */
	protected ObjectID getPageById(final String pageId) throws SerializationException {

		final boolean isLogging = LOGGER.isLoggable(Level.FINEST);
		if (isLogging) {
			LOGGER.entering(getClass().getName(), "getPageById", new Object[] { pageId });
		}

		ObjectID result = null;
		if (pageId != null && !pageId.isEmpty()) {
			// de-serialize the ID
			result = this.identification.deserialize(pageId);
		}

		if (isLogging) {
			LOGGER.exiting(getClass().getName(), "getPageById", result);
		}
		return result;
	}

	/**
	 * Get the {@link ObjectID} of the current page
	 * 
	 * @param portletRequest
	 *            The current portlet request
	 * @param portletResponse
	 *            The current portlet request
	 * 
	 * @return The {@link ObjectID} of the current page
	 * 
	 * @throws StateException
	 *             if an error occurred working with the portal state objects
	 */
	protected ObjectID getCurrentPage(final PortletRequest portletRequest, final PortletResponse portletResponse)
			throws StateException {

		final boolean isLogging = LOGGER.isLoggable(Level.FINEST);
		if (isLogging) {
			LOGGER.entering(getClass().getName(), "getCurrentPage");
		}

		if (currentPage == null) {
			final SelectionAccessor selectionAcc = this.selectionFactory.getSelectionAccessor(this.stateManager
					.getStateHolder());
			try {
				currentPage = selectionAcc.getSelection();
			} finally {
				selectionAcc.dispose();
			}
		}

		if (isLogging) {
			LOGGER.exiting(getClass().getName(), "getCurrentPage", currentPage);
		}
		return currentPage;
	}

	/**
	 * Get the list of {@link ObjectID} of all page that are addressed by the
	 * passed friendly name
	 * 
	 * @param portletRequest
	 *            The current portlet request
	 * @param portletResponse
	 *            The current portlet request
	 * @param friendlyName
	 *            The friendly name
	 * @return List of all pages that are addressed by the passed friendly name
	 * 
	 * @throws ModelException
	 *             If looking up the page from a friendly URL fails
	 * @throws StateException
	 *             if the state could not be accessed
	 */
	protected List<ObjectID> getPagesByFriendlyUrl(final PortletRequest portletRequest,
			final PortletResponse portletResponse, final String friendlyName) throws ModelException, StateException {

		final boolean isLogging = LOGGER.isLoggable(Level.FINEST);
		if (isLogging) {
			LOGGER.entering(getClass().getName(), "getPagesByFriendlyUrl", new Object[] { friendlyName });
		}

		List<ObjectID> result = null;

		if (friendlyName != null && !friendlyName.isEmpty()) {
			final SelectionResult bean = new DefaultSelectionResult();
			this.friendlySelectionService.resolve(bean, friendlyName);
			// the resulting node list is already AC filtered as a
			// result of using a performing navigation model.
			final List<ObjectID> nodelist = bean.getNodes();
			if (nodelist != null && !nodelist.isEmpty() && bean.getFriendlyPath() != null) {
				result = nodelist;
			}
		}

		if (isLogging) {
			LOGGER.exiting(getClass().getName(), "getPagesByFriendlyUrl", result);
		}
		return result;
	}

	/**
	 * Get the {@link ObjectID} of the page addressed by the passed compound
	 * name of a url mapping or <code>null</code> if no corresponding URL
	 * mapping or page exists or if the current user does not have access to it.
	 * 
	 * @param portletRequest
	 *            The current portlet request
	 * @param portletResponse
	 *            The current portlet request
	 * @param urlMapping
	 *            The compound name of the url mapping
	 * @return {@link ObjectID} of the page or <code>null</code>
	 * @throws ModelException
	 *             If an exception occurred while accessing the url mapping
	 *             model
	 */
	protected ObjectID getPageByUrlMapping(final PortletRequest request, final PortletResponse response,
			final String urlMapping) throws ModelException {

		final boolean isLogging = LOGGER.isLoggable(Level.FINEST);
		if (isLogging) {
			LOGGER.entering(getClass().getName(), "getPageByUrlMapping", new Object[] { urlMapping });
		}

		ObjectID result = null;
		if (urlMapping != null && !urlMapping.isEmpty()) {
			final BestMatchResult searchResult;
			// different to friendly names a URL mapping must not begin with a /
			if (urlMapping.charAt(0) == PATH_SEPARATOR.charAt(0)) {
				searchResult = this.urlMappingModel.getLocator().findBestMatch(urlMapping.substring(1));
			} else {
				searchResult = this.urlMappingModel.getLocator().findBestMatch(urlMapping);
			}

			if (searchResult != null) {
				final Context mappingCtx = searchResult.getContext();
				if (ObjectTypeConstants.PORTAL_URL.getType().equals(mappingCtx.getAssignedObjectType())) {
					final PortalURL url = (PortalURL) mappingCtx.getAssignedObject();
					result = url.getReferencedResourceID();
				}
			}
		}

		if (isLogging) {
			LOGGER.exiting(getClass().getName(), "getPageByUrlMapping", result);
		}
		return result;
	}

	/**
	 * Returns the path for the given content path relative to the site area
	 * mapped to the target page.
	 * 
	 * Returns <code>null</code> if there is no content mapping set for the
	 * target page that is appropriate for the targeted content item.
	 * 
	 * @param contentPath
	 *            The fully qualified path of the target content item. Must not
	 *            be <code>null</code>.
	 * @param pageId
	 *            The object ID of the target page. Must not be
	 *            <code>null</code>.
	 * @return The relative path which is the remainder of the content path
	 *         after cutting off the content mapping prefix. 
	 *         May return <code>null</code>.
	 *         Returns an empty string if the given path points directly
	 *         to the site area that is mapped to the target page.
	 * @throws ContentMappingException
	 *             If an exception occurred during lookup of the content mapping
	 * @throws WCMException
	 *             If an exception occurred while accessing the WCM repository
	 * @throws UnsupportedEncodingException
	 *             A requested character encoding is not supported
	 */
	protected String getRelativePathInfo(final String contentPath, final ObjectID pageId)
			throws ContentMappingException, WCMException, UnsupportedEncodingException {

		final boolean isLogging = LOGGER.isLoggable(Level.FINEST);
		if (isLogging) {
			LOGGER.entering(getClass().getName(), "getRelativePathInfo", new Object[] { contentPath, pageId });
		}

		String result = null;

		final ContentMapping contentMapping = getDefaultContentMapping(pageId);
		if (contentMapping != null) {
			// lookup the path of the site area mapped to the page
			String pathMapping = contentMapping.getContentPath();
			if (pathMapping == null || pathMapping.isEmpty()) {
				// lets lookup the path from the id
				final String mappedId = contentMapping.getContentID();
				if (mappedId != null && !mappedId.isEmpty()) {
					pathMapping = this.workspace.getPathById(this.workspace.createDocumentId(mappedId), false, true);
				}
			}

			if (isLogging) {
				LOGGER.logp(Level.FINEST, getClass().getName(), "getRelativePathInfo",
						"Page with ID [{0}] is mapped to [{1}]", new Object[] { pageId, pathMapping });
			}

			// calculate relative path = contentPath - mappingPath
			if (pathMapping != null && !pathMapping.isEmpty()) {
				// check if the content path is a children of the mapped path
				// to do this split the path into its segments
				if (pathMapping.charAt(0) == PATH_SEPARATOR.charAt(0)) {
					pathMapping = pathMapping.substring(1);
				}
				final String[] partsPathMapping = PATH_SEPARATOR_PATTERN.split(pathMapping);
				// also split path of content
				String pathContent = contentPath;
				if (pathContent.charAt(0) == PATH_SEPARATOR.charAt(0)) {
					pathContent = pathContent.substring(1);
				}
				final String[] partsPathContent = PATH_SEPARATOR_PATTERN.split(pathContent);

				// check if the content is a children of the mapped path
				if (partsPathMapping.length <= partsPathContent.length) {
					boolean isDescendant = true;
					for (int i = 0; i < partsPathMapping.length && isDescendant; i++) {
						if (!partsPathMapping[i].equalsIgnoreCase(partsPathContent[i])) {
							isDescendant = false;
						}
					}
					if (isDescendant) {
						// determine how many descendant levels are between the
						// content and the mapped site area
						final int descendantLevels = partsPathContent.length - partsPathMapping.length;
						if (descendantLevels > 0) {
							// build children path which is 
							// everything after the parent
							final StringBuilder tmp = new StringBuilder();
							for (int i = 0; i < descendantLevels; i++) {
								tmp.append(PATH_SEPARATOR);
								tmp.append(URLEncoder.encode(partsPathContent[partsPathMapping.length + i], "UTF-8"));
							}
							result = tmp.toString();
						} else if (descendantLevels == 0) {
							// the content path points directly to the
							// site area that is mapped to the page
							result = "";   
						}					
					}
				}
			}
		}

		if (isLogging) {
			LOGGER.exiting(getClass().getName(), "getRelativePathInfo", result);
		}
		return result;
	}

	/**
	 * Get the default content mapping of a page or <code>null</code> if no such
	 * mapping exists
	 * 
	 * @param pageId
	 *            The {@link ObjectID} of the page
	 * @return The default mapping of the page or <code>null</code> if no
	 *         default mapping could be determined.
	 * 
	 * @throws ContentMappingDataBackendException
	 *             If an exception occurred during lookup of the content mapping
	 */
	protected ContentMapping getDefaultContentMapping(final ObjectID pageId) throws ContentMappingDataBackendException {

		final boolean isLogging = LOGGER.isLoggable(Level.FINEST);
		if (isLogging) {
			LOGGER.entering(getClass().getName(), "getDefaultContentMapping", new Object[] { pageId });
		}

		// get the page default content mapping as friendly url path info is
		// only set for default or system content mapping
		final ContentMappingInfo contentMappingInfo = this.contentMappingInfoHome.getContentMappingInfo(pageId);
		ContentMapping result = contentMappingInfo.getDefaultContentMapping();
		if(result == null) {
		    // use system mapping as default
		    result = contentMappingInfo.getSystemContentMapping();
		}

		if (isLogging) {
			LOGGER.exiting(getClass().getName(), "getDefaultContentMapping", result);
		}
		return result;
	}
}
```

**Parent topic:**[Example 2: Generate a friendly URL for web content](../wcm/wcm_dev_api_urlgen_xmp2.md)

