# Resources, resource instances, and resource collections

Before you can personalize HCL Digital Experience resources, you need to understanding the terms for portal objects stored in the content repository.

A resource is a Java™ class that defines the properties of a user or content object. In database terms, it is analogous to the database schema that defines the column names and types for a database table. Resource classes must implement the com.ibm.websphere.personalization.resources.Resource interface

A resource instance is an instance of the resource class. Again, using a database analogy, the resource instance is similar to a row of a database table because it contains actual values for each property defined by the resource.

A resource collection is a Java class that represents and allows access to a collection of resource instances. It is similar to a database table with a fixed schema and a number of rows. Resource collection classes must implement the com.ibm.websphere.personalization.resources.ResourceDomain3 interface. Rational Application Developer provides a wizard that can create resource collections that store data in SQL databases or LDAP repositories. The classes that can make up the resource collection are as follows:

-   **Resource Class**

    An instance of `com.ibm.websphere.personalization.resources`.

-   **Resource Manager Class**

    An instance of `com.ibm.websphere.personalization.resources.ResourceManager3`.

-   **Domain Class**

    An instance of `com.ibm.websphere.personalization.resources.ResourceDomain3`.

-   **Translator Class**

    An instance of `com.ibm.websphere.personalization.resources.AuthIDTranslator`.


For more details, refer to the Javadoc API documentation for Personalization APIs You can provide your own implementation of these classes or use the RAD Personalization Wizard to generate classes that query against SQL or LDAP repositories.

While resources, resource instances, and resource collections are easily mapped to familiar database concepts, it is important to note that the actual content store they refer to does not have to be a database table. It can be a file system, an LDAP repository, an XML store, or virtually any content store accessible by Java.

**Parent topic:**[Personalization terms ](../pzn/pzn_concepts.md)

**Next topic:**[User resources ](../pzn/pzn_user_resources.md)

**Parent topic:**[Personalization terms ](../pzn/pzn_concepts.md)

**Next topic:**[User resources ](../pzn/pzn_user_resources.md)

