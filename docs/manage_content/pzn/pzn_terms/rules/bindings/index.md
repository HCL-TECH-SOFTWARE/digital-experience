# Bindings

Bindings combine actions and profilers to specify actions to perform when defined conditions are encountered. Returned content can be sorted or filtered prior to display or use. Actions can be set to be performed by always, exclude, and otherwise blocks. In addition, the total number of items used can be limited.

The always and exclude blocks will always be performed no matter what the outcome of the profiler execution, but the otherwise block will only be run if none of the profilers match. An otherwise block works the same as an always blocks in that it adds items to the results, but for an exclude block, you actually choose an action that defines items that you don't want to include in the results. For example, on a shopping site, you may want to exclude items that have already been purchased.

-   **[Example: Simple binding](../pzn/pzn_example_simple_binding.md)**  
Because bindings couple the conditional processing of a profiler with the functional power of an action, the simplest form of a binding works like a conditional "if-then" clause.
-   **[Example: Multiple profilers and optional actions](../pzn/pzn_example_multiple_profilers_optional_actions.md)**  
View an example that demonstrates the use of a conditional "if-then" with an additional clause as a profiler for your HCL Digital Experience ortal site.
-   **[Example: Nested bindings \(simple\)](../pzn/pzn_example_nested_bindings.md)**  
When creating a binding, it is possible to use a binding in any of the `do action` areas. This is known as a nested binding.
-   **[Example: Nested bindings \(advanced\)](../pzn/pzn_example_nested_bindings_adv.md)**  
View an example that demonstrates advanced nested bindings.
