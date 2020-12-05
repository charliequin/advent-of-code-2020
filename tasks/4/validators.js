const valDates = (value, min, max) => value >= min && value <= max;

const valHeight = value => {
  const measurement = [
    {
      type: 'cm',
      min: 150,
      max: 193,
    },
    {
      type: 'in',
      min: 59,
      max: 76,
    },
  ];

  const getValue = str => {
    if (str.includes('cm')) {
      return 'cm';
    }

    if (str.includes('in')) {
      return 'in';
    }
  };

  if (getValue(value)) {
    const strLength = value.length;
    const index = value.indexOf(getValue(value));
    const length = value.substring(0, index);
    const metric = value.substring(index, strLength);

    return measurement.some(
      item => item.type === metric && length >= item.min && length <= item.max
    );
  }
};

const valHair = value => {
  const validation = new RegExp('^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$');
  return validation.test(value);
};

const valEye = value => {
  const validation = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
  return validation.some(item => item === value);
};

const valId = value => {
  const validation = new RegExp('^(?!0{3})[0-9]{9}$');
  return validation.test(value);
};

module.exports = { valDates, valHeight, valHair, valEye, valId };
