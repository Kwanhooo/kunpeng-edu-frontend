#######################################################
# ������ű�������Ŀ�ĸ�Ŀ¼�£�����README����һ��
# ����ʹ��Powershell������Ա��������Windows �նˣ�����Ա��ִ��

# deploy����û��������� deploy
#######################################################

# 1.��npm��������Ŀ
Write-Output "=================="
Write-Output "      1 / 3     "
Write-Output "    Nodejs���   "
Write-Output "=================="
npm run build

Write-Output "======================="
Write-Output "        2 / 3        "
Write-Output "   ��Ȩ���ϴ���������     "
Write-Output "======================="
# 2.�ϴ�dist��
scp -r ./dist deploy@120.78.235.195:/www/wwwroot/zuma

# 3.���������
Write-Output "======================="
Write-Output "         3 / 3        "
Write-Output "     �����������     "
Write-Output "======================="
Start-Process msedge "http://zuma.0xffff.�Ұ���/"

# 4.���
Write-Output "============================="
Write-Output "         * / *        "
Write-Output "        ���������         "
Write-Output "http://zuma.0xffff.�Ұ���/"
Write-Output "============================="