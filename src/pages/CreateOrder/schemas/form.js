export default {
  formId: 'new-user-form',
  formField: {
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
    storesId: {
      name: 'storesId',
      label: 'storesId',
      type: 'hidden',
      placeholder: 'eg. store owner',
      errorMsg: 'role is required.',
    },
  },
};
