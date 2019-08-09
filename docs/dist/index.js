(function (Vue, Fa) {
  'use strict';

  Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;
  Fa = Fa && Fa.hasOwnProperty('default') ? Fa['default'] : Fa;

  var faBatteryFull={prefix:"fad",iconName:"battery-full",icon:[640,512,[],"f240",["M616 160h-8v-16a48 48 0 0 0-48-48H48a48 48 0 0 0-48 48v224a48 48 0 0 0 48 48h512a48 48 0 0 0 48-48v-16h8a24 24 0 0 0 24-24V184a24 24 0 0 0-24-24zm-40 128h-32v64H64V160h480v64h32z","M512 320H96V192h416z"]]};var faBatteryQuarter={prefix:"fad",iconName:"battery-quarter",icon:[640,512,[],"f243",["M616 160h-8v-16a48 48 0 0 0-48-48H48a48 48 0 0 0-48 48v224a48 48 0 0 0 48 48h512a48 48 0 0 0 48-48v-16h8a24 24 0 0 0 24-24V184a24 24 0 0 0-24-24zm-40 128h-32v64H64V160h480v64h32z","M224 320H96V192h128z"]]};var faBirthdayCake={prefix:"fad",iconName:"birthday-cake",icon:[448,512,[],"f1fd",["M373.5 384c-28 0-31.39 32-74.75 32-43.55 0-46.6-32-74.75-32-27.28 0-31.66 32-74.5 32-43.5 0-46.8-32-74.75-32S43.36 416 0 416v96h448v-96c-43.25 0-47-32-74.5-32zM96 96c17.75 0 32-13.5 32-40S108 0 96 0c0 41-32 33-32 64a31.9 31.9 0 0 0 32 32zm128 0c17.75 0 32-13.5 32-40S236 0 224 0c0 41-32 33-32 64a31.9 31.9 0 0 0 32 32zm128 0c17.75 0 32-13.5 32-40S364 0 352 0c0 41-32 33-32 64a31.9 31.9 0 0 0 32 32z","M448 384c-28 0-31.26-32-74.5-32-43.43 0-46.83 32-74.75 32-27.7 0-31.45-32-74.75-32-42.84 0-47.22 32-74.5 32-28.15 0-31.2-32-74.75-32S28.1 384 0 384v-80a48 48 0 0 1 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16a48 48 0 0 1 48 48z"]]};var faBook={prefix:"fad",iconName:"book",icon:[448,512,[],"f02d",["M96 448c-19.2 0-32-12.8-32-32s16-32 32-32h319.33c-1.93 16.24-1.76 48.38.53 64z","M96 384h328a24 24 0 0 0 24-24V32a32 32 0 0 0-32-32H96A96 96 0 0 0 0 96v320a96 96 0 0 0 96 96h328a24 24 0 0 0 24-24v-16a24 24 0 0 0-24-24H96c-19.2 0-32-12.8-32-32s16-32 32-32zm32-250a6 6 0 0 1 6-6h212a6 6 0 0 1 6 6v20a6 6 0 0 1-6 6H134a6 6 0 0 1-6-6zm0 64a6 6 0 0 1 6-6h212a6 6 0 0 1 6 6v20a6 6 0 0 1-6 6H134a6 6 0 0 1-6-6z"]]};var faBookMedical={prefix:"fad",iconName:"book-medical",icon:[448,512,[],"f7e6",["M96 448c-19.2 0-32-12.8-32-32s16-32 32-32h319.33c-1.93 16.24-1.76 48.38.53 64z","M96 384h328a24 24 0 0 0 24-24V32a32 32 0 0 0-32-32H96A96 96 0 0 0 0 96v320a96 96 0 0 0 96 96h328a24 24 0 0 0 24-24v-16a24 24 0 0 0-24-24H96c-19.2 0-32-12.8-32-32s16-32 32-32zm48-216a8 8 0 0 1 8-8h56v-56a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v56h56a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8h-56v56a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-56h-56a8 8 0 0 1-8-8z"]]};var faBookSpells={prefix:"fad",iconName:"book-spells",icon:[448,512,[],"f6b8",["M96 448c-19.2 0-32-12.8-32-32s16-32 32-32h319.33c-1.93 16.24-1.76 48.38.53 64z","M96 384h328a24 24 0 0 0 24-24V32a32 32 0 0 0-32-32H96A96 96 0 0 0 0 96v320a96 96 0 0 0 96 96h328a24 24 0 0 0 24-24v-16a24 24 0 0 0-24-24H96c-19.2 0-32-12.8-32-32s16-32 32-32zm176-224l26.66 53.33L352 240l-53.34 26.67L272 320l-26.66-53.33L192 240l53.34-26.67zM160 96l16-32 16 32 32 16-32 16-16 32-16-32-32-16z"]]};var faBookUser={prefix:"fad",iconName:"book-user",icon:[448,512,[],"f7e7",["M96 448c-19.2 0-32-12.8-32-32s16-32 32-32h319.33c-1.93 16.24-1.76 48.38.53 64z","M96 384h328a24 24 0 0 0 24-24V32a32 32 0 0 0-32-32H96A96 96 0 0 0 0 96v320a96 96 0 0 0 96 96h328a24 24 0 0 0 24-24v-16a24 24 0 0 0-24-24H96c-19.2 0-32-12.8-32-32s16-32 32-32zM240 64a64 64 0 1 1-64 64 64 64 0 0 1 64-64zM128 281.6c0-31.81 30.09-57.6 67.2-57.6h5a103.22 103.22 0 0 0 79.7 0h5c37.11 0 67.2 25.79 67.2 57.6v19.2c0 10.61-10 19.2-22.4 19.2H150.4c-12.4 0-22.4-8.6-22.4-19.2z"]]};var faBusAlt={prefix:"fad",iconName:"bus-alt",icon:[512,512,[],"f55e",["M96 160v96a32 32 0 0 0 32 32h112V128H128a32 32 0 0 0-32 32zm320 96v-96a32 32 0 0 0-32-32H272v160h112a32 32 0 0 0 32-32zM64 480a32 32 0 0 0 32 32h32a32 32 0 0 0 32-32v-32H64zm288-32v32a32 32 0 0 0 32 32h32a32 32 0 0 0 32-32v-32z","M488 128h-8V80c0-44.8-99.2-80-224-80S32 35.2 32 80v48h-8a24 24 0 0 0-24 24v80a24 24 0 0 0 24 24h8v160a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V256h8a24 24 0 0 0 24-24v-80a24 24 0 0 0-24-24zM112 400a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm128-112H128a32 32 0 0 1-32-32v-96a32 32 0 0 1 32-32h112zM168 96a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H168zm104 32h112a32 32 0 0 1 32 32v96a32 32 0 0 1-32 32H272zm128 272a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"]]};var faCamera={prefix:"fad",iconName:"camera",icon:[512,512,[],"f030",["M344 288a88 88 0 1 1-88-88 88.13 88.13 0 0 1 88 88z","M464 96h-88l-12.4-32.9A47.93 47.93 0 0 0 318.7 32H193.2a47.93 47.93 0 0 0-44.9 31.1L136 96H48a48 48 0 0 0-48 48v288a48 48 0 0 0 48 48h416a48 48 0 0 0 48-48V144a48 48 0 0 0-48-48zM256 408a120 120 0 1 1 120-120 120.1 120.1 0 0 1-120 120z"]]};var faCampfire={prefix:"fad",iconName:"campfire",icon:[512,512,[],"f6ba",["M320 32a377.71 377.71 0 0 0-36.14 37.48A489.51 489.51 0 0 0 220 0c-63.17 57-108 131.22-108 176a144 144 0 0 0 288 0c0-33.29-33.42-102-80-144zm-16.79 208.57A79.7 79.7 0 0 1 256 256c-44.11 0-80-30.49-80-80 0-24.66 14.86-46.39 44.5-83.52 4.23 5.09 60.42 80.06 60.42 80.06l35.84-42.72c2.53 4.37 4.83 8.65 6.89 12.76 16.71 33.33 9.66 75.99-20.44 97.99z","M511.28 470.21l-9.35 30.55a15.61 15.61 0 0 1-19.62 10.5L256 439 29.69 511.26a15.61 15.61 0 0 1-19.62-10.5L.72 470.21a16.06 16.06 0 0 1 10.28-20l140-44.68-140-44.72a16.06 16.06 0 0 1-10.28-20l9.35-30.55a15.61 15.61 0 0 1 19.62-10.5L256 372l226.31-72.24a15.61 15.61 0 0 1 19.62 10.5l9.35 30.55a16.06 16.06 0 0 1-10.28 20l-140 44.68 140 44.68a16.06 16.06 0 0 1 10.28 20.04z"]]};var faCog={prefix:"fad",iconName:"cog",icon:[512,512,[],"f013",["M487.75 315.6l-42.6-24.6a192.62 192.62 0 0 0 0-70.2l42.6-24.6a12.11 12.11 0 0 0 5.5-14 249.2 249.2 0 0 0-54.7-94.6 12 12 0 0 0-14.8-2.3l-42.6 24.6a188.83 188.83 0 0 0-60.8-35.1V25.7A12 12 0 0 0 311 14a251.43 251.43 0 0 0-109.2 0 12 12 0 0 0-9.4 11.7v49.2a194.59 194.59 0 0 0-60.8 35.1L89.05 85.4a11.88 11.88 0 0 0-14.8 2.3 247.66 247.66 0 0 0-54.7 94.6 12 12 0 0 0 5.5 14l42.6 24.6a192.62 192.62 0 0 0 0 70.2l-42.6 24.6a12.08 12.08 0 0 0-5.5 14 249 249 0 0 0 54.7 94.6 12 12 0 0 0 14.8 2.3l42.6-24.6a188.54 188.54 0 0 0 60.8 35.1v49.2a12 12 0 0 0 9.4 11.7 251.43 251.43 0 0 0 109.2 0 12 12 0 0 0 9.4-11.7v-49.2a194.7 194.7 0 0 0 60.8-35.1l42.6 24.6a11.89 11.89 0 0 0 14.8-2.3 247.52 247.52 0 0 0 54.7-94.6 12.36 12.36 0 0 0-5.6-14.1zm-231.4 36.2a95.9 95.9 0 1 1 95.9-95.9 95.89 95.89 0 0 1-95.9 95.9z","M256.35 319.8a63.9 63.9 0 1 1 63.9-63.9 63.9 63.9 0 0 1-63.9 63.9z"]]};var faCookieBite={prefix:"fad",iconName:"cookie-bite",icon:[512,512,[],"f564",["M510.52 255.81A127.93 127.93 0 0 1 384.05 128 127.92 127.92 0 0 1 256.19 1.51a132 132 0 0 0-79.72 12.81l-69.13 35.22a132.32 132.32 0 0 0-57.79 57.81l-35.1 68.88a132.64 132.64 0 0 0-12.82 81l12.08 76.27a132.56 132.56 0 0 0 37.16 73l54.77 54.76a132.1 132.1 0 0 0 72.71 37.06l76.71 12.15a131.92 131.92 0 0 0 80.53-12.76l69.13-35.21a132.32 132.32 0 0 0 57.79-57.81l35.1-68.88a132.59 132.59 0 0 0 12.91-80zM176 368a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm32-160a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm160 128a32 32 0 1 1 32-32 32 32 0 0 1-32 32z","M368 272a32 32 0 1 0 32 32 32 32 0 0 0-32-32zM208 144a32 32 0 1 0 32 32 32 32 0 0 0-32-32zm-32 160a32 32 0 1 0 32 32 32 32 0 0 0-32-32z"]]};var faCorn={prefix:"fad",iconName:"corn",icon:[512,512,[],"f6c7",["M206.68 111.08a39.13 39.13 0 0 1 45.42-13 40.21 40.21 0 0 1 57.28-32.95 39.86 39.86 0 0 1 61.13-26.57A40.07 40.07 0 0 1 398 11.7a39.12 39.12 0 0 1 38.41 9.6 40.13 40.13 0 0 1 75.51 20.8v3.2a40.51 40.51 0 0 1-22.1 34.53 40.33 40.33 0 0 1 9 38.41 41.29 41.29 0 0 1-27.2 27.19 39.49 39.49 0 0 1 2.88 37.77 40.2 40.2 0 0 1-30.08 23.05 39 39 0 0 1-1.59 37.44 39.79 39.79 0 0 1-31.69 19.85 39.15 39.15 0 0 1-4.79 36.8 39.86 39.86 0 0 1-4.87 5.31c-51.23-28.5-110.09-37.49-166.48-28.13a256.52 256.52 0 0 0-28.32-166.44z","M423.85 360c-88-76.52-221.49-72.92-305.21 10.79l-67.88 67.83L96 483.88a96 96 0 0 0 135.76 0l90.51-90.51 97.66-19.53c6.44-1.29 8.86-9.59 3.92-13.84zM201 284.85c15.42-67.76-.79-141.26-49-196.71-4.29-4.94-12.58-2.51-13.87 3.91l-19.54 97.68-90.47 90.51a96 96 0 0 0 0 135.77L96 348.12a254.29 254.29 0 0 1 105-63.27z"]]};var faCrow={prefix:"fad",iconName:"crow",icon:[640,512,[],"f520",["M447.27 487.67a12 12 0 0 1-7.17 15.38l-22.55 8.21a12 12 0 0 1-15.38-7.17l-44.65-120.17a192 192 0 0 0 48.73-7.7zM312.87 384H261l45.22 120.1a12 12 0 0 0 15.38 7.17l22.55-8.21a12 12 0 0 0 7.17-15.38zM640 96c0-35.35-43-64-96-64h-16a79.67 79.67 0 0 1 16 48v32z","M464 0a80 80 0 0 0-80 80v21L12.09 393.57a30.22 30.22 0 0 0 31.64 51.2L165.27 384H352c106 0 192-86 192-192V80a80 80 0 0 0-80-80zm0 104a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"]]};var faEar={prefix:"fad",iconName:"ear",icon:[384,512,[],"f5f0",["M192 0C86 0 0 86 0 192v176a144 144 0 0 0 288 0v-9.9c57.33-33.21 96-95.1 96-166.1C384 86 298 0 192 0zm128 200a8 8 0 0 1-8 8h-16a8 8 0 0 1-8-8v-8a96 96 0 0 0-192 0 32 32 0 0 0 32 32h32a64 64 0 0 1 0 128h-8a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h8a32 32 0 0 0 0-64h-32a64.06 64.06 0 0 1-64-64 128 128 0 0 1 256 0z","M320 200a8 8 0 0 1-8 8h-16a8 8 0 0 1-8-8v-8a96 96 0 0 0-192 0 32 32 0 0 0 32 32h32a64 64 0 0 1 0 128h-8a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h8a32 32 0 0 0 0-64h-32a64.06 64.06 0 0 1-64-64 128 128 0 0 1 256 0z"]]};var faFileExclamation={prefix:"fad",iconName:"file-exclamation",icon:[384,512,[],"f31a",["M224 136V0H24A23.94 23.94 0 0 0 0 24v464a23.94 23.94 0 0 0 24 24h336a23.94 23.94 0 0 0 24-24V160H248a24.07 24.07 0 0 1-24-24zm153-31L279.1 7a24 24 0 0 0-17-7H256v128h128v-6.1a23.92 23.92 0 0 0-7-16.9z","M160 332.8a12 12 0 0 0 12 11.2h40a12 12 0 0 0 12-11.2l7.2-112a12 12 0 0 0-12-12.8h-54.4a12 12 0 0 0-12 12.8zm32 27.2a40 40 0 1 0 40 40 40 40 0 0 0-40-40z"]]};var faFilePlus={prefix:"fad",iconName:"file-plus",icon:[384,512,[],"f319",["M224 136V0H24A23.94 23.94 0 0 0 0 24v464a23.94 23.94 0 0 0 24 24h336a23.94 23.94 0 0 0 24-24V160H248a24.07 24.07 0 0 1-24-24zm153-31L279.1 7a24 24 0 0 0-17-7H256v128h128v-6.1a23.92 23.92 0 0 0-7-16.9z","M296 340a12 12 0 0 1-12 12h-60v60a12 12 0 0 1-12 12h-40a12 12 0 0 1-12-12v-60h-60a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h60v-60a12 12 0 0 1 12-12h40a12 12 0 0 1 12 12v60h60a12 12 0 0 1 12 12z"]]};var faFileTimes={prefix:"fad",iconName:"file-times",icon:[384,512,[],"f317",["M224 136V0H24A23.94 23.94 0 0 0 0 24v464a23.94 23.94 0 0 0 24 24h336a23.94 23.94 0 0 0 24-24V160H248a24.07 24.07 0 0 1-24-24zm33.1 90.6l28.3 28.3a12 12 0 0 1 0 17L237.3 320l48.1 48.1a12 12 0 0 1 0 17l-28.3 28.3a12 12 0 0 1-17 0L192 365.3l-48.1 48.1a12 12 0 0 1-17 0l-28.3-28.3a12 12 0 0 1 0-17l48.1-48.1-48.1-48.1a12 12 0 0 1 0-17l28.3-28.3a12 12 0 0 1 17 0l48.1 48.1 48.1-48.1a12 12 0 0 1 17 0zM384 121.9v6.1H256V0h6.1a24 24 0 0 1 17 7l97.9 98a23.92 23.92 0 0 1 7 16.9z","M98.6 271.9a12 12 0 0 1 0-17l28.3-28.3a12 12 0 0 1 17 0l48.1 48.1 48.1-48.1a12 12 0 0 1 17 0l28.3 28.3a12 12 0 0 1 0 17L237.3 320l48.1 48.1a12 12 0 0 1 0 17l-28.3 28.3a12 12 0 0 1-17 0L192 365.3l-48.1 48.1a12 12 0 0 1-17 0l-28.3-28.3a12 12 0 0 1 0-17l48.1-48.1z"]]};var faFillDrip={prefix:"fad",iconName:"fill-drip",icon:[576,512,[],"f576",["M387.39 288L236.78 438.61a32 32 0 0 1-45.22 0L74.37 321.4A31.86 31.86 0 0 1 65 298.78 32.59 32.59 0 0 1 66.87 288zM512 320s-64 92.65-64 128a64 64 0 0 0 128 0c0-35.35-64-128-64-128z","M503.63 217L295.94 9.34a32 32 0 0 0-45.25 0l-81.58 81.58L82.93 4.73a16 16 0 0 0-22.62 0L37.69 27.35a16 16 0 0 0 0 22.62l86.19 86.18-94.76 94.76a96 96 0 0 0 0 135.75l117.19 117.19a96 96 0 0 0 135.74 0l221.57-221.57a32 32 0 0 0 .01-45.28zM236.78 438.61a32 32 0 0 1-45.22 0L74.37 321.4a32 32 0 0 1 0-45.24l94.75-94.74 58.6 58.58A32 32 0 0 0 273 194.77l-58.6-58.6 58.92-58.93 162.42 162.41z"]]};var faFireAlt={prefix:"fad",iconName:"fire-alt",icon:[448,512,[],"f7e4",["M323.56 51.2a597.38 597.38 0 0 0-56.22 60C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 210 0 281.6 0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-52-163.14-124.44-230.4zm-1.12 366.87A165.81 165.81 0 0 1 226.86 448c-43.93 0-84.43-14.89-114.06-41.92a146.18 146.18 0 0 1-35.88-50.39C68.35 335.82 64 314 64 290.75c0-59.43 42.8-106.39 104.3-180.12 30 34.59 18.49 19.78 100.7 124.59l62-70.74c24.32 40.25 27.78 45.59 34.84 59.1a157.93 157.93 0 0 1 15 104.62c-7.49 36.85-28.24 68.8-58.4 89.87z","M304.09 391.85A134.39 134.39 0 0 1 226.86 416C154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75 6.93 8 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 20 27.35 52.19 15.81 119-33.43 153.42z"]]};var faFlag={prefix:"fad",iconName:"flag",icon:[512,512,[],"f024",["M512 91.33v277c0 11.31-7.1 21.88-18.5 26.47C317.7 465 281.7 331.25 96 416V102a56.57 56.57 0 0 0 14.64-15c194.19-74.48 184.75 58.25 352-20.08C485.2 56.31 512 68.26 512 91.33z","M120 56a55.93 55.93 0 0 1-24 46v388a22 22 0 0 1-22 22H54a22 22 0 0 1-22-22V102a56 56 0 1 1 88-46z"]]};var faFlaskPotion={prefix:"fad",iconName:"flask-potion",icon:[448,512,[],"f6e1",["M80 352a153.32 153.32 0 0 1 1.92-24.48c61.84-24.46 131.66-20.73 181 4 36.58 18.29 78.13 20.41 105 20.56v3.23a143.78 143.78 0 0 1-36.6 92.69 1.44 1.44 0 0 1-.34 0H116.7A143.57 143.57 0 0 1 80 352z","M320 169.05V96h-64v111.3c24.51 13.18 114.11 49.87 112 148a143.78 143.78 0 0 1-36.68 92.7 1.44 1.44 0 0 1-.34 0H116.7A143.57 143.57 0 0 1 80 352c0-99.51 88.32-132.74 112-145.13V96h-64v72.12C61.61 202.85 16 271.88 16 352a207.13 207.13 0 0 0 53.94 139.7c12 13.17 29.22 20.3 47 20.3H331a64 64 0 0 0 47.58-20.85A207.15 207.15 0 0 0 432 356.67c1.71-79.95-44.81-151.49-112-187.62zM112 64h224a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16z"]]};var faHatWizard={prefix:"fad",iconName:"hat-wizard",icon:[576,512,[],"f6e8",["M544 464v32a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h480a16 16 0 0 1 16 16z","M272 416h208l-86.41-201.63a64 64 0 0 1-1.89-45.45L448 0 260.42 107.19A128 128 0 0 0 207 166.34L96 416h144l-16-32-64-32 64-32 32-64 32 64 64 32-64 32zm48-224l-16 32-16-32-32-16 32-16 16-32 16 32 32 16z"]]};var faHome={prefix:"fad",iconName:"home",icon:[576,512,[],"f015",["M336 463.59V368a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v95.71a16 16 0 0 1-15.92 16L112 480a16 16 0 0 1-16-16V300.06l184.39-151.85a12.19 12.19 0 0 1 15.3 0L480 300v164a16 16 0 0 1-16 16l-112-.31a16 16 0 0 1-16-16.1z","M573.32 268.35l-25.5 31a12 12 0 0 1-16.9 1.65L295.69 107.21a12.19 12.19 0 0 0-15.3 0L45.17 301a12 12 0 0 1-16.89-1.65l-25.5-31a12 12 0 0 1 1.61-16.89L257.49 43a48 48 0 0 1 61 0L408 116.61V44a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12v138.51l83.6 68.91a12 12 0 0 1 1.72 16.93z"]]};var faMagic={prefix:"fad",iconName:"magic",icon:[512,512,[],"f0d0",["M80 0L53.34 53.33 0 80l53.34 26.67L80 160l26.66-53.33L160 80l-53.34-26.67zm192 48l-32-16-16-32-16 32-32 16 32 16 16 32 16-32zm186.66 293.33L432 288l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368zM399 243.07l86.6-86.55 17-17a32 32 0 0 0 0-45.26l-17-17-50.86-50.86-17-17a32 32 0 0 0-45.25 0l-17 17L269 112.94l-39.62 39.6 39.61 39.61 50.91 50.91 39.59 39.58zm-90.5-90.52L395.14 66l50.91 50.91-86.6 86.55z","M359.44 282.64l-220 220a32 32 0 0 1-45.25 0L9.38 417.77a32 32 0 0 1 0-45.25l220-220z"]]};var faScarf={prefix:"fad",iconName:"scarf",icon:[512,512,[],"f7c1",["M509.72 395.71l-117.39-117.1-22.61 22.6L487 418.31a8 8 0 0 0 11.3 0L509.62 407a7.92 7.92 0 0 0 .1-11.29zm-207.89-26.8l-22.61 22.6 117.4 117.2a8 8 0 0 0 11.3 0l11.3-11.3a8 8 0 0 0 0-11.3zM166 323.71L47.62 441.91a8 8 0 0 0 0 11.3l11.3 11.3a8 8 0 0 0 11.3 0l118.4-118.2zm-45.31-45.1L2.33 396.71a8 8 0 0 0 0 11.3l11.29 11.3a8 8 0 0 0 11.3 0l118.41-118.2zM347 323.71l-22.61 22.6 117.41 117.2a8 8 0 0 0 11.29 0l11.3-11.3a8 8 0 0 0 0-11.3zM92.92 487.11a8 8 0 0 0 0 11.3l11.3 11.3a8 8 0 0 0 11.31 0l118.39-118.2-22.59-22.6z","M279.12 120.51l19.5-19.4a185.4 185.4 0 0 0-84.4-.2L369.62 256 256.53 369.11l-135.1-140.7c-48.6-53.7-13-113.3-11.5-115.8l43.6-73.1a56.71 56.71 0 0 1 16.8-18c44-29.7 130.7-27.6 171.3-.1a56.71 56.71 0 0 1 16.8 18l43.7 73.4c7.2 12 33.4 65.6-13.2 117.3z"]]};var faToggleOff={prefix:"fad",iconName:"toggle-off",icon:[576,512,[],"f204",["M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zM192 384a128 128 0 1 1 128-128 127.93 127.93 0 0 1-128 128z","M192 384a128 128 0 1 1 128-128 127.93 127.93 0 0 1-128 128z"]]};var faToggleOn={prefix:"fad",iconName:"toggle-on",icon:[576,512,[],"f205",["M384 384a128 128 0 1 1 128-128 127.93 127.93 0 0 1-128 128z","M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm0 320a128 128 0 1 1 128-128 127.93 127.93 0 0 1-128 128z"]]};var faWandMagic={prefix:"fad",iconName:"wand-magic",icon:[512,512,[],"f72b",["M416 176v-28l-39.65 44H400a16 16 0 0 0 16-16zm-288 96v36.87L186.6 256H144a16 16 0 0 0-16 16zM106.66 53.33L80 0 53.34 53.34 0 80l53.34 26.67L80 160l26.66-53.33L160 80zm352 288L432 288l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368zM224 0l-16 32-32 16 32 16 16 32 16-32 32-16-32-16z","M507.87 46.18L97.16 501.44A32 32 0 0 1 52 503.71q-.6-.54-1.17-1.11L9.37 461.17a32 32 0 0 1 0-45.25c.38-.38.77-.75 1.16-1.11L465.79 4.11a16 16 0 0 1 22 .55l19.48 19.47a16 16 0 0 1 .6 22.05z"]]};

  (function () {
    if (typeof document !== 'undefined') {
      var head = document.head || document.getElementsByTagName('head')[0],
          style = document.createElement('style'),
          css = " .hue { color: #238ae6; animation: hue 30s infinite linear; } @keyframes hue { from { filter: hue-rotate(0deg); } to { filter: hue-rotate(-360deg); } } ";
      style.type = 'text/css';

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }

      head.appendChild(style);
    }
  })();
  var Showcase = {
    render: function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c('div', {
        staticClass: "jumbotron"
      }, [_c('div', {
        staticClass: "row"
      }, [_c('div', {
        staticClass: "col-md"
      }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('form', {
        on: {
          "submit": function submit($event) {
            $event.preventDefault();
          }
        }
      }, [_c('div', {
        staticClass: "form-group row"
      }, [_c('label', {
        staticClass: "col-sm-3 col-form-label"
      }, [_vm._v("Icon Sizes")]), _vm._v(" "), _c('div', {
        staticClass: "col-sm-9 row"
      }, [_c('div', {
        staticClass: "col-md-8 py-2"
      }, [_c('input', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _vm.model.size,
          expression: "model.size"
        }],
        staticClass: "form-control-range",
        attrs: {
          "type": "range",
          "min": "1",
          "max": "10",
          "step": "0.1"
        },
        domProps: {
          "value": _vm.model.size
        },
        on: {
          "__r": function __r($event) {
            return _vm.$set(_vm.model, "size", $event.target.value);
          }
        }
      })]), _vm._v(" "), _c('div', {
        staticClass: "col-md-4"
      }, [_c('div', {
        staticClass: "form-control text-center"
      }, [_vm._v(" " + _vm._s(_vm.model.size) + "x ")])])])]), _vm._v(" "), _c('div', {
        staticClass: "form-group row"
      }, [_c('label', {
        staticClass: "col-sm-3 col-form-label"
      }, [_vm._v("Pulled Icons")]), _vm._v(" "), _c('div', {
        staticClass: "col-sm-9"
      }, [_c('div', {
        staticClass: "btn-group",
        attrs: {
          "role": "group",
          "aria-label": "Basic example"
        }
      }, _vm._l(_vm.pull, function (p) {
        return _c('button', {
          key: p,
          class: "btn btn-" + _vm.checked('pull', p),
          attrs: {
            "type": "button"
          },
          on: {
            "click": function click($event) {
              return _vm.setValue('pull', p);
            }
          }
        }, [_vm._v(" " + _vm._s(p) + " ")]);
      }), 0)])]), _vm._v(" "), _c('div', {
        staticClass: "form-group row"
      }, [_c('label', {
        staticClass: "col-sm-3 col-form-label"
      }, [_vm._v("Flip")]), _vm._v(" "), _c('div', {
        staticClass: "col-sm-9"
      }, [_c('div', {
        staticClass: "btn-group",
        attrs: {
          "role": "group",
          "aria-label": "Basic example"
        }
      }, _vm._l(_vm.flip, function (f) {
        return _c('button', {
          key: f,
          class: "btn btn-" + _vm.checked('flip', f),
          attrs: {
            "type": "button"
          },
          on: {
            "click": function click($event) {
              return _vm.setValue('flip', f);
            }
          }
        }, [_vm._v(" " + _vm._s(f) + " ")]);
      }), 0)])]), _vm._v(" "), _c('div', {
        staticClass: "form-group row"
      }, [_c('label', {
        staticClass: "col-sm-3 col-form-label"
      }, [_vm._v("Rotate")]), _vm._v(" "), _c('div', {
        staticClass: "col-sm-9 row"
      }, [_c('div', {
        staticClass: "col-md-8 py-2"
      }, [_c('input', {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: _vm.model.rotate,
          expression: "model.rotate"
        }],
        staticClass: "form-control-range",
        attrs: {
          "type": "range",
          "min": "-360",
          "max": "360",
          "step": "1"
        },
        domProps: {
          "value": _vm.model.rotate
        },
        on: {
          "__r": function __r($event) {
            return _vm.$set(_vm.model, "rotate", $event.target.value);
          }
        }
      })]), _vm._v(" "), _c('div', {
        staticClass: "col-md-4"
      }, [_c('div', {
        staticClass: "form-control text-center"
      }, [_vm._v(" " + _vm._s(_vm.model.rotate) + "deg ")])])])])])]), _vm._v(" "), _c('div', {
        staticClass: "col-md row"
      }, _vm._l(_vm.icons, function (icon, i) {
        return _c('div', {
          key: i,
          staticClass: "col text-center hue"
        }, [_c('fa', {
          attrs: {
            "icon": icon,
            "flip": _vm.model.flip,
            "pull": _vm.model.pull,
            "rotate": _vm.model.rotate,
            "size": _vm.model.size + "x"
          }
        })], 1);
      }), 0)])]);
    },
    staticRenderFns: [function () {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c('h1', {
        staticClass: "hue"
      }, [_c('strong', [_vm._v("vue-fa")])]);
    }, function () {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c('p', {
        staticClass: "lead mb-5"
      }, [_vm._v(" Tiny "), _c('a', {
        attrs: {
          "href": "https://fontawesome.com/",
          "target": "_blank"
        }
      }, [_vm._v("FontAwesome 5")]), _vm._v(" component for "), _c('a', {
        attrs: {
          "href": "https://vuejs.org/",
          "target": "_blank"
        }
      }, [_vm._v("Vue.js")]), _vm._v(". ")]);
    }],
    components: {
      Fa: Fa
    },
    data: function data() {
      return {
        model: {
          size: 5,
          pull: undefined,
          flip: undefined,
          rotate: 0
        },
        pull: ['None', 'Left', 'Right'],
        flip: ['None', 'Horizontal', 'Vertical', 'Both'],
        icons: [faFlag, faHome, faCog, faMagic]
      };
    },
    methods: {
      setValue: function setValue(prop, value) {
        this.model[prop] = value == 'None' ? undefined : value.toLowerCase();
      },
      checked: function checked(prop, value) {
        return this.model[prop] == (value == 'None' ? undefined : value.toLowerCase()) ? 'primary' : 'secondary';
      }
    }
  };

  var faBook$1={prefix:'fas',iconName:'book',icon:[448,512,[],"f02d","M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"]};var faCog$1={prefix:'fas',iconName:'cog',icon:[512,512,[],"f013","M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"]};var faFlag$1={prefix:'fas',iconName:'flag',icon:[512,512,[],"f024","M349.565 98.783C295.978 98.783 251.721 64 184.348 64c-24.955 0-47.309 4.384-68.045 12.013a55.947 55.947 0 0 0 3.586-23.562C118.117 24.015 94.806 1.206 66.338.048 34.345-1.254 8 24.296 8 56c0 19.026 9.497 35.825 24 45.945V488c0 13.255 10.745 24 24 24h16c13.255 0 24-10.745 24-24v-94.4c28.311-12.064 63.582-22.122 114.435-22.122 53.588 0 97.844 34.783 165.217 34.783 48.169 0 86.667-16.294 122.505-40.858C506.84 359.452 512 349.571 512 339.045v-243.1c0-23.393-24.269-38.87-45.485-29.016-34.338 15.948-76.454 31.854-116.95 31.854z"]};var faHome$1={prefix:'fas',iconName:'home',icon:[576,512,[],"f015","M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"]};var faInfo={prefix:'fas',iconName:'info',icon:[192,512,[],"f129","M20 424.229h20V279.771H20c-11.046 0-20-8.954-20-20V212c0-11.046 8.954-20 20-20h112c11.046 0 20 8.954 20 20v212.229h20c11.046 0 20 8.954 20 20V492c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20v-47.771c0-11.046 8.954-20 20-20zM96 0C56.235 0 24 32.235 24 72s32.235 72 72 72 72-32.235 72-72S135.764 0 96 0z"]};var faMagic$1={prefix:'fas',iconName:'magic',icon:[512,512,[],"f0d0","M224 96l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32zM80 160l26.66-53.33L160 80l-53.34-26.67L80 0 53.34 53.33 0 80l53.34 26.67L80 160zm352 128l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368l-53.34-26.67L432 288zm70.62-193.77L417.77 9.38C411.53 3.12 403.34 0 395.15 0c-8.19 0-16.38 3.12-22.63 9.38L9.38 372.52c-12.5 12.5-12.5 32.76 0 45.25l84.85 84.85c6.25 6.25 14.44 9.37 22.62 9.37 8.19 0 16.38-3.12 22.63-9.37l363.14-363.15c12.5-12.48 12.5-32.75 0-45.24zM359.45 203.46l-50.91-50.91 86.6-86.6 50.91 50.91-86.6 86.6z"]};var faPencilAlt={prefix:'fas',iconName:'pencil-alt',icon:[512,512,[],"f303","M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"]};var faQuoteLeft={prefix:'fas',iconName:'quote-left',icon:[512,512,[],"f10d","M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"]};var faQuoteRight={prefix:'fas',iconName:'quote-right',icon:[512,512,[],"f10e","M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"]};

  (function () {
    if (typeof document !== 'undefined') {
      var head = document.head || document.getElementsByTagName('head')[0],
          style = document.createElement('style'),
          css = "";
      style.type = 'text/css';

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }

      head.appendChild(style);
    }
  })();
  /* global Prism */


  var DocsCode = {
    render: function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c('div', {
        staticClass: "shadow-sm mb-3 rounded"
      }, [_c('pre', [_c('code', {
        directives: [{
          name: "ref",
          rawName: "v-ref",
          value: _vm.el,
          expression: "el"
        }],
        class: "language-" + _vm.lang
      }, [_vm._v(_vm._s(_vm.code))])])]);
    },
    staticRenderFns: [],
    props: {
      code: {
        type: String,
        default: ''
      },
      lang: {
        type: String,
        default: 'html'
      }
    },
    watch: {
      code: 'highlight'
    },
    mounted: function mounted() {
      this.highlight();
    },
    methods: {
      highlight: function highlight() {
        var el = this.$refs.el;

        if (el) {
          Prism.highlightElement(el);
        }
      }
    }
  };

  (function () {
    if (typeof document !== 'undefined') {
      var head = document.head || document.getElementsByTagName('head')[0],
          style = document.createElement('style'),
          css = "";
      style.type = 'text/css';

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }

      head.appendChild(style);
    }
  })();
  var Docs = {
    render: function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c('div', [_c('h4', [_vm._v("Installation")]), _vm._v(" "), _c('docs-code', {
        attrs: {
          "code": _vm.codes.installation[0]
        }
      }), _vm._v(" "), _c('docs-code', {
        attrs: {
          "code": _vm.codes.installation[1],
          "lang": "js"
        }
      }), _vm._v(" "), _c('h4', [_vm._v("Basic Use")]), _vm._v(" "), _c('div', {
        staticClass: "shadow-sm p-3 mb-3 rounded"
      }, [_c('fa', {
        attrs: {
          "icon": _vm.faFlag
        }
      }), _vm._v(" Flag ")], 1), _vm._v(" "), _c('docs-code', {
        attrs: {
          "code": _vm.codes.basicUse[0]
        }
      }), _vm._v(" "), _c('div', {
        staticClass: "shadow-sm p-3 mb-3 rounded"
      }, [_c('div', {
        staticStyle: {
          "font-size": "3em",
          "color": "tomato"
        }
      }, [_c('fa', {
        attrs: {
          "icon": _vm.faFlag
        }
      })], 1)]), _vm._v(" "), _c('docs-code', {
        attrs: {
          "code": _vm.codes.basicUse[1]
        }
      }), _vm._v(" "), _c('h4', [_vm._v("Additional Styling")]), _vm._v(" "), _c('h5', [_vm._v("Icon Sizes")]), _vm._v(" "), _c('div', {
        staticClass: "shadow-sm p-3 mb-3 rounded"
      }, [_c('fa', {
        attrs: {
          "icon": _vm.faFlag,
          "size": "xs"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.faFlag,
          "size": "sm"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.faFlag,
          "size": "lg"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.faFlag,
          "size": "2x"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.faFlag,
          "size": "2.5x"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.faFlag,
          "size": "5x"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.faFlag,
          "size": "7x"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.faFlag,
          "size": "10x"
        }
      })], 1), _vm._v(" "), _c('docs-code', {
        attrs: {
          "code": _vm.codes.additionalStyling[0]
        }
      }), _vm._v(" "), _c('h5', [_vm._v("Fixed Width Icons")]), _vm._v(" "), _c('div', {
        staticClass: "shadow-sm p-3 mb-3 rounded"
      }, [_c('div', [_c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faHome,
          "fw": ""
        }
      }), _vm._v(" Home ")], 1), _vm._v(" "), _c('div', [_c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faInfo,
          "fw": ""
        }
      }), _vm._v(" Info ")], 1), _vm._v(" "), _c('div', [_c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faBook,
          "fw": ""
        }
      }), _vm._v(" Library ")], 1), _vm._v(" "), _c('div', [_c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faPencilAlt,
          "fw": ""
        }
      }), _vm._v(" Applications ")], 1), _vm._v(" "), _c('div', [_c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faCog,
          "fw": ""
        }
      }), _vm._v(" Settins ")], 1)]), _vm._v(" "), _c('docs-code', {
        attrs: {
          "code": _vm.codes.additionalStyling[1]
        }
      }), _vm._v(" "), _c('h5', [_vm._v("Pulled Icons")]), _vm._v(" "), _c('div', {
        staticClass: "shadow-sm p-3 mb-3 rounded clearfix"
      }, [_c('fa', {
        attrs: {
          "icon": _vm.faQuoteLeft,
          "pull": "left",
          "size": "2x"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.faQuoteRight,
          "pull": "right",
          "size": "2x"
        }
      }), _vm._v(" Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past. ")], 1), _vm._v(" "), _c('docs-code', {
        attrs: {
          "code": _vm.codes.additionalStyling[2]
        }
      }), _vm._v(" "), _c('h4', [_vm._v("Power Transforms")]), _vm._v(" "), _c('h5', [_vm._v("Rotating & Flipping")]), _vm._v(" "), _c('div', {
        staticClass: "shadow-sm p-3 mb-3 rounded"
      }, [_c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faMagic,
          "rotate": 90,
          "size": "4x"
        }
      }), _vm._v(" "), _c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faMagic,
          "rotate": 180,
          "size": "4x"
        }
      }), _vm._v(" "), _c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faMagic,
          "size": "4x",
          "rotate": "270"
        }
      }), _vm._v(" "), _c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faMagic,
          "size": "4x",
          "rotate": "30"
        }
      }), _vm._v(" "), _c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faMagic,
          "size": "4x",
          "rotate": "-30"
        }
      }), _vm._v(" "), _c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faMagic,
          "size": "4x",
          "flip": "vertical"
        }
      }), _vm._v(" "), _c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faMagic,
          "size": "4x",
          "flip": "horizontal"
        }
      }), _vm._v(" "), _c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faMagic,
          "size": "4x",
          "flip": "both"
        }
      }), _vm._v(" "), _c('fa', {
        staticStyle: {
          "background": "mistyrose"
        },
        attrs: {
          "icon": _vm.faMagic,
          "size": "4x",
          "flip": "both",
          "rotate": "30"
        }
      })], 1), _vm._v(" "), _c('docs-code', {
        attrs: {
          "code": _vm.codes.powerTransforms[0]
        }
      }), _vm._v(" "), _c('h4', [_vm._v("Duotone Icons")]), _vm._v(" "), _c('h5', [_vm._v("Basic Use")]), _vm._v(" "), _c('div', {
        staticClass: "shadow-sm p-3 mb-3 rounded"
      }, [_c('fa', {
        attrs: {
          "icon": _vm.fadCamera,
          "size": "3x"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadFireAlt,
          "size": "3x"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadBusAlt,
          "size": "3x"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadFillDrip,
          "size": "3x"
        }
      })], 1), _vm._v(" "), _c('DocsCode', {
        attrs: {
          "code": _vm.codes.duotoneIcons[0],
          "lang": "js"
        }
      }), _vm._v(" "), _c('DocsCode', {
        attrs: {
          "code": _vm.codes.duotoneIcons[1]
        }
      }), _vm._v(" "), _c('h5', [_vm._v("Swapping Layer Opacity")]), _vm._v(" "), _c('div', {
        staticClass: "shadow-sm p-3 mb-3 rounded"
      }, [_c('fa', {
        attrs: {
          "icon": _vm.fadCamera,
          "size": "3x"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadCamera,
          "size": "3x",
          "swap-opacity": ""
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadFireAlt,
          "size": "3x"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadFireAlt,
          "size": "3x",
          "swap-opacity": ""
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadBusAlt,
          "size": "3x"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadBusAlt,
          "size": "3x",
          "swap-opacity": ""
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadFillDrip,
          "size": "3x"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadFillDrip,
          "size": "3x",
          "swap-opacity": ""
        }
      })], 1), _vm._v(" "), _c('DocsCode', {
        attrs: {
          "code": _vm.codes.duotoneIcons[2]
        }
      }), _vm._v(" "), _c('h5', [_vm._v("Changing Opacity")]), _vm._v(" "), _c('div', {
        staticClass: "shadow-sm p-3 mb-3 rounded"
      }, [_c('fa', {
        attrs: {
          "icon": _vm.fadBusAlt,
          "secondary-opacity": .2,
          "size": "3x"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadBusAlt,
          "secondary-opacity": .4,
          "size": "3x"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadBusAlt,
          "secondary-opacity": .6,
          "size": "3x"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadBusAlt,
          "secondary-opacity": .8,
          "size": "3x"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadBusAlt,
          "secondary-opacity": 1,
          "size": "3x"
        }
      })], 1), _vm._v(" "), _c('DocsCode', {
        attrs: {
          "code": _vm.codes.duotoneIcons[3]
        }
      }), _vm._v(" "), _c('div', {
        staticClass: "shadow-sm p-3 mb-3 rounded"
      }, [_c('fa', {
        attrs: {
          "icon": _vm.fadBusAlt,
          "primary-opacity": .2,
          "size": "3x"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadBusAlt,
          "primary-opacity": .4,
          "size": "3x"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadBusAlt,
          "primary-opacity": .6,
          "size": "3x"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadBusAlt,
          "primary-opacity": .8,
          "size": "3x"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadBusAlt,
          "primary-opacity": 1,
          "size": "3x"
        }
      })], 1), _vm._v(" "), _c('DocsCode', {
        attrs: {
          "code": _vm.codes.duotoneIcons[4]
        }
      }), _vm._v(" "), _c('h5', [_vm._v("Coloring Duotone Icons")]), _vm._v(" "), _c('div', {
        staticClass: "shadow-sm p-3 mb-3 rounded"
      }, [_c('fa', {
        attrs: {
          "icon": _vm.fadBusAlt,
          "size": "3x",
          "primary-color": "gold"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadBusAlt,
          "size": "3x",
          "primary-color": "orangered"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadFillDrip,
          "size": "3x",
          "secondary-color": "limegreen"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadFillDrip,
          "size": "3x",
          "secondary-color": "rebeccapurple"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadBatteryFull,
          "size": "3x",
          "primary-color": "limegreen",
          "secondary-color": "dimgray"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadBatteryQuarter,
          "size": "3x",
          "primary-color": "orange",
          "secondary-color": "dimgray"
        }
      })], 1), _vm._v(" "), _c('DocsCode', {
        attrs: {
          "code": _vm.codes.duotoneIcons[5]
        }
      }), _vm._v(" "), _c('h5', [_vm._v("Advanced Use")]), _vm._v(" "), _c('div', {
        staticClass: "shadow-sm p-3 mb-3 rounded"
      }, [_c('fa', {
        attrs: {
          "icon": _vm.fadBook,
          "secondary-opacity": 1,
          "size": "3x",
          "primary-color": "lightseagreen",
          "secondary-color": "linen"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadBookSpells,
          "secondary-opacity": 1,
          "size": "3x",
          "primary-color": "mediumpurple",
          "secondary-color": "linen"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadBookMedical,
          "secondary-opacity": 1,
          "size": "3x",
          "primary-color": "crimson",
          "secondary-color": "linen"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadBookUser,
          "secondary-opacity": 1,
          "size": "3x",
          "primary-color": "peru",
          "secondary-color": "linen"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadToggleOff,
          "secondary-opacity": 1,
          "size": "3x",
          "primary-color": "white",
          "secondary-color": "gray"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadToggleOn,
          "secondary-opacity": 1,
          "size": "3x",
          "primary-color": "dodgerblue",
          "secondary-color": "white"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadFilePlus,
          "secondary-opacity": 1,
          "size": "3x",
          "primary-color": "white",
          "secondary-color": "limegreen"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadFileExclamation,
          "secondary-opacity": 1,
          "size": "3x",
          "primary-color": "white",
          "secondary-color": "gold"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadFileTimes,
          "secondary-opacity": 1,
          "size": "3x",
          "primary-color": "white",
          "secondary-color": "tomato"
        }
      })], 1), _vm._v(" "), _c('DocsCode', {
        attrs: {
          "code": _vm.codes.duotoneIcons[6]
        }
      }), _vm._v(" "), _c('div', {
        staticClass: "shadow-sm p-3 mb-3 rounded"
      }, [_c('fa', {
        attrs: {
          "icon": _vm.fadCrow,
          "secondary-opacity": 1,
          "size": "3x",
          "primary-color": "dodgerblue",
          "secondary-color": "gold"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadCampfire,
          "secondary-opacity": 1,
          "size": "3x",
          "primary-color": "sienna",
          "secondary-color": "red"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadBirthdayCake,
          "secondary-opacity": 1,
          "size": "3x",
          "primary-color": "pink",
          "secondary-color": "palevioletred"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadEar,
          "secondary-opacity": 1,
          "size": "3x",
          "primary-color": "sandybrown",
          "secondary-color": "bisque"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadCorn,
          "secondary-opacity": 1,
          "size": "3x",
          "primary-color": "mediumseagreen",
          "secondary-color": "gold"
        }
      }), _vm._v(" "), _c('fa', {
        attrs: {
          "icon": _vm.fadCookieBite,
          "secondary-opacity": 1,
          "size": "3x",
          "primary-color": "saddlebrown",
          "secondary-color": "burlywood"
        }
      })], 1), _vm._v(" "), _c('DocsCode', {
        attrs: {
          "code": _vm.codes.duotoneIcons[7]
        }
      }), _vm._v(" "), _c('div', {
        staticClass: "shadow-sm p-3 mb-3 rounded"
      }, [_c('fa', _vm._b({
        attrs: {
          "icon": _vm.fadHatWizard,
          "size": "3x"
        }
      }, 'fa', _vm.themeRavenclaw, false)), _vm._v(" "), _c('fa', _vm._b({
        attrs: {
          "icon": _vm.fadFlaskPotion,
          "size": "3x"
        }
      }, 'fa', _vm.themeRavenclaw, false)), _vm._v(" "), _c('fa', _vm._b({
        attrs: {
          "icon": _vm.fadWandMagic,
          "size": "3x"
        }
      }, 'fa', _vm.themeRavenclaw, false)), _vm._v(" "), _c('fa', _vm._b({
        attrs: {
          "icon": _vm.fadScarf,
          "size": "3x"
        }
      }, 'fa', _vm.themeRavenclaw, false)), _vm._v(" "), _c('fa', _vm._b({
        attrs: {
          "icon": _vm.fadBookSpells,
          "size": "3x"
        }
      }, 'fa', _vm.themeRavenclaw, false))], 1), _vm._v(" "), _c('DocsCode', {
        attrs: {
          "code": _vm.codes.duotoneIcons[8],
          "lang": "js"
        }
      }), _vm._v(" "), _c('DocsCode', {
        attrs: {
          "code": _vm.codes.duotoneIcons[9]
        }
      })], 1);
    },
    staticRenderFns: [],
    components: {
      Fa: Fa,
      DocsCode: DocsCode
    },
    data: function data() {
      return {
        faFlag: faFlag$1,
        faHome: faHome$1,
        faInfo: faInfo,
        faBook: faBook$1,
        faPencilAlt: faPencilAlt,
        faCog: faCog$1,
        faQuoteLeft: faQuoteLeft,
        faQuoteRight: faQuoteRight,
        faMagic: faMagic$1,
        fadCamera: faCamera,
        fadFireAlt: faFireAlt,
        fadBusAlt: faBusAlt,
        fadFillDrip: faFillDrip,
        fadBatteryFull: faBatteryFull,
        fadBatteryQuarter: faBatteryQuarter,
        fadBook: faBook,
        fadBookSpells: faBookSpells,
        fadBookMedical: faBookMedical,
        fadBookUser: faBookUser,
        fadToggleOff: faToggleOff,
        fadToggleOn: faToggleOn,
        fadFilePlus: faFilePlus,
        fadFileExclamation: faFileExclamation,
        fadFileTimes: faFileTimes,
        fadCrow: faCrow,
        fadCampfire: faCampfire,
        fadBirthdayCake: faBirthdayCake,
        fadEar: faEar,
        fadCorn: faCorn,
        fadCookieBite: faCookieBite,
        fadHatWizard: faHatWizard,
        fadFlaskPotion: faFlaskPotion,
        fadWandMagic: faWandMagic,
        fadScarf: faScarf,
        themeRavenclaw: {
          secondaryOpacity: 1,
          primaryColor: '#0438a1',
          secondaryColor: '#6c6c6c'
        },
        codes: {
          installation: ['npm install vue-fa --save', "import Fa from 'vue-fa'\nimport { faFlag } from '@fortawesome/free-solid-svg-icons'\n\n" + 'export ' + "default {\n  components: {\n    Fa\n  },\n\n  data() {\n    return {\n      faFlag\n    }\n  }\n}"],
          basicUse: ['<fa :icon="faFlag" /> Flag', "<div style=\"font-size: 3em; color: tomato\">\n  <fa :icon=\"faFlag\" />\n</div>"],
          additionalStyling: ["<fa :icon=\"faFlag\" size=\"xs\" />\n<fa :icon=\"faFlag\" size=\"sm\" />\n<fa :icon=\"faFlag\" size=\"lg\" />\n<fa :icon=\"faFlag\" size=\"2x\" />\n<fa :icon=\"faFlag\" size=\"2.5x\" />\n<fa :icon=\"faFlag\" size=\"5x\" />\n<fa :icon=\"faFlag\" size=\"7x\" />\n<fa :icon=\"faFlag\" size=\"10x\" />", "<div>\n  <fa :icon=\"faHome\" fw style=\"background: mistyrose\" /> Home\n</div>\n<div>\n  <fa :icon=\"faInfo\" fw style=\"background: mistyrose\" /> Info\n</div>\n<div>\n  <fa :icon=\"faBook\" fw style=\"background: mistyrose\" /> Library\n</div>\n<div>\n  <fa :icon=\"faPencilAlt\" fw style=\"background: mistyrose\" /> Applications\n</div>\n<div>\n  <fa :icon=\"faCog\" fw style=\"background: mistyrose\" /> Settins\n</div>", "<fa :icon=\"faQuoteLeft\" pull=\"left\" size=\"2x\" />\n<fa :icon=\"faQuoteRight\" pull=\"right\" size=\"2x\" />\nGatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that\u2019s no matter \u2014 tomorrow we will run faster, stretch our arms further... And one fine morning \u2014 So we beat on, boats against the current, borne back ceaselessly into the past."],
          powerTransforms: ["<fa :icon=\"faMagic\" size=\"4x\" :rotate=\"90\" style=\"background: mistyrose\"/>\n<fa :icon=\"faMagic\" size=\"4x\" :rotate=\"180\" style=\"background: mistyrose\"/>\n<fa :icon=\"faMagic\" size=\"4x\" rotate=\"270\" style=\"background: mistyrose\"/>\n<fa :icon=\"faMagic\" size=\"4x\" rotate=\"30\" style=\"background: mistyrose\"/>\n<fa :icon=\"faMagic\" size=\"4x\" rotate=\"-30\" style=\"background: mistyrose\"/>\n<fa :icon=\"faMagic\" size=\"4x\" flip=\"vertical\" style=\"background: mistyrose\"/>\n<fa :icon=\"faMagic\" size=\"4x\" flip=\"horizontal\" style=\"background: mistyrose\"/>\n<fa :icon=\"faMagic\" size=\"4x\" flip=\"both\" style=\"background: mistyrose\"/>\n<fa :icon=\"faMagic\" size=\"4x\" flip=\"both\" style=\"background: mistyrose\"/>"],
          duotoneIcons: ["import {\n  faCamera,\n  faFireAlt,\n  faBusAlt,\n  faFillDrip,\n} from '@fortawesome/pro-duotone-svg-icons'", "<fa :icon=\"faCamera\" size=\"3x\" />\n<fa :icon=\"faFireAlt\" size=\"3x\" />\n<fa :icon=\"faBusAlt\" size=\"3x\" />\n<fa :icon=\"faFillDrip\" size=\"3x\" />", "<fa :icon=\"faCamera\" size=\"3x\" />\n<fa :icon=\"faCamera\" size=\"3x\" swap-opacity />\n<fa :icon=\"faFireAlt\" size=\"3x\" />\n<fa :icon=\"faFireAlt\" size=\"3x\" swap-opacity />\n<fa :icon=\"faBusAlt\" size=\"3x\" />\n<fa :icon=\"faBusAlt\" size=\"3x\" swap-opacity />\n<fa :icon=\"faFillDrip\" size=\"3x\" />\n<fa :icon=\"faFillDrip\" size=\"3x\" swap-opacity />", "<fa :icon=\"faBusAlt\" size=\"3x\" :secondary-opacity=\".2\" />\n<fa :icon=\"faBusAlt\" size=\"3x\" :secondary-opacity=\".4\" />\n<fa :icon=\"faBusAlt\" size=\"3x\" :secondary-opacity=\".6\" />\n<fa :icon=\"faBusAlt\" size=\"3x\" :secondary-opacity=\".8\" />\n<fa :icon=\"faBusAlt\" size=\"3x\" :secondary-opacity=\"1\" />", "<fa :icon=\"faBusAlt\" size=\"3x\" :primary-opacity=\".2\" />\n<fa :icon=\"faBusAlt\" size=\"3x\" :primary-opacity=\".4\" />\n<fa :icon=\"faBusAlt\" size=\"3x\" :primary-opacity=\".6\" />\n<fa :icon=\"faBusAlt\" size=\"3x\" :primary-opacity=\".8\" />\n<fa :icon=\"faBusAlt\" size=\"3x\" :primary-opacity=\"1\" />", "<fa :icon=\"faBusAlt\" size=\"3x\" primary-color=\"gold\" />\n<fa :icon=\"faBusAlt\" size=\"3x\" primary-color=\"orangered\" />\n<fa :icon=\"faFillDrip\" size=\"3x\" secondary-color=\"limegreen\" />\n<fa :icon=\"faFillDrip\" size=\"3x\" secondary-color=\"rebeccapurple\" />\n<fa :icon=\"faBatteryFull\" size=\"3x\" primary-color=\"limegreen\" secondary-color=\"dimgray\" />\n<fa :icon=\"faBatteryQuarter\" size=\"3x\" primary-color=\"orange\" secondary-color=\"dimgray\" />", "<fa :icon=\"faBook\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"lightseagreen\" secondary-color=\"linen\" />\n<fa :icon=\"faBookSpells\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"mediumpurple\" secondary-color=\"linen\" />\n<fa :icon=\"faBookMedical\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"crimson\" secondary-color=\"linen\" />\n<fa :icon=\"faBookUser\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"peru\" secondary-color=\"linen\" />\n<fa :icon=\"faToggleOff\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"white\" secondary-color=\"gray\" />\n<fa :icon=\"faToggleOn\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"dodgerblue\" secondary-color=\"white\" />\n<fa :icon=\"faFilePlus\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"white\" secondary-color=\"limegreen\" />\n<fa :icon=\"faFileExclamation\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"white\" secondary-color=\"gold\" />\n<fa :icon=\"faFileTimes\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"white\" secondary-color=\"tomato\" />", "<fa :icon=\"faCrow\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"dodgerblue\" secondary-color=\"gold\" />\n<fa :icon=\"faCampfire\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"sienna\" secondary-color=\"red\" />\n<fa :icon=\"faBirthdayCake\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"pink\" secondary-color=\"palevioletred\" />\n<fa :icon=\"faEar\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"sandybrown\" secondary-color=\"bisque\" />\n<fa :icon=\"faCorn\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"mediumseagreen\" secondary-color=\"gold\" />\n<fa :icon=\"faCookieBite\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"saddlebrown\" secondary-color=\"burlywood\" />", "const themeRavenclaw = {\n  secondaryOpacity: 1,\n  primary-color: '#0438a1',\n  secondary-color: '#6c6c6c',\n}", "<fa :icon=\"faHatWizard\" size=\"3x\" v-bind=\"themeRavenclaw\" />\n<fa :icon=\"faFlaskPotion\" size=\"3x\" v-bind=\"themeRavenclaw\" />\n<fa :icon=\"faWandMagic\" size=\"3x\" v-bind=\"themeRavenclaw\" />\n<fa :icon=\"faScarf\" size=\"3x\" v-bind=\"themeRavenclaw\" />\n<fa :icon=\"faBookSpells\" size=\"3x\" v-bind=\"themeRavenclaw\" />"]
        }
      };
    }
  };

  (function () {
    if (typeof document !== 'undefined') {
      var head = document.head || document.getElementsByTagName('head')[0],
          style = document.createElement('style'),
          css = "";
      style.type = 'text/css';

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }

      head.appendChild(style);
    }
  })();
  var App = {
    render: function render() {
      var _vm = this;

      var _h = _vm.$createElement;

      var _c = _vm._self._c || _h;

      return _c('div', {
        staticClass: "container my-4"
      }, [_c('showcase'), _vm._v(" "), _c('docs')], 1);
    },
    staticRenderFns: [],
    components: {
      Showcase: Showcase,
      Docs: Docs
    }
  };

  new Vue({
    el: '#app',
    components: {
      App: App
    },
    render: function render(h) {
      return h('app');
    }
  });

}(Vue, VueFa));
