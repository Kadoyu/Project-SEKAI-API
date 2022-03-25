![gif]('url')

# Project-SEKAI-API
 
Web API to get ProjectSEKAI feat. HatsuneMiku DataBase.
 
# Features
* Providing various information in json format as webAPI.
* Get various images with webp.
* Data update every 10 minutes.
 
# Requirement
 
Environment where webAPI can be executed.

# Usage

### infomation from ProjectSEKAI
**Endpoint**: [https://script.google.com/macros/s/AKfycbwMoQMBFsZC8u2j8X1yiPBs3E1PYXrh0Yi9_qsk4Tk80WrOeIaoQq6TDlmUe_pT0QHUqg/exec?authToken=HoshinoIchika&data=info](https://script.google.com/macros/s/AKfycbwMoQMBFsZC8u2j8X1yiPBs3E1PYXrh0Yi9_qsk4Tk80WrOeIaoQq6TDlmUe_pT0QHUqg/exec?authToken=HoshinoIchika&data=info)

<details>
  <summary><b>Response</b></summary>
  
  ```json
  [
	{
		"id": 4,
		"seq": 40,
		"displayOrder": 19990,
		"informationType": "content",
		"informationTag": "update",
		"browseType": "external",
		"platform": "all",
		"title": "プロジェクトセカイ公式サイト",
		"path": "https://pjsekai.sega.jp/",
		"startAt": 1601391600000,
		"bannerAssetbundleName": "content_banner_pjsekai_site"
	},
	{
		"id": 6,
		"seq": 60,
		"displayOrder": 19980,
		"informationType": "content",
		"informationTag": "update",
		"browseType": "external",
		"platform": "all",
		"title": "公式Twitter",
		"path": "https://twitter.com/pj_sekai",
		"startAt": 1601391600000,
		"bannerAssetbundleName": "content_banner_pjsekai_twitter"
	},
	{
		"id": 16,
		"seq": 99999,
		"displayOrder": 30010,
		"informationType": "normal",
		"informationTag": "information",
		"browseType": "internal",
		"platform": "all",
		"title": "初心者ガイド",
		"path": "https://production-web.sekai.colorfulpalette.org/information/index.html?id=beginners_guide_YoK7T5Re",
		"startAt": 1601434800000,
		"bannerAssetbundleName": "banner_beginners_guide"
	},
	{
		"id": 54,
		"seq": 70,
		"displayOrder": 19970,
		"informationType": "content",
		"informationTag": "update",
		"browseType": "external",
		"platform": "all",
		"title": "Youtube公式チャンネル",
		"path": "https://www.youtube.com/channel/UCdMGYXL38w6htx6Yf9YJa-w/",
		"startAt": 1601434800000,
		"bannerAssetbundleName": "content_banner_pjsekai_youtube"
	},
	{
		"id": 55,
		"seq": 9930,
		"displayOrder": 1,
		"informationType": "bug",
		"informationTag": "bug",
		"browseType": "internal",
		"platform": "all",
		"title": "【10月30日7時00分追記】未所持楽曲を「みんなでライブ」でプレイした際にクリアデータが正常に反映されない事象について",
		"path": "https://production-web.sekai.colorfulpalette.org/information/index.html?id=bug_music_not_possessed_20201006_fix_Teq98",
		"startAt": 1604008800000,
		"endAt": 1604257199000
	}
]
  ```
  </details>
  
  ---
  
  ### event
**Endpoint**: [https://script.google.com/macros/s/AKfycbwMoQMBFsZC8u2j8X1yiPBs3E1PYXrh0Yi9_qsk4Tk80WrOeIaoQq6TDlmUe_pT0QHUqg/exec?authToken=HoshinoIchika&data=event](https://script.google.com/macros/s/AKfycbwMoQMBFsZC8u2j8X1yiPBs3E1PYXrh0Yi9_qsk4Tk80WrOeIaoQq6TDlmUe_pT0QHUqg/exec?authToken=HoshinoIchika&data=event)

<details>
  <summary><b>Response</b></summary>
  
  ```json
  [
	{
		"id": 1,
		"eventType": "marathon",
		"name": "雨上がりの一番星",
		"assetbundleName": "event_stella_2020",
		"bgmAssetbundleName": "event/event_stella_2020/bgm/event_stella_2020_top",
		"startAt": 1602223200000,
		"aggregateAt": 1603022399000,
		"rankingAnnounceAt": 1603022999000,
		"distributionStartAt": 1603072799000,
		"closedAt": 1603173599000,
		"distributionEndAt": 1604329199000,
		"virtualLiveId": 9,
		"unit": "none",
		"eventRankingRewardRanges": [
			{
				"id": 1,
				"eventId": 1,
				"fromRank": 1,
				"toRank": 1,
				"eventRankingRewards": [
					{
						"id": 1,
						"eventRankingRewardRangeId": 1,
						"resourceBoxId": 1
					}
				]
			},
			{
				"id": 2,
				"eventId": 1,
				"fromRank": 2,
				"toRank": 2,
				"eventRankingRewards": [
					{
						"id": 2,
						"eventRankingRewardRangeId": 2,
						"resourceBoxId": 2
					}
				]
			},
			{
				"id": 3,
				"eventId": 1,
				"fromRank": 3,
				"toRank": 3,
				"eventRankingRewards": [
					{
						"id": 3,
						"eventRankingRewardRangeId": 3,
						"resourceBoxId": 3
					}
				]
			},
			{
				"id": 4,
				"eventId": 1,
				"fromRank": 4,
				"toRank": 10,
				"eventRankingRewards": [
					{
						"id": 4,
						"eventRankingRewardRangeId": 4,
						"resourceBoxId": 4
					}
				]
			},
			{
				"id": 5,
				"eventId": 1,
				"fromRank": 11,
				"toRank": 20,
				"eventRankingRewards": [
					{
						"id": 5,
						"eventRankingRewardRangeId": 5,
						"resourceBoxId": 5
					}
				]
			},
			{
				"id": 6,
				"eventId": 1,
				"fromRank": 21,
				"toRank": 30,
				"eventRankingRewards": [
					{
						"id": 6,
						"eventRankingRewardRangeId": 6,
						"resourceBoxId": 6
					}
				]
			},
			{
				"id": 7,
				"eventId": 1,
				"fromRank": 31,
				"toRank": 40,
				"eventRankingRewards": [
					{
						"id": 7,
						"eventRankingRewardRangeId": 7,
						"resourceBoxId": 7
					}
				]
			},
			{
				"id": 8,
				"eventId": 1,
				"fromRank": 41,
				"toRank": 50,
				"eventRankingRewards": [
					{
						"id": 8,
						"eventRankingRewardRangeId": 8,
						"resourceBoxId": 8
					}
				]
			},
			{
				"id": 9,
				"eventId": 1,
				"fromRank": 51,
				"toRank": 100,
				"eventRankingRewards": [
					{
						"id": 9,
						"eventRankingRewardRangeId": 9,
						"resourceBoxId": 9
					}
				]
			},
			{
				"id": 10,
				"eventId": 1,
				"fromRank": 101,
				"toRank": 200,
				"eventRankingRewards": [
					{
						"id": 10,
						"eventRankingRewardRangeId": 10,
						"resourceBoxId": 10
					}
				]
			},
			{
				"id": 11,
				"eventId": 1,
				"fromRank": 201,
				"toRank": 300,
				"eventRankingRewards": [
					{
						"id": 11,
						"eventRankingRewardRangeId": 11,
						"resourceBoxId": 11
					}
				]
			},
			{
				"id": 12,
				"eventId": 1,
				"fromRank": 301,
				"toRank": 400,
				"eventRankingRewards": [
					{
						"id": 12,
						"eventRankingRewardRangeId": 12,
						"resourceBoxId": 12
					}
				]
			},
			{
				"id": 13,
				"eventId": 1,
				"fromRank": 401,
				"toRank": 500,
				"eventRankingRewards": [
					{
						"id": 13,
						"eventRankingRewardRangeId": 13,
						"resourceBoxId": 13
					}
				]
			},
			{
				"id": 14,
				"eventId": 1,
				"fromRank": 501,
				"toRank": 1000,
				"eventRankingRewards": [
					{
						"id": 14,
						"eventRankingRewardRangeId": 14,
						"resourceBoxId": 14
					}
				]
			},
			{
				"id": 15,
				"eventId": 1,
				"fromRank": 1001,
				"toRank": 2000,
				"eventRankingRewards": [
					{
						"id": 15,
						"eventRankingRewardRangeId": 15,
						"resourceBoxId": 15
					}
				]
			},
			{
				"id": 16,
				"eventId": 1,
				"fromRank": 2001,
				"toRank": 3000,
				"eventRankingRewards": [
					{
						"id": 16,
						"eventRankingRewardRangeId": 16,
						"resourceBoxId": 16
					}
				]
			},
			{
				"id": 17,
				"eventId": 1,
				"fromRank": 3001,
				"toRank": 4000,
				"eventRankingRewards": [
					{
						"id": 17,
						"eventRankingRewardRangeId": 17,
						"resourceBoxId": 17
					}
				]
			},
			{
				"id": 18,
				"eventId": 1,
				"fromRank": 4001,
				"toRank": 5000,
				"eventRankingRewards": [
					{
						"id": 18,
						"eventRankingRewardRangeId": 18,
						"resourceBoxId": 18
					}
				]
			},
			{
				"id": 19,
				"eventId": 1,
				"fromRank": 5001,
				"toRank": 10000,
				"eventRankingRewards": [
					{
						"id": 19,
						"eventRankingRewardRangeId": 19,
						"resourceBoxId": 19
					}
				]
			},
			{
				"id": 20,
				"eventId": 1,
				"fromRank": 10001,
				"toRank": 20000,
				"eventRankingRewards": [
					{
						"id": 20,
						"eventRankingRewardRangeId": 20,
						"resourceBoxId": 20
					}
				]
			},
			{
				"id": 21,
				"eventId": 1,
				"fromRank": 20001,
				"toRank": 30000,
				"eventRankingRewards": [
					{
						"id": 21,
						"eventRankingRewardRangeId": 21,
						"resourceBoxId": 21
					}
				]
			},
			{
				"id": 22,
				"eventId": 1,
				"fromRank": 30001,
				"toRank": 40000,
				"eventRankingRewards": [
					{
						"id": 22,
						"eventRankingRewardRangeId": 22,
						"resourceBoxId": 22
					}
				]
			},
			{
				"id": 23,
				"eventId": 1,
				"fromRank": 40001,
				"toRank": 50000,
				"eventRankingRewards": [
					{
						"id": 23,
						"eventRankingRewardRangeId": 23,
						"resourceBoxId": 23
					}
				]
			},
			{
				"id": 24,
				"eventId": 1,
				"fromRank": 50001,
				"toRank": 100000,
				"eventRankingRewards": [
					{
						"id": 24,
						"eventRankingRewardRangeId": 24,
						"resourceBoxId": 24
					}
				]
			},
			{
				"id": 25,
				"eventId": 1,
				"fromRank": 100001,
				"toRank": 200000,
				"eventRankingRewards": [
					{
						"id": 25,
						"eventRankingRewardRangeId": 25,
						"resourceBoxId": 25
					}
				]
			},
			{
				"id": 26,
				"eventId": 1,
				"fromRank": 200001,
				"toRank": 300000,
				"eventRankingRewards": [
					{
						"id": 26,
						"eventRankingRewardRangeId": 26,
						"resourceBoxId": 26
					}
				]
			},
			{
				"id": 27,
				"eventId": 1,
				"fromRank": 300001,
				"toRank": 500000,
				"eventRankingRewards": [
					{
						"id": 27,
						"eventRankingRewardRangeId": 27,
						"resourceBoxId": 27
					}
				]
			},
			{
				"id": 28,
				"eventId": 1,
				"fromRank": 500001,
				"toRank": 1000000,
				"eventRankingRewards": [
					{
						"id": 28,
						"eventRankingRewardRangeId": 28,
						"resourceBoxId": 28
					}
				]
			}
		],
		"logoImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/event/event_stella_2020/logo_rip/logo.webp",
		"bannerImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/home/banner/event_stella_2020_rip/event_stella_2020.webp",
		"bgImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/event/event_stella_2020/screen_rip/bg.webp",
		"characterImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/event/event_stella_2020/screen_rip/character.webp"
	},
	{
		"id": 2,
		"eventType": "marathon",
		"name": "囚われのマリオネット",
		"assetbundleName": "event_jackpod_2020",
		"bgmAssetbundleName": "event/event_jackpod_2020/bgm/event_jackpod_2020_top",
		"startAt": 1603173600000,
		"aggregateAt": 1603972799000,
		"rankingAnnounceAt": 1603973399000,
		"distributionStartAt": 1604023199000,
		"closedAt": 1604123999000,
		"distributionEndAt": 1605279599000,
		"virtualLiveId": 10,
		"unit": "none",
		"eventRankingRewardRanges": [
			{
				"id": 29,
				"eventId": 2,
				"fromRank": 1,
				"toRank": 1,
				"eventRankingRewards": [
					{
						"id": 29,
						"eventRankingRewardRangeId": 29,
						"resourceBoxId": 29
					}
				]
			},
			{
				"id": 30,
				"eventId": 2,
				"fromRank": 2,
				"toRank": 2,
				"eventRankingRewards": [
					{
						"id": 30,
						"eventRankingRewardRangeId": 30,
						"resourceBoxId": 30
					}
				]
			},
			{
				"id": 31,
				"eventId": 2,
				"fromRank": 3,
				"toRank": 3,
				"eventRankingRewards": [
					{
						"id": 31,
						"eventRankingRewardRangeId": 31,
						"resourceBoxId": 31
					}
				]
			},
			{
				"id": 32,
				"eventId": 2,
				"fromRank": 4,
				"toRank": 10,
				"eventRankingRewards": [
					{
						"id": 32,
						"eventRankingRewardRangeId": 32,
						"resourceBoxId": 32
					}
				]
			},
			{
				"id": 33,
				"eventId": 2,
				"fromRank": 11,
				"toRank": 20,
				"eventRankingRewards": [
					{
						"id": 33,
						"eventRankingRewardRangeId": 33,
						"resourceBoxId": 33
					}
				]
			},
			{
				"id": 34,
				"eventId": 2,
				"fromRank": 21,
				"toRank": 30,
				"eventRankingRewards": [
					{
						"id": 34,
						"eventRankingRewardRangeId": 34,
						"resourceBoxId": 34
					}
				]
			},
			{
				"id": 35,
				"eventId": 2,
				"fromRank": 31,
				"toRank": 40,
				"eventRankingRewards": [
					{
						"id": 35,
						"eventRankingRewardRangeId": 35,
						"resourceBoxId": 35
					}
				]
			},
			{
				"id": 36,
				"eventId": 2,
				"fromRank": 41,
				"toRank": 50,
				"eventRankingRewards": [
					{
						"id": 36,
						"eventRankingRewardRangeId": 36,
						"resourceBoxId": 36
					}
				]
			},
			{
				"id": 37,
				"eventId": 2,
				"fromRank": 51,
				"toRank": 100,
				"eventRankingRewards": [
					{
						"id": 37,
						"eventRankingRewardRangeId": 37,
						"resourceBoxId": 37
					}
				]
			},
			{
				"id": 38,
				"eventId": 2,
				"fromRank": 101,
				"toRank": 200,
				"eventRankingRewards": [
					{
						"id": 38,
						"eventRankingRewardRangeId": 38,
						"resourceBoxId": 38
					}
				]
			},
			{
				"id": 39,
				"eventId": 2,
				"fromRank": 201,
				"toRank": 300,
				"eventRankingRewards": [
					{
						"id": 39,
						"eventRankingRewardRangeId": 39,
						"resourceBoxId": 39
					}
				]
			},
			{
				"id": 40,
				"eventId": 2,
				"fromRank": 301,
				"toRank": 400,
				"eventRankingRewards": [
					{
						"id": 40,
						"eventRankingRewardRangeId": 40,
						"resourceBoxId": 40
					}
				]
			},
			{
				"id": 41,
				"eventId": 2,
				"fromRank": 401,
				"toRank": 500,
				"eventRankingRewards": [
					{
						"id": 41,
						"eventRankingRewardRangeId": 41,
						"resourceBoxId": 41
					}
				]
			},
			{
				"id": 42,
				"eventId": 2,
				"fromRank": 501,
				"toRank": 1000,
				"eventRankingRewards": [
					{
						"id": 42,
						"eventRankingRewardRangeId": 42,
						"resourceBoxId": 42
					}
				]
			},
			{
				"id": 43,
				"eventId": 2,
				"fromRank": 1001,
				"toRank": 2000,
				"eventRankingRewards": [
					{
						"id": 43,
						"eventRankingRewardRangeId": 43,
						"resourceBoxId": 43
					}
				]
			},
			{
				"id": 44,
				"eventId": 2,
				"fromRank": 2001,
				"toRank": 3000,
				"eventRankingRewards": [
					{
						"id": 44,
						"eventRankingRewardRangeId": 44,
						"resourceBoxId": 44
					}
				]
			},
			{
				"id": 45,
				"eventId": 2,
				"fromRank": 3001,
				"toRank": 4000,
				"eventRankingRewards": [
					{
						"id": 45,
						"eventRankingRewardRangeId": 45,
						"resourceBoxId": 45
					}
				]
			},
			{
				"id": 46,
				"eventId": 2,
				"fromRank": 4001,
				"toRank": 5000,
				"eventRankingRewards": [
					{
						"id": 46,
						"eventRankingRewardRangeId": 46,
						"resourceBoxId": 46
					}
				]
			},
			{
				"id": 47,
				"eventId": 2,
				"fromRank": 5001,
				"toRank": 10000,
				"eventRankingRewards": [
					{
						"id": 47,
						"eventRankingRewardRangeId": 47,
						"resourceBoxId": 47
					}
				]
			},
			{
				"id": 48,
				"eventId": 2,
				"fromRank": 10001,
				"toRank": 20000,
				"eventRankingRewards": [
					{
						"id": 48,
						"eventRankingRewardRangeId": 48,
						"resourceBoxId": 48
					}
				]
			},
			{
				"id": 49,
				"eventId": 2,
				"fromRank": 20001,
				"toRank": 30000,
				"eventRankingRewards": [
					{
						"id": 49,
						"eventRankingRewardRangeId": 49,
						"resourceBoxId": 49
					}
				]
			},
			{
				"id": 50,
				"eventId": 2,
				"fromRank": 30001,
				"toRank": 40000,
				"eventRankingRewards": [
					{
						"id": 50,
						"eventRankingRewardRangeId": 50,
						"resourceBoxId": 50
					}
				]
			},
			{
				"id": 51,
				"eventId": 2,
				"fromRank": 40001,
				"toRank": 50000,
				"eventRankingRewards": [
					{
						"id": 51,
						"eventRankingRewardRangeId": 51,
						"resourceBoxId": 51
					}
				]
			},
			{
				"id": 52,
				"eventId": 2,
				"fromRank": 50001,
				"toRank": 100000,
				"eventRankingRewards": [
					{
						"id": 52,
						"eventRankingRewardRangeId": 52,
						"resourceBoxId": 52
					}
				]
			},
			{
				"id": 53,
				"eventId": 2,
				"fromRank": 100001,
				"toRank": 200000,
				"eventRankingRewards": [
					{
						"id": 53,
						"eventRankingRewardRangeId": 53,
						"resourceBoxId": 53
					}
				]
			},
			{
				"id": 54,
				"eventId": 2,
				"fromRank": 200001,
				"toRank": 300000,
				"eventRankingRewards": [
					{
						"id": 54,
						"eventRankingRewardRangeId": 54,
						"resourceBoxId": 54
					}
				]
			},
			{
				"id": 55,
				"eventId": 2,
				"fromRank": 300001,
				"toRank": 500000,
				"eventRankingRewards": [
					{
						"id": 55,
						"eventRankingRewardRangeId": 55,
						"resourceBoxId": 55
					}
				]
			},
			{
				"id": 56,
				"eventId": 2,
				"fromRank": 500001,
				"toRank": 1000000,
				"eventRankingRewards": [
					{
						"id": 56,
						"eventRankingRewardRangeId": 56,
						"resourceBoxId": 56
					}
				]
			}
		],
		"logoImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/event/event_jackpod_2020/logo_rip/logo.webp",
		"bannerImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/home/banner/event_jackpod_2020_rip/event_jackpod_2020.webp",
		"bgImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/event/event_jackpod_2020/screen_rip/bg.webp",
		"characterImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/event/event_jackpod_2020/screen_rip/character.webp"
	},
	{
		"id": 3,
		"eventType": "marathon",
		"name": "全力！ワンダーハロウィン！",
		"assetbundleName": "event_potato_2020",
		"bgmAssetbundleName": "event/event_potato_2020/bgm/event_potato_2020_top",
		"startAt": 1604124000000,
		"aggregateAt": 1604750399000,
		"rankingAnnounceAt": 1604750999000,
		"distributionStartAt": 1604800799000,
		"closedAt": 1604901599000,
		"distributionEndAt": 1606057199000,
		"virtualLiveId": 13,
		"unit": "none",
		"eventRankingRewardRanges": [
			{
				"id": 57,
				"eventId": 3,
				"fromRank": 1,
				"toRank": 1,
				"eventRankingRewards": [
					{
						"id": 57,
						"eventRankingRewardRangeId": 57,
						"resourceBoxId": 57
					}
				]
			},
			{
				"id": 58,
				"eventId": 3,
				"fromRank": 2,
				"toRank": 2,
				"eventRankingRewards": [
					{
						"id": 58,
						"eventRankingRewardRangeId": 58,
						"resourceBoxId": 58
					}
				]
			},
			{
				"id": 59,
				"eventId": 3,
				"fromRank": 3,
				"toRank": 3,
				"eventRankingRewards": [
					{
						"id": 59,
						"eventRankingRewardRangeId": 59,
						"resourceBoxId": 59
					}
				]
			},
			{
				"id": 60,
				"eventId": 3,
				"fromRank": 4,
				"toRank": 10,
				"eventRankingRewards": [
					{
						"id": 60,
						"eventRankingRewardRangeId": 60,
						"resourceBoxId": 60
					}
				]
			},
			{
				"id": 61,
				"eventId": 3,
				"fromRank": 11,
				"toRank": 20,
				"eventRankingRewards": [
					{
						"id": 61,
						"eventRankingRewardRangeId": 61,
						"resourceBoxId": 61
					}
				]
			},
			{
				"id": 62,
				"eventId": 3,
				"fromRank": 21,
				"toRank": 30,
				"eventRankingRewards": [
					{
						"id": 62,
						"eventRankingRewardRangeId": 62,
						"resourceBoxId": 62
					}
				]
			},
			{
				"id": 63,
				"eventId": 3,
				"fromRank": 31,
				"toRank": 40,
				"eventRankingRewards": [
					{
						"id": 63,
						"eventRankingRewardRangeId": 63,
						"resourceBoxId": 63
					}
				]
			},
			{
				"id": 64,
				"eventId": 3,
				"fromRank": 41,
				"toRank": 50,
				"eventRankingRewards": [
					{
						"id": 64,
						"eventRankingRewardRangeId": 64,
						"resourceBoxId": 64
					}
				]
			},
			{
				"id": 65,
				"eventId": 3,
				"fromRank": 51,
				"toRank": 100,
				"eventRankingRewards": [
					{
						"id": 65,
						"eventRankingRewardRangeId": 65,
						"resourceBoxId": 65
					}
				]
			},
			{
				"id": 66,
				"eventId": 3,
				"fromRank": 101,
				"toRank": 200,
				"eventRankingRewards": [
					{
						"id": 66,
						"eventRankingRewardRangeId": 66,
						"resourceBoxId": 66
					}
				]
			},
			{
				"id": 67,
				"eventId": 3,
				"fromRank": 201,
				"toRank": 300,
				"eventRankingRewards": [
					{
						"id": 67,
						"eventRankingRewardRangeId": 67,
						"resourceBoxId": 67
					}
				]
			},
			{
				"id": 68,
				"eventId": 3,
				"fromRank": 301,
				"toRank": 400,
				"eventRankingRewards": [
					{
						"id": 68,
						"eventRankingRewardRangeId": 68,
						"resourceBoxId": 68
					}
				]
			},
			{
				"id": 69,
				"eventId": 3,
				"fromRank": 401,
				"toRank": 500,
				"eventRankingRewards": [
					{
						"id": 69,
						"eventRankingRewardRangeId": 69,
						"resourceBoxId": 69
					}
				]
			},
			{
				"id": 70,
				"eventId": 3,
				"fromRank": 501,
				"toRank": 1000,
				"eventRankingRewards": [
					{
						"id": 70,
						"eventRankingRewardRangeId": 70,
						"resourceBoxId": 70
					}
				]
			},
			{
				"id": 71,
				"eventId": 3,
				"fromRank": 1001,
				"toRank": 2000,
				"eventRankingRewards": [
					{
						"id": 71,
						"eventRankingRewardRangeId": 71,
						"resourceBoxId": 71
					}
				]
			},
			{
				"id": 72,
				"eventId": 3,
				"fromRank": 2001,
				"toRank": 3000,
				"eventRankingRewards": [
					{
						"id": 72,
						"eventRankingRewardRangeId": 72,
						"resourceBoxId": 72
					}
				]
			},
			{
				"id": 73,
				"eventId": 3,
				"fromRank": 3001,
				"toRank": 4000,
				"eventRankingRewards": [
					{
						"id": 73,
						"eventRankingRewardRangeId": 73,
						"resourceBoxId": 73
					}
				]
			},
			{
				"id": 74,
				"eventId": 3,
				"fromRank": 4001,
				"toRank": 5000,
				"eventRankingRewards": [
					{
						"id": 74,
						"eventRankingRewardRangeId": 74,
						"resourceBoxId": 74
					}
				]
			},
			{
				"id": 75,
				"eventId": 3,
				"fromRank": 5001,
				"toRank": 10000,
				"eventRankingRewards": [
					{
						"id": 75,
						"eventRankingRewardRangeId": 75,
						"resourceBoxId": 75
					}
				]
			},
			{
				"id": 76,
				"eventId": 3,
				"fromRank": 10001,
				"toRank": 20000,
				"eventRankingRewards": [
					{
						"id": 76,
						"eventRankingRewardRangeId": 76,
						"resourceBoxId": 76
					}
				]
			},
			{
				"id": 77,
				"eventId": 3,
				"fromRank": 20001,
				"toRank": 30000,
				"eventRankingRewards": [
					{
						"id": 77,
						"eventRankingRewardRangeId": 77,
						"resourceBoxId": 77
					}
				]
			},
			{
				"id": 78,
				"eventId": 3,
				"fromRank": 30001,
				"toRank": 40000,
				"eventRankingRewards": [
					{
						"id": 78,
						"eventRankingRewardRangeId": 78,
						"resourceBoxId": 78
					}
				]
			},
			{
				"id": 79,
				"eventId": 3,
				"fromRank": 40001,
				"toRank": 50000,
				"eventRankingRewards": [
					{
						"id": 79,
						"eventRankingRewardRangeId": 79,
						"resourceBoxId": 79
					}
				]
			},
			{
				"id": 80,
				"eventId": 3,
				"fromRank": 50001,
				"toRank": 100000,
				"eventRankingRewards": [
					{
						"id": 80,
						"eventRankingRewardRangeId": 80,
						"resourceBoxId": 80
					}
				]
			},
			{
				"id": 81,
				"eventId": 3,
				"fromRank": 100001,
				"toRank": 200000,
				"eventRankingRewards": [
					{
						"id": 81,
						"eventRankingRewardRangeId": 81,
						"resourceBoxId": 81
					}
				]
			},
			{
				"id": 82,
				"eventId": 3,
				"fromRank": 200001,
				"toRank": 300000,
				"eventRankingRewards": [
					{
						"id": 82,
						"eventRankingRewardRangeId": 82,
						"resourceBoxId": 82
					}
				]
			},
			{
				"id": 83,
				"eventId": 3,
				"fromRank": 300001,
				"toRank": 500000,
				"eventRankingRewards": [
					{
						"id": 83,
						"eventRankingRewardRangeId": 83,
						"resourceBoxId": 83
					}
				]
			},
			{
				"id": 84,
				"eventId": 3,
				"fromRank": 500001,
				"toRank": 1000000,
				"eventRankingRewards": [
					{
						"id": 84,
						"eventRankingRewardRangeId": 84,
						"resourceBoxId": 84
					}
				]
			}
		],
		"logoImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/event/event_potato_2020/logo_rip/logo.webp",
		"bannerImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/home/banner/event_potato_2020_rip/event_potato_2020.webp",
		"bgImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/event/event_potato_2020/screen_rip/bg.webp",
		"characterImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/event/event_potato_2020/screen_rip/character.webp"
	},
	{
		"id": 4,
		"eventType": "marathon",
		"name": "走れ！体育祭！～実行委員は大忙し～",
		"assetbundleName": "event_sportsfestival_2020",
		"bgmAssetbundleName": "event/event_sportsfestival_2020/bgm/event_sportsfestival_2020_top",
		"startAt": 1604901600000,
		"aggregateAt": 1605614399000,
		"rankingAnnounceAt": 1605614999000,
		"distributionStartAt": 1605664799000,
		"closedAt": 1605765599000,
		"distributionEndAt": 1606921199000,
		"unit": "none",
		"eventRankingRewardRanges": [
			{
				"id": 85,
				"eventId": 4,
				"fromRank": 1,
				"toRank": 1,
				"eventRankingRewards": [
					{
						"id": 85,
						"eventRankingRewardRangeId": 85,
						"resourceBoxId": 85
					}
				]
			},
			{
				"id": 86,
				"eventId": 4,
				"fromRank": 2,
				"toRank": 2,
				"eventRankingRewards": [
					{
						"id": 86,
						"eventRankingRewardRangeId": 86,
						"resourceBoxId": 86
					}
				]
			},
			{
				"id": 87,
				"eventId": 4,
				"fromRank": 3,
				"toRank": 3,
				"eventRankingRewards": [
					{
						"id": 87,
						"eventRankingRewardRangeId": 87,
						"resourceBoxId": 87
					}
				]
			},
			{
				"id": 88,
				"eventId": 4,
				"fromRank": 4,
				"toRank": 10,
				"eventRankingRewards": [
					{
						"id": 88,
						"eventRankingRewardRangeId": 88,
						"resourceBoxId": 88
					}
				]
			},
			{
				"id": 89,
				"eventId": 4,
				"fromRank": 11,
				"toRank": 20,
				"eventRankingRewards": [
					{
						"id": 89,
						"eventRankingRewardRangeId": 89,
						"resourceBoxId": 89
					}
				]
			},
			{
				"id": 90,
				"eventId": 4,
				"fromRank": 21,
				"toRank": 30,
				"eventRankingRewards": [
					{
						"id": 90,
						"eventRankingRewardRangeId": 90,
						"resourceBoxId": 90
					}
				]
			},
			{
				"id": 91,
				"eventId": 4,
				"fromRank": 31,
				"toRank": 40,
				"eventRankingRewards": [
					{
						"id": 91,
						"eventRankingRewardRangeId": 91,
						"resourceBoxId": 91
					}
				]
			},
			{
				"id": 92,
				"eventId": 4,
				"fromRank": 41,
				"toRank": 50,
				"eventRankingRewards": [
					{
						"id": 92,
						"eventRankingRewardRangeId": 92,
						"resourceBoxId": 92
					}
				]
			},
			{
				"id": 93,
				"eventId": 4,
				"fromRank": 51,
				"toRank": 100,
				"eventRankingRewards": [
					{
						"id": 93,
						"eventRankingRewardRangeId": 93,
						"resourceBoxId": 93
					}
				]
			},
			{
				"id": 94,
				"eventId": 4,
				"fromRank": 101,
				"toRank": 200,
				"eventRankingRewards": [
					{
						"id": 94,
						"eventRankingRewardRangeId": 94,
						"resourceBoxId": 94
					}
				]
			},
			{
				"id": 95,
				"eventId": 4,
				"fromRank": 201,
				"toRank": 300,
				"eventRankingRewards": [
					{
						"id": 95,
						"eventRankingRewardRangeId": 95,
						"resourceBoxId": 95
					}
				]
			},
			{
				"id": 96,
				"eventId": 4,
				"fromRank": 301,
				"toRank": 400,
				"eventRankingRewards": [
					{
						"id": 96,
						"eventRankingRewardRangeId": 96,
						"resourceBoxId": 96
					}
				]
			},
			{
				"id": 97,
				"eventId": 4,
				"fromRank": 401,
				"toRank": 500,
				"eventRankingRewards": [
					{
						"id": 97,
						"eventRankingRewardRangeId": 97,
						"resourceBoxId": 97
					}
				]
			},
			{
				"id": 98,
				"eventId": 4,
				"fromRank": 501,
				"toRank": 1000,
				"eventRankingRewards": [
					{
						"id": 98,
						"eventRankingRewardRangeId": 98,
						"resourceBoxId": 98
					}
				]
			},
			{
				"id": 99,
				"eventId": 4,
				"fromRank": 1001,
				"toRank": 2000,
				"eventRankingRewards": [
					{
						"id": 99,
						"eventRankingRewardRangeId": 99,
						"resourceBoxId": 99
					}
				]
			},
			{
				"id": 100,
				"eventId": 4,
				"fromRank": 2001,
				"toRank": 3000,
				"eventRankingRewards": [
					{
						"id": 100,
						"eventRankingRewardRangeId": 100,
						"resourceBoxId": 100
					}
				]
			},
			{
				"id": 101,
				"eventId": 4,
				"fromRank": 3001,
				"toRank": 4000,
				"eventRankingRewards": [
					{
						"id": 101,
						"eventRankingRewardRangeId": 101,
						"resourceBoxId": 101
					}
				]
			},
			{
				"id": 102,
				"eventId": 4,
				"fromRank": 4001,
				"toRank": 5000,
				"eventRankingRewards": [
					{
						"id": 102,
						"eventRankingRewardRangeId": 102,
						"resourceBoxId": 102
					}
				]
			},
			{
				"id": 103,
				"eventId": 4,
				"fromRank": 5001,
				"toRank": 10000,
				"eventRankingRewards": [
					{
						"id": 103,
						"eventRankingRewardRangeId": 103,
						"resourceBoxId": 103
					}
				]
			},
			{
				"id": 104,
				"eventId": 4,
				"fromRank": 10001,
				"toRank": 20000,
				"eventRankingRewards": [
					{
						"id": 104,
						"eventRankingRewardRangeId": 104,
						"resourceBoxId": 104
					}
				]
			},
			{
				"id": 105,
				"eventId": 4,
				"fromRank": 20001,
				"toRank": 30000,
				"eventRankingRewards": [
					{
						"id": 105,
						"eventRankingRewardRangeId": 105,
						"resourceBoxId": 105
					}
				]
			},
			{
				"id": 106,
				"eventId": 4,
				"fromRank": 30001,
				"toRank": 40000,
				"eventRankingRewards": [
					{
						"id": 106,
						"eventRankingRewardRangeId": 106,
						"resourceBoxId": 106
					}
				]
			},
			{
				"id": 107,
				"eventId": 4,
				"fromRank": 40001,
				"toRank": 50000,
				"eventRankingRewards": [
					{
						"id": 107,
						"eventRankingRewardRangeId": 107,
						"resourceBoxId": 107
					}
				]
			},
			{
				"id": 108,
				"eventId": 4,
				"fromRank": 50001,
				"toRank": 100000,
				"eventRankingRewards": [
					{
						"id": 108,
						"eventRankingRewardRangeId": 108,
						"resourceBoxId": 108
					}
				]
			},
			{
				"id": 109,
				"eventId": 4,
				"fromRank": 100001,
				"toRank": 200000,
				"eventRankingRewards": [
					{
						"id": 109,
						"eventRankingRewardRangeId": 109,
						"resourceBoxId": 109
					}
				]
			},
			{
				"id": 110,
				"eventId": 4,
				"fromRank": 200001,
				"toRank": 300000,
				"eventRankingRewards": [
					{
						"id": 110,
						"eventRankingRewardRangeId": 110,
						"resourceBoxId": 110
					}
				]
			},
			{
				"id": 111,
				"eventId": 4,
				"fromRank": 300001,
				"toRank": 500000,
				"eventRankingRewards": [
					{
						"id": 111,
						"eventRankingRewardRangeId": 111,
						"resourceBoxId": 111
					}
				]
			},
			{
				"id": 112,
				"eventId": 4,
				"fromRank": 500001,
				"toRank": 1000000,
				"eventRankingRewards": [
					{
						"id": 112,
						"eventRankingRewardRangeId": 112,
						"resourceBoxId": 112
					}
				]
			}
		],
		"logoImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/event/event_sportsfestival_2020/logo_rip/logo.webp",
		"bannerImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/home/banner/event_sportsfestival_2020_rip/event_sportsfestival_2020.webp",
		"bgImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/event/event_sportsfestival_2020/screen_rip/bg.webp",
		"characterImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/event/event_sportsfestival_2020/screen_rip/character.webp"
	},
	{
		"id": 5,
		"eventType": "marathon",
		"name": "ここからRE:START！",
		"assetbundleName": "event_restart_2020",
		"bgmAssetbundleName": "event/event_restart_2020/bgm/event_restart_2020_top",
		"startAt": 1605765600000,
		"aggregateAt": 1606564799000,
		"rankingAnnounceAt": 1606565399000,
		"distributionStartAt": 1606615199000,
		"closedAt": 1606715999000,
		"distributionEndAt": 1607871599000,
		"virtualLiveId": 37,
		"unit": "none",
		"eventRankingRewardRanges": [
			{
				"id": 113,
				"eventId": 5,
				"fromRank": 1,
				"toRank": 1,
				"eventRankingRewards": [
					{
						"id": 113,
						"eventRankingRewardRangeId": 113,
						"resourceBoxId": 113
					}
				]
			},
			{
				"id": 114,
				"eventId": 5,
				"fromRank": 2,
				"toRank": 2,
				"eventRankingRewards": [
					{
						"id": 114,
						"eventRankingRewardRangeId": 114,
						"resourceBoxId": 114
					}
				]
			},
			{
				"id": 115,
				"eventId": 5,
				"fromRank": 3,
				"toRank": 3,
				"eventRankingRewards": [
					{
						"id": 115,
						"eventRankingRewardRangeId": 115,
						"resourceBoxId": 115
					}
				]
			},
			{
				"id": 116,
				"eventId": 5,
				"fromRank": 4,
				"toRank": 10,
				"eventRankingRewards": [
					{
						"id": 116,
						"eventRankingRewardRangeId": 116,
						"resourceBoxId": 116
					}
				]
			},
			{
				"id": 117,
				"eventId": 5,
				"fromRank": 11,
				"toRank": 20,
				"eventRankingRewards": [
					{
						"id": 117,
						"eventRankingRewardRangeId": 117,
						"resourceBoxId": 117
					}
				]
			},
			{
				"id": 118,
				"eventId": 5,
				"fromRank": 21,
				"toRank": 30,
				"eventRankingRewards": [
					{
						"id": 118,
						"eventRankingRewardRangeId": 118,
						"resourceBoxId": 118
					}
				]
			},
			{
				"id": 119,
				"eventId": 5,
				"fromRank": 31,
				"toRank": 40,
				"eventRankingRewards": [
					{
						"id": 119,
						"eventRankingRewardRangeId": 119,
						"resourceBoxId": 119
					}
				]
			},
			{
				"id": 120,
				"eventId": 5,
				"fromRank": 41,
				"toRank": 50,
				"eventRankingRewards": [
					{
						"id": 120,
						"eventRankingRewardRangeId": 120,
						"resourceBoxId": 120
					}
				]
			},
			{
				"id": 121,
				"eventId": 5,
				"fromRank": 51,
				"toRank": 100,
				"eventRankingRewards": [
					{
						"id": 121,
						"eventRankingRewardRangeId": 121,
						"resourceBoxId": 121
					}
				]
			},
			{
				"id": 122,
				"eventId": 5,
				"fromRank": 101,
				"toRank": 200,
				"eventRankingRewards": [
					{
						"id": 122,
						"eventRankingRewardRangeId": 122,
						"resourceBoxId": 122
					}
				]
			},
			{
				"id": 123,
				"eventId": 5,
				"fromRank": 201,
				"toRank": 300,
				"eventRankingRewards": [
					{
						"id": 123,
						"eventRankingRewardRangeId": 123,
						"resourceBoxId": 123
					}
				]
			},
			{
				"id": 124,
				"eventId": 5,
				"fromRank": 301,
				"toRank": 400,
				"eventRankingRewards": [
					{
						"id": 124,
						"eventRankingRewardRangeId": 124,
						"resourceBoxId": 124
					}
				]
			},
			{
				"id": 125,
				"eventId": 5,
				"fromRank": 401,
				"toRank": 500,
				"eventRankingRewards": [
					{
						"id": 125,
						"eventRankingRewardRangeId": 125,
						"resourceBoxId": 125
					}
				]
			},
			{
				"id": 126,
				"eventId": 5,
				"fromRank": 501,
				"toRank": 1000,
				"eventRankingRewards": [
					{
						"id": 126,
						"eventRankingRewardRangeId": 126,
						"resourceBoxId": 126
					}
				]
			},
			{
				"id": 127,
				"eventId": 5,
				"fromRank": 1001,
				"toRank": 2000,
				"eventRankingRewards": [
					{
						"id": 127,
						"eventRankingRewardRangeId": 127,
						"resourceBoxId": 127
					}
				]
			},
			{
				"id": 128,
				"eventId": 5,
				"fromRank": 2001,
				"toRank": 3000,
				"eventRankingRewards": [
					{
						"id": 128,
						"eventRankingRewardRangeId": 128,
						"resourceBoxId": 128
					}
				]
			},
			{
				"id": 129,
				"eventId": 5,
				"fromRank": 3001,
				"toRank": 4000,
				"eventRankingRewards": [
					{
						"id": 129,
						"eventRankingRewardRangeId": 129,
						"resourceBoxId": 129
					}
				]
			},
			{
				"id": 130,
				"eventId": 5,
				"fromRank": 4001,
				"toRank": 5000,
				"eventRankingRewards": [
					{
						"id": 130,
						"eventRankingRewardRangeId": 130,
						"resourceBoxId": 130
					}
				]
			},
			{
				"id": 131,
				"eventId": 5,
				"fromRank": 5001,
				"toRank": 10000,
				"eventRankingRewards": [
					{
						"id": 131,
						"eventRankingRewardRangeId": 131,
						"resourceBoxId": 131
					}
				]
			},
			{
				"id": 132,
				"eventId": 5,
				"fromRank": 10001,
				"toRank": 20000,
				"eventRankingRewards": [
					{
						"id": 132,
						"eventRankingRewardRangeId": 132,
						"resourceBoxId": 132
					}
				]
			},
			{
				"id": 133,
				"eventId": 5,
				"fromRank": 20001,
				"toRank": 30000,
				"eventRankingRewards": [
					{
						"id": 133,
						"eventRankingRewardRangeId": 133,
						"resourceBoxId": 133
					}
				]
			},
			{
				"id": 134,
				"eventId": 5,
				"fromRank": 30001,
				"toRank": 40000,
				"eventRankingRewards": [
					{
						"id": 134,
						"eventRankingRewardRangeId": 134,
						"resourceBoxId": 134
					}
				]
			},
			{
				"id": 135,
				"eventId": 5,
				"fromRank": 40001,
				"toRank": 50000,
				"eventRankingRewards": [
					{
						"id": 135,
						"eventRankingRewardRangeId": 135,
						"resourceBoxId": 135
					}
				]
			},
			{
				"id": 136,
				"eventId": 5,
				"fromRank": 50001,
				"toRank": 100000,
				"eventRankingRewards": [
					{
						"id": 136,
						"eventRankingRewardRangeId": 136,
						"resourceBoxId": 136
					}
				]
			},
			{
				"id": 137,
				"eventId": 5,
				"fromRank": 100001,
				"toRank": 200000,
				"eventRankingRewards": [
					{
						"id": 137,
						"eventRankingRewardRangeId": 137,
						"resourceBoxId": 137
					}
				]
			},
			{
				"id": 138,
				"eventId": 5,
				"fromRank": 200001,
				"toRank": 300000,
				"eventRankingRewards": [
					{
						"id": 138,
						"eventRankingRewardRangeId": 138,
						"resourceBoxId": 138
					}
				]
			},
			{
				"id": 139,
				"eventId": 5,
				"fromRank": 300001,
				"toRank": 500000,
				"eventRankingRewards": [
					{
						"id": 139,
						"eventRankingRewardRangeId": 139,
						"resourceBoxId": 139
					}
				]
			},
			{
				"id": 140,
				"eventId": 5,
				"fromRank": 500001,
				"toRank": 1000000,
				"eventRankingRewards": [
					{
						"id": 140,
						"eventRankingRewardRangeId": 140,
						"resourceBoxId": 140
					}
				]
			}
		],
		"logoImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/event/event_restart_2020/logo_rip/logo.webp",
		"bannerImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/home/banner/event_restart_2020_rip/event_restart_2020.webp",
		"bgImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/event/event_restart_2020/screen_rip/bg.webp",
		"characterImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/event/event_restart_2020/screen_rip/character.webp"
	}
]
  ```
  </details>
  
  ---
    
  ### stamp
**Endpoint**: [https://script.google.com/macros/s/AKfycbwMoQMBFsZC8u2j8X1yiPBs3E1PYXrh0Yi9_qsk4Tk80WrOeIaoQq6TDlmUe_pT0QHUqg/exec?authToken=HoshinoIchika&data=stamp](https://script.google.com/macros/s/AKfycbwMoQMBFsZC8u2j8X1yiPBs3E1PYXrh0Yi9_qsk4Tk80WrOeIaoQq6TDlmUe_pT0QHUqg/exec?authToken=HoshinoIchika&data=stamp)

<details>
  <summary><b>Response</b></summary>
  
  ```json
  [
	{
		"id": 1,
		"stampType": "illustration",
		"seq": 10,
		"name": "[スタンプ]ミク：よろしく",
		"assetbundleName": "stamp0001",
		"balloonAssetbundleName": "balloon_stamp_01",
		"characterId1": 21,
		"gameCharacterUnitId": 21,
		"stampImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/stamp/stamp0001_rip/stamp0001/stamp0001.png"
	},
	{
		"id": 2,
		"stampType": "illustration",
		"seq": 20,
		"name": "[スタンプ]リン：がんばろー！",
		"assetbundleName": "stamp0002",
		"balloonAssetbundleName": "balloon_stamp_01",
		"characterId1": 22,
		"gameCharacterUnitId": 22,
		"stampImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/stamp/stamp0002_rip/stamp0002/stamp0002.png"
	},
	{
		"id": 3,
		"stampType": "illustration",
		"seq": 100,
		"name": "[スタンプ]司：もちろんフルコンだな！",
		"assetbundleName": "stamp0003",
		"balloonAssetbundleName": "balloon_stamp_01",
		"characterId1": 13,
		"gameCharacterUnitId": 13,
		"stampImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/stamp/stamp0003_rip/stamp0003/stamp0003.png"
	},
	{
		"id": 4,
		"stampType": "illustration",
		"seq": 40,
		"name": "[スタンプ]ルカ：うれしいわ",
		"assetbundleName": "stamp0004",
		"balloonAssetbundleName": "balloon_stamp_01",
		"characterId1": 24,
		"gameCharacterUnitId": 24,
		"stampImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/stamp/stamp0004_rip/stamp0004/stamp0004.png"
	},
	{
		"id": 5,
		"stampType": "illustration",
		"seq": 60,
		"name": "[スタンプ]KAITO：うぅ...",
		"assetbundleName": "stamp0005",
		"balloonAssetbundleName": "balloon_stamp_01",
		"characterId1": 26,
		"gameCharacterUnitId": 26,
		"stampImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/stamp/stamp0005_rip/stamp0005/stamp0005.png"
	}
]
  ```
  </details>
  
  ---
    
  ### music
**Endpoint**: [https://script.google.com/macros/s/AKfycbwMoQMBFsZC8u2j8X1yiPBs3E1PYXrh0Yi9_qsk4Tk80WrOeIaoQq6TDlmUe_pT0QHUqg/exec?authToken=HoshinoIchika&data=music](https://script.google.com/macros/s/AKfycbwMoQMBFsZC8u2j8X1yiPBs3E1PYXrh0Yi9_qsk4Tk80WrOeIaoQq6TDlmUe_pT0QHUqg/exec?authToken=HoshinoIchika&data=music)

<details>
  <summary><b>Response</b></summary>
  
  ```json
  [
	{
		"id": 1,
		"seq": 1100101,
		"releaseConditionId": 1,
		"categories": [
			"mv"
		],
		"title": "Tell Your World",
		"lyricist": "kz",
		"composer": "kz",
		"arranger": "kz",
		"dancerCount": 1,
		"selfDancerPosition": 0,
		"assetbundleName": "jacket_s_001",
		"liveTalkBackgroundAssetbundleName": "bg_livetalk_default_002",
		"publishedAt": 1560148031000,
		"liveStageId": 1,
		"fillerSec": 9,
		"jacketImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/jacket/jacket_s_001_rip/jacket_s_001.webp",
		"difficulties": [
			{
				"id": 1,
				"musicId": 1,
				"musicDifficulty": "easy",
				"playLevel": 5,
				"releaseConditionId": 1,
				"noteCount": 220,
				"chart": "https://minio.dnaroma.eu/sekai-assets/music/charts/0001/easy.svg"
			},
			{
				"id": 2,
				"musicId": 1,
				"musicDifficulty": "normal",
				"playLevel": 10,
				"releaseConditionId": 1,
				"noteCount": 492,
				"chart": "https://minio.dnaroma.eu/sekai-assets/music/charts/0001/normal.svg"
			},
			{
				"id": 3,
				"musicId": 1,
				"musicDifficulty": "hard",
				"playLevel": 16,
				"releaseConditionId": 1,
				"noteCount": 719,
				"chart": "https://minio.dnaroma.eu/sekai-assets/music/charts/0001/hard.svg"
			},
			{
				"id": 4,
				"musicId": 1,
				"musicDifficulty": "expert",
				"playLevel": 22,
				"releaseConditionId": 1,
				"noteCount": 961,
				"chart": "https://minio.dnaroma.eu/sekai-assets/music/charts/0001/expert.svg"
			},
			{
				"id": 5,
				"musicId": 1,
				"musicDifficulty": "master",
				"playLevel": 26,
				"releaseConditionId": 40001,
				"noteCount": 1147,
				"chart": "https://minio.dnaroma.eu/sekai-assets/music/charts/0001/master.svg"
			}
		],
		"vocal": [
			{
				"id": 1,
				"musicId": 1,
				"musicVocalType": "original_song",
				"seq": 1,
				"releaseConditionId": 5,
				"caption": "バーチャル・シンガーver.",
				"characters": [
					{
						"id": 1,
						"musicId": 1,
						"musicVocalId": 1,
						"characterType": "game_character",
						"characterId": 21,
						"seq": 10
					}
				],
				"assetbundleName": "0001_01",
				"mp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/0001_01_rip/0001_01.mp3",
				"flac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/0001_01_rip/0001_01.flac",
				"shortMp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/0001_01_rip/0001_01_short.mp3",
				"shortFlac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/0001_01_rip/0001_01_short.flac"
			}
		]
	},
	{
		"id": 2,
		"seq": 1200101,
		"releaseConditionId": 1,
		"categories": [
			"mv"
		],
		"title": "ロキ",
		"lyricist": "みきとP",
		"composer": "みきとP",
		"arranger": "みきとP",
		"dancerCount": 5,
		"selfDancerPosition": 0,
		"assetbundleName": "jacket_s_002",
		"liveTalkBackgroundAssetbundleName": "bg_livetalk_default_002",
		"publishedAt": 1560148031000,
		"liveStageId": 1,
		"fillerSec": 8.98900032043457,
		"jacketImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/jacket/jacket_s_002_rip/jacket_s_002.webp",
		"difficulties": [
			{
				"id": 6,
				"musicId": 2,
				"musicDifficulty": "easy",
				"playLevel": 7,
				"releaseConditionId": 1,
				"noteCount": 166,
				"chart": "https://minio.dnaroma.eu/sekai-assets/music/charts/0002/easy.svg"
			},
			{
				"id": 7,
				"musicId": 2,
				"musicDifficulty": "normal",
				"playLevel": 11,
				"releaseConditionId": 1,
				"noteCount": 296,
				"chart": "https://minio.dnaroma.eu/sekai-assets/music/charts/0002/normal.svg"
			},
			{
				"id": 8,
				"musicId": 2,
				"musicDifficulty": "hard",
				"playLevel": 17,
				"releaseConditionId": 1,
				"noteCount": 635,
				"chart": "https://minio.dnaroma.eu/sekai-assets/music/charts/0002/hard.svg"
			},
			{
				"id": 9,
				"musicId": 2,
				"musicDifficulty": "expert",
				"playLevel": 24,
				"releaseConditionId": 1,
				"noteCount": 827,
				"chart": "https://minio.dnaroma.eu/sekai-assets/music/charts/0002/expert.svg"
			},
			{
				"id": 10,
				"musicId": 2,
				"musicDifficulty": "master",
				"playLevel": 28,
				"releaseConditionId": 40002,
				"noteCount": 975,
				"chart": "https://minio.dnaroma.eu/sekai-assets/music/charts/0002/master.svg"
			}
		],
		"vocal": [
			{
				"id": 2,
				"musicId": 2,
				"musicVocalType": "original_song",
				"seq": 1,
				"releaseConditionId": 5,
				"caption": "バーチャル・シンガーver.",
				"characters": [
					{
						"id": 2,
						"musicId": 2,
						"musicVocalId": 2,
						"characterType": "game_character",
						"characterId": 22,
						"seq": 20
					}
				],
				"assetbundleName": "0002_01",
				"mp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/0002_01_rip/0002_01.mp3",
				"flac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/0002_01_rip/0002_01.flac",
				"shortMp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/0002_01_rip/0002_01_short.mp3",
				"shortFlac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/0002_01_rip/0002_01_short.flac"
			},
			{
				"id": 3,
				"musicId": 2,
				"musicVocalType": "sekai",
				"seq": 2,
				"releaseConditionId": 5,
				"caption": "セカイver.",
				"characters": [
					{
						"id": 3,
						"musicId": 2,
						"musicVocalId": 3,
						"characterType": "game_character",
						"characterId": 21,
						"seq": 21
					},
					{
						"id": 4,
						"musicId": 2,
						"musicVocalId": 3,
						"characterType": "game_character",
						"characterId": 1,
						"seq": 22
					}
				],
				"assetbundleName": "0002_02",
				"mp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/0002_02_rip/0002_02.mp3",
				"flac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/0002_02_rip/0002_02.flac",
				"shortMp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/0002_02_rip/0002_02_short.mp3",
				"shortFlac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/0002_02_rip/0002_02_short.flac"
			},
			{
				"id": 465,
				"musicId": 2,
				"musicVocalType": "another_vocal",
				"seq": 3,
				"releaseConditionId": 9,
				"caption": "アナザーボーカルver.",
				"characters": [
					{
						"id": 864,
						"musicId": 2,
						"musicVocalId": 465,
						"characterType": "game_character",
						"characterId": 23,
						"seq": 25
					},
					{
						"id": 865,
						"musicId": 2,
						"musicVocalId": 465,
						"characterType": "game_character",
						"characterId": 26,
						"seq": 26
					}
				],
				"assetbundleName": "an_0002_01",
				"mp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/an_0002_01_rip/an_0002_01.mp3",
				"flac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/an_0002_01_rip/an_0002_01.flac",
				"shortMp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/an_0002_01_rip/an_0002_01_short.mp3",
				"shortFlac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/an_0002_01_rip/an_0002_01_short.flac"
			}
		]
	},
	{
		"id": 3,
		"seq": 1200102,
		"releaseConditionId": 5,
		"categories": [
			"mv"
		],
		"title": "テオ",
		"lyricist": "Sakurai",
		"composer": "Omoi",
		"arranger": "Omoi",
		"dancerCount": 5,
		"selfDancerPosition": 0,
		"assetbundleName": "jacket_s_003",
		"liveTalkBackgroundAssetbundleName": "bg_livetalk_default_002",
		"publishedAt": 1560148031000,
		"liveStageId": 1,
		"fillerSec": 9,
		"jacketImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/jacket/jacket_s_003_rip/jacket_s_003.webp",
		"difficulties": [
			{
				"id": 11,
				"musicId": 3,
				"musicDifficulty": "easy",
				"playLevel": 9,
				"releaseConditionId": 1,
				"noteCount": 135,
				"chart": "https://minio.dnaroma.eu/sekai-assets/music/charts/0003/easy.svg"
			},
			{
				"id": 12,
				"musicId": 3,
				"musicDifficulty": "normal",
				"playLevel": 14,
				"releaseConditionId": 1,
				"noteCount": 477,
				"chart": "https://minio.dnaroma.eu/sekai-assets/music/charts/0003/normal.svg"
			},
			{
				"id": 13,
				"musicId": 3,
				"musicDifficulty": "hard",
				"playLevel": 19,
				"releaseConditionId": 1,
				"noteCount": 681,
				"chart": "https://minio.dnaroma.eu/sekai-assets/music/charts/0003/hard.svg"
			},
			{
				"id": 14,
				"musicId": 3,
				"musicDifficulty": "expert",
				"playLevel": 27,
				"releaseConditionId": 1,
				"noteCount": 997,
				"chart": "https://minio.dnaroma.eu/sekai-assets/music/charts/0003/expert.svg"
			},
			{
				"id": 15,
				"musicId": 3,
				"musicDifficulty": "master",
				"playLevel": 31,
				"releaseConditionId": 40003,
				"noteCount": 1221,
				"chart": "https://minio.dnaroma.eu/sekai-assets/music/charts/0003/master.svg"
			}
		],
		"vocal": [
			{
				"id": 5,
				"musicId": 3,
				"musicVocalType": "original_song",
				"seq": 1,
				"releaseConditionId": 5,
				"caption": "バーチャル・シンガーver.",
				"characters": [
					{
						"id": 7,
						"musicId": 3,
						"musicVocalId": 5,
						"characterType": "game_character",
						"characterId": 21,
						"seq": 30
					}
				],
				"assetbundleName": "0003_01",
				"mp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/0003_01_rip/0003_01.mp3",
				"flac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/0003_01_rip/0003_01.flac",
				"shortMp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/0003_01_rip/0003_01_short.mp3",
				"shortFlac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/0003_01_rip/0003_01_short.flac"
			},
			{
				"id": 6,
				"musicId": 3,
				"musicVocalType": "sekai",
				"seq": 2,
				"releaseConditionId": 5,
				"caption": "セカイver.",
				"characters": [
					{
						"id": 8,
						"musicId": 3,
						"musicVocalId": 6,
						"characterType": "game_character",
						"characterId": 1,
						"seq": 31
					},
					{
						"id": 9,
						"musicId": 3,
						"musicVocalId": 6,
						"characterType": "game_character",
						"characterId": 21,
						"seq": 32
					}
				],
				"assetbundleName": "0003_02",
				"mp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/0003_02_rip/0003_02.mp3",
				"flac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/0003_02_rip/0003_02.flac",
				"shortMp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/0003_02_rip/0003_02_short.mp3",
				"shortFlac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/0003_02_rip/0003_02_short.flac"
			},
			{
				"id": 113,
				"musicId": 3,
				"musicVocalType": "another_vocal",
				"seq": 3,
				"releaseConditionId": 9,
				"caption": "アナザーボーカルver.",
				"characters": [
					{
						"id": 236,
						"musicId": 3,
						"musicVocalId": 113,
						"characterType": "game_character",
						"characterId": 1,
						"seq": 33
					}
				],
				"assetbundleName": "an_0003_01",
				"mp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/an_0003_01_rip/an_0003_01.mp3",
				"flac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/an_0003_01_rip/an_0003_01.flac",
				"shortMp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/an_0003_01_rip/an_0003_01_short.mp3",
				"shortFlac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/an_0003_01_rip/an_0003_01_short.flac"
			},
			{
				"id": 391,
				"musicId": 3,
				"musicVocalType": "another_vocal",
				"seq": 4,
				"releaseConditionId": 9,
				"caption": "アナザーボーカルver.",
				"characters": [
					{
						"id": 731,
						"musicId": 3,
						"musicVocalId": 391,
						"characterType": "game_character",
						"characterId": 2,
						"seq": 34
					}
				],
				"assetbundleName": "an_0003_02",
				"mp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/an_0003_02_rip/an_0003_02.mp3",
				"flac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/an_0003_02_rip/an_0003_02.flac",
				"shortMp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/an_0003_02_rip/an_0003_02_short.mp3",
				"shortFlac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/an_0003_02_rip/an_0003_02_short.flac"
			},
			{
				"id": 486,
				"musicId": 3,
				"musicVocalType": "another_vocal",
				"seq": 5,
				"releaseConditionId": 9,
				"caption": "アナザーボーカルver.",
				"characters": [
					{
						"id": 908,
						"musicId": 3,
						"musicVocalId": 486,
						"characterType": "game_character",
						"characterId": 21,
						"seq": 36
					},
					{
						"id": 909,
						"musicId": 3,
						"musicVocalId": 486,
						"characterType": "game_character",
						"characterId": 24,
						"seq": 36
					}
				],
				"assetbundleName": "an_0003_03",
				"mp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/an_0003_03_rip/an_0003_03.mp3",
				"flac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/an_0003_03_rip/an_0003_03.flac",
				"shortMp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/an_0003_03_rip/an_0003_03_short.mp3",
				"shortFlac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/an_0003_03_rip/an_0003_03_short.flac"
			}
		]
	},
	{
		"id": 6,
		"seq": 1200103,
		"releaseConditionId": 5,
		"categories": [
			"mv_2d"
		],
		"title": "ヒバナ -Reloaded-",
		"lyricist": "DECO*27",
		"composer": "DECO*27",
		"arranger": "Rockwell",
		"dancerCount": 3,
		"selfDancerPosition": 0,
		"assetbundleName": "jacket_s_006",
		"liveTalkBackgroundAssetbundleName": "bg_livetalk_default_002",
		"publishedAt": 1560148031000,
		"liveStageId": 1,
		"fillerSec": 9,
		"jacketImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/jacket/jacket_s_006_rip/jacket_s_006.webp",
		"difficulties": [
			{
				"id": 26,
				"musicId": 6,
				"musicDifficulty": "easy",
				"playLevel": 9,
				"releaseConditionId": 1,
				"noteCount": 198,
				"chart": "https://minio.dnaroma.eu/sekai-assets/music/charts/0006/easy.svg"
			},
			{
				"id": 27,
				"musicId": 6,
				"musicDifficulty": "normal",
				"playLevel": 14,
				"releaseConditionId": 1,
				"noteCount": 394,
				"chart": "https://minio.dnaroma.eu/sekai-assets/music/charts/0006/normal.svg"
			},
			{
				"id": 28,
				"musicId": 6,
				"musicDifficulty": "hard",
				"playLevel": 19,
				"releaseConditionId": 1,
				"noteCount": 568,
				"chart": "https://minio.dnaroma.eu/sekai-assets/music/charts/0006/hard.svg"
			},
			{
				"id": 29,
				"musicId": 6,
				"musicDifficulty": "expert",
				"playLevel": 28,
				"releaseConditionId": 1,
				"noteCount": 808,
				"chart": "https://minio.dnaroma.eu/sekai-assets/music/charts/0006/expert.svg"
			},
			{
				"id": 30,
				"musicId": 6,
				"musicDifficulty": "master",
				"playLevel": 32,
				"releaseConditionId": 40006,
				"noteCount": 1060,
				"chart": "https://minio.dnaroma.eu/sekai-assets/music/charts/0006/master.svg"
			}
		],
		"vocal": [
			{
				"id": 7,
				"musicId": 6,
				"musicVocalType": "original_song",
				"seq": 1,
				"releaseConditionId": 5,
				"caption": "バーチャル・シンガーver.",
				"characters": [
					{
						"id": 10,
						"musicId": 6,
						"musicVocalId": 7,
						"characterType": "game_character",
						"characterId": 21,
						"seq": 60
					}
				],
				"assetbundleName": "0006_01",
				"mp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/0006_01_rip/0006_01.mp3",
				"flac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/0006_01_rip/0006_01.flac",
				"shortMp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/0006_01_rip/0006_01_short.mp3",
				"shortFlac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/0006_01_rip/0006_01_short.flac"
			},
			{
				"id": 8,
				"musicId": 6,
				"musicVocalType": "sekai",
				"seq": 2,
				"releaseConditionId": 5,
				"caption": "セカイver.",
				"characters": [
					{
						"id": 11,
						"musicId": 6,
						"musicVocalId": 8,
						"characterType": "game_character",
						"characterId": 21,
						"seq": 61
					},
					{
						"id": 12,
						"musicId": 6,
						"musicVocalId": 8,
						"characterType": "game_character",
						"characterId": 1,
						"seq": 62
					}
				],
				"assetbundleName": "0006_02",
				"mp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/0006_02_rip/0006_02.mp3",
				"flac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/0006_02_rip/0006_02.flac",
				"shortMp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/0006_02_rip/0006_02_short.mp3",
				"shortFlac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/0006_02_rip/0006_02_short.flac"
			},
			{
				"id": 80,
				"musicId": 6,
				"musicVocalType": "another_vocal",
				"seq": 3,
				"releaseConditionId": 9,
				"caption": "アナザーボーカルver.",
				"characters": [
					{
						"id": 175,
						"musicId": 6,
						"musicVocalId": 80,
						"characterType": "game_character",
						"characterId": 1,
						"seq": 63
					}
				],
				"assetbundleName": "an_0006_01",
				"mp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/an_0006_01_rip/an_0006_01.mp3",
				"flac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/an_0006_01_rip/an_0006_01.flac",
				"shortMp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/an_0006_01_rip/an_0006_01_short.mp3",
				"shortFlac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/an_0006_01_rip/an_0006_01_short.flac"
			},
			{
				"id": 114,
				"musicId": 6,
				"musicVocalType": "another_vocal",
				"seq": 2,
				"releaseConditionId": 9,
				"caption": "アナザーボーカルver.",
				"characters": [
					{
						"id": 237,
						"musicId": 6,
						"musicVocalId": 114,
						"characterType": "game_character",
						"characterId": 25,
						"seq": 64
					}
				],
				"assetbundleName": "an_0006_02",
				"mp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/an_0006_02_rip/an_0006_02.mp3",
				"flac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/an_0006_02_rip/an_0006_02.flac",
				"shortMp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/an_0006_02_rip/an_0006_02_short.mp3",
				"shortFlac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/an_0006_02_rip/an_0006_02_short.flac"
			}
		]
	},
	{
		"id": 8,
		"seq": 1205001,
		"releaseConditionId": 5,
		"categories": [
			"mv",
			"mv_2d"
		],
		"title": "タイムマシン",
		"lyricist": "164",
		"composer": "40mP",
		"arranger": "1640mP",
		"dancerCount": 3,
		"selfDancerPosition": 0,
		"assetbundleName": "jacket_s_008",
		"liveTalkBackgroundAssetbundleName": "bg_livetalk_default_002",
		"publishedAt": 1612936800000,
		"liveStageId": 1,
		"fillerSec": 7.571400165557861,
		"jacketImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/jacket/jacket_s_008_rip/jacket_s_008.webp",
		"difficulties": [
			{
				"id": 36,
				"musicId": 8,
				"musicDifficulty": "easy",
				"playLevel": 6,
				"releaseConditionId": 1,
				"noteCount": 193,
				"chart": "https://minio.dnaroma.eu/sekai-assets/music/charts/0008/easy.svg"
			},
			{
				"id": 37,
				"musicId": 8,
				"musicDifficulty": "normal",
				"playLevel": 11,
				"releaseConditionId": 1,
				"noteCount": 268,
				"chart": "https://minio.dnaroma.eu/sekai-assets/music/charts/0008/normal.svg"
			},
			{
				"id": 38,
				"musicId": 8,
				"musicDifficulty": "hard",
				"playLevel": 16,
				"releaseConditionId": 1,
				"noteCount": 488,
				"chart": "https://minio.dnaroma.eu/sekai-assets/music/charts/0008/hard.svg"
			},
			{
				"id": 39,
				"musicId": 8,
				"musicDifficulty": "expert",
				"playLevel": 23,
				"releaseConditionId": 1,
				"noteCount": 719,
				"chart": "https://minio.dnaroma.eu/sekai-assets/music/charts/0008/expert.svg"
			},
			{
				"id": 40,
				"musicId": 8,
				"musicDifficulty": "master",
				"playLevel": 26,
				"releaseConditionId": 40008,
				"noteCount": 903,
				"chart": "https://minio.dnaroma.eu/sekai-assets/music/charts/0008/master.svg"
			}
		],
		"vocal": [
			{
				"id": 9,
				"musicId": 8,
				"musicVocalType": "original_song",
				"seq": 1,
				"releaseConditionId": 5,
				"caption": "バーチャル・シンガーver.",
				"characters": [
					{
						"id": 13,
						"musicId": 8,
						"musicVocalId": 9,
						"characterType": "game_character",
						"characterId": 21,
						"seq": 80
					}
				],
				"assetbundleName": "0008_01",
				"mp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/0008_01_rip/0008_01.mp3",
				"flac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/0008_01_rip/0008_01.flac",
				"shortMp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/0008_01_rip/0008_01_short.mp3",
				"shortFlac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/0008_01_rip/0008_01_short.flac"
			},
			{
				"id": 10,
				"musicId": 8,
				"musicVocalType": "sekai",
				"seq": 3,
				"releaseConditionId": 5,
				"caption": "セカイver.",
				"characters": [
					{
						"id": 14,
						"musicId": 8,
						"musicVocalId": 10,
						"characterType": "game_character",
						"characterId": 21,
						"seq": 81
					},
					{
						"id": 15,
						"musicId": 8,
						"musicVocalId": 10,
						"characterType": "game_character",
						"characterId": 1,
						"seq": 82
					},
					{
						"id": 16,
						"musicId": 8,
						"musicVocalId": 10,
						"characterType": "game_character",
						"characterId": 2,
						"seq": 83
					}
				],
				"assetbundleName": "0008_02",
				"mp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/0008_02_rip/0008_02.mp3",
				"flac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/0008_02_rip/0008_02.flac",
				"shortMp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/0008_02_rip/0008_02_short.mp3",
				"shortFlac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/0008_02_rip/0008_02_short.flac"
			},
			{
				"id": 111,
				"musicId": 8,
				"musicVocalType": "virtual_singer",
				"seq": 2,
				"releaseConditionId": 5,
				"caption": "バーチャル・シンガーver.",
				"characters": [
					{
						"id": 228,
						"musicId": 8,
						"musicVocalId": 111,
						"characterType": "game_character",
						"characterId": 21,
						"seq": 84
					},
					{
						"id": 229,
						"musicId": 8,
						"musicVocalId": 111,
						"characterType": "game_character",
						"characterId": 24,
						"seq": 85
					},
					{
						"id": 230,
						"musicId": 8,
						"musicVocalId": 111,
						"characterType": "game_character",
						"characterId": 25,
						"seq": 86
					}
				],
				"assetbundleName": "vs_0008_01",
				"mp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/vs_0008_01_rip/vs_0008_01.mp3",
				"flac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/vs_0008_01_rip/vs_0008_01.flac",
				"shortMp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/vs_0008_01_rip/vs_0008_01_short.mp3",
				"shortFlac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/vs_0008_01_rip/vs_0008_01_short.flac"
			},
			{
				"id": 218,
				"musicId": 8,
				"musicVocalType": "another_vocal",
				"seq": 4,
				"releaseConditionId": 9,
				"caption": "アナザーボーカルver.",
				"characters": [
					{
						"id": 430,
						"musicId": 8,
						"musicVocalId": 218,
						"characterType": "game_character",
						"characterId": 2,
						"seq": 87
					}
				],
				"assetbundleName": "an_0008_01",
				"mp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/an_0008_01_rip/an_0008_01.mp3",
				"flac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/long/an_0008_01_rip/an_0008_01.flac",
				"shortMp3": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/an_0008_01_rip/an_0008_01_short.mp3",
				"shortFlac": "https://sekai-res.dnaroma.eu/file/sekai-assets/music/short/an_0008_01_rip/an_0008_01_short.flac"
			}
		]
	}
]
  ```
  </details>
  
  ---
    
  ### tip
**Endpoint**: [https://script.google.com/macros/s/AKfycbwMoQMBFsZC8u2j8X1yiPBs3E1PYXrh0Yi9_qsk4Tk80WrOeIaoQq6TDlmUe_pT0QHUqg/exec?authToken=HoshinoIchika&data=tip](https://script.google.com/macros/s/AKfycbwMoQMBFsZC8u2j8X1yiPBs3E1PYXrh0Yi9_qsk4Tk80WrOeIaoQq6TDlmUe_pT0QHUqg/exec?authToken=HoshinoIchika&data=tip)

<details>
  <summary><b>Response</b></summary>
  
  ```json
  [
	{
		"id": 2,
		"title": "ライブミッションパス",
		"description": "「プレミアムミッションパス」を買うと\nライブミッションでより豪華な報酬を獲得できます。",
		"fromUserRank": 1,
		"toUserRank": 999
	},
	{
		"id": 3,
		"title": "カラフルパス",
		"description": "「カラフルパス」を買うと\nライブミッションに必要なライブPを2倍獲得できます。",
		"fromUserRank": 1,
		"toUserRank": 999
	},
	{
		"id": 4,
		"title": "カラフルパス",
		"description": "「カラフルパス」を買うと\nチャレンジライブでチャレンジPを2倍獲得できます。",
		"fromUserRank": 1,
		"toUserRank": 999
	},
	{
		"id": 7,
		"title": "各セカイのバーチャル・シンガーって？",
		"description": "ミクたちはセカイによって姿が変わり、\n\"本当の想い\"を見つけるサポートをしてくれます。",
		"fromUserRank": 1,
		"toUserRank": 100
	},
	{
		"id": 9,
		"title": "セカイはどうやってうまれたの？",
		"description": "「セカイ」は\n誰かの”本当の想い”から生まれた不思議な場所です。",
		"fromUserRank": 1,
		"toUserRank": 100
	}
]
  ```
  </details>
  
  ---
    
  ### character
**Endpoint**: [https://script.google.com/macros/s/AKfycbwMoQMBFsZC8u2j8X1yiPBs3E1PYXrh0Yi9_qsk4Tk80WrOeIaoQq6TDlmUe_pT0QHUqg/exec?authToken=HoshinoIchika&data=character](https://script.google.com/macros/s/AKfycbwMoQMBFsZC8u2j8X1yiPBs3E1PYXrh0Yi9_qsk4Tk80WrOeIaoQq6TDlmUe_pT0QHUqg/exec?authToken=HoshinoIchika&data=character)

<details>
  <summary><b>Response</b></summary>
  
  ```json
  [
	{
		"id": 1,
		"seq": 1,
		"resourceId": 1,
		"firstName": "星乃",
		"givenName": "一歌",
		"firstNameRuby": "ほしの",
		"givenNameRuby": "いちか",
		"gender": "female",
		"height": "161cm",
		"live2dHeightAdjustment": 85,
		"figure": "ladies",
		"breastSize": "m",
		"modelName": "01ichika",
		"unit": "light_sound",
		"supportUnitType": "none",
		"colorCode": "#33aaee",
		"skinColorCode": "#fff5e8",
		"skinShadowColorCode1": "#f4b6cd",
		"skinShadowColorCode2": "#e982a5",
		"characterVoice": "野口瑠璃子",
		"birthday": "8月11日",
		"school": "宮益坂女子学園",
		"schoolYear": "１ーC",
		"hobby": "ミクの歌を聴くこと、育てているサボテンを眺める",
		"specialSkill": "りんごの皮むき",
		"favoriteFood": "焼きそばパン",
		"hatedFood": "グリーンピース",
		"weak": "絶叫アトラクション",
		"introduction": "クールに見えて、本当は友人想いの優しい少女。咲希、穂波、志歩とは幼馴染みだが、ある事情から穂波と志歩とは関係がぎくしゃくしている。ミクの歌を聴くことが好き。Leo/needではギターとボーカル担当。",
		"scenarioId": "self_ichika",
		"characterImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/trim_rip/chr_trim_1.webp",
		"horizNameImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/label_rip/chr_h_lb_1.webp",
		"vertNameImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/label_vertical_rip/chr_v_lb_1.webp",
		"characterSetImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/character_select_rip/chr_tl_1.webp"
	},
	{
		"id": 2,
		"seq": 2,
		"resourceId": 2,
		"firstName": "天馬",
		"givenName": "咲希",
		"firstNameRuby": "てんま",
		"givenNameRuby": "さき",
		"gender": "female",
		"height": "159cm",
		"live2dHeightAdjustment": 75,
		"figure": "ladies",
		"breastSize": "m",
		"modelName": "02saki",
		"unit": "light_sound",
		"supportUnitType": "none",
		"colorCode": "#ffdd44",
		"skinColorCode": "#fff5e8",
		"skinShadowColorCode1": "#f4b6cd",
		"skinShadowColorCode2": "#e982a5",
		"characterVoice": "礒部花凜",
		"birthday": "5月9日",
		"school": "宮益坂女子学園",
		"schoolYear": "１ーC",
		"hobby": "ファッション・メイク動画視聴、ビーズアクセサリー作り",
		"specialSkill": "ヘアアレンジ、お手玉",
		"favoriteFood": "スナック菓子",
		"hatedFood": "おかゆ",
		"weak": "一人ぼっち",
		"introduction": "いつも明るく、笑顔を絶やさないムードメーカー。生まれつき病弱だったせいで中学校はなかなか通えなかったが、ようやく元気になり、高校から復学する。久しぶりに再会できる幼馴染みたちとの楽しい高校生活を期待していたが……。Leo/needではキーボード担当。",
		"scenarioId": "self_saki",
		"characterImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/trim_rip/chr_trim_2.webp",
		"horizNameImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/label_rip/chr_h_lb_2.webp",
		"vertNameImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/label_vertical_rip/chr_v_lb_2.webp",
		"characterSetImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/character_select_rip/chr_tl_2.webp"
	},
	{
		"id": 3,
		"seq": 3,
		"resourceId": 3,
		"firstName": "望月",
		"givenName": "穂波",
		"firstNameRuby": "もちづき",
		"givenNameRuby": "ほなみ",
		"gender": "female",
		"height": "166cm",
		"live2dHeightAdjustment": 70,
		"figure": "ladies",
		"breastSize": "l",
		"modelName": "03honami",
		"unit": "light_sound",
		"supportUnitType": "none",
		"colorCode": "#ee6666",
		"skinColorCode": "#fff5e8",
		"skinShadowColorCode1": "#f4b6cd",
		"skinShadowColorCode2": "#e982a5",
		"characterVoice": "上田麗奈",
		"birthday": "10月27日",
		"school": "宮益坂女子学園",
		"schoolYear": "１ーB",
		"hobby": "飼い犬の散歩、家庭菜園",
		"specialSkill": "家事全般、水泳",
		"favoriteFood": "アップルパイ",
		"hatedFood": "チーズ",
		"weak": "絵を描くこと",
		"introduction": "文武両道の優等生で、包み込むような優しさを持つ。一歌、咲希、志歩とは幼馴染みだったが、中学時代のあることがきっかけで一歌たちとは距離を置くようになってしまう。Leo/needではドラム担当。",
		"scenarioId": "self_honami",
		"characterImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/trim_rip/chr_trim_3.webp",
		"horizNameImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/label_rip/chr_h_lb_3.webp",
		"vertNameImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/label_vertical_rip/chr_v_lb_3.webp",
		"characterSetImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/character_select_rip/chr_tl_3.webp"
	},
	{
		"id": 4,
		"seq": 4,
		"resourceId": 4,
		"firstName": "日野森",
		"givenName": "志歩",
		"firstNameRuby": "ひのもり",
		"givenNameRuby": "しほ",
		"gender": "female",
		"height": "159cm",
		"live2dHeightAdjustment": 75,
		"figure": "ladies",
		"breastSize": "s",
		"modelName": "04shiho",
		"unit": "light_sound",
		"supportUnitType": "none",
		"colorCode": "#bbdd22",
		"skinColorCode": "#fff5e8",
		"skinShadowColorCode1": "#f4b6cd",
		"skinShadowColorCode2": "#e982a5",
		"characterVoice": "中島由貴",
		"birthday": "1月8日",
		"school": "宮益坂女子学園",
		"schoolYear": "１ーA",
		"hobby": "好きなガールズバンドのライブに行く、ベースの練習・演奏",
		"specialSkill": "書道",
		"favoriteFood": "ラーメン、ハンバーグ",
		"hatedFood": "豆腐",
		"weak": "姉",
		"introduction": "馴れ合いを嫌う一匹狼。自分の好きなことに没頭し、周囲の人間にどう思われようが気にしない。そんな彼女も、かつては幼馴染みたちと行動を共にしており、友人たちのことも大切に思っていたのだが……。Leo/needではベース担当。",
		"scenarioId": "self_shiho",
		"characterImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/trim_rip/chr_trim_4.webp",
		"horizNameImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/label_rip/chr_h_lb_4.webp",
		"vertNameImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/label_vertical_rip/chr_v_lb_4.webp",
		"characterSetImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/character_select_rip/chr_tl_4.webp"
	},
	{
		"id": 5,
		"seq": 5,
		"resourceId": 5,
		"firstName": "花里",
		"givenName": "みのり",
		"firstNameRuby": "はなさと",
		"givenNameRuby": "みのり",
		"gender": "female",
		"height": "158cm",
		"live2dHeightAdjustment": 65,
		"figure": "ladies",
		"breastSize": "m",
		"modelName": "05minori",
		"unit": "idol",
		"supportUnitType": "none",
		"colorCode": "#ffccaa",
		"skinColorCode": "#feefe0",
		"skinShadowColorCode1": "#efafbb",
		"skinShadowColorCode2": "#e07889",
		"characterVoice": "小倉唯",
		"birthday": "4月14日",
		"school": "宮益坂女子学園",
		"schoolYear": "１ーA",
		"hobby": "振りコピ、日記をつけること、動物の世話",
		"specialSkill": "キャッチフレーズをつけること",
		"favoriteFood": "サーモン",
		"hatedFood": "ブロッコリー",
		"weak": "落ち着いた行動",
		"introduction": "純粋でひたむきな頑張り屋。アイドルグループ『ASRUN』の桐谷遥を目にしてから、アイドルを目指すようになった。様々なオーディションを受けるが、落ち続けている。",
		"scenarioId": "self_minori",
		"characterImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/trim_rip/chr_trim_5.webp",
		"horizNameImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/label_rip/chr_h_lb_5.webp",
		"vertNameImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/label_vertical_rip/chr_v_lb_5.webp",
		"characterSetImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/character_select_rip/chr_tl_5.webp"
	}
]
  ```
  </details>
  
  ---
    
  ### unit
**Endpoint**: [https://script.google.com/macros/s/AKfycbwMoQMBFsZC8u2j8X1yiPBs3E1PYXrh0Yi9_qsk4Tk80WrOeIaoQq6TDlmUe_pT0QHUqg/exec?authToken=HoshinoIchika&data=unit](https://script.google.com/macros/s/AKfycbwMoQMBFsZC8u2j8X1yiPBs3E1PYXrh0Yi9_qsk4Tk80WrOeIaoQq6TDlmUe_pT0QHUqg/exec?authToken=HoshinoIchika&data=unit)

<details>
  <summary><b>Response</b></summary>
  
  ```json
  [
	{
		"unit": "idol",
		"unitName": "MORE MORE JUMP！",
		"seq": 3,
		"profileSentence": "アイドルを夢見るものの、オーディションには不合格続きの花里みのり。それでも、憧れのアイドル“桐谷遥”の存在を胸に、頑張り続けていた。ところがその桐谷遥が突如、アイドルを辞め、芸能界を引退してしまう。",
		"colorCode": "#88dd44",
		"membersId": [
			5,
			6,
			7,
			8
		],
		"logoImg": "https://raw.githubusercontent.com/Sekai-World/sekai-viewer/main/public/images/jp/logol/logo_idol.png",
		"logoOutlineImg": "https://raw.githubusercontent.com/Sekai-World/sekai-viewer/main/public/images/jp/logol_outline/logo_idol.png",
		"smallLogoOutlineImg": "https://raw.githubusercontent.com/Sekai-World/sekai-viewer/main/public/images/jp/logos_outline/logo_idol.png",
		"img": "https://minio.dnaroma.eu/sekai-assets/unit/set_image_rip/idol.webp",
		"shadowImg": "https://minio.dnaroma.eu/sekai-assets/unit/set_image_rip/idol_shadow.webp"
	},
	{
		"unit": "light_sound",
		"unitName": "Leo/need",
		"seq": 2,
		"profileSentence": "様々な事情からすれ違い、幼馴染みと疎遠になってしまった星乃一歌。しかし、幼馴染みのひとりで療養をしていた、天馬咲希が学校に戻ってきたことをきっかけに、遠ざかっていた4人の距離に変化が表れ始める。",
		"colorCode": "#4455dd",
		"membersId": [
			1,
			2,
			3,
			4
		],
		"logoImg": "https://raw.githubusercontent.com/Sekai-World/sekai-viewer/main/public/images/jp/logol/logo_light_sound.png",
		"logoOutlineImg": "https://raw.githubusercontent.com/Sekai-World/sekai-viewer/main/public/images/jp/logol_outline/logo_light_sound.png",
		"smallLogoOutlineImg": "https://raw.githubusercontent.com/Sekai-World/sekai-viewer/main/public/images/jp/logos_outline/logo_light_sound.png",
		"img": "https://minio.dnaroma.eu/sekai-assets/unit/set_image_rip/light_sound.webp",
		"shadowImg": "https://minio.dnaroma.eu/sekai-assets/unit/set_image_rip/light_sound_shadow.webp"
	},
	{
		"unit": "piapro",
		"unitName": "バーチャル・シンガー",
		"seq": 1,
		"profileSentence": "現実世界でバーチャル・シンガーとして存在しているミク達。”本当の想い”を抱える少年少女達は、不思議なセカイで自分たちが知っているミク達とはどこか違うミク達に出会い、自分達の想いに向き合っていく。",
		"colorCode": "#ffffff",
		"membersId": [
			21,
			22,
			23,
			24,
			25,
			26
		],
		"logoImg": "https://raw.githubusercontent.com/Sekai-World/sekai-viewer/main/public/images/jp/logol/logo_piapro.png",
		"logoOutlineImg": "https://raw.githubusercontent.com/Sekai-World/sekai-viewer/main/public/images/jp/logol_outline/logo_piapro.png",
		"smallLogoOutlineImg": "https://raw.githubusercontent.com/Sekai-World/sekai-viewer/main/public/images/jp/logos_outline/logo_piapro.png",
		"img": "https://minio.dnaroma.eu/sekai-assets/unit/set_image_rip/piapro.webp",
		"shadowImg": "https://minio.dnaroma.eu/sekai-assets/unit/set_image_rip/piapro_shadow.webp"
	},
	{
		"unit": "school_refusal",
		"unitName": "25時、ナイトコードで。",
		"seq": 6,
		"profileSentence": "ボイスチャットツール『ナイトコード』でやり取りをしているサークル仲間と日々楽曲づくりをしている宵崎奏。お互い顔も名前も知らないが、それなりにうまくやっていたはずだった。しかし、ある日を境にサークル仲間のひとりと連絡が取れなくなってしまう。",
		"colorCode": "#884499",
		"membersId": [
			17,
			18,
			19,
			20
		],
		"logoImg": "https://raw.githubusercontent.com/Sekai-World/sekai-viewer/main/public/images/jp/logol/logo_school_refusal.png",
		"logoOutlineImg": "https://raw.githubusercontent.com/Sekai-World/sekai-viewer/main/public/images/jp/logol_outline/logo_school_refusal.png",
		"smallLogoOutlineImg": "https://raw.githubusercontent.com/Sekai-World/sekai-viewer/main/public/images/jp/logos_outline/logo_school_refusal.png",
		"img": "https://minio.dnaroma.eu/sekai-assets/unit/set_image_rip/school_refusal.webp",
		"shadowImg": "https://minio.dnaroma.eu/sekai-assets/unit/set_image_rip/school_refusal_shadow.webp"
	},
	{
		"unit": "street",
		"unitName": "Vivid BAD SQUAD",
		"seq": 4,
		"profileSentence": "内気で何をするにもびくびくしてしまう小豆沢こはね。ある日、裏通りから聞こえてきた歌と音楽に衝撃を受ける。そして、それを歌っていた白石杏に導かれるように、ストリートの音楽へと足を踏み入れていく。",
		"colorCode": "#ee1166",
		"membersId": [
			9,
			10,
			11,
			12
		],
		"logoImg": "https://raw.githubusercontent.com/Sekai-World/sekai-viewer/main/public/images/jp/logol/logo_street.png",
		"logoOutlineImg": "https://raw.githubusercontent.com/Sekai-World/sekai-viewer/main/public/images/jp/logol_outline/logo_street.png",
		"smallLogoOutlineImg": "https://raw.githubusercontent.com/Sekai-World/sekai-viewer/main/public/images/jp/logos_outline/logo_street.png",
		"img": "https://minio.dnaroma.eu/sekai-assets/unit/set_image_rip/street.webp",
		"shadowImg": "https://minio.dnaroma.eu/sekai-assets/unit/set_image_rip/street_shadow.webp"
	}
]
  ```
  </details>
  
  ---
    
  ### card
**Endpoint**: [https://script.google.com/macros/s/AKfycbwMoQMBFsZC8u2j8X1yiPBs3E1PYXrh0Yi9_qsk4Tk80WrOeIaoQq6TDlmUe_pT0QHUqg/exec?authToken=HoshinoIchika&data=card](https://script.google.com/macros/s/AKfycbwMoQMBFsZC8u2j8X1yiPBs3E1PYXrh0Yi9_qsk4Tk80WrOeIaoQq6TDlmUe_pT0QHUqg/exec?authToken=HoshinoIchika&data=card)

<details>
  <summary><b>Response</b></summary>
  
  ```json
  [
	{
		"id": 1,
		"seq": 10,
		"characterId": 1,
		"cardRarityType": "rarity_1",
		"specialTrainingPower1BonusFixed": 0,
		"specialTrainingPower2BonusFixed": 0,
		"specialTrainingPower3BonusFixed": 0,
		"attr": "cool",
		"supportUnit": "none",
		"skillId": 1,
		"cardSkillName": "足元の小さな花",
		"prefix": "クールだけど友達想い",
		"assetbundleName": "res001_no001",
		"gachaPhrase": "-",
		"flavorText": "フレーバーテキスト",
		"releaseAt": 1546322400000,
		"cardParameters": [
			{
				"id": 10001,
				"cardId": 1,
				"cardLevel": 1,
				"cardParameterType": "param1",
				"power": 1065
			},
			{
				"id": 10002,
				"cardId": 1,
				"cardLevel": 2,
				"cardParameterType": "param1",
				"power": 1149
			},
			{
				"id": 10003,
				"cardId": 1,
				"cardLevel": 3,
				"cardParameterType": "param1",
				"power": 1233
			},
			{
				"id": 10004,
				"cardId": 1,
				"cardLevel": 4,
				"cardParameterType": "param1",
				"power": 1317
			},
			{
				"id": 10005,
				"cardId": 1,
				"cardLevel": 5,
				"cardParameterType": "param1",
				"power": 1401
			},
			{
				"id": 10006,
				"cardId": 1,
				"cardLevel": 6,
				"cardParameterType": "param1",
				"power": 1485
			},
			{
				"id": 10007,
				"cardId": 1,
				"cardLevel": 7,
				"cardParameterType": "param1",
				"power": 1569
			},
			{
				"id": 10008,
				"cardId": 1,
				"cardLevel": 8,
				"cardParameterType": "param1",
				"power": 1653
			},
			{
				"id": 10009,
				"cardId": 1,
				"cardLevel": 9,
				"cardParameterType": "param1",
				"power": 1737
			},
			{
				"id": 10010,
				"cardId": 1,
				"cardLevel": 10,
				"cardParameterType": "param1",
				"power": 1821
			},
			{
				"id": 10011,
				"cardId": 1,
				"cardLevel": 11,
				"cardParameterType": "param1",
				"power": 1906
			},
			{
				"id": 10012,
				"cardId": 1,
				"cardLevel": 12,
				"cardParameterType": "param1",
				"power": 1990
			},
			{
				"id": 10013,
				"cardId": 1,
				"cardLevel": 13,
				"cardParameterType": "param1",
				"power": 2074
			},
			{
				"id": 10014,
				"cardId": 1,
				"cardLevel": 14,
				"cardParameterType": "param1",
				"power": 2158
			},
			{
				"id": 10015,
				"cardId": 1,
				"cardLevel": 15,
				"cardParameterType": "param1",
				"power": 2242
			},
			{
				"id": 10016,
				"cardId": 1,
				"cardLevel": 16,
				"cardParameterType": "param1",
				"power": 2326
			},
			{
				"id": 10017,
				"cardId": 1,
				"cardLevel": 17,
				"cardParameterType": "param1",
				"power": 2410
			},
			{
				"id": 10018,
				"cardId": 1,
				"cardLevel": 18,
				"cardParameterType": "param1",
				"power": 2494
			},
			{
				"id": 10019,
				"cardId": 1,
				"cardLevel": 19,
				"cardParameterType": "param1",
				"power": 2578
			},
			{
				"id": 10020,
				"cardId": 1,
				"cardLevel": 20,
				"cardParameterType": "param1",
				"power": 2663
			},
			{
				"id": 11001,
				"cardId": 1,
				"cardLevel": 1,
				"cardParameterType": "param2",
				"power": 930
			},
			{
				"id": 11002,
				"cardId": 1,
				"cardLevel": 2,
				"cardParameterType": "param2",
				"power": 1003
			},
			{
				"id": 11003,
				"cardId": 1,
				"cardLevel": 3,
				"cardParameterType": "param2",
				"power": 1076
			},
			{
				"id": 11004,
				"cardId": 1,
				"cardLevel": 4,
				"cardParameterType": "param2",
				"power": 1150
			},
			{
				"id": 11005,
				"cardId": 1,
				"cardLevel": 5,
				"cardParameterType": "param2",
				"power": 1223
			},
			{
				"id": 11006,
				"cardId": 1,
				"cardLevel": 6,
				"cardParameterType": "param2",
				"power": 1297
			},
			{
				"id": 11007,
				"cardId": 1,
				"cardLevel": 7,
				"cardParameterType": "param2",
				"power": 1370
			},
			{
				"id": 11008,
				"cardId": 1,
				"cardLevel": 8,
				"cardParameterType": "param2",
				"power": 1443
			},
			{
				"id": 11009,
				"cardId": 1,
				"cardLevel": 9,
				"cardParameterType": "param2",
				"power": 1517
			},
			{
				"id": 11010,
				"cardId": 1,
				"cardLevel": 10,
				"cardParameterType": "param2",
				"power": 1590
			},
			{
				"id": 11011,
				"cardId": 1,
				"cardLevel": 11,
				"cardParameterType": "param2",
				"power": 1664
			},
			{
				"id": 11012,
				"cardId": 1,
				"cardLevel": 12,
				"cardParameterType": "param2",
				"power": 1737
			},
			{
				"id": 11013,
				"cardId": 1,
				"cardLevel": 13,
				"cardParameterType": "param2",
				"power": 1811
			},
			{
				"id": 11014,
				"cardId": 1,
				"cardLevel": 14,
				"cardParameterType": "param2",
				"power": 1884
			},
			{
				"id": 11015,
				"cardId": 1,
				"cardLevel": 15,
				"cardParameterType": "param2",
				"power": 1957
			},
			{
				"id": 11016,
				"cardId": 1,
				"cardLevel": 16,
				"cardParameterType": "param2",
				"power": 2031
			},
			{
				"id": 11017,
				"cardId": 1,
				"cardLevel": 17,
				"cardParameterType": "param2",
				"power": 2104
			},
			{
				"id": 11018,
				"cardId": 1,
				"cardLevel": 18,
				"cardParameterType": "param2",
				"power": 2178
			},
			{
				"id": 11019,
				"cardId": 1,
				"cardLevel": 19,
				"cardParameterType": "param2",
				"power": 2251
			},
			{
				"id": 11020,
				"cardId": 1,
				"cardLevel": 20,
				"cardParameterType": "param2",
				"power": 2325
			},
			{
				"id": 12001,
				"cardId": 1,
				"cardLevel": 1,
				"cardParameterType": "param3",
				"power": 1035
			},
			{
				"id": 12002,
				"cardId": 1,
				"cardLevel": 2,
				"cardParameterType": "param3",
				"power": 1116
			},
			{
				"id": 12003,
				"cardId": 1,
				"cardLevel": 3,
				"cardParameterType": "param3",
				"power": 1198
			},
			{
				"id": 12004,
				"cardId": 1,
				"cardLevel": 4,
				"cardParameterType": "param3",
				"power": 1280
			},
			{
				"id": 12005,
				"cardId": 1,
				"cardLevel": 5,
				"cardParameterType": "param3",
				"power": 1361
			},
			{
				"id": 12006,
				"cardId": 1,
				"cardLevel": 6,
				"cardParameterType": "param3",
				"power": 1443
			},
			{
				"id": 12007,
				"cardId": 1,
				"cardLevel": 7,
				"cardParameterType": "param3",
				"power": 1525
			},
			{
				"id": 12008,
				"cardId": 1,
				"cardLevel": 8,
				"cardParameterType": "param3",
				"power": 1606
			},
			{
				"id": 12009,
				"cardId": 1,
				"cardLevel": 9,
				"cardParameterType": "param3",
				"power": 1688
			},
			{
				"id": 12010,
				"cardId": 1,
				"cardLevel": 10,
				"cardParameterType": "param3",
				"power": 1770
			},
			{
				"id": 12011,
				"cardId": 1,
				"cardLevel": 11,
				"cardParameterType": "param3",
				"power": 1851
			},
			{
				"id": 12012,
				"cardId": 1,
				"cardLevel": 12,
				"cardParameterType": "param3",
				"power": 1933
			},
			{
				"id": 12013,
				"cardId": 1,
				"cardLevel": 13,
				"cardParameterType": "param3",
				"power": 2015
			},
			{
				"id": 12014,
				"cardId": 1,
				"cardLevel": 14,
				"cardParameterType": "param3",
				"power": 2096
			},
			{
				"id": 12015,
				"cardId": 1,
				"cardLevel": 15,
				"cardParameterType": "param3",
				"power": 2178
			},
			{
				"id": 12016,
				"cardId": 1,
				"cardLevel": 16,
				"cardParameterType": "param3",
				"power": 2260
			},
			{
				"id": 12017,
				"cardId": 1,
				"cardLevel": 17,
				"cardParameterType": "param3",
				"power": 2341
			},
			{
				"id": 12018,
				"cardId": 1,
				"cardLevel": 18,
				"cardParameterType": "param3",
				"power": 2423
			},
			{
				"id": 12019,
				"cardId": 1,
				"cardLevel": 19,
				"cardParameterType": "param3",
				"power": 2505
			},
			{
				"id": 12020,
				"cardId": 1,
				"cardLevel": 20,
				"cardParameterType": "param3",
				"power": 2587
			}
		],
		"specialTrainingCosts": [],
		"masterLessonAchieveResources": [
			{
				"releaseConditionId": 8,
				"cardId": 1,
				"masterRank": 1,
				"resources": []
			}
		],
		"iconImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/thumbnail/chara_rip/res001_no001_normal.webp",
		"cardImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/member/res001_no001_rip/card_normal.webp",
		"cardTrimImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/member_cutout_trm/res001_no001_rip/normal.webp",
		"fullIconImg": "https://drive.google.com/uc?id=1k1GQg3AmVZdBhufUuvif8gs9BCcCy_Jy&usp=sharing"
	},
	{
		"id": 2,
		"seq": 20,
		"characterId": 1,
		"cardRarityType": "rarity_2",
		"specialTrainingPower1BonusFixed": 0,
		"specialTrainingPower2BonusFixed": 0,
		"specialTrainingPower3BonusFixed": 0,
		"attr": "happy",
		"supportUnit": "none",
		"skillId": 2,
		"cardSkillName": "精一杯の韻を踏んで",
		"prefix": "Leo/need",
		"assetbundleName": "res001_no002",
		"gachaPhrase": "-",
		"flavorText": "フレーバーテキスト",
		"releaseAt": 1546322400000,
		"cardParameters": [
			{
				"id": 20001,
				"cardId": 2,
				"cardLevel": 1,
				"cardParameterType": "param1",
				"power": 2238
			},
			{
				"id": 20002,
				"cardId": 2,
				"cardLevel": 2,
				"cardParameterType": "param1",
				"power": 2354
			},
			{
				"id": 20003,
				"cardId": 2,
				"cardLevel": 3,
				"cardParameterType": "param1",
				"power": 2470
			},
			{
				"id": 20004,
				"cardId": 2,
				"cardLevel": 4,
				"cardParameterType": "param1",
				"power": 2586
			},
			{
				"id": 20005,
				"cardId": 2,
				"cardLevel": 5,
				"cardParameterType": "param1",
				"power": 2702
			},
			{
				"id": 20006,
				"cardId": 2,
				"cardLevel": 6,
				"cardParameterType": "param1",
				"power": 2818
			},
			{
				"id": 20007,
				"cardId": 2,
				"cardLevel": 7,
				"cardParameterType": "param1",
				"power": 2934
			},
			{
				"id": 20008,
				"cardId": 2,
				"cardLevel": 8,
				"cardParameterType": "param1",
				"power": 3050
			},
			{
				"id": 20009,
				"cardId": 2,
				"cardLevel": 9,
				"cardParameterType": "param1",
				"power": 3166
			},
			{
				"id": 20010,
				"cardId": 2,
				"cardLevel": 10,
				"cardParameterType": "param1",
				"power": 3282
			},
			{
				"id": 20011,
				"cardId": 2,
				"cardLevel": 11,
				"cardParameterType": "param1",
				"power": 3398
			},
			{
				"id": 20012,
				"cardId": 2,
				"cardLevel": 12,
				"cardParameterType": "param1",
				"power": 3514
			},
			{
				"id": 20013,
				"cardId": 2,
				"cardLevel": 13,
				"cardParameterType": "param1",
				"power": 3630
			},
			{
				"id": 20014,
				"cardId": 2,
				"cardLevel": 14,
				"cardParameterType": "param1",
				"power": 3746
			},
			{
				"id": 20015,
				"cardId": 2,
				"cardLevel": 15,
				"cardParameterType": "param1",
				"power": 3862
			},
			{
				"id": 20016,
				"cardId": 2,
				"cardLevel": 16,
				"cardParameterType": "param1",
				"power": 3978
			},
			{
				"id": 20017,
				"cardId": 2,
				"cardLevel": 17,
				"cardParameterType": "param1",
				"power": 4094
			},
			{
				"id": 20018,
				"cardId": 2,
				"cardLevel": 18,
				"cardParameterType": "param1",
				"power": 4210
			},
			{
				"id": 20019,
				"cardId": 2,
				"cardLevel": 19,
				"cardParameterType": "param1",
				"power": 4326
			},
			{
				"id": 20020,
				"cardId": 2,
				"cardLevel": 20,
				"cardParameterType": "param1",
				"power": 4442
			},
			{
				"id": 20021,
				"cardId": 2,
				"cardLevel": 21,
				"cardParameterType": "param1",
				"power": 4558
			},
			{
				"id": 20022,
				"cardId": 2,
				"cardLevel": 22,
				"cardParameterType": "param1",
				"power": 4674
			},
			{
				"id": 20023,
				"cardId": 2,
				"cardLevel": 23,
				"cardParameterType": "param1",
				"power": 4790
			},
			{
				"id": 20024,
				"cardId": 2,
				"cardLevel": 24,
				"cardParameterType": "param1",
				"power": 4906
			},
			{
				"id": 20025,
				"cardId": 2,
				"cardLevel": 25,
				"cardParameterType": "param1",
				"power": 5022
			},
			{
				"id": 20026,
				"cardId": 2,
				"cardLevel": 26,
				"cardParameterType": "param1",
				"power": 5138
			},
			{
				"id": 20027,
				"cardId": 2,
				"cardLevel": 27,
				"cardParameterType": "param1",
				"power": 5254
			},
			{
				"id": 20028,
				"cardId": 2,
				"cardLevel": 28,
				"cardParameterType": "param1",
				"power": 5370
			},
			{
				"id": 20029,
				"cardId": 2,
				"cardLevel": 29,
				"cardParameterType": "param1",
				"power": 5486
			},
			{
				"id": 20030,
				"cardId": 2,
				"cardLevel": 30,
				"cardParameterType": "param1",
				"power": 5602
			},
			{
				"id": 21001,
				"cardId": 2,
				"cardLevel": 1,
				"cardParameterType": "param2",
				"power": 2547
			},
			{
				"id": 21002,
				"cardId": 2,
				"cardLevel": 2,
				"cardParameterType": "param2",
				"power": 2678
			},
			{
				"id": 21003,
				"cardId": 2,
				"cardLevel": 3,
				"cardParameterType": "param2",
				"power": 2810
			},
			{
				"id": 21004,
				"cardId": 2,
				"cardLevel": 4,
				"cardParameterType": "param2",
				"power": 2942
			},
			{
				"id": 21005,
				"cardId": 2,
				"cardLevel": 5,
				"cardParameterType": "param2",
				"power": 3073
			},
			{
				"id": 21006,
				"cardId": 2,
				"cardLevel": 6,
				"cardParameterType": "param2",
				"power": 3205
			},
			{
				"id": 21007,
				"cardId": 2,
				"cardLevel": 7,
				"cardParameterType": "param2",
				"power": 3337
			},
			{
				"id": 21008,
				"cardId": 2,
				"cardLevel": 8,
				"cardParameterType": "param2",
				"power": 3469
			},
			{
				"id": 21009,
				"cardId": 2,
				"cardLevel": 9,
				"cardParameterType": "param2",
				"power": 3600
			},
			{
				"id": 21010,
				"cardId": 2,
				"cardLevel": 10,
				"cardParameterType": "param2",
				"power": 3732
			},
			{
				"id": 21011,
				"cardId": 2,
				"cardLevel": 11,
				"cardParameterType": "param2",
				"power": 3864
			},
			{
				"id": 21012,
				"cardId": 2,
				"cardLevel": 12,
				"cardParameterType": "param2",
				"power": 3995
			},
			{
				"id": 21013,
				"cardId": 2,
				"cardLevel": 13,
				"cardParameterType": "param2",
				"power": 4127
			},
			{
				"id": 21014,
				"cardId": 2,
				"cardLevel": 14,
				"cardParameterType": "param2",
				"power": 4259
			},
			{
				"id": 21015,
				"cardId": 2,
				"cardLevel": 15,
				"cardParameterType": "param2",
				"power": 4391
			},
			{
				"id": 21016,
				"cardId": 2,
				"cardLevel": 16,
				"cardParameterType": "param2",
				"power": 4522
			},
			{
				"id": 21017,
				"cardId": 2,
				"cardLevel": 17,
				"cardParameterType": "param2",
				"power": 4654
			},
			{
				"id": 21018,
				"cardId": 2,
				"cardLevel": 18,
				"cardParameterType": "param2",
				"power": 4786
			},
			{
				"id": 21019,
				"cardId": 2,
				"cardLevel": 19,
				"cardParameterType": "param2",
				"power": 4918
			},
			{
				"id": 21020,
				"cardId": 2,
				"cardLevel": 20,
				"cardParameterType": "param2",
				"power": 5049
			},
			{
				"id": 21021,
				"cardId": 2,
				"cardLevel": 21,
				"cardParameterType": "param2",
				"power": 5181
			},
			{
				"id": 21022,
				"cardId": 2,
				"cardLevel": 22,
				"cardParameterType": "param2",
				"power": 5313
			},
			{
				"id": 21023,
				"cardId": 2,
				"cardLevel": 23,
				"cardParameterType": "param2",
				"power": 5444
			},
			{
				"id": 21024,
				"cardId": 2,
				"cardLevel": 24,
				"cardParameterType": "param2",
				"power": 5576
			},
			{
				"id": 21025,
				"cardId": 2,
				"cardLevel": 25,
				"cardParameterType": "param2",
				"power": 5708
			},
			{
				"id": 21026,
				"cardId": 2,
				"cardLevel": 26,
				"cardParameterType": "param2",
				"power": 5840
			},
			{
				"id": 21027,
				"cardId": 2,
				"cardLevel": 27,
				"cardParameterType": "param2",
				"power": 5971
			},
			{
				"id": 21028,
				"cardId": 2,
				"cardLevel": 28,
				"cardParameterType": "param2",
				"power": 6103
			},
			{
				"id": 21029,
				"cardId": 2,
				"cardLevel": 29,
				"cardParameterType": "param2",
				"power": 6235
			},
			{
				"id": 21030,
				"cardId": 2,
				"cardLevel": 30,
				"cardParameterType": "param2",
				"power": 6367
			},
			{
				"id": 22001,
				"cardId": 2,
				"cardLevel": 1,
				"cardParameterType": "param3",
				"power": 2003
			},
			{
				"id": 22002,
				"cardId": 2,
				"cardLevel": 2,
				"cardParameterType": "param3",
				"power": 2106
			},
			{
				"id": 22003,
				"cardId": 2,
				"cardLevel": 3,
				"cardParameterType": "param3",
				"power": 2210
			},
			{
				"id": 22004,
				"cardId": 2,
				"cardLevel": 4,
				"cardParameterType": "param3",
				"power": 2313
			},
			{
				"id": 22005,
				"cardId": 2,
				"cardLevel": 5,
				"cardParameterType": "param3",
				"power": 2417
			},
			{
				"id": 22006,
				"cardId": 2,
				"cardLevel": 6,
				"cardParameterType": "param3",
				"power": 2520
			},
			{
				"id": 22007,
				"cardId": 2,
				"cardLevel": 7,
				"cardParameterType": "param3",
				"power": 2624
			},
			{
				"id": 22008,
				"cardId": 2,
				"cardLevel": 8,
				"cardParameterType": "param3",
				"power": 2727
			},
			{
				"id": 22009,
				"cardId": 2,
				"cardLevel": 9,
				"cardParameterType": "param3",
				"power": 2831
			},
			{
				"id": 22010,
				"cardId": 2,
				"cardLevel": 10,
				"cardParameterType": "param3",
				"power": 2934
			},
			{
				"id": 22011,
				"cardId": 2,
				"cardLevel": 11,
				"cardParameterType": "param3",
				"power": 3038
			},
			{
				"id": 22012,
				"cardId": 2,
				"cardLevel": 12,
				"cardParameterType": "param3",
				"power": 3142
			},
			{
				"id": 22013,
				"cardId": 2,
				"cardLevel": 13,
				"cardParameterType": "param3",
				"power": 3245
			},
			{
				"id": 22014,
				"cardId": 2,
				"cardLevel": 14,
				"cardParameterType": "param3",
				"power": 3349
			},
			{
				"id": 22015,
				"cardId": 2,
				"cardLevel": 15,
				"cardParameterType": "param3",
				"power": 3452
			},
			{
				"id": 22016,
				"cardId": 2,
				"cardLevel": 16,
				"cardParameterType": "param3",
				"power": 3556
			},
			{
				"id": 22017,
				"cardId": 2,
				"cardLevel": 17,
				"cardParameterType": "param3",
				"power": 3659
			},
			{
				"id": 22018,
				"cardId": 2,
				"cardLevel": 18,
				"cardParameterType": "param3",
				"power": 3763
			},
			{
				"id": 22019,
				"cardId": 2,
				"cardLevel": 19,
				"cardParameterType": "param3",
				"power": 3866
			},
			{
				"id": 22020,
				"cardId": 2,
				"cardLevel": 20,
				"cardParameterType": "param3",
				"power": 3970
			},
			{
				"id": 22021,
				"cardId": 2,
				"cardLevel": 21,
				"cardParameterType": "param3",
				"power": 4074
			},
			{
				"id": 22022,
				"cardId": 2,
				"cardLevel": 22,
				"cardParameterType": "param3",
				"power": 4177
			},
			{
				"id": 22023,
				"cardId": 2,
				"cardLevel": 23,
				"cardParameterType": "param3",
				"power": 4281
			},
			{
				"id": 22024,
				"cardId": 2,
				"cardLevel": 24,
				"cardParameterType": "param3",
				"power": 4384
			},
			{
				"id": 22025,
				"cardId": 2,
				"cardLevel": 25,
				"cardParameterType": "param3",
				"power": 4488
			},
			{
				"id": 22026,
				"cardId": 2,
				"cardLevel": 26,
				"cardParameterType": "param3",
				"power": 4591
			},
			{
				"id": 22027,
				"cardId": 2,
				"cardLevel": 27,
				"cardParameterType": "param3",
				"power": 4695
			},
			{
				"id": 22028,
				"cardId": 2,
				"cardLevel": 28,
				"cardParameterType": "param3",
				"power": 4798
			},
			{
				"id": 22029,
				"cardId": 2,
				"cardLevel": 29,
				"cardParameterType": "param3",
				"power": 4902
			},
			{
				"id": 22030,
				"cardId": 2,
				"cardLevel": 30,
				"cardParameterType": "param3",
				"power": 5006
			}
		],
		"specialTrainingCosts": [],
		"masterLessonAchieveResources": [],
		"iconImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/thumbnail/chara_rip/res001_no002_normal.webp",
		"cardImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/member/res001_no002_rip/card_normal.webp",
		"cardTrimImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/member_cutout_trm/res001_no002_rip/normal.webp",
		"fullIconImg": "https://drive.google.com/uc?id=1FGVucOtDb6fjHz5eFiYUdfd81QKpKUXK&usp=sharing"
	},
	{
		"id": 3,
		"seq": 30,
		"characterId": 1,
		"cardRarityType": "rarity_3",
		"specialTrainingPower1BonusFixed": 300,
		"specialTrainingPower2BonusFixed": 300,
		"specialTrainingPower3BonusFixed": 300,
		"attr": "mysterious",
		"supportUnit": "none",
		"skillId": 6,
		"cardSkillName": "踏み出した一歩",
		"prefix": "見上げる先に",
		"assetbundleName": "res001_no003",
		"gachaPhrase": "……すごいな、ミクは",
		"flavorText": "フレーバーテキスト",
		"releaseAt": 1546322400000,
		"cardParameters": [
			{
				"id": 30001,
				"cardId": 3,
				"cardLevel": 1,
				"cardParameterType": "param1",
				"power": 2844
			},
			{
				"id": 30002,
				"cardId": 3,
				"cardLevel": 2,
				"cardParameterType": "param1",
				"power": 2916
			},
			{
				"id": 30003,
				"cardId": 3,
				"cardLevel": 3,
				"cardParameterType": "param1",
				"power": 2989
			},
			{
				"id": 30004,
				"cardId": 3,
				"cardLevel": 4,
				"cardParameterType": "param1",
				"power": 3062
			},
			{
				"id": 30005,
				"cardId": 3,
				"cardLevel": 5,
				"cardParameterType": "param1",
				"power": 3135
			},
			{
				"id": 30006,
				"cardId": 3,
				"cardLevel": 6,
				"cardParameterType": "param1",
				"power": 3208
			},
			{
				"id": 30007,
				"cardId": 3,
				"cardLevel": 7,
				"cardParameterType": "param1",
				"power": 3281
			},
			{
				"id": 30008,
				"cardId": 3,
				"cardLevel": 8,
				"cardParameterType": "param1",
				"power": 3354
			},
			{
				"id": 30009,
				"cardId": 3,
				"cardLevel": 9,
				"cardParameterType": "param1",
				"power": 3427
			},
			{
				"id": 30010,
				"cardId": 3,
				"cardLevel": 10,
				"cardParameterType": "param1",
				"power": 3500
			},
			{
				"id": 30011,
				"cardId": 3,
				"cardLevel": 11,
				"cardParameterType": "param1",
				"power": 3572
			},
			{
				"id": 30012,
				"cardId": 3,
				"cardLevel": 12,
				"cardParameterType": "param1",
				"power": 3645
			},
			{
				"id": 30013,
				"cardId": 3,
				"cardLevel": 13,
				"cardParameterType": "param1",
				"power": 3718
			},
			{
				"id": 30014,
				"cardId": 3,
				"cardLevel": 14,
				"cardParameterType": "param1",
				"power": 3791
			},
			{
				"id": 30015,
				"cardId": 3,
				"cardLevel": 15,
				"cardParameterType": "param1",
				"power": 3864
			},
			{
				"id": 30016,
				"cardId": 3,
				"cardLevel": 16,
				"cardParameterType": "param1",
				"power": 3937
			},
			{
				"id": 30017,
				"cardId": 3,
				"cardLevel": 17,
				"cardParameterType": "param1",
				"power": 4010
			},
			{
				"id": 30018,
				"cardId": 3,
				"cardLevel": 18,
				"cardParameterType": "param1",
				"power": 4083
			},
			{
				"id": 30019,
				"cardId": 3,
				"cardLevel": 19,
				"cardParameterType": "param1",
				"power": 4156
			},
			{
				"id": 30020,
				"cardId": 3,
				"cardLevel": 20,
				"cardParameterType": "param1",
				"power": 4229
			},
			{
				"id": 30021,
				"cardId": 3,
				"cardLevel": 21,
				"cardParameterType": "param1",
				"power": 4301
			},
			{
				"id": 30022,
				"cardId": 3,
				"cardLevel": 22,
				"cardParameterType": "param1",
				"power": 4374
			},
			{
				"id": 30023,
				"cardId": 3,
				"cardLevel": 23,
				"cardParameterType": "param1",
				"power": 4447
			},
			{
				"id": 30024,
				"cardId": 3,
				"cardLevel": 24,
				"cardParameterType": "param1",
				"power": 4520
			},
			{
				"id": 30025,
				"cardId": 3,
				"cardLevel": 25,
				"cardParameterType": "param1",
				"power": 4593
			},
			{
				"id": 30026,
				"cardId": 3,
				"cardLevel": 26,
				"cardParameterType": "param1",
				"power": 4666
			},
			{
				"id": 30027,
				"cardId": 3,
				"cardLevel": 27,
				"cardParameterType": "param1",
				"power": 4739
			},
			{
				"id": 30028,
				"cardId": 3,
				"cardLevel": 28,
				"cardParameterType": "param1",
				"power": 4812
			},
			{
				"id": 30029,
				"cardId": 3,
				"cardLevel": 29,
				"cardParameterType": "param1",
				"power": 4885
			},
			{
				"id": 30030,
				"cardId": 3,
				"cardLevel": 30,
				"cardParameterType": "param1",
				"power": 4958
			},
			{
				"id": 30031,
				"cardId": 3,
				"cardLevel": 31,
				"cardParameterType": "param1",
				"power": 5030
			},
			{
				"id": 30032,
				"cardId": 3,
				"cardLevel": 32,
				"cardParameterType": "param1",
				"power": 5103
			},
			{
				"id": 30033,
				"cardId": 3,
				"cardLevel": 33,
				"cardParameterType": "param1",
				"power": 5176
			},
			{
				"id": 30034,
				"cardId": 3,
				"cardLevel": 34,
				"cardParameterType": "param1",
				"power": 5249
			},
			{
				"id": 30035,
				"cardId": 3,
				"cardLevel": 35,
				"cardParameterType": "param1",
				"power": 5322
			},
			{
				"id": 30036,
				"cardId": 3,
				"cardLevel": 36,
				"cardParameterType": "param1",
				"power": 5395
			},
			{
				"id": 30037,
				"cardId": 3,
				"cardLevel": 37,
				"cardParameterType": "param1",
				"power": 5468
			},
			{
				"id": 30038,
				"cardId": 3,
				"cardLevel": 38,
				"cardParameterType": "param1",
				"power": 5541
			},
			{
				"id": 30039,
				"cardId": 3,
				"cardLevel": 39,
				"cardParameterType": "param1",
				"power": 5614
			},
			{
				"id": 30040,
				"cardId": 3,
				"cardLevel": 40,
				"cardParameterType": "param1",
				"power": 5687
			},
			{
				"id": 30041,
				"cardId": 3,
				"cardLevel": 41,
				"cardParameterType": "param1",
				"power": 5971
			},
			{
				"id": 30042,
				"cardId": 3,
				"cardLevel": 42,
				"cardParameterType": "param1",
				"power": 6255
			},
			{
				"id": 30043,
				"cardId": 3,
				"cardLevel": 43,
				"cardParameterType": "param1",
				"power": 6540
			},
			{
				"id": 30044,
				"cardId": 3,
				"cardLevel": 44,
				"cardParameterType": "param1",
				"power": 6824
			},
			{
				"id": 30045,
				"cardId": 3,
				"cardLevel": 45,
				"cardParameterType": "param1",
				"power": 7109
			},
			{
				"id": 30046,
				"cardId": 3,
				"cardLevel": 46,
				"cardParameterType": "param1",
				"power": 7393
			},
			{
				"id": 30047,
				"cardId": 3,
				"cardLevel": 47,
				"cardParameterType": "param1",
				"power": 7677
			},
			{
				"id": 30048,
				"cardId": 3,
				"cardLevel": 48,
				"cardParameterType": "param1",
				"power": 7962
			},
			{
				"id": 30049,
				"cardId": 3,
				"cardLevel": 49,
				"cardParameterType": "param1",
				"power": 8246
			},
			{
				"id": 30050,
				"cardId": 3,
				"cardLevel": 50,
				"cardParameterType": "param1",
				"power": 8531
			},
			{
				"id": 31001,
				"cardId": 3,
				"cardLevel": 1,
				"cardParameterType": "param2",
				"power": 3033
			},
			{
				"id": 31002,
				"cardId": 3,
				"cardLevel": 2,
				"cardParameterType": "param2",
				"power": 3111
			},
			{
				"id": 31003,
				"cardId": 3,
				"cardLevel": 3,
				"cardParameterType": "param2",
				"power": 3189
			},
			{
				"id": 31004,
				"cardId": 3,
				"cardLevel": 4,
				"cardParameterType": "param2",
				"power": 3267
			},
			{
				"id": 31005,
				"cardId": 3,
				"cardLevel": 5,
				"cardParameterType": "param2",
				"power": 3345
			},
			{
				"id": 31006,
				"cardId": 3,
				"cardLevel": 6,
				"cardParameterType": "param2",
				"power": 3423
			},
			{
				"id": 31007,
				"cardId": 3,
				"cardLevel": 7,
				"cardParameterType": "param2",
				"power": 3501
			},
			{
				"id": 31008,
				"cardId": 3,
				"cardLevel": 8,
				"cardParameterType": "param2",
				"power": 3579
			},
			{
				"id": 31009,
				"cardId": 3,
				"cardLevel": 9,
				"cardParameterType": "param2",
				"power": 3657
			},
			{
				"id": 31010,
				"cardId": 3,
				"cardLevel": 10,
				"cardParameterType": "param2",
				"power": 3735
			},
			{
				"id": 31011,
				"cardId": 3,
				"cardLevel": 11,
				"cardParameterType": "param2",
				"power": 3813
			},
			{
				"id": 31012,
				"cardId": 3,
				"cardLevel": 12,
				"cardParameterType": "param2",
				"power": 3891
			},
			{
				"id": 31013,
				"cardId": 3,
				"cardLevel": 13,
				"cardParameterType": "param2",
				"power": 3969
			},
			{
				"id": 31014,
				"cardId": 3,
				"cardLevel": 14,
				"cardParameterType": "param2",
				"power": 4047
			},
			{
				"id": 31015,
				"cardId": 3,
				"cardLevel": 15,
				"cardParameterType": "param2",
				"power": 4125
			},
			{
				"id": 31016,
				"cardId": 3,
				"cardLevel": 16,
				"cardParameterType": "param2",
				"power": 4203
			},
			{
				"id": 31017,
				"cardId": 3,
				"cardLevel": 17,
				"cardParameterType": "param2",
				"power": 4281
			},
			{
				"id": 31018,
				"cardId": 3,
				"cardLevel": 18,
				"cardParameterType": "param2",
				"power": 4359
			},
			{
				"id": 31019,
				"cardId": 3,
				"cardLevel": 19,
				"cardParameterType": "param2",
				"power": 4437
			},
			{
				"id": 31020,
				"cardId": 3,
				"cardLevel": 20,
				"cardParameterType": "param2",
				"power": 4515
			},
			{
				"id": 31021,
				"cardId": 3,
				"cardLevel": 21,
				"cardParameterType": "param2",
				"power": 4593
			},
			{
				"id": 31022,
				"cardId": 3,
				"cardLevel": 22,
				"cardParameterType": "param2",
				"power": 4671
			},
			{
				"id": 31023,
				"cardId": 3,
				"cardLevel": 23,
				"cardParameterType": "param2",
				"power": 4749
			},
			{
				"id": 31024,
				"cardId": 3,
				"cardLevel": 24,
				"cardParameterType": "param2",
				"power": 4827
			},
			{
				"id": 31025,
				"cardId": 3,
				"cardLevel": 25,
				"cardParameterType": "param2",
				"power": 4905
			},
			{
				"id": 31026,
				"cardId": 3,
				"cardLevel": 26,
				"cardParameterType": "param2",
				"power": 4983
			},
			{
				"id": 31027,
				"cardId": 3,
				"cardLevel": 27,
				"cardParameterType": "param2",
				"power": 5061
			},
			{
				"id": 31028,
				"cardId": 3,
				"cardLevel": 28,
				"cardParameterType": "param2",
				"power": 5139
			},
			{
				"id": 31029,
				"cardId": 3,
				"cardLevel": 29,
				"cardParameterType": "param2",
				"power": 5217
			},
			{
				"id": 31030,
				"cardId": 3,
				"cardLevel": 30,
				"cardParameterType": "param2",
				"power": 5295
			},
			{
				"id": 31031,
				"cardId": 3,
				"cardLevel": 31,
				"cardParameterType": "param2",
				"power": 5373
			},
			{
				"id": 31032,
				"cardId": 3,
				"cardLevel": 32,
				"cardParameterType": "param2",
				"power": 5451
			},
			{
				"id": 31033,
				"cardId": 3,
				"cardLevel": 33,
				"cardParameterType": "param2",
				"power": 5529
			},
			{
				"id": 31034,
				"cardId": 3,
				"cardLevel": 34,
				"cardParameterType": "param2",
				"power": 5607
			},
			{
				"id": 31035,
				"cardId": 3,
				"cardLevel": 35,
				"cardParameterType": "param2",
				"power": 5685
			},
			{
				"id": 31036,
				"cardId": 3,
				"cardLevel": 36,
				"cardParameterType": "param2",
				"power": 5763
			},
			{
				"id": 31037,
				"cardId": 3,
				"cardLevel": 37,
				"cardParameterType": "param2",
				"power": 5841
			},
			{
				"id": 31038,
				"cardId": 3,
				"cardLevel": 38,
				"cardParameterType": "param2",
				"power": 5919
			},
			{
				"id": 31039,
				"cardId": 3,
				"cardLevel": 39,
				"cardParameterType": "param2",
				"power": 5997
			},
			{
				"id": 31040,
				"cardId": 3,
				"cardLevel": 40,
				"cardParameterType": "param2",
				"power": 6075
			},
			{
				"id": 31041,
				"cardId": 3,
				"cardLevel": 41,
				"cardParameterType": "param2",
				"power": 6378
			},
			{
				"id": 31042,
				"cardId": 3,
				"cardLevel": 42,
				"cardParameterType": "param2",
				"power": 6681
			},
			{
				"id": 31043,
				"cardId": 3,
				"cardLevel": 43,
				"cardParameterType": "param2",
				"power": 6984
			},
			{
				"id": 31044,
				"cardId": 3,
				"cardLevel": 44,
				"cardParameterType": "param2",
				"power": 7287
			},
			{
				"id": 31045,
				"cardId": 3,
				"cardLevel": 45,
				"cardParameterType": "param2",
				"power": 7591
			},
			{
				"id": 31046,
				"cardId": 3,
				"cardLevel": 46,
				"cardParameterType": "param2",
				"power": 7894
			},
			{
				"id": 31047,
				"cardId": 3,
				"cardLevel": 47,
				"cardParameterType": "param2",
				"power": 8197
			},
			{
				"id": 31048,
				"cardId": 3,
				"cardLevel": 48,
				"cardParameterType": "param2",
				"power": 8500
			},
			{
				"id": 31049,
				"cardId": 3,
				"cardLevel": 49,
				"cardParameterType": "param2",
				"power": 8803
			},
			{
				"id": 31050,
				"cardId": 3,
				"cardLevel": 50,
				"cardParameterType": "param2",
				"power": 9107
			},
			{
				"id": 32001,
				"cardId": 3,
				"cardLevel": 1,
				"cardParameterType": "param3",
				"power": 3213
			},
			{
				"id": 32002,
				"cardId": 3,
				"cardLevel": 2,
				"cardParameterType": "param3",
				"power": 3295
			},
			{
				"id": 32003,
				"cardId": 3,
				"cardLevel": 3,
				"cardParameterType": "param3",
				"power": 3377
			},
			{
				"id": 32004,
				"cardId": 3,
				"cardLevel": 4,
				"cardParameterType": "param3",
				"power": 3459
			},
			{
				"id": 32005,
				"cardId": 3,
				"cardLevel": 5,
				"cardParameterType": "param3",
				"power": 3542
			},
			{
				"id": 32006,
				"cardId": 3,
				"cardLevel": 6,
				"cardParameterType": "param3",
				"power": 3624
			},
			{
				"id": 32007,
				"cardId": 3,
				"cardLevel": 7,
				"cardParameterType": "param3",
				"power": 3706
			},
			{
				"id": 32008,
				"cardId": 3,
				"cardLevel": 8,
				"cardParameterType": "param3",
				"power": 3789
			},
			{
				"id": 32009,
				"cardId": 3,
				"cardLevel": 9,
				"cardParameterType": "param3",
				"power": 3871
			},
			{
				"id": 32010,
				"cardId": 3,
				"cardLevel": 10,
				"cardParameterType": "param3",
				"power": 3953
			},
			{
				"id": 32011,
				"cardId": 3,
				"cardLevel": 11,
				"cardParameterType": "param3",
				"power": 4036
			},
			{
				"id": 32012,
				"cardId": 3,
				"cardLevel": 12,
				"cardParameterType": "param3",
				"power": 4118
			},
			{
				"id": 32013,
				"cardId": 3,
				"cardLevel": 13,
				"cardParameterType": "param3",
				"power": 4200
			},
			{
				"id": 32014,
				"cardId": 3,
				"cardLevel": 14,
				"cardParameterType": "param3",
				"power": 4283
			},
			{
				"id": 32015,
				"cardId": 3,
				"cardLevel": 15,
				"cardParameterType": "param3",
				"power": 4365
			},
			{
				"id": 32016,
				"cardId": 3,
				"cardLevel": 16,
				"cardParameterType": "param3",
				"power": 4447
			},
			{
				"id": 32017,
				"cardId": 3,
				"cardLevel": 17,
				"cardParameterType": "param3",
				"power": 4529
			},
			{
				"id": 32018,
				"cardId": 3,
				"cardLevel": 18,
				"cardParameterType": "param3",
				"power": 4612
			},
			{
				"id": 32019,
				"cardId": 3,
				"cardLevel": 19,
				"cardParameterType": "param3",
				"power": 4694
			},
			{
				"id": 32020,
				"cardId": 3,
				"cardLevel": 20,
				"cardParameterType": "param3",
				"power": 4776
			},
			{
				"id": 32021,
				"cardId": 3,
				"cardLevel": 21,
				"cardParameterType": "param3",
				"power": 4859
			},
			{
				"id": 32022,
				"cardId": 3,
				"cardLevel": 22,
				"cardParameterType": "param3",
				"power": 4941
			},
			{
				"id": 32023,
				"cardId": 3,
				"cardLevel": 23,
				"cardParameterType": "param3",
				"power": 5023
			},
			{
				"id": 32024,
				"cardId": 3,
				"cardLevel": 24,
				"cardParameterType": "param3",
				"power": 5106
			},
			{
				"id": 32025,
				"cardId": 3,
				"cardLevel": 25,
				"cardParameterType": "param3",
				"power": 5188
			},
			{
				"id": 32026,
				"cardId": 3,
				"cardLevel": 26,
				"cardParameterType": "param3",
				"power": 5270
			},
			{
				"id": 32027,
				"cardId": 3,
				"cardLevel": 27,
				"cardParameterType": "param3",
				"power": 5353
			},
			{
				"id": 32028,
				"cardId": 3,
				"cardLevel": 28,
				"cardParameterType": "param3",
				"power": 5435
			},
			{
				"id": 32029,
				"cardId": 3,
				"cardLevel": 29,
				"cardParameterType": "param3",
				"power": 5517
			},
			{
				"id": 32030,
				"cardId": 3,
				"cardLevel": 30,
				"cardParameterType": "param3",
				"power": 5599
			},
			{
				"id": 32031,
				"cardId": 3,
				"cardLevel": 31,
				"cardParameterType": "param3",
				"power": 5682
			},
			{
				"id": 32032,
				"cardId": 3,
				"cardLevel": 32,
				"cardParameterType": "param3",
				"power": 5764
			},
			{
				"id": 32033,
				"cardId": 3,
				"cardLevel": 33,
				"cardParameterType": "param3",
				"power": 5846
			},
			{
				"id": 32034,
				"cardId": 3,
				"cardLevel": 34,
				"cardParameterType": "param3",
				"power": 5929
			},
			{
				"id": 32035,
				"cardId": 3,
				"cardLevel": 35,
				"cardParameterType": "param3",
				"power": 6011
			},
			{
				"id": 32036,
				"cardId": 3,
				"cardLevel": 36,
				"cardParameterType": "param3",
				"power": 6093
			},
			{
				"id": 32037,
				"cardId": 3,
				"cardLevel": 37,
				"cardParameterType": "param3",
				"power": 6176
			},
			{
				"id": 32038,
				"cardId": 3,
				"cardLevel": 38,
				"cardParameterType": "param3",
				"power": 6258
			},
			{
				"id": 32039,
				"cardId": 3,
				"cardLevel": 39,
				"cardParameterType": "param3",
				"power": 6340
			},
			{
				"id": 32040,
				"cardId": 3,
				"cardLevel": 40,
				"cardParameterType": "param3",
				"power": 6423
			},
			{
				"id": 32041,
				"cardId": 3,
				"cardLevel": 41,
				"cardParameterType": "param3",
				"power": 6744
			},
			{
				"id": 32042,
				"cardId": 3,
				"cardLevel": 42,
				"cardParameterType": "param3",
				"power": 7065
			},
			{
				"id": 32043,
				"cardId": 3,
				"cardLevel": 43,
				"cardParameterType": "param3",
				"power": 7387
			},
			{
				"id": 32044,
				"cardId": 3,
				"cardLevel": 44,
				"cardParameterType": "param3",
				"power": 7708
			},
			{
				"id": 32045,
				"cardId": 3,
				"cardLevel": 45,
				"cardParameterType": "param3",
				"power": 8030
			},
			{
				"id": 32046,
				"cardId": 3,
				"cardLevel": 46,
				"cardParameterType": "param3",
				"power": 8351
			},
			{
				"id": 32047,
				"cardId": 3,
				"cardLevel": 47,
				"cardParameterType": "param3",
				"power": 8672
			},
			{
				"id": 32048,
				"cardId": 3,
				"cardLevel": 48,
				"cardParameterType": "param3",
				"power": 8994
			},
			{
				"id": 32049,
				"cardId": 3,
				"cardLevel": 49,
				"cardParameterType": "param3",
				"power": 9315
			},
			{
				"id": 32050,
				"cardId": 3,
				"cardLevel": 50,
				"cardParameterType": "param3",
				"power": 9637
			}
		],
		"specialTrainingCosts": [
			{
				"cardId": 3,
				"seq": 1,
				"cost": {
					"resourceId": 10,
					"resourceType": "material",
					"resourceLevel": 0,
					"quantity": 100
				}
			},
			{
				"cardId": 3,
				"seq": 2,
				"cost": {
					"resourceId": 14,
					"resourceType": "material",
					"resourceLevel": 0,
					"quantity": 50
				}
			}
		],
		"masterLessonAchieveResources": [],
		"iconImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/thumbnail/chara_rip/res001_no003_normal.webp",
		"cardImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/member/res001_no003_rip/card_normal.webp",
		"cardTrimImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/member_cutout_trm/res001_no003_rip/normal.webp",
		"iconATImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/thumbnail/chara_rip/res001_no003_after_training.webp",
		"cardATImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/member/res001_no003_rip/card_after_training.webp",
		"cardATTrimImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/member_cutout_trm/res001_no003_rip/after_training.webp",
		"fullIconImg": "https://drive.google.com/uc?id=1FQzlM1TnWfd-nSQbhFJsadgdL1xRf296&usp=sharing",
		"fullATIconImg": "https://drive.google.com/uc?id=17n9Z5hUblO8ci17CDKCZEtMIk9XF2VQ-&usp=sharing"
	},
	{
		"id": 4,
		"seq": 40,
		"characterId": 1,
		"cardRarityType": "rarity_4",
		"specialTrainingPower1BonusFixed": 400,
		"specialTrainingPower2BonusFixed": 400,
		"specialTrainingPower3BonusFixed": 400,
		"attr": "cute",
		"supportUnit": "none",
		"skillId": 10,
		"cardSkillName": "不安を拭い去って",
		"prefix": "夜明け前の語らい",
		"assetbundleName": "res001_no004",
		"gachaPhrase": "聞いてくれてありがとう、ミク",
		"flavorText": "フレーバーテキスト",
		"releaseAt": 1546322400000,
		"cardParameters": [
			{
				"id": 40001,
				"cardId": 4,
				"cardLevel": 1,
				"cardParameterType": "param1",
				"power": 3578
			},
			{
				"id": 40002,
				"cardId": 4,
				"cardLevel": 2,
				"cardParameterType": "param1",
				"power": 3651
			},
			{
				"id": 40003,
				"cardId": 4,
				"cardLevel": 3,
				"cardParameterType": "param1",
				"power": 3724
			},
			{
				"id": 40004,
				"cardId": 4,
				"cardLevel": 4,
				"cardParameterType": "param1",
				"power": 3797
			},
			{
				"id": 40005,
				"cardId": 4,
				"cardLevel": 5,
				"cardParameterType": "param1",
				"power": 3870
			},
			{
				"id": 40006,
				"cardId": 4,
				"cardLevel": 6,
				"cardParameterType": "param1",
				"power": 3943
			},
			{
				"id": 40007,
				"cardId": 4,
				"cardLevel": 7,
				"cardParameterType": "param1",
				"power": 4016
			},
			{
				"id": 40008,
				"cardId": 4,
				"cardLevel": 8,
				"cardParameterType": "param1",
				"power": 4089
			},
			{
				"id": 40009,
				"cardId": 4,
				"cardLevel": 9,
				"cardParameterType": "param1",
				"power": 4162
			},
			{
				"id": 40010,
				"cardId": 4,
				"cardLevel": 10,
				"cardParameterType": "param1",
				"power": 4235
			},
			{
				"id": 40011,
				"cardId": 4,
				"cardLevel": 11,
				"cardParameterType": "param1",
				"power": 4308
			},
			{
				"id": 40012,
				"cardId": 4,
				"cardLevel": 12,
				"cardParameterType": "param1",
				"power": 4381
			},
			{
				"id": 40013,
				"cardId": 4,
				"cardLevel": 13,
				"cardParameterType": "param1",
				"power": 4454
			},
			{
				"id": 40014,
				"cardId": 4,
				"cardLevel": 14,
				"cardParameterType": "param1",
				"power": 4527
			},
			{
				"id": 40015,
				"cardId": 4,
				"cardLevel": 15,
				"cardParameterType": "param1",
				"power": 4600
			},
			{
				"id": 40016,
				"cardId": 4,
				"cardLevel": 16,
				"cardParameterType": "param1",
				"power": 4673
			},
			{
				"id": 40017,
				"cardId": 4,
				"cardLevel": 17,
				"cardParameterType": "param1",
				"power": 4746
			},
			{
				"id": 40018,
				"cardId": 4,
				"cardLevel": 18,
				"cardParameterType": "param1",
				"power": 4819
			},
			{
				"id": 40019,
				"cardId": 4,
				"cardLevel": 19,
				"cardParameterType": "param1",
				"power": 4892
			},
			{
				"id": 40020,
				"cardId": 4,
				"cardLevel": 20,
				"cardParameterType": "param1",
				"power": 4965
			},
			{
				"id": 40021,
				"cardId": 4,
				"cardLevel": 21,
				"cardParameterType": "param1",
				"power": 5038
			},
			{
				"id": 40022,
				"cardId": 4,
				"cardLevel": 22,
				"cardParameterType": "param1",
				"power": 5111
			},
			{
				"id": 40023,
				"cardId": 4,
				"cardLevel": 23,
				"cardParameterType": "param1",
				"power": 5184
			},
			{
				"id": 40024,
				"cardId": 4,
				"cardLevel": 24,
				"cardParameterType": "param1",
				"power": 5257
			},
			{
				"id": 40025,
				"cardId": 4,
				"cardLevel": 25,
				"cardParameterType": "param1",
				"power": 5330
			},
			{
				"id": 40026,
				"cardId": 4,
				"cardLevel": 26,
				"cardParameterType": "param1",
				"power": 5404
			},
			{
				"id": 40027,
				"cardId": 4,
				"cardLevel": 27,
				"cardParameterType": "param1",
				"power": 5477
			},
			{
				"id": 40028,
				"cardId": 4,
				"cardLevel": 28,
				"cardParameterType": "param1",
				"power": 5550
			},
			{
				"id": 40029,
				"cardId": 4,
				"cardLevel": 29,
				"cardParameterType": "param1",
				"power": 5623
			},
			{
				"id": 40030,
				"cardId": 4,
				"cardLevel": 30,
				"cardParameterType": "param1",
				"power": 5696
			},
			{
				"id": 40031,
				"cardId": 4,
				"cardLevel": 31,
				"cardParameterType": "param1",
				"power": 5769
			},
			{
				"id": 40032,
				"cardId": 4,
				"cardLevel": 32,
				"cardParameterType": "param1",
				"power": 5842
			},
			{
				"id": 40033,
				"cardId": 4,
				"cardLevel": 33,
				"cardParameterType": "param1",
				"power": 5915
			},
			{
				"id": 40034,
				"cardId": 4,
				"cardLevel": 34,
				"cardParameterType": "param1",
				"power": 5988
			},
			{
				"id": 40035,
				"cardId": 4,
				"cardLevel": 35,
				"cardParameterType": "param1",
				"power": 6061
			},
			{
				"id": 40036,
				"cardId": 4,
				"cardLevel": 36,
				"cardParameterType": "param1",
				"power": 6134
			},
			{
				"id": 40037,
				"cardId": 4,
				"cardLevel": 37,
				"cardParameterType": "param1",
				"power": 6207
			},
			{
				"id": 40038,
				"cardId": 4,
				"cardLevel": 38,
				"cardParameterType": "param1",
				"power": 6280
			},
			{
				"id": 40039,
				"cardId": 4,
				"cardLevel": 39,
				"cardParameterType": "param1",
				"power": 6353
			},
			{
				"id": 40040,
				"cardId": 4,
				"cardLevel": 40,
				"cardParameterType": "param1",
				"power": 6426
			},
			{
				"id": 40041,
				"cardId": 4,
				"cardLevel": 41,
				"cardParameterType": "param1",
				"power": 6499
			},
			{
				"id": 40042,
				"cardId": 4,
				"cardLevel": 42,
				"cardParameterType": "param1",
				"power": 6572
			},
			{
				"id": 40043,
				"cardId": 4,
				"cardLevel": 43,
				"cardParameterType": "param1",
				"power": 6645
			},
			{
				"id": 40044,
				"cardId": 4,
				"cardLevel": 44,
				"cardParameterType": "param1",
				"power": 6718
			},
			{
				"id": 40045,
				"cardId": 4,
				"cardLevel": 45,
				"cardParameterType": "param1",
				"power": 6791
			},
			{
				"id": 40046,
				"cardId": 4,
				"cardLevel": 46,
				"cardParameterType": "param1",
				"power": 6864
			},
			{
				"id": 40047,
				"cardId": 4,
				"cardLevel": 47,
				"cardParameterType": "param1",
				"power": 6937
			},
			{
				"id": 40048,
				"cardId": 4,
				"cardLevel": 48,
				"cardParameterType": "param1",
				"power": 7010
			},
			{
				"id": 40049,
				"cardId": 4,
				"cardLevel": 49,
				"cardParameterType": "param1",
				"power": 7083
			},
			{
				"id": 40050,
				"cardId": 4,
				"cardLevel": 50,
				"cardParameterType": "param1",
				"power": 7157
			},
			{
				"id": 40051,
				"cardId": 4,
				"cardLevel": 51,
				"cardParameterType": "param1",
				"power": 7514
			},
			{
				"id": 40052,
				"cardId": 4,
				"cardLevel": 52,
				"cardParameterType": "param1",
				"power": 7872
			},
			{
				"id": 40053,
				"cardId": 4,
				"cardLevel": 53,
				"cardParameterType": "param1",
				"power": 8230
			},
			{
				"id": 40054,
				"cardId": 4,
				"cardLevel": 54,
				"cardParameterType": "param1",
				"power": 8588
			},
			{
				"id": 40055,
				"cardId": 4,
				"cardLevel": 55,
				"cardParameterType": "param1",
				"power": 8946
			},
			{
				"id": 40056,
				"cardId": 4,
				"cardLevel": 56,
				"cardParameterType": "param1",
				"power": 9304
			},
			{
				"id": 40057,
				"cardId": 4,
				"cardLevel": 57,
				"cardParameterType": "param1",
				"power": 9662
			},
			{
				"id": 40058,
				"cardId": 4,
				"cardLevel": 58,
				"cardParameterType": "param1",
				"power": 10020
			},
			{
				"id": 40059,
				"cardId": 4,
				"cardLevel": 59,
				"cardParameterType": "param1",
				"power": 10378
			},
			{
				"id": 40060,
				"cardId": 4,
				"cardLevel": 60,
				"cardParameterType": "param1",
				"power": 10736
			},
			{
				"id": 41001,
				"cardId": 4,
				"cardLevel": 1,
				"cardParameterType": "param2",
				"power": 3125
			},
			{
				"id": 41002,
				"cardId": 4,
				"cardLevel": 2,
				"cardParameterType": "param2",
				"power": 3188
			},
			{
				"id": 41003,
				"cardId": 4,
				"cardLevel": 3,
				"cardParameterType": "param2",
				"power": 3252
			},
			{
				"id": 41004,
				"cardId": 4,
				"cardLevel": 4,
				"cardParameterType": "param2",
				"power": 3316
			},
			{
				"id": 41005,
				"cardId": 4,
				"cardLevel": 5,
				"cardParameterType": "param2",
				"power": 3380
			},
			{
				"id": 41006,
				"cardId": 4,
				"cardLevel": 6,
				"cardParameterType": "param2",
				"power": 3443
			},
			{
				"id": 41007,
				"cardId": 4,
				"cardLevel": 7,
				"cardParameterType": "param2",
				"power": 3507
			},
			{
				"id": 41008,
				"cardId": 4,
				"cardLevel": 8,
				"cardParameterType": "param2",
				"power": 3571
			},
			{
				"id": 41009,
				"cardId": 4,
				"cardLevel": 9,
				"cardParameterType": "param2",
				"power": 3635
			},
			{
				"id": 41010,
				"cardId": 4,
				"cardLevel": 10,
				"cardParameterType": "param2",
				"power": 3698
			},
			{
				"id": 41011,
				"cardId": 4,
				"cardLevel": 11,
				"cardParameterType": "param2",
				"power": 3762
			},
			{
				"id": 41012,
				"cardId": 4,
				"cardLevel": 12,
				"cardParameterType": "param2",
				"power": 3826
			},
			{
				"id": 41013,
				"cardId": 4,
				"cardLevel": 13,
				"cardParameterType": "param2",
				"power": 3890
			},
			{
				"id": 41014,
				"cardId": 4,
				"cardLevel": 14,
				"cardParameterType": "param2",
				"power": 3953
			},
			{
				"id": 41015,
				"cardId": 4,
				"cardLevel": 15,
				"cardParameterType": "param2",
				"power": 4017
			},
			{
				"id": 41016,
				"cardId": 4,
				"cardLevel": 16,
				"cardParameterType": "param2",
				"power": 4081
			},
			{
				"id": 41017,
				"cardId": 4,
				"cardLevel": 17,
				"cardParameterType": "param2",
				"power": 4145
			},
			{
				"id": 41018,
				"cardId": 4,
				"cardLevel": 18,
				"cardParameterType": "param2",
				"power": 4208
			},
			{
				"id": 41019,
				"cardId": 4,
				"cardLevel": 19,
				"cardParameterType": "param2",
				"power": 4272
			},
			{
				"id": 41020,
				"cardId": 4,
				"cardLevel": 20,
				"cardParameterType": "param2",
				"power": 4336
			},
			{
				"id": 41021,
				"cardId": 4,
				"cardLevel": 21,
				"cardParameterType": "param2",
				"power": 4400
			},
			{
				"id": 41022,
				"cardId": 4,
				"cardLevel": 22,
				"cardParameterType": "param2",
				"power": 4463
			},
			{
				"id": 41023,
				"cardId": 4,
				"cardLevel": 23,
				"cardParameterType": "param2",
				"power": 4527
			},
			{
				"id": 41024,
				"cardId": 4,
				"cardLevel": 24,
				"cardParameterType": "param2",
				"power": 4591
			},
			{
				"id": 41025,
				"cardId": 4,
				"cardLevel": 25,
				"cardParameterType": "param2",
				"power": 4655
			},
			{
				"id": 41026,
				"cardId": 4,
				"cardLevel": 26,
				"cardParameterType": "param2",
				"power": 4718
			},
			{
				"id": 41027,
				"cardId": 4,
				"cardLevel": 27,
				"cardParameterType": "param2",
				"power": 4782
			},
			{
				"id": 41028,
				"cardId": 4,
				"cardLevel": 28,
				"cardParameterType": "param2",
				"power": 4846
			},
			{
				"id": 41029,
				"cardId": 4,
				"cardLevel": 29,
				"cardParameterType": "param2",
				"power": 4910
			},
			{
				"id": 41030,
				"cardId": 4,
				"cardLevel": 30,
				"cardParameterType": "param2",
				"power": 4973
			},
			{
				"id": 41031,
				"cardId": 4,
				"cardLevel": 31,
				"cardParameterType": "param2",
				"power": 5037
			},
			{
				"id": 41032,
				"cardId": 4,
				"cardLevel": 32,
				"cardParameterType": "param2",
				"power": 5101
			},
			{
				"id": 41033,
				"cardId": 4,
				"cardLevel": 33,
				"cardParameterType": "param2",
				"power": 5165
			},
			{
				"id": 41034,
				"cardId": 4,
				"cardLevel": 34,
				"cardParameterType": "param2",
				"power": 5228
			},
			{
				"id": 41035,
				"cardId": 4,
				"cardLevel": 35,
				"cardParameterType": "param2",
				"power": 5292
			},
			{
				"id": 41036,
				"cardId": 4,
				"cardLevel": 36,
				"cardParameterType": "param2",
				"power": 5356
			},
			{
				"id": 41037,
				"cardId": 4,
				"cardLevel": 37,
				"cardParameterType": "param2",
				"power": 5420
			},
			{
				"id": 41038,
				"cardId": 4,
				"cardLevel": 38,
				"cardParameterType": "param2",
				"power": 5483
			},
			{
				"id": 41039,
				"cardId": 4,
				"cardLevel": 39,
				"cardParameterType": "param2",
				"power": 5547
			},
			{
				"id": 41040,
				"cardId": 4,
				"cardLevel": 40,
				"cardParameterType": "param2",
				"power": 5611
			},
			{
				"id": 41041,
				"cardId": 4,
				"cardLevel": 41,
				"cardParameterType": "param2",
				"power": 5675
			},
			{
				"id": 41042,
				"cardId": 4,
				"cardLevel": 42,
				"cardParameterType": "param2",
				"power": 5738
			},
			{
				"id": 41043,
				"cardId": 4,
				"cardLevel": 43,
				"cardParameterType": "param2",
				"power": 5802
			},
			{
				"id": 41044,
				"cardId": 4,
				"cardLevel": 44,
				"cardParameterType": "param2",
				"power": 5866
			},
			{
				"id": 41045,
				"cardId": 4,
				"cardLevel": 45,
				"cardParameterType": "param2",
				"power": 5930
			},
			{
				"id": 41046,
				"cardId": 4,
				"cardLevel": 46,
				"cardParameterType": "param2",
				"power": 5993
			},
			{
				"id": 41047,
				"cardId": 4,
				"cardLevel": 47,
				"cardParameterType": "param2",
				"power": 6057
			},
			{
				"id": 41048,
				"cardId": 4,
				"cardLevel": 48,
				"cardParameterType": "param2",
				"power": 6121
			},
			{
				"id": 41049,
				"cardId": 4,
				"cardLevel": 49,
				"cardParameterType": "param2",
				"power": 6185
			},
			{
				"id": 41050,
				"cardId": 4,
				"cardLevel": 50,
				"cardParameterType": "param2",
				"power": 6249
			},
			{
				"id": 41051,
				"cardId": 4,
				"cardLevel": 51,
				"cardParameterType": "param2",
				"power": 6561
			},
			{
				"id": 41052,
				"cardId": 4,
				"cardLevel": 52,
				"cardParameterType": "param2",
				"power": 6874
			},
			{
				"id": 41053,
				"cardId": 4,
				"cardLevel": 53,
				"cardParameterType": "param2",
				"power": 7186
			},
			{
				"id": 41054,
				"cardId": 4,
				"cardLevel": 54,
				"cardParameterType": "param2",
				"power": 7499
			},
			{
				"id": 41055,
				"cardId": 4,
				"cardLevel": 55,
				"cardParameterType": "param2",
				"power": 7811
			},
			{
				"id": 41056,
				"cardId": 4,
				"cardLevel": 56,
				"cardParameterType": "param2",
				"power": 8124
			},
			{
				"id": 41057,
				"cardId": 4,
				"cardLevel": 57,
				"cardParameterType": "param2",
				"power": 8436
			},
			{
				"id": 41058,
				"cardId": 4,
				"cardLevel": 58,
				"cardParameterType": "param2",
				"power": 8749
			},
			{
				"id": 41059,
				"cardId": 4,
				"cardLevel": 59,
				"cardParameterType": "param2",
				"power": 9061
			},
			{
				"id": 41060,
				"cardId": 4,
				"cardLevel": 60,
				"cardParameterType": "param2",
				"power": 9374
			},
			{
				"id": 42001,
				"cardId": 4,
				"cardLevel": 1,
				"cardParameterType": "param3",
				"power": 3478
			},
			{
				"id": 42002,
				"cardId": 4,
				"cardLevel": 2,
				"cardParameterType": "param3",
				"power": 3548
			},
			{
				"id": 42003,
				"cardId": 4,
				"cardLevel": 3,
				"cardParameterType": "param3",
				"power": 3619
			},
			{
				"id": 42004,
				"cardId": 4,
				"cardLevel": 4,
				"cardParameterType": "param3",
				"power": 3690
			},
			{
				"id": 42005,
				"cardId": 4,
				"cardLevel": 5,
				"cardParameterType": "param3",
				"power": 3761
			},
			{
				"id": 42006,
				"cardId": 4,
				"cardLevel": 6,
				"cardParameterType": "param3",
				"power": 3832
			},
			{
				"id": 42007,
				"cardId": 4,
				"cardLevel": 7,
				"cardParameterType": "param3",
				"power": 3903
			},
			{
				"id": 42008,
				"cardId": 4,
				"cardLevel": 8,
				"cardParameterType": "param3",
				"power": 3974
			},
			{
				"id": 42009,
				"cardId": 4,
				"cardLevel": 9,
				"cardParameterType": "param3",
				"power": 4045
			},
			{
				"id": 42010,
				"cardId": 4,
				"cardLevel": 10,
				"cardParameterType": "param3",
				"power": 4116
			},
			{
				"id": 42011,
				"cardId": 4,
				"cardLevel": 11,
				"cardParameterType": "param3",
				"power": 4187
			},
			{
				"id": 42012,
				"cardId": 4,
				"cardLevel": 12,
				"cardParameterType": "param3",
				"power": 4258
			},
			{
				"id": 42013,
				"cardId": 4,
				"cardLevel": 13,
				"cardParameterType": "param3",
				"power": 4329
			},
			{
				"id": 42014,
				"cardId": 4,
				"cardLevel": 14,
				"cardParameterType": "param3",
				"power": 4400
			},
			{
				"id": 42015,
				"cardId": 4,
				"cardLevel": 15,
				"cardParameterType": "param3",
				"power": 4471
			},
			{
				"id": 42016,
				"cardId": 4,
				"cardLevel": 16,
				"cardParameterType": "param3",
				"power": 4542
			},
			{
				"id": 42017,
				"cardId": 4,
				"cardLevel": 17,
				"cardParameterType": "param3",
				"power": 4613
			},
			{
				"id": 42018,
				"cardId": 4,
				"cardLevel": 18,
				"cardParameterType": "param3",
				"power": 4684
			},
			{
				"id": 42019,
				"cardId": 4,
				"cardLevel": 19,
				"cardParameterType": "param3",
				"power": 4755
			},
			{
				"id": 42020,
				"cardId": 4,
				"cardLevel": 20,
				"cardParameterType": "param3",
				"power": 4826
			},
			{
				"id": 42021,
				"cardId": 4,
				"cardLevel": 21,
				"cardParameterType": "param3",
				"power": 4897
			},
			{
				"id": 42022,
				"cardId": 4,
				"cardLevel": 22,
				"cardParameterType": "param3",
				"power": 4968
			},
			{
				"id": 42023,
				"cardId": 4,
				"cardLevel": 23,
				"cardParameterType": "param3",
				"power": 5039
			},
			{
				"id": 42024,
				"cardId": 4,
				"cardLevel": 24,
				"cardParameterType": "param3",
				"power": 5110
			},
			{
				"id": 42025,
				"cardId": 4,
				"cardLevel": 25,
				"cardParameterType": "param3",
				"power": 5181
			},
			{
				"id": 42026,
				"cardId": 4,
				"cardLevel": 26,
				"cardParameterType": "param3",
				"power": 5251
			},
			{
				"id": 42027,
				"cardId": 4,
				"cardLevel": 27,
				"cardParameterType": "param3",
				"power": 5322
			},
			{
				"id": 42028,
				"cardId": 4,
				"cardLevel": 28,
				"cardParameterType": "param3",
				"power": 5393
			},
			{
				"id": 42029,
				"cardId": 4,
				"cardLevel": 29,
				"cardParameterType": "param3",
				"power": 5464
			},
			{
				"id": 42030,
				"cardId": 4,
				"cardLevel": 30,
				"cardParameterType": "param3",
				"power": 5535
			},
			{
				"id": 42031,
				"cardId": 4,
				"cardLevel": 31,
				"cardParameterType": "param3",
				"power": 5606
			},
			{
				"id": 42032,
				"cardId": 4,
				"cardLevel": 32,
				"cardParameterType": "param3",
				"power": 5677
			},
			{
				"id": 42033,
				"cardId": 4,
				"cardLevel": 33,
				"cardParameterType": "param3",
				"power": 5748
			},
			{
				"id": 42034,
				"cardId": 4,
				"cardLevel": 34,
				"cardParameterType": "param3",
				"power": 5819
			},
			{
				"id": 42035,
				"cardId": 4,
				"cardLevel": 35,
				"cardParameterType": "param3",
				"power": 5890
			},
			{
				"id": 42036,
				"cardId": 4,
				"cardLevel": 36,
				"cardParameterType": "param3",
				"power": 5961
			},
			{
				"id": 42037,
				"cardId": 4,
				"cardLevel": 37,
				"cardParameterType": "param3",
				"power": 6032
			},
			{
				"id": 42038,
				"cardId": 4,
				"cardLevel": 38,
				"cardParameterType": "param3",
				"power": 6103
			},
			{
				"id": 42039,
				"cardId": 4,
				"cardLevel": 39,
				"cardParameterType": "param3",
				"power": 6174
			},
			{
				"id": 42040,
				"cardId": 4,
				"cardLevel": 40,
				"cardParameterType": "param3",
				"power": 6245
			},
			{
				"id": 42041,
				"cardId": 4,
				"cardLevel": 41,
				"cardParameterType": "param3",
				"power": 6316
			},
			{
				"id": 42042,
				"cardId": 4,
				"cardLevel": 42,
				"cardParameterType": "param3",
				"power": 6387
			},
			{
				"id": 42043,
				"cardId": 4,
				"cardLevel": 43,
				"cardParameterType": "param3",
				"power": 6458
			},
			{
				"id": 42044,
				"cardId": 4,
				"cardLevel": 44,
				"cardParameterType": "param3",
				"power": 6529
			},
			{
				"id": 42045,
				"cardId": 4,
				"cardLevel": 45,
				"cardParameterType": "param3",
				"power": 6600
			},
			{
				"id": 42046,
				"cardId": 4,
				"cardLevel": 46,
				"cardParameterType": "param3",
				"power": 6671
			},
			{
				"id": 42047,
				"cardId": 4,
				"cardLevel": 47,
				"cardParameterType": "param3",
				"power": 6742
			},
			{
				"id": 42048,
				"cardId": 4,
				"cardLevel": 48,
				"cardParameterType": "param3",
				"power": 6813
			},
			{
				"id": 42049,
				"cardId": 4,
				"cardLevel": 49,
				"cardParameterType": "param3",
				"power": 6884
			},
			{
				"id": 42050,
				"cardId": 4,
				"cardLevel": 50,
				"cardParameterType": "param3",
				"power": 6955
			},
			{
				"id": 42051,
				"cardId": 4,
				"cardLevel": 51,
				"cardParameterType": "param3",
				"power": 7303
			},
			{
				"id": 42052,
				"cardId": 4,
				"cardLevel": 52,
				"cardParameterType": "param3",
				"power": 7651
			},
			{
				"id": 42053,
				"cardId": 4,
				"cardLevel": 53,
				"cardParameterType": "param3",
				"power": 7999
			},
			{
				"id": 42054,
				"cardId": 4,
				"cardLevel": 54,
				"cardParameterType": "param3",
				"power": 8347
			},
			{
				"id": 42055,
				"cardId": 4,
				"cardLevel": 55,
				"cardParameterType": "param3",
				"power": 8695
			},
			{
				"id": 42056,
				"cardId": 4,
				"cardLevel": 56,
				"cardParameterType": "param3",
				"power": 9043
			},
			{
				"id": 42057,
				"cardId": 4,
				"cardLevel": 57,
				"cardParameterType": "param3",
				"power": 9391
			},
			{
				"id": 42058,
				"cardId": 4,
				"cardLevel": 58,
				"cardParameterType": "param3",
				"power": 9739
			},
			{
				"id": 42059,
				"cardId": 4,
				"cardLevel": 59,
				"cardParameterType": "param3",
				"power": 10087
			},
			{
				"id": 42060,
				"cardId": 4,
				"cardLevel": 60,
				"cardParameterType": "param3",
				"power": 10435
			}
		],
		"specialTrainingCosts": [
			{
				"cardId": 4,
				"seq": 1,
				"cost": {
					"resourceId": 6,
					"resourceType": "material",
					"resourceLevel": 0,
					"quantity": 200
				}
			},
			{
				"cardId": 4,
				"seq": 2,
				"cost": {
					"resourceId": 14,
					"resourceType": "material",
					"resourceLevel": 0,
					"quantity": 100
				}
			}
		],
		"masterLessonAchieveResources": [
			{
				"releaseConditionId": 60010,
				"cardId": 4,
				"masterRank": 0,
				"resources": []
			},
			{
				"releaseConditionId": 60011,
				"cardId": 4,
				"masterRank": 1,
				"resources": []
			},
			{
				"releaseConditionId": 60012,
				"cardId": 4,
				"masterRank": 3,
				"resources": []
			},
			{
				"releaseConditionId": 60013,
				"cardId": 4,
				"masterRank": 5,
				"resources": []
			}
		],
		"iconImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/thumbnail/chara_rip/res001_no004_normal.webp",
		"cardImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/member/res001_no004_rip/card_normal.webp",
		"cardTrimImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/member_cutout_trm/res001_no004_rip/normal.webp",
		"iconATImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/thumbnail/chara_rip/res001_no004_after_training.webp",
		"cardATImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/member/res001_no004_rip/card_after_training.webp",
		"cardATTrimImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/member_cutout_trm/res001_no004_rip/after_training.webp",
		"fullIconImg": "https://drive.google.com/uc?id=1ZChf_0tg-4QbC6z04uUmvTP7tXxEhy5b&usp=sharing",
		"fullATIconImg": "https://drive.google.com/uc?id=1zQQ5YGeQCZjxPsHKEucgutOHmWX1I52e&usp=sharing"
	},
	{
		"id": 5,
		"seq": 50,
		"characterId": 2,
		"cardRarityType": "rarity_1",
		"specialTrainingPower1BonusFixed": 0,
		"specialTrainingPower2BonusFixed": 0,
		"specialTrainingPower3BonusFixed": 0,
		"attr": "cute",
		"supportUnit": "none",
		"skillId": 1,
		"cardSkillName": "青春しよう！",
		"prefix": "いつも明るいムードメーカー",
		"assetbundleName": "res002_no001",
		"gachaPhrase": "-",
		"flavorText": "フレーバーテキスト",
		"releaseAt": 1546322400000,
		"cardParameters": [
			{
				"id": 50001,
				"cardId": 5,
				"cardLevel": 1,
				"cardParameterType": "param1",
				"power": 999
			},
			{
				"id": 50002,
				"cardId": 5,
				"cardLevel": 2,
				"cardParameterType": "param1",
				"power": 1077
			},
			{
				"id": 50003,
				"cardId": 5,
				"cardLevel": 3,
				"cardParameterType": "param1",
				"power": 1156
			},
			{
				"id": 50004,
				"cardId": 5,
				"cardLevel": 4,
				"cardParameterType": "param1",
				"power": 1235
			},
			{
				"id": 50005,
				"cardId": 5,
				"cardLevel": 5,
				"cardParameterType": "param1",
				"power": 1314
			},
			{
				"id": 50006,
				"cardId": 5,
				"cardLevel": 6,
				"cardParameterType": "param1",
				"power": 1393
			},
			{
				"id": 50007,
				"cardId": 5,
				"cardLevel": 7,
				"cardParameterType": "param1",
				"power": 1472
			},
			{
				"id": 50008,
				"cardId": 5,
				"cardLevel": 8,
				"cardParameterType": "param1",
				"power": 1551
			},
			{
				"id": 50009,
				"cardId": 5,
				"cardLevel": 9,
				"cardParameterType": "param1",
				"power": 1630
			},
			{
				"id": 50010,
				"cardId": 5,
				"cardLevel": 10,
				"cardParameterType": "param1",
				"power": 1709
			},
			{
				"id": 50011,
				"cardId": 5,
				"cardLevel": 11,
				"cardParameterType": "param1",
				"power": 1787
			},
			{
				"id": 50012,
				"cardId": 5,
				"cardLevel": 12,
				"cardParameterType": "param1",
				"power": 1866
			},
			{
				"id": 50013,
				"cardId": 5,
				"cardLevel": 13,
				"cardParameterType": "param1",
				"power": 1945
			},
			{
				"id": 50014,
				"cardId": 5,
				"cardLevel": 14,
				"cardParameterType": "param1",
				"power": 2024
			},
			{
				"id": 50015,
				"cardId": 5,
				"cardLevel": 15,
				"cardParameterType": "param1",
				"power": 2103
			},
			{
				"id": 50016,
				"cardId": 5,
				"cardLevel": 16,
				"cardParameterType": "param1",
				"power": 2182
			},
			{
				"id": 50017,
				"cardId": 5,
				"cardLevel": 17,
				"cardParameterType": "param1",
				"power": 2261
			},
			{
				"id": 50018,
				"cardId": 5,
				"cardLevel": 18,
				"cardParameterType": "param1",
				"power": 2340
			},
			{
				"id": 50019,
				"cardId": 5,
				"cardLevel": 19,
				"cardParameterType": "param1",
				"power": 2419
			},
			{
				"id": 50020,
				"cardId": 5,
				"cardLevel": 20,
				"cardParameterType": "param1",
				"power": 2498
			},
			{
				"id": 51001,
				"cardId": 5,
				"cardLevel": 1,
				"cardParameterType": "param2",
				"power": 1137
			},
			{
				"id": 51002,
				"cardId": 5,
				"cardLevel": 2,
				"cardParameterType": "param2",
				"power": 1226
			},
			{
				"id": 51003,
				"cardId": 5,
				"cardLevel": 3,
				"cardParameterType": "param2",
				"power": 1316
			},
			{
				"id": 51004,
				"cardId": 5,
				"cardLevel": 4,
				"cardParameterType": "param2",
				"power": 1406
			},
			{
				"id": 51005,
				"cardId": 5,
				"cardLevel": 5,
				"cardParameterType": "param2",
				"power": 1496
			},
			{
				"id": 51006,
				"cardId": 5,
				"cardLevel": 6,
				"cardParameterType": "param2",
				"power": 1586
			},
			{
				"id": 51007,
				"cardId": 5,
				"cardLevel": 7,
				"cardParameterType": "param2",
				"power": 1676
			},
			{
				"id": 51008,
				"cardId": 5,
				"cardLevel": 8,
				"cardParameterType": "param2",
				"power": 1765
			},
			{
				"id": 51009,
				"cardId": 5,
				"cardLevel": 9,
				"cardParameterType": "param2",
				"power": 1855
			},
			{
				"id": 51010,
				"cardId": 5,
				"cardLevel": 10,
				"cardParameterType": "param2",
				"power": 1945
			},
			{
				"id": 51011,
				"cardId": 5,
				"cardLevel": 11,
				"cardParameterType": "param2",
				"power": 2035
			},
			{
				"id": 51012,
				"cardId": 5,
				"cardLevel": 12,
				"cardParameterType": "param2",
				"power": 2125
			},
			{
				"id": 51013,
				"cardId": 5,
				"cardLevel": 13,
				"cardParameterType": "param2",
				"power": 2215
			},
			{
				"id": 51014,
				"cardId": 5,
				"cardLevel": 14,
				"cardParameterType": "param2",
				"power": 2304
			},
			{
				"id": 51015,
				"cardId": 5,
				"cardLevel": 15,
				"cardParameterType": "param2",
				"power": 2394
			},
			{
				"id": 51016,
				"cardId": 5,
				"cardLevel": 16,
				"cardParameterType": "param2",
				"power": 2484
			},
			{
				"id": 51017,
				"cardId": 5,
				"cardLevel": 17,
				"cardParameterType": "param2",
				"power": 2574
			},
			{
				"id": 51018,
				"cardId": 5,
				"cardLevel": 18,
				"cardParameterType": "param2",
				"power": 2664
			},
			{
				"id": 51019,
				"cardId": 5,
				"cardLevel": 19,
				"cardParameterType": "param2",
				"power": 2754
			},
			{
				"id": 51020,
				"cardId": 5,
				"cardLevel": 20,
				"cardParameterType": "param2",
				"power": 2844
			},
			{
				"id": 52001,
				"cardId": 5,
				"cardLevel": 1,
				"cardParameterType": "param3",
				"power": 894
			},
			{
				"id": 52002,
				"cardId": 5,
				"cardLevel": 2,
				"cardParameterType": "param3",
				"power": 964
			},
			{
				"id": 52003,
				"cardId": 5,
				"cardLevel": 3,
				"cardParameterType": "param3",
				"power": 1035
			},
			{
				"id": 52004,
				"cardId": 5,
				"cardLevel": 4,
				"cardParameterType": "param3",
				"power": 1105
			},
			{
				"id": 52005,
				"cardId": 5,
				"cardLevel": 5,
				"cardParameterType": "param3",
				"power": 1176
			},
			{
				"id": 52006,
				"cardId": 5,
				"cardLevel": 6,
				"cardParameterType": "param3",
				"power": 1246
			},
			{
				"id": 52007,
				"cardId": 5,
				"cardLevel": 7,
				"cardParameterType": "param3",
				"power": 1317
			},
			{
				"id": 52008,
				"cardId": 5,
				"cardLevel": 8,
				"cardParameterType": "param3",
				"power": 1388
			},
			{
				"id": 52009,
				"cardId": 5,
				"cardLevel": 9,
				"cardParameterType": "param3",
				"power": 1458
			},
			{
				"id": 52010,
				"cardId": 5,
				"cardLevel": 10,
				"cardParameterType": "param3",
				"power": 1529
			},
			{
				"id": 52011,
				"cardId": 5,
				"cardLevel": 11,
				"cardParameterType": "param3",
				"power": 1599
			},
			{
				"id": 52012,
				"cardId": 5,
				"cardLevel": 12,
				"cardParameterType": "param3",
				"power": 1670
			},
			{
				"id": 52013,
				"cardId": 5,
				"cardLevel": 13,
				"cardParameterType": "param3",
				"power": 1740
			},
			{
				"id": 52014,
				"cardId": 5,
				"cardLevel": 14,
				"cardParameterType": "param3",
				"power": 1811
			},
			{
				"id": 52015,
				"cardId": 5,
				"cardLevel": 15,
				"cardParameterType": "param3",
				"power": 1882
			},
			{
				"id": 52016,
				"cardId": 5,
				"cardLevel": 16,
				"cardParameterType": "param3",
				"power": 1952
			},
			{
				"id": 52017,
				"cardId": 5,
				"cardLevel": 17,
				"cardParameterType": "param3",
				"power": 2023
			},
			{
				"id": 52018,
				"cardId": 5,
				"cardLevel": 18,
				"cardParameterType": "param3",
				"power": 2093
			},
			{
				"id": 52019,
				"cardId": 5,
				"cardLevel": 19,
				"cardParameterType": "param3",
				"power": 2164
			},
			{
				"id": 52020,
				"cardId": 5,
				"cardLevel": 20,
				"cardParameterType": "param3",
				"power": 2235
			}
		],
		"specialTrainingCosts": [],
		"masterLessonAchieveResources": [],
		"iconImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/thumbnail/chara_rip/res002_no001_normal.webp",
		"cardImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/member/res002_no001_rip/card_normal.webp",
		"cardTrimImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/character/member_cutout_trm/res002_no001_rip/normal.webp",
		"fullIconImg": "https://drive.google.com/uc?id=1Azn1VSGIlqKzhD0RaTbRAdzvWGFZvGTv&usp=sharing"
	}
]
  ```
  </details>
  
  ---
    
  ### mission
**Endpoint**: [https://script.google.com/macros/s/AKfycbwMoQMBFsZC8u2j8X1yiPBs3E1PYXrh0Yi9_qsk4Tk80WrOeIaoQq6TDlmUe_pT0QHUqg/exec?authToken=HoshinoIchika&data=mission](https://script.google.com/macros/s/AKfycbwMoQMBFsZC8u2j8X1yiPBs3E1PYXrh0Yi9_qsk4Tk80WrOeIaoQq6TDlmUe_pT0QHUqg/exec?authToken=HoshinoIchika&data=mission)

<details>
  <summary><b>Response</b></summary>
  
  ```json
  [
	{
		"id": 1,
		"seq": 250,
		"groupId": 1,
		"honorRarity": "low",
		"name": "一歌ファン",
		"assetbundleName": "honor_0001",
		"levels": [
			{
				"honorId": 1,
				"level": 1,
				"bonus": 0,
				"description": "星乃一歌のキャラクターランクを5まで上げよう。"
			},
			{
				"honorId": 1,
				"level": 2,
				"bonus": 0,
				"description": "星乃一歌のキャラクターランクを10まで上げよう。"
			},
			{
				"honorId": 1,
				"level": 3,
				"bonus": 0,
				"description": "星乃一歌のキャラクターランクを15まで上げよう。"
			},
			{
				"honorId": 1,
				"level": 4,
				"bonus": 0,
				"description": "星乃一歌のキャラクターランクを20まで上げよう。"
			},
			{
				"honorId": 1,
				"level": 5,
				"bonus": 0,
				"description": "星乃一歌のキャラクターランクを25まで上げよう。"
			}
		],
		"honorImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/honor/honor_0001_rip/degree_main.webp"
	},
	{
		"id": 2,
		"seq": 260,
		"groupId": 1,
		"honorRarity": "middle",
		"name": "一歌ファン",
		"assetbundleName": "honor_0002",
		"levels": [
			{
				"honorId": 2,
				"level": 1,
				"bonus": 0,
				"description": "星乃一歌のキャラクターランクを30まで上げよう。"
			},
			{
				"honorId": 2,
				"level": 2,
				"bonus": 0,
				"description": "星乃一歌のキャラクターランクを35まで上げよう。"
			},
			{
				"honorId": 2,
				"level": 3,
				"bonus": 0,
				"description": "星乃一歌のキャラクターランクを40まで上げよう。"
			},
			{
				"honorId": 2,
				"level": 4,
				"bonus": 0,
				"description": "星乃一歌のキャラクターランクを45まで上げよう。"
			},
			{
				"honorId": 2,
				"level": 5,
				"bonus": 0,
				"description": "星乃一歌のキャラクターランクを50まで上げよう。"
			},
			{
				"honorId": 2,
				"level": 6,
				"bonus": 0,
				"description": "星乃一歌のキャラクターランクを55まで上げよう。"
			},
			{
				"honorId": 2,
				"level": 7,
				"bonus": 0,
				"description": "星乃一歌のキャラクターランクを60まで上げよう。"
			},
			{
				"honorId": 2,
				"level": 8,
				"bonus": 0,
				"description": "星乃一歌のキャラクターランクを65まで上げよう。"
			}
		],
		"honorImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/honor/honor_0002_rip/degree_main.webp"
	},
	{
		"id": 5,
		"seq": 290,
		"groupId": 2,
		"honorRarity": "low",
		"name": "咲希ファン",
		"assetbundleName": "honor_0005",
		"levels": [
			{
				"honorId": 5,
				"level": 1,
				"bonus": 0,
				"description": "天馬咲希のキャラクターランクを5まで上げよう。"
			},
			{
				"honorId": 5,
				"level": 2,
				"bonus": 0,
				"description": "天馬咲希のキャラクターランクを10まで上げよう。"
			},
			{
				"honorId": 5,
				"level": 3,
				"bonus": 0,
				"description": "天馬咲希のキャラクターランクを15まで上げよう。"
			},
			{
				"honorId": 5,
				"level": 4,
				"bonus": 0,
				"description": "天馬咲希のキャラクターランクを20まで上げよう。"
			},
			{
				"honorId": 5,
				"level": 5,
				"bonus": 0,
				"description": "天馬咲希のキャラクターランクを25まで上げよう。"
			}
		],
		"honorImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/honor/honor_0005_rip/degree_main.webp"
	},
	{
		"id": 6,
		"seq": 300,
		"groupId": 2,
		"honorRarity": "middle",
		"name": "咲希ファン",
		"assetbundleName": "honor_0006",
		"levels": [
			{
				"honorId": 6,
				"level": 1,
				"bonus": 0,
				"description": "天馬咲希のキャラクターランクを30まで上げよう。"
			},
			{
				"honorId": 6,
				"level": 2,
				"bonus": 0,
				"description": "天馬咲希のキャラクターランクを35まで上げよう。"
			},
			{
				"honorId": 6,
				"level": 3,
				"bonus": 0,
				"description": "天馬咲希のキャラクターランクを40まで上げよう。"
			},
			{
				"honorId": 6,
				"level": 4,
				"bonus": 0,
				"description": "天馬咲希のキャラクターランクを45まで上げよう。"
			},
			{
				"honorId": 6,
				"level": 5,
				"bonus": 0,
				"description": "天馬咲希のキャラクターランクを50まで上げよう。"
			},
			{
				"honorId": 6,
				"level": 6,
				"bonus": 0,
				"description": "天馬咲希のキャラクターランクを55まで上げよう。"
			},
			{
				"honorId": 6,
				"level": 7,
				"bonus": 0,
				"description": "天馬咲希のキャラクターランクを60まで上げよう。"
			},
			{
				"honorId": 6,
				"level": 8,
				"bonus": 0,
				"description": "天馬咲希のキャラクターランクを65まで上げよう。"
			}
		],
		"honorImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/honor/honor_0006_rip/degree_main.webp"
	},
	{
		"id": 9,
		"seq": 330,
		"groupId": 3,
		"honorRarity": "low",
		"name": "穂波ファン",
		"assetbundleName": "honor_0009",
		"levels": [
			{
				"honorId": 9,
				"level": 1,
				"bonus": 0,
				"description": "望月穂波のキャラクターランクを5まで上げよう。"
			},
			{
				"honorId": 9,
				"level": 2,
				"bonus": 0,
				"description": "望月穂波のキャラクターランクを10まで上げよう。"
			},
			{
				"honorId": 9,
				"level": 3,
				"bonus": 0,
				"description": "望月穂波のキャラクターランクを15まで上げよう。"
			},
			{
				"honorId": 9,
				"level": 4,
				"bonus": 0,
				"description": "望月穂波のキャラクターランクを20まで上げよう。"
			},
			{
				"honorId": 9,
				"level": 5,
				"bonus": 0,
				"description": "望月穂波のキャラクターランクを25まで上げよう。"
			}
		],
		"honorImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/honor/honor_0009_rip/degree_main.webp"
	}
]
  ```
  </details>
  
  ---
    
  ### gacha
**Endpoint**: [https://script.google.com/macros/s/AKfycbwMoQMBFsZC8u2j8X1yiPBs3E1PYXrh0Yi9_qsk4Tk80WrOeIaoQq6TDlmUe_pT0QHUqg/exec?authToken=HoshinoIchika&data=gacha](https://script.google.com/macros/s/AKfycbwMoQMBFsZC8u2j8X1yiPBs3E1PYXrh0Yi9_qsk4Tk80WrOeIaoQq6TDlmUe_pT0QHUqg/exec?authToken=HoshinoIchika&data=gacha)

<details>
  <summary><b>Response</b></summary>
  
  ```json
  [
	{
		"id": 1,
		"gachaType": "ceil",
		"name": "リリース記念ガチャ",
		"seq": 1,
		"assetbundleName": "ab_gacha_1",
		"gachaCardRarityRateGroupId": 1,
		"startAt": 1556679600000,
		"endAt": 1602223199000,
		"isShowPeriod": true,
		"gachaCeilItemId": 1,
		"wishSelectCount": 0,
		"gachaCardRarityRates": [
			{
				"id": 1,
				"groupId": 1,
				"cardRarityType": "rarity_2",
				"rate": 88.5
			},
			{
				"id": 2,
				"groupId": 1,
				"cardRarityType": "rarity_3",
				"rate": 8.5
			},
			{
				"id": 3,
				"groupId": 1,
				"cardRarityType": "rarity_4",
				"rate": 3
			}
		],
		"gachaDetails": [
			{
				"id": 1,
				"gachaId": 1,
				"cardId": 2,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 2,
				"gachaId": 1,
				"cardId": 3,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 3,
				"gachaId": 1,
				"cardId": 4,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 4,
				"gachaId": 1,
				"cardId": 6,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 5,
				"gachaId": 1,
				"cardId": 7,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 6,
				"gachaId": 1,
				"cardId": 10,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 7,
				"gachaId": 1,
				"cardId": 11,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 8,
				"gachaId": 1,
				"cardId": 14,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 9,
				"gachaId": 1,
				"cardId": 15,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 10,
				"gachaId": 1,
				"cardId": 18,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 11,
				"gachaId": 1,
				"cardId": 19,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 12,
				"gachaId": 1,
				"cardId": 22,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 13,
				"gachaId": 1,
				"cardId": 23,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 14,
				"gachaId": 1,
				"cardId": 26,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 15,
				"gachaId": 1,
				"cardId": 27,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 16,
				"gachaId": 1,
				"cardId": 30,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 17,
				"gachaId": 1,
				"cardId": 31,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 18,
				"gachaId": 1,
				"cardId": 34,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 19,
				"gachaId": 1,
				"cardId": 35,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 20,
				"gachaId": 1,
				"cardId": 38,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 21,
				"gachaId": 1,
				"cardId": 39,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 22,
				"gachaId": 1,
				"cardId": 42,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 23,
				"gachaId": 1,
				"cardId": 43,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 24,
				"gachaId": 1,
				"cardId": 46,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 25,
				"gachaId": 1,
				"cardId": 47,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 26,
				"gachaId": 1,
				"cardId": 50,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 27,
				"gachaId": 1,
				"cardId": 51,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 28,
				"gachaId": 1,
				"cardId": 54,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 29,
				"gachaId": 1,
				"cardId": 55,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 30,
				"gachaId": 1,
				"cardId": 58,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 31,
				"gachaId": 1,
				"cardId": 59,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 32,
				"gachaId": 1,
				"cardId": 62,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 33,
				"gachaId": 1,
				"cardId": 63,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 34,
				"gachaId": 1,
				"cardId": 66,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 35,
				"gachaId": 1,
				"cardId": 67,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 36,
				"gachaId": 1,
				"cardId": 70,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 37,
				"gachaId": 1,
				"cardId": 71,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 38,
				"gachaId": 1,
				"cardId": 74,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 39,
				"gachaId": 1,
				"cardId": 75,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 40,
				"gachaId": 1,
				"cardId": 78,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 41,
				"gachaId": 1,
				"cardId": 79,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 42,
				"gachaId": 1,
				"cardId": 82,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 43,
				"gachaId": 1,
				"cardId": 83,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 44,
				"gachaId": 1,
				"cardId": 84,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 45,
				"gachaId": 1,
				"cardId": 85,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 46,
				"gachaId": 1,
				"cardId": 86,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 47,
				"gachaId": 1,
				"cardId": 87,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 48,
				"gachaId": 1,
				"cardId": 88,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 49,
				"gachaId": 1,
				"cardId": 90,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 50,
				"gachaId": 1,
				"cardId": 91,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 51,
				"gachaId": 1,
				"cardId": 92,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 52,
				"gachaId": 1,
				"cardId": 94,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 53,
				"gachaId": 1,
				"cardId": 95,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 54,
				"gachaId": 1,
				"cardId": 96,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 55,
				"gachaId": 1,
				"cardId": 98,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 56,
				"gachaId": 1,
				"cardId": 99,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 57,
				"gachaId": 1,
				"cardId": 102,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 58,
				"gachaId": 1,
				"cardId": 103,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 59,
				"gachaId": 1,
				"cardId": 106,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 60,
				"gachaId": 1,
				"cardId": 107,
				"weight": 1,
				"isWish": false
			}
		],
		"gachaBehaviors": [
			{
				"id": 1,
				"gachaId": 1,
				"groupId": 1,
				"priority": 1,
				"gachaBehaviorType": "once_a_day",
				"costResourceType": "paid_jewel",
				"costResourceQuantity": 100,
				"spinCount": 1,
				"executeLimit": 1
			},
			{
				"id": 2,
				"gachaId": 1,
				"groupId": 2,
				"priority": 1,
				"gachaBehaviorType": "normal",
				"costResourceType": "jewel",
				"costResourceQuantity": 300,
				"spinCount": 1
			},
			{
				"id": 3,
				"gachaId": 1,
				"groupId": 3,
				"priority": 1,
				"gachaBehaviorType": "over_rarity_3_once",
				"costResourceType": "jewel",
				"costResourceQuantity": 3000,
				"spinCount": 10
			}
		],
		"gachaPickups": [
			{
				"id": 1,
				"gachaId": 1,
				"cardId": 88,
				"gachaPickupType": "normal"
			},
			{
				"id": 2,
				"gachaId": 1,
				"cardId": 92,
				"gachaPickupType": "normal"
			},
			{
				"id": 3,
				"gachaId": 1,
				"cardId": 96,
				"gachaPickupType": "normal"
			},
			{
				"id": 4,
				"gachaId": 1,
				"cardId": 4,
				"gachaPickupType": "normal"
			}
		],
		"gachaPickupCostumes": [],
		"gachaInformation": {
			"gachaId": 1,
			"summary": "「リリース記念ガチャ」が登場！\n\n★2以上のメンバーが必ず出現するガチャです。\n「10回ガチャ」では★3以上のメンバーが1人確定で出現します。\n初めて獲得する★4メンバーには「ライブ衣装」が付きます。\nまた、「ライブ衣装」を獲得することで、他のキャラクターが着用できる同じ衣装、及び別カラーが「衣装ショップ」で作成可能になります。\n\n「リリース記念ガチャ」からメンバーを1人獲得するごとに「リリース記念ガチャシール」を1個獲得できます。\n「リリース記念ガチャシール」を300個消費して「リリース記念ガチャシール」の交換所内のメンバーと交換できます。\n",
			"description": "・1日1回限定のガチャは有償クリスタルでのみご利用いただけます。\n・カラフルパスの有効期間中は1日1回限定ガチャが1日2回ご利用いただけます。\n・1日1回限定のガチャは毎日4時にリセットされます。\n・クリスタルは無償分から先に消費されます。\n・出現するメンバーはすべて特訓前の状態になります。\n・ガチャで出現するメンバーは重複する場合があります。\n・重複して獲得されたメンバーは自動的に控え室に送られます。\n・ガチャは提供割合に基づき1回ごとに抽選を行います。例えば提供割合1%のメンバーが100回中1回必ず出現するという仕組みではありません。\n・[10回引く]をご利用いただき抽選した結果、★3以上のメンバーが1人も出現しなかった場合は、10回目の枠を確定枠提供割合から再度抽選いたします。\n・提供割合につきましては、提供割合タブにてご確認ください。\n・新メンバーのパラメータやスキルはガチャページのメンバー詳細にてご確認ください。\n・ガチャ実行後に強制終了、もしくは回線が切断され正常にガチャの結果画面が表示されなかった場合でも、メンバーは獲得されております。メンバー一覧、または控え室をご確認ください。\n・「リリース記念ガチャシール」は2020/11/09 14:59までの交換期間があります。交換期間をすぎると同数の「想いのカケラ」へ変換されます。\n・開催スケジュールは予告なく変更する場合がございます。"
		},
		"logoImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/gacha/ab_gacha_1/logo_rip/logo.webp",
		"bannerImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/home/banner/banner_gacha1_rip/banner_gacha1.webp",
		"bgImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/gacha/ab_gacha_1/screen_rip/texture/bg_gacha1.webp",
		"futureImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/gacha/ab_gacha_1/screen_rip/texture/img_gacha1.webp"
	},
	{
		"id": 2,
		"gachaType": "normal",
		"name": "★3以上確定チケットガチャ",
		"seq": 99999,
		"assetbundleName": "ab_gacha_2",
		"gachaCardRarityRateGroupId": 2,
		"startAt": 1556679600000,
		"endAt": 1610258399000,
		"isShowPeriod": false,
		"wishSelectCount": 0,
		"gachaCardRarityRates": [
			{
				"id": 4,
				"groupId": 2,
				"cardRarityType": "rarity_3",
				"rate": 97
			},
			{
				"id": 5,
				"groupId": 2,
				"cardRarityType": "rarity_4",
				"rate": 3
			}
		],
		"gachaDetails": [
			{
				"id": 61,
				"gachaId": 2,
				"cardId": 3,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 62,
				"gachaId": 2,
				"cardId": 4,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 63,
				"gachaId": 2,
				"cardId": 7,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 64,
				"gachaId": 2,
				"cardId": 11,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 65,
				"gachaId": 2,
				"cardId": 15,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 66,
				"gachaId": 2,
				"cardId": 19,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 67,
				"gachaId": 2,
				"cardId": 23,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 68,
				"gachaId": 2,
				"cardId": 27,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 69,
				"gachaId": 2,
				"cardId": 31,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 70,
				"gachaId": 2,
				"cardId": 35,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 71,
				"gachaId": 2,
				"cardId": 39,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 72,
				"gachaId": 2,
				"cardId": 43,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 73,
				"gachaId": 2,
				"cardId": 47,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 74,
				"gachaId": 2,
				"cardId": 51,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 75,
				"gachaId": 2,
				"cardId": 55,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 76,
				"gachaId": 2,
				"cardId": 59,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 77,
				"gachaId": 2,
				"cardId": 63,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 78,
				"gachaId": 2,
				"cardId": 67,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 79,
				"gachaId": 2,
				"cardId": 71,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 80,
				"gachaId": 2,
				"cardId": 75,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 81,
				"gachaId": 2,
				"cardId": 79,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 82,
				"gachaId": 2,
				"cardId": 87,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 83,
				"gachaId": 2,
				"cardId": 88,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 84,
				"gachaId": 2,
				"cardId": 91,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 85,
				"gachaId": 2,
				"cardId": 92,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 86,
				"gachaId": 2,
				"cardId": 95,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 87,
				"gachaId": 2,
				"cardId": 96,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 88,
				"gachaId": 2,
				"cardId": 99,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 89,
				"gachaId": 2,
				"cardId": 103,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 90,
				"gachaId": 2,
				"cardId": 107,
				"weight": 1,
				"isWish": false
			}
		],
		"gachaBehaviors": [
			{
				"id": 4,
				"gachaId": 2,
				"groupId": 1,
				"priority": 1,
				"gachaBehaviorType": "normal",
				"costResourceType": "gacha_ticket",
				"costResourceId": 2,
				"costResourceQuantity": 1,
				"spinCount": 1
			}
		],
		"gachaPickups": [
			{
				"id": 11,
				"gachaId": 2,
				"cardId": 3,
				"gachaPickupType": "normal"
			},
			{
				"id": 12,
				"gachaId": 2,
				"cardId": 19,
				"gachaPickupType": "normal"
			},
			{
				"id": 13,
				"gachaId": 2,
				"cardId": 35,
				"gachaPickupType": "normal"
			},
			{
				"id": 14,
				"gachaId": 2,
				"cardId": 51,
				"gachaPickupType": "normal"
			},
			{
				"id": 15,
				"gachaId": 2,
				"cardId": 67,
				"gachaPickupType": "normal"
			}
		],
		"gachaPickupCostumes": [],
		"gachaInformation": {
			"gachaId": 2,
			"summary": "★3以上確定チケットでのみ引けるガチャです。\n\n★3以上のメンバーが必ず出現するガチャです。\n初めて獲得する一部の★4メンバーには「ライブ衣装」が付きます。\nまた、「ライブ衣装」を獲得することで、他の着用可能キャラクターが着用できる衣装が「衣装ショップ」で作成可能になります。\n他の着用可能キャラクターの「ライブ衣装」は一部デザインやアクセサリの有無が異なることがあります。\n内容は[メンバー]->[ライブ衣装]画面よりご確認いただけます。\n",
			"description": "・本ガチャで出現するメンバーは定期的に更新されます。\n・出現するメンバーはすべて特訓前の状態になります。\n・ガチャで出現するメンバーは重複する場合があります。\n・重複して獲得されたメンバーは自動的に控え室に送られます。\n・ガチャは提供割合に基づき1回ごとに抽選を行います。例えば提供割合1%のメンバーが100回中1回必ず出現するという仕組みではありません。\n・提供割合につきましては、提供割合タブにてご確認ください。\n・出現メンバーのパラメータやスキルはガチャページのメンバー詳細にてご確認ください。\n・ライブ衣装付きのメンバーは、提供割合タブにてご確認ください。\n・ガチャ実行後に強制終了、もしくは回線が切断され正常にガチャの結果画面が表示されなかった場合でも、メンバーは獲得されております。メンバー一覧、または控え室をご確認ください。"
		},
		"logoImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/gacha/ab_gacha_2/logo_rip/logo.webp",
		"bannerImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/home/banner/banner_gacha2_rip/banner_gacha2.webp",
		"bgImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/gacha/ab_gacha_2/screen_rip/texture/bg_gacha2.webp",
		"futureImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/gacha/ab_gacha_2/screen_rip/texture/img_gacha2.webp"
	},
	{
		"id": 3,
		"gachaType": "normal",
		"name": "バーチャル・シンガー限定ガチャ",
		"seq": 10,
		"assetbundleName": "ab_gacha_3",
		"gachaCardRarityRateGroupId": 1,
		"startAt": 1556679600000,
		"endAt": 1602223199000,
		"isShowPeriod": true,
		"wishSelectCount": 0,
		"gachaCardRarityRates": [
			{
				"id": 1,
				"groupId": 1,
				"cardRarityType": "rarity_2",
				"rate": 88.5
			},
			{
				"id": 2,
				"groupId": 1,
				"cardRarityType": "rarity_3",
				"rate": 8.5
			},
			{
				"id": 3,
				"groupId": 1,
				"cardRarityType": "rarity_4",
				"rate": 3
			}
		],
		"gachaDetails": [
			{
				"id": 91,
				"gachaId": 3,
				"cardId": 82,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 92,
				"gachaId": 3,
				"cardId": 83,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 93,
				"gachaId": 3,
				"cardId": 84,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 94,
				"gachaId": 3,
				"cardId": 85,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 95,
				"gachaId": 3,
				"cardId": 86,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 96,
				"gachaId": 3,
				"cardId": 87,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 97,
				"gachaId": 3,
				"cardId": 88,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 98,
				"gachaId": 3,
				"cardId": 90,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 99,
				"gachaId": 3,
				"cardId": 91,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 100,
				"gachaId": 3,
				"cardId": 92,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 101,
				"gachaId": 3,
				"cardId": 94,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 102,
				"gachaId": 3,
				"cardId": 95,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 103,
				"gachaId": 3,
				"cardId": 96,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 104,
				"gachaId": 3,
				"cardId": 98,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 105,
				"gachaId": 3,
				"cardId": 99,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 106,
				"gachaId": 3,
				"cardId": 102,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 107,
				"gachaId": 3,
				"cardId": 103,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 108,
				"gachaId": 3,
				"cardId": 106,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 109,
				"gachaId": 3,
				"cardId": 107,
				"weight": 1,
				"isWish": false
			}
		],
		"gachaBehaviors": [
			{
				"id": 5,
				"gachaId": 3,
				"groupId": 1,
				"priority": 1,
				"gachaBehaviorType": "over_rarity_3_once",
				"costResourceType": "paid_jewel",
				"costResourceQuantity": 2000,
				"spinCount": 10,
				"executeLimit": 1
			}
		],
		"gachaPickups": [
			{
				"id": 5,
				"gachaId": 3,
				"cardId": 88,
				"gachaPickupType": "normal"
			},
			{
				"id": 6,
				"gachaId": 3,
				"cardId": 92,
				"gachaPickupType": "normal"
			},
			{
				"id": 7,
				"gachaId": 3,
				"cardId": 96,
				"gachaPickupType": "normal"
			},
			{
				"id": 8,
				"gachaId": 3,
				"cardId": 99,
				"gachaPickupType": "normal"
			},
			{
				"id": 9,
				"gachaId": 3,
				"cardId": 103,
				"gachaPickupType": "normal"
			},
			{
				"id": 10,
				"gachaId": 3,
				"cardId": 107,
				"gachaPickupType": "normal"
			}
		],
		"gachaPickupCostumes": [],
		"gachaInformation": {
			"gachaId": 3,
			"summary": "「バーチャル・シンガー限定ガチャ」が登場！\n\n★2以上のバーチャル・シンガーのメンバーが必ず出現するガチャです。\n★3以上のバーチャル・シンガーのメンバーが1人確定で出現します。\n初めて獲得する★4メンバーには「ライブ衣装」が付きます。\nまた、「ライブ衣装」を獲得することで、他のキャラクターが着用できる同じ衣装、及び別カラーが「衣装ショップ」で作成可能になります。\n",
			"description": "・本ガチャは有償クリスタルでのみ引くことができる1回限定のガチャです。\n・出現するメンバーはすべて特訓前の状態になります。\n・ガチャで出現するメンバーは重複する場合があります。\n・重複して獲得されたメンバーは自動的に控え室に送られます。\n・ガチャは提供割合に基づき1回ごとに抽選を行います。例えば提供割合1%のメンバーが100回中1回必ず出現するという仕組みではありません。\n・[10回引く]をご利用いただき抽選した結果、★3以上のメンバーが1人も出現しなかった場合は、10回目の枠を確定枠提供割合から再度抽選いたします。\n・提供割合につきましては、提供割合タブにてご確認ください。\n・新メンバーのパラメータやスキルはガチャページのメンバー詳細にてご確認ください。\n・ガチャ実行後に強制終了、もしくは回線が切断され正常にガチャの結果画面が表示されなかった場合でも、メンバーは獲得されております。メンバー一覧、または控え室をご確認ください。\n・開催スケジュールは予告なく変更する場合がございます。"
		},
		"logoImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/gacha/ab_gacha_3/logo_rip/logo.webp",
		"bannerImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/home/banner/banner_gacha3_rip/banner_gacha3.webp",
		"bgImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/gacha/ab_gacha_3/screen_rip/texture/bg_gacha3.webp",
		"futureImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/gacha/ab_gacha_3/screen_rip/texture/img_gacha3.webp"
	},
	{
		"id": 4,
		"gachaType": "ceil",
		"name": "星降る夜空の思い出ガチャ",
		"seq": 1,
		"assetbundleName": "ab_gacha_4",
		"gachaCardRarityRateGroupId": 1,
		"startAt": 1602223200000,
		"endAt": 1603173599000,
		"isShowPeriod": true,
		"gachaCeilItemId": 2,
		"wishSelectCount": 0,
		"gachaCardRarityRates": [
			{
				"id": 1,
				"groupId": 1,
				"cardRarityType": "rarity_2",
				"rate": 88.5
			},
			{
				"id": 2,
				"groupId": 1,
				"cardRarityType": "rarity_3",
				"rate": 8.5
			},
			{
				"id": 3,
				"groupId": 1,
				"cardRarityType": "rarity_4",
				"rate": 3
			}
		],
		"gachaDetails": [
			{
				"id": 110,
				"gachaId": 4,
				"cardId": 2,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 111,
				"gachaId": 4,
				"cardId": 3,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 112,
				"gachaId": 4,
				"cardId": 4,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 113,
				"gachaId": 4,
				"cardId": 6,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 114,
				"gachaId": 4,
				"cardId": 7,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 115,
				"gachaId": 4,
				"cardId": 10,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 116,
				"gachaId": 4,
				"cardId": 11,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 117,
				"gachaId": 4,
				"cardId": 14,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 118,
				"gachaId": 4,
				"cardId": 15,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 119,
				"gachaId": 4,
				"cardId": 18,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 120,
				"gachaId": 4,
				"cardId": 19,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 121,
				"gachaId": 4,
				"cardId": 22,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 122,
				"gachaId": 4,
				"cardId": 23,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 123,
				"gachaId": 4,
				"cardId": 26,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 124,
				"gachaId": 4,
				"cardId": 27,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 125,
				"gachaId": 4,
				"cardId": 30,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 126,
				"gachaId": 4,
				"cardId": 31,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 127,
				"gachaId": 4,
				"cardId": 34,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 128,
				"gachaId": 4,
				"cardId": 35,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 129,
				"gachaId": 4,
				"cardId": 38,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 130,
				"gachaId": 4,
				"cardId": 39,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 131,
				"gachaId": 4,
				"cardId": 42,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 132,
				"gachaId": 4,
				"cardId": 43,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 133,
				"gachaId": 4,
				"cardId": 46,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 134,
				"gachaId": 4,
				"cardId": 47,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 135,
				"gachaId": 4,
				"cardId": 50,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 136,
				"gachaId": 4,
				"cardId": 51,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 137,
				"gachaId": 4,
				"cardId": 54,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 138,
				"gachaId": 4,
				"cardId": 55,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 139,
				"gachaId": 4,
				"cardId": 58,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 140,
				"gachaId": 4,
				"cardId": 59,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 141,
				"gachaId": 4,
				"cardId": 62,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 142,
				"gachaId": 4,
				"cardId": 63,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 143,
				"gachaId": 4,
				"cardId": 66,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 144,
				"gachaId": 4,
				"cardId": 67,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 145,
				"gachaId": 4,
				"cardId": 70,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 146,
				"gachaId": 4,
				"cardId": 71,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 147,
				"gachaId": 4,
				"cardId": 74,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 148,
				"gachaId": 4,
				"cardId": 75,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 149,
				"gachaId": 4,
				"cardId": 78,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 150,
				"gachaId": 4,
				"cardId": 79,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 151,
				"gachaId": 4,
				"cardId": 87,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 152,
				"gachaId": 4,
				"cardId": 88,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 153,
				"gachaId": 4,
				"cardId": 91,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 154,
				"gachaId": 4,
				"cardId": 92,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 155,
				"gachaId": 4,
				"cardId": 95,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 156,
				"gachaId": 4,
				"cardId": 96,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 157,
				"gachaId": 4,
				"cardId": 99,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 158,
				"gachaId": 4,
				"cardId": 103,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 159,
				"gachaId": 4,
				"cardId": 107,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 160,
				"gachaId": 4,
				"cardId": 109,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 161,
				"gachaId": 4,
				"cardId": 110,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 162,
				"gachaId": 4,
				"cardId": 111,
				"weight": 1,
				"isWish": false
			}
		],
		"gachaBehaviors": [
			{
				"id": 6,
				"gachaId": 4,
				"groupId": 1,
				"priority": 1,
				"gachaBehaviorType": "once_a_day",
				"costResourceType": "paid_jewel",
				"costResourceQuantity": 100,
				"spinCount": 1,
				"executeLimit": 1
			},
			{
				"id": 7,
				"gachaId": 4,
				"groupId": 2,
				"priority": 1,
				"gachaBehaviorType": "normal",
				"costResourceType": "jewel",
				"costResourceQuantity": 300,
				"spinCount": 1
			},
			{
				"id": 8,
				"gachaId": 4,
				"groupId": 3,
				"priority": 1,
				"gachaBehaviorType": "over_rarity_3_once",
				"costResourceType": "jewel",
				"costResourceQuantity": 3000,
				"spinCount": 10
			}
		],
		"gachaPickups": [
			{
				"id": 16,
				"gachaId": 4,
				"cardId": 109,
				"gachaPickupType": "normal"
			},
			{
				"id": 17,
				"gachaId": 4,
				"cardId": 110,
				"gachaPickupType": "normal"
			},
			{
				"id": 18,
				"gachaId": 4,
				"cardId": 111,
				"gachaPickupType": "normal"
			}
		],
		"gachaPickupCostumes": [],
		"gachaInformation": {
			"gachaId": 4,
			"summary": "「星降る夜空の思い出ガチャ」が登場！\n\n★2以上のメンバーが必ず出現するガチャです。\n「10回ガチャ」では★3以上のメンバーが1人確定で出現します。\n初めて獲得する一部の★4メンバーには「ライブ衣装」が付きます。\nまた、「ライブ衣装」を獲得することで、他のキャラクターが着用できる同じ衣装が「衣装ショップ」で作成可能になります。\n\n「星降る夜空の思い出ガチャ」からメンバーを1人獲得するごとに「星降る夜空の思い出ガチャシール」を1個獲得できます。\n「星降る夜空の思い出ガチャシール」を300個消費して「星降る夜空の思い出ガチャシール」の交換所内のメンバーと交換できます。\n",
			"description": "・1日1回限定のガチャは有償クリスタルでのみご利用いただけます。\n・カラフルパスの有効期間中は1日1回限定ガチャが1日2回ご利用いただけます。\n・1日1回限定のガチャは毎日4時にリセットされます。\n・クリスタルは無償分から先に消費されます。\n・出現するメンバーはすべて特訓前の状態になります。\n・ガチャで出現するメンバーは重複する場合があります。\n・重複して獲得されたメンバーは自動的に控え室に送られます。\n・ガチャは提供割合に基づき1回ごとに抽選を行います。例えば提供割合1%のメンバーが100回中1回必ず出現するという仕組みではありません。\n・[10回引く]をご利用いただき抽選した結果、★3以上のメンバーが1人も出現しなかった場合は、10回目の枠を確定枠提供割合から再度抽選いたします。\n・提供割合につきましては、提供割合タブにてご確認ください。\n・新メンバーのパラメータやスキルはガチャページのメンバー詳細にてご確認ください。\n・ライブ衣装付きのメンバーは、ガチャページの提供割合にてご確認ください。\n・ガチャ実行後に強制終了、もしくは回線が切断され正常にガチャの結果画面が表示されなかった場合でも、メンバーは獲得されております。メンバー一覧、または控え室をご確認ください。\n・「星降る夜空の思い出ガチャシール」は2020/11/20 14:59までの交換期間があります。交換期間をすぎると同数の「想いのカケラ」へ変換されます。\n・開催スケジュールは予告なく変更する場合がございます。"
		},
		"logoImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/gacha/ab_gacha_4/logo_rip/logo.webp",
		"bannerImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/home/banner/banner_gacha4_rip/banner_gacha4.webp",
		"bgImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/gacha/ab_gacha_4/screen_rip/texture/bg_gacha4.webp",
		"futureImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/gacha/ab_gacha_4/screen_rip/texture/img_gacha4.webp"
	},
	{
		"id": 5,
		"gachaType": "ceil",
		"name": "人形達の舞踏会ガチャ",
		"seq": 1,
		"assetbundleName": "ab_gacha_5",
		"gachaCardRarityRateGroupId": 1,
		"startAt": 1603173600000,
		"endAt": 1604123999000,
		"isShowPeriod": true,
		"gachaCeilItemId": 3,
		"wishSelectCount": 0,
		"gachaCardRarityRates": [
			{
				"id": 1,
				"groupId": 1,
				"cardRarityType": "rarity_2",
				"rate": 88.5
			},
			{
				"id": 2,
				"groupId": 1,
				"cardRarityType": "rarity_3",
				"rate": 8.5
			},
			{
				"id": 3,
				"groupId": 1,
				"cardRarityType": "rarity_4",
				"rate": 3
			}
		],
		"gachaDetails": [
			{
				"id": 163,
				"gachaId": 5,
				"cardId": 2,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 164,
				"gachaId": 5,
				"cardId": 3,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 165,
				"gachaId": 5,
				"cardId": 4,
				"weight": 257142,
				"isWish": false
			},
			{
				"id": 166,
				"gachaId": 5,
				"cardId": 6,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 167,
				"gachaId": 5,
				"cardId": 7,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 168,
				"gachaId": 5,
				"cardId": 10,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 169,
				"gachaId": 5,
				"cardId": 11,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 170,
				"gachaId": 5,
				"cardId": 14,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 171,
				"gachaId": 5,
				"cardId": 15,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 172,
				"gachaId": 5,
				"cardId": 18,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 173,
				"gachaId": 5,
				"cardId": 19,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 174,
				"gachaId": 5,
				"cardId": 22,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 175,
				"gachaId": 5,
				"cardId": 23,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 176,
				"gachaId": 5,
				"cardId": 26,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 177,
				"gachaId": 5,
				"cardId": 27,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 178,
				"gachaId": 5,
				"cardId": 30,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 179,
				"gachaId": 5,
				"cardId": 31,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 180,
				"gachaId": 5,
				"cardId": 34,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 181,
				"gachaId": 5,
				"cardId": 35,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 182,
				"gachaId": 5,
				"cardId": 38,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 183,
				"gachaId": 5,
				"cardId": 39,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 184,
				"gachaId": 5,
				"cardId": 42,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 185,
				"gachaId": 5,
				"cardId": 43,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 186,
				"gachaId": 5,
				"cardId": 46,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 187,
				"gachaId": 5,
				"cardId": 47,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 188,
				"gachaId": 5,
				"cardId": 50,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 189,
				"gachaId": 5,
				"cardId": 51,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 190,
				"gachaId": 5,
				"cardId": 54,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 191,
				"gachaId": 5,
				"cardId": 55,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 192,
				"gachaId": 5,
				"cardId": 58,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 193,
				"gachaId": 5,
				"cardId": 59,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 194,
				"gachaId": 5,
				"cardId": 62,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 195,
				"gachaId": 5,
				"cardId": 63,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 196,
				"gachaId": 5,
				"cardId": 66,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 197,
				"gachaId": 5,
				"cardId": 67,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 198,
				"gachaId": 5,
				"cardId": 70,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 199,
				"gachaId": 5,
				"cardId": 71,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 200,
				"gachaId": 5,
				"cardId": 74,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 201,
				"gachaId": 5,
				"cardId": 75,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 202,
				"gachaId": 5,
				"cardId": 78,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 203,
				"gachaId": 5,
				"cardId": 79,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 204,
				"gachaId": 5,
				"cardId": 87,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 205,
				"gachaId": 5,
				"cardId": 88,
				"weight": 257142,
				"isWish": false
			},
			{
				"id": 206,
				"gachaId": 5,
				"cardId": 91,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 207,
				"gachaId": 5,
				"cardId": 92,
				"weight": 257142,
				"isWish": false
			},
			{
				"id": 208,
				"gachaId": 5,
				"cardId": 95,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 209,
				"gachaId": 5,
				"cardId": 96,
				"weight": 257142,
				"isWish": false
			},
			{
				"id": 210,
				"gachaId": 5,
				"cardId": 99,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 211,
				"gachaId": 5,
				"cardId": 103,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 212,
				"gachaId": 5,
				"cardId": 107,
				"weight": 1,
				"isWish": false
			},
			{
				"id": 213,
				"gachaId": 5,
				"cardId": 109,
				"weight": 257142,
				"isWish": false
			},
			{
				"id": 214,
				"gachaId": 5,
				"cardId": 110,
				"weight": 257142,
				"isWish": false
			},
			{
				"id": 215,
				"gachaId": 5,
				"cardId": 111,
				"weight": 257142,
				"isWish": false
			},
			{
				"id": 216,
				"gachaId": 5,
				"cardId": 114,
				"weight": 400000,
				"isWish": false
			},
			{
				"id": 217,
				"gachaId": 5,
				"cardId": 115,
				"weight": 400000,
				"isWish": false
			},
			{
				"id": 218,
				"gachaId": 5,
				"cardId": 116,
				"weight": 400000,
				"isWish": false
			}
		],
		"gachaBehaviors": [
			{
				"id": 9,
				"gachaId": 5,
				"groupId": 1,
				"priority": 1,
				"gachaBehaviorType": "once_a_day",
				"costResourceType": "paid_jewel",
				"costResourceQuantity": 100,
				"spinCount": 1,
				"executeLimit": 1
			},
			{
				"id": 10,
				"gachaId": 5,
				"groupId": 2,
				"priority": 1,
				"gachaBehaviorType": "normal",
				"costResourceType": "jewel",
				"costResourceQuantity": 300,
				"spinCount": 1
			},
			{
				"id": 11,
				"gachaId": 5,
				"groupId": 3,
				"priority": 1,
				"gachaBehaviorType": "over_rarity_3_once",
				"costResourceType": "jewel",
				"costResourceQuantity": 3000,
				"spinCount": 10
			}
		],
		"gachaPickups": [
			{
				"id": 19,
				"gachaId": 5,
				"cardId": 114,
				"gachaPickupType": "normal"
			},
			{
				"id": 20,
				"gachaId": 5,
				"cardId": 115,
				"gachaPickupType": "normal"
			},
			{
				"id": 21,
				"gachaId": 5,
				"cardId": 116,
				"gachaPickupType": "normal"
			}
		],
		"gachaPickupCostumes": [],
		"gachaInformation": {
			"gachaId": 5,
			"summary": "「人形達の舞踏会ガチャ」が登場！\n\n★2以上のメンバーが必ず出現するガチャです。\n「10回ガチャ」では★3以上のメンバーが1人確定で出現します。\n初めて獲得する一部の★4メンバーには「ライブ衣装」が付きます。\nまた、「ライブ衣装」を獲得することで、他の着用可能メンバーが着用できる衣装が「衣装ショップ」で作成可能になります。\n他の着用可能キャラクターの「ライブ衣装」は一部デザインやアクセサリの有無が異なることがあります。\n内容は[メンバー]->[ライブ衣装]画面よりご確認いただけます。\n\n「人形達の舞踏会ガチャ」からメンバーを1人獲得するごとに「人形達の舞踏会ガチャシール」を1個獲得できます。\n「人形達の舞踏会ガチャシール」を300個消費して「人形達の舞踏会ガチャシール」の交換所内のメンバーと交換できます。\n",
			"description": "・1日1回限定のガチャは有償クリスタルでのみご利用いただけます。\n・カラフルパスの有効期間中は1日1回限定ガチャが1日2回ご利用いただけます。\n・1日1回限定のガチャは毎日4時にリセットされます。\n・クリスタルは無償分から先に消費されます。\n・出現するメンバーはすべて特訓前の状態になります。\n・ガチャで出現するメンバーは重複する場合があります。\n・重複して獲得されたメンバーは自動的に控え室に送られます。\n・ガチャは提供割合に基づき1回ごとに抽選を行います。例えば提供割合1%のメンバーが100回中1回必ず出現するという仕組みではありません。\n・[10回引く]をご利用いただき抽選した結果、★3以上のメンバーが1人も出現しなかった場合は、10回目の枠を確定枠提供割合から再度抽選いたします。\n・提供割合につきましては、提供割合タブにてご確認ください。\n・新メンバーのパラメータやスキルはガチャページのメンバー詳細にてご確認ください。\n・ライブ衣装付きのメンバーは、ガチャページの提供割合にてご確認ください。\n・ガチャ実行後に強制終了、もしくは回線が切断され正常にガチャの結果画面が表示されなかった場合でも、メンバーは獲得されております。メンバー一覧、または控え室をご確認ください。\n・「人形達の舞踏会ガチャシール」は2020/11/30 14:59までの交換期間があります。交換期間をすぎると同数の「想いのカケラ」へ変換されます。\n・開催スケジュールは予告なく変更する場合がございます。"
		},
		"logoImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/gacha/ab_gacha_5/logo_rip/logo.webp",
		"bannerImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/home/banner/banner_gacha5_rip/banner_gacha5.webp",
		"bgImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/gacha/ab_gacha_5/screen_rip/texture/bg_gacha5.webp",
		"futureImg": "https://sekai-res.dnaroma.eu/file/sekai-assets/gacha/ab_gacha_5/screen_rip/texture/img_gacha5.webp"
	}
]
  ```
  </details>
  
  ---
  
   ### version
**Endpoint**: [https://script.google.com/macros/s/AKfycbwMoQMBFsZC8u2j8X1yiPBs3E1PYXrh0Yi9_qsk4Tk80WrOeIaoQq6TDlmUe_pT0QHUqg/exec?authToken=HoshinoIchika&data=version](https://script.google.com/macros/s/AKfycbwMoQMBFsZC8u2j8X1yiPBs3E1PYXrh0Yi9_qsk4Tk80WrOeIaoQq6TDlmUe_pT0QHUqg/exec?authToken=HoshinoIchika&data=version)

<details>
  <summary><b>Response</b></summary>
  
  ```json
  {
	"systemProfile": "production",
	"appVersion": "1.13.0",
	"multiPlayVersion": "miku",
	"dataVersion": "1.13.0.30",
	"assetVersion": "1.13.0.30",
	"appHash": "c6c0f908-bc94-4290-913e-055394757c66",
	"assetHash": "c24648e7-7098-7228-d6b3-4160e1bfc05d",
	"appVersionStatus": "available",
	"prskAPIVersion": "0.0.0 β"
}
  ```
  </details>
  
 
# Note
 
注意点などがあれば書く
 
# Author
 
作成情報を列挙する
 
* 作成者 [Kadoyu](https://github.com/Kadoyu/)
* Twitter [https://twitter.com/wakiwakkii](https://twitter.com/wakiwakkii)
 
# License
 
[MIT License](https://opensource.org/licenses/MIT)
