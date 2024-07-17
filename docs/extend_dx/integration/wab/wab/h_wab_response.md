# Content provider policy requests and responses




Use the **Request** and **Response** tabs to define a fine-grained control over HTTP headers, HTTP cookies, and filters. Filters provide a programmatic control over content during the request and response phases of the interaction between HCL Digital Experience and the web application.

## Headers

Specify the allowed \(propagated\) or blocked headers in the requests and responses to and from the content provider. By default, the Web Application Bridge propagates all the client-side headers. The client-side headers are present in the request that is received from the browser. The Web Application Bridge does not propagate headers that are listed in the block field.

Click **Insert Header** to add custom headers. The custom headers are useful for the following scenarios:

-   To add more headers that are not there in the request from the browser
-   To add more headers that are not there in the request from the content provider
-   To use single sign-on
-   To send more information

If you add a custom header with the same name as an existing header, the custom header overrides the existing header.

## Cookies

Specify the allowed or blocked cookies in the request from the browser or the response from the content provider. By default, the Web Application Bridge blocks all the client-side cookies from reaching the content provider. The client-side cookies are present in the request that is received from the browser. You need to specify the client-side cookies that need to be propagated by selecting **Block all, except** in the **Cookies** section of the **Request** tab and specifying individual cookies.

Click **Insert Cookies** to add custom cookies. The custom cookies are useful for the following scenarios:

-   To add more cookies that are not there in the request from the browser
-   To add more cookies that are not there in the response from the content provider
-   To use single sign-on
-   To send more information

If you add a custom request cookie with the same name as an existing cookie, the custom cookie overrides the existing cookie. If you add a custom response cookie, the Web Application Bridge adds a Set-Cookie header. The Web Application Bridge uses the provided name and value in responses that are sent from the Reverse Proxy servlet to the browser.

## Filters

Filters are Java code that can be started on demand to run custom actions. They modify the request programmatically. Filters are extensions to the core feature. Use the servlet filter API to create custom filters. The filters manipulate the request or response from the portal to the content provider. Developers create the filters.

The following sample code shows how a filter could look like:

```
/*
* Copyright 2024 HCL America, Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* 
* See the License for the specific language governing permissions and
* limitations under the License.
*/
package com.hcl.dx;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;

/**
 * Servlet Filter implementation class RequestFilterSample
 * The filter modifies the request URL by adding a parameter to the URL
 * It also adds the modified URL to the response.
 */

public class RequestFilterSample implements Filter {

    /**
     * Default constructor. 
     */
    public RequestFilterSample() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see Filter#destroy()
	 */
	public void destroy() {
		// TODO Auto-generated method stub
	}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		PrintWriter out= response.getWriter();
		
		HttpServletRequest requestwrapper = (HttpServletRequest) request;
		
		//insert into the response - optional message that can be used to debug
		out.println("My originalUrl is "+requestwrapper.getRequestURL());
		
		final HttpServletRequestWrapper wrapped = new HttpServletRequestWrapper(requestwrapper) {
            @Override
            public StringBuffer getRequestURL() {
                final StringBuffer originalUrl = ((HttpServletRequest) getRequest()).getRequestURL();
                System.out.println("My originalUrl is " + originalUrl);
                return new StringBuffer(originalUrl+ParamThis()+"+filterchainedrequesturl");
            }
        };
        System.out.println("The new URL after wrapping "+wrapped.getRequestURL()); 
		//insert into the response - optional message that can be used to debug
        out.println("New URL after wrapping is "+wrapped.getRequestURL());
        
        chain.doFilter(wrapped, response);
		// pass the request along the filter chain
	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
		// TODO Auto-generated method stub
	}
	
	public String ParamThis() 
	{
		String param= "?addedparam=";
		return param;
	}

}

```
To add a filter, refer to the following steps:

1. Extract the VwatReverseProxyServlet.ear file from the WebSphere Application Server (WAS) Console and expand it.
2. After compiling the class, package it into the classes directory with the according package or into the JAR file in WEB-INF/lib.
3. Modify the web.xml to add the filter of the included WAR file.
	Example:
	```
		<filter>
			<filter-name>Sample Filter</filter-name>
			<filter-class>com.hcl.dx.RequestFilterSample</filter-class>
		</filter>
		<filter-mapping>
			<filter-name>Sample Filter</filter-name>
			<url-pattern>/*</url-pattern>
		</filter-mapping>
	```
4. Repackage the WAR and EAR files. 
5. In the WAS console, replace the existing EAR file with the repackaged EAR file from Step 4. 
