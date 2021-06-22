import { lessons } from "../../../data/lessons";

export default function lessonHandler({ query: { id } }, res) {
  const filtered = lessons.filter((lesson) => lesson.id === id)
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Lesson with id: ${id} not found.` });
  }
}
