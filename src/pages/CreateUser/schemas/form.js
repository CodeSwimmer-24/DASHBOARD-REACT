export default {
  formId: 'new-user-form',
  formField: {
    firstName: {
      name: 'firstName',
      label: 'first name',
      type: 'text',
      placeholder: 'eg. Micheal',
      errorMsg: 'First name is required.',
    },
    lastName: {
      name: 'lastName',
      label: 'last name',
      type: 'text',
      placeholder: 'eg. Prior',
      errorMsg: 'Last name is required.',
    },
    email: {
      name: 'email',
      label: 'email address',
      type: 'email',
      placeholder: 'eg. soft@dashboard.come',
      errorMsg: 'Email address is required.',
      invalidMsg: 'Your email address is invalid',
    },
    phoneNumber: {
      name: 'phoneNumber',
      label: 'phone number',
      type: 'text',
      placeholder: 'eg. 99999999',
      errorMsg: 'Phone number is required.',
      invalidMsg: 'Your phone number is invalid',
    },
    roles: {
      name: 'roles',
      label: 'role',
      type: 'select',
      options: [
        {
          value: 'store-owner',
          label: 'Store owner',
        },
        {
          value: 'dispatcher',
          label: 'Dispatcher',
        },
        {
          value: 'driver',
          label: 'Driver',
        },
      ],
      placeholder: 'eg. store owner',
      errorMsg: 'role is required.',
    },
  },
};
