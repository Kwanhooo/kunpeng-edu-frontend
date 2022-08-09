import Mock from 'mockjs2'

/**
 * 用户基类
 */
export abstract class User {
  token: string
  id: number
  account: string
  password: string
  name: string
  phone: string
  email: string
  gender: number
  avatar_url: string
  school_id: number
  account_status: number
  create_time: number
  update_time: number
  is_deleted: number

  /**
   * @description 构造函数
   * @protected
   */
  protected constructor(
    account: string,
    email: string = Mock.mock('@email'),
    phone: string = Mock.mock('@integer(13000000000, 18999999999)')
  ) {
    this.token = Mock.mock('@guid')
    this.id = Mock.mock('@id')
    this.account = account
    this.password = ''
    this.name = Mock.mock('@cname')
    this.phone = phone
    this.email = email
    this.gender = Mock.mock('@integer(0, 1)')
    this.avatar_url = 'https://cloud.0xcafebabe.cn/img-host/default-user-avatar.svg'
    this.school_id = Mock.mock('@id')
    this.account_status = 200
    this.is_deleted = 0
    this.create_time = Mock.mock('@time("yyyy-MM-dd HH:mm:ss")')
    this.update_time = Mock.mock('@time("yyyy-MM-dd HH:mm:ss")')
  }
}

/**
 * 开发者
 *  继承自 User
 */
export class Insider extends User {
  constructor(account: string, email: string, phone: string) {
    super(account, email, phone)
  }
}

/**
 * 管理员
 *  继承自 User
 */
export class Admin extends User {
  constructor(account: string, email: string, phone: string) {
    super(account, email, phone)
  }
}

/**
 * 教师
 *  继承自 User
 */
export class Teacher extends User {
  teacherId: number
  subject_id: number
  title: string

  constructor(account: string, email: string, phone: string) {
    super(account, email, phone)
    this.teacherId = Mock.mock('@id')
    this.subject_id = Mock.mock('@id')
  }
}

/**
 * 学生
 *  继承自 User
 */
export class Student extends User {
  class_id: number

  constructor(account: string, email: string, phone: string) {
    super(account, email, phone)
    this.class_id = Mock.mock('@id')
  }
}
