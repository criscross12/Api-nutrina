import { Transform } from 'class-transformer';

export const TransformToNumber = () =>
  Transform(
    (value: any) => {
      try {
        return Number.parseInt(value.value);
      } catch (error) {
        return value.value;
      }
    },
    { toClassOnly: true },
  );
