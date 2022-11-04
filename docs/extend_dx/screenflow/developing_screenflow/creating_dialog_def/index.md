# Creating dialog definitions

With the Screen Flow Manager, different teams or even third-party vendors can develop different types of user interface artifacts. The user puts together the correct set of user interface artifacts and creates the declarative model in XML known as the dialog definition. The dialog definition describes the specific screen flow that is also known as dialog, which consists of multiple steps and single steps referred to as subdialogs. The dialog definition contains all information about the subdialogs that participate and the transitions that route the user from one subdialog to another.

## Dialogs

Dialogs, also known as dialog definitions, define all the artifacts of which a single dialog is comprised. They define the resources such as pages and portlets, also called transition endpoints, that are part of the specific dialog. Dialog definitions also define the transitions that route a user from one subdialog to another. For more information, go to *Transition endpoints* and *Transitions*. You can define dialog definitions by using a unique name. For example, in a travel site, the flight booking step can be described as a dialog, which defines artifacts such as Passenger information portlet, and Travel dates portlet.

```
  <dialog-set>
      <dialog name="dialog1">
          <transition-endpoint name="portlet1">
              ...
          </transition-endpoint>
          <transition-endpoint name="portlet2">
              ...
          </transition-endpoint>
          <transition>
              ...
          </transition>
          <transition>
              ...
          </transition>
     </dialog>
  </dialog-set>
```

During run time, dialog definitions form the templates from which concrete dialog instances are created. These instances are uniquely identified by DialogInstanceIDs.

Dialogs are scoped to virtual portals. This scoping means that a screen flow that is running in one virtual portal does not show in another virtual portal or vice versa.

## Dialog sets

Dialog sets can contain one or more screen flow definitions. For example, in a travel site the Flight booking dialog and Car booking dialog that working together can be referred to as Dialog sets.

```
  <dialog-set>
   <dialog name="dialog1">
       ...
   </dialog>
   <dialog name="dialog2">
       ...
   </dialog>
  </dialog-set>
```





