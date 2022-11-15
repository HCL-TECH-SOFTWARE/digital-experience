# Creating a plug-in tag

Rendering plug-ins are referenced by using the plug-in tag. Select from preinstalled rendering plug-ins, or select your own custom plug-ins.

The format of a plug-in tag:

```
[plugin:pluginname paramKey="paramVal" compute=" " htmlencode=" " start=" " end=" "]
Tag Body Content
[/plugin:pluginname]
```

To create a plug-in tag:

1.  Click **Insert a Tag** from a presentation template, component, or element design field. The **Tag Helper** dialog opens.

2.  Select **Plugin Component** as the tag type.

3.  Select a plug-in type.

4.  Select the plug-in to reference. Information about the plug-in, and valid parameters, are displayed.

5.  Select whether to include start and end sections. You can enter extra text between the start and end sections of the tag, and other web content tags such as a component or element tag.

6.  Click **OK** to add the tag to your navigator design.

7.  You can then add custom parameters to your tag design.

    After you add the tag to your design, you can also add the following parameters to the tag:

    |Tag parameters|Details|
    |--------------|-------|
    |`compute=" "`|If not specified, the default setting is "always", meaning that the value of the plug-in tag is evaluated each time that the tag is rendered within a list, such as a menu or navigator component. Use `compute="once"` to evaluate the tag only once.|
    |`htmlencode=" "`|If `htmlencode="true"` reserved HTML characters are converted into character entities. For example, '`<`' is converted to '`&lt;`'. This parameter is useful if you would like to prevent users from adding malicious code, or if you want to prevent users from changing the design of their text by using HTML. If not specified, the default setting that is specified by the `cmpnt.htmlEncodeDefault` property in the **WCM WCMConfigService** service is used. By default, this property is set to true.

|
    |`start=" "``end=" "`

|The start and end attributes are used to wrap the data that is returned by a tag within other tags, such as HTML. These attributes are not mandatory.|

    -   **Simple tag**

        To reference a plug-in without specifying any parameters or tag body content:

        ```
        [plugin:pluginname]
        ```

    -   **Short tag**

        You can simplify the plug-in tag to this: `[pluginname]`

        The shortened plug-in tag cannot replace an existing web content tag. For example, if you created a plug-in named "Property", you must use the full tag: `[Plugin:Property]`. The tag `[Property]` is treated as a property tag, not a plug-in tag.

    -   **Simple tag with parameters**

        To reference a plug-in with parameters but no tag body content:

        ```
        [plugin:pluginname paramKey1="paramVal" paramKey2="paramVal" paramKey2="paramVal2"]
        ```

    -   **Plug-in tag with web content tag as a parameter**

        ```
        [plugin:pluginname paramKey1="[IDCmpnt context='current' type='sitearea' field='id']"]
        ```

        **Note:** You must use single quotation marks within the web content tag that is being used as a parameter value.

    -   **Plug-in tag with body content**

        To reference a plug-in with parameters and content that include a reference to a component:

        ```
        [plugin:pluginname paramKey1="paramVal" paramKey2="paramVal" paramKey2="paramVal2"]
        This is the tag body content.
        <br>
        [component name="test"]
        <br>
        More content.
        [/plugin:pluginname]
        ```


## Further information

These topics contain information about the different plug-ins.

**Related information**  


[Using remote action plug-ins](../panel_help/wcm_dev_remoteactions.md)

**References:**  


[Using remote action plug-ins](wcm_dev_remoteactions.md)

