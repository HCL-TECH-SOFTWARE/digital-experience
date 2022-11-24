# REST content formats for components and elements

When you use REST with components or elements, use these content formats. These examples can be used as templates for your own REST solutions.

## Component reference component or element

-   **XML**

    ```
    <content type="application/vnd.ibm.wcm+xml">
       <reference>/wps/mycontenthandler/wcmrest/LibraryShortTextComponent/c63aaf55-7d32-42e3-9bd6-3ce8877164f1</reference>
    </content>
    ```

-   **JSON**

    ```
    "content" :
    {
       "type" : "application/vnd.ibm.wcm+xml",
       "reference" : "/wps/mycontenthandler/wcmrest/LibraryShortTextComponent/c63aaf55-7d32-42e3-9bd6-3ce8877164f1"
    }
    ```


## Date and Time component or element

-   **XML**

    ```
    <content type="application/vnd.ibm.wcm+xml">
       <date type="DateTime">2014-06-18T14:45:00.000Z</date>
    </content>
    ```

-   **JSON**

    ```
    "content" :
    {
       "type" : "application/vnd.ibm.wcm+xml",
       "date" :
       {
          "type" : "DateTime",
          "value" : "Wed, 18 Jun 2014 14:45:00.000Z"
       }
    }
    ```


## File resource component or element for modifying

-   **XML**

    ```
    <content type="application/vnd.ibm.wcm+xml">    <wcm:binaryresource type="image/jpg" fileName="image.jpg">       VGhpcyBpcyBub3QgZ3JlYXQgdGVzdCBkYXRhLi4uLg==    </wcm:binaryresource>
    </content>
    ```

-   **JSON**

    ```
    "content" :
    {
       "type" : "application/vnd.ibm.wcm+xml",
       "binaryresource" :
       {
          "type" : "text/javascript",
          "fileName" : "testFile.js",
          "value" : "VGhpcyBpcyBub3QgZ3JlYXQgdGVzdCBkYXRhLi4uLg=="
       }
    }
    ```


## File resource component or element for reading

-   **XML**

    ```
    <content type="application/vnd.ibm.wcm+xml">
       <resourceUri type="image/png">/wps/wcm/myconnect/60e94008-22a6-4e99-bdbf-864a1b12442f/Screenshot+from+2014-05-05+16%3A32%3A00.png?MOD=AJPERES</resourceUri>
    </data>
    ```

-   **JSON**

    ```
    "content" :
    {
       "type" : "application/vnd.ibm.wcm+xml",
       "resourceUri" :
       {
          "type" : "image/png",
          "value" : "/wps/wcm/myconnect/60e94008-22a6-4e99-bdbf-864a1b12442f/Screenshot+from+2014-05-05+16%3A32%3A00.png?MOD=AJPERES"
       }
    }
    ```


## HTML component or element

-   **XML**

    ```
    <content type="text/html">
       <![CDATA[
          <div class="lotusui30">
          <h2 style="display:block;"> 
             <div>
                <div class="lotusLeft">          
                   [EditableProperty context="current" type="content" format="div" field="title"]           
                   [Property context="current" type="content" field="title"]         
                   [/EditableProperty]       
               </div>     
             </div>
         </h2>
         </div> 
       ]]&gt;
    </content> 
    ```

-   **JSON**

    ```
    "content" :
    {
       "type" : "text/html",
       "value" : "this is some html text"
    }
    ```


## Image component or element for reading

-   **XML**

    ```
    <content type="application/vnd.ibm.wcm+xml">
       <wcm:image xmlns="http://www.ibm.com/xmlns/wcm">
          <dimension height="16" width="16" border="0"/>
          <altText></altText>
          <tagName></tagName>
          <resourceUri type="image/gif">/wps/wcm/myconnect/5e7dd2e9-8a94-4964-a8d4-3a467be462ca/loading.gif?MOD=AJPERES</resourceUri>
       </wcm:image>
    </content>
    ```

-   **JSON**

    ```
    "content" :
    {
       "type" : "application/vnd.ibm.wcm+xml",
       "image" :
       {
          "dimension" :
          {
             "height" : "50",
             "width" : "50",
             "border" : "1"
          },
          "altText" : "",
          "tagName" : "",
          "fileName" : "Selection_009.png",
          "resourceUri" :
          {
             "type" : "image/png",
             "value" : "/wps/wcm/myconnect/9d2a5e32-d22e-4b1d-a02d-23b54998d024/Selection_009.png?MOD=AJPERES"
          }
       }
    }
    ```


## Image component or element for updating

-   **XML**

    ```
    <content type="application/vnd.ibm.wcm+xml">
       <wcm:image xmlns="http://www.ibm.com/xmlns/wcm">
          <dimension height="16" width="16" border="0"/>
          <altText></altText>
          <tagName></tagName>
          <wcm:binaryresource type="image/jpg" fileName="image.jpg">
             VGhpcyBpcyBub3QgZ3JlYXQgdGVzdCBkYXRhLi4uLg==&#xD;
          </wcm:binaryresource>
       </wcm:image>
    </content>
    ```

-   **JSON**

    ```
    "content" :
    {
       "type" : "application/vnd.ibm.wcm+xml",
       "image" :
       {
          "dimension" :
          {
             "height" : "50",
             "width" : "50",
             "border" : "1"
          },
          "altText" : "",
          "tagName" : "",
          "fileName" : "Selection_009.png",
          "binaryresource" :
          {
             "type" : "text/javascript",
             "fileName" : "testFile.js",
             "value" : "VGhpcyBpcyBub3QgZ3JlYXQgdGVzdCBkYXRhLi4uLg=="
          }
       }
    }
    ```


## JSP component or element

-   **XML**

    ```
    <content type="application/vnd.ibm.wcm+xml">
       <jsp>
          <path>/test.jsp</path>
          <errorMessage>Failed to locate the JSP file</errorMessage>
       </jsp>
    </content>
    ```

-   **JSON**

    ```
    "content" :
    {
       "type" : "application/vnd.ibm.wcm+xml",
       "jsp" :
       {
          "path" : "/test.jsp",
          "errorMessage" : "Failed to locate the JSP file"
       }
    }
    ```


## Link component or element

-   **XML**

    ```
    <content type="application/vnd.ibm.wcm+xml">
       <linkElement>
          <destination type="content" allowClear="false" queryString="">
             /wps/mycontenthandler/wcmrest/Content/51be861b-12dd-4846-945c-d8c2627299d6
          </destination>
          <display type="title"></display>
          <description useDestination="true"></description>
          <target>None</target>
          <additionalAttributes></additionalAttributes>
       </linkElement>
    </content>
    ```

-   **JSON**

    ```
    "content" :
    {
       "type" : "application/vnd.ibm.wcm+xml",
       "linkElement" :
       {
          "destination" :
          {
             "type" : "content",
             "allowClear" : false,
             "queryString" : "",
             "value" : "/wps/mycontenthandler/wcmrest/Content/51be861b-12dd-4846-945c-d8c2627299d6"
          },
          "display" :
          {
             "type" : "title"
          },
          "description" :
          {
             "useDestination" : true,
             "value" : ""
          },
          "target" : "None",
          "additionalAttributes" : ""
       }
    }
    ```


## Numeric component or element

-   **XML - floating point**

    ```
    <content type="application/vnd.ibm.wcm+xml">
       <wcm:double>1.01</wcm:double>
    </content>
    ```

-   **XML - whole number**

    ```
    <content type="application/vnd.ibm.wcm+xml">
       <wcm:integer>20</wcm:integer> 
    </content>
    ```

-   **JSON - floating point**

    ```
    "content" :
    {
       "type" : "application/vnd.ibm.wcm+xml",
       "double" : 12.1
    }
    ```

-   **JSON - whole number**

    ```
    "content" :
    {
       "type" : "application/vnd.ibm.wcm+xml",
       "double" : 20
    }
    ```


## Option selection element

-   **XML**

    ```
    <content type="application/vnd.ibm.wcm+xml">
       <optionselection>
          <displaytype>Automatic</displaytype>
          <selection>UserDefined</selection>
          <options mode="Singleselect">
             <option selected="false" id="A">A</option>
             <option selected="false" id="B">B</option>
             <option selected="false" id="C">C</option>
             <option selected="false" id="D">D</option>
          </options>
       </optionselection>
    </content>
    ```

-   **JSON**

    ```
    "content" :
    {
       "type" : "application/vnd.ibm.wcm+xml",
       "optionselection" :
       {
          "displaytype" : "Automatic",
          "selection" : "UserDefined",
          "options" :
          {
             "mode" : "Singleselect",
             "option" :
             [
                {
                   "selected" : false,
                   "id" : "A",
                   "value" : "A"
                },
                {
                   "selected" : false,
                   "id" : "B",
                   "value" : "B"
                },
                {
                   "selected" : false,
                   "id" : "C",
                   "value" : "C"
                },
                {
                   "selected" : false,
                   "id" : "D",
                   "value" : "D"
                }
             ]
          }
       }
    }
    ```


## Rich Text component or element

-   **XML**

    ```
    <content type="text/html">
       <![CDATA[
          <p dir="ltr">This is some rich text</p>
       ]]&gt;
    </data>
    ```

-   **JSON**

    ```
    "content" :
    {
       "type" : "text/html",
       "value" : "<p dir=\"ltr\">This is some rich text<\/p>\n"
    }
    ```


## Style sheet component or element

-   **XML**

    ```
    <content type="application/vnd.ibm.wcm+xml">
       <wcm:stylesheet xmlns="http://www.ibm.com/xmlns/wcm/8.0">
          <mediaType>All</mediaType>
          <type>Persistent</type>
          <title></title>
          <resourceUri>/wps/wcm/myconnect/cec80b3d-5529-47ed-a769-f85563c7fe66/Design.css?MOD=AJPERES</resourceUri>
       </wcm:stylesheet>
    </content>
    ```

-   **JSON**

    ```
    "content" :
    {
       "type" : "application/vnd.ibm.wcm+xml",
       "stylesheet" :
       {
          "mediaType" : "All",
          "type" : "Persistent",
          "title" : "",
          "resourceUri" : "/wps/wcm/myconnect/cec80b3d-5529-47ed-a769-f85563c7fe66/Design.css?MOD=AJPERES"
       }
    }
    ```


## Text or Short Text component or element

-   **XML**

    ```
    <content type="text/plain">
       this is some text content
    </content>
    ```

-   **JSON**

    ```
    "data" :
    {
       "type" : "text/plain",
       "value" : "this is some text content"
    }
    ```


## User selection component or element

-   **XML**

    ```
    <content type="application/vnd.ibm.wcm+xml">
       <userSelection>
          <user>
             <distinguishedName>uid=WCMUT_Contributor_A,o=defaultWIMFileBasedRealm</distinguishedName>
             <atom:uri>/wps/mycontenthandler/um/users/profiles/Z9eAeJHPGJP86M9EAMMG6K9PAMMG62RDGJM4C1JP0JM06IHP4JPK61RDCMIP6K1</atom:uri>
             <atom:name>WCMUT_Contributor_A WCMUT_Contributor_A</atom:name>
          </user>
          <user>
             <distinguishedName>uid=WCMUT_Contributor_B,o=defaultWIMFileBasedRealm</distinguishedName>
             <atom:uri>/wps/mycontenthandler/um/users/profiles/Z9eAeKPD83H16JHC2JM47KPOCJMG6IHC6MM8C3JCIJMOC4BEAMR06N9E8MQKC63</atom:uri>
             <atom:name>WCMUT_Contributor_B WCMUT_Contributor_B</atom:name>
          </user>
       </userSelection>
    </content>
    ```

-   **JSON**

    ```
    "data" :
    {
       "type" : "application/vnd.ibm.wcm+xml",
       "userSelection" :
       {
          "user" :
          [
             {
                "distinguishedName" : "uid=WCMUT_Contributor_A,o=defaultWIMFileBasedRealm",
                "uri" : "/wps/mycontenthandler/um/users/profiles/Z9eAeJHPGJP86M9EAMMG6K9PAMMG62RDGJM4C1JP0JM06IHP4JPK61RDCMIP6K1",
                "name" : "WCMUT_Contributor_A WCMUT_Contributor_A"
             },
             {
                "distinguishedName" : "uid=WCMUT_Contributor_B,o=defaultWIMFileBasedRealm",
                "uri" : "/wps/mycontenthandler/um/users/profiles/Z9eAeKPD83H16JHC2JM47KPOCJMG6IHC6MM8C3JCIJMOC4BEAMR06N9E8MQKC63",
                "name" : "WCMUT_Contributor_B WCMUT_Contributor_B"
             }
          ]
       }
    }
    ```



???+ info "Related information:"
   - [How to use REST with components](../wcm_rest/wcm_rest_mng_content/wcm_rest_crud_component.md)
   - [How to use REST with elements before version 8.5 CF03](../wcm_rest/wcm_rest_mng_content/wcm_rest_crud_element.md)

