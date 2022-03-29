export default {
  formId: 'new-store-form',
  formField: {
    name: {
      name: 'name',
      label: 'name',
      type: 'text',
      placeholder: 'eg. Apollo',
      errorMsg: 'Name is required.',
    },
    userId: {
      name: 'userId',
      label: 'contact person',
      type: 'select',
      placeholder: 'eg. Tom',
      errorMsg: 'Contact person is required.',
    },
    addressLine1: {
      name: 'addressLine1',
      label: 'Address',
      type: 'text',
      placeholder: 'eg. House No H1',
      errorMsg: 'Address is required.',
    },
    addressLine2: {
      name: 'addressLine2',
      label: 'Search address on google',
      type: 'select',
      placeholder: 'Type to search on google',
      errorMsg: 'Please search in google maps.',
    },
    city: {
      name: 'city',
      label: 'city',
      type: 'text',
      placeholder: 'eg. Toronto',
      errorMsg: 'City is required.',
    },
    state: {
      name: 'state',
      label: 'state',
      type: 'text',
      placeholder: 'eg. Ontario',
      errorMsg: 'State is required.',
    },
    postalCode: {
      name: 'postalCode',
      label: ' Postal Code',
      type: 'text',
      placeholder: 'eg. M3J 0G7',
      errorMsg: 'Postal Code is required.',
    },
    location: {
      name: 'location',
      type: 'hidden',
      errorMsg: 'Postal Code is required.',
    },
  },
};
