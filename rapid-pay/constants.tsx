
import React from 'react';
import type { ActionItem, ServiceItem, NavItem } from './types';

export const QUICK_ACTIONS: ActionItem[] = [
  {
    label: 'Nạp tiền',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    color: 'bg-teal-500'
  },
  {
    label: 'Rút tiền',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H4a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
    color: 'bg-yellow-500'
  },
  {
    label: 'Tiết kiệm',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor"><path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v1H2V6zM2 9.5A.5.5 0 012.5 9h.055a.5.5 0 01.468.684l-.558 1.675a.5.5 0 01-.938-.313l.558-1.674A.5.5 0 012.5 9h.055a.5.5 0 01.468.684l-.558 1.675a.5.5 0 01-.938-.313l.558-1.674A.5.5 0 012.5 9zM4.5 9a.5.5 0 00-.468.684l.558 1.675a.5.5 0 10.938-.313l-.558-1.674A.5.5 0 004.5 9zm2.5.5a.5.5 0 01.468-.684l.558 1.675a.5.5 0 11-.938-.313l-.558-1.674a.5.5 0 01.468-.684zM10 12a2 2 0 110-4 2 2 0 010 4z" /><path d="M18 9.5a.5.5 0 01.468.684l-.558 1.675a.5.5 0 11-.938-.313l.558-1.674A.5.5 0 0117.5 9h-.055a.5.5 0 00-.468.684l.558 1.675a.5.5 0 10.938-.313l-.558-1.674A.5.5 0 0017.5 9h.055a.5.5 0 01.468-.684l.558 1.675a.5.5 0 10.938-.313l-.558-1.674A.5.5 0 0017.5 9zM2 12.5a.5.5 0 01.5-.5h15a.5.5 0 010 1H2.5a.5.5 0 01-.5-.5zM2 15a2 2 0 012-2h12a2 2 0 012 2v1a2 2 0 01-2 2H4a2 2 0 01-2-2v-1z" /></svg>,
    color: 'bg-orange-500'
  },
  {
    label: 'Vay vốn',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm-1-10V7a2 2 0 012-2h2a2 2 0 012 2v2m-4 4h.01" /></svg>,
    color: 'bg-cyan-500'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    label: 'Chuyển tiền',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
    color: 'bg-red-100',
    iconColor: 'text-red-500'
  },
  {
    label: 'Nạp tiền điện thoại',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    color: 'bg-green-100',
    iconColor: 'text-green-500'
  },
  {
    label: 'Thanh toán hoá đơn',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    color: 'bg-yellow-100',
    iconColor: 'text-yellow-500'
  },
  {
    label: 'Uỷ thác thanh toán',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    color: 'bg-teal-100',
    iconColor: 'text-teal-500'
  },
  {
    label: 'Thanh toán điện',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    color: 'bg-orange-100',
    iconColor: 'text-orange-500'
  },
  {
    label: 'Thanh toán nước',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
    color: 'bg-blue-100',
    iconColor: 'text-blue-500'
  },
  {
    label: 'Mua sắm online',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4z" /></svg>,
    color: 'bg-pink-100',
    iconColor: 'text-pink-500'
  },
  {
    label: 'Vé máy bay',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>,
    color: 'bg-sky-100',
    iconColor: 'text-sky-500'
  },
   {
    label: 'Khoản vay tài chính',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.5 2.5 0 00-1.134 0v-1.43zM9.5 0a9.5 9.5 0 100 19 9.5 9.5 0 000-19zM2 9.5a7.5 7.5 0 0113.3-4.524 7.5 7.5 0 01-4.524 13.31A7.5 7.5 0 012 9.5z" /><path d="M11.567 5.733c.155.103.346.196.567.267v1.698a2.5 2.5 0 00-1.134 0v-1.43z" /></svg>,
    color: 'bg-lime-100',
    iconColor: 'text-lime-500'
  },
   {
    label: 'Học phí',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /><path d="M10 2.5a.5.5 0 01.5.5v2.243a.5.5 0 01-.13.328l-2.682 2.682a.5.5 0 01-.707 0l-.353-.353a.5.5 0 010-.707L8.939 5.57a.5.5 0 01.328-.13H10.5a.5.5 0 01.5.5z" /></svg>,
    color: 'bg-rose-100',
    iconColor: 'text-rose-500'
  },
   {
    label: 'Vé xe ô tô',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" /></svg>,
    color: 'bg-indigo-100',
    iconColor: 'text-indigo-500'
  },
   {
    label: 'Học phí liên ngân hàng',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path d="M10.394 2.08a1 1 0 00-1.082.186l-6 5a1 1 0 001.376 1.448L9 4.41V17a1 1 0 102 0V4.41l3.312 4.224a1 1 0 001.376-1.448l-6-5a1 1 0 00-.296-.186z" /></svg>,
    color: 'bg-emerald-100',
    iconColor: 'text-emerald-500'
  },
  {
    label: 'Chung cư',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3v-2h-2v2H6a1 1 0 110-2V4zm2 2v2h2V6H6zm4 0v2h2V6h-2zm-4 4v2h2v-2H6zm4 0v2h2v-2h-2z" clipRule="evenodd" /></svg>,
    color: 'bg-green-100',
    iconColor: 'text-green-500'
  },
  {
    label: 'Bảo hiểm',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5.002L10 18.451l7.834-13.449A11.954 11.954 0 0110 1.944zM10 5a3 3 0 100 6 3 3 0 000-6z" clipRule="evenodd" /><path d="M10 12a1 1 0 110-2 1 1 0 010 2z" /></svg>,
    color: 'bg-blue-100',
    iconColor: 'text-blue-500'
  },
  {
    label: 'Truyền hình',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3.53 10.47a.75.75 0 00-1.06 1.06l7.5 7.5a.75.75 0 001.06 0l7.5-7.5a.75.75 0 00-1.06-1.06L12 17.69V4.75a.75.75 0 00-1.5 0v12.94L3.53 10.47z" clipRule="evenodd" /></svg>,
    color: 'bg-purple-100',
    iconColor: 'text-purple-500'
  },
  {
    label: 'Tất cả dịch vụ',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>,
    color: 'bg-gray-100',
    iconColor: 'text-gray-500'
  },
];

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Trang chủ',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
    active: true
  },
  {
    label: 'Địa điểm',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
  {
    label: 'Khuyến mại',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 8v-3c0-1.1.9-2 2-2z" /></svg>,
  },
  {
    label: 'Danh bạ',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
  },
  {
    label: 'Cài đặt',
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
];
