#!/bin/bash

# 构建项目
npm run build

# 构建Docker镜像
docker build -t image_kunpeng .

# 运行Docker镜像
# 此处将nginx的配置挂载出来，方便修改
docker run -di -v /home/prod/kunpeng_front/deploy/nginx.conf:/etc/nginx/conf.d/default.conf --name=kunpeng -p 8090:80 image_kunpeng

# 检查运行状态
docker ps
