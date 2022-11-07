# Mixed referencing

The mechanisms for referencing a single page, a single portlet, multiple pages, or multiple portlets by unique names or metadata markers can be mixed.

Example of mixed referencing.

```

<dialog name="dialog1">
 <transition-endpoint name="mixed">
     <localedata locale="en">
           <title>Subdialog 1</title>
           <description>This is a subdialog</description>
      </localedata>
      <resource uniquename="uniquename.portlet1"/>
      <resource uniquename="uniquename.page1"/
```



