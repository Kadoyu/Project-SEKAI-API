//Driveのファイルid@ https://drive.google.com/drive/folders/104VHEklUV0qQvjTiCamRenYeVC1pSYB5?usp=sharing
const fileIds = {
  userInformations: '1-UfUHB2VxgTm05BjQgxxClq9Xd5YxdcZ',
  events: '1NbDVZ1K2UYoZx4C3ZalUtbt4a1bYtWY-',
  stamps: '1HAGk-9YOjZ2c_w76I1vugEzeDO5OqjvC',
  musics: '1xsU6mTQkvgEGqSsXUaC0nE0pK4c0LGX-',
  tips: '1BeAACayVN2GCFdxO2JOESkUbKoRz9V4E',
  characterProfiles: '1H_VuQvlg_AehL_qAXEsGo_oBDxAYhU5Y',
  unitProfiles: '1zm5qieChyN_2qy47eXW3Yab7NGfAQW1K',
  cards: '1tO3_-Ae8sj8JQWgue_D_C4OwCLnpSA8n',
  skils: '1gMUhx4jbvIaw-vsXqx_sUYANoV2AVgo6',
  honors: '1LvOKXSF23_Kf7X5Ya0W5b_i9XXHuvFRZ',
  gachas: '1jBAHOMW9YM8p0cS4Y-daBT4lo_2oCPVw',
  versions: '141WTGhgct8DHzBQXDlIZDjK0r9-HXDrx'
}


/**
 * レスポンスを作成して返します
 * @param {*} content
 * @returns {TextOutput}
 */
function response(content) {
  const res = ContentService.createTextOutput()
  res.setMimeType(ContentService.MimeType.JSON)
  res.setContent(JSON.stringify(content))
  return res
}

/**
 * アプリにPOSTリクエストが送信されたとき実行されます
 * @param {Event} e
 * @returns {TextOutput}
 */
function doGet(e) {
  //contents = e
  let contents = e.parameter

  if (contents.id !== undefined && typeof contents.id !== 'number') {
    if (contents.id === 'null') contents.id = null
    else contents.id = parseFloat(contents.id)
  }

  if (contents.spinCount !== undefined && typeof contents.spinCount !== 'number') {
    if (contents.id === 'null') contents.id = null
    else contents.id = parseFloat(contents.id)
  }

  const authToken = PropertiesService.getScriptProperties().getProperty('authToken') || ''

  if (contents.authToken !== authToken) {
    return response({ error: '認証に失敗しました' })
  }

  let result
  try {
    result = onGet(contents)
    if (!result.length && result instanceof Array) result = { error: '各当のデータは見つかりませんでした' }
    console.log(result)
  }
  catch (e) {
    result = { error: e }
    console.error(result)
  }

  return response(result)
}


function isValid(option) {
  const keys = ['data']
  for (let key of keys) {
    if (option[key] === undefined) return false
  }
  if (option.id !== undefined && typeof option.id !== 'number') {
    if (option.id === null) return true
    else return false
  }
  return true
}

function onGet(option) {
  if (!isValid(option)) {
    return {
      error: '正しい形式で入力してください'
    }
  }

  /**検索用*/
  if (option.search !== undefined) {
    //カナの場合ひらに変換
    const searchData = kanaToHira(option.search)
    //スペースでsplit
    option.search = searchData.replace('　', ' ').split(' ')
  }

  let fileId
  switch (option.data) {
    case 'info':
      fileId = fileIds.userInformations
      return getText(fileId, option)
    case 'event':
      fileId = fileIds.events
      return getText(fileId, option)
    case 'stamp':
      fileId = fileIds.stamps
      return getText(fileId, option)
    case 'music':
      fileId = fileIds.musics
      return getText(fileId, option)
    case 'tip':
      fileId = fileIds.tips
      return getText(fileId, option)
    case 'character':
      fileId = fileIds.characterProfiles
      return getText(fileId, option)
    case 'unit':
      fileId = fileIds.unitProfiles
      return getText(fileId, option)
    case 'card':
      fileId = fileIds.cards
      return getText(fileId, option)
    case 'mission':
      fileId = fileIds.honors
      return getText(fileId, option)
    case 'gacha':
      fileId = fileIds.gachas
      return getText(fileId, option)
    case 'roll':
      return rollGacha(option)
    case 'version':
      fileId = fileIds.versions
      return getText(fileId, option)
    default:
      return {
        error: 'dataを指定してください(GitHub:https://github.com/Kadoyu/Project-SEKAI-API)'
      }
  }
}

/**GoogleDriveからテキストを取得 @ https://drive.google.com/drive/folders/104VHEklUV0qQvjTiCamRenYeVC1pSYB5?usp=sharing*/
function getText(fileId, data) {
  const content = DriveApp.getFileById(fileId)
    .getBlob()
    .getDataAsString('utf-8')
  //.replace(/\r?\n/g, '')
  const obj = JSON.parse(content)
  return search(obj, data)
}

/**検索 */
function search(obj, data) {
  if (data.search !== undefined) {
    if (data.search == 'null') return sort(obj, data)
    const result = []
    for (value in obj) {
      for (i in data.search) {
        const arr = Object.values(obj[value]).join(' ').toLowerCase()
        if (kanaToHira(arr).match(data.search[i].toLowerCase())) result.push(obj[value])
      }
    }
    if (data.id === undefined || data.id === null) return sort(result, data)
    else return sort(result.filter(elem => elem.id === data.id), data)
  }

  if (data.id === undefined || data.id === null) {
    return sort(obj, data)
  }
  else {
    return sort(obj.filter(elem => elem.id === data.id), data)
  }
}


function sort(obj, data) {
  switch (data.sort) {
    case 'ascending':
    case undefined:
      return amount(obj, data)
    case 'descending':
      return amount(obj.reverse(), data)
    case 'random':
      return amount(arrayShuffle(obj), data)
  }
}

function amount(obj, data) {
  if (!Array.isArray(obj)) return obj
  switch (data.amount) {
    case 'all':
      return obj
    case undefined:
      return obj.slice(0, 5)
    default:
      const slicedObj = obj.slice(0, data.amount)
      return slicedObj
  }
}

/**配列をランダム化 */
function arrayShuffle(array) {
  for (var i = (array.length - 1); 0 < i; i--) {

    // 0〜(i+1)の範囲で値を取得
    var r = Math.floor(Math.random() * (i + 1));

    // 要素の並び替えを実行
    var tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;
}

/**カタカナをひらがなに変換 */
function kanaToHira(str) {
  return str.replace(/[\u30a1-\u30f6]/g, function (match) {
    var chr = match.charCodeAt(0) - 0x60;
    return String.fromCharCode(chr);
  });
}

/**ひらがなをカタカナに変換 */
function hiraToKana(str) {
  return str.replace(/[\u3041-\u3096]/g, function (match) {
    var chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
}