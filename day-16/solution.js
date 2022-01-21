function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let count = 0,
    curr = head;
  if (curr) count++;
  while (curr && curr.next) {
    curr = curr.next;
    count++;
  }
  return count;
}

function count(head, _data) {
  let count = 0,
    curr = head;
  if (curr && curr.data == _data) count++;
  while (curr && curr.next) {
    curr = curr.next;
    if (curr.data == _data) count++;
  }
  return count;
}
