export function checkFields(fieldsToCheck: any) {
  // 遍历对象的值
  for (const key in fieldsToCheck) {
    if (fieldsToCheck[key] === undefined || fieldsToCheck[key] === null || fieldsToCheck[key].trim() === '') {
      return false
    }
  }
  return true
}
