# Rendering the Business Card in DX pages

Apart from rendering a Business Card using a person tag link, you may want to leverage it in other scenarios and use cases. For example, you may want to provide information about a person of interest on your page. This feature allows the end user to hover over a link and display that person's information in a popup. In this guide, you will learn how to enable this feature using a Script Application.

## Script Application

Script Applications are web applications built with standard libraries, frameworks, and tools, running as a page component in HCL Digital Experience (DX).

Using Script Applications, you can import existing applications and edit its HTML, JavaScript, and CSS. Its components are saved in the Web Content Manager. Refer to [The Script Application](https://help.hcl-software.com/digital-experience/8.5/script-portlet/script_portlet.html) page for more information.

## Examples

The following are sample Script Application HTML code snippets for two different scenarios:

- [Business Card on hover](#business-card-on-hover)
- [Business Card in a page](#business-card-in-a-page)

### Business Card on hover

```html
<html>
    <body>
        <h2>Script Application Test - Business Card on Hover</h2>
        <div>
            <p>
                Please check out our newest member <button id="bizcard-trigger" class="bizcard-trigger">Sarah Jones</button>, a
                noted software engineer.
            </p>
            <business-card-on-hover
                uicontexturl="/dx/ui/people"
                apicontexturl="/dx/api/people/v1"
                portletcontexturl="/wps/portal/Practitioner/PeopleService"
                userid="sarahjones"
                trigger-id="bizcard-trigger">
            </business-card-on-hover>
        </div>
    </body>
</html>
```

### Business Card in a page

```html
<html>
    <body>
        <h2>Script Application Test - Business Card</h2>

        <p>
        Please welcome our new CEO, Emma Taylor!
        </p>

        <div style="border: 1px solid black; max-width: 325px;">
            <business-card
                uicontexturl="/dx/ui/people"
                apicontexturl="/dx/api/people/v1"
                portletcontexturl="/wps/portal/Practitioner/PeopleService"
                userid="emmataylor">
            </business-card>
        </div>
    </body>
</html>
```
