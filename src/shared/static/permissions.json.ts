import { ListPermissions } from './permissions';

export const LIST_PERMISSIONS = [
  {
    name: 'Crear ejercicio',
    key: ListPermissions.CREATE_EXERCISE,
    group_key: 'exercises',
    group_name: 'ejercicios',
    internal: false,
  },
  {
    name: 'Ver ejercicios',
    key: ListPermissions.GET_EXERCISES,
    group_key: 'exercises',
    group_name: 'ejercicios',
    internal: false,
  },

  {
    name: 'Actualizar ejercicios',
    key: ListPermissions.UPDATE_EXERCISE,
    group_key: 'exercises',
    group_name: 'ejercicios',
    internal: false,
  },
  {
    name: 'Eliminar ejercicios',
    key: ListPermissions.DELETE_EXERCISE,
    group_key: 'exercises',
    group_name: 'ejercicios',
    internal: false,
  },
  {
    name: 'Crear dietas',
    key: ListPermissions.CREATE_DIET,
    group_key: 'diets',
    group_name: 'dietas',
    internal: false,
  },
  {
    name: 'Ver dietas',
    key: ListPermissions.GET_DIET,
    group_key: 'diets',
    group_name: 'dietas',
    internal: false,
  },
  {
    name: 'Actualizar dietas',
    key: ListPermissions.UPDATE_DIET,
    group_key: 'diets',
    group_name: 'dietas',
    internal: false,
  },
  {
    name: 'Eliminar dietas',
    key: ListPermissions.DELETE_DIET,
    group_key: 'diets',
    group_name: 'dietas',
    internal: false,
  },

  {
    name: 'Crear cliente y cliente de especialista',
    key: ListPermissions.CREATE_CUSTOMER_AND_CUSTOMER_SPECIALIST,
    group_key: 'customer_specialist',
    group_name: 'cliente de especialista',
    internal: false,
  },

  {
    name: 'Crear cliente de especialista',
    key: ListPermissions.CREATE_CUSTOMER_SPECIALIST,
    group_key: 'customer_specialist',
    group_name: 'cliente de especialista',
    internal: false,
  },

  {
    name: 'Obtener clientes asociados',
    key: ListPermissions.GET_ASSOCIATED_CUSTOMERS,
    group_key: 'customer_specialist',
    group_name: 'cliente de especialista',
    internal: false,
  },
  {
    name: 'Crear rutinas',
    key: ListPermissions.CREATE_ROUTINE,
    group_key: 'routines',
    group_name: 'rutinas',
    internal: false,
  },
  {
    name: 'Ver rutinas',
    key: ListPermissions.GET_ROUTINE,
    group_key: 'routines',
    group_name: 'rutinas',
    internal: false,
  },
  {
    name: 'Actualizar rutinas',
    key: ListPermissions.UPDATE_ROUTINE,
    group_key: 'routines',
    group_name: 'rutinas',
    internal: false,
  },
  {
    name: 'Eliminar rutinas',
    key: ListPermissions.DELETE_ROUTINE,
    group_key: 'routines',
    group_name: 'rutinas',
    internal: false,
  },

  {
    name: 'Obtener detalles de cliente',
    key: ListPermissions.GET_CUSTOMER_DETAILS,
    group_key: 'customer_specialist',
    group_name: 'cliente de especialista',
    internal: false,
  },

  {
    name: 'Obtener detalles de especialista',
    key: ListPermissions.GET_SPECIALIST_DETAILS,
    group_key: 'customer_specialist',
    group_name: 'cliente de especialista',
    internal: false,
  },
];
