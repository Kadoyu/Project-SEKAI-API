function rollGacha(data) {
  data.spinCount = Number(data.spinCount)
  if (data.id === undefined) return {error: '[roll]に対するid指定は必須です'}
  if (data.spinCount === undefined || data.spinCount === null) data.spinCount = 10
  const url = 'https://raw.githubusercontent.com/Sekai-World/sekai-master-db-diff/main/gachas.json'
  const cardUrl = 'https://raw.githubusercontent.com/Sekai-World/sekai-master-db-diff/main/cards.json'
  const json = JSON.parse(UrlFetchApp.fetch(url).getContentText())
  const cards = JSON.parse(UrlFetchApp.fetch(cardUrl).getContentText())
  const gacha = json.filter(elem => elem.id === data.id)[0]
  //console.log(gacha.gachaBehaviors)
  //const behavior = gacha.gachaBehaviors[0]
  const behavior = gacha.gachaBehaviors.filter(elem => elem.spinCount === data.spinCount)[0]
  const gachaRarityRates = gacha.gachaCardRarityRates
  const normalRates = gachaRarityRates.map(rate => rate['rate'])
  var guaranteedRates = [0, 100 - normalRates[2], normalRates[2]]
  //console.log(normalRates, guaranteedRates)
  const cardRarityTypeToRarity = { rarity_1: 1, rarity_2: 2, rarity_3: 3, rarity_4: 4, rarity_birthday: 0 }

  const rollTimes = behavior.spinCount;
  const rollResult = gachaRarityRates.map(() => 0);
  const normalSum = normalRates.reduce(
    (sum, curr) => [...sum, curr + (sum.slice(-1)[0] || 0)],
    []
  );
  const guaranteeSum = guaranteedRates.reduce(
    (sum, curr) => [...sum, curr + (sum.slice(-1)[0] || 0)],
    []
  );
  const rollableCards = gachaRarityRates.map((rate) =>
    gacha.gachaDetails
      .filter((gd) =>
        rate.cardRarityType
          ? cards.find((card) => card.id === gd.cardId)?.cardRarityType ===
          rate.cardRarityType
          : cards.find((card) => card.id === gd.cardId)?.rarity ===
          rate.rarity
      )
      .sort((a, b) => a.weight - b.weight)
  );
  const rollWeights = rollableCards.map((elem) =>
    elem?.map((_elem) => _elem.weight)
  );
  const weights = [rollWeights[0].length, rollWeights[1].length, -rollWeights[0].length - rollWeights[1].length]
  for (let i in gacha.gachaDetails) {
    weights[2] += gacha.gachaDetails[i].weight
  }
  const tmpGachaResult = [];
  const isOverRarity = behavior.gachaBehaviorType.startsWith("over_rarity");
  // const overRarity = isOverRarity
  //   ? behavior.gachaBehaviorType === "over_rarity_3_once"
  //     ? 3
  //     : 4
  //   : 0;
  let noOverRarityCount = 0;
  for (let i = 0; i < rollTimes; i++) {
    // console.log(i, rollTimes);
    if (i % 10 === 9 && isOverRarity && noOverRarityCount === 9) {
      // only roll 3* or 4*
      const roll = Math.random() * 100;
      const idx = guaranteeSum.findIndex((rate) => roll < rate);
      rollResult[idx] += 1;
      const weightArr = rollWeights[idx].reduce(
        (sum, curr) => [...sum, curr + (sum.slice(-1)[0] || 0)],
        []
      );
      const weightSum = weights[idx];
      const rand = Math.floor(Math.random() * weightSum);
      tmpGachaResult.push(
        rollableCards[idx][
        weightArr.filter((weight) => weight <= rand).length
        ]
      );
      noOverRarityCount = 0;
      continue;
    } else if (i % 10 === 0) {
      noOverRarityCount = 0;
    }
    const roll = Math.random() * 100;
    const idx = normalSum.findIndex((rate) => roll < rate);
    rollResult[idx] += 1;
    const weightArr = rollWeights[idx].reduce(
      (sum, curr) => [...sum, curr + (sum.slice(-1)[0] || 0)],
      []
    );
    const weightSum = weights[idx];
    const rand = Math.floor(Math.random() * weightSum);
    tmpGachaResult.push(
      rollableCards[idx][
      weightArr.filter((weight) => weight <= rand).length
      ]
    );

    if (isOverRarity &&
      (gachaRarityRates[idx].rarity ||
        cardRarityTypeToRarity[gachaRarityRates[idx].cardRarityType]) < 3
    ) noOverRarityCount += 1
  }
  return tmpGachaResult
}
