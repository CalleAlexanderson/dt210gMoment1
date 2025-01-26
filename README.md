## Sida med Böcker av min favoritförfattare

Jag har skapat en sida med React där jag använt TypeScript som språk. Sidan består av tre komponenter, Header, Books och Footer. 

Header komponenten har ett header element i sig med en titel som använder props som skickas från App.tsx, sedan ligger en banner bild som importeras från asset filen. 

Books komponenten tar inga props, den importerar en json fil med data om böckerna som presenteras på sidan, en array skapas där json-datan läggs och sedan används map() för att gå igenom arrayn och skriva ut datan i form av article element, varje article element får key med värde av index.

Footer komponenten har ett footer element som i sig har information om webbplatsen, sidskapare och kontaktl, props används för att skriva ut dessa och det som Header skickas från App.tsx. 
