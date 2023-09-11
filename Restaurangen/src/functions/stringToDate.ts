export default function stringToDate(dateString: string) {
  // Split the input string into year, month, and day components
  const dateComponents = dateString.split('-');

  // Ensure that there are three components (year, month, day)
  if (dateComponents.length !== 3) {
    throw new Error('Invalid date format. Use yyyy-mm-dd.');
  }

  // Parse the components as integers
  const year = parseInt(dateComponents[0]);
  const month = parseInt(dateComponents[1]) - 1;
  const day = parseInt(dateComponents[2]);

  // Create a Date object
  const dateObject = new Date(year, month, day);

  return dateObject;
}