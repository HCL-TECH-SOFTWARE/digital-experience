# Personalization rules APIs

The Personalization rules REST APIs provide access to personalization rules capabilities using REST services.

For more information on HCL Digital Experience Personalization Rules, refer to the [Personalization](https://help.hcltechsw.com/digital-experience/8.5/pzn/pzn_overview.html) Help Center topic.

## Personalization rules API endpoints

As of HCL Digital Experience CF and Container Update CF202 and later releases, the following REST APIs are developed:

1.  GET list of Personalization rules
2.  GET Personalization rule-id details
3.  API to invoke \(POST\) the Personalization rule
4.  Create \(POST\) a new Personalization rule-id
5.  Update \(PUT\) an existing Personalization rule
6.  GET dynamic properties
7.  Update \(PUT\) dynamic properties
8.  DELETE Personalization rule-id

For more details on the Personalization `contents` attributes, please refer to the *Personalization REST API `contents` details* section below.

## GET list of Personalization rules

This API is used to obtain a list of Personalization rules defined to the Personalization workspace.

**Note:** Pagination of the list results is supported.

-   **GET request format:**

    ```
    https://localhost:10039/wps/mycontenthandler/pzn-rest/rules
    ```

    Example:

    ```
    https://localhost:10039/wps/mycontenthandler/pzn-rest/rules?limit=30&offset=0&ruleType=Visibility%20Rule
    ```


-   **Steps to execute the API:**

    1.  Login to your Digital Experience solution.
    2.  The login cookie contains the Authentication token. Leave the cookie field empty if you are already authenticated, unless you intend to put a token value.
    3.  Add the limit parameter, which defines the number of results that will be returned in the pagination parameter.
    4.  Add the offset, which defines the pagination parameter and the starting point from which results will be returned.
    5.  Add the `ruleType`, which is the parameter to filter rules based on the Personalization rule type.

        **Note:** As of HCL DX Container Update and CF200, Personalization [Visibility rules](https://help.hcltechsw.com/digital-experience/8.5/pzn/pzn_visibility.html) and Profiler rule are supported.

    For example:

    ![Get list of Personalization Rules REST API](../images/get_list_pzn_rules_api.png)


-   **Response structure details:**

    The response structure will get the list of all the Visibility and Profiler rules details. The example below shows the response for one Personalization rule:

    ```
    {
      "offset": 0,
      "limit": 30,
      "total": 2,
      "items": [
        {
          "id": "c32d5c01-94b2-4470-abe8-e64b5d66b273",
          "description": "Description for this Visibility rule.",
          "title": "Visibility Rule Example",
          "ruleType": "Visibility Rule",
          "contents": {
            "visibility": "show",
            "otherwise": "hide",
            "conditions": {
              "and": [
                {
                  "operator": "is",
                  "attributeName": "date",
                  "attributeType": "Date",
                  "value": [
                    "2022-02-14"
                  ]
                }
              ]
            },
            "caseInsensitive": false
          },
          "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "created": "2021-11-18T07:07:43.043Z",
          "publishedOnDate": "1970-01-01T00:00:00.001Z",
          "lastModified": "2021-11-18T07:07:43.043Z",
          "lastModifier": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "parentId": "_6QR_0048AAQUGF0A1T2A_18L"
        },
        {
          "id": "1ed429e5-80a2-4bbc-97d8-adcbaebb85ce",
          "description": "Description for this Profiler rule.",
          "title": "Profiler Rule Example",
          "ruleType": "Profiler",
          "contents": {
            "profiles": [
              {
                "profileName": "Profile1",
                "conditions": {
                  "and": [
                    {
                      "operator": "is",
                      "attributeName": "date",
                      "attributeType": "Date",
                      "value": [
                        "2022-12-01"
                      ]
                    }
                  ]
                }
              }
            ],
            "otherwiseProfile": "Profile2",
            "caseInsensitive": false,
            "stopFirstProfile": true
          },
          "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "created": "2021-11-29T07:33:31.613Z",
          "publishedOnDate": "1970-01-01T00:00:00.001Z",
          "lastModified": "2021-11-29T07:33:31.613Z",
          "lastModifier": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "parentId": "_6QR_0048AAQUGF0A1T2A_18L"
        }
      ]
    }
    ```

    **Example 1**

    List of rules created in the Personalization interface:

    ![List of rules in the Personalization workspace](../images/workspaceRule.png)

    In the example API response structure below, the list of Visibility and Profiler rules available in the Workspace interface is presented:

    ```
    {
      "offset": 0,
      "limit": 30,
      "total": 2,
      "items": [
        {
          "id": "c32d5c01-94b2-4470-abe8-e64b5d66b273",
          "description": "Description for this Workspace Visibility rule.",
          "title": "Workspace Visibility Rule",
          "ruleType": "Visibility Rule",
          "contents": {
            "visibility": "show",
            "otherwise": "hide",
            "conditions": {
              "and": [
                {
                  "operator": "is",
                  "attributeName": "date",
                  "attributeType": "Date",
                  "value": [
                    "2021-11-18"
                  ]
                }
              ]
            },
            "caseInsensitive": false
          },
          "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "created": "2021-11-18T07:07:43.043Z",
          "publishedOnDate": "1970-01-01T00:00:00.001Z",
          "lastModified": "2021-11-18T07:07:43.043Z",
          "lastModifier": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "parentId": "_6QR_0048AAQUGF0A1T2A_18L"
        },
        {
          "id": "1ed429e5-80a2-4bbc-97d8-adcbaebb85ce",
          "description": "Description for this Workspace Profiler rule.",
          "title": "Workspace Profiler Rule",
          "ruleType": "Profiler",
          "contents": {
            "profiles": [
              {
                "profileName": "Profile1",
                "conditions": {
                  "and": [
                    {
                      "operator": "is",
                      "attributeName": "date",
                      "attributeType": "Date",
                      "value": [
                        "2022-02-21"
                      ]
                    }
                  ]
                }
              },
            ],
            "otherwiseProfile": "Profile2",
            "caseInsensitive": false,
            "stopFirstProfile": true
          },
          "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "created": "2021-11-29T07:33:31.613Z",
          "publishedOnDate": "1970-01-01T00:00:00.001Z",
          "lastModified": "2021-11-29T07:33:31.613Z",
          "lastModifier": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "parentId": "_6QR_0048AAQUGF0A1T2A_18L"
        }
      ]
    }
    ```

    **Example 2**

    List of Personalization rules in the Personalization interface:

    ![List of Personalization rules in the Personalization interface](../images/folderRule.png)

    In the example API response structure below, the list of Visibility and Profiler rules available in the Folder created under the Workspace interface is presented:

    ```
    {
      "offset": 0,
      "limit": 30,
      "total": 2,
      "items": [
        {
          "id": "8687069e-2dfa-423f-b9fa-5d42c37ff817",
          "description": "Description for this Folder Visibility rule.",
          "title": "Folder Visibility Rule",
          "ruleType": "Visibility Rule",
          "contents": {
            "visibility": "show",
            "otherwise": "hide",
            "conditions": {
              "and": [
                {
                  "operator": "is",
                  "attributeName": "AcceptLanguage",
                  "attributeType": "BrowserCapability",
                  "value": [
                    "English"
                  ]
                }
              ]
            },
            "caseInsensitive": false
          },
          "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "created": "2021-11-18T07:28:55.549Z",
          "publishedOnDate": "1970-01-01T00:00:00.001Z",
          "lastModified": "2021-11-18T07:28:55.549Z",
          "lastModifier": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "parentId": "ee99433c-82d2-46eb-b48b-90cc234e57e2"
        },
        {
          "id": "ecfa60df-a85e-493f-b902-3d91bd8da1bb",
          "description": "Description for this Folder Profiler rule.",
          "title": "Folder Profiler Rule",
          "ruleType": "Profiler",
          "contents": {
            "profiles": [
              {
                "profileName": "Profile1",
                "conditions": {
                  "and": [
                    {
                      "operator": "is",
                      "attributeName": "date",
                      "attributeType": "Date",
                      "value": [
                        "2022-04-03"
                      ]
                    }
                  ]
                }
              },
              {
                "profileName": "Profile2",
                "conditions": {
                  "and": [
                    {
                      "operator": "is",
                      "attributeName": "city",
                      "attributeType": "wpsUser",
                      "value": [
                        "Bengaluru"
                      ]
                    }
                  ]
                }
              }
            ],
            "otherwiseProfile": "Profile3",
            "caseInsensitive": false,
            "stopFirstProfile": true
          },
          "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "created": "2021-11-29T07:33:31.613Z",
          "publishedOnDate": "1970-01-01T00:00:00.001Z",
          "lastModified": "2021-11-29T07:33:31.613Z",
          "lastModifier": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "parentId": "ee99433c-82d2-46eb-b48b-90cc234e57e2"
        }
      ]
    }
    ```


-   **Combined Response Structure:**

    The following example shows how to execute the Get Personalization Rules List REST API to return the total list of rules available through the Personalization interface Workspace and Folder.

    `parentId` is the main attribute to use to find the difference between the rules available in the `Workspace` and `Folder`:

    -   `Workspace parentId` always starts with a hyphen \("-"\).

        Example:

        ```
        "parentId": "_6QR_0048AAQUGF0A1T2A_18L"
        ```

    -   `Folder parentId` always starts without a hyphen \("-"\).

        Example:

        ```
        "parentId": "ee99433c-82d2-46eb-b48b-90cc234e57e2"
        ```

    Refer to the following API response structure:

    ```
    {
      "offset": 0,
      "limit": 30,
      "total": 4,
      "items": [
        {
          "id": "c32d5c01-94b2-4470-abe8-e64b5d66b273",
          "description": "Description for this Workspace Visibility rule.",
          "title": "Workspace Visibility Rule",
          "ruleType": "Visibility Rule",
          "contents": {
            "visibility": "show",
            "otherwise": "hide",
            "conditions": {
              "and": [
                {
                  "operator": "is",
                  "attributeName": "date",
                  "attributeType": "Date",
                  "value": [
                    "2021-11-18"
                  ]
                }
              ]
            },
            "caseInsensitive": false
          },
          "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "created": "2021-11-18T07:07:43.043Z",
          "publishedOnDate": "1970-01-01T00:00:00.001Z",
          "lastModified": "2021-11-18T07:07:43.043Z",
          "lastModifier": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "parentId": "_6QR_0048AAQUGF0A1T2A_18L"
        },
        {
          "id": "1ed429e5-80a2-4bbc-97d8-adcbaebb85ce",
          "description": "Description for this Workspace Profiler rule.",
          "title": "Workspace Profiler Rule",
          "ruleType": "Profiler",
          "contents": {
            "profiles": [
              {
                "profileName": "Profile1",
                "conditions": {
                  "and": [
                    {
                      "operator": "is",
                      "attributeName": "date",
                      "attributeType": "Date",
                      "value": [
                        "2022-02-21"
                      ]
                    }
                  ]
                }
              },
            ],
            "otherwiseProfile": "Profile2",
            "caseInsensitive": false,
            "stopFirstProfile": true
          },
          "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "created": "2021-11-29T07:33:31.613Z",
          "publishedOnDate": "1970-01-01T00:00:00.001Z",
          "lastModified": "2021-11-29T07:33:31.613Z",
          "lastModifier": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "parentId": "_6QR_0048AAQUGF0A1T2A_18L"
        },
        {
          "id": "8687069e-2dfa-423f-b9fa-5d42c37ff817",
          "description": "Description for this Folder Visibility rule.",
          "title": "Folder Visibility Rule",
          "ruleType": "Visibility Rule",
          "contents": {
            "visibility": "show",
            "otherwise": "hide",
            "conditions": {
              "and": [
                {
                  "operator": "is",
                  "attributeName": "AcceptLanguage",
                  "attributeType": "BrowserCapability",
                  "value": [
                    "English"
                  ]
                }
              ]
            },
            "caseInsensitive": false
          },
          "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "created": "2021-11-18T07:28:55.549Z",
          "publishedOnDate": "1970-01-01T00:00:00.001Z",
          "lastModified": "2021-11-18T07:28:55.549Z",
          "lastModifier": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "parentId": "ee99433c-82d2-46eb-b48b-90cc234e57e2"
        },
        {
          "id": "ecfa60df-a85e-493f-b902-3d91bd8da1bb",
          "description": "Description for this Folder Profiler rule.",
          "title": "Folder Profiler Rule",
          "ruleType": "Profiler",
          "contents": {
            "profiles": [
              {
                "profileName": "Profile1",
                "conditions": {
                  "and": [
                    {
                      "operator": "is",
                      "attributeName": "date",
                      "attributeType": "Date",
                      "value": [
                        "2022-04-03"
                      ]
                    }
                  ]
                }
              },
              {
                "profileName": "Profile2",
                "conditions": {
                  "and": [
                    {
                      "operator": "is",
                      "attributeName": "city",
                      "attributeType": "wpsUser",
                      "value": [
                        "Bengaluru"
                      ]
                    }
                  ]
                }
              }
            ],
            "otherwiseProfile": "Profile3",
            "caseInsensitive": false,
            "stopFirstProfile": true
          },
          "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "created": "2021-11-29T07:33:31.613Z",
          "publishedOnDate": "1970-01-01T00:00:00.001Z",
          "lastModified": "2021-11-29T07:33:31.613Z",
          "lastModifier": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "parentId": "ee99433c-82d2-46eb-b48b-90cc234e57e2"
        }
      ]
    }
    ```

-   **Success and Error Messages**

    |Error Code|Means|
    |----------|-----|
    |200|This code is returned when the list of Personalization rules are successfully returned.|
    |400|This code is returned if the input parameters are missing or invalid.    -   Limit is a decimal value.
    -   Offset is a decimal value.
    -   Rule type is not one among the allowed rule types.
|
    |401|This code is returned when the `LtpaToken` is invalid or expired.|
    |403|This code is returned when user access is restricted.|
    |404|This code is returned when the `?URL` can’t be accessed.|
    |500|This code is returned when an internal server error occurs.|


## GET Personalization rule-id details

This API is used to get individual Personalization Rule ID details.

-   **GET Request format:**

    ```
    https://localhost:10039/wps/mycontenthandler/pzn-rest/rules/{rule-id}
    ```

    Example:

    ```
    https://localhost:10039/wps/mycontenthandler/pzn-rest/rules/d3548bd9-fcf5-49c4-a926-09b6c03d1fbf
    ```


-   **Steps to execute the API:**

    1.  Login to your Digital Experience solution.
    2.  The login cookie contains the Authentication token. Leave the cookie field empty if you are already authenticated, unless you intend to put a token value.
    3.  Obtain the Get Personalization Rule ID details using the REST API `GET all` command, as shown in the following example:
    ![Get Personalization Rule ID details](../images/GetSS.png)


-   **Response structure details:**

    When the GET request is executed by providing the rule-id, the response gets the rule details.

    In the example response structure details below, it shows results for `rule-id`, `rule-description`, `rule-title`, `rule-Type`, and `rule-contents`:

    ```
    {
      "id": "ce285ec1-af9e-485b-8911-ab454946a104",
      "description": "This is Test rule.",
      "title": "TestRule",
      "ruleType": "Visibility Rule",
      "contents":
    }
    ```


-   **Success and Error Messages:**

    |Error Code|Means|
    |----------|-----|
    |200|This code is returned when the rules details are obtained successfully.|
    |401|This code is returned when the `LtpaToken` is invalid or expired.|
    |403|This code is returned when access is restricted for user.|
    |404|This code is returned when the Rule UUID is not found or invalid.|
    |500|This code is returned when an internal server error occurs.|


## Invoke \(POST\) the Personalization ID rule

This API is used to invoke a Personalization rule using rule-id.

-   **POST request format:**

    ```
    https://localhost:10039/wps/mycontenthandler/pzn-rest/rules/{rule-id}/invoke
    ```


-   **POST Personalization ID invoke example:**

    ```
    https://localhost:10039/wps/mycontenthandler/pzn-rest/rules/d3548bd9-fcf5-49c4-a926-09b6c03d1fbf/invoke
    ```


-   **Steps to execute the API:**

    1.  Login to your Digital Experience solution.
    2.  The login cookie contains the Authentication token. Leave the cookie field empty if you are already authenticated, unless you intend to put a token value.
    3.  Invoke the Personalization rule as shown in the example below:
    ![API to invoke the Personalization ID rule](../images/PostSS.png)


-   **Response Structure for Visibility rule:**

    The response structure presents the details of `ruleId`, `title`, `ruleType` and `result`, as shown below:

    ![API to invoke the Personalization ID rule response structure](../images/pzn_id_invoke_rule_response_structure.png)

    For example, the image below shows the use of the API to create a **Visibility Rule ruleType** called `TestRule` with a condition that the `current date` is November 16, 2021, and when executed, the `result` shows as `Show`:

    ![API to invoke the Personalization ID rule Example 1](../images/pzn_id_invoke_rule_response_structure_example_1.png)

    When you modify the rule condition of the example from the current date \(November 16, 2021\) to a different date \(November 17, 2021\), and when executed, the `result` shows as `Hide`, the response structure is shown as follows:

    ![API to invoke the Personalization ID rule Example 2](../images/pzn_id_invoke_rule_response_structure_example_2.png)

-   **Response Structure for Profiler:**

    The response structure presents the details of `ruleID`, `title`, `ruleType`, and `result`, as shown below:

    ![Invoke Profile rule](../images/Invoke_Profile_rule.png)

    For example, the image below shows the use of the API to create a **Profiler ruleType** called `Profile User Example` with a condition that assumes `current Weekday` is Tuesday, and when executed, the `result` shows as an array as `Profile 2`, the response structure is as follows:

    ![Profile User Rule example](../images/Profile_User_Rule_Example.png)

    When you modify the rule to satisfy conditions for multiple profiles and on execution, the result shows in an array as `Profile 1` and `Profile 2`, the response structure is as follows:

    ![Multiple profiles](../images/Multiple_profiles.png)

    When you modify the rule to satisfy conditions for multiple profiles, but request to get first profile that satisfies the condition and on execution, the result shows in an array as `Profile 1`, the response structure is as follows:

    ![](../images/Multiple_profiles_Profile1.png)

    When you modify the rule to not satisfy any condition and on execution, the `result` shows in an array as `Profile 3`, the response structure is as follows:

    ![](../images/Multiple_profiles_Profile3.png)

    When you modify the rule to not satisfy any condition, but you removed the profile otherwise and on execution, the `result` shows an empty array as `[]`, the response structure is as follows:

    ![](../images/Multiple_Profiles_emptyarray_removed.png)


-   **Success and Error Messages:**

    |Error Code|Means|
    |----------|-----|
    |200|This code is returned when the API is executed with rule result successfully.|
    |401|This code is returned when the `LtpaToken` is invalid or expired.|
    |403|This code is returned access is restricted for users.|
    |404|This code is returned when the Rule UUID is not found or invalid.|
    |500|This code is returned when internal server error occurs.|


## Create \(POST\) a new Personalization rule

This API is used to create a new Personalization rule.

-   **POST request format:**

    ```
    https://localhost:10039/wps/mycontenthandler/pzn-rest/rules
    ```

    Example:

    ```
    https://localhost:10039/wps/mycontenthandler/pzn-rest/rules
    ```


-   **Sample request payload for creating a new Visibility rule:**

    ```
    {
      "title": "Visibility Rule Example",
      "description": "Visibility Rule Description",
      "ruleType": "Visibility Rule",
      "contents": {
        "visibility": "show",
        "otherwise": "hide",
        "conditions": {
          "and": [
            {
              "attributeType": "Date",
              "attributeName": "day",
              "operator": "is between",
              "value": [
                25,
                31
              ]
            },
            {
              "or": [
                {
                  "attributeType": "Date",
                  "attributeName": "weekday",
                  "operator": "is not",
                  "value": [
                    "Monday"
                  ]
                },
                {
                  "attributeType": "Date",
                  "attributeName": "month",
                  "operator": "is",
                  "value": [
                    "December"
                  ]
                },
              ]
            }
          ]
        },
        "caseInsensitive": false
      },
      "parentId": "_6QR_0048AAQUGF0A1T2A_18L"
    }
    ```

-   **Sample request payload for creating a new Profiler rule:**

    ```
    {
        "description": "Profiler Rule",
        "title": "Profiler Rule 1",
        "ruleType": "Profiler",
        "contents": {
            "profiles": [
                {
                    "profileName": "Profile1",
                    "conditions": {
                        "and": [
                            {
                                "attributeType": "Date",
                                "attributeName": "year",
                                "operator": "is not",
                                "value": [
                                  2021
                                ]
                            }
                        ]
                    },
                    "caseInsensitive": false
                }
            ],
            "otherwiseProfile": null,
            "caseInsensitive": false,
            "stopFirstProfile": false
        },
        "parentId": "_6QR_0048AAQUGF0A1T2A_18L"
    }
    ```


-   **Steps to execute the API:**

    1.  Login to your Digital Experience solution.
    2.  The login cookie contains the Authentication token. Leave the cookie field empty if you are already authenticated, unless you intend to put a token value.
    3.  \(**Required**\) Provide the `title` and `ruleType` of the new Personalization rule.
    4.  \(**Optional**\) Provide the description and `caseInsensitive` of the mew Personalization rule.​
    5.  \(**Optional**\) Provide the `parentId` in the location where we want to create the new Personalization rule in. By default, it will create in Workspace. Refer to the section below on how to get the `parentId`.
    6.  Provide the contents of the rule. Refer to *Personalization API contents details* below for a detailed explanation of contents and its conditions.

        For example:

        ![Create Profiler rule API](../images/Create-profiler-rule-API.png)

    Steps to get the `ResourceId`:

    1.  Login to HCL Digital Experience.
    2.  Go to [Personalization Navigator](pzn_portlets.md).
    3.  Select the resource and document information as shown below.

        ![Get resource id](../images/get-resource-id.png "Go to Applications menu > Personalization > Business rules > resource id
                              > Document info")

-   **Success and Error Messages:**

    |Error Code|Means|
    |----------|-----|
    |200|This code is returned when the Personalization rule is created successfully.|
    |400|This bad request error code is returned when input parameters are invalid or missing.|
    |401|This code is returned when the `LtpaToken` is invalid or expired.|
    |403|This code is returned when access is restricted for users.|
    |404|This code is returned when you are trying to create a Personalization rule with an already existing title.|
    |500|This code is returned when internal server error occurs.|


## Update \(PUT\) an existing Personalization rule

This API is used to update an existing Personalization rule.

-   **PUT request format:**

    ```
    https://localhost:10039/wps/mycontenthandler/pzn-rest/rules/{rule-id}
    ```

    Example:

    ```
    https://localhost:10039/wps/mycontenthandler/pzn-rest/rules/5bd89b0d-f024-4de2-a991-976315e917be
    ```

-   **Steps to execute the API:**

    1.  Login to your Digital Experience solution.
    2.  The login cookie contains the Authentication token. Leave the cookie field empty if you are already authenticated, unless you intend to put a token value.
    3.  Provide the `Rule-id` of the Personalization rule that is to be updated.
    4.  Select the desired `ruleType` in example request body for reference.
    5.  Provide the key value pairs of the rule which you want to update in the request body.

-   **Sample request payload for updating a Visibility rule:**

    ```
    {
      "description": "Visibility Rule",
      "title": "Visibility Rule 1",
      "ruleType": "Visibility Rule",
      "contents": {
        "visibility": "show",
        "conditions": {
          "and": [
            {
              "attributeType": "Date",
              "attributeName": "year",
              "operator": "is not",
              "value": [
                2021
              ]
            }
          ]
        },
        "caseInsensitive": true,
        "otherwise": "hide"
      },
      "parentId": "_6QR_0048AAQUGF0A1T2A_18L"
    }
    ```

    Screenshot for reference for Visibility rule:

    ![Update Personalization rule API](../images/Update-rule-API.png)


-   **Response structure details for Visibility rule:**

    ```
    {
      "id": "d5cf10d8-f167-48f8-abc2-28b5f088714d",
      "description": "Visibility Rule",
      "title": "Visibility Rule 1",
      "ruleType": "Visibility Rule",
      "contents": {
        "visibility": "show",
        "otherwise": "hide",
        "conditions": {
          "and": [
            {
              "operator": "is not",
              "attributeName": "year",
              "attributeType": "Date",
              "value": [
                2021
              ]
            }
          ]
        },
        "caseInsensitive": true
      },
      "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
      "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
      "created": "2022-03-09T12:53:53.157Z",
      "publishedOnDate": "1970-01-01T00:00:00.001Z",
      "lastModified": "2022-03-10T03:32:27.205Z",
      "lastModifier": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
      "parentId": "_6QR_0048AAQUGF0A1T2A_18L"
    }
    parentId": "_6QR_0048AAQUGF0A1T2A_18L"
    }
    ```


-   **Sample request payload for updating a Profiler rule:**

    ```
    {
      "description": "Profiler rule updated",
      "title": "Profiler Update",
      "ruleType": "Profiler",
      "contents": {
        "profiles": [
          {
            "profileName": "Profile1",
            "conditions": {
              "and": [
                {
                  "attributeType": "Date",
                  "attributeName": "day",
                  "operator": "is",
                  "value": [
                    20
                  ]
                }
              ]
            }
          }
        ],
        "otherwiseProfile": "Profile2",
        "caseInsensitive": true,
        "stopFirstProfile": true
      },
      "parentId": "_6QR_0048AAQUGF0A1T2A_18L"
    }
    ```

    Screenshot for reference for Visibility rule:

    ![Update Profiler rule API](../images/Update-profiler-rule-API.png)


-   **Response structure details for Profiler rule:**

    ```
    {
      "id": "a0631df2-67b9-474c-b678-c904f80a02dd",
      "description": "Profiler rule updated",
      "title": "Profiler Update",
      "ruleType": "Profiler",
      "contents": {
        "profiles": [
          {
            "profileName": "Profile1",
            "conditions": {
              "and": [
                {
                  "operator": "is",
                  "attributeName": "day",
                  "attributeType": "Date",
                  "value": [
                    20
                  ]
                }
              ]
            }
          }
        ],
        "otherwiseProfile": "Profile2",
        "caseInsensitive": true,
        "stopFirstProfile": true
      },
      "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
      "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
      "created": "2022-04-11T07:51:13.506Z",
      "publishedOnDate": "1970-01-01T00:00:00.001Z",
      "lastModified": "2022-04-11T07:52:57.335Z",
      "lastModifier": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
      "parentId": "_6QR_0048AAQUGF0A1T2A_18L"
    }
    ```

    Steps to get the `ResourceId`:

    1.  Login to HCL Digital Experience.
    2.  Go to [Personalization Navigator](pzn_portlets.md).
    3.  Select the resource and document information as shown below.

        ![Get resource id](../images/get-resource-id.png "Go to Applications menu > Personalization > Business rules > resource id >
                            Document info")

        **Note:** Updating a ruleType is restricted.


-   **Success and Error Messages:**

    |Error Code|Means|
    |----------|-----|
    |200|This code is returned when the Personalization rule is updated successfully.|
    |400|This bad request error code is returned when input parameters are invalid or missing.|
    |401|This code is returned when the `LtpaToken` is invalid or expired.|
    |403|This code is returned when access is restricted for users.|
    |404|This code is returned when you are trying to update a Personalization rule with an already existing title.|
    |500|This code is returned when internal server error occurs.|


## GET dynamic properties

This API endpoint is used to get dynamic properties from all resource types.

Each dynamic property is represented as an object in each resource type, which includes the property name \(i.e. `attr1`\) and its `displayName` and `propertyType`.

-   **GET Request format**

    ```
    https://localhost:10039/wps/mycontenthandler/pzn-rest/dynamic-properties
    ```

-   **Sample request payload**

    ```
    {
      "attr1": {
        "displayName": "attr1",
        "propertyType": "Text"
      }
    }
    ```

-   **Steps to execute the API:**

    1.  Login to your Digital Experience solution.
    2.  The login cookie contains the Authentication token. Leave the cookie field empty if you are already authenticated, unless you intend to put a token value.
    3.  Get the dynamic properties for a selected resource type using the REST API `GET all` command.
    For example, the dynamic properties added in one of the resource type `Action Count` looks like this:

    ![PZN Get Action Count dynamic properties](../images/pzn-get-action-count-dynamic-properties.png)

    To get the dynamic properties of the resource type `Action Count`, the list of properties is returned in the specific resource type as an object:

    ```
    {
      "attr2": {
        "displayName": "attr2",
        "propertyType": "Number"
      },
      "attr1": {
        "displayName": "attr1",
        "propertyType": "Text"
      },
      "attr3": {
        "displayName": "attr3",
        "propertyType": "Date"
      }
    }
    ```

-   **Response structure details:**

    Response for the GET all dynamic properties call, which lists all the properties created under each resource type, is shown below:

    -   Different types of resource types for dynamic properties comprise of `Action Count`, `User`, `Category Count`, `Request`, `Shared Data`, `Portlet Attributes`, `Render Parameter` and `Session`.
    -   Different types of allowed property types for dynamic properties comprise of `Text`, `Date`, `Time`, `Timestamp`, `Number`, `Decimal Number`, `Boolean`, `List`, `Person`, and `Group`.
    ```
    {
      "Action Count": {
        "attr2": {
          "displayName": "attr2",
          "propertyType": "Number"
        },
        "attr1": {
          "displayName": "attr1",
          "propertyType": "Text"
        },
        "attr3": {
          "displayName": "attr3",
          "propertyType": "Date"
        }
      },
      "User": {
        "givenName": {
          "displayName": "givenName",
          "propertyType": "Text"
        },
        "pinCode": {
          "displayName": "pinCode",
          "propertyType": "Number"
        },
        "officeAddress": {
          "displayName": "officeAddress",
          "propertyType": "Text"
        }
      },
      "Category Count": {
        "attr2": {
          "displayName": "attr2",
          "propertyType": "Number"
        },
        "attr1": {
          "displayName": "attr1",
          "propertyType": "Text"
        },
        "attr3": {
          "displayName": "attr3",
          "propertyType": "Time"
        }
      },
      "Request": {
        "listprop": {
          "displayName": "listprop",
          "propertyType": "List"
        },
        "textprop2": {
          "displayName": "textprop2",
          "propertyType": "Text"
        },
        "booleanProp": {
          "displayName": "booleanProp",
          "propertyType": "Boolean"
        },
        "decNumberProp": {
          "displayName": "decNumberProp",
          "propertyType": "Decimal Number"
        }
      },
      "Shared Data": {
        "listprop": {
          "displayName": "listprop",
          "propertyType": "List"
        },
        "booleanProp": {
          "displayName": "booleanProp",
          "propertyType": "Boolean"
        },
        "textprop2": {
          "displayName": "textprop2",
          "propertyType": "Text"
        },
        "decNumberProp": {
          "displayName": "decNumberProp",
          "propertyType": "Decimal Number"
        }
      },
      "Portlet Attributes": {
        "listprop": {
          "displayName": "listprop",
          "propertyType": "List"
        },
        "textprop2": {
          "displayName": "textprop2",
          "propertyType": "Text"
        },
        "booleanProp": {
          "displayName": "booleanProp",
          "propertyType": "Boolean"
        },
        "decNumberProp": {
          "displayName": "decNumberProp",
          "propertyType": "Decimal Number"
        }
      },
      "Render Parameter": {
        "listprop": {
          "displayName": "listprop",
          "propertyType": "List"
        },
        "textprop2": {
          "displayName": "textprop2",
          "propertyType": "Text"
        },
        "booleanProp": {
          "displayName": "booleanProp",
          "propertyType": "Boolean"
        },
        "dateProp": {
          "displayName": "dateProp",
          "propertyType": "Date"
        },
        "timeprop": {
          "displayName": "timeprop",
          "propertyType": "Time"
        },
        "decNumberProp": {
          "displayName": "decNumberProp",
          "propertyType": "Decimal Number"
        },
        "timestampprop": {
          "displayName": "timestampprop",
          "propertyType": "Timestamp"
        }
      },
      "Session": {
        "listprop": {
          "displayName": "listprop",
          "propertyType": "List"
        },
        "textprop2": {
          "displayName": "textprop2",
          "propertyType": "Text"
        },
        "booleanProp": {
          "displayName": "booleanProp",
          "propertyType": "Boolean"
        },
        "decNumberProp": {
          "displayName": "decNumberProp",
          "propertyType": "Decimal Number"
        }
      }
    }
    ```

-   **Success and Error Messages:**

    |Error Code|Means|
    |----------|-----|
    |200|This code is returned when the list of dynamic properties is obtained successfully|
    |401|This code is returned when the `LtpaToken` is invalid or expired.|
    |403|This code is returned access is restricted for users.|
    |409|This code is returned when the dynamic property you are trying to update already has an existing property.|
    |500|This code is returned when internal server error occurs.|


## Update \(PUT\) dynamic properties

This API endpoint is used to update dynamic properties for all resource types.

You can update the property object, which includes property name \(i.e. `attr1`\) and its `displayName` and `propertyType` in the request payload, along with the ones received from your GET request.

**Note:** `displayName` and `propertyType` is mandatory for each dynamic property.

-   **PUT request format:**

    ```
    https://localhost:10039/wps/mycontenthandler/pzn-rest/dynamic-properties
    ```


-   **Sample request payload:**

    ```
    {
      "Action Count": {
        "attr2": {
          "displayName": "attr2",
          "propertyType": "Number"
        },
        "attr1": {
          "displayName": "attr1",
          "propertyType": "Text"
        },
        "attr3": {
          "displayName": "attr3",
          "propertyType": "Date"
        }
      }
      ... other resource types
    }
    ```

-   **Steps to execute the API:**

    1.  Login to your Digital Experience solution.
    2.  The login cookie contains the Authentication token. Leave the cookie field empty if you are already authenticated, unless you intend to put a token value.
    3.  Add or remove dynamic properties from the payload as mentioned in the example above.
-   **Response structure details:**

    Response structure is the same with the response structure for a GET all dynamic properties API call, which lists all the properties created under each resource type:

    -   Different types of resource types for dynamic properties comprise of `Action Count`, `User`, `Category Count`, `Request`, `Shared Data`, `Portlet Attributes`, `Render Parameter`, and `Session`.
    -   Different types of allowed property types for dynamic properties comprise of `Text`, `Date`, `Time`, `Timestamp`, `Number`, `Decimal Number`, `Boolean`, `List`, `Person`, and `Group`.
    ```
    {
      "Action Count": {
        "attr2": {
          "displayName": "attr2",
          "propertyType": "Number"
        },
        "attr1": {
          "displayName": "attr1",
          "propertyType": "Text"
        },
        "attr3": {
          "displayName": "attr3",
          "propertyType": "Date"
        }
      },
      "User": {
        "givenName": {
          "displayName": "givenName",
          "propertyType": "Text"
        },
        "pinCode": {
          "displayName": "pinCode",
          "propertyType": "Number"
        },
        "officeAddress": {
          "displayName": "officeAddress",
          "propertyType": "Text"
        }
      },
      "Category Count": {
        "attr2": {
          "displayName": "attr2",
          "propertyType": "Number"
        },
        "attr1": {
          "displayName": "attr1",
          "propertyType": "Text"
        },
        "attr3": {
          "displayName": "attr3",
          "propertyType": "Time"
        }
      },
      "Request": {
        "listprop": {
          "displayName": "listprop",
          "propertyType": "List"
        },
        "textprop2": {
          "displayName": "textprop2",
          "propertyType": "Text"
        },
        "booleanProp": {
          "displayName": "booleanProp",
          "propertyType": "Boolean"
        },
        "decNumberProp": {
          "displayName": "decNumberProp",
          "propertyType": "Decimal Number"
        }
      },
      "Shared Data": {
        "listprop": {
          "displayName": "listprop",
          "propertyType": "List"
        },
        "booleanProp": {
          "displayName": "booleanProp",
          "propertyType": "Boolean"
        },
        "textprop2": {
          "displayName": "textprop2",
          "propertyType": "Text"
        },
        "decNumberProp": {
          "displayName": "decNumberProp",
          "propertyType": "Decimal Number"
        }
      },
      "Portlet Attributes": {
        "listprop": {
          "displayName": "listprop",
          "propertyType": "List"
        },
        "textprop2": {
          "displayName": "textprop2",
          "propertyType": "Text"
        },
        "booleanProp": {
          "displayName": "booleanProp",
          "propertyType": "Boolean"
        },
        "decNumberProp": {
          "displayName": "decNumberProp",
          "propertyType": "Decimal Number"
        }
      },
      "Render Parameter": {
        "listprop": {
          "displayName": "listprop",
          "propertyType": "List"
        },
        "textprop2": {
          "displayName": "textprop2",
          "propertyType": "Text"
        },
        "booleanProp": {
          "displayName": "booleanProp",
          "propertyType": "Boolean"
        },
        "dateProp": {
          "displayName": "dateProp",
          "propertyType": "Date"
        },
        "timeprop": {
          "displayName": "timeprop",
          "propertyType": "Time"
        },
        "decNumberProp": {
          "displayName": "decNumberProp",
          "propertyType": "Decimal Number"
        },
        "timestampprop": {
          "displayName": "timestampprop",
          "propertyType": "Timestamp"
        }
      },
      "Session": {
        "listprop": {
          "displayName": "listprop",
          "propertyType": "List"
        },
        "textprop2": {
          "displayName": "textprop2",
          "propertyType": "Text"
        },
        "booleanProp": {
          "displayName": "booleanProp",
          "propertyType": "Boolean"
        },
        "decNumberProp": {
          "displayName": "decNumberProp",
          "propertyType": "Decimal Number"
        }
      }
    }
    ```

-   **Success and Error Messages for GET Personalization Rule ID dynamic properties:**

    |Error Code|Means|
    |----------|-----|
    |200|This code is returned when the list of dynamic properties is obtained successfully.|
    |401|This code is returned when the `LtpaToken` is invalid or expired.|
    |403|This code is returned access is restricted for users.|
    |409|This code is returned when the dynamic property you are trying to update already has an existing property.|
    |500|This code is returned when internal server error occurs.|


## DELETE Personalization rule using rule-id

The following example shows how to use this API is to delete a Personalization rule using `rule-id`.

-   **DELETE request format:**

    ```
    https://localhost:10039/wps/mycontenthandler/pzn-rest/rules/{rule-id}
    ```

    Example:

    ```
    https://localhost:10039/wps/mycontenthandler/pzn-rest/rules/a7f72eb5-fffa-4bbb-955e-7dd0a9c9c88f
    ```


-   **Steps to execute the API:**

    1.  Login to your Digital Experience solution.
    2.  The login cookie contains the Authentication token. Leave the cookie field empty if you are already authenticated, unless you intend to put a token value.
    3.  Provide the `rule-id` of the rule you wish to delete.
    For example:

    ![Delete Personalization rule API](../images/Delete-rule-API.png)


-   **Response Structure Details:**

    The response structure is a success message that says the rule with the provided ID is deleted successfully, just like in this example shown below:

    ```
    {
      "message": rule with id: 880bb281-bb82-489c-a220-56104f0f638d deleted successfully
    }
    ```


-   **Success and Error Messages:**

    |Error Code|Means|
    |----------|-----|
    |200|This code is returned when the Personalization rule is deleted successfully.|
    |401|This code is returned when the `LtpaToken` is invalid or expired.|
    |403|This code is returned access is restricted for users.|
    |404|This code is returned when the Rule UUID is not found or invalid.|
    |500|This code is returned when internal server error occurs.|


-   **[Personalization rules REST API content details](../pzn/rules_api_contents_details.md)**  
The following topic provides details about DX [Personalization](pzn_concepts.md) rules REST API content.
-   **[References for display formats of attribute properties defined to Personalization APIs and examples](../pzn/api_display_formats_attribute_properties.md)**  
The following topic provides additional details about the conditions and response structures for various attributes defined in the examples to execute API calls presenting different attributes of DX [Personalization](pzn_concepts.md) services.
-   **[Triggering Personalization rules anonymously](../pzn/trigerring_pzn_rules_anonymously.md)**  
The Personalization rules REST APIs can be triggered anonymously.
-   **[Personalization rules REST API content details](../pzn/rules_api_contents_details.md)**  
The following topic provides details about DX [Personalization](pzn_concepts.md) rules REST API content.
-   **[References for display formats of attribute properties defined to Personalization APIs and examples](../pzn/api_display_formats_attribute_properties.md)**  
The following topic provides additional details about the conditions and response structures for various attributes defined in the examples to execute API calls presenting different attributes of DX [Personalization](pzn_concepts.md) services.
-   **[Triggering Personalization rules anonymously](../pzn/trigerring_pzn_rules_anonymously.md)**  
The Personalization rules REST APIs can be triggered anonymously.

**Parent topic:**[Personalization REST API explorer](../pzn/dev_pzn_rest_api_explorer.md)

