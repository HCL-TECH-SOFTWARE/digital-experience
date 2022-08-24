# Sample for leveraging Unica segments in PZN Rules

In this document we outline sample code and steps to integrate Unica segments into PZN rules.

## PZN extension process
The PZN extension process involves developing an application object and registering it inside PZN. The object has access to the current request data. More information can be found [here](../../usage/personalization_terms/application_object/pzn_application_object.md).

## Unica segments

Unica offers various REST APIs to manage and retrieve campaigns, segments. The `/Campaign/api/campaign/rest/v3/segments/partitions/{partitionName}/{audienceName}` with a payload similar to the following:

```
[
  {
    "name": "CUSTOMERID",
    "value": "1"
  }
]
```
The `m_user_name and m_tokenId` and `api_auth_mode=manager` need to be passed as headers.

The API calls first require authentication that provides a token for subsequent calls like the above.

`/unica/api/manager/authentication/login`

The `m_user_name` and `m_user_password` need to be passed as headers.

## Exploring Unica APIs

The Unica api explorer can be reached via **/Campaign/api/campaign/rest/v3/swagger-ui.html**. For example: https://unicasample.hcl.com/Campaign/api/campaign/rest/v3/swagger-ui.html

## Putting it together

The PZN Application Object provides the possibility to leverage the segment list as retrieved from Unica to use inside rules for decisions on visibility or content selection.

## Sample code

```
/*
 *******************************************************************************
 * Copyright HCL Technologies Ltd. 2022                                        *
 *                                                                             *
 * Licensed under the Apache License, Version 2.0 (the "License");             *
 * you may not use this file except in compliance with the License.            *
 * You may obtain a copy of the License at                                     *
 *                                                                             *
 * http://www.apache.org/licenses/LICENSE-2.0                                  *
 *                                                                             *
 * Unless required by applicable law or agreed to in writing, software         *
 * distributed under the License is distributed on an "AS IS" BASIS,           *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.    *
 * See the License for the specific language governing permissions and         *
 * limitations under the License.                                              *
 *******************************************************************************
 */

package com.hcl.pzn.sample;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.apache.http.HttpEntity;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.json.JSONArray;
import org.json.JSONObject;

import com.ibm.websphere.personalization.RequestContext;
import com.ibm.websphere.personalization.applicationObjects.DynamicApplicationObject;
import com.ibm.websphere.personalization.applicationObjects.SelfInitializingApplicationObject;
import com.ibm.websphere.personalization.resources.Resource;

/**
 * This DX Personalization Application Object sample covers how Unica
 * integration could be implemented. The sample is meant to be customized and
 * extended as needed.
 *
 */
public class UnicaApplicationObject extends DynamicApplicationObject
        implements SelfInitializingApplicationObject, Resource {

    private static final long serialVersionUID = -1166088722889092580L;

    // logging
    private static final String LOG_CLASS = UnicaApplicationObject.class.getName();
    private static final Level LOG_LEVEL = Level.FINER;
    private static final Logger LOGGER = Logger.getLogger(LOG_CLASS);

    RequestContext requestContext;

    // static parameters used in the json request to Unica
    private static final String M_USER_NAME = "m_user_name";
    private static final String M_USER_PASSWORD = "m_user_password";
    private static final String API_AUTH_MODE = "api_auth_mode";
    private static final String M_TOKEN_ID = "m_tokenId";
    private static final String USERNAME = "dxuser";
    private static final String PASSWORD = "password";
    private static final String AUTH_MODE = "manager";
    private static final String REQ_BODY_KEY_1 = "name";
    private static final String REQ_BODY_KEY_2 = "value";
    private static final String CUSTOMER_ID = "CUSTOMERID";
    private static final String SEGMENT_NAME = "segmentName";

    /*
     * Sample Login API URL for the Unica server to connect to
     * The host name - unicasample.hcl.com is just a sample
     */
    private static final String LOGIN_API_PATH = "https://unicasample.hcl.com/unica/api/manager/authentication/login";

    /*
     * Sample API URL - Note it needs to be customized for your use case
     * The host name - unicasample.hcl.com is just a sample
     * The partition - partition1 is just a sample
     * The audience - Customer is just a sample
     */
    private static final String GET_SEGMENTS_API_PATH = "https://unicasample.hcl.com/Campaign/api/campaign/rest/v3/segments/partitions/partition1/Customer";

    /*
     * Temporary cache to avoid too many backend calls
     * Can be replaced with dynacache for better timeout handling
     */
    private static ConcurrentHashMap<String, List<String>> cacheResultsMap = new ConcurrentHashMap<String, List<String>>();

    /*
     * Init method - called when the rule is initialized.
     * 
     * @see
     * com.ibm.websphere.personalization.applicationObjects.DynamicApplicationObject
     * #init(com.ibm.websphere.personalization.RequestContext)
     */
    public void init(RequestContext requestContext) {
        final String LOG_METHOD = "init(requestContext)";
        if (LOGGER.isLoggable(LOG_LEVEL)) {
            LOGGER.entering(LOG_CLASS, LOG_METHOD);
        }

        super.init(requestContext);
        requestContext.setPortletAttribute(LOG_CLASS, this);
        this.requestContext = requestContext;

        if (LOGGER.isLoggable(LOG_LEVEL)) {
            LOGGER.exiting(LOG_CLASS, LOG_METHOD);
        }
    }

    /**
     * Authenticates the system user against Unica.
     * The returned token will be reused for subsequent calls.
     * 
     * @return String representing the authentication token
     * @throws IOException
     */
    private String authenticate() throws IOException {
        final String LOG_METHOD = "authenticate()";
        if (LOGGER.isLoggable(LOG_LEVEL)) {
            LOGGER.entering(LOG_CLASS, LOG_METHOD);
        }

        String tokenId = null;

        // initial login
        HttpPost post = new HttpPost(LOGIN_API_PATH);
        post.setHeader(M_USER_NAME, USERNAME);
        post.setHeader(M_USER_PASSWORD, PASSWORD);

        RequestConfig requestConfig = RequestConfig.custom().setConnectionRequestTimeout(30000).setConnectTimeout(30000)
                .setSocketTimeout(30000).build();
        post.setConfig(requestConfig);

        CloseableHttpClient httpClient = HttpClients.createDefault();
        CloseableHttpResponse httpResponse = httpClient.execute(post);
        HttpEntity entity = httpResponse.getEntity();
        String result = EntityUtils.toString(entity);
        JSONObject authObject = new JSONObject(result);
        if (authObject.has(M_TOKEN_ID) && authObject.get(M_TOKEN_ID) instanceof String) {
            tokenId = authObject.getString(M_TOKEN_ID);
        }

        if (LOGGER.isLoggable(LOG_LEVEL)) {
            LOGGER.exiting(LOG_CLASS, LOG_METHOD);
        }
        return tokenId;
    }

    /**
     * Retrieves the segments for the given audience ID.
     * 
     * @param tokenId    The authentication token for Unica
     * @param audienceId Representing the audience identifier
     * @return List of segments from Unica
     * @throws IOException
     */
    private List<String> getSegmentsForAudience(String tokenId, String audienceId) throws IOException {
        final String LOG_METHOD = "getSegmentsForAudience(tokenId, audienceId)";
        if (LOGGER.isLoggable(LOG_LEVEL)) {
            LOGGER.entering(LOG_CLASS, LOG_METHOD);
        }

        List<String> unicaSegmentList = null;

        // check cache
        if (cacheResultsMap.containsKey(audienceId)) {
            // Return from cache
            // Consider cache timeout as well - if timeout is needed switch to dynacache
            // or store a timestamp when added
            unicaSegmentList = cacheResultsMap.get(audienceId);
        } else {
            // compute
            JSONObject apiConfig = new JSONObject();
            apiConfig.put(REQ_BODY_KEY_1, CUSTOMER_ID);
            apiConfig.put(REQ_BODY_KEY_2, audienceId);
            JSONArray configArray = new JSONArray();
            configArray.put(apiConfig);
            StringEntity apiConfigEntity = new StringEntity(configArray.toString(), ContentType.APPLICATION_JSON);

            HttpPost post = new HttpPost(GET_SEGMENTS_API_PATH);
            post.setEntity(apiConfigEntity);
            post.setHeader(M_USER_NAME, USERNAME);
            post.setHeader(M_TOKEN_ID, tokenId);
            post.setHeader(API_AUTH_MODE, AUTH_MODE);

            RequestConfig requestConfig = RequestConfig.custom().setConnectionRequestTimeout(30000)
                    .setConnectTimeout(30000).setSocketTimeout(30000).build();
            post.setConfig(requestConfig);

            CloseableHttpClient httpClient = HttpClients.createDefault();
            CloseableHttpResponse httpResponse = httpClient.execute(post);
            HttpEntity entity = httpResponse.getEntity();
            String segmentResult = EntityUtils.toString(entity);
            JSONArray segments = new JSONArray(segmentResult);
            unicaSegmentList = new ArrayList<String>();
            for (Object segmentObj : segments) {
                JSONObject segment = (JSONObject) segmentObj;
                if (segment.has(SEGMENT_NAME) && segment.get(SEGMENT_NAME) instanceof String) {
                    unicaSegmentList.add(segment.getString(SEGMENT_NAME));
                }
            }

            // store in cache
            cacheResultsMap.put(audienceId, unicaSegmentList);
        }

        if (LOGGER.isLoggable(LOG_LEVEL)) {
            LOGGER.exiting(LOG_CLASS, LOG_METHOD, new Object[] { unicaSegmentList });
        }
        return unicaSegmentList;
    }

    /**
     * "Static" PZN Application Object parameter called by the PZN framework
     * 
     * @return List of strings representing the Unica Segments.
     */
    public List<String> getUnicaSegments() {
        final String LOG_METHOD = "getUnicaSegments()";
        if (LOGGER.isLoggable(LOG_LEVEL)) {
            LOGGER.entering(LOG_CLASS, LOG_METHOD);
        }
        List<String> unicaSegments = null;

        try {
            String tokenId = authenticate();

            /*
             * audienceId is hard wired here but would need to be retrieved from the request or user or ...
             * For example: String audienceId = requestContext.getPznRequestObjectInterface().getCookie("audienceId");
             */
            String audienceId = "1";
            unicaSegments = getSegmentsForAudience(tokenId, audienceId);
        } catch (IOException e) {
            LOGGER.log(LOG_LEVEL, e.getMessage(), e);
        }

        if (LOGGER.isLoggable(LOG_LEVEL)) {
            LOGGER.exiting(LOG_CLASS, LOG_METHOD, new Object[] { unicaSegments });
        }
        return unicaSegments;
    }

    /*
     * "Dynamic" PZN Application Object parameter called by the PZN framework It is
     * possible to define dynamic attributes in the PZN UI and one would need to add
     * support for those here.
     * 
     * @see
     * com.ibm.websphere.personalization.resources.Resource#get(java.lang.String)
     */
    public Object get(String name) {
        final String LOG_METHOD = "get(name)";
        if (LOGGER.isLoggable(LOG_LEVEL)) {
            LOGGER.entering(LOG_CLASS, LOG_METHOD, new Object[] { name });
        }

        Object result = null;
        if (name.equals("unicaSegments")) {
            result = getUnicaSegments();
        }

        if (LOGGER.isLoggable(LOG_LEVEL)) {
            LOGGER.exiting(LOG_CLASS, LOG_METHOD, new Object[] { result });
        }
        return result;
    }

}
```

### Customizing and deploying the sample

Modify the sample code as needed - by replacing **unicasample.hcl.com** with your real unica host system, updating **USERNAME** and **PASSWORD** with the credentials of an user in Unica and customize the partition, audience and audience ID. Also update the package name of the class.

Compile the code, package in a jar file and place the jar file at **../wp_profile/PortalServer/pzn/collections (for all JVMs in case of a cluster)**. Restart the **JVM(s)**. In the PZN UI load the application object and leverage the new application object in any rule as desired.

### Loading the Application Object
- Create an Application Object in PZN UI using the package details for the application object loaded in the above steps.
![personalization-navigator](../../../../images/personalization-navigator.png)

- Add the **Session key** and **Class Name** for the loaded Application Object with the qualified **Class Name** and click **Save**.
![load-application-object ](../../../../images/pzn_load-application-object.png)

## Leveraging the Application Object in a rule

- Create a **Rule** and add the attribute of the Application Object created.. It shows the variable added in the loaded Application Object.
![use-application-object-in-rules](../../../../images/use-application-object-in-rules.png)

- Add the values to the segments, to compare it as per the rule creation.
![pzn_create_rule](../../../../images/pzn_create-rule.png)

- Preview the result in the **Preview Tab** from the navigator for the rule created.
![pzn_check-rule-result](../../../../images/pzn_check-rule-result.png)
