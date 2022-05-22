import { applyDecorators } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';

export function ExcListApiQueryPatient() {
  return applyDecorators(
    ApiQuery({ name: 'name', required: false }),
    ApiQuery({ name: 'first_name', required: false }),
    ApiQuery({ name: 'second_name', required: false }),
    ApiQuery({ name: 'phone', required: false }),
  );
}

export function ExcListApiStatusPost() {
  return applyDecorators(ApiQuery({ name: 'status', required: true }));
}
