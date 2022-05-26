
/**アイコンの定期的なアップデート */
function iconUpdate() {
  const gitHubService = getGitHubService()
  const url = 'https://raw.githubusercontent.com/Sekai-World/sekai-master-db-diff/main/cards.json'
  const options = {
    headers: { Authorization: 'Bearer ' + gitHubService.getAccessToken() }
  }
  const obj = JSON.parse(UrlFetchApp.fetch(url, options).getContentText())

  const folderId = '1EHtgKybN5OuVtkOM9QFPI93t4siY_BWJ'
  const files = DriveApp.getFolderById(folderId).getFiles()

  const driveFiles = []

  while (files.hasNext()) {
    const file = files.next()
    const fileName = file.getName()
    driveFiles.push(fileName.slice(0, -4))
  }
  
  const result = []
  obj.filter(elem => {
    delete elem.cardParameters
    const indexElem = driveFiles.indexOf(elem.assetbundleName + '_normal')
    if (indexElem === -1) result.push(elem.id)

    if (elem.cardRarityType == 'rarity_3' || elem.cardRarityType == 'rarity_4') {
      const indexElemAT = driveFiles.indexOf(elem.assetbundleName + '_after_training')
      if (indexElemAT === -1) result.push(elem.id)
    }
  })
  console.log(result)
  new Set(result).forEach(id => {
    const target = obj.filter(elem => elem.id === id)[0]
    console.log(target)
    let fileName = target.assetbundleName + '_normal'
    let value = {
      icon: `https://sekai-res.dnaroma.eu/file/sekai-assets/thumbnail/chara_rip/${fileName}.png`,
      attr: target.attr,
      rarity: null, //0=birthday
      at: false //After Training
    }
    switch (target.cardRarityType) {
      case 'rarity_1':
        value.rarity = 1
        break
      case 'rarity_2':
        value.rarity = 2
        break
      case 'rarity_3':
        value.rarity = 3
        break
      case 'rarity_4':
        value.rarity = 4
        break
      case 'rarity_birthday':
        value.rarity = 0
        break
    }
    const presentaionId = '1Ruvay7C4NcyCBae_KFzAbgZpcaDgky4yYY9QuoRhwfI'

    const response = insertIcon(value,presentaionId)
    const fileUrl = convertPresentation_(presentaionId, response, 'png', 1, fileName)
    console.log(fileUrl.getUrl())

    if (target.cardRarityType === 'rarity_3' || target.cardRarityType === 'rarity_4') {
      fileName = target.assetbundleName + '_after_training'
      value.icon = `https://sekai-res.dnaroma.eu/file/sekai-assets/thumbnail/chara_rip/${fileName}.png`
      value.at = true
      const response = insertIcon(value,presentaionId)
      const fileUrl = convertPresentation_(presentaionId, response, 'png', 1, fileName)
      console.log(fileUrl.getUrl())
    }
  })
}

function maketest() {
  const value = {
    icon: 'https://sekai-res.dnaroma.eu/file/sekai-assets/thumbnail/chara_rip/res021_no022_after_training.png',
    attr: 'mysterious',
    rarity: 4, //0=birthday
    at: true //After Training
  }

  const id = '1Ruvay7C4NcyCBae_KFzAbgZpcaDgky4yYY9QuoRhwfI'
  const response = insertIcon(value, id)
  console.log(response)

  const fileUrl = convertPresentation_(id, response, 'png', 1)
  console.log(fileUrl.getUrl())
}


function insertIcon({ icon: icon, attr: attr, rarity: rarity, at: at }, presentaion_id = '1Ruvay7C4NcyCBae_KFzAbgZpcaDgky4yYY9QuoRhwfI') {
  let attrId
  switch (attr) {
    case 'cool':
      attrId = '1T_J5IOGIMviqtclP9RSx622wNf_4zVmm'
      break
    case 'cute':
      attrId = '184FAqwiBMnvqV6pVa5ySdgFnaWmnLfb-'
      break
    case 'happy':
      attrId = '1Ivodaeqb1cnC3Huq8YmB50Il7834nxmw'
      break
    case 'mysterious':
      attrId = '1BDiZUbqzeQgFs-ZzDv9EbbmtkBdZh7rE'
      break
    case 'pure':
      attrId = '1OXOkatcDonZJT7k5LmFoFAhrzQkgNcAS'
      break
    default:
      console.error(attr + ' is undefined.')
  }

  let frameId
  let raritySum
  switch (rarity) {
    case 1:
      frameId = '16DNCMGi1i007RdhVDCvyxSzDLs7duaMN'
      raritySum = 1
      break
    case 2:
      frameId = '1yLGEWB1f5wFrhQHzlIR4MF12lIKbsLl2'
      raritySum = 2
      break
    case 3:
      frameId = '1_jlmXJlKjglARXKhD03d7cTPRIB-DlXp'
      raritySum = 3
      break
    case 4:
      frameId = '10t-4bGw6nog6A_BnS7lqCZcwLGB518YE'
      raritySum = 4
      break
    case 0:
      frameId = '1cx82yK1-PISrS62sebCnyCbKmP-1KdZf'
      raritySum = 1
      break
    default:
      console.error('rarity is 0-4')
  }

  let starId
  switch (at) {
    case true:
      starId = '1UDKQsfBLNS4ptuV9flE11Y6yeri5ZLt8'
      break
    case false:
      starId = '1L97ceSqw3Mh2-ON_j3fEQqhsaqgTAiK4'
      break
    default:
      starId = '1L97ceSqw3Mh2-ON_j3fEQqhsaqgTAiK4'
  }
  if (rarity === 0) starId = '1vOnBQYNM4H2hsxFh0D0T-tUp42ztV8U8'

  const iconImg = {
    img: UrlFetchApp.fetch(icon).getBlob(),
    width: 280,
    height: 280,
    x: 16,
    y: 16
  }
  const frameImg = {
    img: DriveApp.getFileById(frameId).getBlob(),
    width: 312,
    height: 312,
    x: 0,
    y: 0
  }
  const attrImg = {
    img: DriveApp.getFileById(attrId).getBlob(),
    width: 70,
    height: 70,
    x: 2,
    y: 2
  }
  const starImg = {
    img: DriveApp.getFileById(starId).getBlob(),
    width: 56,
    height: 56,
    x: 20,
    y: 236
  }

  const imgArr = [iconImg, frameImg, attrImg]

  const presentation = SlidesApp.openById(presentaion_id)
  const slide = presentation.getSlides()[0]
  //前のオブジェクトをすべて削除
  for (let elem of slide.getPageElements()) elem.remove()

  for (let value of imgArr) {
    slide.insertImage(value.img)
      .setWidth(value.width * 0.75)//0.75=>ポイントからピクセルへ変換
      .setHeight(value.height * 0.75)
      .setLeft(value.x * 0.75)
      .setTop(value.y * 0.75)
  }

  //星の数
  for (let i = 0; i < raritySum; i++) {
    slide.insertImage(starImg.img)
      .setWidth(starImg.width * 0.75)
      .setHeight(starImg.height * 0.75)
      .setLeft((starImg.x + i * 55) * 0.75) //def=52
      .setTop(starImg.y * 0.75)
  }
  presentation.saveAndClose()

  return slide.getObjectId()
}

function convertPresentation_(presentation_id, page_id, format, slidesNumber, file_name = 'undefined') {
  format = format.toLowerCase();
  let ext = format;//ファイル名の拡張子
  switch (format) {
    case "pptx":
    case "odp":
    case "pdf":
    case "txt":
    case "png":
    case "svg":
      break;

    case "jpg":
    case "jpeg":
      format = "jpeg";
      ext = "jpg";
      break;

    default:
      format = "pptx";
      ext = "pptx"
      break;
  }

  const url = "https://docs.google.com/presentation/d/" + presentation_id + "/export/" + format + "?id=" + presentation_id + "&pageid=" + page_id;
  const options = {
    method: "get",
    headers: { "Authorization": "Bearer " + ScriptApp.getOAuthToken() },
    muteHttpExceptions: true
  };

  const response = UrlFetchApp.fetch(url, options)
  if (response.getResponseCode() === 200) {

    //フォルダIDを入れる　https://drive.google.com/drive/folders/この部分がフォルダID

    const folder = DriveApp.getFolderById("1EHtgKybN5OuVtkOM9QFPI93t4siY_BWJ");
    const presentaion = SlidesApp.openById(presentation_id);
    return folder.createFile(response.getBlob()).setName(file_name + '.' + ext);

  }//if
}//end