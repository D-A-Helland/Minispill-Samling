# Dokumentasjon for individuell oppgave

## Oppsett av ubuntu server

Jeg begynte med å laste ned iso filen til ubuntu server her:

    https://ubuntu.com/download/server

Deretter åpnet jeg VMWare og trykket "CTRL + N" for å lage en ny virtuell maskin.

Jeg trykket "next" til jeg kom til der jeg er på bildet under, der valgte jeg "Installer disc image" og trykte på "Browse". Til slutt valgte jeg ISO filen jeg lastet ned.
![](Bilder/Screenshot1.png)

Jeg trykte "Next" og "Finish" til vinduet lukket seg, så ventet jeg til jeg fikk valget vist på bildet under, jeg valgte "Try or install ubuntu server"
![](Bilder/Screenshot2.png)

Resten av installasjonen var ganske rett fram, det eneste jeg forandret på var tastaturoppsett og valget om å installere ssh server, det er det jeg bruker til å få flyttet nettsidemappen inn på den virtuelle maskinen.

Til slutt kjørte jeg disse kommandoene for å installere apache serveren og å sjekke om den kjører:

    sudo apt install apache2

    sudo systemctl status apache2

Den andre kommandoen returnerte dette så da visste jeg at det fungerte

![](Bilder/Screenshot3.png)

## Utvikling av nettsiden



## Brukerveiledning for nettsiden