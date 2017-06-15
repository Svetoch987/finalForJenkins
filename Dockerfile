FROM nginx

COPY conf/nginx.conf /etc/nginx/nginx.conf
COPY resources/ /usr/share/nginx/html

