function stringify(list) {
  let curr = list,
    nodes = [];

  if (!curr) return "null";

  // Add linkedlist head
  nodes.push(curr.data);

  // Traverse list
  while (curr.next) {
    curr = curr.next;
    nodes.push(curr.data);
  }

  // Append null pointer
  nodes.push("null");

  // Join nodes with seperator
  return nodes.join(" -> ");
}
