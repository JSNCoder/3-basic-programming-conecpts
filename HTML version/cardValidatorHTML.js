


function cardValidator (cardNumber) {
  cardNumberStr = cardNumber.toString()

  // 判断卡号长度
  if (cardNumberStr.length !== 16) {
    document.getElementById('result').innerHTML = `非 MASTER 或 VISA 卡号长度`
    return // console.log(`非 MASTER 或 VISA 卡号长度`)
  } else {
    document.getElementById('result').innerHTML = checkIssuer(cardNumberStr)
    return // console.log(checkIssuer(cardNumberStr))
  }

  // 判断发行者
  function checkIssuer (cardNumberStr) {
    if (Number(cardNumberStr[0]) === 5) {
      if(checkNum(cardNumberStr)) {
        return `合法的 Master Card`
      } else {
        return `卡号未通过验证`
      }
    } else if (Number(cardNumberStr[0]) === 4) {
      if(checkNum(cardNumberStr)){
        return `合法的 VISA Card`
      } else {
        return `卡号未通过验证`
      }
    } else {
      return `发行者非 MASTER 或 VISA`
    }
  }

  // 判断检查码
  function checkNum (cardNumberStr) {
    let checkNumber = 10 - ((evenNumSum(cardNumberStr) + oddNumSum(cardNumberStr)) % 10)
    if (checkNumber === 10) checkNumber = 0
    if (checkNumber === Number(cardNumberStr[15])) return true
    return false
  }

  // 计算偶数位总和
  function evenNumSum (cardNumberStr) {
    let evenNumberSum = 0
    for(let i=1; i<cardNumberStr.length-1; i+=2){
      evenNumberSum += Number(cardNumberStr[i])
    }
    return evenNumberSum
  }

  // 计算奇数位总和
  function oddNumSum (cardNumberStr) {
    let oddNumberSum = 0
    for(let i=0; i<cardNumberStr.length-1; i+=2){
      let oddNumber = Number(cardNumberStr[i]) * 2
      if (oddNumber >= 10){
        oddNumber -= 9
      }
      oddNumberSum += oddNumber
    }
    return oddNumberSum
  }

}
