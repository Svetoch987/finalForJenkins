FROM nginx

COPY /src /usr/share/nginx/html
COPY /assets /usr/share/nginx/html
COPY index.html /usr/share/nginx/html
