# sudo docker build -t haydgoki/nodejs:1.0 .
# sudo docker run -it -p 3000:3000 haydgoki/nodejs:1.0 /bin/sh

from node:8.12.0-stretch

ADD . /root/app/

#RUN cd /root && mkdir app && cd app

ENTRYPOINT cd /root/app/ \
    && npm install \
    && npm run build:preprod \
    && npm run start:preprod
