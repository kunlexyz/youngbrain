const staticCacheName = 'site-static-v5';
const dynamicCacheName = 'site-dynamic-v5';
const assets = [
  '/',
  '/biology.html',
  '/biology_installed.html',
'./MobileScript.js',
'./MobileTem.css',
'./about.html',
'./ack.html',
'./activate.html',

'./bookengine.js',
  '/copyright.html',
'./hint.html',
'./more.html',
 // './puzzle.html',
'./preface.html',
'./profile.html',

'./script.js',
'./set.html',
'./th.css',
'./wh.png',
	
	//icons
  
  '/images/favicon.ico',
  '/images/1x1x128.png',
  '/images/1x1x144.png',
  '/images/1x1x152.png',
  '/images/1x1x192.png',
  '/images/1x1x384.png',
  '/images/1x1x512.png',
  '/images/1x1x72.png',
  '/images/1x1x96.png',

	//css files in the css folder in  parent folder
  './css/biology.css',
'./css/biologyx.css',
'./css/comic.ttf',
'./css/connect.css',
'./css/sylfaen.ttf',
'./css/tt0001m_.ttf',
'./css/tt0142m_.ttf',
'./css/tt1018m_.ttf',
  
	//js files in the js folder in  parent folder
  
'./js/ch1.js',
'./js/ch2.js',
'./js/ch3.js',
'./js/ch4.js',
'./js/ch5.js',
'./js/ch6.js',
'./js/ch7.js',
'./js/ch8.js',
'./js/ch9.js',
'./js/connect.js',
'./js/connectx.js',
'./js/content.js',
'./js/jq.js',
'./js/outline.js',
'./js/que.js',
	
  //images from the parent folder
  './images/bio.jpeg',
'./images/bio2.jpeg',
'./images/bio3.jpeg',
'./images/bio4.jpeg',
'./images/bio_back_cover.jpg',
'./images/bio_back_cover_1.png',
'./images/bio_cover.jpg',
'./images/bio_logo.png',
'./images/bio_logo2.png',
'./images/correctx.jpg',
'./images/screenshot2.jpg',
'./images/wh.png',
'./images/wrongx.jpg',

	
	// for past objective questions
'./past/MobileTem.css',
'./past/waec2018.html',

	'./past/js/engine.js',
'./past/js/gov2018.js',
'./past/js/jq.js',
	//
	'./past/css/testcord3.css',
	//its images
	'./past/images/Abtn.png',
'./past/images/BIO2.jpg',
'./past/images/Bbtn.png',
'./past/images/Cbtn.png',
'./past/images/Dbtn.png',
'./past/images/Ebtn.png',
'./past/images/biology1.jpg',
'./past/images/correctx.jpg',
'./past/images/dig.jpg',
'./past/images/wh.png',
'./past/images/wrongx.jpg',
	
	//book 1
	'./1/chapter1.html',
'./1/chapter10.html',
'./1/chapter11.html',
'./1/chapter12.html',
'./1/chapter13.html',
'./1/chapter14.html',
'./1/chapter15.html',
'./1/chapter16.html',
'./1/chapter17.html',
'./1/chapter18.html',
'./1/chapter2.html',
'./1/chapter3.html',
'./1/chapter4.html',
'./1/chapter5.html',
'./1/chapter6.html',
'./1/chapter7.html',
'./1/chapter8.html',
'./1/chapter9.html',
'./1/content.html',
'./1/contentx.html',
'./1/diagram.html',
'./1/index.html',
// for./1/images
	'./1/images/2.8.jpg',
'./1/images/7.10.jpg',
'./1/images/7.11a.jpg',
'./1/images/7.11b.jpg',
'./1/images/7.11c.jpg',
'./1/images/7.11d.jpg',
'./1/images/7.11e.jpg',
'./1/images/7.11f.jpg',
'./1/images/7.11g.jpg',
'./1/images/7.1a.jpg',
'./1/images/7.1b.jpg',
'./1/images/7.2a.jpg',
'./1/images/7.2b.jpg',
'./1/images/7.4a.jpg',
'./1/images/7.4b.jpg',
'./1/images/7.4c.jpg',
'./1/images/7.4d.jpg',
'./1/images/7.5a.jpg',
'./1/images/7.5b.jpg',
'./1/images/7.6a.jpg',
'./1/images/7.6b.jpg',
'./1/images/7.6c.jpg',
'./1/images/7.6d.jpg',
'./1/images/7.8a.jpg',
'./1/images/7.8b.jpg',
'./1/images/7.8c.jpg',
'./1/images/7.9.jpg',
'./1/images/A.jpg',
'./1/images/B.jpg',
'./1/images/Bio_cover_guideline.jpg',
'./1/images/C.jpg',
'./1/images/D.jpg',
'./1/images/DareBooks.jpg',
'./1/images/E.jpg',
'./1/images/F.jpg',
'./1/images/G.jpg',
'./1/images/H.jpg',
'./1/images/I.jpg',
'./1/images/J.jpg',
'./1/images/Thumbs.db',
'./1/images/animated_text_fill.png',
'./1/images/b1.jpg',
'./1/images/b10.jpg',
'./1/images/b11.jpg',
'./1/images/b12.jpg',
'./1/images/b13.jpg',
'./1/images/b14.jpg',
'./1/images/b15.jpg',
'./1/images/b16.jpg',
'./1/images/b17.jpg',
'./1/images/b18.jpg',
'./1/images/b2.jpg',
'./1/images/b3.jpg',
'./1/images/b4.jpg',
'./1/images/b5.jpg',
'./1/images/b6.jpg',
'./1/images/b7.jpg',
'./1/images/b8.jpg',
'./1/images/b9.jpg',
'./1/images/bio.jpg',
'./1/images/bio2.jpeg',
'./1/images/bio3.jpeg',
'./1/images/bio4.jpeg',
'./1/images/bio_4.png',
'./1/images/bio_5.png',
'./1/images/bio_6.png',
'./1/images/bio_cover.jpg',
'./1/images/bio_logo.png',
'./1/images/bio_logo2.png',
'./1/images/correctx.jpg',
'./1/images/diag1.jpg',
'./1/images/diag10.jpg',
'./1/images/diag11.jpg',
'./1/images/diag12.jpg',
'./1/images/diag2.jpg',
'./1/images/diag3.jpg',
'./1/images/diag4.jpg',
'./1/images/diag5.jpg',
'./1/images/diag6.jpg',
'./1/images/diag7.jpg',
'./1/images/diag8.jpg',
'./1/images/diag9.jpg',
'./1/images/fig1.1b.jpg',
'./1/images/fig1.2.jpg',
'./1/images/fig10.1.jpg',
'./1/images/fig10.2.jpg',
'./1/images/fig10.3.jpg',
'./1/images/fig10.4.jpg',
'./1/images/fig10.5.jpg',
'./1/images/fig10.6.jpg',
'./1/images/fig10.7.jpg',
'./1/images/fig10.9a.jpg',
'./1/images/fig10.9b.jpg',
'./1/images/fig10.9c.jpg',
'./1/images/fig10.9d.jpg',
'./1/images/fig10.9e.jpg',
'./1/images/fig10.9f.jpg',
'./1/images/fig10.9g.jpg',
'./1/images/fig11.1.jpg',
'./1/images/fig11.1x.jpg',
'./1/images/fig11.2.jpg',
'./1/images/fig11.3.jpg',
'./1/images/fig11.4.jpg',
'./1/images/fig11.5.jpg',
'./1/images/fig12.1.jpg',
'./1/images/fig12.2.jpg',
'./1/images/fig12.3.jpg',
'./1/images/fig12.4.jpg',
'./1/images/fig12.5.jpg',
'./1/images/fig13.1.jpg',
'./1/images/fig13.2.jpg',
'./1/images/fig13.4.jpg',
'./1/images/fig14.1.jpg',
'./1/images/fig14.2.jpg',
'./1/images/fig14.3.jpg',
'./1/images/fig15.1.jpg',
'./1/images/fig15.2.jpg',
'./1/images/fig15.3.jpg',
'./1/images/fig15.4.jpg',
'./1/images/fig16.1.jpg',
'./1/images/fig16.2.jpg',
'./1/images/fig16.3.jpg',
'./1/images/fig17.1a.jpg',
'./1/images/fig17.1b.jpg',
'./1/images/fig17.2.jpg',
'./1/images/fig18.1.jpg',
'./1/images/fig18.2.jpg',
'./1/images/fig18.3.jpg',
'./1/images/fig18.4.jpg',
'./1/images/fig18.5a.jpg',
'./1/images/fig18.5b.jpg',
'./1/images/fig2.1a.jpg',
'./1/images/fig2.1b.jpg',
'./1/images/fig2.1c.jpg',
'./1/images/fig2.2a.jpg',
'./1/images/fig2.2b.jpg',
'./1/images/fig2.3.jpg',
'./1/images/fig2.4.jpg',
'./1/images/fig2.5.jpg',
'./1/images/fig2.5a.jpg',
'./1/images/fig2.5b.jpg',
'./1/images/fig2.6a.jpg',
'./1/images/fig2.6b.jpg',
'./1/images/fig2.6c.jpg',
'./1/images/fig2.7a.jpg',
'./1/images/fig2.7b.jpg',
'./1/images/fig2.8.jpg',
'./1/images/fig2.91.jpg',
'./1/images/fig2.92.jpg',
'./1/images/fig2.93.jpg',
'./1/images/fig2.94.jpg',
'./1/images/fig2.95.jpg',
'./1/images/fig2.96.jpg',
'./1/images/fig2.97.jpg',
'./1/images/fig2.981.jpg',
'./1/images/fig2.981x1.jpg',
'./1/images/fig2.981x2.jpg',
'./1/images/fig2.982A.jpg',
'./1/images/fig2.982B.jpg',
'./1/images/fig2.98a.jpg',
'./1/images/fig2.98b.jpg',
'./1/images/fig2.99.jpg',
'./1/images/fig2.991.jpg',
'./1/images/fig2.992.jpg',
'./1/images/fig2.993.jpg',
'./1/images/fig2.994.jpg',
'./1/images/fig2.9a.jpg',
'./1/images/fig2.9bK.jpg',
'./1/images/fig2.9bL.jpg',
'./1/images/fig2.9bM.jpg',
'./1/images/fig2.9bX.jpg',
'./1/images/fig2.9bY.jpg',
'./1/images/fig2.9bZ.jpg',
'./1/images/fig2.9c.jpg',
'./1/images/fig2.9d.jpg',
'./1/images/fig3.1.jpg',
'./1/images/fig3.1a.jpg',
'./1/images/fig3.1b.jpg',
'./1/images/fig3.jpg',
'./1/images/fig4.1a.jpg',
'./1/images/fig4.1b.jpg',
'./1/images/fig4.1c.jpg',
'./1/images/fig4.1d.jpg',
'./1/images/fig4.1e.jpg',
'./1/images/fig4.1f.jpg',
'./1/images/fig4.1g.jpg',
'./1/images/fig4.2d.jpg',
'./1/images/fig4.2e.jpg',
'./1/images/fig4.2f.jpg',
'./1/images/fig4.2g.jpg',
'./1/images/fig4.2h.jpg',
'./1/images/fig4.2i.jpg',
'./1/images/fig4.3a.jpg',
'./1/images/fig4.3b.jpg',
'./1/images/fig4.3c.jpg',
'./1/images/fig4.3d.jpg',
'./1/images/fig4.4a.jpg',
'./1/images/fig4.4b.jpg',
'./1/images/fig4.4c.jpg',
'./1/images/fig4.4d.jpg',
'./1/images/fig4.4e.jpg',
'./1/images/fig4.5a.jpg',
'./1/images/fig4.5b.jpg',
'./1/images/fig4.5c.jpg',
'./1/images/fig4.6a.jpg',
'./1/images/fig4.6b.jpg',
'./1/images/fig5.1.jpg',
'./1/images/fig5.2.jpg',
'./1/images/fig5.3.jpg',
'./1/images/fig5.4.jpg',
'./1/images/fig5.4c.jpg',
'./1/images/fig6.1a.jpg',
'./1/images/fig6.1b.jpg',
'./1/images/fig6.1c.jpg',
'./1/images/fig6.1d.jpg',
'./1/images/fig6.2.jpg',
'./1/images/fig6.2x1.jpg',
'./1/images/fig6.2x2.jpg',
'./1/images/fig6.2x3.jpg',
'./1/images/fig6.3.jpg',
'./1/images/fig6.4a.jpg',
'./1/images/fig6.4b.jpg',
'./1/images/fig6.5a.jpg',
'./1/images/fig6.5b.jpg',
'./1/images/fig6.6a.jpg',
'./1/images/fig6.6b.jpg',
'./1/images/fig6.6bx1.jpg',
'./1/images/fig6.6bx2.jpg',
'./1/images/fig6.6bx3.jpg',
'./1/images/fig6.6c.jpg',
'./1/images/fig6.6d.jpg',
'./1/images/fig6.6e.jpg',
'./1/images/fig6.7.jpg',
'./1/images/fig6.7a.jpg',
'./1/images/fig6.7b.jpg',
'./1/images/fig6.8a.jpg',
'./1/images/fig6.8b.jpg',
'./1/images/fig7.1a.jpg',
'./1/images/fig7.1b.jpg',
'./1/images/fig7.2a.jpg',
'./1/images/fig7.2b.jpg',
'./1/images/fig8.1.jpg',
'./1/images/fig8.2.jpg',
'./1/images/fig8.3.jpg',
'./1/images/fig8.4.jpg',
'./1/images/fig8.4b.jpg',
'./1/images/fig8.5.jpg',
'./1/images/fig8.6.jpg',
'./1/images/fig8.7.jpg',
'./1/images/fig8.8.jpg',
'./1/images/fig9.1.jpg',
'./1/images/fig9.2.jpg',
'./1/images/fig9.3.jpg',
'./1/images/fig9.4.jpg',
'./1/images/fig9.5.jpg',
'./1/images/fig9.6.jpg',
'./1/images/fig9.7.jpg',
'./1/images/scan.jpg',
'./1/images/wh.png',
'./1/images/wrongx.jpg',
//for ./1/js
	'./1/js/ch1.js',
'./1/js/ch10.js',
'./1/js/ch11.js',
'./1/js/ch12.js',
'./1/js/ch13.js',
'./1/js/ch14.js',
'./1/js/ch15.js',
'./1/js/ch16.js',
'./1/js/ch17.js',
'./1/js/ch18.js',
'./1/js/ch2.js',
'./1/js/ch3.js',
'./1/js/ch4.js',
'./1/js/ch5.js',
'./1/js/ch6.js',
'./1/js/ch7.js',
'./1/js/ch8.js',
'./1/js/ch9.js',
'./1/js/connect.js',
'./1/js/jq.js',
'./1/js/outline.js',
'./1/js/que.js',
	
	//book2
	'./2/chapter1.html',
'./2/chapter10.html',
'./2/chapter11.html',
'./2/chapter2.html',
'./2/chapter3.html',
'./2/chapter4.html',
'./2/chapter5.html',
'./2/chapter6.html',
'./2/chapter7.html',
'./2/chapter8.html',
'./2/chapter9.html',
'./2/content.html',
'./2/diagram.html',
	// images for book 2
'./2/images/bio.jpg',
'./2/images/bio_2_4.png',
'./2/images/bio_2_5.png',
'./2/images/bio_uni_head_cover.png',
'./2/images/fig1.1.jpg',
'./2/images/fig1.2.jpg',
'./2/images/fig1.2x.jpg',
'./2/images/fig1.3.jpg',
'./2/images/fig1.4.jpg',
'./2/images/fig1.4xA.jpg',
'./2/images/fig1.4xB.jpg',
'./2/images/fig1.4xC.jpg',
'./2/images/fig1.4xD.jpg',
'./2/images/fig1.4xE.jpg',
'./2/images/fig1.6.jpg',
'./2/images/fig1.6b.jpg',
'./2/images/fig1.6c.jpg',
'./2/images/fig1.7.jpg',
'./2/images/fig1.7b.jpg',
'./2/images/fig1.7c.jpg',
'./2/images/fig10.1.jpg',
'./2/images/fig10.2.jpg',
'./2/images/fig10.3.jpg',
'./2/images/fig10.4.jpg',
'./2/images/fig10.5A.jpg',
'./2/images/fig10.5B.jpg',
'./2/images/fig10.5C.jpg',
'./2/images/fig10.6A.jpg',
'./2/images/fig10.6B.jpg',
'./2/images/fig10.6C.jpg',
'./2/images/fig10.6D.jpg',
'./2/images/fig10.6E.jpg',
'./2/images/fig10.6F.jpg',
'./2/images/fig10.6G.jpg',
'./2/images/fig10.7.jpg',
'./2/images/fig10.8.jpg',
'./2/images/fig10.9.jpg',
'./2/images/fig10.91A.jpg',
'./2/images/fig10.91B.jpg',
'./2/images/fig10.92A.jpg',
'./2/images/fig10.92B.jpg',
'./2/images/fig10.92C.jpg',
'./2/images/fig10.92D.jpg',
'./2/images/fig10.92E.jpg',
'./2/images/fig10.93A.jpg',
'./2/images/fig10.93B.jpg',
'./2/images/fig10.93C.jpg',
'./2/images/fig10.93D.jpg',
'./2/images/fig11.1.jpg',
'./2/images/fig11.2.jpg',
'./2/images/fig11.3.jpg',
'./2/images/fig11.4.jpg',
'./2/images/fig11.5.jpg',
'./2/images/fig11.6.jpg',
'./2/images/fig11.7.jpg',
'./2/images/fig11.8A.jpg',
'./2/images/fig11.8B.jpg',
'./2/images/fig11.91i.jpg',
'./2/images/fig11.91ii.jpg',
'./2/images/fig11.91iii.jpg',
'./2/images/fig11.91iv.jpg',
'./2/images/fig11.9A.jpg',
'./2/images/fig11.9B.jpg',
'./2/images/fig2.1.jpg',
'./2/images/fig2.2.jpg',
'./2/images/fig2.3.jpg',
'./2/images/fig2.4.jpg',
'./2/images/fig2.5.jpg',
'./2/images/fig2.6.jpg',
'./2/images/fig2.7.jpg',
'./2/images/fig2.8.jpg',
'./2/images/fig2.8b.jpg',
'./2/images/fig2.9.jpg',
'./2/images/fig2.91.jpg',
'./2/images/fig2.92.jpg',
'./2/images/fig2.93.jpg',
'./2/images/fig2.94.jpg',
'./2/images/fig2.95.jpg',
'./2/images/fig2.96.jpg',
'./2/images/fig2.97.jpg',
'./2/images/fig2.98A.jpg',
'./2/images/fig2.98B.jpg',
'./2/images/fig2.98C.jpg',
'./2/images/fig2.991A.jpg',
'./2/images/fig2.991B.jpg',
'./2/images/fig2.991C.jpg',
'./2/images/fig2.992.jpg',
'./2/images/fig2.993.jpg',
'./2/images/fig2.99A.jpg',
'./2/images/fig2.99B.jpg',
'./2/images/fig3.1.jpg',
'./2/images/fig3.2.jpg',
'./2/images/fig3.3.jpg',
'./2/images/fig3.4.jpg',
'./2/images/fig3.5.jpg',
'./2/images/fig3.6.jpg',
'./2/images/fig3.6x.jpg',
'./2/images/fig3.7.jpg',
'./2/images/fig3.8.jpg',
'./2/images/fig3.9.jpg',
'./2/images/fig4.1.jpg',
'./2/images/fig4.2.jpg',
'./2/images/fig4.3.jpg',
'./2/images/fig4.4.jpg',
'./2/images/fig4.5.jpg',
'./2/images/fig4.6.jpg',
'./2/images/fig4.7.jpg',
'./2/images/fig4.8.jpg',
'./2/images/fig4.9.jpg',
'./2/images/fig4.91A.jpg',
'./2/images/fig4.91B.jpg',
'./2/images/fig4.9x.jpg',
'./2/images/fig5.1.jpg',
'./2/images/fig5.2.jpg',
'./2/images/fig5.3.jpg',
'./2/images/fig5.4.jpg',
'./2/images/fig5.6A.jpg',
'./2/images/fig5.6B.jpg',
'./2/images/fig5.7.jpg',
'./2/images/fig5.8.jpg',
'./2/images/fig5.9.jpg',
'./2/images/fig6.1.jpg',
'./2/images/fig6.2.jpg',
'./2/images/fig6.3.jpg',
'./2/images/fig6.4.jpg',
'./2/images/fig7.1.jpg',
'./2/images/fig7.2.jpg',
'./2/images/fig7.3.jpg',
'./2/images/fig8.1.jpg',
'./2/images/fig8.2.jpg',
'./2/images/fig8.3.jpg',
'./2/images/fig8.4.jpg',
'./2/images/fig8.5.jpg',
'./2/images/fig8.6.jpg',
'./2/images/fig8.7.jpg',
'./2/images/fig8.8.jpg',
'./2/images/fig8.9.jpg',
'./2/images/fig9.1.jpg',
'./2/images/fig9.2.jpg',
'./2/images/fig9.3.jpg',
'./2/images/fig9.4.jpg',
'./2/images/fig9.5.jpg',
'./2/images/fig9.6A.jpg',
'./2/images/fig9.6B.jpg',
'./2/images/fig9.6x.jpg',
'./2/images/fig9.6x2.jpg',
'./2/images/fig9.6x3.jpg',
'./2/images/fig9.6x4.jpg',
'./2/images/fig9.7A.jpg',
'./2/images/fig9.7B.jpg',
'./2/images/fig9.8.jpg',
'./2/images/fig9.9.jpg',
'./2/images/fig9.91.jpg',
'./2/images/fig9.92.jpg',
'./2/images/fig9.93A.jpg',
'./2/images/fig9.93B.jpg',
'./2/images/fig9.94A.jpg',
'./2/images/fig9.94B.jpg',
'./2/images/fig9.94C.jpg',
'./2/images/fig9.94D.jpg',
'./2/images/fig9.95.jpg',
'./2/images/fig9.96A.jpg',
'./2/images/fig9.96B.jpg',
'./2/images/fig9.97A.jpg',
'./2/images/fig9.97B.jpg',
'./2/images/fig9.98A.jpg',
'./2/images/fig9.98B.jpg',
'./2/images/fig9.98C.jpg',
//for ./1/js
	'./2/js/ch1.js',
'./2/js/ch10.js',
'./2/js/ch11.js',
'./2/js/ch2.js',
'./2/js/ch3.js',
'./2/js/ch4.js',
'./2/js/ch5.js',
'./2/js/ch6.js',
'./2/js/ch7.js',
'./2/js/ch8.js',
'./2/js/ch9.js',
	//book3
	'./3/chapter1.html',
'./3/chapter2.html',
'./3/chapter3.html',
'./3/chapter4.html',
'./3/chapter5.html',
'./3/chapter6.html',
'./3/chapter7.html',
'./3/chapter8.html',
'./3/content.html',
'./3/diagram.html',
	//for book3 images
	'./3/images/Bio.jpg',
'./3/images/fig1.1.jpg',
'./3/images/fig1.2.jpg',
'./3/images/fig1.3.jpg',
'./3/images/fig1.4.jpg',
'./3/images/fig1.5.jpg',
'./3/images/fig1.6.jpg',
'./3/images/fig1.7.jpg',
'./3/images/fig1.8.jpg',
'./3/images/fig1.95.jpg',
'./3/images/fig1.9A.jpg',
'./3/images/fig1.9B.jpg',
'./3/images/fig2.1.jpg',
'./3/images/fig2.2.jpg',
'./3/images/fig2.3.jpg',
'./3/images/fig2.4.jpg',
'./3/images/fig2.5.jpg',
'./3/images/fig2.6.jpg',
'./3/images/fig2.7.jpg',
'./3/images/fig2.8.jpg',
'./3/images/fig2.9.jpg',
'./3/images/fig3.1a.jpg',
'./3/images/fig3.1b.jpg',
'./3/images/fig3.1c.jpg',
'./3/images/fig3.2a.jpg',
'./3/images/fig3.2b.jpg',
'./3/images/fig3.2c.jpg',
'./3/images/fig3.2d.jpg',
'./3/images/fig3.3.jpg',
'./3/images/fig3.4a.jpg',
'./3/images/fig3.4b.jpg',
'./3/images/fig3.4c.jpg',
'./3/images/fig3.5.jpg',
'./3/images/fig3.6.jpg',
'./3/images/fig3.7a.jpg',
'./3/images/fig3.7b.jpg',
'./3/images/fig3.8.jpg',
'./3/images/fig3.91.jpg',
'./3/images/fig3.9a.jpg',
'./3/images/fig3.9b.jpg',
'./3/images/fig5.1a.jpg',
'./3/images/fig5.1b.jpg',
'./3/images/fig5.2a.jpg',
'./3/images/fig5.2b.jpg',
'./3/images/fig5.2c.jpg',
'./3/images/fig5.2d.jpg',
'./3/images/fig5.3a.jpg',
'./3/images/fig5.3b.jpg',
'./3/images/fig5.3c.jpg',
'./3/images/fig5.4.jpg',
'./3/images/fig5.5a.jpg',
'./3/images/fig5.5b.jpg',
'./3/images/fig5.5c.jpg',
'./3/images/fig5.5d.jpg',
'./3/images/fig5.5g.jpg',
'./3/images/fig5.5h.jpg',
'./3/images/fig5.5i.jpg',
'./3/images/fig5.5j.jpg',
'./3/images/fig5.5k.jpg',
'./3/images/fig5.6a.jpg',
'./3/images/fig5.6b.jpg',
'./3/images/fig5.7a.jpg',
'./3/images/fig5.7b.jpg',
'./3/images/fig5.7c.jpg',
'./3/images/fig5.7d.jpg',
'./3/images/fig5.7e.jpg',
'./3/images/fig5.7f.jpg',
'./3/images/fig5.7g.jpg',
'./3/images/fig5.7h.jpg',
'./3/images/fig5.8a.jpg',
'./3/images/fig5.8b.jpg',
'./3/images/fig5.8c.jpg',
'./3/images/fig5.8d.jpg',
'./3/images/fig5.9a.jpg',
'./3/images/fig5.9b.jpg',
'./3/images/fig5.9c.jpg',
'./3/images/fig5.9d.jpg',
'./3/images/fig6.1a-d.jpg',
'./3/images/fig6.2a-hPreview.jpg',
'./3/images/fig6.2a.jpg',
'./3/images/fig6.2b.jpg',
'./3/images/fig6.2c.jpg',
'./3/images/fig6.2d.jpg',
'./3/images/fig6.2e.jpg',
'./3/images/fig6.2f.jpg',
'./3/images/fig6.2g.jpg',
'./3/images/fig6.2h.jpg',
'./3/images/fig6.3a.jpg',
'./3/images/fig6.3b.jpg',
'./3/images/fig6.4a.jpg',
'./3/images/fig6.4b.jpg',
'./3/images/fig6.4c.jpg',
'./3/images/fig6.4d.jpg',
'./3/images/fig6.4dx.jpg',
'./3/images/fig6.4e.jpg',
'./3/images/fig6.5a.jpg',
'./3/images/fig6.5b.jpg',
'./3/images/fig6.5c.jpg',
'./3/images/fig6.5d.jpg',
'./3/images/fig6.5e.jpg',
'./3/images/fig6.5i.jpg',
'./3/images/fig6.5ii.jpg',
'./3/images/fig6.5iii.jpg',
'./3/images/fig6.5iv.jpg',
'./3/images/fig6.5v.jpg',
'./3/images/fig6.5vi.jpg',
'./3/images/fig6.6I.jpg',
'./3/images/fig6.6II.jpg',
'./3/images/fig6.6III.jpg',
'./3/images/fig6.6IV.jpg',
'./3/images/fig6.6V.jpg',
'./3/images/fig6.6VI.jpg',
'./3/images/fig6.6VII.jpg',
'./3/images/fig6.6a.jpg',
'./3/images/fig6.6b.jpg',
'./3/images/fig6.6c.jpg',
'./3/images/fig6.6d.jpg',
'./3/images/fig6.6e.jpg',
'./3/images/fig6.7a.jpg',
'./3/images/fig6.7b.jpg',
'./3/images/fig6.7c.jpg',
'./3/images/fig6.8a.jpg',
'./3/images/fig6.8b.jpg',
'./3/images/fig6.8c.jpg',
'./3/images/fig6.9a.jpg',
'./3/images/fig6.9b.jpg',
'./3/images/fig6.9c.jpg',
'./3/images/fig6.9d.jpg',
'./3/images/fig6.9e.jpg',
'./3/images/fig6.9f.jpg',
'./3/images/fig6.9g.jpg',
'./3/images/fig6.9h.jpg',
'./3/images/fig7.1.jpg',
'./3/images/fig7.jpg',
'./3/images/fig8.1.jpg',
'./3/images/fig8.2.jpg',
'./3/images/fig8.3.jpg',
'./3/images/fig8.4.jpg',
//for ./3/js
	'./3/js/ch1.js',
'./3/js/ch2.js',
'./3/js/ch3.js',
'./3/js/ch4.js',
'./3/js/ch5.js',
'./3/js/ch6.js',
'./3/js/ch7.js',
'./3/js/ch8.js',
];

// install event
self.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
      console.log('/caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  //console.log('service worker activated');
  evt.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys);
      return Promise.all(keys
        .filter(key => key !== staticCacheName && key !== dynamicCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

// fetch event

self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).then(fetchRes => {
        return caches.open(dynamicCacheName).then(cache => {
          //cache.put(evt.request.url, fetchRes.clone());
          return fetchRes;
        })
      });
    }).catch(() => caches.match('/biology_installed.html'))
  );
});
