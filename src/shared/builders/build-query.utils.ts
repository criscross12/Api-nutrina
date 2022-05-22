import { ConfigBuildQuery } from '../interfaces/configBuildQuery.paginate';

export const buildQuery = (
  queryObject: object,
  configBuildQuery: ConfigBuildQuery[],
) => {
  const ands: object[] = [];
  const ors: object[] = [];
  const and: object = {};
  for (const modelKey in queryObject) {
    const value = queryObject[modelKey];
    if (value) {
      configBuildQuery.forEach((confiProp: ConfigBuildQuery) => {
        const as = confiProp.as ? confiProp.as : confiProp.prop;
        if (as == modelKey) {
          if (confiProp.isArray) {
            if (confiProp.isAnd) and[confiProp.prop] = { $in: value };
            if (confiProp.isOr) {
              const or = {};
              const listValueOr = [];
              value.map((item) => listValueOr.push(new RegExp(item, 'i')));
              or[confiProp.prop] = { $in: listValueOr };
              ors.push(or);
            }
          } else {
            if (confiProp.isAnd) and[confiProp.prop] = value;
            if (confiProp.isOr) {
              const or = {};
              or[confiProp.prop] = new RegExp(value, 'i');
              ors.push(or);
            }
          }
        }
      });
    }
  }
  if (ors.length > 0) ands.push({ $or: ors });
  ands.push(and);
  return Object({ $and: ands });
};
