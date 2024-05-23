FROM node:20
WORKDIR /app
COPY . .
RUN npm install
ENV PORT=8080
ENV MODEL_URL=https://storage.googleapis.com/xrayyas-model-bucket/model.json
EXPOSE 8080
CMD [ "npm", "start" ]
