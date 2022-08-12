import Mock from 'mockjs2'

/**
 * 班级类型
 */
export class Class {
  classId: number
  school: string
  grade: string
  classNumber: string
  className: string
  classIntro: string
  studyIndex: number
  activityIndex: number

  /**
   * @description 构造函数
   * @protected
   */
  public constructor() {
    this.classId = Mock.mock('@id')
    this.school = '中南大学'
    this.grade = this.school + ' / 计算机学院 / 软件工程系 / 2020级'
    this.classNumber = '200'.concat(Mock.mock('@integer(1, 9)'))
    this.className = '软件工程'.concat(this.classNumber, '班')
    this.classIntro = Mock.mock('@cparagraph')
    this.studyIndex = Mock.mock('@float(0, 20)')
    this.activityIndex = Mock.mock('@float(0, 20)')
  }
}
