# User federation

User federation is the process of linking existing user directories to the People Service to make user data available to it. HCL People Service itself stores user data and manages properties connected to the user in order to surface or work with them. Due to this, the People Service needs to be able to access, contextualize and consolidate user data from the user directories with the internal data model of the People Service.

## Unified user directory

The People Service can be configured to federate multiple user directories. This allows the People Service to access user data from multiple sources and consolidate it into a single user object. The component responsible for this is the unified user directory. The unified user directory is a virtual directory that aggregates user data from multiple user directories and presents it as a single source of truth to the People Service.

## Supported user directories

The People Service supports user directories compatible with the LDAP protocol. This includes directories such as OpenLDAP and Active Directory. For this, the People Service requires appropriate configuration and mapping of user properties. This is a one-time setup that needs to be done during the initial configuration of the People Service.

Companies frequently store user data in additional or adjacent systems that may not necessarily be compatible with the LDAP protocol. In such cases, the people service can be extended to support custom user directories. It defines a RESTful API schema that custom directories need to adhere to in order to be integrated with the people service. This allows the people service to access user data from a wide range of systems and applications. More information about custom directories can be found in the [Custom RESTful directories]() section.
