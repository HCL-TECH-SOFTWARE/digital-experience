# Deploy dialog sets by using the XML configuration interface

You can use the portal XML configuration interface \(XMLAccess\) to work with dialog sets.

You can import dialog sets by specifying the value `create` for the `action` attribute.

Code sample

```

 <request type="update" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="PCM_1.0.xsd">
 
  <portal action="create">
     <dialog-set>
         <dialog name="dialog1">
             ...
         </dialog>
         ...
      </dialog-set>
  </portal>
 </request>

```

You can export dialog sets by specifying the value `export` for the `action` attribute. For example, you can use this option for staging or migration purposes. The following code sample shows how you can export a single dialog definition `dialog1`.

Code sample

```

 <request type="update" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="PCM_1.0.xsd">
 
  <portal action="export">
     <dialog-set>
         <dialog name="dialog1">
     </dialog-set>
  </portal>
 </request>

```

When you export dialog sets or definitions, you can use wildcards. The following code sample shows how to export all available dialog definitions.

Code sample

```

 <request type="update" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="PCM_1.0.xsd">
 
  <portal action="export">
      <dialog-set>
          <dialog name="*">
      </dialog-set>
  </portal>
 </request>

```

The following code sample shows how to export all dialog definitions with the name that starts with the string `toBeExported`.

Code sample

```

<request type="update" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="PCM_1.0.xsd">
 
    <portal action="export">
        <dialog-set>
            <dialog name="toBeExported*">
        </dialog-set>
  </portal>
 </request>

```

The following code sample shows how to export all dialog definitions with the name that ends with the string `toBeExported`.

Code sample

```

 <request type="update" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="PCM_1.0.xsd">
 
  <portal action="export">
      <dialog-set>
          <dialog name="*toBeExported">
      </dialog-set>
  </portal>
 </request>

```

The following code sample shows how to export all dialog definitions with the name that contains the string `toBeExported`.

Code sample

```

 <request type="update" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="PCM_1.0.xsd">
 
  <portal action="export">
      <dialog-set>
          <dialog name="*toBeExported*">
      </dialog-set>
  </portal>
 </request>

```

You can delete dialog sets by specifying the value `delete` for the `action` attribute. The following code sample shows how to delete a single dialog definition with the name `dialog1`. You can use the same wildcards as for exporting.

Code sample

```

 <request type="update" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="PCM_1.0.xsd">
 
  <portal action="delete">
      <dialog-set>
          <dialog name="dialog1">
      </dialog-set>
  </portal>
 </request>

```

**Note:** You cannot use the XML configuration interface to merge an updated dialog definition with an existing one that you imported earlier. The XMLAccess request type `update` overwrites the specified existing portal resource with the new one. Therefore, if you want to merge a previous dialog definition with a newer one, you need to manually merge the two XML scripts. To merge the two XML scripts, make sure that the new dialog definition contains both the new sections and the old sections that you want to preserve.

**Parent topic:**[Transitions](../screenflow/transitions.md)

**Related information**  


[Staging and migration ](../screenflow/stg_mig.md)

