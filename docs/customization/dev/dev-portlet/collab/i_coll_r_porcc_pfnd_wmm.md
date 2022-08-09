# Member Manager and People Finder

Member Manager is the component of IBM WebSphere Application Server and HCL Digital Experience that provides the common schema of attributes used by People Finder for people and their Profile pages.

## Prerequisites

To understand how Member Manager works, you should have a thorough understanding of HCL Portal security and authentication concepts, including user registries and user repositories.

## Member Manager data types

You can select the display format of a People Finder field if the data type of the corresponding attribute in Member Manager is string. Attributes with data type string can have one of the following display formats:

-   String \(default\)

    The People Finder field appears as text.

-   Person link

    The People Finder field appears as a person name showing online presence and a person menu of actions.

-   Email address

    The People Finder field appears as a mailto: link that launches an email message to the person.

-   Web page link

    The People Finder field appears as a link to a web page


People Finder fields that correspond to Member Manager attributes that have data types other than string appear as fixed text. People Finder supports the following data types, but you cannot choose the display format for fields that correspond to attributes with these data types.

-   Integer, Long, Double

    Display format is always Numeric.

    Examples:

    ibm-firstDayOfWeek

    ibm-firstWorkDayOfWeek

-   MemberIdentifier

    Display format is always Member Link.

    Examples:

    manager \(Employee's manager. Required to build Organization view.\)

    secretary \(Name of the person's secretary or assistant\)

    seeAlso \(Person who can be contacted when this person is not available\)

-   ByteArray

    Display format is always Image.

    Example:jpegPhoto \(A jpeg format photograph\)

-   Object

    Display format is always Object.


Other data types such as Timestamp are not supported by People Finder.

**Parent topic:**[People Finder](../collab/i_coll_r_porcc_pfnd.md)

**Related information**  


[Planning for collaborative servers and portlets](../collab/i_domi_c_servers_plan.md)

