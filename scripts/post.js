fetch('https://apigenerator.dronahq.com/api/quYLVE6T/Jogos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    timeA: 'Brasil',
    timeB: 'Argentina',
    data: '29/12/2022',
    gols: {
      timeA: 2,
      TimeB: 0
    },
    fase: 'Final'
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
