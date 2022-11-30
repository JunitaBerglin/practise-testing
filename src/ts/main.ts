import axios from "axios";

/*I tester är det mycket viktigt att använda sig av data som är förutsägbar. Alltså inte data från
en databas (som kan ändra sig utan att vi vet det).
1. Börja med att skapa ett nytt projekt! Hurra, fler gånger :) Installera jest och allting
som behövs för att komma i gång med testerna. Ja, ni kan installera jsdom om ni vill.
2. Skapa sedan en tjänst, enklast är om ni använder er av omdb som ni är lite vana vid.
Om ni inte orkar kan ni alltid kopiera den från tidigare övningar.
3. Vår tjänst kommer att returnera ett Promise<IPerson[]> som vi antar kommer från
ett api. Vi vill dock inte anropa detta api varje gång vi kör vårt test. Vi kan inte
garantera att vi alltid kommer att få samma data från api:t. Det kan ändras personer,
egenskaper och allt möjligt. Kort sagt, aldrig anropa api:er eller andra datakällor i
våra test. Vi behöver ha kontroll över vår data själva så att vi med säkerhet kan
förutsäga vad som kommer att hända. Det är detta vi använder mocks till.*/
