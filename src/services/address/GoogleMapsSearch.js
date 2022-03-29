class GoogleMapsSearch {
  static FIELDS = ['address_components', 'geometry'];

  static COUNTRYS = ['CA'];

  constructor() {
    this.autoCompleteService = new window.google.maps.places.AutocompleteService();
    this.geocoder = new window.google.maps.Geocoder();
  }

  search(text: string, callback: Function) {
    if (text.length < 2) return;
    this.autoCompleteService.getQueryPredictions(
      {
        input: text,
        fields: GoogleMapsSearch.FIELDS,
        componentRestrictions: { country: GoogleMapsSearch.COUNTRYS },
      },
      addresses => callback(this.formatAddress(addresses))
    );
  }

  gecode(placeId: string, callback: Function) {
    this.geocoder.geocode({ placeId }, address => callback(this.buildAddress(address)));
  }

  // eslint-disable-next-line class-methods-use-this
  formatAddress = (addresses: Array) => {
    return addresses
      ? addresses.length > 0 &&
          addresses.map(address => ({
            placeId: address.place_id,
            description: address.description,
          }))
      : [];
  };

  // eslint-disable-next-line class-methods-use-this
  buildAddress = (result, setFieldValue) => {
    if (result.length === 0) return null;
    const address = {};
    if (result[0].geometry) {
      address.location = {
        lat: result[0].geometry.location.lat(),
        lng: result[0].geometry.location.lng(),
      };
    }
    for (const addressComponents of result[0].address_components) {
      if (addressComponents.types[0] === 'postal_code') {
        address.postalCode = addressComponents.long_name;
      }
      if (addressComponents.types[0] === 'locality') {
        address.city = addressComponents.long_name;
      }
      if (!address.city && addressComponents.types[0] === 'administrative_area_level_2') {
        address.city = addressComponents.long_name;
      }
      if (addressComponents.types[0] === 'administrative_area_level_1') {
        address.state = addressComponents.long_name;
      }
      if (!address.state && addressComponents.types[0] === 'administrative_area_level_2') {
        address.state = addressComponents.long_name;
      }
    }
    return address;
  };
}

export default GoogleMapsSearch;
