# User federation

HCL People Service stores user data and manages properties connected to the user to enable the service's features. It needs to be able to access, contextualize, and consolidate user data from user directories with its internal data model. User federation is the process of linking existing user directories to People Service to make user data available to the service. 

## Unified user directory

HCL People Service can be configured to federate multiple user directories so it can access user data from multiple sources and consolidate the data into a single user object. The unified user directory is a virtual directory that aggregates user data from multiple user directories and presents it to People Service.

## Supported user directories

People Service supports user directories compatible with the LDAP protocol such as OpenLDAP and Active Directory. To utilize these directories, People Service requires appropriate configuration and mapping of user properties. This is a one-time setup that needs to be done during the initial configuration of the service.

Companies frequently store user data in additional or adjacent systems that may not necessarily be compatible with the LDAP protocol. In such cases, People Service can be extended to support custom user directories. It defines a RESTful API schema that custom directories need to follow in order to be integrated with People Service. This allows the service to access user data from a wide range of systems and applications. For more information about custom directories, refer to [Custom RESTful directories](./custom_restful_directories.md).
