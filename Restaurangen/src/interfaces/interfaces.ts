export interface IRestaurant {
  name: string;
  address: {
    street: string;
    zip: string;
    city: string;
  };
}

export interface IBooking {
  restaurantId: string;
  date: string;
  time: string;
  numberOfGuests: number;
  customer: {
    name: string;
    lastname: string;
    email: string;
    phone: string;
  };
}

export interface IBookingUpdate {
  id: string;
  restaurantId: string;
  date: string;
  time: string;
  numberOfGuests: number;
  costumerId: string;
}

export interface IFetchedBooking {
  id: string;
  restaurantId: string;
  date: string;
  time: string;
  numberOfGuests: number;
  customerId: string;
}