# Rendering the business card in DX pages

Apart from rendering business card via Person Tag link, you may want to leverage them in other scenarios and use cases.

Consider a use case where you want to provide information about a person of interest on your page. This feature allows the end user to hover over a link, displaying that person's information in a popup.

This can be achieved in many ways. For the purposes of this document, we will explore how to achieve this using a Script Application.

## Script Application

Script applications are web applications built with standard libraries/frameworks and tools, running as a page component in HCL Digital Experience (DX).

You can import an application that you have developed already. The components are saved in the Web Content Manager. You can also edit the HTML, JavaScript, and CSS in the Script Application.

Please refer to [The Script Application | HCL Digital Experience](https://help.hcl-software.com/digital-experience/8.5/script-portlet/script_portlet.html) for more information.

## Examples

Here we will look at what should a script application html code snippet look like for the following scenarios:

- [Business card on hover](#business-card-on-hover)
- [Business card in a page](#business-card-in-a-page)

### Business card on hover

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

### Business card in a page

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
