import { lessons } from "../../../data/lessons";

export default function handler(req, res) {
  res.status(200).json(lessons);
}
