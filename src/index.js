/**
 * @file 解析命令中的参数
 * @author svon.me@gmail.com
 */

// 判断是否是参数名
const isKey = function(value) {
  if (/^-+/.test(value)) {
    return true;
  }
  return false;
}

const getKey = function(value) {
  return String(value).replace(/^-+/, '')
}

const getValue = function(value) {
  if (value === 'true') {
    return true;
  } else if (value === 'false') {
    return false;
  }
  return value || null;
}

const getArgvs = function() {
  const argv = [].concat(process.argv).slice(1);
  const data = {}
  for (let i = 0, size = argv.length; i < size; i++) {
    const key = String(argv[i]);
    if (isKey(key)) {
      const value = String(argv[i + 1]);
      const name = getKey(key)
      if (isKey(value)) {
        data[name] = true;
      } else {
        data[name] = getValue(value);
        i += 1;
      }
    }
  }
  return data
}

const argvs = getArgvs()

module.exports = argvs