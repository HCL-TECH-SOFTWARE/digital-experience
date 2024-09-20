# Accessing HCL People Service

This section provides steps on how to view person's business card and navigate to their profile.

## Using Person Tag

The Collaborative Service API offers a set of methods and JavaServer Page (JSP) tags that enable developers to integrate Lotus collaborative features into their portlets for HCL Portal or other application servers. These services can be utilized to create new custom portlets or to enhance existing portlets with collaborative functionalities, such as menus or person links.

Included in the Collaborative Services is a JSP tag library descriptor (TLD) for a person tag. When incorporated into your custom portlet, the person tag transforms people's names into hyperlink. Hovering over an active (underlined) name displays the business card, and clicking the hyperlink opens that person's profile page in a new tab. If HCL Portal cannot recognize the person's name, it will display the name as plain text, and the business card will not be available.

!!!note
    Currently the business card does not support any customization like adding or removing fields unlike **Person Card**

You can configure the amount of time that the Person card displays by modifying the personTagTimeout custom property.

The tag library for Collaborative Services that includes the person tag is installed on the portal server in the following locations:

- Windows™

PortalServer_root\pcc.impl\people.iml\persontag\taglib\people.tld\people\people.impl\persontag\taglib\shared\app\WEB-INF\tld

- UNIX™ and Linux™

PortalServer_root/pcc.impl/people.iml/persontag/taglib/people.tld/people/people.impl/persontag/taglib/shared/app/WEB-INF/tld

!!!note
    You do not need to copy or move the .tld file anywhere within your portal project; you need only refer to its location in your portal installation. You need a reference to it in the JSP file for every portlet that you deploy that uses the person tag.

!!!warning "Reference (To be removed)"
    [Collaborative Services API and the person tag](../../../extend_dx/portlets_development/collaborative_services_api_person_tag/index.md)

## Rendering business card using Script Application

!!!tbd "TBD"
    Need to discuss if we need to include this approach for rendering a business card for a person.
