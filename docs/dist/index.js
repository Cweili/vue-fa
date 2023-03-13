(function (vue, Fa) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Fa__default = /*#__PURE__*/_interopDefaultLegacy(Fa);

  var faInfo={prefix:'fas',iconName:'info',icon:[192,512,[],"f129","M48 80a48 48 0 1 1 96 0A48 48 0 1 1 48 80zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z"]};var faPencil={prefix:'fas',iconName:'pencil',icon:[512,512,[9999,61504,"pencil-alt"],"f303","M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]};var faPencilAlt=faPencil;var faCircleNotch={prefix:'fas',iconName:'circle-notch',icon:[512,512,[],"f1ce","M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z"]};var faFlag={prefix:'fas',iconName:'flag',icon:[448,512,[127988,61725],"f024","M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"]};var faBookmark={prefix:'fas',iconName:'bookmark',icon:[384,512,[128278,61591],"f02e","M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"]};var faStar={prefix:'fas',iconName:'star',icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]};var faStroopwafel={prefix:'fas',iconName:'stroopwafel',icon:[512,512,[],"f551","M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM312.6 63.7c-6.2-6.2-16.4-6.2-22.6 0L256 97.6 222.1 63.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l33.9 33.9-45.3 45.3-56.6-56.6c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l56.6 56.6-45.3 45.3L86.3 199.4c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L97.6 256 63.7 289.9c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l33.9-33.9 45.3 45.3-56.6 56.6c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l56.6-56.6 45.3 45.3-33.9 33.9c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 414.4l33.9 33.9c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-33.9-33.9 45.3-45.3 56.6 56.6c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-56.6-56.6 45.3-45.3 33.9 33.9c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L414.4 256l33.9-33.9c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-33.9 33.9-45.3-45.3 56.6-56.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-56.6 56.6-45.3-45.3 33.9-33.9c6.2-6.2 6.2-16.4 0-22.6zM142.9 256l45.3-45.3L233.4 256l-45.3 45.3L142.9 256zm67.9 67.9L256 278.6l45.3 45.3L256 369.1l-45.3-45.3zM278.6 256l45.3-45.3L369.1 256l-45.3 45.3L278.6 256zm22.6-67.9L256 233.4l-45.3-45.3L256 142.9l45.3 45.3z"]};var faCertificate={prefix:'fas',iconName:'certificate',icon:[512,512,[],"f0a3","M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.3-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z"]};var faSeedling={prefix:'fas',iconName:'seedling',icon:[512,512,[127793,"sprout"],"f4d8","M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0h32c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64H64c123.7 0 224 100.3 224 224v32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320C100.3 320 0 219.7 0 96z"]};var faArrowsRotate={prefix:'fas',iconName:'arrows-rotate',icon:[512,512,[128472,"refresh","sync"],"f021","M89.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L370.3 160H320c-17.7 0-32 14.3-32 32s14.3 32 32 32H447.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L398.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C57.2 122 39.6 150.7 28.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM23 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L109.6 352H160c17.7 0 32-14.3 32-32s-14.3-32-32-32H32.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"]};var faSync=faArrowsRotate;var faHeart={prefix:'fas',iconName:'heart',icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]};var faCircle={prefix:'fas',iconName:'circle',icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"]};var faQuoteRight={prefix:'fas',iconName:'quote-right',icon:[448,512,[8221,"quote-right-alt"],"f10e","M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"]};var faEnvelope={prefix:'fas',iconName:'envelope',icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};var faGear={prefix:'fas',iconName:'gear',icon:[512,512,[9881,"cog"],"f013","M481.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-30.9 28.1c-7.7 7.1-11.4 17.5-10.9 27.9c.1 2.9 .2 5.8 .2 8.8s-.1 5.9-.2 8.8c-.5 10.5 3.1 20.9 10.9 27.9l30.9 28.1c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-39.7-12.6c-10-3.2-20.8-1.1-29.7 4.6c-4.9 3.1-9.9 6.1-15.1 8.7c-9.3 4.8-16.5 13.2-18.8 23.4l-8.9 40.7c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-8.9-40.7c-2.2-10.2-9.5-18.6-18.8-23.4c-5.2-2.7-10.2-5.6-15.1-8.7c-8.8-5.7-19.7-7.8-29.7-4.6L69.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l30.9-28.1c7.7-7.1 11.4-17.5 10.9-27.9c-.1-2.9-.2-5.8-.2-8.8s.1-5.9 .2-8.8c.5-10.5-3.1-20.9-10.9-27.9L8.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l39.7 12.6c10 3.2 20.8 1.1 29.7-4.6c4.9-3.1 9.9-6.1 15.1-8.7c9.3-4.8 16.5-13.2 18.8-23.4l8.9-40.7c2-9.1 9-16.3 18.2-17.8C213.3 1.2 227.5 0 242 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l8.9 40.7c2.2 10.2 9.4 18.6 18.8 23.4c5.2 2.7 10.2 5.6 15.1 8.7c8.8 5.7 19.7 7.7 29.7 4.6l39.7-12.6c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM242 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]};var faCog=faGear;var faHouse={prefix:'fas',iconName:'house',icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]};var faHome=faHouse;var faSun={prefix:'fas',iconName:'sun',icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]};var faLink={prefix:'fas',iconName:'link',icon:[640,512,[128279,"chain"],"f0c1","M562.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L405.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C189.5 251.2 196 330 246 380c56.5 56.5 148 56.5 204.5 0L562.8 267.7zM43.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C57 372 57 321 88.5 289.5L200.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C416.5 260.8 410 182 360 132c-56.5-56.5-148-56.5-204.5 0L43.2 244.3z"]};var faPlay={prefix:'fas',iconName:'play',icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]};var faXmark={prefix:'fas',iconName:'xmark',icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]};var faTimes=faXmark;var faQuoteLeft={prefix:'fas',iconName:'quote-left',icon:[448,512,[8220,"quote-left-alt"],"f10d","M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"]};var faSpinner={prefix:'fas',iconName:'spinner',icon:[512,512,[],"f110","M304 48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm0 416c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM48 304c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm464-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z"]};var faMoon={prefix:'fas',iconName:'moon',icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]};var faCalendar={prefix:'fas',iconName:'calendar',icon:[448,512,[128197,128198],"f133","M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"]};var faBook={prefix:'fas',iconName:'book',icon:[448,512,[128212],"f02d","M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]};

  var script$5 = vue.defineComponent({
    components: {
      Fa: Fa__default["default"]
    },
    setup: function setup() {
      var model = vue.reactive({
        size: 5,
        pull: undefined,
        flip: undefined,
        rotate: 0
      });
      var pull = ['None', 'Left', 'Right'];
      var flip = ['None', 'Horizontal', 'Vertical', 'Both'];
      var icons = [faFlag, faHome, faCog, faSeedling];
      var setValue = function setValue(prop, value) {
        model[prop] = value === 'None' ? undefined : value.toLowerCase();
      };
      var checked = function checked(prop, value) {
        return model[prop] === (value === 'None' ? undefined : value.toLowerCase()) ? 'primary' : 'secondary';
      };
      return {
        model: model,
        pull: pull,
        flip: flip,
        icons: icons,
        setValue: setValue,
        checked: checked
      };
    }
  });

  var _withScopeId$1 = function _withScopeId(n) {
    return vue.pushScopeId("data-v-d8b0228a"), n = n(), vue.popScopeId(), n;
  };
  var _hoisted_1$5 = {
    class: "jumbotron"
  };
  var _hoisted_2$3 = {
    class: "row"
  };
  var _hoisted_3$1 = {
    class: "col-md"
  };
  var _hoisted_4$1 = /*#__PURE__*/vue.createStaticVNode("<h1 class=\"hue\" data-v-d8b0228a><strong data-v-d8b0228a><a href=\"https://github.com/Cweili/vue-fa\" target=\"_blank\" data-v-d8b0228a>vue-fa</a></strong></h1><p data-v-d8b0228a><a href=\"https://www.npmjs.com/package/vue-fa\" target=\"_blank\" data-v-d8b0228a><img src=\"https://img.shields.io/npm/v/vue-fa.svg\" alt=\"npm version\" data-v-d8b0228a></a> <a href=\"https://bundlephobia.com/result?p=vue-fa\" target=\"_blank\" data-v-d8b0228a><img src=\"https://img.shields.io/bundlephobia/minzip/vue-fa.svg\" alt=\"bundle size\" data-v-d8b0228a></a> <a href=\"https://github.com/Cweili/vue-fa/blob/master/LICENSE\" target=\"_blank\" data-v-d8b0228a><img src=\"https://img.shields.io/npm/l/vue-fa.svg\" alt=\"MIT licence\" data-v-d8b0228a></a> <a href=\"https://www.npmjs.com/package/vue-fa\" target=\"_blank\" data-v-d8b0228a><img src=\"https://img.shields.io/npm/dt/vue-fa.svg\" alt=\"npm downloads\" data-v-d8b0228a></a> <a href=\"https://github.com/Cweili/vue-fa\" target=\"_blank\" data-v-d8b0228a><img src=\"https://img.shields.io/github/issues/Cweili/vue-fa.svg\" alt=\"github issues\" data-v-d8b0228a></a></p><p class=\"lead mb-5\" data-v-d8b0228a> Tiny <a class=\"hue\" href=\"https://fontawesome.com/\" target=\"_blank\" data-v-d8b0228a>FontAwesome 5+</a> component for <a class=\"hue\" href=\"https://vuejs.org/\" target=\"_blank\" data-v-d8b0228a>Vue.js</a>. </p>", 3);
  var _hoisted_7$1 = {
    class: "form-group row"
  };
  var _hoisted_8$1 = /*#__PURE__*/_withScopeId$1(function () {
    return /*#__PURE__*/vue.createElementVNode("label", {
      class: "col-sm-3 col-form-label"
    }, "Icon Sizes", -1 /* HOISTED */);
  });
  var _hoisted_9$1 = {
    class: "col-sm-9 row"
  };
  var _hoisted_10$1 = {
    class: "col-md-8 py-2"
  };
  var _hoisted_11$1 = {
    class: "col-md-4"
  };
  var _hoisted_12$1 = {
    class: "form-control text-center"
  };
  var _hoisted_13$1 = {
    class: "form-group row"
  };
  var _hoisted_14$1 = /*#__PURE__*/_withScopeId$1(function () {
    return /*#__PURE__*/vue.createElementVNode("label", {
      class: "col-sm-3 col-form-label"
    }, "Pulled Icons", -1 /* HOISTED */);
  });
  var _hoisted_15$1 = {
    class: "col-sm-9"
  };
  var _hoisted_16 = {
    class: "btn-group",
    role: "group",
    "aria-label": "Basic example"
  };
  var _hoisted_17 = ["onClick"];
  var _hoisted_18 = {
    class: "form-group row"
  };
  var _hoisted_19 = /*#__PURE__*/_withScopeId$1(function () {
    return /*#__PURE__*/vue.createElementVNode("label", {
      class: "col-sm-3 col-form-label"
    }, "Flip", -1 /* HOISTED */);
  });
  var _hoisted_20 = {
    class: "col-sm-9"
  };
  var _hoisted_21 = {
    class: "btn-group",
    role: "group",
    "aria-label": "Basic example"
  };
  var _hoisted_22 = ["onClick"];
  var _hoisted_23 = {
    class: "form-group row"
  };
  var _hoisted_24 = /*#__PURE__*/_withScopeId$1(function () {
    return /*#__PURE__*/vue.createElementVNode("label", {
      class: "col-sm-3 col-form-label"
    }, "Rotate", -1 /* HOISTED */);
  });
  var _hoisted_25 = {
    class: "col-sm-9 row"
  };
  var _hoisted_26 = {
    class: "col-md-8 py-2"
  };
  var _hoisted_27 = {
    class: "col-md-4"
  };
  var _hoisted_28 = {
    class: "form-control text-center"
  };
  var _hoisted_29 = {
    class: "col-md row"
  };
  function render$5(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_Fa = vue.resolveComponent("Fa");
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [vue.createElementVNode("div", _hoisted_2$3, [vue.createElementVNode("div", _hoisted_3$1, [_hoisted_4$1, vue.createElementVNode("form", {
      onSubmit: _cache[2] || (_cache[2] = vue.withModifiers(function () {}, ["prevent"]))
    }, [vue.createElementVNode("div", _hoisted_7$1, [_hoisted_8$1, vue.createElementVNode("div", _hoisted_9$1, [vue.createElementVNode("div", _hoisted_10$1, [vue.withDirectives(vue.createElementVNode("input", {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
        return _ctx.model.size = $event;
      }),
      type: "range",
      class: "form-control-range",
      min: "1",
      max: "10",
      step: "0.1"
    }, null, 512 /* NEED_PATCH */), [[vue.vModelText, _ctx.model.size]])]), vue.createElementVNode("div", _hoisted_11$1, [vue.createElementVNode("div", _hoisted_12$1, vue.toDisplayString(_ctx.model.size) + "x ", 1 /* TEXT */)])])]), vue.createElementVNode("div", _hoisted_13$1, [_hoisted_14$1, vue.createElementVNode("div", _hoisted_15$1, [vue.createElementVNode("div", _hoisted_16, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.pull, function (p) {
      return vue.openBlock(), vue.createElementBlock("button", {
        key: p,
        class: vue.normalizeClass("btn btn-" + _ctx.checked('pull', p)),
        type: "button",
        onClick: function onClick($event) {
          return _ctx.setValue('pull', p);
        }
      }, vue.toDisplayString(p), 11 /* TEXT, CLASS, PROPS */, _hoisted_17);
    }), 128 /* KEYED_FRAGMENT */))])])]), vue.createElementVNode("div", _hoisted_18, [_hoisted_19, vue.createElementVNode("div", _hoisted_20, [vue.createElementVNode("div", _hoisted_21, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.flip, function (f) {
      return vue.openBlock(), vue.createElementBlock("button", {
        key: f,
        class: vue.normalizeClass("btn btn-" + _ctx.checked('flip', f)),
        type: "button",
        onClick: function onClick($event) {
          return _ctx.setValue('flip', f);
        }
      }, vue.toDisplayString(f), 11 /* TEXT, CLASS, PROPS */, _hoisted_22);
    }), 128 /* KEYED_FRAGMENT */))])])]), vue.createElementVNode("div", _hoisted_23, [_hoisted_24, vue.createElementVNode("div", _hoisted_25, [vue.createElementVNode("div", _hoisted_26, [vue.withDirectives(vue.createElementVNode("input", {
      "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
        return _ctx.model.rotate = $event;
      }),
      type: "range",
      class: "form-control-range",
      min: "-360",
      max: "360",
      step: "1"
    }, null, 512 /* NEED_PATCH */), [[vue.vModelText, _ctx.model.rotate]])]), vue.createElementVNode("div", _hoisted_27, [vue.createElementVNode("div", _hoisted_28, vue.toDisplayString(_ctx.model.rotate) + "deg ", 1 /* TEXT */)])])])], 32 /* HYDRATE_EVENTS */)]), vue.createElementVNode("div", _hoisted_29, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.icons, function (icon, i) {
      return vue.openBlock(), vue.createElementBlock("div", {
        key: i,
        class: "col text-center hue"
      }, [vue.createVNode(_component_Fa, {
        icon: icon,
        flip: _ctx.model.flip,
        pull: _ctx.model.pull,
        rotate: _ctx.model.rotate,
        size: _ctx.model.size + "x"
      }, null, 8 /* PROPS */, ["icon", "flip", "pull", "rotate", "size"])]);
    }), 128 /* KEYED_FRAGMENT */))])])]);
  }

  script$5.render = render$5;
  script$5.__scopeId = "data-v-d8b0228a";
  script$5.__file = "showcase.vue";

  var script$4 = vue.defineComponent({
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
    setup: function setup(props) {
      var el = vue.ref();
      var highlight = function highlight() {
        if (el.value) {
          window.Prism.highlightElement(el.value);
        }
      };
      vue.watch(function () {
        return props.code;
      }, highlight);
      vue.onMounted(highlight);
      return {
        el: el
      };
    }
  });

  var _hoisted_1$4 = {
    class: "shadow-sm mb-3 rounded"
  };
  function render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4, [vue.createElementVNode("pre", null, [vue.createElementVNode("code", {
      ref: "el",
      class: vue.normalizeClass("language-" + _ctx.lang)
    }, vue.toDisplayString(_ctx.code), 3 /* TEXT, CLASS */)])]);
  }

  script$4.render = render$4;
  script$4.__file = "docs-code.vue";

  var script$3 = {
    inheritAttrs: false
  };

  var _withScopeId = function _withScopeId(n) {
    return vue.pushScopeId("data-v-218e963f"), n = n(), vue.popScopeId(), n;
  };
  var _hoisted_1$3 = {
    class: "position-relative shadow-sm p-3 mb-3 rounded"
  };
  var _hoisted_2$2 = /*#__PURE__*/_withScopeId(function () {
    return /*#__PURE__*/vue.createElementVNode("small", null, "images © fontawesome.com", -1 /* HOISTED */);
  });

  function render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$3, [vue.createElementVNode("img", vue.normalizeProps(vue.guardReactiveProps(_ctx.$attrs)), null, 16 /* FULL_PROPS */), _hoisted_2$2]);
  }

  script$3.render = render$3;
  script$3.__scopeId = "data-v-218e963f";
  script$3.__file = "docs-img.vue";

  var script$2 = vue.defineComponent({
    components: {
      Fa: Fa__default["default"]
    },
    props: {
      level: {
        default: 2
      },
      title: {
        default: ''
      }
    },
    setup: function setup(props) {
      return {
        faLink: faLink,
        id: vue.computed(function () {
          return props.title.toLowerCase().replace(/[^\w]/g, '-');
        })
      };
    }
  });

  var _hoisted_1$2 = ["id"];
  var _hoisted_2$1 = ["href"];
  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_Fa = vue.resolveComponent("Fa");
    return vue.openBlock(), vue.createElementBlock("h4", {
      id: _ctx.id,
      class: vue.normalizeClass("h" + _ctx.level)
    }, [vue.createElementVNode("a", {
      href: "#" + _ctx.id
    }, vue.toDisplayString(_ctx.title), 9 /* TEXT, PROPS */, _hoisted_2$1), vue.createTextVNode(), vue.createElementVNode("small", null, [vue.createVNode(_component_Fa, {
      icon: _ctx.faLink
    }, null, 8 /* PROPS */, ["icon"])])], 10 /* CLASS, PROPS */, _hoisted_1$2);
  }

  script$2.render = render$2;
  script$2.__scopeId = "data-v-5fc7f558";
  script$2.__file = "docs-title.vue";

  var script$1 = {
    components: {
      Fa: Fa__default["default"],
      FaLayers: Fa.FaLayers,
      FaLayersText: Fa.FaLayersText,
      DocsCode: script$4,
      DocsImg: script$3,
      DocsTitle: script$2
    },
    setup: function setup() {
      return {
        faFlag: faFlag,
        faHome: faHome,
        faInfo: faInfo,
        faBook: faBook,
        faBookmark: faBookmark,
        faPencilAlt: faPencilAlt,
        faCog: faCog,
        faCircle: faCircle,
        faCircleNotch: faCircleNotch,
        faQuoteLeft: faQuoteLeft,
        faQuoteRight: faQuoteRight,
        faSpinner: faSpinner,
        faStroopwafel: faStroopwafel,
        faSync: faSync,
        faSeedling: faSeedling,
        faTimes: faTimes,
        faHeart: faHeart,
        faPlay: faPlay,
        faSun: faSun,
        faMoon: faMoon,
        faStar: faStar,
        faCalendar: faCalendar,
        faCertificate: faCertificate,
        faEnvelope: faEnvelope,
        codes: {
          installation: ['npm install vue-fa', "import Fa from 'vue-fa'\nimport { faFlag } from '@fortawesome/free-solid-svg-icons'\n\n" + 'export ' + "default {\n  components: {\n    Fa\n  },\n\n  setup() {\n    return {\n      faFlag\n    }\n  }\n}"],
          basicUse: ['<Fa :icon="faFlag" /> Flag', "<div style=\"font-size: 3em; color: tomato\">\n  <Fa :icon=\"faFlag\" />\n</div>"],
          additionalStyling: ["<Fa :icon=\"faFlag\" size=\"xs\" />\n<Fa :icon=\"faFlag\" size=\"sm\" />\n<Fa :icon=\"faFlag\" size=\"lg\" />\n<Fa :icon=\"faFlag\" size=\"2x\" />\n<Fa :icon=\"faFlag\" size=\"2.5x\" />\n<Fa :icon=\"faFlag\" size=\"5x\" />\n<Fa :icon=\"faFlag\" size=\"7x\" />\n<Fa :icon=\"faFlag\" size=\"10x\" />", "<div>\n  <Fa :icon=\"faHome\" fw style=\"background: mistyrose\" /> Home\n</div>\n<div>\n  <Fa :icon=\"faInfo\" fw style=\"background: mistyrose\" /> Info\n</div>\n<div>\n  <Fa :icon=\"faBook\" fw style=\"background: mistyrose\" /> Library\n</div>\n<div>\n  <Fa :icon=\"faPencilAlt\" fw style=\"background: mistyrose\" /> Applications\n</div>\n<div>\n  <Fa :icon=\"faCog\" fw style=\"background: mistyrose\" /> Settins\n</div>", "<Fa :icon=\"faQuoteLeft\" pull=\"left\" size=\"2x\" />\n<Fa :icon=\"faQuoteRight\" pull=\"right\" size=\"2x\" />\nGatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that\u2019s no matter \u2014 tomorrow we will run faster, stretch our arms further... And one fine morning \u2014 So we beat on, boats against the current, borne back ceaselessly into the past."],
          animatingIcons: ["<Fa :icon=\"faSpinner\" size=\"3x\" spin />\n<Fa :icon=\"faCircleNotch\" size=\"3x\" spin />\n<Fa :icon=\"faSync\" size=\"3x\" spin />\n<Fa :icon=\"faCog\" size=\"3x\" spin />\n<Fa :icon=\"faSpinner\" size=\"3x\" pulse />\n<Fa :icon=\"faStroopwafel\" size=\"3x\" spin />"],
          powerTransforms: ["<Fa :icon=\"faSeedling\" size=\"4x\" style=\"background: mistyrose\" />\n<Fa :icon=\"faSeedling\" :scale=\"0.5\" size=\"4x\" style=\"background: mistyrose\" />\n<Fa :icon=\"faSeedling\" :scale=\"1.2\" size=\"4x\" style=\"background: mistyrose\" />", "<Fa :icon=\"faSeedling\" :scale=\"0.5\" size=\"4x\" style=\"background: mistyrose\" />\n<Fa :icon=\"faSeedling\" :scale=\"0.5\" :translateX=\"0.2\" size=\"4x\" style=\"background: mistyrose\" />\n<Fa :icon=\"faSeedling\" :scale=\"0.5\" :translateX=\"-0.2\" size=\"4x\" style=\"background: mistyrose\" />\n<Fa :icon=\"faSeedling\" :scale=\"0.5\" :translateY=\"0.2\" size=\"4x\" style=\"background: mistyrose\" />\n<Fa :icon=\"faSeedling\" :scale=\"0.5\" :translateY=\"-0.2\" size=\"4x\" style=\"background: mistyrose\" />", "<Fa :icon=\"faSeedling\" size=\"4x\" :rotate=\"90\" style=\"background: mistyrose\"/>\n<Fa :icon=\"faSeedling\" size=\"4x\" :rotate=\"180\" style=\"background: mistyrose\"/>\n<Fa :icon=\"faSeedling\" size=\"4x\" rotate=\"270\" style=\"background: mistyrose\"/>\n<Fa :icon=\"faSeedling\" size=\"4x\" rotate=\"30\" style=\"background: mistyrose\"/>\n<Fa :icon=\"faSeedling\" size=\"4x\" rotate=\"-30\" style=\"background: mistyrose\"/>\n<Fa :icon=\"faSeedling\" size=\"4x\" flip=\"vertical\" style=\"background: mistyrose\"/>\n<Fa :icon=\"faSeedling\" size=\"4x\" flip=\"horizontal\" style=\"background: mistyrose\"/>\n<Fa :icon=\"faSeedling\" size=\"4x\" flip=\"both\" style=\"background: mistyrose\"/>\n<Fa :icon=\"faSeedling\" size=\"4x\" flip=\"both\" style=\"background: mistyrose\"/>"],
          layering: ["import Fa, {\n  FaLayers,\n  FaLayersText,\n} from 'vue-fa';", "<FaLayers size=\"4x\" style=\"background: mistyrose\">\n  <Fa :icon=\"faCircle\" color=\"tomato\" />\n  <Fa :icon=\"faTimes\" :scale=\"0.5\" color=\"white\" />\n</FaLayers>\n<FaLayers size=\"4x\" style=\"background: mistyrose\">\n  <Fa :icon=\"faBookmark\" />\n  <Fa :icon=\"faHeart\" :scale=\"0.4\" :translateY=\"-0.1\" color=\"tomato\" />\n</FaLayers>\n<FaLayers size=\"4x\" style=\"background: mistyrose\">\n  <Fa :icon=\"faPlay\" :scale=\"1.2\" :rotate=\"-90\" />\n  <Fa :icon=\"faSun\" :scale=\"0.35\" :translateY=\"-0.2\" color=\"white\" />\n  <Fa :icon=\"faMoon\" :scale=\"0.3\" :translateX=\"-0.25\" :translateY=\"0.25\" color=\"white\" />\n  <Fa :icon=\"faStar\" :scale=\"0.3\" :translateX=\"0.25\" :translateY=\"0.25\" color=\"white\" />\n</FaLayers>\n<FaLayers size=\"4x\" style=\"background: mistyrose\">\n  <Fa :icon=\"faCalendar\" />\n  <FaLayersText :scale=\"0.45\" :translateY=\"0.15\" color=\"white\" style=\"font-weight: 900\">\n    27\n  </FaLayersText>\n</FaLayers>\n<FaLayers size=\"4x\" style=\"background: mistyrose\">\n  <Fa :icon=\"faCertificate\" />\n  <FaLayersText :scale=\"0.25\" :translateY=\"0.07\" :rotate=\"-30\" color=\"white\" style=\"font-weight: 900\">\n    NEW\n  </FaLayersText>\n</FaLayers>\n<FaLayers size=\"4x\" style=\"background: mistyrose\">\n  <Fa :icon=\"faEnvelope\" />\n  <FaLayersText :scale=\"0.2\" :translateX=\"0.4\" :translateY=\"-0.3\" color=\"white\">\n    <span style=\"padding: 0 .2em; background: tomato; border-radius: 1em\">\n      1,419\n    </span>\n  </FaLayersText>\n</FaLayers>"],
          duotoneIcons: ["import {\n  faCamera,\n  faFireAlt,\n  faBusAlt,\n  faFillDrip,\n} from '@fortawesome/pro-duotone-svg-icons'", "<Fa :icon=\"faCamera\" size=\"3x\" />\n<Fa :icon=\"faFireAlt\" size=\"3x\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" />\n<Fa :icon=\"faFillDrip\" size=\"3x\" />", "<Fa :icon=\"faCamera\" size=\"3x\" />\n<Fa :icon=\"faCamera\" size=\"3x\" swap-opacity />\n<Fa :icon=\"faFireAlt\" size=\"3x\" />\n<Fa :icon=\"faFireAlt\" size=\"3x\" swap-opacity />\n<Fa :icon=\"faBusAlt\" size=\"3x\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" swap-opacity />\n<Fa :icon=\"faFillDrip\" size=\"3x\" />\n<Fa :icon=\"faFillDrip\" size=\"3x\" swap-opacity />", "<Fa :icon=\"faBusAlt\" size=\"3x\" :secondary-opacity=\".2\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" :secondary-opacity=\".4\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" :secondary-opacity=\".6\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" :secondary-opacity=\".8\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" :secondary-opacity=\"1\" />", "<Fa :icon=\"faBusAlt\" size=\"3x\" :primary-opacity=\".2\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" :primary-opacity=\".4\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" :primary-opacity=\".6\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" :primary-opacity=\".8\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" :primary-opacity=\"1\" />", "<Fa :icon=\"faBusAlt\" size=\"3x\" primary-color=\"gold\" />\n<Fa :icon=\"faBusAlt\" size=\"3x\" primary-color=\"orangered\" />\n<Fa :icon=\"faFillDrip\" size=\"3x\" secondary-color=\"limegreen\" />\n<Fa :icon=\"faFillDrip\" size=\"3x\" secondary-color=\"rebeccapurple\" />\n<Fa :icon=\"faBatteryFull\" size=\"3x\" primary-color=\"limegreen\" secondary-color=\"dimgray\" />\n<Fa :icon=\"faBatteryQuarter\" size=\"3x\" primary-color=\"orange\" secondary-color=\"dimgray\" />", "<Fa :icon=\"faBook\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"lightseagreen\" secondary-color=\"linen\" />\n<Fa :icon=\"faBookSpells\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"mediumpurple\" secondary-color=\"linen\" />\n<Fa :icon=\"faBookMedical\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"crimson\" secondary-color=\"linen\" />\n<Fa :icon=\"faBookUser\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"peru\" secondary-color=\"linen\" />\n<Fa :icon=\"faToggleOff\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"white\" secondary-color=\"gray\" />\n<Fa :icon=\"faToggleOn\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"dodgerblue\" secondary-color=\"white\" />\n<Fa :icon=\"faFilePlus\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"white\" secondary-color=\"limegreen\" />\n<Fa :icon=\"faFileExclamation\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"white\" secondary-color=\"gold\" />\n<Fa :icon=\"faFileTimes\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"white\" secondary-color=\"tomato\" />", "<Fa :icon=\"faCrow\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"dodgerblue\" secondary-color=\"gold\" />\n<Fa :icon=\"faCampfire\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"sienna\" secondary-color=\"red\" />\n<Fa :icon=\"faBirthdayCake\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"pink\" secondary-color=\"palevioletred\" />\n<Fa :icon=\"faEar\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"sandybrown\" secondary-color=\"bisque\" />\n<Fa :icon=\"faCorn\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"mediumseagreen\" secondary-color=\"gold\" />\n<Fa :icon=\"faCookieBite\" size=\"3x\" :secondary-opacity=\"1\" primary-color=\"saddlebrown\" secondary-color=\"burlywood\" />", "const themeRavenclaw = {\n  secondaryOpacity: 1,\n  primary-color: '#0438a1',\n  secondary-color: '#6c6c6c',\n}", "<Fa :icon=\"faHatWizard\" size=\"3x\" v-bind=\"themeRavenclaw\" />\n<Fa :icon=\"faFlaskPotion\" size=\"3x\" v-bind=\"themeRavenclaw\" />\n<Fa :icon=\"faWandMagic\" size=\"3x\" v-bind=\"themeRavenclaw\" />\n<Fa :icon=\"faScarf\" size=\"3x\" v-bind=\"themeRavenclaw\" />\n<Fa :icon=\"faBookSpells\" size=\"3x\" v-bind=\"themeRavenclaw\" />"]
        }
      };
    }
  };

  var _hoisted_1$1 = {
    class: "p-2 mb-3"
  };
  var _hoisted_2 = /*#__PURE__*/vue.createElementVNode("span", {
    class: "shadow-sm p-1 rounded"
  }, "npm install vue-fa@2", -1 /* HOISTED */);
  var _hoisted_3 = /*#__PURE__*/vue.createElementVNode("a", {
    href: "https://cweili.github.io/vue-fa/v2/",
    target: "_blank"
  }, "vue-fa v2 documents", -1 /* HOISTED */);
  var _hoisted_4 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };
  var _hoisted_5 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };
  var _hoisted_6 = {
    style: {
      "font-size": "3em",
      "color": "tomato"
    }
  };
  var _hoisted_7 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };
  var _hoisted_8 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };
  var _hoisted_9 = {
    class: "shadow-sm p-3 mb-3 rounded clearfix"
  };
  var _hoisted_10 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };
  var _hoisted_11 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };
  var _hoisted_12 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };
  var _hoisted_13 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };
  var _hoisted_14 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };
  var _hoisted_15 = /*#__PURE__*/vue.createElementVNode("span", {
    style: {
      "padding": "0 .2em",
      "background": "tomato",
      "border-radius": "1em"
    }
  }, " 1,419 ", -1 /* HOISTED */);

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_DocsTitle = vue.resolveComponent("DocsTitle");
    var _component_DocsCode = vue.resolveComponent("DocsCode");
    var _component_Fa = vue.resolveComponent("Fa");
    var _component_FaLayers = vue.resolveComponent("FaLayers");
    var _component_FaLayersText = vue.resolveComponent("FaLayersText");
    var _component_DocsImg = vue.resolveComponent("DocsImg");
    return vue.openBlock(), vue.createElementBlock("div", null, [vue.createVNode(_component_DocsTitle, {
      title: "Installation"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.installation[0]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.installation[1],
      lang: "js"
    }, null, 8 /* PROPS */, ["code"]), vue.createElementVNode("div", _hoisted_1$1, [vue.createVNode(_component_Fa, {
      icon: $setup.faInfo,
      fw: ""
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode(" for Vue.js v2.x, uses vue-fa@2: "), _hoisted_2, vue.createTextVNode(" ["), _hoisted_3, vue.createTextVNode("] ")]), vue.createVNode(_component_DocsTitle, {
      title: "Basic Use"
    }), vue.createElementVNode("div", _hoisted_4, [vue.createVNode(_component_Fa, {
      icon: $setup.faFlag
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode(" Flag")]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.basicUse[0]
    }, null, 8 /* PROPS */, ["code"]), vue.createElementVNode("div", _hoisted_5, [vue.createElementVNode("div", _hoisted_6, [vue.createVNode(_component_Fa, {
      icon: $setup.faFlag
    }, null, 8 /* PROPS */, ["icon"])])]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.basicUse[1]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsTitle, {
      title: "Additional Styling"
    }), vue.createVNode(_component_DocsTitle, {
      level: 3,
      title: "Icon Sizes"
    }), vue.createElementVNode("div", _hoisted_7, [vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "xs"
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode("   "), vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "sm"
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode("   "), vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "lg"
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode("   "), vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "2x"
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode("   "), vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "2.5x"
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode("   "), vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "5x"
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode("   "), vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "7x"
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode("   "), vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "10x"
    }, null, 8 /* PROPS */, ["icon"])]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.additionalStyling[0]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 3,
      title: "Fixed Width Icons"
    }), vue.createElementVNode("div", _hoisted_8, [vue.createElementVNode("div", null, [vue.createVNode(_component_Fa, {
      icon: $setup.faHome,
      fw: "",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode(" Home")]), vue.createElementVNode("div", null, [vue.createVNode(_component_Fa, {
      icon: $setup.faInfo,
      fw: "",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode(" Info")]), vue.createElementVNode("div", null, [vue.createVNode(_component_Fa, {
      icon: $setup.faBook,
      fw: "",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode(" Library")]), vue.createElementVNode("div", null, [vue.createVNode(_component_Fa, {
      icon: $setup.faPencilAlt,
      fw: "",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode(" Applications ")]), vue.createElementVNode("div", null, [vue.createVNode(_component_Fa, {
      icon: $setup.faCog,
      fw: "",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode(" Settins")])]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.additionalStyling[1]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 3,
      title: "Pulled Icons"
    }), vue.createElementVNode("div", _hoisted_9, [vue.createVNode(_component_Fa, {
      icon: $setup.faQuoteLeft,
      pull: "left",
      size: "2x"
    }, null, 8 /* PROPS */, ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faQuoteRight,
      pull: "right",
      size: "2x"
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode(" Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past. ")]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.additionalStyling[2]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsTitle, {
      title: "Animating Icons"
    }), vue.createElementVNode("div", _hoisted_10, [vue.createVNode(_component_Fa, {
      icon: $setup.faSpinner,
      size: "3x",
      spin: ""
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode("   "), vue.createVNode(_component_Fa, {
      icon: $setup.faCircleNotch,
      size: "3x",
      spin: ""
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode("   "), vue.createVNode(_component_Fa, {
      icon: $setup.faSync,
      size: "3x",
      spin: ""
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode("   "), vue.createVNode(_component_Fa, {
      icon: $setup.faCog,
      size: "3x",
      spin: ""
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode("   "), vue.createVNode(_component_Fa, {
      icon: $setup.faSpinner,
      size: "3x",
      pulse: ""
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode("   "), vue.createVNode(_component_Fa, {
      icon: $setup.faStroopwafel,
      size: "3x",
      spin: ""
    }, null, 8 /* PROPS */, ["icon"])]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.animatingIcons[0]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsTitle, {
      title: "Power Transforms"
    }), vue.createVNode(_component_DocsTitle, {
      title: "Scaling",
      level: "{3}"
    }), vue.createElementVNode("div", _hoisted_11, [vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode("   "), vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      scale: 0.5,
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon", "scale"]), vue.createTextVNode("   "), vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      scale: 1.2,
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon", "scale"])]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.powerTransforms[0]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsTitle, {
      title: "Positioning",
      level: "{3}"
    }), vue.createElementVNode("div", _hoisted_12, [vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      scale: 0.5,
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon", "scale"]), vue.createTextVNode("   "), vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      scale: 0.5,
      translateX: 0.2,
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon", "scale", "translateX"]), vue.createTextVNode("   "), vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      scale: 0.5,
      translateX: -0.2,
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon", "scale", "translateX"]), vue.createTextVNode("   "), vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      scale: 0.5,
      translateY: 0.2,
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon", "scale", "translateY"]), vue.createTextVNode("   "), vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      scale: 0.5,
      translateY: -0.2,
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon", "scale", "translateY"])]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.powerTransforms[1]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 3,
      title: "Rotating & Flipping"
    }), vue.createElementVNode("div", _hoisted_13, [vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      rotate: 90,
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode("   "), vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      rotate: 180,
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode("   "), vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      size: "4x",
      rotate: "270",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode("   "), vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      size: "4x",
      rotate: "30",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode("   "), vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      size: "4x",
      rotate: "-30",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode("   "), vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      size: "4x",
      flip: "vertical",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode("   "), vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      size: "4x",
      flip: "horizontal",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode("   "), vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      size: "4x",
      flip: "both",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"]), vue.createTextVNode("   "), vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      size: "4x",
      flip: "both",
      rotate: "30",
      style: {
        "background": "mistyrose"
      }
    }, null, 8 /* PROPS */, ["icon"])]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.powerTransforms[2]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsTitle, {
      title: "Layering & Text"
    }), vue.createElementVNode("div", _hoisted_14, [vue.createVNode(_component_FaLayers, {
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, {
      default: vue.withCtx(function () {
        return [vue.createVNode(_component_Fa, {
          icon: $setup.faCircle,
          color: "tomato"
        }, null, 8 /* PROPS */, ["icon"]), vue.createVNode(_component_Fa, {
          icon: $setup.faTimes,
          scale: 0.5,
          color: "white"
        }, null, 8 /* PROPS */, ["icon", "scale"])];
      }),
      _: 1 /* STABLE */
    }), vue.createTextVNode("   "), vue.createVNode(_component_FaLayers, {
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, {
      default: vue.withCtx(function () {
        return [vue.createVNode(_component_Fa, {
          icon: $setup.faBookmark
        }, null, 8 /* PROPS */, ["icon"]), vue.createVNode(_component_Fa, {
          icon: $setup.faHeart,
          scale: 0.4,
          translateY: -0.1,
          color: "tomato"
        }, null, 8 /* PROPS */, ["icon", "scale", "translateY"])];
      }),
      _: 1 /* STABLE */
    }), vue.createTextVNode("   "), vue.createVNode(_component_FaLayers, {
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, {
      default: vue.withCtx(function () {
        return [vue.createVNode(_component_Fa, {
          icon: $setup.faPlay,
          scale: 1.2,
          rotate: -90
        }, null, 8 /* PROPS */, ["icon", "scale"]), vue.createVNode(_component_Fa, {
          icon: $setup.faSun,
          scale: 0.35,
          translateY: -0.2,
          color: "white"
        }, null, 8 /* PROPS */, ["icon", "scale", "translateY"]), vue.createVNode(_component_Fa, {
          icon: $setup.faMoon,
          scale: 0.3,
          translateX: -0.25,
          translateY: 0.25,
          color: "white"
        }, null, 8 /* PROPS */, ["icon", "scale", "translateX", "translateY"]), vue.createVNode(_component_Fa, {
          icon: $setup.faStar,
          scale: 0.3,
          translateX: 0.25,
          translateY: 0.25,
          color: "white"
        }, null, 8 /* PROPS */, ["icon", "scale", "translateX", "translateY"])];
      }),
      _: 1 /* STABLE */
    }), vue.createTextVNode("   "), vue.createVNode(_component_FaLayers, {
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, {
      default: vue.withCtx(function () {
        return [vue.createVNode(_component_Fa, {
          icon: $setup.faCalendar
        }, null, 8 /* PROPS */, ["icon"]), vue.createVNode(_component_FaLayersText, {
          scale: 0.45,
          translateY: 0.15,
          color: "white",
          style: {
            "font-weight": "900"
          }
        }, {
          default: vue.withCtx(function () {
            return [vue.createTextVNode(" 27 ")];
          }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["scale", "translateY"])];
      }),
      _: 1 /* STABLE */
    }), vue.createTextVNode("   "), vue.createVNode(_component_FaLayers, {
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, {
      default: vue.withCtx(function () {
        return [vue.createVNode(_component_Fa, {
          icon: $setup.faCertificate
        }, null, 8 /* PROPS */, ["icon"]), vue.createVNode(_component_FaLayersText, {
          scale: 0.25,
          translateY: 0.07,
          rotate: -30,
          color: "white",
          style: {
            "font-weight": "900"
          }
        }, {
          default: vue.withCtx(function () {
            return [vue.createTextVNode(" NEW ")];
          }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["scale", "translateY"])];
      }),
      _: 1 /* STABLE */
    }), vue.createTextVNode("   "), vue.createVNode(_component_FaLayers, {
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, {
      default: vue.withCtx(function () {
        return [vue.createVNode(_component_Fa, {
          icon: $setup.faEnvelope
        }, null, 8 /* PROPS */, ["icon"]), vue.createVNode(_component_FaLayersText, {
          scale: 0.2,
          translateX: 0.4,
          translateY: -0.3,
          color: "white"
        }, {
          default: vue.withCtx(function () {
            return [_hoisted_15];
          }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["scale", "translateX", "translateY"])];
      }),
      _: 1 /* STABLE */
    })]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.layering[0],
      lang: "js"
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.layering[1]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsTitle, {
      title: "Duotone Icons"
    }), vue.createVNode(_component_DocsTitle, {
      level: 3,
      title: "Basic Use"
    }), vue.createVNode(_component_DocsImg, {
      src: "assets/duotone-0.png",
      alt: "duotone icons basic use"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[0],
      lang: "js"
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[1]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 3,
      title: "Swapping Layer Opacity"
    }), vue.createVNode(_component_DocsImg, {
      src: "assets/duotone-1.png",
      alt: "swapping duotone icons layer opacity"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[2]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 3,
      title: "Changing Opacity"
    }), vue.createVNode(_component_DocsImg, {
      src: "assets/duotone-2.png",
      alt: "changing duotone icons opacity"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[3]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsImg, {
      src: "assets/duotone-3.png",
      alt: "changing duotone icons opacity"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[4]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 3,
      title: "Coloring Duotone Icons"
    }), vue.createVNode(_component_DocsImg, {
      src: "assets/duotone-4.png",
      alt: "coloring duotone icons"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[5]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 3,
      title: "Advanced Use"
    }), vue.createVNode(_component_DocsImg, {
      src: "assets/duotone-5.png",
      alt: "duotone icons advanced use"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[6]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsImg, {
      src: "assets/duotone-6.png",
      alt: "duotone icons advanced use"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[7]
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsImg, {
      src: "assets/duotone-7.png",
      alt: "duotone icons advanced use"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[8],
      lang: "js"
    }, null, 8 /* PROPS */, ["code"]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[9]
    }, null, 8 /* PROPS */, ["code"])]);
  }

  script$1.render = render$1;
  script$1.__file = "docs.vue";

  var script = vue.defineComponent({
    components: {
      Showcase: script$5,
      Docs: script$1
    }
  });

  var _hoisted_1 = {
    class: "container my-4"
  };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_showcase = vue.resolveComponent("showcase");
    var _component_docs = vue.resolveComponent("docs");
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [vue.createVNode(_component_showcase), vue.createVNode(_component_docs)]);
  }

  script.render = render;
  script.__file = "app.vue";

  vue.createApp(script).mount('#app');

})(Vue, VueFa);
