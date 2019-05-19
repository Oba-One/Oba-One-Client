import hash from 'object-hash';

const md5 = itemToHash =>
  hash(itemToHash, {
    algorithm: 'md5',
    respectType: false,
    respectFunctionProperties: false,
  });

const deeplyCompareProps = (prevProps, nextProps) =>
  md5(prevProps) === md5(nextProps);

export default deeplyCompareProps;