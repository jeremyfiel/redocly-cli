import type { Oas3Rule, Oas2Rule } from '../../visitors.js';
import type { UserContext } from '../../walk.js';

export const PathNotIncludeQuery: Oas3Rule | Oas2Rule = () => {
  return {
    Paths: {
      PathItem(_operation: object, { report, key }: UserContext) {
        if (key.toString().includes('?')) {
          report({
            message: `Don't put query string items in the path, they belong in parameters with \`in: query\`.`,
            location: { reportOnKey: true },
          });
        }
      },
    },
  };
};
