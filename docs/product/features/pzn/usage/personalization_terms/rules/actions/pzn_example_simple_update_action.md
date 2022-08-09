# Example: Simple update action

View an example of an update action that is part of a Web site that allows visitors to manage certain information and preferences about themselves.

When executed, the following update action will write to the fields `(Income Group`, `Role`\) in the data store for the record associated with the current user \(the current Web site visitor\), using data contained in the current user's session variables, such as `incomeGroup` and `role`.

## Update action

```
Update
  	     current Portal Users.Income Group set to current Session.incomeGroup
  	     current Portal Users.Role set to current Session.role
  	     current Portal Users.Last Name set to current Session.lastName
  	     current Portal Users.Title set to current Session.title 
```

**Parent topic:**[Actions](../pzn/pzn_actions.md)

**Parent topic:**[Actions](../pzn/pzn_actions.md)

