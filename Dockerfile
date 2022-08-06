FROM nginx

MAINTAINER KunPengOrg

ENV TimeZone=Asia/Shanghai

COPY ./dist/ /www/wwwroot/kunpeng_0xcafebabe_cn/

RUN rm /etc/nginx/conf.d/default.conf

ADD deploy/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80