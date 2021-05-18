# dontforgetwhoisthebest-front
Dontforgetwhoisthebest (ou DFWITB) est l'application idéale pour prouver ta supériorité face à ton entourage sur Super Smash Bros. Tu souhaites prouver, humilier, enregistrer, partager à partir de tes résultats en combat ? Tu es sur le bon Readme. Dontforgetwhoisthebest te propose un outils permettant d'enregistrer tes performances à partir de toutes les informations du combat vers un leaderboard débordant de fonctionnalité.
>  "dontforgetwhoisthebest-front" contient le frontend de l'outils. Il consiste en un Dockerfile permettant de monter l'environnement d'execution d'une application React.

&nbsp;
### Environment setup:
> Let's start by creating a folder for the environment.
```sh
mkdir dontforgetwhoisthebest
cd dontforgetwhoisthebest
```

&nbsp;
### Back setup:
> For the back, just clone the projet, move inside and run the following docker-compose command.
```sh
git clone https://github.com/antosvle/dontforgetwhoisthebest-back
cd ./dontforgetwhoisthebest-back
docker-compose up --build -d
```
> You can also customize some parameter inside the ".env" file (I know, it's ugly but easier to setup the env quickly).

&nbsp;
### Front setup:
> Finaly, clone the front projet, move inside and again, run the following docker commands.
```sh
git clone https://github.com/antosvle/dontforgetwhoisthebest-front
cd ./dontforgetwhoisthebest-front
docker build -t dfwitb-react:dev .
docker run -it -p 3000:3000 --rm dfwitb-react:dev -d
```
> You can also inject an "BACKEND_URL" environment variable (ex: 'http://mybackend') inside the container if you want to deploy the environment elsewhere than locally. By default, the React app will use 'http://localhost' to join the API.

&nbsp;
### Ready to go on http://localhost:3000 !