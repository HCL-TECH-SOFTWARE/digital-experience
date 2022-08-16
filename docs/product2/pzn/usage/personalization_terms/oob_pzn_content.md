---
id: oob_pzn_content
title: Content that you personalize
---
import useBaseUrl from '@docusaurus/useBaseUrl';



You can personalize specific content spots of your intranet and internet website. For example, you can personalize a list of new articles that appears on the website based on the visitors geographical location. You can personalize employee bulletins for specific groups of employees, such as changes to benefit plans. You can personalize a product list on a commerce website.

When selecting the content to personalize, you must consider the associations between the content and visitors. For an intranet site, you may have some articles that are intended for a specific group of employees, such as managers. Effective personalization is based on defining what content you want to be seen by each type of visitor.

After you determine what to personalize, your web developer must create a set of resource collections and application objects. The resource collection and application objects form the business vocabulary. Personalization uses the business vocabulary to make decisions.

-   **Resource collections**

    A Java class that represents and allows access to a collection of resource instances. It is similar to a database table with a fixed schema and a number of rows. Resource collection classes must implement the com.ibm.websphere.personalization.resources.ResourceDomain3 interface. Rational Application Developer provides a wizard that can create resource collections that store data in SQL databases or LDAP repositories.


-   **Application objects**

    An application object is a Java object existing at a known location in the request context. To define an application object specify the class name and a key to find the class. Personalization calls methods on these objects during rule execution and uses their results in its decision making. Application Objects that implement the SelfInitializingApplicationObject interface are automatically instantiated as needed by Personalization.


The web developer has two options for developing the objects.

-   IBM® Rational® Application Developer includes personalization wizards.
-   There is a set of public programming interface for Personalization.

The web developer must also register the resource collections and application objects with the Personalization server. There are two ways the developer can register them:

-   Use the Personalization Browser to import the .hrf file that defines the resource collection.
-   Manually create the references in the Personalization Browser.

