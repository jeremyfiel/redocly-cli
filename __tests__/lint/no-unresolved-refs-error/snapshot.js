// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint no-unresolved-refs-error 1`] = `

validating /openapi.yaml...
[1] openapi.yaml:19:17 at #/paths/~1pet~1findByStatus/get/responses/200/content/application~1json/schema

Can't resolve $ref

17 |             application/json:
18 |               schema:
19 |                 $ref: '#/components/schemas/ApiResponse'
   |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
20 | components:
21 |   schemas:

Error was generated by the no-unresolved-refs rule.


/openapi.yaml: validated in <test>ms

❌ Validation failed with 1 error.
run with \`--generate-ignore-file\` to add all problems to ignore file.


`;