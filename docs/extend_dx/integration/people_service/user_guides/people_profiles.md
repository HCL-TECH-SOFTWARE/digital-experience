# Working with people profiles

User profiles are a central entity in the people service, providing a way to manage and access information about individuals, including their personal information, skills, and more. This guide will help you understand what a profile shows, how to find and edit your own profile, and how to work with tags.

## What the Profile Shows

A user profile typically includes the following sections:

  - Profile Image: A visual representation of the user.
  - Contact Information: Email, phone number, and other contact details.
  - Personal Information: Name, date of birth, and other personal details.
  - Professional Summary: Job title, organization, and a brief professional summary.
  - Tags: Keywords that describe the user's skills, interests, and other attributes.

![Profile Page - Example Profile](./img/profile-page.png)

## Accessing user profiles

Depending on the integration mode of the People Service, user profiles can be accessed in different ways. In a standalone mode, the People Service provides a user interface that allows users to search for and view profiles. In an integrated mode, user profiles can be accessed through the integrated application, such as a Digital Experience (DX) platform.

In DX, for example, user profiles are referenced via portlets or via components or hooks that DX practicioners can use to integrate user profiles into their DX content and pages. In addition, they can be accessed through the people service business card component, which provides a quick overview of a user's profile information. Refer to the section about [working with business cards](../integration/rendering_business_card_person_tag.md) for more information.

![Person link and business card - Example](./img/person-link-business-card.png)

## Managing your own profile

Users can manage their own profiles by adding or updating their information. To manage your profile, simply navigate to your profile page after logging into DX. Click the **My Profile** link in the DX navigation to access your profile. From there, you can view and edit your personal information.

The profile page is divided into different sections, such as contact information, personal information, and professional summary. You can update your profile image, contact details, and other information by clicking the **Edit** button in the respective section. Modify the information as needed and click **Save** to save your changes.

![Profile Page - Edit Profile](./img/profile-page-edit-profile.png)

### Field validation

To ensure data accuracy and completeness, field validation is implemented. For example, email addresses are validated to ensure they are in the correct format. Error messages are displayed in the edit form if there are any issues with the information provided.

### Read only fields

Some fields in your profile may be read-only, meaning that you cannot edit them. These fields are typically populated from an external source, such as a user directory, and are managed by an administrator. If you need to update information in a read-only field, contact your administrator for assistance.

### Profile image

Your profile image is an important part of your profile, as it helps other users identify you. To update your profile image, click on the "Edit profile image" button in the profile image section. You can upload a new image or remove the existing one. Make sure to select an image that is clear and professional to represent you appropriately.

!!! Notes
    You cannot update the profile image if that field is marked as read-only.

## Working with Tags
Tags are a powerful tool for categorizing and identifying key attributes of a profile. They can represent interests, hobbies, skills, or other categorizations that help users stand out and be easily searchable within the organizational environment.

For more details on managing tags, refer to the [People Profile Tags guide](./people_profile_tags.md).