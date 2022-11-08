# Packaging of event mappers and JAXB serialization

It is good practice to package event mappers in a shared library rather than together with the business portlets.

If you decide to package event mappers with more than one business portlets, the Screen Flow Manager runs JAXB-based marshalling and unmarshaling. This action prevents `ClassCastExceptions` caused by the use of one or more isolated classloaders. You can influence the behavior of the JAXB based marshalling by using specific configuration options. For more information, go to *Configuration Options*.

???+ info "Related information"
    -   [Configuration options](../../../cfg_opt.md)

