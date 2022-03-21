FROM node:lts
ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo

# RUN npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
# RUN npx tailwindcss init -p

RUN mkdir -p /app/
WORKDIR /app/

COPY /app/package.json /app/
COPY /app/package-lock.json /app/

RUN npm install -g ts-node
RUN npm install -g typescript
RUN npm install -g react-scripts

RUN npm install

COPY . /app/

EXPOSE 3000