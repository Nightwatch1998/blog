(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{384:function(a,s,t){"use strict";t.r(s);var e=t(10),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"ffmpeg工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ffmpeg工具"}},[a._v("#")]),a._v(" ffmpeg工具")]),a._v(" "),s("h3",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),s("p",[a._v("ffmpeg是一套可以用来记录、转换数字音频、视频，并可转化为流。")]),a._v(" "),s("p",[a._v("组成部分：")]),a._v(" "),s("ul",[s("li",[a._v("ffmpeg：命令行工具，用来对视频文件进行格式转换")]),a._v(" "),s("li",[a._v("ffplay：是一个简单的播放器，使用ffmpeg库解析和解码")]),a._v(" "),s("li",[a._v("ffprobe：收集多媒体文件和流的信息，并以人和机器可读的方式输出")]),a._v(" "),s("li",[a._v("libavformat： 各种音视频封装格式的生成和解析")]),a._v(" "),s("li",[a._v("libavcodec：声音图像编解码")]),a._v(" "),s("li",[a._v("libavutil：公共的工具函数")]),a._v(" "),s("li",[a._v("libswscale：视频场景比例缩放、色彩映射转换")]),a._v(" "),s("li",[a._v("libpostproc：后期效果处理")])]),a._v(" "),s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("ul",[s("li",[a._v("安装ffmpeg工具，下载win64版本，bin目录添加至环境变量")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("https://github.com/BtbN/FFmpeg-Builds/releases\n")])])]),s("h3",{attrs:{id:"ffplay使用指南"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ffplay使用指南"}},[a._v("#")]),a._v(" ffplay使用指南")]),a._v(" "),s("p",[a._v("https://zhuanlan.zhihu.com/p/582884983")]),a._v(" "),s("h3",{attrs:{id:"ffmpeg选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ffmpeg选项"}},[a._v("#")]),a._v(" ffmpeg选项")]),a._v(" "),s("p",[a._v("主要选项")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("-f fmt (input/output) 指定输入或者输出文件格式\n-i filename 指定输入文件\n-y 默认自动覆盖输出文件，不再确认\n-t duration (input/output) 限制输入/输出的时间,单位为秒\n-timestamp 容器中记录时间戳\n-codec  选择编解码模式\n")])])]),s("p",[a._v("视频选项")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("-vframes number 输出文件的帧数\n-r 设置帧率\n-s 设置帧尺寸\n-vn 禁止输出视频\n-vcodec 设置视频编码器\naspect 指定横纵比\n")])])]),s("p",[a._v("音频选项")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("-aframes number 音频帧输出\n-ar 音频采样率\n-aq 音频品质\n-ac 通道数\n-an 禁止输出音频\n-acode 音频编解码器\n")])])]),s("p",[a._v("字幕选项")]),a._v(" "),s("h3",{attrs:{id:"ffmpeg命令示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ffmpeg命令示例"}},[a._v("#")]),a._v(" ffmpeg命令示例")]),a._v(" "),s("ul",[s("li",[a._v("rtmp转hls")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("ffmpeg "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" rtmp://localhost:1935/live "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c:v")]),a._v(" libx264 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-preset")]),a._v(" veryfast "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c:a")]),a._v(" aac "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" hls "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-hls_time")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-hls_list_size")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-hls_flags")]),a._v(" delete_segments "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-hls_segment_filename")]),a._v(" D:/video/stream_%v/segment_%03d.ts D:/video/playlist.m3u8\n")])])]),s("ul",[s("li",[a._v("rtmp转多码率hls，windows的bat脚本")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("@echo off\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("input")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("rtmp://localhost:1935/live\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("output_path")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("D:/video\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("bitrate1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("800k\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("bitrate2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1200k\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("bitrate3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("2000k\n\nffmpeg "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" %input% "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c:v")]),a._v(" libx264 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-preset")]),a._v(" veryfast "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c:a")]),a._v(" aac ^\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b:v")]),a._v(" %bitrate1% "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-hls_time")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-hls_list_size")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-hls_flags")]),a._v(" delete_segments ^\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-hls_segment_filename")]),a._v(" %output_path%/%bitrate1%/stream_%%03d.ts %output_path%/%bitrate1%/playlist.m3u8 ^\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b:v")]),a._v(" %bitrate2% "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-hls_time")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-hls_list_size")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-hls_flags")]),a._v(" delete_segments ^\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-hls_segment_filename")]),a._v(" %output_path%/%bitrate2%/stream_%%03d.ts %output_path%/%bitrate2%/playlist.m3u8 ^\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b:v")]),a._v(" %bitrate3% "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-hls_time")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-hls_list_size")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-hls_flags")]),a._v(" delete_segments ^\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-hls_segment_filename")]),a._v(" %output_path%/%bitrate3%/stream_%%03d.ts %output_path%/%bitrate3%/playlist.m3u8\n\npause\n")])])]),s("ul",[s("li",[a._v("bash脚本多个rtmp转hls")])]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("@echo off\n@REM 启用延期变量扩展\nsetlocal enabledelayedexpansion\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("base_input")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("rtmp://localhost:1935/live\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("base_output")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("E:/stream/live\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("bitrate1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("100k\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("bitrate2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("1000k\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" /L %%N "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1,1")]),a._v(",8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("do")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("input")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("%base_input%%%N\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("output")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("%base_output%%%N\n  ffmpeg "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("input"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c:v")]),a._v(" libx264 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-preset")]),a._v(" veryfast "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c:a")]),a._v(" aac ^\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b:v")]),a._v(" %bitrate1% "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" 158x106 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-hls_time")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-hls_list_size")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-hls_flags")]),a._v(" delete_segments ^\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-hls_segment_filename")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("output"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("/low/stream_%%13d.ts "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("output"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("/low/index.m3u8 ^\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b:v")]),a._v(" %bitrate2% "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" 1280x720 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-hls_time")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-hls_list_size")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-hls_flags")]),a._v(" delete_segments ^\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-hls_segment_filename")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("output"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("/high/stream_%%13d.ts "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("output"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("/high/index.m3u8\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\npause\n")])])]),s("h2",{attrs:{id:"ffmpeg应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ffmpeg应用"}},[a._v("#")]),a._v(" ffmpeg应用")]),a._v(" "),s("h3",{attrs:{id:"ffmpeg-nginx-video-rtsp转rtmp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ffmpeg-nginx-video-rtsp转rtmp"}},[a._v("#")]),a._v(" ffmpeg+nginx+video,rtsp转rtmp")]),a._v(" "),s("h3",{attrs:{id:"ffmpeg-video-rtsp转hls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ffmpeg-video-rtsp转hls"}},[a._v("#")]),a._v(" ffmpeg+video,rtsp转hls")])])}),[],!1,null,null,null);s.default=r.exports}}]);