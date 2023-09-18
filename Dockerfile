FROM node:16 as build


# install dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
# ENV ORIGIN=http://localhost:3000 

# Copy all local files into the image.
COPY . .

RUN npm run build


###
# Only copy over the Node pieces we need
# ~> Saves 35MB
###
FROM node:16-alpine

WORKDIR /app
COPY --from=build /app .
#COPY . .

EXPOSE 3000
CMD ["node", "./build"]


# sudo docker run -p 3000:3000 -e DOTENV_KEY='dotenv://:key_b8c8ae39af193087a4e77f955708192a1b030e2743eb68e0056ae551d19598e4@dotenv.org/vault/.env.vault?environment=production' ims