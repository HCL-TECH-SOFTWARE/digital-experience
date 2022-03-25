# How to create or update an Option Selection Element

You can create or update an Option Selection Element in a Content Template.

## Using the Create or Update Option Selection Element

-   **Endpoint POST**

    **POST request to:**

    http://host:port/wps/mycontenthandler/wcmrest/ContentTemplate/<UUID of WCM AT\>/Prototype/elements

    **JSON**

    For **JSON** add ?mime-type=application/json

    **Sample URL:**

    http://localhost:10039/wps/mycontenthandler/!ut/p/digest!o1x8\_lupUwLN0NZh1tKfYQ/wcmrest/ContentTemplate/154592af-1aef-44e9-8b8b-559e6a3463fc/Prototype/elements


-   **Endpoint PUT**

    **PUT request to:**

    http://host:port/wps/mycontenthandler/wcmrest/ContentTemplate/<UUID of WCM AT\>/Prototype/elements/<name of element\>

    **JSON**

    For **JSON** add ?mime-type=application/json

    **Sample URL:**

    http://localhost:10039/wps/mycontenthandler/!ut/p/digest!ipSVM\_IHNf-\_uoZ3TPAgrQ/wcmrest/ContentTemplate/154592af-1aef-44e9-8b8b-559e6a3463fc/Prototype/elements/option3


-   **Expected Body**

    Element details. Three samples below for the different types of selection elements.

    ```
    <?xml version="1.0" encoding="UTF-8"?><entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
        <title xml:lang="en">option1</title>
        <wcm:name>option1</wcm:name>
        <wcm:type>OptionSelectionComponent</wcm:type>
        <content type="application/vnd.ibm.wcm+xml">
            <wcm:optionselection xmlns="http://www.ibm.com/xmlns/wcm/8.0">
                <displaytype>CheckboxesOrRadioButtons</displaytype>
                <selection>UserDefined</selection>
                <options mode="Multiselect">
                    <option selected="false" id="a">a</option>
                    <option selected="false" id="b">b</option>
                    <option selected="false" id="c">c</option>
                    <option selected="false" id="d">d</option>
                </options>
            </wcm:optionselection>
        </content>
    </entry>
    
    ```

    ```
    <?xml version="1.0" encoding="UTF-8"?><entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
        <title xml:lang="en">option2</title>
        <wcm:name>option2</wcm:name>
        <wcm:type>OptionSelectionComponent</wcm:type>
        <content type="application/vnd.ibm.wcm+xml">
            <wcm:optionselection xmlns="http://www.ibm.com/xmlns/wcm/8.0">
                <displaytype>Automatic</displaytype>
                <selection>UnrestrictedCategory</selection>
                <options mode="Singleselect"/>
            </wcm:optionselection>
        </content>
    </entry>
    
    ```

    ```
    <?xml version="1.0" encoding="UTF-8"?><entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
        <title xml:lang="en">option3</title>
        <wcm:name>option3</wcm:name>
        <wcm:type>OptionSelectionComponent</wcm:type>
        <content type="application/vnd.ibm.wcm+xml">
            <wcm:optionselection xmlns="http://www.ibm.com/xmlns/wcm/8.0">
                <displaytype>Listbox</displaytype>
                <selection>RestrictedCategory</selection>
                <options mode="Singleselect">
                    <option selected="false" category="/wps/mycontenthandler/!ut/p/digest!ipSVM_IHNf-_uoZ3TPAgrQ/wcmrest/Category/fa0612a6-b0e3-4ade-90e1-a434b3146977">cat1</option>
                    <option selected="false" category="/wps/mycontenthandler/!ut/p/digest!ipSVM_IHNf-_uoZ3TPAgrQ/wcmrest/Category/ef8c5340-8202-476f-96fd-fa9178d5c891">cat2</option>
                </options>
            </wcm:optionselection>
        </content>
    </entry>
    
    ```


-   **Expected Headers**

    LTPA token of the user.


-   **Query Parameters**

    None.


-   **Limitations**

    None.


-   **Return Body**

    The updated item.

    **Sample:**

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <entry xmlns="http://www.w3.org/2005/Atom" xmlns:wcm="http://www.ibm.com/xmlns/wcm/8.0">
        <title xml:lang="en">option3</title>
        <wcm:name>option3</wcm:name>
        <wcm:type>OptionSelectionComponent</wcm:type>
        <link rel="self" href="/wps/mycontenthandler/!ut/p/digest!MkdRgjTjAwea4NMtxVBQGg/wcmrest/ContentTemplate/154592af-1aef-44e9-8b8b-559e6a3463fc/Prototype/elements/option3" xml:lang="en" label="Read"/>
        <link rel="edit-media" href="/wps/mycontenthandler/!ut/p/digest!MkdRgjTjAwea4NMtxVBQGg/wcmrest/ContentTemplate/154592af-1aef-44e9-8b8b-559e6a3463fc/Prototype/elements/option3" type="application/vnd.ibm.wcm+xml" xml:lang="en" label="Edit Media"/>
        <link rel="edit" href="/wps/mycontenthandler/!ut/p/digest!MkdRgjTjAwea4NMtxVBQGg/wcmrest/ContentTemplate/154592af-1aef-44e9-8b8b-559e6a3463fc/Prototype/elements/option3" xml:lang="en" label="Edit"/>
        <content type="application/vnd.ibm.wcm+xml">
            <wcm:optionselection xmlns="http://www.ibm.com/xmlns/wcm/8.0">
                <displaytype>CheckboxesOrRadioButtons</displaytype>
                <selection>UserDefined</selection>
                <options mode="Multiselect">
                    <option selected="false" id="a">a</option>
                    <option selected="false" id="b">b</option>
                    <option selected="false" id="c">c</option>
                    <option selected="false" id="d">d</option>
                </options>
            </wcm:optionselection>
        </content>
    </entry>
    
    ```


