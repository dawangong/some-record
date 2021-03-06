const transformData = originData => {
  if (!originData || originData.length === 0) return;

  for (let i = 0; i < originData.length; i++) {
    for (let j = 0; j < originData.length; j++) {
      if (originData[i].id === originData[j].pid) {
        originData[i].childern = originData[i].childern || [];
        originData[i].childern.push(originData[j]);
      }
    }
  }

  return originData.find(item => item.id === 0);
};

module.exports = {
  transformData
};
