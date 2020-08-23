/** Helper function for creating bem class names
const classBuilder = makeBem(block1, block2, blockN, {separators})
returns function that takes an element and modifier set that returns BEM class names.
Each block argument must be a string. This instance of class builder will create class names for all blocks given.
The default separators are e: '-', m: '--'
E.g.
  const listItemBuilder = makeBem('listItem', 'pet')
  listItemBuilder();
      // returns "listItem pet"
  listItemBuilder(null, 'selected');
      // returns "listItem listItem--selected pet pet--selected"
  listItemBuilder('name', ['a', 'b']);
      // returns "listItem-name listItem-name--a listItem-name--b pet-name pet-name--a pet-name--b"
  listItemBuilder('header', {inverted: true, striped: true})
      // returns "listItem-header listItem0header--inverted listItem-header--striped pet-header pet-header--inverted pet-header--striped"

You can also override the separators, e.g.
const otherBuilder = makeBem('list-item', {e: '__' });
otherBuilder('header', 'striped')
      // returns 'list-item__header list-item__header--striped'
 */
const makeBem = (...args) => {
  let e = '-';
  let m = '--';
  const blocks = [];
  args.forEach((arg) => {
    if (typeof (arg) === 'string') blocks.push(arg);
    if (typeof (arg) === 'object') {
      e = arg.e || e;
      m = arg.m || m;
    }
  });
  return (element, modifiers) => {
    let classRoot = [...blocks];
    if (element) classRoot = classRoot.map(root => `${root}${e}${element}`);
    let modList = [];
    if (modifiers) {
      if (typeof (modifiers) === 'string') {
        modList.push(modifiers.toString().trim());
      } else if (Array.isArray(modifiers)) {
        modList = modifiers.map(mod => mod.toString().trim());
      } else if (typeof (modifiers) === 'object') {
        const keys = Object.keys(modifiers);
        keys.forEach((key) => {
          if (modifiers[key]) {
            modList.push(key.toString().trim());
          }
        });
      }
    }
    const classes = [];
    classRoot.forEach((b) => {
      classes.push(b);
      modList.forEach((mod) => {
        classes.push(`${b}${m}${mod}`);
      });
    });
    return classes.join(' ');
  };
};

export default makeBem;