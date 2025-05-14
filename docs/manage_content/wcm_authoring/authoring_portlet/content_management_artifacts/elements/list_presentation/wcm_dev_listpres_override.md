# List presentation override

To override the list presentation used in list rendering, modify the request parameter or request attribute `ListPresentationId` to set the ID, or `ListPresentation` to set the name path.

To override a list presentation via the request attribute, open the presentation template or component design where you want to add the list:

1.  Click **Insert Tag**.
2.  Select **Plugin Component**.
3.  Select **Rendering State**.
4.  Select **Request Attribute Plug-in**.
5.  Click **OK**.

!!!Example
     An item has a component reference element that refers to a list presentation component called "list presentation". It also has a component reference element that refers to a list component (menu, navigator, search, or personalization component) named "list". You can edit the tag with the details of the list presentation to override and pair it with a matching element tag.

To set the ID, use the example below:

```
[Plugin:RequestAttribute key="ListPresentationId" compute="once" value="[Element context='...' type='...' key='list presentation' format='id']"]
[Element context="..." type="..." key="list"] 
[Plugin:RequestAttribute key="ListPresentationId" mode="delete"]
```

To set the path, use the example below:

```
[Plugin:RequestAttribute key="ListPresentation" compute="once" value="[Element context='...' type='...' key='list presentation' format='namepath']"]
[Element context="..." type="..." key="list"]
[Plugin:RequestAttribute key="ListPresentation" mode="delete"]
```

## HCLSoftware U learning materials

To learn more details on how to develop with HCL Digital Experience (DX) Web Content, go to the [Web Content Development lesson in the HCL Digital Experience for Developers (Intermediate)](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3500){target="_blank"} course. You can try it out using the [Web Content Development Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Web_Content_Development.pdf){target="_blank"} and corresponding [Web Content Development Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-200_Web_Content_Development_Lab_Resources.zip){target="_blank"}.
