import { IFetchedBooking } from "../interfaces/interfaces";

export const checkAviability = (time: string, date: Date, guests: string, bookings: IFetchedBooking[]) => {
  const dateToCheck = date.toISOString().slice(0, 10);
  const guestsAmount = parseInt(guests);
  let tables = 1;

   //om antalet gäster är mindre än 6=1 bord, 12=2 bord
  if (guestsAmount > 6 && guestsAmount <= 12) {
      tables = 2;
  } else if (guestsAmount > 12 && guestsAmount <= 18) {
      tables = 3;
  } else if (guestsAmount > 18 && guestsAmount <= 24) {
      tables = 4;
  } else if (guestsAmount > 24 && guestsAmount <= 30) {
    tables = 5;
  }

  //Gör en array med andra bokningar för samma tid och datum tiden och datumet
  const filteredArray = bookings.filter(booking => booking.date === dateToCheck && booking.time === time);

  // loopa igenom filteredArray och räkna ut antal bord baserat på antal gäster per sällskap
  const tablesOccupiedArray: number[] = [];

  // OBS Bara upp till 12 gäster, ändra senare

  filteredArray.map(booking => {
    if (booking.numberOfGuests > 6) {
      tablesOccupiedArray.push(2);
    } else if (booking.numberOfGuests > 12) {
      tablesOccupiedArray.push(3);
    } else if (booking.numberOfGuests > 18) {
      tablesOccupiedArray.push(4);
    } else if (booking.numberOfGuests > 24) {
      tablesOccupiedArray.push(5);
    }
    else {
      tablesOccupiedArray.push(1);
    }
  })

  let tablesOccupied = 0;


  tablesOccupiedArray.map(table => {
    tablesOccupied += table;
  })

  console.log('upptagna bord:', tablesOccupied);
  console.log('bokade bord:', tables)
  console.log('antal gäster:', guestsAmount);

  return (tables < (15 - tablesOccupied) ? true : false);
}