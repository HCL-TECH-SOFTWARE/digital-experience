# Application integration

A portal provides access to content, data, and services that are located throughout the enterprise. These services include predefined connectors and portlets, and tools for creating additional connectors and portlets.

Enterprise resource planning \(ERP\) and customer relationship management \(CRM\) systems are excellent candidates for portlets because efficient, personalized access to these functions provides measurable return on your portal investment. HCL provides connectors to enterprise applications by using the Java Connector Architecture \(JCA\).

## Standard Java connectors

JCA is a standard architecture for integrating Java 2 Enterprise Edition \(J2EE\) applications with enterprise information systems that are not relational databases. Each of these systems provides native APIs for identifying a function to call, specifying its input data, and processing its output data. The goal of the JCA is to provide an independent API for coding these functions.

JCA also defines a standard Service Provider Interface \(SPI\) for integrating the transaction, security, and connection management facilities of an application server with those of a transactional resource manager. Thus, JCA is a standards-based approach to managing connections, transactions, and secure access to enterprise application systems. IBM JCA connectors provide access to systems such as SAP, PeopleSoft, J.D. Edwards, Oracle Enterprise Edition, CICS, IMS, and Host-on-Demand. Leveraging its CrossWorlds acquisition, HCL plans to develop and integrate JCA connectors to many other systems.

Rational® Application Developer provides a complete development and unit test environment for applications that use JCA connectors, Web services, and microflows. Rational Application Developer tools include support for Web Service Definition Language \(WSDL\), developer versions of the connectors, the Web Services Invocation Framework \(WSIF\), and the microflow engine.

**Parent topic:**[Integration](../overview/integration.md)

