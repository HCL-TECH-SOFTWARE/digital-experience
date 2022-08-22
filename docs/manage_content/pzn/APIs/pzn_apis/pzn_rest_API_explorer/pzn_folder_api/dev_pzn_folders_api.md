# Personalization folder APIs

The Personalization folder REST APIs provide access to personalization folder capabilities using REST services.

For more information on HCL Digital Experience Personalization Folders, refer to the [Personalization](https://help.hcltechsw.com/digital-experience/8.5/pzn/pzn_overview.html) Help Center topic.

## Personalization folder endpoints

As of HCL Digital Experience CF and Container Update CF202 and later releases, the following REST APIs are developed:

1.  POST or create a new Personalization folder
2.  PUT or update an existing Personalization folder
3.  GET Personalization Folder details using folder id
4.  GET list of Personalization Folders
5.  DELETE Personalization Folder using folder id

For more details on the Personalization response payload, refer to the *Response payload explanation* section below.

## Create \(POST\) a new Personalization folder

Use this API to create a new Personalization folder in the Personalization workspace.

-   **POST request to:**

    ```
    https://localhost:10039/wps/mycontenthandler/pzn-rest/folders
    ```


-   **POST Personalization Folder REST API example:**

    ```
    https://localhost:10039/wps/mycontenthandler/pzn-rest/folders
    ```


-   **Sample Request Payload:**

    ```
    {
      "title": "demo",
      "description": "demo folder",
      "parentId": "b7bbddd7-95c6-4062-8971-134f780002f1"
    }
    ```


-   **Steps to execute the POST Personalization Folder RESTAPI:**

    1.  Login to your Digital Experience solution.
    2.  The login cookie contains the Authentication token. Leave the cookie field empty if you are already authenticated, unless you intend to put a token value.
    3.  Provide the title of the folder.
    4.  \(Optional\): Provide a description of the folder.
    5.  \(Optional\) Provide the `parentId` of the location of the folder where you want to create. Otherwise, the new folder is to be created in the workspace by default.
    To get the `parentId` of the workspace or folder:

    1.  Navigate to [WCM Support Tools](https://help.hcltechsw.com/digital-experience/8.5/trouble/wcm_support_tools.html).
    2.  Click **Browse Nodes**.
    3.  To get the workspace `parentID`, navigate to **Properties** section and use the value of the **jcr:uuid** field as shown below.

        ![Find workspace parentID](../images/Find_parentId_workspace.png)

    4.  To get the `parentID` for an existing folder, click to select a folder from the **Children** section and use the value of the **jcr:uuid** field as shown below.

        ![Find parentID for existing folder](../images/Find_parentId_existingFolder.png)


-   **Combined Response Structure:**

    When you execute the POST Personalization Folder REST API, it creates a folder in the Personalization interface Workspace or inside an existing folder.

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

    Example:

    ![Create a folder API](../images/Create-folder-API.png)

-   **Response Structure Details:**

    -   The response structure gets the details of the created folder and the response for the created folder.
    -   For more details on the Response Payload, refer to the *Response Payload* section below.
    -   The example below shows the response for one Personalization folder:

        ```
        {
          "id": "5bd89b0d-f024-4de2-a991-976315e917be",
          "description": "demo folder",
          "title": "demo",
          "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "created": "2022-01-13T07:14:01.035Z",
          "lastModified": "2022-01-13T07:14:01.035Z",
          "lastModifier": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "parentId": "_6QR_0048AAQUGF0A1T2A_18L"
        }
        ```


-   **POST Personalization Folder REST API Success and Error Messages**

    |Error Code|Means|
    |----------|-----|
    |200|This code is returned when you create a folder successfully.|
    |400|This code is returned if the input parameters are missing or invalid.    -   `Title` is missing in body.
    -   `Title` is empty in body.
    -   `ParentId` is invalid in body.
|
    |401|This code is returned when the `LtpaToken` is invalid or expired.|
    |403|This code is returned when user access is restricted.|
    |409|This code is returned when we you are trying to create a folder with the same of an existing folder.|
    |500|This code is returned when an internal server error occurs.|


## Update \(PUT\) a Personalization folder

The Update a Personalization Folder REST API is used to update an existing Personalization Folder.

-   **PUT Request to:**

    ```
    https://localhost:10039/wps/mycontenthandler/pzn-rest/folders/{folder-id}
    ```


-   **Update a Personalization Folder REST API example:**

    ```
    https://localhost:10039/wps/mycontenthandler/pzn-rest/folders/5bd89b0d-f024-4de2-a991-976315e917be
    ```


-   **Sample Request Payload:**

    ```
    {
      "title": "demo",
      "description": "demo folder",
      "parentId": "b7bbddd7-95c6-4062-8971-134f780002f1"
    }
    ```


-   **Steps to execute the Update a Personalization Folder REST API:**

    1.  Login to your Digital Experience solution.
    2.  The login cookie contains the Authentication token. Leave the cookie field empty if you are already authenticated, unless you intend to put a token value.
    3.  Provide the following Personalization Folder-ID details which is to be updated.
    4.  Provide either title or description or `parentId` of the Personalization folder in the request body.

        **Note 1:** Updating a root folder/workspace is restricted. The API returns a 403 error code for this scenario.

        **Note 2:** The `parentId` input is to be passed if the selected Personalization folder has to be moved to a different location.

        To retrieve the `parentId` for a specific workspace or existing Personalization using the JCR explorer, follow the steps below:

        1.  Navigate to the [WCM Support Tools](../trouble/wcm_support_tools.md).
        2.  Click **Browse Nodes**.
        3.  To get the workspace `parentID`, navigate to **Properties** section and use the value of the **jcr:uuid** field as shown below.

            ![JCR:UUID as workspace ID](../images/Find_parentId_workspace-2.png "JCR:UUID as Workspace ID")

        4.  To get the `parentID` for an existing folder, click to select a folder from the **Children** section and use the value of the **jcr:uuid** field as shown below.

            ![JCR:UUID as folder ID](../images/Find_parentId_existingFolder-3.png "JCR:UUID as Personalization
                                                              Folder-ID")


-   **Combined Response Structure:**

    When you execute the PUT Personalization Folder REST API to update a folder, it may move the folder either to the Workspace or inside another Folder.

    `parentId` is the main attribute to find the difference between the location of the folder created in the **Workspace** and **Folder**:

    -   -   Workspace `parentId` always starts with an underscore \("\_"\).

    Example:

    ```
    "parentId": "_6QR_0048AAQUGF0A1T2A_18L"
    ```

-   Folder `parentId` does not start with an underscore \("\_"\) and is separated with a hyphen \("-"\).

    Example:

    ```
    "parentId": "ee99433c-82d2-46eb-b48b-90cc234e57e2"
    ```


-   **Response Structure Details:**

    -   In the response structure, we get the details of the updated folder, and the response is attached below.
    -   For more details on the Response Payload, refer to the *Response Payload* section below.
    -   The example below shows the response for updating a selected Personalization folder:

        ```
        {
          "id": "5bd89b0d-f024-4de2-a991-976315e917be",
          "description": "demo folder",
          "title": "demo",
          "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "created": "2022-01-13T07:14:01.035Z",
          "lastModified": "2022-01-13T07:14:01.035Z",
          "lastModifier": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "parentId": "_6QR_0048AAQUGF0A1T2A_18L"
        }
        ```


-   **PUT Personalization Folder REST API Success and Error Messages**

    |Error Code|Means|
    |----------|-----|
    |200|This code is returned when you update a folder successfully.|
    |400|This code is returned if the input parameters are missing or invalid.    -   `Title` is missing in body.
    -   `Title` is empty in body.
    -   `ParentId` is invalid in body.
|
    |401|This code is returned when the `LtpaToken` is invalid or expired.|
    |403|This code is returned when user access is restricted.\(e.g. User tries to update a root folder/workspace\)

|
    |409|This code is returned when we you are trying to create a folder with the same of an existing folder.|
    |500|This code is returned when an internal server error occurs.|


## GET Personalization folder-id

The GET Personalization Folder ID REST API is used to get individual Personalization Folder ID details.

-   **GET Request format:**

    ```
    https://localhost:10039/wps/mycontenthandler/pzn-rest/folders/{folder-id}
    ```


-   **GET Personalization Folder ID REST API example:**

    ```
    https://localhost:10039/wps/mycontenthandler/pzn-rest/folders/5bd89b0d-f024-4de2-a991-976315e917be
    ```


-   **Steps to execute the GET Personalization Folder ID REST API:**

    1.  Login to your Digital Experience solution.
    2.  The login cookie contains the Authentication token. Leave the cookie field empty if you are already authenticated, unless you intend to put a token value.
    3.  Obtain the Personalization Folder ID details using the REST API `GET all` API command, as shown in the following example:

        ![Get Folder API](../images/Get-folder-API.png)


-   **Response structure details:**

    -   The response structure gets the details of the selected Personalization ID folder.
    -   For more details, see *Response Payload* below.

-   **GET Personalization Folder ID Success and Error Messages:**

    |Error Code|Means|
    |----------|-----|
    |200|This code is returned when the folder details are obtained successfully.|
    |401|This code is returned when the `LtpaToken` is invalid or expired.|
    |403|This code is returned when access is restricted for user.|
    |404|This code is returned when the Folder ID is not found or invalid.|
    |500|This code is returned when an internal server error occurs.|


## GET list of Personalization folders

The GET Personalization Folder list REST API is used to get or retrieve a list of all descendant folders.

-   **GET Request format:**

    ```
    https://localhost:10039/wps/mycontenthandler/pzn-rest/folders/
    ```


-   **GET Personalization Folder list REST API example:**

    ```
    http://localhost:10039/wps/mycontenthandler/pzn-rest/folders?limit=30&offset=0&depth=Descendants&parent=ffbbddd7-95c6-4062-8971-134f780002f1
    ```

-   **Steps to execute the GET Personalization Folder list REST API**

    1.  Login to your Digital Experience solution.
    2.  The login cookie contains the Authentication token. Leave the cookie field empty if you are already authenticated, unless you intend to put a token value.
    3.  Add the following parameters:

        -   The limit or the pagination parameter that indicates the number of results to be returned.
        -   The offset or the pagination parameter that indicates the starting point from which results are to be returned.​
        -   The depth or the level of depth to get the list of folders based on either children or descendants.
        -   The `parentid` of the folder you wish to get all descendant/children folders.
        For example:

        ![Get all folders API](../images/Get-all-folder-API.png)


-   **Response Structure Details:**

    -   In the response structure, you get the list of all descendant folders inside the parent folder with details.
    -   For more details on the`items` array and its elements, refer to the *Response Payload* section below.
    -   Response for the get all folder is shown below:

        ```
        {
          "offset": 0,
          "limit": 30,
          "total": 2,
          "items": [
              {
              "id": "ffbbddd7-95c6-4062-8971-134f780002f1",
              "folderType": "Folder",
              "description": "Demo folder",
              "title": "DemoFolder2",
              "parentId": "_6QR_0048AAQUGF0A1T2A_18L",
              "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
              "creator": "wpsadmin",
              "created": "2021-09-30T11:25:57.090Z",
              "lastModified": "2021-09-30T11:25:57.090Z",
              "lastModifier": "wpsadmin"
            },
            {
              "id": "b7bbddd7-95c6-4062-8971-134f780002f2",
              "folderType": "Folder",
              "description": "Demo folder2",
              "title": "DemoFolder2",
              "parentId": "ffbbddd7-95c6-4062-8971-134f780002f1",
              "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
              "creator": "wpsadmin",
              "created": "2021-09-30T11:25:57.090Z",
              "lastModified": "2021-09-30T11:25:57.090Z",
              "lastModifier": "wpsadmin"
            }
          ]
        }
        ```

    For example, here's a tree of custom folders that were created:

    ![Example: Folders Tree](../images/Example-Folders-Tree.png)

    **Scenario 1:** If depth is `descendants`/`null` and parent is `null`, the response structure will display a list of all the descendant folders present in the workspace and the workspace \(root folder\) itself:

    ```
    {
      "offset": 0,
      "limit": 30,
      "total": 8,
      "items": [
        {
          "id": "_6QR_0048AAQUGF0A1T2A_18L",
          "folderType": "Root Folder",
          "description": "",
          "title": "",
          "authors": "",
          "creator": "",
          "created": "2021-08-20T09:27:01.030Z",
          "lastModified": "2021-08-20T09:27:01.030Z",
          "parentId": ""
        },
        {
          "id": "bfde2158-9b2b-4c19-9bdb-015ce3d88e6b",
          "folderType": "Folder",
          "description": "",
          "title": "New Folder 1",
          "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "created": "2022-02-07T07:08:45.795Z",
          "lastModified": "2022-02-07T07:08:45.795Z",
          "parentId": "_6QR_0048AAQUGF0A1T2A_18L"
        },
        {
          "id": "7ef220f1-00e0-4d25-ad4d-827511d59c0f",
          "folderType": "Folder",
          "description": "",
          "title": "New Folder 2",
          "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "created": "2022-02-07T07:09:01.886Z",
          "lastModified": "2022-02-07T07:09:01.886Z",
          "parentId": "_6QR_0048AAQUGF0A1T2A_18L"
        },
        {
          "id": "05285fae-8b9d-4040-9aba-60727b53ca6d",
          "folderType": "Folder",
          "description": "",
          "title": "New Folder 21",
          "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "created": "2022-02-07T07:09:11.888Z",
          "lastModified": "2022-02-07T07:09:33.446Z",
          "parentId": "7ef220f1-00e0-4d25-ad4d-827511d59c0f"
        },
        {
          "id": "7cfcdb79-6a44-406a-a26c-c31279ce9c72",
          "folderType": "Folder",
          "description": "",
          "title": "New Folder 3",
          "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "created": "2022-02-07T07:09:49.191Z",
          "lastModified": "2022-02-07T07:09:49.191Z",
          "parentId": "_6QR_0048AAQUGF0A1T2A_18L"
        },
        {
          "id": "0d913248-2b06-459d-9c64-5e82d107545c",
          "folderType": "Folder",
          "description": "",
          "title": "New Folder 22",
          "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "created": "2022-02-07T07:10:12.704Z",
          "lastModified": "2022-02-07T07:10:12.704Z",
          "parentId": "7ef220f1-00e0-4d25-ad4d-827511d59c0f"
        },
        {
          "id": "6d5cab10-84d7-48ba-81db-160d06947e54",
          "folderType": "Folder",
          "description": "",
          "title": "New Folder 221",
          "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "created": "2022-02-07T07:10:36.912Z",
          "lastModified": "2022-02-07T07:10:36.912Z",
          "parentId": "0d913248-2b06-459d-9c64-5e82d107545c"
        },
        {
          "id": "bd623dc8-108b-4ea7-ac0f-47086639ff91",
          "folderType": "Folder",
          "description": "",
          "title": "New Folder 31",
          "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "created": "2022-02-07T07:57:56.457Z",
          "lastModified": "2022-02-07T07:57:56.457Z",
          "parentId": "7cfcdb79-6a44-406a-a26c-c31279ce9c72"
        }
      ]
    }
    ```

    **Scenario 2:** If depth is `childrens` and parent is `null`, the response structure will display a list of all the children folders present in the workspace and the workspace \(root folder\) itself:

    ```
    {
      "offset": 0,
      "limit": 30,
      "total": 4,
      "items": [
        {
          "id": "_6QR_0048AAQUGF0A1T2A_18L",
          "folderType": "Root Folder",
          "description": "",
          "title": "",
          "authors": "",
          "creator": "",
          "created": "2021-08-20T09:27:01.030Z",
          "lastModified": "2021-08-20T09:27:01.030Z",
          "parentId": ""
        },
        {
          "id": "bfde2158-9b2b-4c19-9bdb-015ce3d88e6b",
          "folderType": "Folder",
          "description": "",
          "title": "New Folder 1",
          "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "created": "2022-02-07T07:08:45.795Z",
          "lastModified": "2022-02-07T07:08:45.795Z",
          "parentId": "_6QR_0048AAQUGF0A1T2A_18L"
        },
        {
          "id": "7ef220f1-00e0-4d25-ad4d-827511d59c0f",
          "folderType": "Folder",
          "description": "",
          "title": "New Folder 2",
          "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "created": "2022-02-07T07:09:01.886Z",
          "lastModified": "2022-02-07T07:09:01.886Z",
          "parentId": "_6QR_0048AAQUGF0A1T2A_18L"
        },
        {
          "id": "7cfcdb79-6a44-406a-a26c-c31279ce9c72",
          "folderType": "Folder",
          "description": "",
          "title": "New Folder 3",
          "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "created": "2022-02-07T07:09:49.191Z",
          "lastModified": "2022-02-07T07:09:49.191Z",
          "parentId": "_6QR_0048AAQUGF0A1T2A_18L"
        },
      ]
    }
    ```

    **Scenario 3:** If depth is `descendants`/`null` and parent is a valid folder id \(e.g. folder ID is `New Folder 2`\), the response structure will display a list of all the descendant folders present in the specified folder:

    ```
    {
      "offset": 0,
      "limit": 30,
      "total": 3,
      "items": [
        {
          "id": "05285fae-8b9d-4040-9aba-60727b53ca6d",
          "folderType": "Folder",
          "description": "",
          "title": "New Folder 21",
          "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "created": "2022-02-07T07:09:11.888Z",
          "lastModified": "2022-02-07T07:09:33.446Z",
          "parentId": "7ef220f1-00e0-4d25-ad4d-827511d59c0f"
        },
        {
          "id": "0d913248-2b06-459d-9c64-5e82d107545c",
          "folderType": "Folder",
          "description": "",
          "title": "New Folder 22",
          "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "created": "2022-02-07T07:10:12.704Z",
          "lastModified": "2022-02-07T07:10:12.704Z",
          "parentId": "7ef220f1-00e0-4d25-ad4d-827511d59c0f"
        },
        {
          "id": "6d5cab10-84d7-48ba-81db-160d06947e54",
          "folderType": "Folder",
          "description": "",
          "title": "New Folder 221",
          "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "created": "2022-02-07T07:10:36.912Z",
          "lastModified": "2022-02-07T07:10:36.912Z",
          "parentId": "0d913248-2b06-459d-9c64-5e82d107545c"
        }
      ]
    }
    ```

    **Scenario 3:** If depth is `childrens` and parent is a valid folder id \(e.g. folder ID is `New Folder 2`\), the response structure will display a list of all the children folders present in the specified folder:

    ```
    {
      "offset": 0,
      "limit": 30,
      "total": 2,
      "items": [
        {
          "id": "05285fae-8b9d-4040-9aba-60727b53ca6d",
          "folderType": "Folder",
          "description": "",
          "title": "New Folder 21",
          "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "created": "2022-02-07T07:09:11.888Z",
          "lastModified": "2022-02-07T07:09:33.446Z",
          "parentId": "7ef220f1-00e0-4d25-ad4d-827511d59c0f"
        },
        {
          "id": "0d913248-2b06-459d-9c64-5e82d107545c",
          "folderType": "Folder",
          "description": "",
          "title": "New Folder 22",
          "authors": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "creator": "uid=wpsadmin,o=defaultWIMFileBasedRealm",
          "created": "2022-02-07T07:10:12.704Z",
          "lastModified": "2022-02-07T07:10:12.704Z",
          "parentId": "7ef220f1-00e0-4d25-ad4d-827511d59c0f"
        }
      ]
    }
    ```


-   **GET Personalization Folder list Success and Error Messages:**

    |Error Code|Means|
    |----------|-----|
    |200|This code is returned when you get all the list of folders details successfully.|
    |400|This code is returned if the input parameters are missing or invalid.    -   Limit is a decimal value.
    -   Offset is a decimal value.
    -   Depth is not among allowed depths.
    -   `ParentId` is invalid in body.
|
    |401|This code is returned when your `LtpaToken` is invalid/expired.|
    |403|This code is returned when access is restricted for user.|
    |404|This code is returned when the API URL is inaccessible.|
    |500|This code is returned when an internal server error occurs.|


## DELETE Personalization folder

The DELETE Personalization Folder ID REST API is used to delete a selected Personalization Folder.

**Note:** When deleting a folder, it would delete all the rules and sub-folders created within it.

-   **DELETE Request format:**

    ```
    https://localhost:10039/wps/mycontenthandler/pzn-rest/folders/{folder-id}
    ```


-   **DELETE Personalization Folder ID example:**

    ```
    https://localhost:10039/wps/mycontenthandler/pzn-rest/folders/880bb281-bb82-489c-a220-56104f0f638d
    ```


-   **Steps to execute the DELETE Personalization Folder ID REST API:**

    1.  Login to your Digital Experience solution.
    2.  The login cookie contains the Authentication token. Leave the cookie field empty if you are already authenticated, unless you intend to put a token value.
    3.  Delete the Personalization Folder you wish to delete by providing the folder ID as shown in the following example:

        ![Delete Folder API](../images/Delete-folder-API.png)


-   **Response structure details:**

    ```
    {
      "message": Folder with id: 880bb281-bb82-489c-a220-56104f0f638d deleted successfully
    }
    ```


-   **DELETE Personalization Folder ID Success and Error Messages:**

    |Error Code|Means|
    |----------|-----|
    |200|This code is returned when the selected folder is deleted successfully.|
    |401|This code is returned when the `LtpaToken` is invalid or expired.|
    |403|This code is returned when access is restricted for user.|
    |404|This code is returned when the Folder ID is not found or invalid.|
    |500|This code is returned when an internal server error occurs.|


## Response payload explanation

-   `"id"` - Field to indicate folder uuid.
-   `"folderType"` - Field to indicate folder type root folder \(Workspace\) or custom Folder
-   `"description"` - Field to indicate description of the folder.
-   `"title"` - Field to indicate that title of the folder.
-   `"authors"` - Field to indicate that owner of the folder.
-   `"creator"` - Field to indicate that creator of the folder.
-   `"created"` - Field to indicate that creation date and time of the folder.
-   `"lastModified"` - Filed to indicate that last modified date and time of the folder.
-   `"lastModifier"` - Filed to indicate that details of the user who is last modified the folder.
-   `"parentId"` - Field to indicate to find the difference between the location of the folder.

**Parent topic:**[Personalization REST API explorer](../pzn/dev_pzn_rest_api_explorer.md)

