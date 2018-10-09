# sudo docker build -t haydgoki/app:1.0 .
# sudo docker run -it -p 3000:3000 -e ENVIRONNEMENT=preprod haydgoki/app:1.0 npm run start:preprod


from node:8.12.0-stretch

# set the app in /root/app  till the container dies.
ADD . /root/app/
WORKDIR /root/app

RUN npm install && npm run build:preprod && ls -al

#The app is already builded. By default, we just start the app
