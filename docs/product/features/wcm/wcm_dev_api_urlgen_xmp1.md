# Example 1: Append a prefix to a content URL

This example demonstrates a content URL generation filter that appends a prefix to each content URL that is written. This type of content URL generation filter is useful when used with an HTTP server that dynamically rewrites incoming URLs.

## Factory class

```
/******************************************************************
 * Copyright HCL Technologies Limited 2011, 2019                                       *
 ******************************************************************/
package com.ibm.workplace.wcm.api.samples;

import javax.portlet.*;
import com.ibm.workplace.wcm.api.extensions.url.*;

public class RewriteUrlGenerationFilterFactory implements ContentUrlGenerationFilterFactory {
	@Override
	public ContentUrlGenerationFilter getFilter(RenderRequest portletRequest, RenderResponse portletResponse) 
               throws ContentUrlFilterInstantiationException {
		return new RewriteUrlGenerationFilter();
	}

	@Override
	public int getFilterChainWeight() {
		return 5;
	}
}
```

## Filter class

```
**************************************
 * Copyright HCL Technologies Limited 2011, 2019                                       *
 ******************************************************************/
package com.ibm.workplace.wcm.api.samples;

import java.io.*;
import com.ibm.workplace.wcm.api.extensions.url.*;

public class RewriteUrlGenerationFilter implements ContentUrlGenerationFilter {

	/** that static prefix that is prepended to all URLs */
	private static final String PREFIX = "/content/";

	@Override
	public void dispose() {
		// no cleanup required for this filter
	}

	@Override
	public void writeURL(ContentUrlGenerationRequest request, ContentUrlGenerationResponse response, 
                             ContentUrlGenerationFilterChain chain) throws ContentUrlGenerationException, 
                             IOException {

		final String contentPath = request.getContentPath(true);
		if (contentPath != null && !contentPath.isEmpty()) {
			// write the prefix
			final Writer out = response.getWriter();
			out.write(PREFIX);

			// write path to content
			if (contentPath.charAt(0) == '/') {
				// Omit a leading / to avoid 2 / characters
				out.write(contentPath, 1, contentPath.length() - 1);
			} else {
				out.write(contentPath);
			}
		} else {
			// let the other filters handle prefix URLs
			chain.writeURL(request, response);
		}
	}
}
```

## plugin.xml

```
<?xml version="1.0" encoding="UTF-8"?>
<?eclipse version="3.0"?>
<plugin id="com.ibm.workplace.wcm.api.samples.plugin" 
        name="My content URL plugin"
        version="1.0.0" provider-name="IBM">
    <extension point="com.ibm.workplace.wcm.api.ContentUrlGenerationFilter" id="MyRewriteUrlGenerationFilter">
        <factory class="com.ibm.workplace.wcm.api.samples.RewriteUrlGenerationFilterFactory" 
                 weight="5"/>
    </extension>
</plugin>
```

**Parent topic:**[Creating a content URL generation filter class](../wcm/wcm_dev_api_urlgen.md)

