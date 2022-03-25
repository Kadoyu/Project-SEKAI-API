
/**情報をアップデートしてドライブのテキストに上書き */
function updateTxt() {
  url = 'https://raw.githubusercontent.com/Sekai-World/sekai-master-db-diff/main/versions.json'
  if (isUpdatedURL(url) == ! null) {



    const getInfo = () => {
      const url = 'https://raw.githubusercontent.com/Sekai-World/sekai-master-db-diff/main/userInformations.json'
      const json = UrlFetchApp.fetch(url).getContentText()
      const obj = JSON.parse(json)

      /**各々の追加情報 */
      for (let i in obj) {
        if (obj[i].browseType == 'internal') {
          obj[i].path = 'https://production-web.sekai.colorfulpalette.org/' + obj[i].path
        }
      }
      return obj
    }

    const getEvent = () => {
      const url = 'https://raw.githubusercontent.com/Sekai-World/sekai-master-db-diff/main/events.json'
      const json = UrlFetchApp.fetch(url).getContentText()
      const obj = JSON.parse(json)

      /**各々の追加情報 */
      const assetUrl = 'https://sekai-res.dnaroma.eu/file/sekai-assets/event/'
      const homeAssetUrl = 'https://sekai-res.dnaroma.eu/file/sekai-assets/home/banner/'
      obj.filter(elem => {
        elem.logoImg = assetUrl + elem.assetbundleName + '/logo_rip/logo.webp'
        elem.bannerImg = homeAssetUrl + elem.assetbundleName + '_rip/' + elem.assetbundleName + '.webp'
        elem.bgImg = assetUrl + elem.assetbundleName + '/screen_rip/bg.webp'
        elem.characterImg = assetUrl + elem.assetbundleName + '/screen_rip/character.webp'
      })
      return obj
    }

    const getStamp = () => {
      const url = 'https://raw.githubusercontent.com/Sekai-World/sekai-master-db-diff/main/stamps.json'
      const json = UrlFetchApp.fetch(url).getContentText()
      const obj = JSON.parse(json)

      /**各々の追加情報 */
      const assetUrl = 'https://sekai-res.dnaroma.eu/file/sekai-assets/stamp/'
      obj.filter(elem => {
        elem.stampImg = assetUrl + elem.assetbundleName + '_rip/' + elem.assetbundleName + '/' + elem.assetbundleName + '.png'
      })
      return obj
    }

    const getMusic = () => {
      const url = 'https://raw.githubusercontent.com/Sekai-World/sekai-master-db-diff/main/musics.json'
      const vocalUrl = 'https://raw.githubusercontent.com/Sekai-World/sekai-master-db-diff/main/musicVocals.json'
      const difficultiesUrl = 'https://raw.githubusercontent.com/Sekai-World/sekai-master-db-diff/main/musicDifficulties.json'
      const obj = JSON.parse(UrlFetchApp.fetch(url).getContentText())
      const vocalObj = JSON.parse(UrlFetchApp.fetch(vocalUrl).getContentText())
      const difficultiesObj = JSON.parse(UrlFetchApp.fetch(difficultiesUrl).getContentText())

      /**各々の追加情報 */
      const assetUrl = 'https://sekai-res.dnaroma.eu/file/sekai-assets/music/'
      const minioAssetUrl = 'https://minio.dnaroma.eu/sekai-assets/music/'
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

    const getTip = () => {
      const url = 'https://raw.githubusercontent.com/Sekai-World/sekai-master-db-diff/main/tips.json'
      const obj = JSON.parse(UrlFetchApp.fetch(url).getContentText())

      /**各々の追加情報 */
      const minioAssetUrl = 'https://minio.dnaroma.eu/sekai-assets/comic/'
      obj.filter(elem => {
        if (elem.assetbundleName !== undefined) elem.comicImg = minioAssetUrl + 'one_frame_rip/' + elem.assetbundleName + '.webp'
      })
      return obj
    }

    const getCharacter = () => {
      const url = 'https://raw.githubusercontent.com/Sekai-World/sekai-master-db-diff/main/gameCharacters.json'
      const colorUrl = 'https://raw.githubusercontent.com/Sekai-World/sekai-master-db-diff/main/gameCharacterUnits.json'
      const profilesUrl = 'https://raw.githubusercontent.com/Sekai-World/sekai-master-db-diff/main/characterProfiles.json'
      const obj = JSON.parse(UrlFetchApp.fetch(url).getContentText())
      const colorObj = JSON.parse(UrlFetchApp.fetch(colorUrl).getContentText())
      const profilesObj = JSON.parse(UrlFetchApp.fetch(profilesUrl).getContentText())

      /**各々の追加情報 */
      const assetUrl = 'https://sekai-res.dnaroma.eu/file/sekai-assets/character/'
      obj.filter(elem => {
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

    const getUnit = () => {
      const url = 'https://raw.githubusercontent.com/Sekai-World/sekai-master-db-diff/main/unitProfiles.json'
      const colorUrl = 'https://raw.githubusercontent.com/Sekai-World/sekai-master-db-diff/main/gameCharacterUnits.json'
      const obj = JSON.parse(UrlFetchApp.fetch(url).getContentText())
      const colorObj = JSON.parse(UrlFetchApp.fetch(colorUrl).getContentText())

      /**各々の追加情報 */
      const assetUrl = 'https://raw.githubusercontent.com/Sekai-World/sekai-viewer/main/public/images/jp/'
      const minioAssetUrl = 'https://minio.dnaroma.eu/sekai-assets/unit/set_image_rip/'
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

    const getCard = () => {
      const url = 'https://raw.githubusercontent.com/Sekai-World/sekai-master-db-diff/main/cards.json'
      const obj = JSON.parse(UrlFetchApp.fetch(url).getContentText())

      /**各々の追加情報 */
      const assetUrl = 'https://sekai-res.dnaroma.eu/file/sekai-assets/character/'
      const thumbnailUrl = 'https://sekai-res.dnaroma.eu/file/sekai-assets/thumbnail/chara_rip/'
      obj.filter(elem => {
        elem.iconImg = thumbnailUrl + elem.assetbundleName + '_normal.webp'
        elem.cardImg = assetUrl + 'member/' + elem.assetbundleName + '_rip/card_normal.webp'
        elem.cardTrimImg = assetUrl + 'member_cutout_trm/' + elem.assetbundleName + '_rip/normal.webp'

        if (elem.cardRarityType == 'rarity_3' || elem.cardRarityType == 'rarity_4') {
          elem.iconATImg = thumbnailUrl + elem.assetbundleName + '_after_training.webp'
          elem.cardATImg = assetUrl + 'member/' + elem.assetbundleName + '_rip/card_after_training.webp'
          elem.cardATTrimImg = assetUrl + 'member_cutout_trm/' + elem.assetbundleName + '_rip/after_training.webp'
        }
      })

      const folderId = '1EHtgKybN5OuVtkOM9QFPI93t4siY_BWJ'
      const iconData = getDriveFilesId(folderId)
      obj.filter(elem => {
        for (i in iconData) {
          if (iconData[i].name == elem.assetbundleName + '_normal.png') elem.fullIconImg = 'https://drive.google.com/uc?id=' + iconData[i].id + '&usp=sharing'
          if (iconData[i].name == elem.assetbundleName + '_after_training.png') elem.fullATIconImg = 'https://drive.google.com/uc?id=' + iconData[i].id + '&usp=sharing'
        }
      })
      return obj
    }

    const getMission = () => {
      const url = 'https://raw.githubusercontent.com/Sekai-World/sekai-master-db-diff/main/honors.json'
      const obj = JSON.parse(UrlFetchApp.fetch(url).getContentText())

      /**各々の追加情報 */
      const assetUrl = 'https://sekai-res.dnaroma.eu/file/sekai-assets/honor/'
      obj.filter(elem => {
        elem.honorImg = assetUrl + elem.assetbundleName + '_rip/degree_main.webp'
      })
      return obj
    }

    const getGachaInfo = () => {
      const url = 'https://raw.githubusercontent.com/Sekai-World/sekai-master-db-diff/main/gachas.json'
      const obj = JSON.parse(UrlFetchApp.fetch(url).getContentText())

      /**各々の追加情報 */
      const assetUrl = 'https://sekai-res.dnaroma.eu/file/sekai-assets/gacha/'
      const homeAssetUrl = 'https://sekai-res.dnaroma.eu/file/sekai-assets/home/banner/'

      obj.filter(elem => {
        elem.logoImg = assetUrl + elem.assetbundleName + '/logo_rip/logo.webp'
        elem.bannerImg = homeAssetUrl + 'banner_gacha' + elem.gachaInformation.gachaId + '_rip/banner_gacha' + elem.gachaInformation.gachaId + '.webp'
        elem.bgImg = assetUrl + elem.assetbundleName + '/screen_rip/texture/bg_gacha' + elem.gachaInformation.gachaId + '.webp'
        elem.futureImg = assetUrl + elem.assetbundleName + '/screen_rip/texture/img_gacha' + elem.gachaInformation.gachaId + '.webp'
      })
      return obj
    }

    const getVersion = () => {
      const url = 'https://raw.githubusercontent.com/Sekai-World/sekai-master-db-diff/main/versions.json'
      const obj = JSON.parse(UrlFetchApp.fetch(url).getContentText())
      obj.prskAPIVersion = '0.0.0 β'
      return obj
    }





    const updateFile = (fileId, content) => {
      const file = DriveApp.getFileById(fileId)
      const json = JSON.stringify(content)
      file.setContent(json)
    }

    /**ドライブからアイコン名とIDをとってくる */
    function getDriveFilesId(folderId) {
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

    /** ゼロ埋め NUM=値 LEN=桁数 */
    function zeroPadding(NUM, LEN) {
      return (Array(LEN).join('0') + NUM).slice(-LEN);
    }

    updateFile(fileIds.userInformations, getInfo())
    updateFile(fileIds.events, getEvent())
    updateFile(fileIds.stamps, getStamp())
    updateFile(fileIds.musics, getMusic())
    updateFile(fileIds.tips, getTip())
    updateFile(fileIds.characterProfiles, getCharacter())
    updateFile(fileIds.unitProfiles, getUnit())
    updateFile(fileIds.cards, getCard())
    updateFile(fileIds.honors, getMission())
    updateFile(fileIds.gachas, getGachaInfo())
    updateFile(fileIds.versions, getVersion())


    /**更新をメールでお知らせ*/
    const recipient = 'kadoyu10@gmail.com'
    const subject = '【prskDBAPI】DB更新完了のお知らせ'
    const recipientName = 'prskDataBaseAPI'
    const body = `${recipientName}\n` + '\nデータベースが更新されました。\nDrive：https://drive.google.com/drive/folders/104VHEklUV0qQvjTiCamRenYeVC1pSYB5?usp=sharing\n\n' + 'Google Apps Script'
    GmailApp.sendEmail(recipient, subject, body)

  }
  else console.log('更新の必要なし')
}

function isUpdatedURL(url) {
  const html = UrlFetchApp.fetch(url).getContentText();
  //HTML文字列の保存．GASのキャッシュ機能．3600秒間保存する．
  const catche = CacheService.getScriptCache();
  const beforeHtmlBody = catche.get(url);
  catche.put(url, html, 3600);
  //前と変わってないまたは初めての確認時はNULLを返す．更新されてたらURLを返す.
  return (beforeHtmlBody == html || beforeHtmlBody == null) ? null : url;
}