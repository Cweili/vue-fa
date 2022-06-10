(function (vue, Fa) {
  'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Fa__default = /*#__PURE__*/_interopDefaultLegacy(Fa);

  var faArrowsRotate={prefix:'fas',iconName:'arrows-rotate',icon:[512,512,[128472,"refresh","sync"],"f021","M464 16c-17.67 0-32 14.31-32 32v74.09C392.1 66.52 327.4 32 256 32C161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28c16.89 5.5 34.88-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c50.5 0 96.26 24.55 124.4 64H336c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32V48C496 30.31 481.7 16 464 16zM441.8 289.6c-16.92-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-50.5 0-96.25-24.55-124.4-64H176c17.67 0 32-14.31 32-32s-14.33-32-32-32h-128c-17.67 0-32 14.31-32 32v144c0 17.69 14.33 32 32 32s32-14.31 32-32v-74.09C119.9 445.5 184.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2C467.9 313 458.6 294.1 441.8 289.6z"]};var faSync=faArrowsRotate;var faBook={prefix:'fas',iconName:'book',icon:[448,512,[128212],"f02d","M448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-31.1c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM143.1 128h192C344.8 128 352 135.2 352 144C352 152.8 344.8 160 336 160H143.1C135.2 160 128 152.8 128 144C128 135.2 135.2 128 143.1 128zM143.1 192h192C344.8 192 352 199.2 352 208C352 216.8 344.8 224 336 224H143.1C135.2 224 128 216.8 128 208C128 199.2 135.2 192 143.1 192zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448z"]};var faBookmark={prefix:'fas',iconName:'bookmark',icon:[384,512,[61591,128278],"f02e","M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z"]};var faCalendar={prefix:'fas',iconName:'calendar',icon:[448,512,[128198,128197],"f133","M96 32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32zM448 464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192H448V464z"]};var faCertificate={prefix:'fas',iconName:'certificate',icon:[512,512,[],"f0a3","M256 53.46L300.1 7.261C307 1.034 315.1-1.431 324.4 .8185C332.8 3.068 339.3 9.679 341.4 18.1L357.3 80.6L419.3 63.07C427.7 60.71 436.7 63.05 442.8 69.19C448.1 75.34 451.3 84.33 448.9 92.69L431.4 154.7L493.9 170.6C502.3 172.7 508.9 179.2 511.2 187.6C513.4 196 510.1 204.1 504.7 211L458.5 256L504.7 300.1C510.1 307 513.4 315.1 511.2 324.4C508.9 332.8 502.3 339.3 493.9 341.4L431.4 357.3L448.9 419.3C451.3 427.7 448.1 436.7 442.8 442.8C436.7 448.1 427.7 451.3 419.3 448.9L357.3 431.4L341.4 493.9C339.3 502.3 332.8 508.9 324.4 511.2C315.1 513.4 307 510.1 300.1 504.7L256 458.5L211 504.7C204.1 510.1 196 513.4 187.6 511.2C179.2 508.9 172.7 502.3 170.6 493.9L154.7 431.4L92.69 448.9C84.33 451.3 75.34 448.1 69.19 442.8C63.05 436.7 60.71 427.7 63.07 419.3L80.6 357.3L18.1 341.4C9.679 339.3 3.068 332.8 .8186 324.4C-1.431 315.1 1.034 307 7.261 300.1L53.46 256L7.261 211C1.034 204.1-1.431 196 .8186 187.6C3.068 179.2 9.679 172.7 18.1 170.6L80.6 154.7L63.07 92.69C60.71 84.33 63.05 75.34 69.19 69.19C75.34 63.05 84.33 60.71 92.69 63.07L154.7 80.6L170.6 18.1C172.7 9.679 179.2 3.068 187.6 .8185C196-1.431 204.1 1.034 211 7.261L256 53.46z"]};var faCircle={prefix:'fas',iconName:'circle',icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9898,9899,11044,61708,61915,9679],"f111","M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z"]};var faCircleNotch={prefix:'fas',iconName:'circle-notch',icon:[512,512,[],"f1ce","M222.7 32.15C227.7 49.08 218.1 66.9 201.1 71.94C121.8 95.55 64 169.1 64 255.1C64 362 149.1 447.1 256 447.1C362 447.1 448 362 448 255.1C448 169.1 390.2 95.55 310.9 71.94C293.9 66.9 284.3 49.08 289.3 32.15C294.4 15.21 312.2 5.562 329.1 10.6C434.9 42.07 512 139.1 512 255.1C512 397.4 397.4 511.1 256 511.1C114.6 511.1 0 397.4 0 255.1C0 139.1 77.15 42.07 182.9 10.6C199.8 5.562 217.6 15.21 222.7 32.15V32.15z"]};var faEnvelope={prefix:'fas',iconName:'envelope',icon:[512,512,[128386,61443,9993],"f0e0","M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"]};var faFlag={prefix:'fas',iconName:'flag',icon:[512,512,[61725,127988],"f024","M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"]};var faGear={prefix:'fas',iconName:'gear',icon:[512,512,[9881,"cog"],"f013","M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"]};var faCog=faGear;var faHeart={prefix:'fas',iconName:'heart',icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,10084,61578,9829],"f004","M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"]};var faHouse={prefix:'fas',iconName:'house',icon:[576,512,[63498,63500,127968,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"]};var faHome=faHouse;var faInfo={prefix:'fas',iconName:'info',icon:[192,512,[],"f129","M160 448h-32V224c0-17.69-14.33-32-32-32L32 192c-17.67 0-32 14.31-32 32s14.33 31.1 32 31.1h32v192H32c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32S177.7 448 160 448zM96 128c26.51 0 48-21.49 48-48S122.5 32.01 96 32.01s-48 21.49-48 48S69.49 128 96 128z"]};var faLink={prefix:'fas',iconName:'link',icon:[640,512,[128279,"chain"],"f0c1","M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z"]};var faMoon={prefix:'fas',iconName:'moon',icon:[512,512,[127769,9214],"f186","M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"]};var faPencil={prefix:'fas',iconName:'pencil',icon:[512,512,[61504,9999,"pencil-alt"],"f303","M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z"]};var faPencilAlt=faPencil;var faPlay={prefix:'fas',iconName:'play',icon:[384,512,[9654],"f04b","M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"]};var faQuoteLeft={prefix:'fas',iconName:'quote-left',icon:[448,512,[8220,"quote-left-alt"],"f10d","M96 224C84.72 224 74.05 226.3 64 229.9V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32S145.7 96 128 96C57.42 96 0 153.4 0 224v96c0 53.02 42.98 96 96 96s96-42.98 96-96S149 224 96 224zM352 224c-11.28 0-21.95 2.305-32 5.879V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32s-14.33-32-32-32c-70.58 0-128 57.42-128 128v96c0 53.02 42.98 96 96 96s96-42.98 96-96S405 224 352 224z"]};var faQuoteRight={prefix:'fas',iconName:'quote-right',icon:[448,512,[8221,"quote-right-alt"],"f10e","M96 96C42.98 96 0 138.1 0 192s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192C192 138.1 149 96 96 96zM448 192c0-53.02-42.98-96-96-96s-96 42.98-96 96s42.98 96 96 96c11.28 0 21.95-2.305 32-5.879V288c0 35.3-28.7 64-64 64c-17.67 0-32 14.33-32 32s14.33 32 32 32c70.58 0 128-57.42 128-128V192z"]};var faSeedling={prefix:'fas',iconName:'seedling',icon:[512,512,[127793,"sprout"],"f4d8","M64 95.1H0c0 123.8 100.3 224 224 224v128C224 465.6 238.4 480 255.1 480S288 465.6 288 448V320C288 196.3 187.7 95.1 64 95.1zM448 32c-84.25 0-157.4 46.5-195.8 115.3c27.75 30.12 48.25 66.88 59 107.5C424 243.1 512 147.9 512 32H448z"]};var faSpinner={prefix:'fas',iconName:'spinner',icon:[512,512,[],"f110","M304 48C304 74.51 282.5 96 256 96C229.5 96 208 74.51 208 48C208 21.49 229.5 0 256 0C282.5 0 304 21.49 304 48zM304 464C304 490.5 282.5 512 256 512C229.5 512 208 490.5 208 464C208 437.5 229.5 416 256 416C282.5 416 304 437.5 304 464zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM512 256C512 282.5 490.5 304 464 304C437.5 304 416 282.5 416 256C416 229.5 437.5 208 464 208C490.5 208 512 229.5 512 256zM74.98 437C56.23 418.3 56.23 387.9 74.98 369.1C93.73 350.4 124.1 350.4 142.9 369.1C161.6 387.9 161.6 418.3 142.9 437C124.1 455.8 93.73 455.8 74.98 437V437zM142.9 142.9C124.1 161.6 93.73 161.6 74.98 142.9C56.24 124.1 56.24 93.73 74.98 74.98C93.73 56.23 124.1 56.23 142.9 74.98C161.6 93.73 161.6 124.1 142.9 142.9zM369.1 369.1C387.9 350.4 418.3 350.4 437 369.1C455.8 387.9 455.8 418.3 437 437C418.3 455.8 387.9 455.8 369.1 437C350.4 418.3 350.4 387.9 369.1 369.1V369.1z"]};var faStar={prefix:'fas',iconName:'star',icon:[576,512,[61446,11088],"f005","M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"]};var faStroopwafel={prefix:'fas',iconName:'stroopwafel',icon:[512,512,[],"f551","M188.1 210.8l-45.25 45.25l45.25 45.25l45.25-45.25L188.1 210.8zM301.2 188.1l-45.25-45.25L210.7 188.1l45.25 45.25L301.2 188.1zM210.7 323.9l45.25 45.25l45.25-45.25L255.1 278.6L210.7 323.9zM256 16c-132.5 0-240 107.5-240 240s107.5 240 240 240s240-107.5 240-240S388.5 16 256 16zM442.6 295.6l-11.25 11.25c-3.125 3.125-8.25 3.125-11.38 0L391.8 278.6l-45.25 45.25l34 33.88l16.88-16.88c3.125-3.125 8.251-3.125 11.38 0l11.25 11.25c3.125 3.125 3.125 8.25 0 11.38l-16.88 16.88l16.88 17c3.125 3.125 3.125 8.25 0 11.38l-11.25 11.25c-3.125 3.125-8.251 3.125-11.38 0l-16.88-17l-17 17c-3.125 3.125-8.25 3.125-11.38 0l-11.25-11.25c-3.125-3.125-3.125-8.25 0-11.38l17-17l-34-33.88l-45.25 45.25l28.25 28.25c3.125 3.125 3.125 8.25 0 11.38l-11.25 11.25c-3.125 3.125-8.25 3.125-11.38 0l-28.25-28.25L227.7 442.6c-3.125 3.125-8.25 3.125-11.38 0l-11.25-11.25c-3.125-3.125-3.125-8.25 0-11.38l28.25-28.25l-45.25-45.25l-33.88 34l16.88 16.88c3.125 3.125 3.125 8.25 0 11.38l-11.25 11.25c-3.125 3.125-8.25 3.125-11.38 0L131.6 403.1l-16.1 16.88c-3.125 3.125-8.25 3.125-11.38 0l-11.25-11.25c-3.125-3.125-3.125-8.25 0-11.38l17-16.88l-17-17c-3.125-3.125-3.125-8.25 0-11.38l11.25-11.25c3.125-3.125 8.25-3.125 11.38 0l16.1 17l33.88-34L120.2 278.6l-28.25 28.25c-3.125 3.125-8.25 3.125-11.38 0L69.37 295.6c-3.125-3.125-3.125-8.25 0-11.38l28.25-28.25l-28.25-28.25c-3.125-3.125-3.125-8.25 0-11.38l11.25-11.25c3.125-3.125 8.25-3.125 11.38 0l28.25 28.25l45.25-45.25l-34-34l-16.88 17c-3.125 3.125-8.25 3.125-11.38 0l-11.25-11.25c-3.125-3.125-3.125-8.25 0-11.38l16.88-17l-16.88-16.88c-3.125-3.125-3.125-8.25 0-11.38l11.25-11.25c3.125-3.125 8.25-3.125 11.38 0l16.88 17l17-17c3.125-3.125 8.25-3.125 11.38 0l11.25 11.25c3.125 3.125 3.125 8.25 0 11.38l-17 16.88l34 34l45.25-45.25L205.1 92c-3.125-3.125-3.125-8.25 0-11.38l11.25-11.25c3.125-3.125 8.25-3.125 11.38 0l28.25 28.25l28.25-28.25c3.125-3.125 8.25-3.125 11.38 0l11.25 11.25c3.125 3.125 3.125 8.25 0 11.38l-28.25 28.25l45.25 45.25l34-34l-17-16.88c-3.125-3.125-3.125-8.25 0-11.38l11.25-11.25c3.125-3.125 8.25-3.125 11.38 0l17 16.88l16.88-16.88c3.125-3.125 8.251-3.125 11.38 0l11.25 11.25c3.125 3.125 3.125 8.25 0 11.38l-17 16.88l17 17c3.125 3.125 3.125 8.25 0 11.38l-11.25 11.25c-3.125 3.125-8.251 3.125-11.38 0l-16.88-17l-34 34l45.25 45.25l28.25-28.25c3.125-3.125 8.25-3.125 11.38 0l11.25 11.25c3.125 3.125 3.125 8.25 0 11.38l-28.25 28.25l28.25 28.25C445.7 287.4 445.7 292.5 442.6 295.6zM278.6 256l45.25 45.25l45.25-45.25l-45.25-45.25L278.6 256z"]};var faSun={prefix:'fas',iconName:'sun',icon:[512,512,[9728],"f185","M256 159.1c-53.02 0-95.1 42.98-95.1 95.1S202.1 351.1 256 351.1s95.1-42.98 95.1-95.1S309 159.1 256 159.1zM509.3 347L446.1 255.1l63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7l-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89L164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6L12.56 141.3C1.633 143.2-3.596 155.9 2.736 164.1L65.89 256l-63.15 91.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7l19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109l109-19.7C510.4 368.8 515.6 356.1 509.3 347zM256 383.1c-70.69 0-127.1-57.31-127.1-127.1c0-70.69 57.31-127.1 127.1-127.1s127.1 57.3 127.1 127.1C383.1 326.7 326.7 383.1 256 383.1z"]};var faXmark={prefix:'fas',iconName:'xmark',icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"]};var faTimes=faXmark;

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

  vue.pushScopeId("data-v-d8b0228a");

  var _hoisted_1$5 = {
    class: "jumbotron"
  };
  var _hoisted_2$3 = {
    class: "row"
  };
  var _hoisted_3$2 = {
    class: "col-md"
  };

  var _hoisted_4$1 = /*#__PURE__*/vue.createStaticVNode("<h1 class=\"hue\" data-v-d8b0228a><strong data-v-d8b0228a><a href=\"https://github.com/Cweili/vue-fa\" target=\"_blank\" data-v-d8b0228a>vue-fa</a></strong></h1><p data-v-d8b0228a><a href=\"https://www.npmjs.com/package/vue-fa\" target=\"_blank\" data-v-d8b0228a><img src=\"https://img.shields.io/npm/v/vue-fa.svg\" alt=\"npm version\" data-v-d8b0228a></a> <a href=\"https://bundlephobia.com/result?p=vue-fa\" target=\"_blank\" data-v-d8b0228a><img src=\"https://img.shields.io/bundlephobia/minzip/vue-fa.svg\" alt=\"bundle size\" data-v-d8b0228a></a> <a href=\"https://github.com/Cweili/vue-fa/blob/master/LICENSE\" target=\"_blank\" data-v-d8b0228a><img src=\"https://img.shields.io/npm/l/vue-fa.svg\" alt=\"MIT licence\" data-v-d8b0228a></a> <a href=\"https://www.npmjs.com/package/vue-fa\" target=\"_blank\" data-v-d8b0228a><img src=\"https://img.shields.io/npm/dt/vue-fa.svg\" alt=\"npm downloads\" data-v-d8b0228a></a> <a href=\"https://github.com/Cweili/vue-fa\" target=\"_blank\" data-v-d8b0228a><img src=\"https://img.shields.io/github/issues/Cweili/vue-fa.svg\" alt=\"github issues\" data-v-d8b0228a></a></p><p class=\"lead mb-5\" data-v-d8b0228a> Tiny <a class=\"hue\" href=\"https://fontawesome.com/\" target=\"_blank\" data-v-d8b0228a>FontAwesome 5+</a> component for <a class=\"hue\" href=\"https://vuejs.org/\" target=\"_blank\" data-v-d8b0228a>Vue.js</a>. </p>", 3);

  var _hoisted_7$1 = {
    class: "form-group row"
  };

  var _hoisted_8$1 = /*#__PURE__*/vue.createElementVNode("label", {
    class: "col-sm-3 col-form-label"
  }, "Icon Sizes", -1
  /* HOISTED */
  );

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

  var _hoisted_14$1 = /*#__PURE__*/vue.createElementVNode("label", {
    class: "col-sm-3 col-form-label"
  }, "Pulled Icons", -1
  /* HOISTED */
  );

  var _hoisted_15$1 = {
    class: "col-sm-9"
  };
  var _hoisted_16$1 = {
    class: "btn-group",
    role: "group",
    "aria-label": "Basic example"
  };
  var _hoisted_17$1 = ["onClick"];
  var _hoisted_18$1 = {
    class: "form-group row"
  };

  var _hoisted_19$1 = /*#__PURE__*/vue.createElementVNode("label", {
    class: "col-sm-3 col-form-label"
  }, "Flip", -1
  /* HOISTED */
  );

  var _hoisted_20$1 = {
    class: "col-sm-9"
  };
  var _hoisted_21$1 = {
    class: "btn-group",
    role: "group",
    "aria-label": "Basic example"
  };
  var _hoisted_22$1 = ["onClick"];
  var _hoisted_23$1 = {
    class: "form-group row"
  };

  var _hoisted_24$1 = /*#__PURE__*/vue.createElementVNode("label", {
    class: "col-sm-3 col-form-label"
  }, "Rotate", -1
  /* HOISTED */
  );

  var _hoisted_25$1 = {
    class: "col-sm-9 row"
  };
  var _hoisted_26$1 = {
    class: "col-md-8 py-2"
  };
  var _hoisted_27$1 = {
    class: "col-md-4"
  };
  var _hoisted_28$1 = {
    class: "form-control text-center"
  };
  var _hoisted_29$1 = {
    class: "col-md row"
  };

  vue.popScopeId();

  function render$5(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_Fa = vue.resolveComponent("Fa");

    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [vue.createElementVNode("div", _hoisted_2$3, [vue.createElementVNode("div", _hoisted_3$2, [_hoisted_4$1, vue.createElementVNode("form", {
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
    }, null, 512
    /* NEED_PATCH */
    ), [[vue.vModelText, _ctx.model.size]])]), vue.createElementVNode("div", _hoisted_11$1, [vue.createElementVNode("div", _hoisted_12$1, vue.toDisplayString(_ctx.model.size) + "x ", 1
    /* TEXT */
    )])])]), vue.createElementVNode("div", _hoisted_13$1, [_hoisted_14$1, vue.createElementVNode("div", _hoisted_15$1, [vue.createElementVNode("div", _hoisted_16$1, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.pull, function (p) {
      return vue.openBlock(), vue.createElementBlock("button", {
        key: p,
        class: vue.normalizeClass("btn btn-" + _ctx.checked('pull', p)),
        type: "button",
        onClick: function onClick($event) {
          return _ctx.setValue('pull', p);
        }
      }, vue.toDisplayString(p), 11
      /* TEXT, CLASS, PROPS */
      , _hoisted_17$1);
    }), 128
    /* KEYED_FRAGMENT */
    ))])])]), vue.createElementVNode("div", _hoisted_18$1, [_hoisted_19$1, vue.createElementVNode("div", _hoisted_20$1, [vue.createElementVNode("div", _hoisted_21$1, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.flip, function (f) {
      return vue.openBlock(), vue.createElementBlock("button", {
        key: f,
        class: vue.normalizeClass("btn btn-" + _ctx.checked('flip', f)),
        type: "button",
        onClick: function onClick($event) {
          return _ctx.setValue('flip', f);
        }
      }, vue.toDisplayString(f), 11
      /* TEXT, CLASS, PROPS */
      , _hoisted_22$1);
    }), 128
    /* KEYED_FRAGMENT */
    ))])])]), vue.createElementVNode("div", _hoisted_23$1, [_hoisted_24$1, vue.createElementVNode("div", _hoisted_25$1, [vue.createElementVNode("div", _hoisted_26$1, [vue.withDirectives(vue.createElementVNode("input", {
      "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
        return _ctx.model.rotate = $event;
      }),
      type: "range",
      class: "form-control-range",
      min: "-360",
      max: "360",
      step: "1"
    }, null, 512
    /* NEED_PATCH */
    ), [[vue.vModelText, _ctx.model.rotate]])]), vue.createElementVNode("div", _hoisted_27$1, [vue.createElementVNode("div", _hoisted_28$1, vue.toDisplayString(_ctx.model.rotate) + "deg ", 1
    /* TEXT */
    )])])])], 32
    /* HYDRATE_EVENTS */
    )]), vue.createElementVNode("div", _hoisted_29$1, [(vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.icons, function (icon, i) {
      return vue.openBlock(), vue.createElementBlock("div", {
        key: i,
        class: "col text-center hue"
      }, [vue.createVNode(_component_Fa, {
        icon: icon,
        flip: _ctx.model.flip,
        pull: _ctx.model.pull,
        rotate: _ctx.model.rotate,
        size: _ctx.model.size + "x"
      }, null, 8
      /* PROPS */
      , ["icon", "flip", "pull", "rotate", "size"])]);
    }), 128
    /* KEYED_FRAGMENT */
    ))])])]);
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
    }, vue.toDisplayString(_ctx.code), 3
    /* TEXT, CLASS */
    )])]);
  }

  script$4.render = render$4;
  script$4.__file = "docs-code.vue";

  var script$3 = {
    inheritAttrs: false
  };

  vue.pushScopeId("data-v-218e963f");

  var _hoisted_1$3 = {
    class: "position-relative shadow-sm p-3 mb-3 rounded"
  };

  var _hoisted_2$2 = /*#__PURE__*/vue.createElementVNode("small", null, "images © fontawesome.com", -1
  /* HOISTED */
  );

  vue.popScopeId();

  function render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$3, [vue.createElementVNode("img", vue.normalizeProps(vue.guardReactiveProps(_ctx.$attrs)), null, 16
    /* FULL_PROPS */
    ), _hoisted_2$2]);
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

  vue.pushScopeId("data-v-5fc7f558");

  var _hoisted_1$2 = ["id"];
  var _hoisted_2$1 = ["href"];

  var _hoisted_3$1 = /*#__PURE__*/vue.createTextVNode();

  vue.popScopeId();

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    var _component_Fa = vue.resolveComponent("Fa");

    return vue.openBlock(), vue.createElementBlock("h4", {
      id: _ctx.id,
      class: vue.normalizeClass("h" + _ctx.level)
    }, [vue.createElementVNode("a", {
      href: "#" + _ctx.id
    }, vue.toDisplayString(_ctx.title), 9
    /* TEXT, PROPS */
    , _hoisted_2$1), _hoisted_3$1, vue.createElementVNode("small", null, [vue.createVNode(_component_Fa, {
      icon: _ctx.faLink
    }, null, 8
    /* PROPS */
    , ["icon"])])], 10
    /* CLASS, PROPS */
    , _hoisted_1$2);
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

  var _hoisted_2 = /*#__PURE__*/vue.createTextVNode(" for Vue.js v2.x, uses vue-fa@2: ");

  var _hoisted_3 = /*#__PURE__*/vue.createElementVNode("span", {
    class: "shadow-sm p-1 rounded"
  }, "npm install vue-fa@2", -1
  /* HOISTED */
  );

  var _hoisted_4 = /*#__PURE__*/vue.createTextVNode(" [");

  var _hoisted_5 = /*#__PURE__*/vue.createElementVNode("a", {
    href: "https://cweili.github.io/vue-fa/v2/",
    target: "_blank"
  }, "vue-fa v2 documents", -1
  /* HOISTED */
  );

  var _hoisted_6 = /*#__PURE__*/vue.createTextVNode("] ");

  var _hoisted_7 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };

  var _hoisted_8 = /*#__PURE__*/vue.createTextVNode(" Flag");

  var _hoisted_9 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };
  var _hoisted_10 = {
    style: {
      "font-size": "3em",
      "color": "tomato"
    }
  };
  var _hoisted_11 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };

  var _hoisted_12 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_13 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_14 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_15 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_16 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_17 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_18 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_19 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };

  var _hoisted_20 = /*#__PURE__*/vue.createTextVNode(" Home");

  var _hoisted_21 = /*#__PURE__*/vue.createTextVNode(" Info");

  var _hoisted_22 = /*#__PURE__*/vue.createTextVNode(" Library");

  var _hoisted_23 = /*#__PURE__*/vue.createTextVNode(" Applications ");

  var _hoisted_24 = /*#__PURE__*/vue.createTextVNode(" Settins");

  var _hoisted_25 = {
    class: "shadow-sm p-3 mb-3 rounded clearfix"
  };

  var _hoisted_26 = /*#__PURE__*/vue.createTextVNode(" Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further... And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past. ");

  var _hoisted_27 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };

  var _hoisted_28 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_29 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_30 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_31 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_32 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_33 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };

  var _hoisted_34 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_35 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_36 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };

  var _hoisted_37 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_38 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_39 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_40 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_41 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };

  var _hoisted_42 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_43 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_44 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_45 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_46 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_47 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_48 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_49 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_50 = {
    class: "shadow-sm p-3 mb-3 rounded"
  };

  var _hoisted_51 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_52 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_53 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_54 = /*#__PURE__*/vue.createTextVNode(" 27 ");

  var _hoisted_55 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_56 = /*#__PURE__*/vue.createTextVNode(" NEW ");

  var _hoisted_57 = /*#__PURE__*/vue.createTextVNode("   ");

  var _hoisted_58 = /*#__PURE__*/vue.createElementVNode("span", {
    style: {
      "padding": "0 .2em",
      "background": "tomato",
      "border-radius": "1em"
    }
  }, " 1,419 ", -1
  /* HOISTED */
  );

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
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.installation[1],
      lang: "js"
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createElementVNode("div", _hoisted_1$1, [vue.createVNode(_component_Fa, {
      icon: $setup.faInfo,
      fw: ""
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6]), vue.createVNode(_component_DocsTitle, {
      title: "Basic Use"
    }), vue.createElementVNode("div", _hoisted_7, [vue.createVNode(_component_Fa, {
      icon: $setup.faFlag
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_8]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.basicUse[0]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createElementVNode("div", _hoisted_9, [vue.createElementVNode("div", _hoisted_10, [vue.createVNode(_component_Fa, {
      icon: $setup.faFlag
    }, null, 8
    /* PROPS */
    , ["icon"])])]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.basicUse[1]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
      title: "Additional Styling"
    }), vue.createVNode(_component_DocsTitle, {
      level: 3,
      title: "Icon Sizes"
    }), vue.createElementVNode("div", _hoisted_11, [vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "xs"
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_12, vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "sm"
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_13, vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "lg"
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_14, vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "2x"
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_15, vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "2.5x"
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_16, vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "5x"
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_17, vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "7x"
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_18, vue.createVNode(_component_Fa, {
      icon: $setup.faFlag,
      size: "10x"
    }, null, 8
    /* PROPS */
    , ["icon"])]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.additionalStyling[0]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 3,
      title: "Fixed Width Icons"
    }), vue.createElementVNode("div", _hoisted_19, [vue.createElementVNode("div", null, [vue.createVNode(_component_Fa, {
      icon: $setup.faHome,
      fw: "",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_20]), vue.createElementVNode("div", null, [vue.createVNode(_component_Fa, {
      icon: $setup.faInfo,
      fw: "",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_21]), vue.createElementVNode("div", null, [vue.createVNode(_component_Fa, {
      icon: $setup.faBook,
      fw: "",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_22]), vue.createElementVNode("div", null, [vue.createVNode(_component_Fa, {
      icon: $setup.faPencilAlt,
      fw: "",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_23]), vue.createElementVNode("div", null, [vue.createVNode(_component_Fa, {
      icon: $setup.faCog,
      fw: "",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_24])]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.additionalStyling[1]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 3,
      title: "Pulled Icons"
    }), vue.createElementVNode("div", _hoisted_25, [vue.createVNode(_component_Fa, {
      icon: $setup.faQuoteLeft,
      pull: "left",
      size: "2x"
    }, null, 8
    /* PROPS */
    , ["icon"]), vue.createVNode(_component_Fa, {
      icon: $setup.faQuoteRight,
      pull: "right",
      size: "2x"
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_26]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.additionalStyling[2]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
      title: "Animating Icons"
    }), vue.createElementVNode("div", _hoisted_27, [vue.createVNode(_component_Fa, {
      icon: $setup.faSpinner,
      size: "3x",
      spin: ""
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_28, vue.createVNode(_component_Fa, {
      icon: $setup.faCircleNotch,
      size: "3x",
      spin: ""
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_29, vue.createVNode(_component_Fa, {
      icon: $setup.faSync,
      size: "3x",
      spin: ""
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_30, vue.createVNode(_component_Fa, {
      icon: $setup.faCog,
      size: "3x",
      spin: ""
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_31, vue.createVNode(_component_Fa, {
      icon: $setup.faSpinner,
      size: "3x",
      pulse: ""
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_32, vue.createVNode(_component_Fa, {
      icon: $setup.faStroopwafel,
      size: "3x",
      spin: ""
    }, null, 8
    /* PROPS */
    , ["icon"])]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.animatingIcons[0]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
      title: "Power Transforms"
    }), vue.createVNode(_component_DocsTitle, {
      title: "Scaling",
      level: "{3}"
    }), vue.createElementVNode("div", _hoisted_33, [vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_34, vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      scale: 0.5,
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon", "scale"]), _hoisted_35, vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      scale: 1.2,
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon", "scale"])]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.powerTransforms[0]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
      title: "Positioning",
      level: "{3}"
    }), vue.createElementVNode("div", _hoisted_36, [vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      scale: 0.5,
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon", "scale"]), _hoisted_37, vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      scale: 0.5,
      translateX: 0.2,
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon", "scale", "translateX"]), _hoisted_38, vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      scale: 0.5,
      translateX: -0.2,
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon", "scale", "translateX"]), _hoisted_39, vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      scale: 0.5,
      translateY: 0.2,
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon", "scale", "translateY"]), _hoisted_40, vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      scale: 0.5,
      translateY: -0.2,
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon", "scale", "translateY"])]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.powerTransforms[1]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 3,
      title: "Rotating & Flipping"
    }), vue.createElementVNode("div", _hoisted_41, [vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      rotate: 90,
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_42, vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      rotate: 180,
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_43, vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      size: "4x",
      rotate: "270",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_44, vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      size: "4x",
      rotate: "30",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_45, vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      size: "4x",
      rotate: "-30",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_46, vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      size: "4x",
      flip: "vertical",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_47, vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      size: "4x",
      flip: "horizontal",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_48, vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      size: "4x",
      flip: "both",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"]), _hoisted_49, vue.createVNode(_component_Fa, {
      icon: $setup.faSeedling,
      size: "4x",
      flip: "both",
      rotate: "30",
      style: {
        "background": "mistyrose"
      }
    }, null, 8
    /* PROPS */
    , ["icon"])]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.powerTransforms[2]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
      title: "Layering & Text"
    }), vue.createElementVNode("div", _hoisted_50, [vue.createVNode(_component_FaLayers, {
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, {
      default: vue.withCtx(function () {
        return [vue.createVNode(_component_Fa, {
          icon: $setup.faCircle,
          color: "tomato"
        }, null, 8
        /* PROPS */
        , ["icon"]), vue.createVNode(_component_Fa, {
          icon: $setup.faTimes,
          scale: 0.5,
          color: "white"
        }, null, 8
        /* PROPS */
        , ["icon", "scale"])];
      }),
      _: 1
      /* STABLE */

    }), _hoisted_51, vue.createVNode(_component_FaLayers, {
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, {
      default: vue.withCtx(function () {
        return [vue.createVNode(_component_Fa, {
          icon: $setup.faBookmark
        }, null, 8
        /* PROPS */
        , ["icon"]), vue.createVNode(_component_Fa, {
          icon: $setup.faHeart,
          scale: 0.4,
          translateY: -0.1,
          color: "tomato"
        }, null, 8
        /* PROPS */
        , ["icon", "scale", "translateY"])];
      }),
      _: 1
      /* STABLE */

    }), _hoisted_52, vue.createVNode(_component_FaLayers, {
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
        }, null, 8
        /* PROPS */
        , ["icon", "scale"]), vue.createVNode(_component_Fa, {
          icon: $setup.faSun,
          scale: 0.35,
          translateY: -0.2,
          color: "white"
        }, null, 8
        /* PROPS */
        , ["icon", "scale", "translateY"]), vue.createVNode(_component_Fa, {
          icon: $setup.faMoon,
          scale: 0.3,
          translateX: -0.25,
          translateY: 0.25,
          color: "white"
        }, null, 8
        /* PROPS */
        , ["icon", "scale", "translateX", "translateY"]), vue.createVNode(_component_Fa, {
          icon: $setup.faStar,
          scale: 0.3,
          translateX: 0.25,
          translateY: 0.25,
          color: "white"
        }, null, 8
        /* PROPS */
        , ["icon", "scale", "translateX", "translateY"])];
      }),
      _: 1
      /* STABLE */

    }), _hoisted_53, vue.createVNode(_component_FaLayers, {
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, {
      default: vue.withCtx(function () {
        return [vue.createVNode(_component_Fa, {
          icon: $setup.faCalendar
        }, null, 8
        /* PROPS */
        , ["icon"]), vue.createVNode(_component_FaLayersText, {
          scale: 0.45,
          translateY: 0.15,
          color: "white",
          style: {
            "font-weight": "900"
          }
        }, {
          default: vue.withCtx(function () {
            return [_hoisted_54];
          }),
          _: 1
          /* STABLE */

        }, 8
        /* PROPS */
        , ["scale", "translateY"])];
      }),
      _: 1
      /* STABLE */

    }), _hoisted_55, vue.createVNode(_component_FaLayers, {
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, {
      default: vue.withCtx(function () {
        return [vue.createVNode(_component_Fa, {
          icon: $setup.faCertificate
        }, null, 8
        /* PROPS */
        , ["icon"]), vue.createVNode(_component_FaLayersText, {
          scale: 0.25,
          translateY: 0.07,
          rotate: -30,
          color: "white",
          style: {
            "font-weight": "900"
          }
        }, {
          default: vue.withCtx(function () {
            return [_hoisted_56];
          }),
          _: 1
          /* STABLE */

        }, 8
        /* PROPS */
        , ["scale", "translateY"])];
      }),
      _: 1
      /* STABLE */

    }), _hoisted_57, vue.createVNode(_component_FaLayers, {
      size: "4x",
      style: {
        "background": "mistyrose"
      }
    }, {
      default: vue.withCtx(function () {
        return [vue.createVNode(_component_Fa, {
          icon: $setup.faEnvelope
        }, null, 8
        /* PROPS */
        , ["icon"]), vue.createVNode(_component_FaLayersText, {
          scale: 0.2,
          translateX: 0.4,
          translateY: -0.3,
          color: "white"
        }, {
          default: vue.withCtx(function () {
            return [_hoisted_58];
          }),
          _: 1
          /* STABLE */

        }, 8
        /* PROPS */
        , ["scale", "translateX", "translateY"])];
      }),
      _: 1
      /* STABLE */

    })]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.layering[0],
      lang: "js"
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.layering[1]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
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
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[1]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 3,
      title: "Swapping Layer Opacity"
    }), vue.createVNode(_component_DocsImg, {
      src: "assets/duotone-1.png",
      alt: "swapping duotone icons layer opacity"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[2]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 3,
      title: "Changing Opacity"
    }), vue.createVNode(_component_DocsImg, {
      src: "assets/duotone-2.png",
      alt: "changing duotone icons opacity"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[3]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsImg, {
      src: "assets/duotone-3.png",
      alt: "changing duotone icons opacity"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[4]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 3,
      title: "Coloring Duotone Icons"
    }), vue.createVNode(_component_DocsImg, {
      src: "assets/duotone-4.png",
      alt: "coloring duotone icons"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[5]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsTitle, {
      level: 3,
      title: "Advanced Use"
    }), vue.createVNode(_component_DocsImg, {
      src: "assets/duotone-5.png",
      alt: "duotone icons advanced use"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[6]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsImg, {
      src: "assets/duotone-6.png",
      alt: "duotone icons advanced use"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[7]
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsImg, {
      src: "assets/duotone-7.png",
      alt: "duotone icons advanced use"
    }), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[8],
      lang: "js"
    }, null, 8
    /* PROPS */
    , ["code"]), vue.createVNode(_component_DocsCode, {
      code: $setup.codes.duotoneIcons[9]
    }, null, 8
    /* PROPS */
    , ["code"])]);
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
