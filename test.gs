function testttt() {
  const contents = {
    parameter: {
      authToken: 'HoshinoIchika',
      data: 'event',
      sort: 'random',
      id: 'null',
      search: 'セカイ 桜'
    }
  }
  console.log(contents.parameter)
  const response = doGet(contents)
  console.log(response)
}