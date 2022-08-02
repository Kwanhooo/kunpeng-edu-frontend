#######################################################
# 把这个脚本放在项目的根目录下，即有README的那一层
# 必须使用Powershell（管理员），或者Windows 终端（管理员）执行

# dev这个用户的密码是 devdev
#######################################################

# 1.用npm打包这个项目
Write-Output "=================="
Write-Output "      1 / 3     "
Write-Output "    Nodejs打包   "
Write-Output "=================="
npm run build

Write-Output "======================="
Write-Output "        2 / 3        "
Write-Output "   授权以上传至服务器     "
Write-Output "======================="
# 2.上传dist包
scp -r ./dist dev@0xCAFEBABE.cn:/www/wwwroot/kunpeng_0xcafebabe_cn

# 3.用浏览器打开
Write-Output "======================="
Write-Output "         3 / 3        "
Write-Output "     打开浏览器检验     "
Write-Output "======================="
Start-Process msedge "https://kunpeng.0xCAFEBABE.cn/"

# 4.完成
Write-Output "============================="
Write-Output "         * / *        "
Write-Output "        部署完成于         "
Write-Output "https://kunpeng.0xCAFEBABE.cn/"
Write-Output "============================="