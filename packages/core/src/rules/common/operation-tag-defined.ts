import type { Oas3Rule, Oas2Rule } from '../../visitors';
import type { Oas2Definition, Oas2Operation } from '../../typings/swagger';
import type { Oas3Definition, Oas3Operation, Oas3Schema, Oas3_1Schema } from '../../typings/openapi';
import type { UserContext } from '../../walk';

export const OperationTagDefined: Oas3Rule | Oas2Rule = () => {
  let definedTags: Set<string>;

  return {
    Root(root: Oas2Definition | Oas3Definition<Oas3Schema | Oas3_1Schema>) {
      definedTags = new Set((root.tags ?? []).map((t) => t.name));
    },
    Operation(operation: Oas2Operation | Oas3Operation<Oas3Schema | Oas3_1Schema>, { report, location }: UserContext) {
      if (operation.tags) {
        for (let i = 0; i < operation.tags.length; i++) {
          if (!definedTags.has(operation.tags[i])) {
            report({
              message: `Operation tags should be defined in global tags.`,
              location: location.child(['tags', i]),
            });
          }
        }
      }
    },
  };
};
