# Sample Personalization resources XML file

Use the sample file ExportFromServlet.xml as a reference for coding other Personalization actions.

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE ibm-websphere-personalization>
   <ResourceCollection action="create" name="News">
     <ResourceType>Content</ResourceType>
     <ResourceManagerClass>com.mycompany.personalization.ContentResourceManager</ResourceManagerClass>

     <ResourceDomainClass>com.mycompany.personalization.ContentResourceDomain</ResourceDomainClass>
     <ResourceClass>com.mycompany.personalization.Content</ResourceClass>
  </ResourceCollection>
  <SecurityMappings>
    <collection EnableSecurity="false" name="News"></collection>
  </SecurityMappings>
</ibm-websphere-personalization>

```

**Parent topic:**[Personalization programming reference](../pzn/pzn_programming_reference.md)

