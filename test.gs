function testttt() {
  const contents = {
    parameter: {
      authToken: 'HoshinoIchika',
      data: 'event',
      sort: 'random',
      id: '3',
      search: 'null'
    }
  }
  console.log(contents.parameter)
  const response = doGet(contents)
  console.log(response)
}

const getCommitEventTEST = () => {
  const url = "https://api.github.com/repos/Sekai-World/sekai-master-db-diff/events";
  const gitHubService = getGitHubService()
  const options = {
    headers: { Authorization: 'Bearer ' + gitHubService.getAccessToken() }
  }
  const cache_key = 'sekai_db_latest_commit_id'
  const cache = CacheService.getScriptCache()
  // UrlFetchでデータを取得して、JSONデータをパースする
  const response = JSON.parse(UrlFetchApp.fetch(url, options))

  //前回のコミットID
  let commited_id = cache.get(cache_key)

  //もしキャッシュがなかったら最新のコミットIDを設定
  if (commited_id === null) {
    cache.put(cache_key, response[0].id)
    commited_id = response[0].id
  }
  //コミットIDの比較
  const commited = response.findIndex(elem => elem.id === commited_id)

  if (commited !== 0) {
    const events = response.slice(0, commited).filter(event => event.type === "PushEvent")
    let commitedFiles = []

    for (let i in events) {
      const commitUrl = events[i].payload.commits[0].url
      const commit = JSON.parse(UrlFetchApp.fetch(commitUrl, options))
      //console.log(commit)
      commitedFiles.push(commit.files[0].filename)
      let patch = commit.files[0].patch
      if (patch !== undefined) {
        patch = patch.replace(/\n/g, '').match(/\+  {.*?\}/g) //追加されたコンテンツのみにマッチ
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
        }
      }
    }
    cache.put(cache_key, response[0].id)

    new Set(commitedFiles).forEach(elem => console.log(elem))
  }
  else { console.log('新しいコミットはありません') }
}

function setCacheTEST() {
  const cache_key = 'sekai_db_latest_commit_id'
  CacheService.getScriptCache().put(cache_key, '22115836116')
}