var dirLoading = false; //指令接口是否请求中
var pageTimer = {};
pageTimer["warnAlarmSet"] = null; //预报警看板滚动定时器
pageTimer["warnAlarmSetLoading"] = null; //预报警看板加载定时器
pageTimer["unit_slide"] = null; //装置定时器
pageTimer["unit_slide_02"] = null; //装置定时器
pageTimer["infactory_slide"] = null; //进厂定时器
pageTimer["outfactory_slide"] = null; //出厂定时器
pageTimer["large"] = null; //大机组定时器
pageTimer["LMS"] = null; //LMS定时器
pageTimer["huanbao"] = null; //环保装置
pageTimer["pipeFlowChart"] = null; //公用工程定期器


$(function() {
	var page = {
		/**
		 * 初始化
		 */
		init: function() {
			//绑定事件
			this.bindUI();
			//获取当前时间
			page.logic.getTimeNow();
			//HSE系统
			page.logic.HSE_system();
			//巡检 柱形图
			page.logic.xunjian_chart();
			//装置监控
			page.logic.unit_mnt();
			//进厂监控
			page.logic.infactory_mnt();
			//出厂监控
			page.logic.outfactory_mnt();
			//罐区监控
			page.logic.tankFun();
			//公共工程
			page.logic.pipeFlowChart();
			//今日工作安排
			page.logic.workagt();
			//预报警看板
			page.logic.warnAlarm();
			//班组 KPI
			page.logic.groupsTeams_kpi();
			//LMS
			page.logic.LMS_system();
			//大机组
			page.logic.largeMonitor();
			//LIMS系统
			page.logic.LIMS_system();
			//环保
			page.logic.huanbao_unit();
			//定时刷新
			page.logic.setFun();
			//天气预报
			page.logic.weather();
			page.logic.LMS_systems();

		},
		/**
		 * 绑定事件
		 */
		bindUI: function() {
			$('.banner').on('click', 'ul.num li', function() {
				var index = parseInt($(this).data('index'))
				var top = -160 + (-200 * index) + 'px'
				$('.banner').find('ul.ban').css('top', top)
				page.logic.setContent(page.data.ajaxdata, index)
				page.data.bannerMove = index
			}).hover(function() {
				clearInterval(page.data.bannerTime);
			}, function() {
				page.logic.bannerTimeout()
			})
			//公用工程 放大
			var body = $('body');
			body.on('click', '.change_width_btn_big', function() {
				var $this = $(this);
				var pipe_mnt_li_big = $('.pipe_mnt_li_big');
				pipe_mnt_li_big.show().addClass('bounceIn');
				var id = $this.data('id').split('_small')[0];
				var big_id = $this.attr('big-id');
				page.data.nowFlowId = id;
				page.data.big_id = big_id;
				page.logic.pipeFlowChatrBig(id, big_id);

			});
			//公用工程 缩小
			body.on('click', '.change_width_btn_small', function() {
				var $this = $(this);
				var pipe_mnt_li_big = $('.pipe_mnt_li_big');
				pipe_mnt_li_big.removeClass('bounceIn').addClass('bounceOut');
				setTimeout(function() {
					pipe_mnt_li_big.hide().removeClass('bounceOut');
				}, 1000);
				page.data.nowFlowId = '';
				page.data.big_id = '';

			});
			//预报警看板切换
			body.on('click', '#warnAlarm_mnt_tab ul li', function() {
				var $this = $(this);
				var type = $this.data('id');
				$this.addClass('current');
				$this.siblings().removeClass('current');
				var warnAlarmData = page.data.warnAlarmData;
				var warnAlarmDataNew = warnAlarmData.filter(function(option) {
					return option.warnAlarmTypeCode == type;
				});
				page.logic.warnAlarmFilter(warnAlarmDataNew);
			});
			//天气预警关闭
			body.on('click', '#weather_close', function() {
				$(this).parent().fadeOut();
			});
			//天气预警开启
			body.on('click', '.alarm_in', function() {
				$('.weather_alert').fadeIn();
			});
			//HSE跳转
			body.on('click', '#hseHref', function() {
				page.logic.carouselHsesart();
			});
			//巡检跳转
			body.on('click', '#xjHref', function() {
				page.logic.carouselXjsart();
			});
			//LMS跳转
			body.on('click', '#LMSHref', function() {
				page.logic.Carousel();
			});
			//MES跳转
			body.on('click', '#mesHref', function() {
				window.open('http://xclmes.shhuayi.com');
			});
			//LIMS跳转
			body.on('click', '#LIMSHref', function() {
				window.open('http://10.103.14.13:9000');
			});

		},
		data: {
			pipeBigData: [], //大图数据
			nowFlowId: '',
			big_id: '',
			warnAlarmData: null,
			ajaxdata: [],
			bannerTime: null,
			bannerMove: 0,
			bannerLen: 0
		},
		/**
		 * 方法
		 */
		logic: {
			//获取当前时间
			getTimeNow: function() {
				setInterval(function() {
					$('#nowtime').text(DISC.UI.getNowFormatDate());
				}, (1000 * 60));
				$('#nowtime').text(DISC.UI.getNowFormatDate());
			},
			//HSE系统
			HSE_system: function() {
				//隐患累计数量
				var yinhuan_url = DISC.API.HSE_URL + '/bpm/pitfall.action';
				$.get(yinhuan_url, function(data) {
					data.yearValue = data.隐患本年累计数量;
					data.monthValue = data.隐患本月累计数量;
					data.yearValue_com = data.已完成隐患整改本年累计;
					data.monthValue_com = data.已完成隐患整改本月累计;
					var html = template('yinhuan_template', data);
					$('.HES_yinhuan').html(html);
				});
				//安全检查记录
				var AQJC_url = DISC.API.HSE_URL + '/bpm/check.action';
				$.get(AQJC_url, function(data) {
					var li = $('.HES_anquan_bottom ul > li');
					li.eq(0).text(data.本年累计数量);
					li.eq(1).text(data.本月累计数量);
				});
				//今日危险作业
				var dangerUrl = DISC.API.HSE_URL + '/bpm/dangerous.action';
				$.ajax({
					url: dangerUrl,
					type: 'get',
					dataType: 'json',
					success: function(data) {
						var allNum = data.今日危险作业总数;
						var dgNum = data.登高作业;
						var sxNum = data.受限空间作业;
						var dhNum = data.动火作业;
						var qtNum = data.其他作业;
						var dgNum_width = 0;
						var sxNum_width = 0;
						var dhNum_width = 0;
						var qtNum_width = 0;
						if (allNum) {
							dgNum_width = dgNum / allNum * 100;
							sxNum_width = sxNum / allNum * 100;
							dhNum_width = dhNum / allNum * 100;
							qtNum_width = qtNum / allNum * 100;
						}
						var result = {
							allNum: allNum,
							dgNum: dgNum,
							dgNum_width: dgNum_width,
							sxNum: sxNum,
							sxNum_width: sxNum_width,
							dhNum: dhNum,
							dhNum_width: dhNum_width,
							qtNum: qtNum,
							qtNum_width: qtNum_width
						};
						var html = template('weixian_template', result);
						$('.HES_weixian').html(html);
					}
				});

				//我为安全做诊断
				var anquan_url = DISC.API.HSE_URL + '/bpm/diagnostic.action';
				$.get(anquan_url, function(data) {
					$('#anquan_text').text(data.本年累计数量);
				});
				//公司事故事件
				var shigu_url = DISC.API.HSE_URL + '/bpm/bulletin.action';
				$.get(shigu_url, function(data) {
					$('#shigu_text').text(data.集团一般事故及以下的本年数量);
				})
			},
			//巡检系统
			xunjian_chart: function() {
				var url = 'http://xclxj.shhuayi.com:1080/api/BigScreen'
				$.get(url, function(result) {
					var result = $.parseJSON(result);
					console.log('巡检数据', result);

					//柱形图数据
					var chartsData = result.data.detectRouteReport.arrivalRatesList;
					console.log('巡检柱形图数据', chartsData);
					var timeData = [];
					var alertCountData = [];
					var arrivalRateData = [];
					for (var i = 0; i < chartsData.length; i++) {
						timeData.push(chartsData[i].date);
						alertCountData.push(chartsData[i].alertCount);
						arrivalRateData.push(chartsData[i].arrivalRate);
					}
					var xunjian_chart = echarts.init(document.getElementById('xunjian_chart'));
					var option = {
						tooltip: {
							trigger: 'axis',
							axisPointer: {
								type: 'cross',
								label: {
									backgroundColor: '#283b56'
								}
							}
						},
						legend: {
							data: ['报警次数', '巡检到位率'],
							textStyle: {
								color: '#00d9fb',
								fontSize: 24
							}
						},
						grid: {
							left: '50px',
							right: '70px',
							top: '70px',
							bottom: '50px'
						},
						dataZoom: {
							show: false,
							start: 0,
							end: 100
						},
						xAxis: [{
								type: 'category',
								boundaryGap: true,
								data: timeData,
								axisLine: {
									lineStyle: {
										color: '#0697f5',
										width: 2
									}
								},
								axisTick: {
									show: false
								},
								axisLabel: {
									color: '#00d9fb',
									fontSize: 18
								},
								splitLine: {
									show: true,
									lineStyle: {
										color: ['#5f65a0'],
										width: 1
									}
								}
							},
							{
								type: 'category',
								boundaryGap: true,
								data: timeData,
								show: false
							}
						],
						yAxis: [{
								type: 'value',
								scale: true,
								name: '报警次数',
								// max: 3,
								min: 0,
								boundaryGap: [0.2, 0.2],
								nameGap: 25,
								nameTextStyle: {
									color: '#00d9fb',
									fontSize: 24
								},
								axisLine: {
									lineStyle: {
										color: '#0697f5',
										width: 2
									}
								},
								axisTick: {
									show: false
								},
								axisLabel: {
									color: '#00d9fb',
									fontSize: 24
								},
								splitLine: {
									lineStyle: {
										color: ['#0697f5']
									}
								}
							},
							{
								type: 'value',
								scale: true,
								name: '巡检到位率',
								max: 100,
								min: 0,
								boundaryGap: [0.2, 0.2],
								nameGap: 25,
								nameTextStyle: {
									color: '#00d9fb',
									fontSize: 24
								},
								axisLine: {
									lineStyle: {
										color: '#0697f5',
										width: 2
									}
								},
								axisTick: {
									show: false
								},
								axisLabel: {
									color: '#00d9fb',
									fontSize: 24,
									formatter: '{value}%'
								},
								splitLine: {
									show: false,
									lineStyle: {
										color: ['#5f65a0'],
										width: 1
									}
								}
							}
						],
						series: [{
								name: '巡检到位率',
								type: 'line',
								data: arrivalRateData,
								symbol: 'circle', //拐点设置为实心
								symbolSize: 12, //拐点大小
								itemStyle: {
									color: ['#000'],
									borderColor: '#9d2fff',
									borderWidth: 2
								},
								lineStyle: {
									color: '#9d2fff'
								}
							},
							{
								name: '报警次数',
								type: 'bar',
								xAxisIndex: 1,
								yAxisIndex: 1,
								data: alertCountData,
								itemStyle: {
									color: '#2995ff'
								},
								barWidth: 15,
								barGap: '20%',
								label: {
									show: false
								}
							},

						]
					};
					xunjian_chart.clear();
					xunjian_chart.setOption(option);

					var bottomData = result.data;
					for (var i = 0; i < bottomData.shiftGroupRate.attendanceRateList.length; i++) {
						var this_obj = bottomData.shiftGroupRate.attendanceRateList[i];
						this_obj.progress = (parseInt(this_obj.checkCount) / parseInt(this_obj.shouldCount) * 100).toFixed(2);

					}
					bottomData.shiftGroupRate.alarmRate = parseFloat(bottomData.shiftGroupRate.alarmRate).toFixed(2);
					var html = template('xunjian_template', bottomData);
					$('.xunjian_system_bottom').html(html);
				});
			},
			//进厂监控
			infactory_mnt: function() {
				var in_url = DISC.API.MES_URL + '/api/rm/hyinFactoryMonitor/getInFactoryInfo?mtrlCode';
				$.get(in_url, function(result) {
					console.log('进厂监控数据', result);
					var infactoryNameArr = [];
					for (var i = 0; i < result.length; i++) {
						infactoryNameArr.push(result[i].mtrlName);
						var textArr = result[i].inFactorySnapList;
						for (var j = 0; j < textArr.length; j++) {
							switch (textArr[j].snapName) {
								case '日完成':
									result[i].dComplete = parseFloat(textArr[j].snapDetail).toFixed(2) || '--';
									break;
								case '月累计进厂量':
									result[i].monthYield = parseFloat(textArr[j].snapDetail).toFixed(2) || '--';
									break;
								case '当前进度':
									result[i].progress = ((parseFloat(textArr[j].snapDetail) * 100).toFixed(2) || '0') + '%';
									if (parseFloat(textArr[j].snapDetail) > 1) {
										result[i].progress_dom = '100%';
									} else {
										result[i].progress_dom = result[i].progress;
									}
									break;
								case '超欠进度':
									result[i].overSchedule = textArr[j].snapDetail;
									break;
							}
						}
					}
					//todo
					infactoryNameArr.push(result[0].mtrlName);
					var name_data = {
						list: infactoryNameArr
					};
					var unit_html = template('inFactory_template', name_data);
					$('#infactory_ul').html(unit_html);

					function infacText(index) {
						var html = template('inFactory_text_template', result[index]);
						$('#inFactory_text').html(html);
						$('#in_chart .text').text(result[index].progress);
						$('#in_chart .factory_mnt_progress .progress').css({
							'width': result[index].progress_dom
						});
					}
					infacText(0);
					
					DISC.UI.slider({
						obj: $('#infactory_slide'),
						times: 5000,
						startIndex: 0,
						change: function(index) {
							infacText(index);
							if (index == (result.length - 1)) {
								setTimeout(function() {
									clearInterval(pageTimer["infactory_slide"]);
									page.logic.infactory_mnt();
								}, 5501);

							}
						}
					});
				});
			},
			//出厂监控
			outfactory_mnt: function() {
				var out_url = DISC.API.MES_URL + '/api/rm/hyoutFactoryMonitor/getOutFactoryMonitor?mtrlCode';
				$.get(out_url, function(result) {
					console.log('出厂监控数据', result);
					var outfactoryNameArr = [];
					for (var i = 0; i < result.length; i++) {
						outfactoryNameArr.push(result[i].mtrlName);
						var textArr = result[i].inFactorySnapList;
						for (var j = 0; j < textArr.length; j++) {
							switch (textArr[j].snapName) {
								case '日完成':
									result[i].dComplete = parseFloat(textArr[j].snapDetail).toFixed(2) || '--';
									break;
								case '月累计出厂量':
									result[i].monthYield = parseFloat(textArr[j].snapDetail).toFixed(2) || '--';
									break;
								case '当前进度':
									result[i].progress = ((parseFloat(textArr[j].snapDetail) * 100).toFixed(2) || '--') + '%';
									if (parseFloat(textArr[j].snapDetail) > 1) {
										result[i].progress_dom = '100%';
									} else {
										result[i].progress_dom = result[i].progress;
									}
									break;
								case '超欠进度':
									result[i].overSchedule = textArr[j].snapDetail;
									break;
							}
						}
					}
					//todo
					outfactoryNameArr.push(result[0].mtrlName);
					var name_data = {
						list: outfactoryNameArr
					};
					var unit_html = template('inFactory_template', name_data);
					$('#outfactory_ul').html(unit_html);

					function outfacText(index) {
						var html = template('inFactory_text_template', result[index]);
						$('#outFactory_text').html(html);
						$('#out_chart .text').text(result[index].progress);
						$('#out_chart .factory_mnt_progress .progress').css({
							'width': result[index].progress_dom
						});
					}
					outfacText(0);
					
					var html = template('inFactory_text_template', result[0]);
					$('#outFactory_text').html(html);
					DISC.UI.slider({
						obj: $('#outfactory_slide'),
						times: 5000,
						startIndex: 0,
						change: function(index) {
							outfacText(index);
							if (index == (result.length - 1)) {
								setTimeout(function() {
									clearInterval(pageTimer["outfactory_slide"]);
									page.logic.outfactory_mnt();
								}, 5502);
							}
						}
					});
				});
			},
			//装置监控
			unit_mnt: function() {
				var unit_url = DISC.API.MES_URL + '/api/bigScreenrm/rm/unitMonitor/unitRunIndex';
				DISC.UI.ajaxGet(unit_url, function(result) {
					console.log('装置监控数据', result);
					var result_left = result;
					//                     var result_left = [];
					//                     var result_right = [];
					//                     for( var i = 0; i < result.length; i++){
					//                         result[i].yieldName = result[i].yield;
					//                         if( i%2 == 0){
					//                             result_left.push(result[i])
					//                         }else{
					//                             result_right.push(result[i])
					//                         }
					//                     }
					for (var i = 0; i < result.length; i++) {
						result[i].yieldName = result[i].yield;
					}
					//                     console.log(result_left,result_right);
					// 左侧
					var unitNameArr_left = [];
					for (var i = 0; i < result_left.length; i++) {
						unitNameArr_left.push(result_left[i].unitAlias);
					}
					//todo
					unitNameArr_left.push(result_left[0].unitAlias)
					var name_data_left = {
						list: unitNameArr_left
					};
					var unit_html_left = template('unit_name_template', name_data_left);
					$('#unitName_ul').html(unit_html_left);
					var html_left = template('unit_template', result_left[0]);
					$('#unit_mnt_box').html(html_left);
					page.logic.unit_mnt_chart('unit_chart', result_left[0].yieldProgress, result_left[0].planProgress);

					// 右侧
					//                     var unitNameArr_right = [];
					//                     for( var i = 0; i < result_right.length; i++){
					//                         unitNameArr_right.push(result_right[i].unitAlias);
					//                     }
					//                     var name_data_right = {
					//                         list : unitNameArr_right
					//                     };
					//                     var unit_html_right = template('unit_name_template',name_data_right);
					//                     $('#unitName_ul_02').html(unit_html_right);
					//                     var html_right = template('unit_template',result_right[0]);
					//                     $('#unit_mnt_box_02').html(html_right);
					//                     page.logic.unit_mnt_chart(0,result_right[0].yieldProgress,result_right[0].planProgress);

					// $('#unit_mnt_box').html(html);
					DISC.UI.slider({
						obj: $('#unit_slide'),
						times: 5000,
						startIndex: 0,
						change: function(index) {
                            var html = template('unit_template', result_left[index]);
                            $('#unit_mnt_box').html(html);
                            page.logic.unit_mnt_chart('unit_chart', result_left[index].yieldProgress, result_left[index].planProgress);
						}
					})

					//                     DISC.UI.slider({
					//                         obj : $('#unit_slide_02'),
					//                         times : 5000,
					//                         startIndex : 0,
					//                         change:function(index){
					//                             var html = template('unit_template',result_right[index]);
					//                             $('#unit_mnt_box_02').html(html);
					//                             page.logic.unit_mnt_chart(0,result_right[index].yieldProgress,result_right[index].planProgress);
					//                         }
					//                     })
				});
			},
			//装置监控 仪表盘
			unit_mnt_chart: function(id, progress, planProgress) {
				var factory_chart = echarts.init(document.getElementById('unit_chart'));
				//                 if(id == 0){
				//                     factory_chart = echarts.init(document.getElementById('unit_chart_02'));
				//                 }
				if (progress) {
					progress = progress.split('%')[0]; //实际进度
				}
				if (planProgress) {
					planProgress = planProgress.split('%')[0]; //计划进度
				}
				var startColor = '';
				var centerColor = '';
				var startWidth = 0;
				var centerWidth = 0;
				if (progress <= planProgress) {
					startColor = '#258dff';
					centerColor = '#d2416e';
					startWidth = progress;
					centerWidth = planProgress;
				} else {
					startColor = '#258dff';
					centerColor = '#51c35d';
					startWidth = planProgress;
					centerWidth = progress;
				}
				var option = {
					tooltip: {
						formatter: "{a} <br/>{b} : {c}%"
					},
					toolbox: {
						show: false,
						feature: {
							restore: {},
							saveAsImage: {}
						}
					},
					series: [{
						name: '超欠进度',
						type: 'gauge',
						startAngle: 180,
						endAngle: 0,
						min: 0,
						max: 100,
						axisTick: {
							show: false
						},
						axisLabel: {
							show: false
						},
						splitLine: {
							show: false
						},
						axisLine: { // 坐标轴线
							show: false,
							lineStyle: {
								color: [
									[startWidth, startColor],
									[centerWidth, centerColor],
									[1, '#4d4e92']
								]
							}
						},
						radius: '93%',
						detail: {
							show: false
						},
						pointer: {
							width: 1,
							length: '150%',
						},
						itemStyle: { //指针样式
							normal: {
								color: '#f1ae48'
							}
						},
						data: [{
							value: progress,
							name: ''
						}]
					}, {
						name: 'wrapOut',
						type: 'gauge',
						z: 1,
						startAngle: 180,
						endAngle: 0,
						min: 0,
						max: 100,
						splitNumber: 10,
						radius: '100%',
						axisLine: {
							lineStyle: {
								width: 2,
								color: function() {
									var lines = []
									for (var i = 0; i < 288; i++) {
										var color = '#0096fb';
										if (i % 2 === 0) {
											color = '#0096fb00';
										}
										lines.push([i / 288, color]);
									}
									return lines
								}()
							}
						},
						axisTick: {
							show: true,
							length: 0
						},
						axisLabel: {
							show: false
						},
						detail: {
							show: false
						},
						splitLine: {
							show: false
						},
						data: []
					}, {
						name: 'wrapIn',
						type: 'gauge',
						z: 1,
						startAngle: 180,
						endAngle: 0,
						min: 0,
						max: 100,
						splitNumber: 10,
						radius: '72%',
						axisLine: {
							lineStyle: {
								width: 2,
								// 坐标轴线
								// 属性lineStyle控制线条样式
								color: function() {
									var lines = []
									for (var i = 0; i < 36; i++) {
										var color = '#0096fb';
										if (i % 2 === 0) {
											color = '#0096fb00';
										}
										lines.push([i / 36, color]);
									}
									return lines
								}()
							}
						},
						axisTick: {
							show: false
						},
						axisLabel: {
							show: false
						},
						splitLine: {
							show: false
						},
						detail: {
							show: false
						},
						data: []
					}]
				};
				factory_chart.clear();
				factory_chart.setOption(option);
			},
			//罐区监控
			tankFun: function() {
				var url = DISC.API.MES_URL + '/api/bigScreenrm/rm/tankAreaMonitor/tankRunIndex';
				DISC.UI.ajaxGet(url, function(arr) {
					var arr_top = [];
					var arr_bottom = [];
					for (var i = 0; i < arr.length; i++) {
						arr[i].d_value = parseInt(parseFloat(arr[i].mtrlStorage) - parseFloat(arr[i].yesterdayTankCapacity));
						arr[i].mtrlStorage = parseFloat(arr[i].mtrlStorage).toFixed(2);
						arr[i].percentage = parseInt(arr[i].mtrlStorage / parseFloat(arr[i].maxTankCapacity) * 100) + '%';
						if (i % 2 == 0) {
							arr_top.push(arr[i]);
						} else {
							arr_bottom.push(arr[i]);
						}
					}
					console.log('罐区监控', arr);
					var data_top = {
						list: arr_top,
						title: 'top'
					};
					var data_bottom = {
						list: arr_bottom,
						title: 'bottom'
					}
					var html_top = template('tank_mnt_template', data_top);
					var html_bottom = template('tank_mnt_template', data_bottom);
					var tank_mnt_top = $('#tank_mnt_top');
					var tank_mnt_bottom = $('#tank_mnt_bottom');
					tank_mnt_top.html(html_top);
					tank_mnt_bottom.html(html_bottom);
					var li_width = $('.tank_mnt_option').width();
					tank_mnt_top.css({
						'width': arr_top.length * li_width + 'px'
					});
					tank_mnt_bottom.css({
						'width': arr_bottom.length * li_width + 'px'
					})
					var moveIndex_top = 0;
					var moveIndex_bottom = 0;
					var tankAutoPlay = null;

					function autoPlay() {
						tankAutoPlay = setInterval(function() {
							if (moveIndex_top >= tank_mnt_top.children('li').length - 2) {
								moveIndex_top = 0;
								clearInterval(tankAutoPlay);
								page.logic.tankFun();
							}
							if (moveIndex_bottom >= tank_mnt_bottom.children('li').length - 2) {
								moveIndex_bottom = 0;
							}
							tank_mnt_top.css({
								'margin-left': -1 * moveIndex_top * li_width + 'px'
							});
							tank_mnt_bottom.css({
								'margin-left': -1 * moveIndex_bottom * li_width + 'px'
							});
							moveIndex_top++;
							moveIndex_bottom++;


						}, 5000)

					}
					autoPlay();

				});

			},
			//公用工程监控
			pipeFlowChart: function() {
				var url = DISC.API.MES_URL + '/api/bc/pipeNetRunConfHandler/getPipeNetRunConfsByName';
				DISC.UI.ajaxGet(url, function(data) {
					var result = data.filter(function(option) {
						return option.pipeNetType.indexOf('缩略图') >= 0;
					});
					//大图数据
					page.data.pipeBigData = data.filter(function(option) {
						return option.pipeNetType.indexOf('大图') >= 0;

					});
					//缩略图匹配大图
					for (var i = 0; i < result.length; i++) {
						var small_name = result[i].pipeNetType.split('-')[0];
						for (j = 0; j < page.data.pipeBigData.length; j++) {
							if (page.data.pipeBigData[j].pipeNetType.indexOf(small_name) >= 0) {
								result[i].big_id = page.data.pipeBigData[j].pipeNetRunConfId;
								break;
							}
						}
					}
					console.log('公用工程数据', result);
					var result_pip = result.filter(function(option) {
						return option.pipeNetFlowChartUrl != 'all_small';
					});
					var result_all = result.filter(function(option) {
						return option.pipeNetFlowChartUrl == 'all_small';
					});
					var tempData = {
						list: result_pip
					};
					var html = template('pipe_template', tempData);
					var pipe_mnt_ul = $('#pipe_mnt_ul');
					/*todo add*/
					var len = result_pip.length;
					var liHtml = []
					function ajaxHTML1(svg_url, li_url,index) {
						DISC.UI.ajaxGet(li_url, function(data) {
							var li_data = {
								list: data
							}
							var li_html = template('flow_temp', li_data);
							liHtml[index]=('<div class="svg_box"><div class="metrics_box_small">' + li_html + '</div><iframe src=' +
								svg_url + '>' + svg_url + '</iframe></div>');

							if (liHtml.length === len) {
								pipe_mnt_ul.html(html);
								var li = pipe_mnt_ul.children('li');
								li.each(function(index) {
									var $this = $(this);
									$this.hide();
									$this.append(liHtml[index])
                                    $this.fadeIn();
								});

							}
						});
					}
					for (var i = 0; i < len; i++) {
						var svg_url = '../js/pipeFlowChartJson_small/' + result_pip[i].pipeNetFlowChartUrl + '.svg';
						var li_url = DISC.API.MES_URL + '/api/bc/pipeNetRunConfHandler/getPipeNetRunConfsByCodeAndName?id=' +
							result_pip[i].pipeNetRunConfId;
						ajaxHTML1(svg_url, li_url,i);
					}
					var tempData_all = {
						list: result_all
					};
					var html_all = template('pipe_template_all', tempData_all);
					var pipe_mnt_ul_all = $('#pipe_mnt_ul_all');
					/*todo add*/
					var len2 = result_all.length
					var liHtml2 = []

					function ajaxHTML2(svg_url_all, li_url) {
						DISC.UI.ajaxGet(li_url, function(data) {
							var li_data = {
								list: data
							}
							var li_html = template('flow_temp', li_data);
							liHtml2.push('<div class="svg_box" style="overflow: hidden;"><div class="metrics_box_small">' + li_html + '</div><iframe src=' +
								svg_url_all + '>' + svg_url_all + '</iframe></div>');
							if (liHtml2.length === len2) {
								pipe_mnt_ul_all.html(html_all);
								var li_all = pipe_mnt_ul_all.children('li');
								li_all.each(function(index) {
									var $this = $(this);
									$this.append(liHtml2[index])
								})

							}
						})
					}
					for (var i = 0; i < len2; i++) {
						var svg_url_all = '../js/pipeFlowChartJson_small/' + result_all[i].pipeNetFlowChartUrl + '.svg';
						var li_url = DISC.API.MES_URL + '/api/bc/pipeNetRunConfHandler/getPipeNetRunConfsByCodeAndName?id=' +
							result_all[i].pipeNetRunConfId;
							
						ajaxHTML2(svg_url_all, li_url)

					}

				});
			},

			//公用工程监控大图
			pipeFlowChatrBig: function(id, big_id) {
				if (id) {
					var pipe_mnt_li_big = $('.pipe_mnt_li_big');
					var svg_url = '../js/pipeFlowChartJson/' + id + '_big.svg';
					$.ajax({
						url: svg_url,
						type: 'get',
						dataType: 'text',
						success: function(svg_data) {
							var li_url = DISC.API.MES_URL + '/api/bc/pipeNetRunConfHandler/getPipeNetRunConfsByCodeAndName?id=' +
								big_id;
							DISC.UI.ajaxGet(li_url, function(data) {
								console.log('大图数据', data);
								var li_data = {
									list: data
								};
								var li_html = template('flow_temp', li_data);
								pipe_mnt_li_big.children('.svg_box').remove();
								pipe_mnt_li_big.append('<div class="svg_box"><div class="metrics_box_big">' + li_html + '</div>' +
									svg_data + '</div>');
							});
						}
					});
				}
			},
			//预报警看板获取数据
			warnAlarm: function() {
				var url = DISC.API.MES_URL + '/api/displayCenter/warnAlarmBoard/getWarnAlarmInfo';
				$.get(url, function(result) {
					console.log('看板数据', result);
					for (var i = 0; i < result.length; i++) {
						result[i].warnAlarmTime = DISC.UI.getMyDate(result[i].warnAlarmTime);
						var colorText = result[i].warnAlarmGradeName;
						if (colorText.indexOf('红色') >= 0) {
							result[i].textColor = 'red';
						}
						if (colorText.indexOf('橙色') >= 0) {
							result[i].textColor = 'orange';
						}
						if (colorText.indexOf('黄色') >= 0) {
							result[i].textColor = 'yellow';
						}
					}

					page.data.warnAlarmData = result;
					var type = $('#warnAlarm_mnt_tab ul > li.current').data('id');
					var newResult = result.filter(function(option) {
						return option.warnAlarmTypeCode == type;
					});
					page.logic.warnAlarmFilter(newResult);
				});

			},
			warnAlarmFilter: function(result) {
				clearTimeout(pageTimer["warnAlarmSet"]);
				clearTimeout(pageTimer["warnAlarmSetLoading"]);
				var data = {
					list: result
				};
				var html = template('warnAlarm_template', data);
				var warnAlarm_mnt_td_box_n = $('.warnAlarm_mnt_td_box_n');
				warnAlarm_mnt_td_box_n.removeClass('fadeIn').hide();
				warnAlarm_mnt_td_box_n.html(html);
				warnAlarm_mnt_td_box_n.show().addClass('fadeIn');
				var start_index = 0;
				warnAlarm_mnt_td_box_n.css({
					'margin-top': '0'
				});
				if (data.list.length > 6) {
					function autoPlay() {
						var ul = warnAlarm_mnt_td_box_n.children('ul');
						var ul_height = ul.height();
						warnAlarm_mnt_td_box_n.css({
							'margin-top': -1 * start_index * ul_height + 'px'
						})
						start_index++;
						warnAlarm_mnt_td_box_n.append(ul.eq(start_index - 1).clone());
						pageTimer["warnAlarmSet"] = setTimeout(function() {
							if (start_index >= data.list.length) {
								page.logic.warnAlarm();
							} else {
								autoPlay();
							}
						}, 3000)
					}
					//         warnAlarm_mnt_td_box_n.hover(function () {
					//             clearTimeout(pageTimer["warnAlarmSet"]);
					//         }, function () {
					//             autoPlay();
					//         })
					autoPlay();
				} else {
					function loadingPlay() {
						pageTimer["warnAlarmSetLoading"] = setTimeout(function() {
							page.logic.warnAlarm();
						}, 3000)
					}
					//         warnAlarm_mnt_td_box_n.hover(function () {
					//             clearTimeout(pageTimer["warnAlarmSetLoading"]);
					//         }, function () {
					//             loadingPlay();
					//         })
					loadingPlay()
				}
			},
			//班组KPI
			groupsTeams_kpi: function() {
				var url = DISC.API.MES_SECOND_URL + '/KPIhy/findHYscreen';
				DISC.UI.ajaxGet(url, function(result) {

					var data = {
						Prdt_Cell_Name_arr: [],
						Stable_Rate_arr: [],
						Product_Yield_Score_arr: [],
						Tar_Ratio_Score_arr: []
					}
					for (var i = 0; i < 3; i++) {
						data.Prdt_Cell_Name_arr.push(result[i].Prdt_Cell_Name);
						data.Stable_Rate_arr.push(parseFloat(result[i].Stable_Rate).toFixed(2));
						data.Product_Yield_Score_arr.push(result[i].Product_Yield_Score);
						data.Tar_Ratio_Score_arr.push(result[i].Tar_Ratio_Score);
					}
					console.log('KPI数据', data);
					var html = template('KPI_template', data);
					$('.groupsTeams_table').html(html);
					if (result.length) {
						$("#groupsTeams_chart1").circleChart({
							value: result[0].Stable_Score,
							color: '#812fd6',
							backgroundColor: '#262f56',
							widthRatio: 0.4,
							size: 170,
							text: result[0].Stable_Score,
						});
						$("#groupsTeams_chart2").circleChart({
							value: result[0].Ope_Score,
							color: '#9a8c64',
							backgroundColor: '#262f56',
							widthRatio: 0.4,
							size: 170,
							text: result[0].Ope_Score,
						});
						$("#groupsTeams_chart3").circleChart({
							value: result[0].KPI_Assess_Score,
							color: '#0baf93',
							backgroundColor: '#262f56',
							widthRatio: 0.4,
							size: 170,
							text: result[0].KPI_Assess_Score,
						});
					}
				});

			},
			//今日工作安排
			workagt: function() {
				var startTime = DISC.UI.getNowFormatDate().split(' ')[0];
				var url = DISC.API.MES_URL + '/api/hydm/hyDailyWorkPlanHandlerMonitor/findAllByCondition?startTime=' +
					startTime + '&endTime=' + startTime + '&vagueValue=&state=2';
				DISC.UI.ajaxGet(url, function(data) {
					console.log('今日工作安排', data);
					if (data.length) {
						$('#workagt_man').text(data[0].crtRole);
						$('.workagt_content').html('<dt>内容：</dt><dd><textarea readonly>' + data[0].workContent +
							'</textarea></dd>');
					} else {
						$('#workagt_man').text('--');
						$('.workagt_content').html('今天暂无工作安排');
					}
				});
			},
			//LMS系统
			LMS_system: function() {
				var url = DISC.API.LMS_URL + '/BokeDee/httpService?action=mtcp';
				$.get(url, function(result) {
					var result = $.parseJSON(result);
					console.log('LMS系统', result);
					var all_height = $('.LMS_system_left_border').height();
					var span_height = all_height / result.length;
					$('.LMS_system_left_border span').css({
						'height': span_height + 'px'
					})
					var index = 0;
					var data = result[index];
					var html = template('LMS_template', data);
					$('.LMS_system_left_text span').text(data.name);
					$('.LMS_system_right').html(html);
					index = 1;

					function autoplay() {
						pageTimer["LMS"] = setInterval(function() {
							if (index >= result.length) {
								index = 0;
								clearInterval(pageTimer["LMS"]);
								page.logic.LMS_system();
							}
							$('.LMS_system_left_border span').css({
								'margin-top': span_height * index + 'px'
							});
							$('.LMS_system_right,.LMS_system_left_text').removeClass('fadeInDown').hide();
							var data = result[index];
							var html = template('LMS_template', data);
							$('.LMS_system_right').html(html).show().addClass('fadeInDown');
							$('.LMS_system_left_text span').text(data.name);
							$('.LMS_system_left_text').show().addClass('fadeInDown');
							index++;
						}, 5000);
					}
					autoplay();
				});

			},
			// LMS右侧
			LMS_systems: function() {
				var url = "http://10.105.16.83:8092/BokeDee/httpService?action=mdd";
				$.get(url, function(result) {
					var result = $.parseJSON(result);
					page.logic.setBanner(result)
				});

			},
			bannerTimeout: function() {
				if (page.data.bannerTime) {
					clearInterval(page.data.bannerTime);
				}
				page.logic.bannerMove()
				page.data.bannerTime = setTimeout(function() {
					page.logic.bannerTimeout()
				}, 5000)
			},
			setBanner: function(data) {
				var data = page.data.ajaxdata = data;
				page.data.bannerLen = data.length
				var index = 0
				while (index < page.data.bannerLen - 1) {
					var li = $('<li data-index="' + index + '"></li>')
					$('.banner').find('ul.num').append(li)
					li = $('<li>' + data[index]['name'] + '</li>')
					$('.banner').find('ul.ban').append(li)
					index++
				}
				$(".banner .num li").first().addClass("on");
				page.logic.bannerTimeout()
			},
			bannerMove: function() {
				if (page.data.bannerMove == page.data.bannerLen - 1) {
					page.data.bannerMove = 0
					top = -160
					$(".banner .num li").eq(0).addClass("on").siblings().removeClass("on");

				} else {
					$(".banner .num li").eq(page.data.bannerMove).addClass("on").siblings().removeClass("on")
				}
				var top = -160 + (-200 * page.data.bannerMove) + 'px'
				$('.banner').find('ul.ban').css('top', top)
				page.logic.setContent(page.data.ajaxdata, page.data.bannerMove)
				page.data.bannerMove++
			},
			setContent: function(data, index) {
				$(".cpspan").text(data[index]['cq'])
				$(".wpspan").text(data[index]['wq'])
				$(".scqspan").text(data[index]['scq'])
				$(".swqspan").text(data[index]['swq'])
			},
			//大机组
			largeMonitor: function() {
				var url = DISC.API.MES_URL + '/api/displayCenter/unitIndex';
				DISC.UI.ajaxGet(url, function(jsonData) {
					var data = $.ET.toObjectArr(jsonData);
					var unitCodeArr = [];
					for (var i = 0; i < data.length; i++) {
						unitCodeArr.push(data[i].UnitCode);
					}
					unitCodeArr = unitCodeArr.unique(); //unitCode去重
					var largeData = [];
					for (var i = 0; i < unitCodeArr.length; i++) {
						var list = [];
						for (var j = 0; j < data.length; j++) {
							if (data[j].UnitCode == unitCodeArr[i]) {
								list.push(data[j]);
							}
						}
						largeData.push({
							UnitCode: unitCodeArr[i],
							list: list
						});
					}
					console.log('大机组数据', largeData);
					var getData = {
						list: largeData
					};
					var curIndex = 0;
					var html = template('large_monitor_template', getData);
					var ul = $('#large_monitor_ul');
					ul.html(html);
					var li = ul.children('li');
					var li_width = li.width();
					var ul_width = li_width * unitCodeArr.length;
					ul.css({
						'width': ul_width
					});
					var large_monitor_top_tab = $('#large_monitor_top_tab');
					var top_li_html = '';
					for (var i = 0; i < unitCodeArr.length; i++) {
						if (i == curIndex) {
							top_li_html += '<li class="current"></li>';
						} else {
							top_li_html += '<li></li>';
						}
					}
					large_monitor_top_tab.html(top_li_html);
					$('.large_monitor_top .title span').text(unitCodeArr[curIndex]);

					function autoplay() {
						pageTimer["large"] = setInterval(function() {
							var top_li = large_monitor_top_tab.children('li');
							ul.css({
								'margin-left': -1 * curIndex * li_width + 'px'
							});
							top_li.removeClass('current');
							top_li.eq(curIndex).addClass('current');
							$('.large_monitor_top .title span').text(unitCodeArr[curIndex]);
							curIndex++;
							if (curIndex >= unitCodeArr.length) {
								curIndex = 0;
								setTimeout(function() {
									clearInterval(pageTimer["large"]);
									page.logic.largeMonitor();
								}, 5000)
							}

						}, 5000);
					}
					autoplay();
				});
			},
			//LIMS系统
			LIMS_system: function() {
				var url = 'http://10.103.14.12/LToMWebService/LToMService.asmx/GetSampleDistInfo';
				$.ajax({
					url: url,
					type: 'post',
					dataType: 'text',
					contentType: "application/json;charset=utf-8",
					success: function(data) {
						var result = $($.parseXML(data)).children('string').html().split(';');
						var name_arr = result[1].split(',');
						var value_arr = result[0].split(',');
						var value_arr2 = result[3].split(',');
						var name_arr2 = result[4].split(',');
						for (var i = 0; i < name_arr.length; i++) {
							var name1 = name_arr[i].split('（');
							name_arr[i] = name1[0].split('生产装置')[1] + name1[1].split('）')[0];
							name_arr[i] = name_arr[i].replace(/丙烯酸乙酯/g, 'EA');
						}
						for (var i = 0; i < name_arr.length; i++) {
							name_arr[i] = name_arr[i].replace(/丙烯酸丁酯/g, 'BA');
						}
						for (var i = 0; i < name_arr.length; i++) {
							name_arr[i] = name_arr[i].replace(/丙烯酸/g, 'AA');
						}
						console.log('LIMS数据', name_arr, value_arr, name_arr2, value_arr2);
						var LIMS_chart = echarts.init(document.getElementById('LIMS_system'));
						var option = {
							tooltip: {
								trigger: 'axis',
								axisPointer: {
									label: {
										backgroundColor: '#283b56'
									}
								}
							},
							grid: {
								left: '60px',
								right: '20px',
								top: '80px',
								bottom: '50px'
							},
							title: {
								left: 'center',
								text: '馏出口月合格率达标率',
								textStyle: {
									color: '#15c8ff',
									fontSize: 30
								}
							},
							xAxis: {
								type: 'category',
								data: name_arr,
								axisLabel: {
									color: '#00d9fb',
									fontSize: 14,
									interval: 0,
									formatter: function(params) {
										var newParamsName = ""; // 最终拼接成的字符串
										var paramsNameNumber = params.length; // 实际标签的个数
										var provideNumber = 4; // 每行能显示的字的个数
										var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
										/**
										 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
										 */
										// 条件等同于rowNumber>1
										if (paramsNameNumber > provideNumber) {
											/** 循环每一行,p表示行 */
											for (var p = 0; p < rowNumber; p++) {
												var tempStr = ""; // 表示每一次截取的字符串
												var start = p * provideNumber; // 开始截取的位置
												var end = start + provideNumber; // 结束截取的位置
												// 此处特殊处理最后一行的索引值
												if (p == rowNumber - 1) {
													// 最后一次不换行
													tempStr = params.substring(start, paramsNameNumber);
												} else {
													// 每一次拼接字符串并换行
													tempStr = params.substring(start, end) + "\n";
												}
												newParamsName += tempStr; // 最终拼成的字符串
											}


										} else {
											// 将旧标签的值赋给新标签
											newParamsName = params;
										}
										//将最终的字符串返回
										return newParamsName;
									}
								},
								axisLine: {
									lineStyle: {
										color: '#0697f5',
										width: 2
									}
								}
							},
							yAxis: {
								type: 'value',
								name: '单位(%)',
								nameGap: 25,
								nameTextStyle: {
									color: '#00d9fb',
									fontSize: 24
								},
								axisLabel: {
									color: '#00d9fb',
									fontSize: 24
								},
								axisLine: {
									lineStyle: {
										color: '#0697f5',
										width: 2
									}
								},
								splitLine: {
									show: true,
									lineStyle: {
										color: ['#053572'],
										width: 2
									}
								}
							},
							series: [{
								data: value_arr,
								type: 'bar',
								barWidth: 55,
								itemStyle: {
									normal: {
										color: new echarts.graphic.LinearGradient(
											0, 0, 0, 1,
											[{
													offset: 0,
													color: '#c74344'
												},
												{
													offset: 1,
													color: '#c69842'
												}
											]
										)
									}
								}
							}]
						};
						LIMS_chart.clear();
						LIMS_chart.setOption(option);

						var LIMS_pipe = echarts.init(document.getElementById('LIMS_pipe'));
						var pipe_data = [];
						for (var i = 0; i < name_arr2.length; i++) {
							pipe_data.push({
								value: parseFloat(value_arr2[i]),
								name: name_arr2[i]
							})
						}
						var chart_option = {
							title: {
								left: 'center',
								text: '实验室-所有样品类型分布',
								textStyle: {
									color: '#15c8ff',
									fontSize: 30
								}
							},
							tooltip: {
								trigger: 'item',
								formatter: "{b} : {c} ({d}%)",
								textStyle: {
									color: '#fff',
									fontSize: 24
								}
							},
							legend: {
								top: 60,
								left: 'center',
								data: name_arr2,
								textStyle: {
									color: '#15c8ff',
									fontSize: 20
								}
							},
							series: [{
								name: '材料',
								type: 'pie',
								radius: '70%',
								center: ['50%', '62%'],
								data: pipe_data,
								itemStyle: {
									emphasis: {
										shadowBlur: 10,
										shadowOffsetX: 0,
										shadowColor: 'rgba(0, 0, 0, 0.5)'
									}
								},
								label: {
									normal: {
										position: 'inside',
										textStyle: {
											color: '#fff',
											fontSize: 20
										},
										formatter: "{c}({d}%)"
									}
								},
								labelLine: {
									normal: {
										show: false
									}
								}
							}]
						};
						LIMS_pipe.clear();
						LIMS_pipe.setOption(chart_option);
					}
				})


			},
			//环保装置
			huanbao_unit: function() {
				var url = DISC.API.MES_URL + '/api/rm/unitMonitor/getEnvironmentalUnitInfo';
				$.get(url, function(result) {
					console.log('环保', result);
					for (var i = 0; i < result.length; i++) {
						for (var j = 0; j < result[i].inFactorySnapList.length; j++) {
							var this_obj = result[i].inFactorySnapList[j];
							this_obj.snapDetail = parseInt(this_obj.snapDetail);
						}
						if (result[i].mtrlCode == 'Z5HY0106') {
							var jinkouValue = '';
							var chukouValue = '';
							var inFactorySnapList = result[i].inFactorySnapList;
							for (var j = 0; j < inFactorySnapList.length; j++) {
								if (inFactorySnapList[j].snapName == '进口NMHC') {
									jinkouValue = inFactorySnapList[j].snapDetail;
									inFactorySnapList[j]
								}
								if (inFactorySnapList[j].snapName == '出口NMHC') {
									chukouValue = inFactorySnapList[j].snapDetail;
								}
							}
							inFactorySnapList.push({
								'snapName': 'NMHC去除率',
								'snapDetail': parseInt(((jinkouValue - chukouValue) / jinkouValue) * 100) + '%',
								'unit': ''
							});
						}
					}
					var data = {
						list: result
					};
					var html = template('huanbao_template', data);
					var huanbao_box = $('.huanbao_unit_mnt_option_box');
					huanbao_box.html(html);
					var curIndex = 0;

					function autoplay() {
						pageTimer["huanbao"] = setInterval(function() {
							var li = huanbao_box.children('.huanbao_unit_mnt_option');
							var li_height = li.height() + 18;
							huanbao_box.css({
								'margin-top': -1 * curIndex * li_height + 'px'
							});
							curIndex++;
							if (curIndex >= (result.length - 1)) {
								curIndex = 0;
								setTimeout(function() {
									clearInterval(pageTimer["huanbao"]);
									page.logic.huanbao_unit();
								}, 5000)
							}

						}, 5000);
					}
					autoplay();
				})
			},
			//定时刷新
			setFun: function() {
				setInterval(function() {
					//LIMS系统
					page.logic.LIMS_system();
					//HSE系统
					page.logic.HSE_system();
					//巡检 柱形图
					page.logic.xunjian_chart();
					//班组 KPI
					page.logic.groupsTeams_kpi();
					//今日工作安排
					page.logic.workagt();

                    page.logic.pipeFlowChart();

					page.logic.pipeFlowChatrBig(page.data.nowFlowId, page.data.big_id);
				}, 1000 * 30)
			},
			weather: function() {
				var url = 'https://www.tianqiapi.com/api/?version=v6&cityid=';
				$.ajax({
					url: url,
					type: 'get',
					dataType: 'jsonp',
					success: function(data) {
						console.log('天气', data);
						var html = template('weather_template', data);
						$('#weather').html(html);
						if (data.alarm.alarm_type) { //如果有天气预警
							$('.weather_alert').fadeIn();
							$('.alarm_in').css({
								'display': 'inline-block'
							});
						}
					}
				})
			},
			//获取用户名
			getValueFromCookie: function(cName) {
				var allcookies = document.cookie;
				var value;
				if (cName === null || cName === undefined || cName === '') {
					cName = "UserName"; //默认获取用户名
				}
				if (allcookies.length > 0) {
					var cookieStart = allcookies.indexOf(cName);
					if (cookieStart > -1) {
						cookieStart = cookieStart + cName.length + 1;
						var cookieEnd = allcookies.indexOf(";", cookieStart);
						if (cookieEnd == -1) {
							cookieEnd = allcookies.length;
						}
						value = unescape(allcookies.substring(cookieStart, cookieEnd));
					} else {
						value = "未能找到该cookie";
					}
					return value;
				}
			},
			//lms
			Carousel: function() {
				$.ajax({
					url: 'http://10.99.100.182:8090/yigotest/UserVerify?hyADCode=' + page.logic.getValueFromCookie('UserName'),
					type: 'get',
					dataType: "json",
					success: function(result) {
						if (result[0].token) {
							window.open('http://10.99.100.182:8090/yigotest?token=' + result[0].token);
						} else {
							window.open('http://10.99.100.182:8090/yigotest?token=');

						}
					},
					error: function(result) {
						console.log('失败')
					}

				})
			},
			//xj
			carouselXjsart: function() {
				$.ajax({
					url: 'http://47.111.69.224:8081/api/UserVerify?hyADCode=' + page.logic.getValueFromCookie('UserName'),
					type: 'get',
					dataType: "json",
					success: function(result) {
						console.log('result11', result);
						if (result.success == true) {
							window.open('http://47.111.69.224:8081/login/index?token=' + result.data);
						} else {
							window.open('http://47.111.69.224:8081/login/index?token=');

						}
					},
					error: function(result) {
						console.log('失败')
					}

				})
			},
			//hse
			carouselHsesart: function() {
				$.ajax({
					url: 'http://10.103.100.201:8089/yigo/login/UserVerify.action?hyADCode=' + page.logic.getValueFromCookie(
						'UserName'),
					type: 'get',
					dataType: "json",
					xhrFields: {
						withCredentials: true
					},
					//crossDomain: true,
					success: function(result) {
						console.log('hse', result.Token);

						if (result.Token != "") {
							window.open('http://10.103.100.201:8089/yigo/?token=' + result.Token);
						} else {
							window.open('http://10.103.100.201:8089/yigo/?token=');

						}
					},
					error: function(result) {
						console.log('失败')
					}

				})
			}
		}
	}
	page.init();
	window.page = page;
})
