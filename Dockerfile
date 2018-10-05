# sudo docker build -t haydgoki/app:1.0 .
# sudo docker run -it -p 3000:3000 --env-file /etc/profile.d/docker_vars haydgoki/app:1.0 /bin/sh

from node:8.12.0-stretch

ADD . /root/app/

WORKDIR /root/app

RUN npm install


ENTRYPOINT npm run build:$ENVIRONNEMENT \
   && npm run start:$ENVIRONNEMENT
