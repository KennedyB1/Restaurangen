Restaurangen

Sidor 

Startsidan, bokningssida och en kontaktsida

Beskrivning

Utgå ifrån att restaurangen har 15 bord för sex personer vid varje bord. Restaurangen har två sittningar varje kväll, en klockan 18:00 och en klockan 21:00. Detta innebär att samtliga bord bör gå att boka två gånger per kväll.Skapa utifrån detta en applikation där det går att söka fram information för ett givet datum eller vecka. Användaren skall kunna välja en tid för den valda dagen. Samla in personuppgifter, upplys om gdpr och se till att bokningen genomförs.I ett adminläge bör bokningar kunna administreras (modifieras, tas bort, lägga till) för personalen på restaurangen.

Teknisk beskrivning

Som frontend skall ni skapa ett react-projekt med hälp av create-react-app och mallen typescript. Som backend behöver ni skapa er egen databas och ett api, på samma sätt som ni tidigare har gjort. Att söka tillgängliga bord bör göras via ett formulär där användaren får ange antal personer (1-6) och önskat datum. En sökning görs via ett API-anrop och ett resultat presenteras för användaren. Om det fanns bord kvar så visas vilken/vilka tider som är tillgängliga. Om det inte finns bord kvar kommer en varningstext upp och användaren får söka igen.När användaren har valt tid kommer ytterligare ett formulär upp där användaren får skriva namn, e-post och telefonnummer. Spara eller Avbryt där Spara skriver ner bokningen i db via ett API-anrop.För adminläget är det ett enklare CRUD mot databasen och ett enklare gränssnitt som är nödvändigt.Projektet skall finnas i ett git-repo och samtliga studenters commits skall finnas med.Trello skall användas som verktyg för projektet. Det skall framgå vem som arbetat med vilken punkt. 
