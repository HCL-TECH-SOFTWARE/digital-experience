---
tags:
    - DAM
    - Asset Management
    - Digital Asset Management
hide: tags
---

# Digital Asset Management (DAM)

HCL DX provides integrated digital asset management services, targeted at managing web ready digital assets such as images or videos for use in content and sites built with HCL DX.

## Content Organization and Access

Assets are organized into collections, and access can be controlled to the top-level set of collections. Within a collection, sub-collections can be created so you can keep your content well organized. Each collection can store images, videos and other files.

![DAM - Collections View](assets/dam-collection-view.png)

## Rendition Generation

For images stored in the DAM, renditions are automatically generated for desktop, smartphone and mobile form factors. The sizes generated can be customized and additional renditions configured (see below). Individual images can be cropped from within the DAM, without needing to round-trip with any image editing software.

![DAM - Image Editor](assets/dam-image-editor.png)

## Integrations

Out of the box, the DAM provides 2 integrations.

* Video file management can be delegated to [Kaltura video content management system](https://corp.kaltura.com/video-content-management-system/). When this is configured, videos are synchronized with Kaltura and can be delivered via that service. This enables you to deliver adaptive video within your web experiences
* Image assets can be automatically tagged using [Google Vision](https://cloud.google.com/vision/docs/detect-labels-image-api). This enables you to enrich the meta-data available for images stored in the DAM.

Both can be customized or replaced with customers' own preferred solutions if desired.

## Extensibility

The DAM supports user-defined custom renditions and transformations for images. This feature can be used to integrate with third-party plug-ins for custom asset processing. For example this could be used to resize, crop, rotate, or other custom operations, and many more, while supporting default and custom renditions.