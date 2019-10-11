"use strict";

let selected = window.getSelection();

let fragments = [];

//
// Tree<V> { inner: Map<(u32, u32), V> }
//
// AnnotatedElement is basically a wrapper for
// javascript object that contains :
//
// TagInfo { tag: Tag, children: Vec<TagInfo> }
//
// AnnotatedElement<V: Tag> {
//   selector: (get naive selector based on parent & id)
//   text: String,
//   children: Tree<V>
// }
//
//
// add event listener to window (on click)
// - fetch selection from window
// - fetch all ranges in selection
// - for each range convert into AnnotatedElement data structure.
//
// the tree are general json object where
// the key is tag name and value are the children or content
//
// <p>Hello world</p>
//
// {
//    tag: "p",
//    text: "Hello world",
//    children: [],
//    offset: { start: xx, end: yy}
// }
//
//
// Notes:
//
// - remember offset didn't count for tag or attribute string
//   just the content of element.
// - children can be
// - it need to have a selector of commonContainerAncestor
// - any selection are depends on commonContainerAncestor
//
//
// when selection happens
// get selected ranges from current window
// if user
//
let content = {};

for(let ii = 0; ii < selected.rangeCount; ii++) {
  let range = selected.getRangeAt(ii);
  fragments.push(range.cloneContents());
}
