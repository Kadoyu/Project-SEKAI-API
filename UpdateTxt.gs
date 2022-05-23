const sekaiRes_asset = 'https://sekai-res.dnaroma.eu/file/sekai-assets/'
const minio_asset = 'https://minio.dnaroma.eu/sekai-assets/'

const getRepoContent = (fileName) => {
  const url = `https://api.github.com/repos/Sekai-World/sekai-master-db-diff/contents/${fileName}`
  const gitHubService = getGitHubService()
  const options = {
    headers: { Authorization: 'Bearer ' + gitHubService.getAccessToken() }
  }
  // UrlFetchでデータを取得して、JSONデータをパースする
  const response = JSON.parse(UrlFetchApp.fetch(url, options))
  const decode = Utilities.base64Decode(response.content, Utilities.Charset.UTF_8)
  const json = Utilities.newBlob(decode).getDataAsString()
  return JSON.parse(json)
}

class GetData {
  static info() {
    const obj = getRepoContent('userInformations.json')
    /**各々の追加情報 */
    for (let i in obj) {
      if (obj[i].browseType === 'internal') {
        obj[i].path = 'https://production-web.sekai.colorfulpalette.org/' + obj[i].path
      }
    }
    return obj
  }

  static event() {
    const obj = getRepoContent('events.json')
    const cardObj = getRepoContent('eventCards.json')
    /**各々の追加情報 */
    const assetUrl = sekaiRes_asset + 'event/'
    const homeAssetUrl = sekaiRes_asset + 'home/banner/'
    obj.filter(elem => {
      delete elem.eventRankingRewardRanges
      elem.eventCard = []
      cardObj.filter(value => {
        if (elem.id == value.eventId) elem.eventCard.push(value.cardId)
      })
      elem.logoImg = assetUrl + elem.assetbundleName + '/logo_rip/logo.webp'
      elem.bannerImg = homeAssetUrl + elem.assetbundleName + '_rip/' + elem.assetbundleName + '.webp'
      elem.bgImg = assetUrl + elem.assetbundleName + '/screen_rip/bg.webp'
      elem.characterImg = assetUrl + elem.assetbundleName + '/screen_rip/character.webp'
    })
    return obj
  }

  static stamp() {
    const obj = getRepoContent('stamps.json')
    /**各々の追加情報 */
    const assetUrl = sekaiRes_asset + 'stamp/'
    obj.filter(elem => {
      elem.stampImg = assetUrl + elem.assetbundleName + '_rip/' + elem.assetbundleName + '/' + elem.assetbundleName + '.png'
    })
    return obj
  }

  static music() {
    const obj = getRepoContent('musics.json')
    const vocalObj = getRepoContent('musicVocals.json')
    const difficultiesObj = getRepoContent('musicDifficulties.json')
    /** ゼロ埋め NUM=値 LEN=桁数 */
    const zeroPadding = (NUM, LEN) => {
      return (Array(LEN).join('0') + NUM).slice(-LEN);
    }

    /**各々の追加情報 */
    const assetUrl = sekaiRes_asset + 'music/'
    const minioAssetUrl = minio_asset + 'music/'
    obj.filter(elem => {
      elem.jacketImg = assetUrl + 'jacket/' + elem.assetbundleName + '_rip/' + elem.assetbundleName + '.webp'
      elem.difficulties = difficultiesObj.filter(value => {
        value.chart = minioAssetUrl + 'charts/' + zeroPadding(value.musicId, 4) + '/' + value.musicDifficulty + '.svg'
        if (elem.id == value.musicId) return value
      })
      elem.vocal = vocalObj.filter(value => {
        value.mp3 = assetUrl + 'long/' + value.assetbundleName + '_rip/' + value.assetbundleName + '.mp3'
        value.flac = assetUrl + 'long/' + value.assetbundleName + '_rip/' + value.assetbundleName + '.flac'
        value.shortMp3 = assetUrl + 'short/' + value.assetbundleName + '_rip/' + value.assetbundleName + '_short.mp3'
        value.shortFlac = assetUrl + 'short/' + value.assetbundleName + '_rip/' + value.assetbundleName + '_short.flac'
        if (elem.id == value.musicId) {
          return value
        }
      })
    })
    return obj
  }

  static tip() {
    const obj = getRepoContent('tips.json')

    /**各々の追加情報 */
    const minioAssetUrl = minio_asset + 'comic/'
    obj.filter(elem => {
      if (elem.assetbundleName !== undefined) elem.comicImg = minioAssetUrl + 'one_frame_rip/' + elem.assetbundleName + '.webp'
    })
    return obj
  }

  static character() {
    const obj = getRepoContent('gameCharacters.json')
    const colorObj = getRepoContent('gameCharacterUnits.json')
    const profilesObj = getRepoContent('characterProfiles.json')

    const characterVoices = [
      { id: 21, cv: '藤田咲' },
      { id: 22, cv: '下田麻美' },
      { id: 23, cv: '下田麻美' },
      { id: 24, cv: '浅川悠' },
      { id: 25, cv: '拝郷メイコ' },
      { id: 26, cv: '風雅なおと' }
    ]

    /**各々の追加情報 */
    const assetUrl = sekaiRes_asset + 'character/'
    obj.filter(elem => {
      characterVoices.filter(value => {
        if (value.id == elem.id) elem.characterVoice = value.cv
      })
      colorObj.slice(0, 26).filter(value => {
        if (elem.id == value.gameCharacterId) {
          delete value.gameCharacterId
          return Object.assign(elem, value)
        }
      })

      profilesObj.filter(value => {
        if (elem.id == value.characterId) {
          delete value.characterId
          return Object.assign(elem, value)
        }
      })
      elem.characterImg = assetUrl + 'trim_rip/chr_trim_' + elem.id + '.webp'
      elem.horizNameImg = assetUrl + 'label_rip/chr_h_lb_' + elem.id + '.webp'
      elem.vertNameImg = assetUrl + 'label_vertical_rip/chr_v_lb_' + elem.id + '.webp'
      elem.characterSetImg = assetUrl + 'character_select_rip/chr_tl_' + elem.id + '.webp'
    })
    return obj
  }

  static unit() {
    const obj = getRepoContent('unitProfiles.json')
    const colorObj = getRepoContent('gameCharacterUnits.json')

    /**各々の追加情報 */
    const assetUrl = 'https://raw.githubusercontent.com/Sekai-World/sekai-viewer/main/public/images/jp/'
    const minioAssetUrl = minio_asset + 'unit/set_image_rip/'
    obj.filter(elem => {
      elem.membersId = []
      colorObj.slice(0, 26).filter(value => {
        if (elem.unit == value.unit) {
          elem.membersId.push(value.gameCharacterId)
        }
      })

      elem.logoImg = assetUrl + 'logol/logo_' + elem.unit + '.png'
      elem.logoOutlineImg = assetUrl + 'logol_outline/logo_' + elem.unit + '.png'
      elem.smallLogoOutlineImg = assetUrl + 'logos_outline/logo_' + elem.unit + '.png'
      elem.img = minioAssetUrl + elem.unit + '.webp'
      elem.shadowImg = minioAssetUrl + elem.unit + '_shadow.webp'
    })
    return obj
  }

  static card() {
    const obj = getRepoContent('cards.json')
    const charaObj = getRepoContent('gameCharacters.json')

    /**各々の追加情報 */
    const assetUrl = sekaiRes_asset + 'character/'
    const thumbnailUrl = sekaiRes_asset + 'thumbnail/chara_rip/'
    obj.filter(elem => {
      const chara = charaObj.filter(value => value.id === elem.characterId)[0]
      //MEIKO KAITO
      if (elem.characterId == 25 || elem.characterId == 26) elem.character = { id: chara.id, name: chara.givenName, ruby: chara.givenNameRuby }
      else elem.character = { id: chara.id, name: chara.firstName + chara.givenName, ruby: chara.firstNameRuby + chara.givenNameRuby }
      delete elem.cardParameters
      elem.iconImg = thumbnailUrl + elem.assetbundleName + '_normal.webp'
      elem.cardImg = assetUrl + 'member/' + elem.assetbundleName + '_rip/card_normal.webp'
      elem.cardTrimImg = assetUrl + 'member_cutout_trm/' + elem.assetbundleName + '_rip/normal.webp'

      if (elem.cardRarityType == 'rarity_3' || elem.cardRarityType == 'rarity_4') {
        elem.iconATImg = thumbnailUrl + elem.assetbundleName + '_after_training.webp'
        elem.cardATImg = assetUrl + 'member/' + elem.assetbundleName + '_rip/card_after_training.webp'
        elem.cardATTrimImg = assetUrl + 'member_cutout_trm/' + elem.assetbundleName + '_rip/after_training.webp'
      }
    })

    /**ドライブからアイコン名とIDをとってくる */
    const getDriveFilesId = folderId => {
      let data = []
      const folder = DriveApp.getFolderById(folderId)
      const files = folder.getFiles()
      while (files.hasNext()) {
        const file = files.next()
        const fileName = file.getName()
        const fileId = file.getId()
        let fileData = {
          name: fileName,
          id: fileId
        }
        data.push(fileData)
      }
      return data
    }

    const folderId = '1EHtgKybN5OuVtkOM9QFPI93t4siY_BWJ'
    const iconData = getDriveFilesId(folderId)
    obj.filter(elem => {
      for (let i in iconData) {
        if (iconData[i].name == elem.assetbundleName + '_normal.png') elem.fullIconImg = 'https://drive.google.com/uc?id=' + iconData[i].id + '&usp=sharing'
        if (iconData[i].name == elem.assetbundleName + '_after_training.png') elem.fullATIconImg = 'https://drive.google.com/uc?id=' + iconData[i].id + '&usp=sharing'
      }
    })
    return obj
  }

  static mission() {
    const obj = getRepoContent('honors.json')

    /**各々の追加情報 */
    const assetUrl = sekaiRes_asset + 'honor/'
    obj.filter(elem => {
      elem.honorImg = assetUrl + elem.assetbundleName + '_rip/degree_main.webp'
    })
    return obj
  }

  static gachaInfo() {
    const obj = getRepoContent('gachas.json')

    /**各々の追加情報 */
    const assetUrl = sekaiRes_asset + 'gacha/'
    const homeAssetUrl = sekaiRes_asset + 'home/banner/'

    obj.filter(elem => {
      elem.logoImg = assetUrl + elem.assetbundleName + '/logo_rip/logo.webp'
      elem.bannerImg = homeAssetUrl + 'banner_gacha' + elem.gachaInformation.gachaId + '_rip/banner_gacha' + elem.gachaInformation.gachaId + '.webp'
      elem.bgImg = assetUrl + elem.assetbundleName + '/screen_rip/texture/bg_gacha' + elem.gachaInformation.gachaId + '.webp'
      elem.futureImg = assetUrl + elem.assetbundleName + '/screen_rip/texture/img_gacha' + elem.gachaInformation.gachaId + '.webp'
    })
    return obj
  }

  static version() {
    const obj = getRepoContent('versions.json')
    obj.prskAPIVersion = '0.1.0 β'
    return obj
  }
}

const updateFile = (fileName) => {

  const setDriveFile = (fileId, content) => {
    const file = DriveApp.getFileById(fileId)
    const json = JSON.stringify(content)
    file.setContent(json)
  }

  let data
  switch (fileName) {
    case 'userInformations.json':
      data = GetData.info()
      setDriveFile(fileIds.userInformations,data)
      console.log(`[userInformations]をアップデートしました。`)
      break
    case 'events.json':
    case 'eventCards.json':
      data = GetData.event()
      setDriveFile(fileIds.events,data)
      console.log(`[events]をアップデートしました。`)
      break
    case 'stamps.json':
      data = GetData.stamp()
      setDriveFile(fileIds.stamps,data)
      console.log(`[stamps]をアップデートしました。`)
      break
    case 'musics.json':
      data = GetData.music()
      setDriveFile(fileIds.musics,data)
      console.log(`[musics]をアップデートしました。`)
      break
    case 'tips.json':
      data = GetData.tip()
      setDriveFile(fileIds.tips,data)
      console.log(`[tips]をアップデートしました。`)
      break
    case 'gameCharacters.json':
    case 'gameCharacterUnits.json':
    case 'characterProfiles.json':
      data = GetData.character()
      setDriveFile(fileIds.characterProfiles,data)
      console.log(`[characterProfiles]をアップデートしました。`)
      break
    case 'unitProfiles.json':
    case 'gameCharacterUnits.json':
      data = GetData.unit()
      setDriveFile(fileIds.unitProfiles,data)
      console.log(`[unitProfiles]をアップデートしました。`)
      break
    case 'cards.json':
    case 'gameCharacters.json':
      data = GetData.card()
      setDriveFile(fileIds.cards,data)
      console.log(`[cards]をアップデートしました。`)
      break
    case 'honors.json':
      data = GetData.mission()
      setDriveFile(fileIds.honors,data)
      console.log(`[honors]をアップデートしました。`)
      break
    case 'gachas.json':
      data = GetData.gachaInfo()
      setDriveFile(fileIds.gachas,data)
      console.log(`[gachas]をアップデートしました。`)
      break
    case 'versions.json':
      data = GetData.version()
      setDriveFile(fileIds.versions,data)
      console.log(`[versions]をアップデートしました。`)
      break
  }
}

const getCommitEvent = () => {
  const url = "https://api.github.com/repos/Sekai-World/sekai-master-db-diff/events";
  const gitHubService = getGitHubService()
  const options = {
    headers: { Authorization: 'Bearer ' + gitHubService.getAccessToken() }
  }
  const cache_key = 'sekai_db_latest_commit_id'
  const cache = CacheService.getScriptCache()
  // UrlFetchでデータを取得して、JSONデータをパースする
  const response = JSON.parse(UrlFetchApp.fetch(url, options))
  let commited_id = cache.get(cache_key)
  if (commited_id === null) {
    cache.put(cache_key, response[0].id)
    commited_id = response[0].id
  }
  const commited = response.findIndex(elem => elem.id === commited_id)
  if (commited !== 0) {
    const events = response.slice(0, commited).filter(event => event.type === "PushEvent")

    let results = []

    for (let i in events) {
      const commitUrl = events[i].payload.commits[0].url
      const commit = JSON.parse(UrlFetchApp.fetch(commitUrl, options))
      const patch = commit.files[0].patch
        .replace(/\n/g, '')
        .match(/\+  {.*?\}/g) //追加されたコンテンツのみにマッチ
      if (patch !== null) {
        const patch_add = patch.map(elem => elem.match(/\".*?\": .*?\,/g).map(elem2 => {
          const arr = elem2.slice(0, -1)
            .split(': ')
            .map(obj => obj.replace(/^"|"$/g, ''))
          const num = Number(arr[1])
          if (!Number.isNaN(num)) arr[1] = num
          return arr
        }))

        const added = {
          file_name: commit.files[0].filename,
          created_at: events[0].created_at,
          url: commit.url,
          raw_url: commit.files[0].raw_url,
          content_url: commit.files[0].contents_url,
          contents: Object.fromEntries(patch_add[0])
        }
        console.log(added)

        //post to Twitter_prskBOT
        const prskBot = 'https://script.google.com/macros/s/AKfycbxZemVFuAyXLUStVYXTFabJ3qt9_upebNreatLPRPffdxAY9hHWXTYzIySnj7LEXaXKZQ/exec'
        const headers = {
          "Content-Type": "application/json"
        }
        const options = {
          'headers': headers,
          'method': 'post',
          'payload': JSON.stringify(added)
        }
        const response = UrlFetchApp.fetch(prskBot, options).getContentText()
      }
      results.push(commit.files[0].filename)
    }
    const resultsFiltered = new Set(results)
    resultsFiltered.forEach(result => {
      updateFile(result)
    })
    cache.put(cache_key, response[0].id)
  }
  else { console.log('新しいコミットはありません') }
}
