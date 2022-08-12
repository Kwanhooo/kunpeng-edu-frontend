```shell
create database if not exists edu;

use edu;

create table if not exists admin
(
    id         int                                null,
    account    int                                null,
    update_time datetime default CURRENT_TIMESTAMP null,
    create_time datetime default CURRENT_TIMESTAMP null,
    is_deleted   tinyint  default 0                 not null
);

create table if not exists chat_record
(
    id          int auto_increment
        primary key,
    sender_id    int                                not null comment '发出者',
    receiver_id  int                                not null comment '接收者',
    content     longtext                           not null comment '可以是文字或资源uri',
    sent_time    datetime default CURRENT_TIMESTAMP null,
    status      int                                not null comment '已发送/缓存，应该不需要经常改这里',
    is_withdrawn tinyint                            not null,
    is_deleted    tinyint  default 0                 not null,
    constraint chat_record_id_uindex
        unique (id)
)
    comment '聊天记录';

create table if not exists class
(
    id             int auto_increment
        primary key,
    class_id        int                                not null comment '班级ID',
    school_id       int                                not null,
    grade          int                                not null comment '年级',
    class_number    varchar(255)                       null comment '班级号',
    headmaster_id   int                                null comment '班主任ID',
    invitation_code varchar(255)                       null comment '邀请码',
    class_status    int      default 0                 null,
    create_time     datetime default CURRENT_TIMESTAMP null,
    update_time     datetime default CURRENT_TIMESTAMP null,
    is_deleted      tinyint  default 0                 not null,
    constraint class_id_uindex
        unique (id)
);

create table if not exists class_teacher
(
    id        int auto_increment
        primary key,
    class_id   int               not null,
    teacher_id int               not null,
    is_deleted  tinyint default 0 not null,
    constraint class_teacher_id_uindex
        unique (id)
);

create index class_teacher_class_id_index
    on class_teacher (class_id);

create index class_teacher_teacher_id_index
    on class_teacher (teacher_id);

create table if not exists class_test
(
    id              int auto_increment
        primary key,
    class_id         int               not null,
    exam_id          int               not null,
    class_test_status int     default 0 not null comment '是否完成该考试的判卷，默认为false',
    is_deleted        tinyint default 0 not null,
    constraint class_test_id_uindex
        unique (id)
)
    comment '班级考试信息';

create index class_test_class_id_index
    on class_test (class_id);

create index class_test_test_id_index
    on class_test (exam_id);

create table if not exists course
(
    id          int auto_increment
        primary key,
    course_id    int               not null,
    course_name  varchar(1024)     null,
    description longtext          null,
    resource_url varchar(1024)     null,
    class_id     int               null,
    is_deleted    tinyint default 0 not null,
    constraint course_course_id_uindex
        unique (course_id)
);

create table if not exists course_teacher
(
    id        int auto_increment
        primary key,
    course_id  int               not null,
    teacher_id int               not null,
    role      varchar(1024)     null,
    is_deleted  tinyint default 0 not null
);

create table if not exists error_type
(
    id          int                                null,
    error_id     int                                null,
    description varchar(2048)                      null,
    creator_id   int                                null,
    create_time  datetime default CURRENT_TIMESTAMP null,
    is_deleted    tinyint  default 0                 not null
);

create table if not exists exam
(
    id          int auto_increment
        primary key,
    exam_id      int                                not null,
    paper_id     int                                not null comment '考试使用试卷',
    initiator_id int                                not null comment '考试发起者ID',
    start_time   datetime                           null comment '考试开始时间',
    end_time     datetime                           null comment '考试结束时间',
    exam_status  int      default 0                 not null,
    create_time  datetime default CURRENT_TIMESTAMP null,
    update_time  datetime default CURRENT_TIMESTAMP null,
    is_deleted    tinyint  default 0                 not null,
    constraint exam_id_uindex
        unique (id)
);

create table if not exists forum_post
(
    id             int auto_increment
        primary key,
    author_id       int               not null comment '讨论区用户ID',
    content        longtext          not null comment '可以是富文本',
    post_time       datetime          not null,
    last_update_time datetime          null,
    is_deleted       tinyint default 0 not null,
    constraint forum_records_id_uindex
        unique (id)
)
    comment '讨论区记录';

create table if not exists notice
(
    id          int auto_increment
        primary key,
    class_id     int               not null,
    title       int               not null,
    text        varchar(255)      not null,
    resource_url varchar(1024)     null,
    publisher_id int               not null,
    release_time datetime          not null,
    is_deleted    tinyint default 0 not null,
    constraint notice_id_uindex
        unique (id)
)
    comment '通知';

create table if not exists paper
(
    id          int auto_increment
        primary key,
    paper_id     int                                not null,
    paper_title  varchar(255)                       not null,
    publisher_id int                                not null comment '组卷老师',
    paper_status int                                null,
    publish_time datetime                           null,
    update_time  datetime default CURRENT_TIMESTAMP null,
    is_deleted    tinyint  default 0                 not null,
    constraint paper_id_uindex
        unique (id),
    constraint paper_paper_id_uindex
        unique (paper_id)
);

create table if not exists question
(
    id         int auto_increment
        primary key,
    question_id int               not null,
    course_id   int               not null,
    level      int               null,
    content    longtext          null comment '试题，富文本',
    answer     longtext          null comment '答案，富文本。',
    is_deleted   tinyint default 0 not null,
    constraint exercises_exercise_id_uindex
        unique (question_id),
    constraint exercises_id_uindex
        unique (id)
);

create table if not exists question_paper
(
    id         int auto_increment
        primary key,
    paper_id    int               not null,
    question_id int               not null,
    part_s_n     int               null comment '第几大题',
    sub_s_n      int               null comment '第几小题',
    score      double            null comment '分值',
    is_deleted   tinyint default 0 not null,
    constraint exercise_paper_id_uindex
        unique (id)
);

create index exercise_paper_exercise_id_index
    on question_paper (question_id);

create index exercise_paper_paper_id_index
    on question_paper (paper_id);

create table if not exists school
(
    id         int auto_increment
        primary key,
    school_id   int               not null,
    school_name varchar(1024)     null,
    province   int               null,
    city       int               null,
    district   int               null,
    location   int               null,
    create_time datetime          null,
    update_time datetime          null,
    is_deleted   tinyint default 0 not null,
    constraint school_school_id_uindex
        unique (school_id)
);

create table if not exists student
(
    id         int auto_increment
        primary key,
    account    int                                not null,
    phone      varchar(255)                       null,
    class_id    int                                null,
    create_time datetime default CURRENT_TIMESTAMP null comment '创建时间',
    update_time datetime default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP comment '更新时间',
    is_deleted   tinyint  default 0                 not null comment '是否删除',
    constraint student_id_uindex
        unique (id),
    constraint student_phone_uindex
        unique (phone),
    constraint student_student_id_uindex
        unique (account)
);

create table if not exists student_answer
(
    id          int auto_increment
        primary key,
    student_id   int               not null,
    paper_id     int               not null,
    question_id  int               not null,
    is_corrected tinyint default 0 not null comment '是否批改',
    given_points double            null,
    error_type_id int               null comment '老师批注的错误类型',
    sign        varchar(1024)     null comment '老师在判卷时所作的标记',
    comment     varchar(255)      null comment '老师评语',
    time_spent   double            null comment '做题时长，按分钟计数',
    is_deleted    tinyint default 0 not null,
    constraint answer_by_student_id_uindex
        unique (id)
)
    comment '考试后学生提交的答案';

create table if not exists student_exam
(
    id                int auto_increment
        primary key,
    exam_id            int               not null,
    student_id         int               not null,
    current_score      int               null,
    student_exam_status tinyint default 0 not null,
    is_deleted          tinyint default 0 not null,
    constraint student_test_id_uindex
        unique (id)
)
    comment '学生单次考试的信息';

create index student_test_student_id_index
    on student_exam (student_id);

create index student_test_test_id_index
    on student_exam (exam_id);

create table if not exists student_wrong
(
    id             int auto_increment
        primary key,
    student_id      int                                not null,
    question_id     int                                not null,
    recording_time  datetime default CURRENT_TIMESTAMP not null,
    last_review_time datetime                           null comment '上次回顾时间',
    review_times    int                                null comment '回顾次数',
    accuracy       double                             null comment '回顾正确率',
    comment        varchar(255)                       null,
    is_deleted       tinyint  default 0                 not null,
    constraint student_wrong_problems_id_uindex
        unique (id)
)
    comment '学生错题集';

create index student_wrongproblems_exercise_id_index
    on student_wrong (question_id);

create index student_wrongproblems_student_id_index
    on student_wrong (student_id);

create table if not exists teacher
(
    id         int auto_increment
        primary key,
    account    int                                not null,
    subject_id  int                                null,
    title      varchar(255)                       null,
    create_time datetime default CURRENT_TIMESTAMP null comment '创建时间',
    update_time datetime default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP,
    is_deleted   tinyint  default 0                 not null comment '是否删除',
    constraint teacher_id_uindex
        unique (id),
    constraint teacher_teacher_id_uindex
        unique (account)
);

create table if not exists user
(
    id            int               null,
    account       mediumtext        not null,
    password      varchar(2048)     null,
    name          varchar(2048)     null comment '真实姓名',
    phone         varchar(2048)     null comment '+86 12312312313',
    email         varchar(2048)     null,
    gender        tinyint           null,
    avatar_url     varchar(2048)     null,
    school_id      int               not null,
    account_status int               not null,
    is_deleted      tinyint default 0 not null
);

```