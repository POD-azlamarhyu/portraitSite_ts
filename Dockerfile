FROM node:lts
ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo

# RUN npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
# RUN npx tailwindcss init -p
RUN npm install -g npm@8.5.4
RUN mkdir /app
WORKDIR /app