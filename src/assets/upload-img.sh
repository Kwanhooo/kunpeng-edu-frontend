#!/bin/bash
if ! which sshpass > /dev/null; then
    echo "请先安装sshpass => sudo apt install sshpass"
    exit 1
fi

echo "##########################"
echo "### *.jpg *.png *.svg ####"
echo "###   WILL BE UPLOAD  ####"
echo "##########################"
sshpass -p devdev scp ./svgs/*.svg dev@0xcafebabe.cn:/www/wwwroot/cloud.0xcafebabe.cn/img-host
sshpass -p devdev scp ./*.png dev@0xcafebabe.cn:/www/wwwroot/cloud.0xcafebabe.cn/img-host/
sshpass -p devdev scp ./*.jpg dev@0xcafebabe.cn:/www/wwwroot/cloud.0xcafebabe.cn/img-host/

echo ""
echo "######################"
echo "### UPLOAD SUCCESS ###"
echo "######################"
sshpass -p devdev ssh dev@0xcafebabe.cn "ls -l /www/wwwroot/cloud.0xcafebabe.cn/img-host/"