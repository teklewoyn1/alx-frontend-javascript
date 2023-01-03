export default function getListStudentIds(lst) {
  if (Array.isArray(lst)) {
    return list.map((obj) => obj.id);
  }

  return [];
}
