const escapeStr = '` \\ / \" \'';

const arr = [4, '2']; // Since it say elements in the array cannot be modified, Im not going to use Object.freeze

const obj = {
    str: 'Asanka',
    num: 38,
    bool: true,
    undef: undefined
  };
  
  const nested = Object.freeze ({
  arr: Object.freeze ([4, undefined, '2']),
  obj: Object.freeze ({
    str: 'Asanka',
    num: 38,
    bool: true
  })
});