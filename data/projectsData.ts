export interface Project {
  id: string
  title: string
  description: string
  href?: string
  imgSrc?: string
  content?: string
  imgNameList?: (number | string)[]
}

const projectsData: Project[] = [
  {
    id: '1',
    title: 'XX公路监测预警系统',
    description: `技术栈：vue + echarts + amap + websocet `,
    imgSrc: '/static/images/project/1.png',
    href: 'projects/1',
    imgNameList: [1, 2, 3],
    content: `这是一款高速公路监测系统，基于物联网设备接入，对门架，收费站，路段，实现实时流量监测与预警，基于地图 + websocet 实现事件（恶劣天气，交通事故，拥堵等）实时预警通知与地图交互，基于大数据实现流量预测，事件处理预案等功能，`,
  },
  {
    id: '2',
    title: '郑州大屏系统',
    description: `技术栈：vue3 + ts + echarts + amap`,
    imgSrc: '/static/images/project/6.png',
    href: 'projects/2',
    imgNameList: [6, 4, 5],
    content: `公路大屏展示系统：该项目介绍待完善`,
  },
]

export default projectsData
