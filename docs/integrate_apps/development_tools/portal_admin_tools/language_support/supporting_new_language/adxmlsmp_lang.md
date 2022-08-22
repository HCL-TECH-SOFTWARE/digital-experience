# XML samples for creating or removing language definitions

You can modify these XML samples and use them to create or remove language definitions from your portal.

The following XML sample shows how you use the XML configuration interface to create Japanese language in your portal:

```
<request xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" type="update"
         xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd">
     <portal action="locate">
          <language action="update" domain="rel" locale="ja">
          <localedata locale="ja">
           <title>Japanese</title>
          </localedata>
          </language>
     </portal>
</request>
```

The following XML sample shows how you use the XML configuration interface to remove Japanese language in your portal:

```
<request xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" type="update"  
         xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd">
    <portal action="locate">
         <language action="delete" domain="rel" locale="ja">
         <localedata locale="ja">
           <title>Japanese</title>
         </localedata>
         </language>
    </portal>
</request>
```


**Related information**  


[Sample XML configuration files](../admin-system/admxmsmp.md)

[Working with the XML configuration interface](../admin-system/adxmltsk.md)

[How to control the behavior of the language fallback filter](../admin-system/adlangflt.md)

