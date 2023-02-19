import React, { memo } from 'react'
import Card, { CardProps } from './Card'
import { data } from '../../../../static/opensource.json'

// const OpenSourceList: CardProps[] = [
//   {
//     title: 'Backpackbuddy',
//     sourceUrl: 'https://github.com/yudi7ll/backpackbuddy',
//     pageUrl: 'https://backpackbuddy.madewahyudi.com',
//     img: 'backpackbuddy.jpg',
//   },
//   {
//     title: 'Backpackbuddy Admin Panel',
//     sourceUrl: 'https://github.com/yudi7ll/backpackbuddy-admin',
//     pageUrl: 'https://admin-backpackbuddy.madewahyudi.com',
//     img: 'admin-backpackbuddy.png',
//   },
//   {
//     title: 'DashF',
//     sourceUrl: 'https://github.com/yudi7ll/dash-f',
//     pageUrl: 'https://dash-f.madewahyudi.com',
//     img: 'dashf.jpg',
//   },
//   {
//     title: 'Fylo',
//     sourceUrl: 'https://github.com/yudi7ll/fylo',
//     pageUrl: 'https://yudi7ll.github.io/fylo',
//     img: 'fylo.jpg',
//   },
//   {
//     title: 'Easybank',
//     sourceUrl: 'https://github.com/yudi7ll/easybank',
//     pageUrl: 'https://yudi7ll.github.io/easybank',
//     img: 'easybank.jpg',
//   },
//   {
//     title: 'Todo App',
//     sourceUrl: 'https://github.com/yudi7ll/todo-app',
//     pageUrl: 'https://yudi7ll.github.io/todo-app',
//     img: 'todo-app-main.jpg',
//   },
//   {
//     title: 'IP Address Tracker',
//     sourceUrl: 'https://github.com/yudi7ll/ip-address-tracker',
//     pageUrl: 'https://addr.netlify.app',
//     img: 'ip-tracker.jpg',
//   },
//   {
//     title: 'Grep Voodh',
//   },
//   {
//     title: 'E-Quizz',
//     sourceUrl: 'https://github.com/yudi7ll/equizz',
//   },
//   {
//     title: 'Url Shortener',
//     sourceUrl: 'https://github.com/yudi7ll/shorten-url',
//   },
// ]

const OpenSource = () => <>{data.map(Card)}</>

export default memo(OpenSource)
