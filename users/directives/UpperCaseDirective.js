import { SchemaDirectiveVisitor } from 'apollo-server';
import { defaultFieldResolver }from 'graphql';

// Create (or import) a custom schema directive
class UpperCaseDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function (...args) {
      const result = await resolve.apply(this, args);
      if (typeof result === 'string') {
        return result.toUpperCase();
      }
      return result;
    };
  }
}

export default UpperCaseDirective;