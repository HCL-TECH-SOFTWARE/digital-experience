# Email action or promotion

View the prerequisites for creating an email action or promotion within the Personalization workspace.

An email promotion is an email message automatically sent to a defined list of recipients by a running rule. Email promotions can be sent once or repeatedly on regular intervals. The body of the email message is derived from a file on the server, such as a text file, an HTML file, or even a JSP containing content spots for rules. This file can be chosen from the authoring repository. The list of recipients can be derived dynamically from a rule. Email promotions are implemented by using a rule event to trigger an email rule on a schedule.

Before you can create an email action or promotion within the Personalization workspace, you need the following:

-   A user resource: This resource contains information about potential email recipients, and can be created with the Personalization resource wizard in Rational Application Developer. The resource must include a string that represents the email address of the recipients \(in the form "username@domain"\). The string must be published to the workspace server and to the run time environment.

-   An email body: The body of the email is a flat text, HTML or JSP file that must exist on a server accessible from the run time environment. Typically, this file is created in Rational Application Developer. The location of the file in the run time environment must be specified as a URI when you create the email rule. The email body HTML or JSP page must be on the server, which is sending the email.

-   An email rule: The email rule specifies to whom the email must be sent, who is sending it, and identifies the email body as a URI.
-   A rule to determine recipients \(for emails that are triggered on a schedule or periodically, optional for email actions\): This rule can be a select content action or a binding, but must return a collection of recipients from the user resource that was previously mentioned. The action or rule you create becomes an option of the **To** list. If your actions or rules are not properly defined, the **To** list displays "No Matching Rules".

    It is possible to create email actions or promotions that are sent to a predefined address or list of addresses. This task is done by typing them into the **To** field when you create the email action or promotion.

-   A rule event \(for emails that are triggered on a schedule or periodically\): The rule event binds the email rule to the rule, which determines the recipients. The rule event says that at a given time or times in the future, a specific rule must be run once for each user in a list. That list is determined by the rule to determine recipients.


For more information about configuring email activities, see *configuring email activity accounts*.

**Parent topic:**[Rules](../pzn/pzn_rules.md)

**Parent topic:**[Rules](../pzn/pzn_rules.md)

