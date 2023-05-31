# Example API Calls

To give users more insight on how to use Experience API, the following samples are provided.

## Sample process flow: Login, accessing content, and logout

-   **Call Examples**

    Before sending an API call, users need to get the UUID of the content they want to access out of HCL Digital Experience 9.5. Here are the steps to follow:

    1.  Log in to HCL Digital Experience 9.5 using `http://<PORTAL_HOST>:<PORTAL_PORT>/wps/portal`.
    2.  Go to **Web Content Authoring**.

        !!! note
            -   If you have Practitioner Studio enabled, navigate to **Web Content \> Authoring**.
            -   If you do not have Practitioner Studio configured in your Digital Experience 9.5 deployment, navigate to **Content \> Authoring**.

    3.  From **Authoring**, click on the **Web Content \> Content \> Articles**. A list of articles is displayed.
    4.  Click on any article and select **Properties \> Content Properties**.
    5.  Look for UUID value. If not available click on **More \> Show More Fields**.
    6.  Copy the UUID value.
    Use the UUID obtained in the previous process and use it to access content and logout flow:

        1.  Open HCL Experience API explorer using `http://<HOST>:<PORT>/dx/api/core/v1/explorer` (e.g. 'http://127.0.0.1:3000/dx/api/core/v1/explorer`).
        2.  Execute Login API endpoint `auth/login` by entering a valid username and password.
        3.  Once the login is successful, execute the following content ID endpoint to fetch content based on the content ID:

            ```
            /{accessType}/webcontent/contents/{contentId}
            ```

        4.  Pass the UUID value copied earlier as `contentID`. The json in the request body will need to be update to have a correct content name. For example:

            ```
            {"contentName": "Sample Article"}
            ```

        5.  Verify if the content payload is received. It should contain information about the article you wanted to access.
        6.  To log out of HCL Experience API, execute the Logout API command.

## Sample scripts: Login, Get roles, Get roles with authentication

Open the HCL Experience API GraphQL URL: http://localhost:4000/dx/api/core/v1/graphql.

See example result:

![](./assets/ExperienceAPI_GraphQL_HCL_DX.png)

-   ****

    Copy the scripts below and place those in the left panel of the HCL Experience API interface, then click on the execute button:

    1.  **Login Script**

        ```
        mutation
        {
                        authLogin(authLoginInput:{username: "wpsadmin", password:"wpsadmin"}){
                        message
                        statusCode
                        }
                        }
        ```

        ![Experience API login script](./assets/ExperienceAPI_login_script.png)

    2.  **Get Roles script (Without authentication)**

        ```
        query{
                        accessGetRoles(accessType: dxrest, resourceId: "hcl.portal.hiddenpages"){
                        startIndex
                        itemsPerPage
                        totalResults
                        }
                        }
                      
        ```

        ![Experience API get roles script without authorization](./assets/ExperienceAPI_get_roles_script.png)

    3.  **Get Roles script (With authentication)** - Refer to the screenshot below to retrieve the cookie and pass using the HCL Experience API.

        ```
        query{
                          accessGetRoles(accessType: dxmyrest, resourceId: "hcl.portal.hiddenpages", 
                          cookie :"LtpaToken2=EF/
                          32eLqVkB8DmPoF2Oa7AK82OuP7UwVKejVMJzNiVGJ6DtGWzQjm/
                          2i2V8aFf8hbNnxzqBhiYvg27qavPehNl+42/
                          iCleAdiGhZsgpPFNTLEbjlj+GAhxl+VCU1hhU78hOT2xDHkvjRz74eU6JU5RapIK3MZd
                          yHlI4QzQggg+t7f6Hzq8TY/gWEPlAKio+v74i7H4Snj28YYikDzLwKbqh/
                          0c3uORdCCcrjtJJB6Jv59HuUyeeFIAA1DbKj5vr2QBy9r4b6IgdtLyZJqNK2pASGzOrzJ
                          myckF+d65pG56mXDxPrQRsr1ccmIXid+jLu50GziCVtI/DC+SYKkTe/
                          +FLFIFzdbuzyyCxiVo+G91HTCSdfuBzpNFEhNODCBPE5OJtD00L2yEhugbDulLFJid9C
                          RI3qW7LIwnVrs66Bh7/G0ehTJ7+cn/YKqhc/EoV/
                          hIuD5RgJTIQmFmRUISzGKfqaEsDs2W/
                          LMPM3fVxbeW9+2QvlHwWgqfK9A96u14Gvfc991Q/
                          iyJRmMj6tLmf2qAzyBTJKpoZkMt6FezkxUExNzzgf6ZvYa8s8uMV5pzsMhUX/
                          7s8SfkrwxJXdCYP75xUH/xvvkW+J5w9pm0uSJsPgj6Er8RtqUXRWvACBZ51T/
                          6VUl8yXcJpuuVoGROl8IIFZz8xCkQuqABHc8cWjdM8="){
                          startIndex
                          itemsPerPage
                          totalResults
                          }
                          }
        ```

        ![Experience API get roles script with authorization](./assets/ExperienceAPI_get_roles_with_auth.png)


## Enabling the use of SVG files in DAM API

Follow the steps below to enable uploading an SVG file in DAM API:

1. In **POSTMAN**, log in to Ring API via:

    `POST - https://<domain>/dx/api/core/v1/auth/login`

2. Enter the **username** and **password**:

    `{ "username": "wpsadmin", "password": "wpsadmin" }`

3. Access **GET** mediatypes to verify if the SVG file type is available and enabled by going to the following URL:

    `https://<domain>/dx/api/dam/v1/mediatypes`

    Here is an example of a disabled SVG entry:

    {
            "id": "973422667d9d4b9ed6d668db017ba049",
            "mimeType": "image/svg+xml",
            "extensions": [
                "svg"
            ],
            "mediaTypeGroupId": "59b514174bffe4ae402b3d63aad79fe0",
            "created": "2023-04-19T06:45:42.088Z",
            "updated": "2023-04-19T14:05:28.270Z",
            "enabled": false,
            "self": "/mediatypes/973422667d9d4b9ed6d668db017ba049",
            "type": "image"
    }


4. Do a **PATCH** to update the enable flag to **True** for SVG files:

    `PATCH - https://<domain>/dx/api/dam/v1/mediatypes/<id>`

    Example: https://dx.com/dx/api/dam/v1/mediatypes/973422667d9d4b9ed6d668db017ba049,

    {
       "enabled": true
    }


5. Verify if the SVG is enabled by repeating Step 3. If enabled, proceed with uploading SVG files in DAM. 

    You can also verify in **DAM > Settings** if the SVG file type is enabled.

    ![Enable SVG file in  DAM API](../../../images/Enable_svgfile_DAM_API.png)


## Adding a new mime type in DAM 

Refer to the following steps to enable uploading an SVG file in DAM API:

1. Using any API Tool, log in to Ring API via:

    `POST - https://<domain>/dx/api/core/v1/auth/login`

The payload of the POST request should look like this:

    `{ "username": "<userId>" "password": "<password>" }`

3. Access **GET** mediatypegroups to get the media type group into which the new media type should be added. Find the id for image media type group.

    `https://<domain>/dx/api/dam/v1/mediatypegroups`

4. Do a **POST** request to the following endpoint to add a new mime type:

    `https://<domain>/dx/api/dam/v1/mediatypes`

    To add a new webp file type, refer to the following example:
    
        [{
            "mimeType": "image/webp",
            "extensions": ["webp"],
            "mediaTypeGroupId": "59b514174bffe4ae402b3d63aad79fe0"
        }]

If you want to configure renditions for the newly added mime type, refer to [Extensibility configuration](../../../manage_content/digital_assets/configuration/dam_extensibility/configure_dam_extensibility.md).

## HCLSoftware U learning materials

For an introduction and a demo on how to use Experience API, go to [Experience API](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D416). To try it out yourself, refer to [Experience API Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-100_Experience_API_for_Beginners.pdf) and corresponding [Experience API Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-100_Experience_API_Lab_Resouces.zip).

