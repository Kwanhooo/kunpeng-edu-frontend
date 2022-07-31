FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

ADD deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/ /www/wwwroot/kunpeng_0xcafebabe_cn/html/
