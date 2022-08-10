# Writing custom design templates

HCL Digital Experience Version 9 enables the user to integrate with Watson Content Hub. You can use the extra features in Version 9 to extend Watson Content Hub with the JSON rendering plug-in. Assets that are stored in Watson Content Hub might have extra attributes in the metadata that are accessible to portal. The JSON rendering plug-in allows the user to access these attributes and enable custom configurations in HCL Portal.

After you configure the asset, the JSON for each content item is saved in a HCL Web Content Manager element called **Asset**. If you open the content item, you can view the JSON object that is returned from Watson Content Hub. The following example shows an asset data JSON that can be accessed by the JSON rendering plug-in:

```
{
	"id": "asset:b11f8ac1-903b-468d-a815-9a28789fcda0",
	"name": "active-1868780_640.jpg",
	"assetType": "image",
	"resource": "c183b6ae2fb90b46c219ebc3b94770e6",
	"path": "/dxdam/03/03b9f89e-1873-432f-9fac-86b95954d6a0/active-1868780_640.jpg",
	"mediaType": "image/jpeg",
	"tags": ["honey", "sport", "stinger", "bike", "cycling", "loc"],
	"document": {
		"mediaType": "image/jpeg",
		"name": "active-1868780_640.jpg",
		"path": "/dam/03/03b9f89e-1873-432f-9ac-86b95954d6a0/active-1868780_640.jpg",
		"digest": "sEgNRLqktavv52Sb/3pXTQ==",
		"assetType": "image",
		"categoryIds": [],
		"fileName": "active-1868780_640.jpg",
		"creatorId": "dffc3f4b-1bd5-4353-8f3e-f910e174defc",
		"fileSize": 143206
	}
}

```

1.  Log on to HCL Digital Experience.

2.  Configure an asset with the **Asset Picker**.

3.  Turn on **Edit Mode** from the action bar. Site Manager opens automatically.

4.  From the Watson Content Hub portlet, click **Open edit form**.

5.  View the **Asset** element to check available attributes.

6.  Find the attribute that you want to use.

7.  Create an HTML element in the Web Content Manager library editor.

8.  In the new HTML element, call the JSON rendering plug-in in the following format with the attribute name that you want returned:

    ```
    [Plugin:CHJsonProvider  json=[Element key='asset' type='content' context='current'] key="customAttributeName"]
    ```


When the page renders, your HTML element displays the JSON attributes value.

**Parent topic:**[Integrating with Watson Content Hub](../integrate/int_dch.md)

